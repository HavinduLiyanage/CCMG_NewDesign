# Construa Behavior Bible

## Global
- Native document scrolling; no Lenis/Locomotive class or alternate scroll container.
- Most entrances are Framer spring fades: opacity `.001 → 1`, y `10–100px → 0`, damping ~40–60 and stiffness ~150–500.
- Respect `prefers-reduced-motion` in the clone.

## Hero
- Video autoplays only as a decorative muted loop; playsInline and cover.
- H1 is word-tokenized: opacity .001/y10, start delay .1s, ~.05s token stagger.
- Copy is line-tokenized: opacity .001/y10, start delay .2s.
- CTA row and navbar fade in with spring timing.
- Navigation is absolute. At scrollY 1000, it is y≈-984; there is no sticky transformation.
- Hover styling is restrained: translucent pills strengthen, buttons lift/slip text.

## Intro
- Character/word reveal is scroll-driven, not a one-time click. Opacity progresses from approximately .6 to 1 in the live Framer implementation. The clone may use word-level spans for equivalent performance and appearance.

## Projects and Testimonials
- Both are time-driven infinite horizontal rails. Their transforms continue changing with time while the scroll position is stationary.
- Duplicate unique items to make a seamless loop. Pause on hover/focus and retain horizontal touch access.

## Partners / Feature / Services / Results / Blogs / CTA
- One-time viewport reveals, mostly opacity + positive y.
- Images use subtle scale-down-on-entry and scale-up-on-hover.

## Process
- Interaction model definitively click-driven, not scroll-driven.
- Four equal tabs. Default Step 1. Every click swaps phase, heading, copy, image and active styling.
- Active tab #161512/white; inactive #202020/white 40%.
- State changes use a short crossfade/y transition.

## Contact form
- Native inputs/select/textarea. Clone performs local validation only; it must not transmit data.
- Submit should show an inline success state without navigation.

## Responsive
- Source variants switch exactly at 810px and 1200px.
- Mobile menu uses two lines rotating -45/+45 degrees when open.
- Mobile preserves horizontal project/testimonial rails and stacks content-heavy sections.
