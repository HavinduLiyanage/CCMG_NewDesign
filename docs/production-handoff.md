# CCMG production handoff

The public site and CMS deploy as two separate Vercel projects from this one repository. The public site remains a Vite single-page app; the CMS is a Node / Payload application with Neon Postgres.

## Current Vercel domains (before custom-domain migration)

- Public website: `https://ccmg-new-design.vercel.app`
- CMS: `https://ccmg-cms-seven.vercel.app/admin`
- Public Production variables: `VITE_CMS_URL=https://ccmg-cms-seven.vercel.app` and `VITE_FORMSPREE_FORM_ID=mwlkanoy`.
- CMS Production URL: `NEXT_PUBLIC_SERVER_URL=https://ccmg-cms-seven.vercel.app`.
- CMS Production origins: `CMS_CORS_ORIGINS=https://ccmg-new-design.vercel.app,https://ccmg-cms-seven.vercel.app`.

Preserve any other deliberately configured exact origins. Environment-variable changes require a new deployment. Keep existing working `DATABASE_URL`, `PAYLOAD_SECRET`, and `BLOB_READ_WRITE_TOKEN`; confirm the token belongs to the CMS's connected storage. Do not rerun owner creation, migrations, or seeding merely because the site is being connected: the deployed CMS already has an account and content. Inspect migration status and content first.

Use Production settings for this verification. Preview CMS deployments should use a separate Neon branch and storage configuration; do not automatically share production write credentials with all previews.

The CMS build script now generates the Payload import map before `next build`. Vercel can use `npm run build`. An existing `npm run generate:importmap && npm run build` override is safe but generates the map twice.

Run `npm run verify:production` from the repository root. This checks published APIs, exact-origin CORS, populated globals, and anonymous denial for users/contact submissions, without signing in or changing data. Optional arguments: `npm run verify:production -- https://cms.example.com https://www.example.com`. Passing checks does not yet prove the public site's build uses the right URL: verify its browser Network requests and a reversible published edit, then restore that edit.

Because the public site falls back to bundled content when any CMS request fails, a functioning homepage is not sufficient evidence of live CMS integration. Check all seven content requests. New CMS content loads on page refresh, not as a live push to an already-open tab.

## 1. Public website project

- **Root directory:** repository root (`.`)
- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variable:** `VITE_CMS_URL=https://cms.colomboconsultants.lk`
- **Domain:** `www.colomboconsultants.lk` (and the preferred apex-domain redirect)

`VITE_CMS_URL` is intentionally public: it only points visitors at Payload's read-only published-content API. Do not add database credentials, Payload secrets, or storage tokens to this project.

## 2. CMS project

- **Root directory:** `cms`
- **Framework:** Next.js
- **Build command:** `npm run build`
- **Start command:** `npm run start`
- **Domain:** `cms.colomboconsultants.lk`

Set these values in Vercel's encrypted environment-variable settings for Production and Preview as appropriate:

```text
DATABASE_URL=<Neon pooled connection string>
PAYLOAD_SECRET=<unique 32+ character secret>
NEXT_PUBLIC_SERVER_URL=https://cms.colomboconsultants.lk
CMS_CORS_ORIGINS=https://www.colomboconsultants.lk,https://colomboconsultants.lk,https://cms.colomboconsultants.lk
BLOB_READ_WRITE_TOKEN=<Vercel Blob token automatically supplied after connecting the Blob store>
```

Never add `CMS_BOOTSTRAP_OWNER_*` or `CMS_SEED_CONFIRM` to the deployment environment after setup. They are one-time local administration tools, not runtime configuration.

The public-site project also needs `VITE_FORMSPREE_FORM_ID=mwlkanoy`. The ID is safe to expose; the recipient mailbox remains configured privately in Formspree.

## 3. Database and media

Run the committed Payload migration against Neon before the first CMS production deployment:

```powershell
cd cms
npm run migrate
```

The current `cms/media/` directory is for local review only. The CMS is configured for Vercel Blob in production. In Vercel, open **Storage**, create a Blob store named `ccmg-media`, and connect it to the **CMS project only**. Vercel supplies `BLOB_READ_WRITE_TOKEN` automatically. The adapter sends uploads directly from the CMS browser to Blob and uses randomized file suffixes to prevent same-name collisions. Do not expose that token to the public Vite project.

Before the first CMS production deployment, run `npm install` inside `cms` so `@payloadcms/storage-vercel-blob` is added to the committed lockfile. The dependency is intentionally matched to the current Payload 3.88 release.

## 4. Acceptance test

1. Sign in at `https://cms.colomboconsultants.lk/admin`.
2. Change the title or summary of a published service, project, partner, or insight.
3. Publish the change.
4. Refresh `https://www.colomboconsultants.lk` in a new private window.
5. Confirm the new content appears without redeploying the public website.
6. Upload a new image in **Media**, publish a service or project using it, then confirm the image URL is served from `*.public.blob.vercel-storage.com` and persists after a CMS redeploy.
7. Submit the public contact form, confirm `xeroleon15@gmail.com` receives the notification, and verify the submission in the Formspree dashboard.

If the CMS is temporarily unreachable, the public site deliberately uses the approved bundled fallback content instead of failing visibly.
