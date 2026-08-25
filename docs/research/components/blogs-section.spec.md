# BlogsSection Specification

## Overview
- **Target file:** `src/components/BlogsSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-08078-1440.png`
- **Interaction model:** static with scroll reveal and image hover.

## DOM Structure
Concrete section header followed by two equal linked article cards. Each card has a large rounded image with category pill, then title and excerpt.

## Computed Styles (exact values from getComputedStyle)
- Wrapper x0/y8071, 1425×1134; background `#ededed`; padding `100px 40px`; vertical gap 200px in source layout.
- H2 x40/y8238, 550×52; Overused 48px/52px black 80%. Intro left below heading, width ~350, Inter16/25.6.
- Two-column grid gap20. Images: left x40/y8493 670×483; right x730/y8493 670×483; object-fit cover; ~28px radius.
- Category pill upper-right, gray/white, rounded 999px.
- Article titles 22px/28px; excerpts Inter 15–16px/24px.

## States & Behaviors
- Reveal cards stagger. Hover image scale 1.025 and title underline/arrow motion; 500ms cubic-bezier.

## Assets
- `/assets/dWAYDwgwFsSzZHEJUiCnNbZXGQ.webp`, `/assets/NGORKVsfXW88cpNLbvukYmso578.webp`.

## Text Content (verbatim)
- Kicker Blogs; title Insights & Industry Updates; intro Stay informed with the latest trends, project insights, and practical knowledge shaping modern construction.
- Site Safety / Top 10 Construction Site Safety Practices Every Worker Must Know / Construction sites are high-risk environments—but most accidents are preventable. Here are the essential safety practices every team should follow to stay protected and productive.
- Building Materials / Concrete vs. Steel vs. Timber — Choosing the Right Building Material / Choosing the right structural material is one of the most consequential decisions in any construction project. Each material — concrete, steel, and timber — comes with distinct advantages, limitations, cost profiles, and environmental impacts. Understanding these trade-offs helps architects, engineers, and clients make smarter decisions.

## Responsive Behavior
- Desktop two columns.
- <=809.98 stack two cards; images 335×242; wrapper uses `100px 20px`; title 32/36; total blog content flows before contact.
- Breakpoint 810px.
