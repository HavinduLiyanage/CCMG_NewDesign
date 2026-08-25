# CCMG content migration workbook

## Rules

- Preserve the existing clone layouts, responsive behavior, motion, and page routes.
- Replace construction-company copy, imagery, names, and calls to action with CCMG material.
- Migrate only published website content. The supplemental documents in the supplied archive are reference material and require separate editorial approval before publication.

## Latest source update

The current implementation also reflects the supplied CCMG company profile and newer HTML references. The company profile is used as the authority for corporate facts, project roles, leadership names, address, and direct contact information. The newer HTML is used for current practice-line language, the $4.2B project-value statement, and sustainability positioning.

The newer HTML files label their institutional marks as placeholder logos. The public site therefore uses a text-only “Institutional experience” strip for World Bank, ADB, JICA, and the European Union rather than displaying or implying official logo endorsements. Replace those text marks only with approved, licensed partner assets.

## Route map

| Current CCMG source | Clone destination | Content to migrate | Status |
| --- | --- | --- | --- |
| index.html | / | Positioning, CTAs, proof points, services, process, flagship case study, FAQ | Implemented — subject to editorial review |
| about.html | /about | 19-year story, nine team members, five milestones, four principles, certifications | Implemented — portraits/titles pending approval |
| services.html | /#services, process and results sections on / | Six practice areas, capabilities, engagement model | Implemented — six practice lines represented |
| projects.html | /projects, /projects/:slug | Five published case studies and local imagery | Implemented — project claims need client clearance |
| sustainability.html | ESG service content on /; relevant content in /blogs | Carbon lifecycle, Scope 1–3, standards, capital-markets positioning | Implemented — editorial review required |
| contact.html | /contact | Consultation messaging, what-to-expect copy, direct contact details | Implemented — needs server endpoint before production |
| No legacy equivalent | legal routes | Keep current placeholder legal copy until CCMG-approved legal text is supplied | Blocked on approved copy |

## Homepage field map

| Clone section | CCMG source content |
| --- | --- |
| Hero | “Your in-country partner for Sri Lanka market entry & infrastructure.”; strategic advisory and local representation eyebrow; Request Representation / Book a Consultation CTAs |
| Intro statement | “Global reach, local insight.” and CCMG's local representation / infrastructure positioning |
| Projects | Mahaweli, U.S. Embassy, TAARP, Mallavi, Corporate Restructuring |
| Partners / proof | ADB and institutional / global-investor proof where approval permits logo use |
| Feature testimonial | Mahaweli Water Security Investment Program: USD 675M, 350K+ beneficiaries, ADB partner |
| Services | Strategic Local Partnerships; Power & Gas; Sustainability & ESG; PPP & Transaction Advisory; Stakeholder Engagement; Strategic Advisory & Digital Transformation |
| Process | Assess → Strategize → Deliver, supported by Entry & Assessment → Establishment → Operational Scaling |
| Results | 19 years in complex environments; 8 active sectors; evidence-led institutional delivery |
| Insights | Carbon origination lifecycle; Scope 1, 2 & 3 inventory; GRI/SASB/SDGs/ISO 14001 content |
| Contact / FAQ | Existing five FAQ answers, enquiry path, info@colomboconsultants.lk, +94 77 304 7315 |

## Case-study migration

| Slug to create | Title | Category | Available source material |
| --- | --- | --- | --- |
| mahaweli-water-security | Mahaweli Water Security Investment Program | Water Supply & Sanitation | Card image, Mahaweli project image, Government of Sri Lanka / ADB / Mahaweli River Basin metadata, USD 675M and 350K+ metrics |
| us-embassy-facility-advisory | U.S. Embassy Facility Advisory | Major International & Diplomatic Infrastructure | Cover image and two additional locally supplied images |
| taarp-tsunami-rebuilding | TAARP — Tsunami Rebuilding Programme | Post-Disaster & Reconstruction | Published card content and image reference |
| mallavi-urban-water-supply | Mallavi Urban Water Supply | Water Supply & Sanitation | Cover image and two additional locally supplied images |
| corporate-restructuring-advisory | Corporate Restructuring Advisory | Corporate & SME Development | Published summary; local supporting image needs confirmation |

The supplied archive also contains a Water Regulatory TA 4049 folder, but it is not a visible project card in projects.html. Keep it unpublished until CCMG confirms it should enter the public portfolio.

## Data needed before publishing

- Approved biographies, portraits, and titles for the nine listed team members.
- Client clearance for each project name, logo, image, metric, and testimonial.
- Missing project fields required by the template: dates, exact role, client naming, outcome narrative, and gallery captions.
- Verified partner logos and any right-to-use evidence.
- Approved legal/privacy policy text and contact-form consent language.
