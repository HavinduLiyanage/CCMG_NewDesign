# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-07154-1440.png`
- **Interaction model:** time-driven infinite horizontal rail; hover pauses.

## DOM Structure
Concrete-gray section with left kicker/title and duplicated horizontal list of four testimonial cards.

## Computed Styles (exact values from getComputedStyle)
- Section x0/y7147, 1425×924; background `#ededed`; padding `80px 0 120px`; overflow visible.
- Title x40/y7394, 600×104; Overused 48px/52px, black 80%.
- Cards start around y7460; ~414×480, white, 6px radius, 24px padding; 10px gap.
- Quote mark orange `#ff6b35`, ~44px. Quote Inter 16px/25.6px. Author avatar 61×61 circular, grayscale; author ~18px/22px; role Inter 14px.

## States & Behaviors
- Rail continuously translates left, duplicated content, linear/seamless; pause on hover/focus.
- Card hover lift 8px and subtle rotateY ±2deg; avatar returns from grayscale to color.

## Assets
- Xdep..., own3..., uXz..., 4BPY... portrait files from `/assets/`.

## Text Content (verbatim)
- Kicker Testimonials; title What Our Clients Say About Working With Us.
- Rajesh Mehta, Homeowner: We had a clear vision, but they made it even better. The entire process was smooth, transparent, and stress-free from start to finish.
- Ankit Sharma, Director, Sharma Enterprises: Their team handled a complex commercial project with complete professionalism. Timelines were met, and the quality exceeded expectations.
- Priya Verma, Real Estate Developer: In an industry where delays are common, they delivered ahead of schedule without compromising on quality. That reliability is rare.
- Sunil Kapoor, Residential Client: What stood out was their honesty and commitment. They treated our home like their own and paid attention to every detail.

## Responsive Behavior
- Desktop ~3.3 cards visible.
- <=809.98 section ~723px; title 32/36; cards ~330px wide and rail remains horizontal/touch-scrollable.
- Breakpoint 810px.
