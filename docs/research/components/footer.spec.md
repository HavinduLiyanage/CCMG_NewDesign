# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/original-scroll-10758-1440.png`
- **Interaction model:** link hover only.

## DOM Structure
Dark footer with three main columns, large empty breathing room, and bottom legal row.

## Computed Styles (exact values from getComputedStyle)
- Desktop x0/y10746, 1425×~632; background `#161512`; overflow hidden; 40px horizontal edge.
- Logo 118×36. Left copy Inter15/22, white 60%; CTA white.
- Main Pages and Contact columns start around x730 and x950; headings Chivo Mono 12px; links Inter15/26 white 45–70%.
- Bottom border black/white 8%; legal row at bottom.

## States & Behaviors
- Links brighten to white and translateX(3px), 220ms.

## Assets
- `/assets/4DqGwUqDnx49TJFKP55aBWcrNA.png`, ArrowIcon.

## Text Content (verbatim)
- Partner with us to turn strategic ambition into measurable business results. / Get Started.
- Main pages: Home, About Us, Projects, Blogs, Contact.
- Contact: hello@construa.com; +44 (0) 20 7946 0318; 12 Aldgate Square, London, EC3N 1AB.
- Terms; Private Policy; Designed & Developed By Vinayak Thakur.

## Responsive Behavior
- Desktop three columns, 632px.
- <=809.98 stack columns; footer ~883px; 20px edges; legal row wraps.
- Breakpoint 810px.
