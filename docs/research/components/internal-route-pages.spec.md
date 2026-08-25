# Internal Route Pages Specification

## Overview

- **Target file:** `src/pages/RoutePages.tsx`
- **Styles:** `src/pages/RoutePages.css`
- **References:** `docs/design-references/routes/` desktop and mobile captures for About, Projects, NewsRoom, Contact, Legal, four project details, and four articles.
- **Interaction model:** static collection pages; click-driven FAQ disclosure; hover-driven cards; scroll-triggered reveal animation.

## Shared route geometry

- Canvas is `#ededed` with a `40px` desktop edge and `20px` mobile edge.
- Collection-page H1: 66px / 66px, `-1.98px` tracking, Overused Grotesk Medium, max width 800px, left edge 40px, top 220px.
- About hero image: `1185px × 529px` at desktop, x=40 y=100, 4px radius; white 48px title is placed along the lower-left of image.
- Project detail hero: 648px high; nav overlays the image, with title at x=40 y=534; white 66px / 66px type.
- Article H1: 48px / 52px, `-1.08px` tracking; body image begins approximately y=407 and spans the inner page width.
- Collection cards use 32px corner radii. The project grid is two columns; blog grid is three columns followed by the fourth card.
- Reusable closing CTA is 600px tall on desktop / 500px on mobile and uses `xil7I6l5QGBFKgYQWzIcUX9pH8.webp`.

## Route templates

### About

- Image-led intro, centered company note, Mission/Vision dark pair, director note, values timeline, people grid, embedded contact form, closing CTA, footer.
- Use exact source imagery imported to `/public/assets`.

### Projects / project detail

- Project index: case-study pill, 66px heading, two-column 32px-radius image cards.
- Detail: full-bleed darkened visual hero, property details plus editorial story, masonry gallery, testimonial band, two related project cards.

### NewsRoom / article detail

- Index: 66px collection heading with four editorial cards containing category, headline, date, and read time.
- Article: title / deck / date metadata, full-width cover, narrow editorial content with subheads, related cards.

### Contact / legal

- Contact: introductory form, regional offices grid, FAQ accordion, closing CTA, footer.
- Legal: title and last-updated metadata followed by a narrow editorial policy body.

## States & behaviours

- Cards: image scale 1 → 1.05 and slight 3D lift on hover, 500ms cubic-bezier(.2,.8,.2,1).
- FAQ: click button toggles a single answer and rotates the plus mark 45 degrees.
- `MotionConfig reducedMotion="user"` governs in-view entrances.
- Navigation paths are real local Vite paths: `/about`, `/projects/*`, `/blogs/*`, `/contact`, and `/legal-policy/*`.

## Responsive behaviour

- At `<810px`: 40px heading becomes 40px / 40px on collection pages; collections and content columns stack; cards become full width; galleries go 2 columns; project hero min-height is 500px.
- Contact office cards stack; FAQ remains a single column.
