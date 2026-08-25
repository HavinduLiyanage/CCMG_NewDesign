# PartnersSection Specification

## Overview
- **Target file:** `src/components/PartnersSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-02197-1440.png`
- **Interaction model:** static with gentle reveal.

## DOM Structure
Centered kicker/title followed by a 5×2 logo field inside a full-width light section.

## Computed Styles (exact values from getComputedStyle)
- Section x0/y2197, 1425×636; background `#f5f5f5`; padding `80px 0 100px`; overflow clip.
- Title x420/y2437, 600×104; centered; Overused 500, 48px/52px, black 80%.
- Kicker centered above. Ten logos arranged five across at y2664 and y2776; each display box ~54×14, object-fit contain, low-contrast charcoal.
- Generous negative space is intentional.

## States & Behaviors
- Logos reveal with opacity/y stagger once section enters view. Hover raises opacity to 1 and scale 1.04, 250ms.

## Assets
Use the ten logo files Qk9..., wkYW..., BraB..., 8BJ..., 4Zx..., dFy..., Mg8..., c8x..., Wgl..., vv8... from `/assets/`.

## Text Content (verbatim)
- Kicker: Our Partners
- Title: Building lasting relationships with every project

## Responsive Behavior
- Desktop: centered 5×2 grid.
- Mobile <=809.98: section about 1447px; padding 64px 20px; title 32px/36px; logos become one centered vertical list with ~98px vertical rhythm, matching the reference.
- Breakpoint 810px.
