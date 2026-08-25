# FeatureTestimonial Specification

## Overview
- **Target file:** `src/components/FeatureTestimonial.tsx`
- **Screenshot:** `docs/design-references/original-scroll-02833-1440.png`
- **Interaction model:** static/reveal; video affordance button.

## DOM Structure
Light wrapper with 10px inset; full-bleed image card with dark directional gradient, overlapping avatar marks, quote, author, and bottom-right actions.

## Computed Styles (exact values from getComputedStyle)
- Section x0/y2833, 1425×720; background `#f5f5f5`; padding 10px; overflow clip.
- Card/image x10/y2843, 1405×700; image object-fit cover; no visible outer gap beyond 10px; subtle 6px radius.
- Overlay `linear-gradient(304deg, transparent 23%, rgba(0,0,0,.2) 71%)` plus stronger left/bottom shadow for copy.
- Quote starts around x50, width 650px; Overused 36px/40px white.
- Avatar circles 56×56; author/body Inter.
- Watch video uses 36px white circle + play; Get Started white 148×37.

## States & Behaviors
- Reveal copy from y16/opacity0; image scale 1.02→1 on entry.
- Watch button pulses once on first entry and has scale/contrast hover.

## Assets
- Background `/assets/4Rxf04vDCCbpef1fYbYFmFa3AqI.webp`.
- Avatar `/assets/CXUlgezUocPEuWex9QJ2NxJRTw.png`; mark `/assets/eCgL0t1aBdLr4ylSkIR50yrrF8.webp`.
- PlayIcon/ArrowIcon.

## Text Content (verbatim)
“Our project was completed ahead of schedule without compromising on quality. It’s rare to find a team this reliable in construction.”
Priya Verma — Real Estate Developer. Actions: Watch video; Get Started.

## Responsive Behavior
- Desktop card 700px high.
- Mobile <=809.98: section 770px; padding 10px; card 355×750; background cover; quote lower left; actions wrap/stack.
- Breakpoint 810px.
