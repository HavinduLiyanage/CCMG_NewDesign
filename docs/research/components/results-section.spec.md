# ResultsSection Specification

## Overview
- **Target file:** `src/components/ResultsSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-05862-1440.png`
- **Interaction model:** scroll reveal/count-up; subtle 3D construction depth.

## DOM Structure
Dark section with centered kicker/title and a 2×2 grid of oversized statistic cards.

## Computed Styles (exact values from getComputedStyle)
- Section x0/y5855, 1425×1292; background `#161512`; overflow clip.
- Kicker centered; title x420/y6022, width600, 104px, centered, Overused 48px/52px white 90%.
- Grid edge 40px, gap 16px. Cards about 656×410; background #202020; radius 30px; padding 32px.
- Numbers Overused 500, 120px/120px desktop, white; aligned near top-right/center. Label ~22px/26px white; description Inter 16px/25.6px white 60–70% near bottom.

## States & Behaviors
- Cards reveal with y28/opacity0 stagger; numbers count visually from 0 to final values once.
- Add faint CSS 3D vertical beam/grid geometry behind/between cards, opacity <= .12, slow idle, no pointer interception.
- Card hover perspective 2deg + border highlight.

## Text Content (verbatim)
- Kicker: Results. Title: Building with experience you can measure.
- 15+ / Years of experience / Delivering residential, commercial, and hospitality projects with trust, precision, and dependable execution since day one.
- 132 / Residential Projects / Homes, student living spaces, and mixed-use developments built to last on time, on budget, and beyond expectations.
- 3+ / 3 GW+ Operating & Under Construction / The “3 GW+ Operating” label is clearly leftover energy template copy. Depending on what's true for Construa, this could be:
- 37K+ / Homes built worldwide / Sq. ft. delivered (or units handed over) spaces where families live, businesses thrive, and communities grow.

## Responsive Behavior
- Desktop 2×2 grid, section 1292px.
- Tablet stats 84px; mobile stats 64px. <=809.98 section ~1547px; title 32/36; single-column cards.
- Breakpoint 810px.
