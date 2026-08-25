# ClosingCta Specification

## Overview
- **Target file:** `src/components/ClosingCta.tsx`
- **Screenshot:** `docs/design-references/original-scroll-10158-1440.png`
- **Interaction model:** reveal and CTA hover.

## DOM Structure
Full-width 600px image banner with dark overlay, bottom blur gradient, centered heading and button.

## Computed Styles (exact values from getComputedStyle)
- Desktop x0/y10146, 1425×600; padding 10px 10px 80px; overflow hidden.
- Image fills; object-fit cover; overlay gradient `linear-gradient(304deg, transparent 35%, rgba(0,0,0,.2) 84%)` plus strong neutral blur/mask along lower half.
- H2 centered, width700, 104px, Overused 48px/52px white.
- CTA white ~170×37, 6px radius, Chivo Mono 14px.

## States & Behaviors
- Heading/button reveal from y16/opacity0. CTA raises 2px; arrow shifts.

## Assets
- `/assets/xil7I6l5QGBFKgYQWzIcUX9pH8.webp`, ArrowIcon.

## Text Content (verbatim)
- Explore how Construa can bring your next development to life.
- Get Started.

## Responsive Behavior
- Desktop min-height600; mobile/tablet 500px; mobile h2 width343, 32/36.
- Breakpoint 810px.
