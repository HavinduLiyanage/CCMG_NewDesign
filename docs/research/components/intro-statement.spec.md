# IntroStatement Specification

## Overview
- **Target file:** `src/components/IntroStatement.tsx`
- **Screenshot:** `docs/design-references/original-scroll-01000-1440.png`
- **Interaction model:** scroll-driven word opacity reveal.

## DOM Structure
Full-width light section with one large sentence split into spans and a compact Learn Our Story CTA below.

## Computed Styles (exact values from getComputedStyle)

### Container
- Desktop x0/y1000, 1425×369; background `#f5f5f5`; display flex; align/justify center; padding `100px 0`; overflow hidden.
- Inner edge padding 40px; content max width 1440px.

### Statement
- x40/y1100; width 1345px; height 108px.
- Overused Grotesk 500; visual size 30px with ~36px line-height; dark text. Each word is its own inline span.

### CTA
- x40/y1232, 185×37; background black 5%; padding `10px 24px`; border-radius 6px.
- Label Chivo Mono 14px/16.8px, .7px tracking, uppercase.

## States & Behaviors

### Word reveal
- **Trigger:** section progress through viewport; scroll-driven.
- **Before:** later words opacity .18–.22.
- **During:** words brighten sequentially to opacity 1 as progress advances; observed early words .72 and later words .6 around y1000.
- **Implementation:** scroll listener or Motion `useScroll`; map word index to a short progress range. No layout movement.

### Hover
- CTA darkens to black 90%, label turns white, with 260ms ease and slight lift.

## Assets
- ArrowIcon from `icons.tsx`.

## Text Content (verbatim)
“We’re a specialist main contractor delivering residential, commercial, and hospitality projects built on trust and precision. With a commitment to honest work and dependable execution, we create spaces that stand strong, serve their purpose, and endure for years to come.”

CTA: “Learn Our Story”.

## Responsive Behavior
- **Desktop:** 369px section; sentence spans roughly two/three long lines.
- **Tablet:** section 289px at 768; 20px edge padding.
- **Mobile:** x0/y844, 375×393; padding `64px 0`; 335px inner width; statement approximately 26px/31px; CTA below.
- **Breakpoint:** 810px.
