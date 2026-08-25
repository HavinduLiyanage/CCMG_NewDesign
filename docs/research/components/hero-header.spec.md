# HeroHeader Specification

## Overview
- **Target file:** `src/components/HeroHeader.tsx`
- **Screenshots:** `docs/design-references/original-top-1440.png`, `original-top-tablet-768.png`, `original-top-mobile-390.png`
- **Interaction model:** time-driven entrance; pointer-driven subtle 3D blueprint enhancement; links scroll/navigate normally.

## DOM Structure
`header.hero` contains absolute looping video, dark overlay/vignette, optional decorative blueprint scaffold, absolute navigation, and right-offset content with h1, copy, and two CTAs.

## Computed Styles (exact values from getComputedStyle)

### Header
- 1440 viewport content width 1425px; height 1000px (`100svh`); display flex; overflow clip; position relative.
- padding: `200px 0 48px`; gap `8px`; background transparent.
- Video: absolute inset 0; width/height 100%; object-fit cover; object-position `50% 50%`.
- Overlays: base `rgba(0,0,0,.4)` plus bottom vignette and original `linear-gradient(304deg, transparent 61%, rgba(0,0,0,.2) 100%)`.

### Navigation
- Desktop top `16px`, full width, 40px side inset for contents; logo 105×32 at x40/y18.
- Inner links begin x488/y20; 435×29; gap 10px. Each mono uppercase pill uses translucent white, 6px radius, ~12px type.
- Get Started: x1252, 148×37, white background, 6px radius.
- Navigation is absolute, not sticky; it scrolls away with the hero.

### Hero copy
- Container x488 (34.25vw), aligned near bottom.
- H1 x488/y655, 897×132; Overused Grotesk 500; 66px/66px; letter-spacing `-1.98px`; `rgba(255,255,255,.9)`.
- Body x488/y811, 650×78; Inter 400; 18px/26.1px; letter-spacing `-.18px`; white 80%.
- CTA row y915, gap 12px. Primary 180×37 white, secondary 157×37 white 3%; padding `10px 24px`; 6px radius. Labels Chivo Mono 14px/16.8px, .7px tracking.

## States & Behaviors

### Entrance
- On load: h1 words, copy lines, and CTAs begin opacity .001/y 10px and settle to opacity 1/y0 with stagger over ~700ms.
- Video autoplay, muted, loop, and playsInline. Use preload auto and, after metadata is available, begin at 1.25s when the clip is still in its initial black lead-in. This preserves the supplied looping video while making the live frame apparent immediately after page load.

### 3D enhancement
- Add a faint construction-wireframe/cube overlay on the right, behind text, using CSS perspective/3D transforms. Pointer movement limited to ±2deg; slow idle motion; opacity <= .18; must not alter readability or reference geometry.

### Hover states
- Nav pills gain slightly stronger background and translateY(-1px).
- CTAs translateY(-2px); primary can show a restrained arrow shift. Transition ~260ms cubic-bezier(.2,.8,.2,1).

## Assets
- Logo: `/assets/4DqGwUqDnx49TJFKP55aBWcrNA.png`; mobile alternative `/assets/7yGOh7DYr11HtXDswYhX77k.png`.
- Video: `/assets/YhkPO5oUUmi1qY5jnyw6b30zR8w.mp4`.
- ArrowIcon from `icons.tsx`.

## Text Content (verbatim)
- Nav: About; Our Expertise; Projects; NewsRoom; Get Started.
- H1: “Crafting the next generation of properties and communities”
- Copy: “From concept to completion, we partner with visionaries to deliver high-quality residential and commercial spaces on time, on budget, and beyond expectations.”
- CTAs: Work With Us; Our Services.

## Responsive Behavior
- **Desktop >=1200px:** values above; two-line h1; asymmetric x34% alignment.
- **Tablet 810–1199px:** same general asymmetry, scale copy with clamp; maintain 100svh.
- **Mobile <=809.98px:** hero 844px at 390×844; content width 335px/x20; padding `200px 0 48px`; h1 40px/36px and 144px high at x20/y427; nav becomes 64px light/tinted bar with logo and a compact menu button; CTA stack at bottom.
- **Breakpoint:** exactly 810px.
