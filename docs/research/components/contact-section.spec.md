# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Screenshot:** `docs/design-references/original-scroll-09218-1440.png`
- **Interaction model:** form inputs and submit success state (local/demo only).

## DOM Structure
Concrete-gray split section: left kicker/title/copy, right white form card with heading, helper copy, two-column first row, remaining full-width fields, checkbox, submit.

## Computed Styles (exact values from getComputedStyle)
- Section x0/y9206, 1425×940; background `#ededed`; overflow clip.
- Left x40; title x40/y9396, width400, 156px; Overused 48px/52px, #202020.
- Right form card x754/y9296, ~616×736; white/45% surface, radius 6px, padding 30px; subtle shadow.
- Form H3 22px/26px; helper Inter 15px/22px.
- Labels mono uppercase ~11px. Inputs/select height 42px, gray #ededed, border none, 4px radius; textarea ~148px. Submit dark #4a4744, 40px high, full width, mono uppercase.

## States & Behaviors
- Focus adds 1px dark border/orange outline and white background.
- Submit prevents network request; validates required name/email and displays an inline confirmation without changing layout materially.

## Text Content (verbatim)
- Kicker Get In Touch; title Ready to build something that lasts?; copy Whether it’s a residential project, commercial space, or renovation, we’re here to bring your vision to life—with quality, clarity, and on-time delivery.
- Form: Let's talk about your goals; Fill out the form below and our nearest regional office will get back to you within 24 hours.
- Labels Name, Email, Address, You are interested in, message. Placeholders Jane Smith, jane@framer.com, Jane Smith, Select a service..., Write your message...
- Options Property Development; Design & Planning; Construction Management; Infrastructure & Logistics.
- Checkbox: Yes, I'd like to receive product updates and insights from Construa. Unsubscribe anytime.
- Button Send Enquiry.

## Responsive Behavior
- Desktop 2 columns.
- <=809.98 section ~1340px; stack left then form; 20px edges; form fields single-column; title 32/36.
- Breakpoint 810px.
