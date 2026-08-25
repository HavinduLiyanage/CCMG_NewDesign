# Construa website recreation

A responsive React/Vite recreation of the Construa Framer site, including its local typography, imagery, section geometry, responsive breakpoints, and motion language.

The recreation also adds restrained spatial effects that fit the construction theme:

- pointer-reactive wireframe depth in the hero
- subtle 3D project-card tilt and blueprint edge lighting
- animated structural beams and perspective grid in the results section
- depth-aware service and testimonial interactions

## Run locally

```bash
npm install
npm run dev
```

Vite serves the page at `http://localhost:5173` by default, or the next available port.

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
