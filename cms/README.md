# CCMG Content CMS

This is a separate Payload CMS application for the existing Vite public site. It deliberately owns content and staff access only; it does not contain or alter the public site's visual layer.

## Content model

- Home page: hero, conversion copy, proof points, FAQs, featured case study, closing CTA.
- Site settings: company information, contact data, SEO defaults, LinkedIn.
- Services: six CCMG practice lines and expandable capabilities.
- Case studies: projects, galleries, metrics, metadata, and featured status.
- Insights: sustainability / ESG and advisory articles.
- Team members: biographies, portraits, and ordering.
- Partners: the approved collaboration network, ordered logo marks, and optional verified URLs.
- Media: all site imagery and documents.
- Contact submissions: staff-only inquiry records.

## Public enquiries

The public Vite contact form is handled by Formspree, which delivers enquiries to the CCMG mailbox configured in its dashboard. The CMS retains its private `Contact Submissions` collection for staff-created records or a future first-party contact workflow, but the Formspree integration does not expose database credentials or create records through Payload's public REST API.

## Security model

- The CMS is intended for cms.colomboconsultants.lk; the public Vite site remains at www.colomboconsultants.lk.
- Users are assigned one of four roles: Owner, Publisher, Editor, Viewer. CMS sessions expire after one hour and the account locks after five failed login attempts for fifteen minutes.
- Editors can create content and work in drafts; publishing belongs to Owners and Publishers.
- Unauthenticated requests are constrained to published documents. Drafts and submissions are staff-only.
- Public contact forms must use a dedicated, rate-limited server-side endpoint. They must never create records through the public Payload REST API.
- Keep PAYLOAD_SECRET, database credentials, and any storage credentials in the deployment secret manager only—not in this repository or the Vite browser bundle.
- Use a managed Postgres database, automatic encrypted backups, HTTPS, MFA/SSO at the identity/access layer, and strict CORS/CSRF origins in production.

## First deployment

1. Set the values in `.env.local` locally (or in the deployment secret manager for production) from `.env.example`. `DATABASE_URL` must be the Neon connection string and `PAYLOAD_SECRET` must be a unique high-entropy value.
2. Set `CMS_CORS_ORIGINS` to the exact public-site and CMS origins; production refuses to start without an allowlist.
3. Run `npm install`, then create and apply the initial migration before starting the CMS. The configuration deliberately disables automatic database schema pushes, including in local development, so the shared Neon database remains protected:

   ```bash
   npm run migrate:create -- ccmg-initial-schema
   npm run migrate
   npm run generate:types
   npm run generate:importmap
   ```
4. Provision the initial owner without exposing a registration route. Add the three `CMS_BOOTSTRAP_OWNER_*` values to the ignored `.env.local`, run the command, then delete those three lines immediately:

   ```powershell
   npm run bootstrap:owner
   ```

   Use a unique password of 16+ characters. Run this only from a protected terminal or deployment job, then remove the temporary bootstrap password from `.env.local` or the deployment environment.

5. Import the approved CCMG services, projects, insights, team, partner logos, globals, and media. Add `CMS_SEED_CONFIRM=ccmg` to `.env.local`, run the command, then remove that confirmation line. The command is safe to run again:

   ```powershell
   npm run seed
   ```

6. For a local review, run `npm run dev` and open `http://localhost:3000/admin`. In production, apply the reviewed migration, then use `npm run build` and `npm run start`; do not enable automatic schema push.

## Production handoff

- Commit the generated migration, import map, payload types, and `package-lock.json`. They are part of the repeatable CMS deployment.
- Deploy this `cms` folder as a separate Node / Next.js application. Set `NEXT_PUBLIC_SERVER_URL` to its final HTTPS URL and set `CMS_CORS_ORIGINS` to only the final public-site and CMS origins.
- The initial owner is deliberately a one-time bootstrap operation. After it has succeeded, remove `CMS_BOOTSTRAP_OWNER_*` values. Owners can create Publishers, Editors, and Viewers from the CMS instead.
- `cms/media/` is local development storage and is intentionally ignored. Before allowing production media uploads, configure an object-storage adapter (such as S3-compatible storage, R2, or Vercel Blob) so new images persist across deployments.
- Before deploying to Vercel, create a Blob store and connect it to the CMS Vercel project. This supplies `BLOB_READ_WRITE_TOKEN`; the configured storage adapter then persists uploads and sends larger files directly from the editor's browser to Blob.
- The Vite public site consumes approved static data only if the CMS is unavailable. Its normal content path is the CMS REST API, so published CMS edits appear without a public-site redeploy.
