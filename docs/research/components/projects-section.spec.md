# ProjectsSection Specification

## Overview
- **Target file:** `src/components/ProjectsSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-01000-1440.png`
- **Interaction model:** time-driven infinite horizontal rail; hover-driven card depth.

## DOM Structure
Light section with kicker/title and right-aligned intro row above an overflow-hidden duplicated project rail containing three unique linked cards.

## Computed Styles (exact values from getComputedStyle)

### Container
- Desktop x0/y1369, 1425×828; background `#f5f5f5`; padding `100px 0`; overflow visible.
- Heading x40/y1529; 550×52; Overused 500, 48px/52px, `-1.08px`; black 80%.
- Intro x1035/y1504; 350×77; Inter 400, 16px/25.6px, `-.16px`; black 70%.
- Kicker uses IBM/Chivo Mono 12px, 1.2px tracking.

### Rail and cards
- Rail viewport begins y1661; height 436px; duplicated flex list, 10px gap; animation translates horizontally forever.
- Each desktop card exactly 500×436; position relative; overflow hidden; border-radius 7px; padding 24px.
- Image fills card, object-fit cover. Overlay `linear-gradient(304deg, rgba(0,0,0,.6) 61%, rgba(0,0,0,.2) 100%)`.
- Category top-right in white pill; 12px mono uppercase.
- Title bottom-left: 22px/26px white. Location: Inter 14px/19.6px, white 80%.

## States & Behaviors

### Infinite rail
- Time-driven auto-scroll left, duplicated dataset, linear and seamless; observed transform continually changing.
- Pause on pointer hover or keyboard focus.

### 3D card hover
- Card receives restrained perspective tilt (max 3deg) and image scale 1.035. Add a thin orange blueprint edge accent at <= .5 opacity; transition 450ms cubic-bezier(.2,.8,.2,1).

## Assets
- `/assets/RzuKiGIxyf4IqJpamwo0bzyUPGI.webp`
- `/assets/Ka4em1hAfkmNJp7mMT3Bnw5RWzk.jpg`
- `/assets/8HTYyC16R1aOugiYMCMJ6RTg5s.jpg`

## Text Content (verbatim)
- Kicker: Projects
- Title: Our Featured Projects
- Intro: “Explore projects where thoughtful design meets reliable execution each one tailored to meet real-world demands.”
- Hospitality — Grand Horizon Hotel & Suites — Goa, India
- Commercial / Tech — Vertex Tech Park — Bangalore, India
- Student Housing — Urban Nest Student Living — Pune, India

## Responsive Behavior
- **Desktop:** 500×436 cards and horizontal ticker; around 2.8 cards visible.
- **Tablet/Mobile:** section 681px; padding `64px 0`; title 32px/36px and x20. Cards 360×314 at mobile with 10px gap; horizontal rail remains time-driven/touch-scroll capable.
- **Breakpoint:** 810px.
