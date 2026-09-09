# CCMG public website

A responsive React/Vite recreation of the Construa Framer site, including its local typography, imagery, section geometry, responsive breakpoints, and motion language.

The site pairs CCMG's public experience with a separate Payload CMS. It also adds restrained spatial effects that fit the construction theme:

- pointer-reactive wireframe depth in the hero
- subtle 3D project-card tilt and blueprint edge lighting
- animated structural beams and perspective grid in the results section
- depth-aware service and testimonial interactions

## Run locally

```bash
npm install
npm run dev
```

Vite serves the page at `http://localhost:4173` by default, or the next available port.

## CMS connection

The public site reads only published content from Payload at runtime. It always ships with an approved static fallback, so it remains usable if the CMS is unavailable.

1. Run the CMS from `cms/` at `http://localhost:3000`.
2. Copy `.env.example` to `.env.local` and set `VITE_CMS_URL=http://localhost:3000`.
3. Run the Vite site. Changes published in Payload are visible after a normal page refresh—no public-site redeploy is required.

For production, set `VITE_CMS_URL` to the final CMS HTTPS address in the public Vercel project, and add the exact public-site origin to the CMS `CMS_CORS_ORIGINS` allowlist. Do not put database, Payload, or storage secrets in this public environment file.

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The optimized output is written to `dist/`.

## Notes

- The contact form is an interface demo and does not transmit or store submissions.
- The recreation includes the landing page, About, Projects, all four project detail pages, Newsroom, all four article pages, Contact, Terms & Conditions, and Privacy Policy.
- Page imagery is bundled locally in `public/assets/`; the site does not depend on the live reference site's media at runtime.
- Research notes and section specifications are included in `docs/research/`.
