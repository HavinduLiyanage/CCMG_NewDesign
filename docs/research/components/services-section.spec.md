# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-03553-1440.png`
- **Interaction model:** scroll reveal and hover; left headline remains visually anchored while cards flow.

## DOM Structure
Gray section with left kicker/title column and four vertically stacked service cards in the right column. Each card: 200×200 image, heading, description, and mono tag chips.

## Computed Styles (exact values from getComputedStyle)
- Section x0/y3553, 1425×1208; background `#ededed`; overflow clip.
- Left column x40; title x40/y3713, width ~484, 104px high; Overused 48px/52px, black 80%.
- Right cards begin about x573; total width ~796. Cards ~240px high, white/5% surfaces, radius 10px, 16–18px padding and 16–24px gap.
- Image exactly 200×200 at desktop, radius 6px, object-fit cover.
- H3 22px/26px, black 90%; description Inter 16px/25.6px, black 60–70%; tag chips mono 11–12px uppercase, gray background.

## States & Behaviors
- Cards reveal sequentially from y24/opacity0. Hover: translateX(-6px), surface white, image gains very slight 3D rotation and scale 1.02. Respect reduced motion.

## Assets
- YCH...png, bALz...jpg, JY6...webp, eoKG...jpeg from `/assets/`.

## Text Content (verbatim)
- Kicker: Services we provide. Title: Deep expertise across the sectors that matter.
- Property Development — End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover. Tags: Land acquisition; Feasibility studies; Masterplanning; Residential builds.
- Design & Planning — Collaborative design and planning services that balance creativity, compliance, and buildability at scale. Tags: Architectural design; Technical drawings; Design coordination; Compliance.
- Construction Management — Full oversight of construction phases to ensure projects are delivered on time, on budget, and to the highest standards. Tags: Site management; Programme control; Quality assurance; Cost control.
- Infrastructure & Logistics — Delivery of essential infrastructure and logistics planning to support large residential and urban developments. Tags: Roads & utilities; Site logistics; Phasing strategy; Access planning; Utilities coordination.

## Responsive Behavior
- Desktop two-column, left width ~40%, cards right.
- Tablet/mobile <=809.98: section 2093–2428px; title x16/20, 32px/36px; cards stack full width with the 200×200 image above/left depending width; on 390 each card uses 303px inner width and about 500px height.
- Breakpoint 810px.
