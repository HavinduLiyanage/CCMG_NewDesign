export type Detail = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  portrait: string;
  gallery: string[];
  details: Detail[];
  story: string[];
  quote: string;
  quoteBy: string;
};

const ccmg = "/assets/ccmg";

export const projects: Project[] = [
  {
    slug: "mahaweli-water-security-investment-program",
    title: "Mahaweli Water Security Investment Program",
    category: "Water & Irrigation Infrastructure",
    location: "Mahaweli River Basin, Sri Lanka",
    image: `${ccmg}/mahaweli-water-security.png`, portrait: `${ccmg}/mahaweli-water-security.png`, gallery: [`${ccmg}/mahaweli-water-security.png`],
    details: [
      { label: "Period", value: "2018–2025" }, { label: "Location", value: "Mahaweli River Basin, Sri Lanka" }, { label: "Funder", value: "Asian Development Bank" }, { label: "Client", value: "China State Construction Engineering Corporation" }, { label: "Role", value: "Bidding-to-execution local coordination and delivery support" },
    ],
    story: [
      "The Asian Development Bank-funded Mahaweli Water Security Investment Program includes early-stage mobilisation for the longest irrigation tunnel in South Asia.",
      "CCMG provided bidding assistance and coordinated stakeholders during evaluation, then supported implementation through local staff engagement, consultant facilitation, government coordination, and village-grievance handling.",
    ], quote: "We align local expertise, institutions, and delivery controls so complex mandates can move from bid to execution.", quoteBy: "Colombo Consultants & Management Group",
  },
  {
    slug: "us-embassy-new-wing", title: "Development of the U.S. Embassy New Wing", category: "Diplomatic Infrastructure", location: "Colombo, Sri Lanka",
    image: `${ccmg}/us-embassy.jpg`, portrait: `${ccmg}/us-embassy-gallery-1.jpg`, gallery: [`${ccmg}/us-embassy.jpg`, `${ccmg}/us-embassy-gallery-1.jpg`, `${ccmg}/us-embassy-gallery-2.jpg`],
    details: [{ label: "Period", value: "2021–2023" }, { label: "Location", value: "Colombo, Sri Lanka" }, { label: "Client", value: "Cadel Construction LLC" }, { label: "Role", value: "Sub-consultant: approvals, compliance & stakeholder management" }],
    story: ["CCMG supported Cadel Construction LLC in obtaining construction approvals and ensuring compliance for the development of the U.S. Embassy New Wing in Colombo.", "The team coordinated demolition design, utilities, and engagement with relevant authorities, helping de-risk demolition and reconstruction through permit management and proactive community interface."],
    quote: "We bridge policy, permits, finance, environmental and social safeguards, and stakeholder engagement so international ideas can succeed on Sri Lankan ground.", quoteBy: "Colombo Consultants & Management Group",
  },
  {
    slug: "taarp-tsunami-rebuilding-programme", title: "TAARP — Tsunami Rebuilding Programme", category: "Recovery & Reconstruction", location: "Sri Lanka",
    image: `${ccmg}/taarp.png`, portrait: `${ccmg}/taarp.png`, gallery: [`${ccmg}/taarp.png`],
    details: [{ label: "Year", value: "2005" }, { label: "Location", value: "Sri Lanka" }, { label: "Sector", value: "Recovery & Reconstruction" }, { label: "Engagement", value: "Multi-disciplinary implementation review" }],
    story: ["CCMG undertook a multi-disciplinary implementation review of the Tsunami Affected Areas Rebuilding Project (TAARP; Loan 2167/Grant 0006 SRI).", "The review covered technical, financial, procurement, governance, and environmental and social performance."],
    quote: "Global reach, local insight.", quoteBy: "Colombo Consultants & Management Group",
  },
  {
    slug: "mallavi-urban-water-supply", title: "Mallavi Urban Water Supply", category: "Water Supply & Sanitation", location: "Mallavi, Sri Lanka",
    image: `${ccmg}/mallavi-water-supply.jpg`, portrait: `${ccmg}/mallavi-gallery-1.jpg`, gallery: [`${ccmg}/mallavi-water-supply.jpg`, `${ccmg}/mallavi-gallery-1.jpg`, `${ccmg}/mallavi-gallery-2.jpg`],
    details: [{ label: "Period", value: "2024–2025" }, { label: "Location", value: "Mallavi, Sri Lanka" }, { label: "Funder", value: "World Bank" }, { label: "Client", value: "Puritas (Pvt) Ltd" }, { label: "Role", value: "Design coordination, construction supervision & pre-bid support" }],
    story: ["For the Mallavi Urban Water Supply System (WASSIP), CCMG coordinated all stages of the World Bank-funded project from bidding through execution.", "The team supported construction supervision, design modifications, and mechanical-engineering designs, working closely with the client and project consultant to meet delivery and compliance requirements."],
    quote: "Global reach, local insight.", quoteBy: "Colombo Consultants & Management Group",
  },
  {
    slug: "water-supply-sanitation-legal-reform", title: "Water Supply & Sanitation Legal and Institutional Reform", category: "Policy & Regulation", location: "Sri Lanka",
    image: `${ccmg}/corporate-advisory.png`, portrait: `${ccmg}/corporate-advisory.png`, gallery: [`${ccmg}/corporate-advisory.png`],
    details: [{ label: "Period", value: "2009–2010" }, { label: "Client", value: "ADB / National Water Supply & Drainage Board" }, { label: "Partner", value: "IDP Philippines" }, { label: "Role", value: "Legal and institutional advisory" }],
    story: ["CCMG drafted legal amendments to strengthen economic and technical regulation by the Public Utilities Commission.", "The work supported stronger sector accountability and service quality in water supply and sanitation."],
    quote: "Sound policy and institutional design create the conditions for dependable service delivery.", quoteBy: "Colombo Consultants & Management Group",
  },
];

