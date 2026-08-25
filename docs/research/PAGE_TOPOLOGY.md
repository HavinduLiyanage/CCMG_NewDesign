# Construa Home Page Topology

Reference: https://construa.framer.website/  
Desktop viewport used: 1440×1000 (content width 1425 due scrollbar).  
Mobile viewport used: 390×844 (content width 375).  
Breakpoints: desktop ≥1200; tablet 810–1199.98; mobile ≤809.98.

| Order | Component | Desktop document Y / height | Background | Interaction model |
|---:|---|---:|---|---|
| 1 | HeroHeader | 0 / 1000 | video + dark overlay | autoplay video, time entrance, links/hover |
| 2 | IntroStatement | 1000 / 369 | #f5f5f5 | scroll-driven word opacity |
| 3 | ProjectsSection | 1369 / 828 | #f5f5f5 | infinite time-driven rail, hover |
| 4 | PartnersSection | 2197 / 636 | #f5f5f5 | reveal, hover |
| 5 | FeatureTestimonial | 2833 / 720 | photo | reveal, video affordance |
| 6 | ServicesSection | 3553 / 1208 | #ededed | reveal, hover |
| 7 | ProcessSection | 4761 / 1094 | #161512 | click-driven four tabs |
| 8 | ResultsSection | 5855 / 1292 | #161512 | reveal/count-up |
| 9 | TestimonialsSection | 7147 / 924 | #ededed | infinite time-driven rail |
| 10 | BlogsSection | 8071 / 1134 | #ededed | reveal, hover |
| 11 | ContactSection | 9206 / 940 | #ededed | input/select/form state |
| 12 | ClosingCta | 10146 / 600 | photo + blur mask | reveal, hover |
| 13 | Footer | 10746 / ~632 | #161512 | links/hover |

Page max-width is 1440px. All sections are normal document flow; the navigation is absolute inside the hero, not sticky. Horizontal rails are overflow-hidden and use duplicated datasets. The footer follows the CTA directly.

Mobile measured section heights vary with content: hero 844; intro 393; projects 681; partners 1447; featured review 770; services 2428; process 1076; results 1547; testimonials 723; contact 1340; CTA 500; footer 883.
