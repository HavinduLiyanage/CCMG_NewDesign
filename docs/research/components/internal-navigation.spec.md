# InternalNavigation Specification

## Overview

- **Target file:** `src/components/SiteNav.tsx`
- **Reference pages:** `docs/design-references/routes/projects-desktop.png`, `docs/design-references/routes/about-desktop.png`
- **Interaction model:** click-driven mobile disclosure; static desktop navigation.

## Computed desktop reference values (1440px)

- Navigation top position: `16px`; rendered height: `36.8px`.
- Desktop logo uses local `7yGOh7DYr11HtXDswYhX77k.png` and measures approximately `104px` wide.
- Nav labels are uppercase Chivo Mono labels, 10–11px with broad tracking, in very-light pills.
- Primary CTA is black, 102–112px wide, 36px tall, 6px radius, white mono type.
- Page background: `#ededed`; primary foreground: `rgb(0 0 0 / 80%)`.

## DOM structure

- `header.site-nav`
  - Brand link to `/`
  - desktop link group: About, Our Expertise, Projects, NewsRoom
  - CTA link to `/contact`
  - mobile Menu toggle and disclosure panel

## States & behaviours

- Desktop navigation remains in normal page flow on collection, contact, about, and legal pages.
- Project-detail nav overlays the dark image hero and flips to white type/pills.
- Mobile replaces the nav group with Menu; opening it reveals the same links and closes after link selection or Escape.
- Link and CTA hover: translate upward by 1–2px, 220ms ease.

## Responsive behaviour

- Desktop: three-column alignment with logo left, pills centered, CTA right.
- Mobile (`<810px`): horizontal padding 20px; only brand, CTA, and Menu remain in the bar; disclosure stacks links.