export type Article = {
  slug: string; category: string; title: string; excerpt: string; date: string; readTime: string; image: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "carbon-credits-in-sri-lanka", category: "Carbon Advisory", title: "Carbon accounting that stands up to scrutiny", date: "Sustainability practice", readTime: "4 min read", image: `${ccmg}/insight-carbon-accounting.png`,
    excerpt: "Auditable ESG strategy and GHG accounting for complex development projects, bridging the gap between ambition and verifiable action.",
    sections: [
      { heading: "Precision carbon accounting", paragraphs: ["CCMG supports carbon accounting that treats non-financial data with the rigor applied to a balance sheet, establishing controls and audit trails before scrutiny arrives.", "The work connects credible baselines, measurable data, and accountable ownership across complex development environments."] },
      { heading: "From ambition to verifiable action", paragraphs: ["A carbon project requires more than a credible idea. CCMG maps the lifecycle through identification, validation, registration, issuance, and monetisation.", "The focus is a practical route from concept to market readiness, supported by reliable records and stakeholder engagement."] },
    ],
  },
  {
    slug: "scope-1-2-3-esg-reporting", category: "ESG Reporting", title: "Making Scope 1, 2, and 3 reporting actionable", date: "Sustainability practice", readTime: "3 min read", image: `${ccmg}/insight-esg-reporting.png`,
    excerpt: "Good ESG reporting turns emissions and impact data into a basis for decisions, disclosure, and continuous improvement.",
    sections: [
      { heading: "Start with a clear emissions boundary", paragraphs: ["Scope 1, Scope 2, and Scope 3 categories provide a practical framework for understanding direct and value-chain emissions.", "A useful reporting process connects those categories to reliable operational data, material issues, and accountable owners."] },
      { heading: "Use recognised frameworks", paragraphs: ["CCMG’s ESG work is informed by reporting and management frameworks including GRI, SASB, the Sustainable Development Goals, and ISO 14001.", "The priority is not a report for its own sake, but a system that supports credible action and clearer communication with stakeholders."] },
    ],
  },
  {
    slug: "esg-for-infrastructure-and-investment", category: "Sustainable Finance", title: "Embedding ESG in infrastructure and investment decisions", date: "Sustainability practice", readTime: "4 min read", image: `${ccmg}/insight-esg-infrastructure-investment.png`,
    excerpt: "ESG considerations work best when integrated early—across feasibility, stakeholder engagement, delivery, and long-term value creation.",
    sections: [
      { heading: "A delivery lens for ESG", paragraphs: ["Infrastructure and market-entry decisions are shaped by institutions, communities, regulation, and capital. ESG planning needs to reflect that complete operating environment.", "CCMG brings together local representation, stakeholder understanding, and advisory support for organizations working in Sri Lanka’s complex sectors."] },
      { heading: "From compliance to durable outcomes", paragraphs: ["The goal is to manage risk while identifying opportunities for stronger governance, social value, and environmental performance.", "A well-defined ESG approach makes those priorities measurable and practical throughout the project lifecycle."] },
    ],
  },
];

export const team = [
  ["Mahendra Kumarasinghe", "Chief Executive Officer", "MK"], ["G. M. A. Bandara", "Director, Engineering Strategic Affairs", "GB"], ["B. S. Lakmal", "Director, Growth Strategy", "BL"], ["Dr. Hasitha Kalhari Warusawitharana", "Consultant, Legal", "HW"], ["Havindu Liyanage", "Director, Sustainability & ESG", "HL"], ["Neil Jayasekara", "Associate", "NJ"], ["Ranga Perera", "Head of Finance", "RP"], ["Ruwan Bolongho", "Head of Operations", "RB"], ["L. U. D. Athapattu", "Associate", "LA"], ["Anura Shanthi Wijethunga", "Associate", "AW"],
] as const;
