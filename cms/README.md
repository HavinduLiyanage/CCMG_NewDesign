# CCMG Content CMS

This is a separate Payload CMS application for the existing Vite public site. It deliberately owns content and staff access only; it does not contain or alter the public site's visual layer.

## Content model

- Home page: hero, conversion copy, proof points, FAQs, featured case study, closing CTA.
- Site settings: company information, contact data, SEO defaults, LinkedIn.
- Services: six CCMG practice lines and expandable capabilities.
- Case studies: projects, galleries, metrics, metadata, and featured status.
- Insights: sustainability / ESG and advisory articles.
- Team members: biographies, portraits, and ordering.
- Media: all site imagery and documents.
- Contact submissions: staff-only inquiry records.

## Security model

- The CMS is intended for cms.colomboconsultants.lk; the public Vite site remains at www.colomboconsultants.lk.
- Users are assigned one of four roles: Owner, Publisher, Editor, Viewer. CMS sessions expire after one hour and the account locks after five failed login attempts for fifteen minutes.
- Editors can create content and work in drafts; publishing belongs to Owners and Publishers.
- Unauthenticated requests are constrained to published documents. Drafts and submissions are staff-only.
- Public contact forms must use a dedicated, rate-limited server-side endpoint. They must never create records through the public Payload REST API.
- Keep PAYLOAD_SECRET, database credentials, and any storage credentials in the deployment secret manager only—not in this repository or the Vite browser bundle.
- Use a managed Postgres database, automatic encrypted backups, HTTPS, MFA/SSO at the identity/access layer, and strict CORS/CSRF origins in production.

## First deployment

1. Set the values in `.env` from `.env.example` using the deployment secret manager. `DATABASE_URL` must be the Neon connection string and `PAYLOAD_SECRET` must be a unique high-entropy value.
2. Set `CMS_CORS_ORIGINS` to the exact public-site and CMS origins; production refuses to start without an allowlist.
3. Run `npm install`, `npm run generate:types`, and `npm run generate:importmap` from this folder.
4. Provision the initial owner without exposing a registration route:

   ```bash
   CMS_BOOTSTRAP_OWNER_EMAIL=owner@example.com \
   CMS_BOOTSTRAP_OWNER_PASSWORD='use-a-unique-16-plus-character-password' \
   CMS_BOOTSTRAP_OWNER_NAME='CCMG Owner' \
   npm run bootstrap:owner
   ```

   Run this only from a protected terminal or deployment job, then remove the temporary bootstrap password from its environment.

5. Import the approved CCMG services, projects, insights, team, globals, and media. This command is intentionally blocked unless the explicit confirmation value is present, and is safe to run again:

   ```bash
   CMS_SEED_CONFIRM=ccmg npm run seed
   ```

6. For a local review, run `npm run dev` and open `http://localhost:3000/admin`. In production, create and apply database migrations, then use `npm run build` and `npm run start`; do not rely on automatic schema push.

The CMS dependencies could not be installed in this restricted workspace because it cannot reach the package registry. The public website remains independently buildable; run the commands above from the deployment environment or a normal developer machine.
