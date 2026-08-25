# ProcessSection Specification

## Overview
- **Target file:** `src/components/ProcessSection.tsx`
- **Screenshots:** `original-scroll-04761-1440.png`, `original-process-step2-1440.png`, `original-process-step3-1440.png`, `original-process-step4-1440.png`
- **Interaction model:** click-driven four-state tabs with animated content transition.

## DOM Structure
Dark section header row followed by a rounded charcoal process panel. Panel contains four equal tabs above a two-column content region (phase/title/copy left, image right).

## Computed Styles (exact values from getComputedStyle)
- Section x0/y4761, 1425×1094; background `#161512`; padding `80px 0 100px`; overflow clip.
- Header edge 40px; title 48px/52px white 90%; intro Inter 16px/25.6px white 70%, right aligned column.
- Panel x40, width 1345, dark `#202020`, radius ~10px, inner 16px.
- Tabs row x56/y340 relative viewport capture, width 1313, height 56. Four equal 316px cells, 16px gaps. Active bg `#161512`, inactive `#202020`, radius10. Labels ~16px/22px; active white, inactive white 40%.
- Content left/right equal 616px with ~40px gap. Image 616×524, object-fit cover, rounded 26px top corners. Phase mono 11px. H3 36px/40px white. Copy Inter 16px/25.6px white 70%.

## States & Behaviors
- Click/tab keyboard changes active state; crossfade + y10 transition 350ms. Preserve focus states and aria tab roles.
- Default Step 1.

## Per-State Content
- Step 1 / Phase 01 / Discovery & Brief / “We begin every project with a thorough discovery session — understanding your goals, budget envelope, site constraints, and timeline. This phase defines the entire project foundation and prevents costly changes down the line.” / 6Kub...webp / Discovery Call.
- Step 2 / Phase 02 / Design & Planning / “Our design team works collaboratively with architects, engineers and planners to develop a scheme that's creative, compliant and buildable. We manage the full planning application process on your behalf.” / EPq...webp / Planning.
- Step 3 / Phase 03 / Construction / “Our site management team oversees every aspect of the build — from groundworks to roof. Weekly progress reports, rigorous quality checks and proactive cost control keep your project on track at every stage.” / EzQC...webp / Development.
- Step 4 / Phase 04 / Handover & Support / “We don't consider a project finished until every last detail is right. Our handover process includes thorough snagging, full documentation packs, and a dedicated aftercare period to ensure you're completely satisfied.” / KLnm...webp / Support.

## Assets
Four process images above; SearchIcon, DraftIcon, BuildingIcon, HandshakeIcon.

## Responsive Behavior
- Desktop: 4-column tabs + 2-column panel.
- Mobile <=809.98: section ~1076px, padding64; 335px header; tabs horizontally scroll or 2×2; panel becomes single column with text then 303×274 image. Title 32px/36px.
- Breakpoint 810px.
