import { readFile } from "node:fs/promises";
import { basename, extname, resolve } from "node:path";
import config from "@payload-config";
import { getPayload } from "payload";

type TextSection = { heading?: string; paragraphs: string[] };

const publicAssets = resolve(process.cwd(), "..", "public", "assets");
const published = { _status: "published" as const };

const mimeTypeFor = (filename: string) => {
  switch (extname(filename).toLowerCase()) {
    case ".png": return "image/png";
    case ".jpg":
    case ".jpeg": return "image/jpeg";
    case ".webp": return "image/webp";
    case ".avif": return "image/avif";
    default: return "application/octet-stream";
  }
};

const richText = (sections: TextSection[]) => ({
  root: {
    type: "root",
    children: sections.flatMap((section) => [
      ...(section.heading ? [{
        type: "heading",
        tag: "h2",
        children: [{ type: "text", text: section.heading, detail: 0, format: 0, mode: "normal", style: "", version: 1 }],
        direction: null,
        format: "",
        indent: 0,
        version: 1,
      }] : []),
      ...section.paragraphs.map((text) => ({
        type: "paragraph",
        children: [{ type: "text", text, detail: 0, format: 0, mode: "normal", style: "", version: 1 }],
        direction: null,
        format: "",
        indent: 0,
        version: 1,
      })),
    ]),
    direction: null,
    format: "",
    indent: 0,
    version: 1,
  },
});

const asset = (path: string, alt: string) => ({ path, alt });

const mediaAssets = {
  mahaweli: asset("ccmg/mahaweli-water-security.png", "Mahaweli Water Security Investment Program"),
  embassy: asset("ccmg/us-embassy.jpg", "Development of the U.S. Embassy New Wing in Colombo"),
  taarp: asset("ccmg/taarp.png", "Tsunami Affected Areas Rebuilding Programme"),
  mallavi: asset("ccmg/mallavi-water-supply.jpg", "Mallavi Urban Water Supply"),
  advisory: asset("ccmg/corporate-advisory.png", "Strategic advisory and infrastructure planning"),
  carbon: asset("ccmg/insight-carbon-accounting.png", "Carbon accounting for infrastructure projects"),
  reporting: asset("ccmg/insight-esg-reporting.png", "ESG reporting and sustainable infrastructure"),
  sustainableFinance: asset("ccmg/insight-esg-infrastructure-investment.png", "Embedding ESG in infrastructure investment decisions"),
  partnerships: asset("YCHJGgkRB7sMQLRvuj4cAnDgI.png", "Strategic local partnership and representation"),
  ppp: asset("bALzNKWF74Li4qPs3Fnux5hNyQ.jpg", "PPP and transaction advisory"),
  strategy: asset("JY6gnnC5szRzDaloNrjsKReabo.webp", "Strategic advisory"),
  stakeholder: asset("eoKG5OCrfjIcZFq8Ajo0MwUVJ6c.jpeg", "Stakeholder engagement"),
};

const services = [
  ["strategic-local-partnerships", "Strategic Local Partnerships & Representation", "Local expert resourcing, facilitation, and single-point coordination for international consultants and EPC contractors from bidding through execution.", mediaAssets.partnerships, ["Bid & execution support", "Local expert resourcing", "Authority liaison", "Mobilisation planning"]],
  ["ppp-transaction-advisory", "PPP & Transaction Advisory", "End-to-end management of complex public-private partnerships, ensuring financial viability and regulatory compliance from inception to financial close.", mediaAssets.ppp, ["Feasibility & due diligence", "Procurement strategy", "Contract negotiation", "Risk allocation"]],
  ["strategic-advisory", "Strategic Advisory", "Data-driven corporate strategy for high-growth markets, helping organizations enter, restructure, transform, and improve performance.", mediaAssets.strategy, ["Market entry", "Operational restructuring", "Change management", "M&A integration"]],
  ["stakeholder-engagement", "Stakeholder Engagement", "Navigating complex political and social landscapes to align interests, mitigate risk, and secure the social licence to operate.", mediaAssets.stakeholder, ["Community engagement", "Government relations", "Crisis communications", "Policy advocacy"]],
  ["esg-sustainability", "ESG & Sustainability", "Moving beyond compliance to integrate sustainability into core business logic, creating long-term environmental, social, and commercial value.", mediaAssets.reporting, ["Carbon footprinting", "Social impact assessment", "Governance reviews", "Supply chain audit"]],
  ["government-regulatory-engineering-support", "Government, Regulatory & Engineering Support", "Approvals pathways, compliance tracking, institutional coordination, design interface, construction-supervision support, and ESHS alignment.", mediaAssets.advisory, ["Permits & approvals", "Utility coordination", "Construction supervision", "ESHS management"]],
] as const;

const caseStudies = [
  {
    slug: "mahaweli-water-security-investment-program", title: "Mahaweli Water Security Investment Program", category: "Water & Irrigation Infrastructure", location: "Mahaweli River Basin, Sri Lanka", client: "China State Construction Engineering Corporation", investmentValue: "ADB-funded programme", cover: mediaAssets.mahaweli, featured: true,
    summary: "Local coordination and delivery support for a major water-transfer and irrigation-modernisation programme.",
    metrics: [{ value: "2018–2025", label: "Period" }, { value: "ADB", label: "Funder" }],
    story: ["The Asian Development Bank-funded Mahaweli Water Security Investment Program includes early-stage mobilisation for the longest irrigation tunnel in South Asia.", "CCMG provided bidding assistance and coordinated stakeholders during evaluation, then supported implementation through local staff engagement, consultant facilitation, government coordination, and village-grievance handling."],
  },
  {
    slug: "us-embassy-new-wing", title: "Development of the U.S. Embassy New Wing", category: "Diplomatic Infrastructure", location: "Colombo, Sri Lanka", client: "Caddell Construction LLC", cover: mediaAssets.embassy, featured: true,
    summary: "Approvals, compliance and stakeholder-management support for high-security diplomatic infrastructure.",
    metrics: [{ value: "2021–2023", label: "Period" }, { value: "Colombo", label: "Location" }],
    story: ["CCMG supported Caddell Construction LLC in obtaining construction approvals and ensuring compliance for the development of the U.S. Embassy New Wing in Colombo.", "The team coordinated demolition design, utilities, and engagement with relevant authorities, helping de-risk reconstruction through permit management and proactive community interface."],
  },
  {
    slug: "taarp-tsunami-rebuilding-programme", title: "TAARP — Tsunami Rebuilding Programme", category: "Recovery & Reconstruction", location: "Sri Lanka", client: "Asian Development Bank", cover: mediaAssets.taarp, featured: false,
    summary: "Multi-disciplinary implementation review covering technical, financial, procurement, governance, and E&S performance.",
    metrics: [{ value: "2005", label: "Year" }, { value: "ADB", label: "Client" }],
    story: ["CCMG undertook a multi-disciplinary implementation review of the Tsunami Affected Areas Rebuilding Project (TAARP; Loan 2167/Grant 0006 SRI).", "The review covered technical, financial, procurement, governance, and environmental and social performance."],
  },
  {
    slug: "mallavi-urban-water-supply", title: "Mallavi Urban Water Supply", category: "Water Supply & Sanitation", location: "Mallavi, Sri Lanka", client: "Puritas (Pvt) Ltd", investmentValue: "World Bank-funded", cover: mediaAssets.mallavi, featured: true,
    summary: "Design coordination, construction supervision and pre-bid support for safe, sustainable urban water supply.",
    metrics: [{ value: "2024–2025", label: "Period" }, { value: "World Bank", label: "Funder" }],
    story: ["For the Mallavi Urban Water Supply System, CCMG coordinated all stages of the World Bank-funded project from bidding through execution.", "The team supported construction supervision, design modifications, and mechanical-engineering designs to meet delivery and compliance requirements."],
  },
  {
    slug: "jet-a1-aviation-fuel-pipeline", title: "Jet A-1 Aviation Fuel Pipeline", category: "Energy & Utilities", location: "Muthurajawela to Bandaranaike International Airport, Sri Lanka", client: "China State Construction Engineering Corporation", cover: mediaAssets.advisory, featured: false,
    summary: "Exclusive local pre-bid advisory for a high-sensitivity aviation-fuel pipeline corridor.",
    metrics: [{ value: "Bidding stage", label: "Status" }, { value: "~23 km", label: "Length" }],
    story: ["CCMG provided exclusive local pre-bid advisory for a high-sensitivity Jet A-1 pipeline corridor traversing dense urban areas, highways, wetlands, and the airport perimeter.", "The team mapped permit and ESHS risks, assembled local expertise, and coordinated clarifications to support a compliant and competitive submission."],
  },
  {
    slug: "water-supply-sanitation-legal-reform", title: "Water Supply & Sanitation Legal and Institutional Reform", category: "Policy & Regulation", location: "Sri Lanka", client: "ADB / National Water Supply & Drainage Board", partner: "IDP Philippines", cover: mediaAssets.advisory, featured: false,
    summary: "Legal and institutional advisory to strengthen water-supply and sanitation accountability and service quality.",
    metrics: [{ value: "2009–2010", label: "Period" }, { value: "Sri Lanka", label: "Location" }],
    story: ["CCMG drafted legal amendments to strengthen economic and technical regulation by the Public Utilities Commission.", "The work supported stronger sector accountability and service quality in water supply and sanitation."],
  },
] as const;

const insights = [
  { slug: "carbon-credits-in-sri-lanka", category: "Carbon Advisory", title: "Carbon accounting that stands up to scrutiny", readTime: "4 min read", cover: mediaAssets.carbon, excerpt: "Auditable ESG strategy and GHG accounting for complex development projects, bridging the gap between ambition and verifiable action.", sections: [{ heading: "Precision carbon accounting", paragraphs: ["CCMG supports carbon accounting that treats non-financial data with the rigor applied to a balance sheet, establishing controls and audit trails before scrutiny arrives.", "The work connects credible baselines, measurable data, and accountable ownership across complex development environments."] }, { heading: "From ambition to verifiable action", paragraphs: ["A carbon project requires more than a credible idea. CCMG maps the lifecycle through identification, validation, registration, issuance, and monetisation."] }] },
  { slug: "scope-1-2-3-esg-reporting", category: "ESG Reporting", title: "Making Scope 1, 2, and 3 reporting actionable", readTime: "3 min read", cover: mediaAssets.reporting, excerpt: "Good ESG reporting turns emissions and impact data into a basis for decisions, disclosure, and continuous improvement.", sections: [{ heading: "Start with a clear emissions boundary", paragraphs: ["Scope 1, Scope 2, and Scope 3 categories provide a practical framework for understanding direct and value-chain emissions.", "A useful reporting process connects those categories to reliable operational data, material issues, and accountable owners."] }, { heading: "Use recognised frameworks", paragraphs: ["CCMG’s ESG work is informed by reporting and management frameworks including GRI, SASB, the Sustainable Development Goals, and ISO 14001."] }] },
  { slug: "esg-for-infrastructure-and-investment", category: "Sustainable Finance", title: "Embedding ESG in infrastructure and investment decisions", readTime: "4 min read", cover: mediaAssets.sustainableFinance, excerpt: "ESG considerations work best when integrated early—across feasibility, stakeholder engagement, delivery, and long-term value creation.", sections: [{ heading: "A delivery lens for ESG", paragraphs: ["Infrastructure and market-entry decisions are shaped by institutions, communities, regulation, and capital. ESG planning needs to reflect that complete operating environment.", "CCMG brings together local representation, stakeholder understanding, and advisory support for organizations working in Sri Lanka’s complex sectors."] }, { heading: "From compliance to durable outcomes", paragraphs: ["The goal is to manage risk while identifying opportunities for stronger governance, social value, and environmental performance."] }] },
] as const;

const team = [
  ["Mahendra Kumarasinghe", "Chief Executive Officer"], ["G. M. A. Bandara", "Director, Engineering Strategic Affairs"], ["B. S. Lakmal", "Director, Growth Strategy"], ["Dr. Hasitha Kalhari Warusawitharana", "Consultant, Legal"], ["Havindu Liyanage", "Director, Sustainability & ESG"], ["Neil Jayasekara", "Associate"], ["Ranga Perera", "Head of Finance"], ["Ruwan Bolongho", "Head of Operations"], ["L. U. D. Athapattu", "Associate"], ["Anura Shanthi Wijethunga", "Associate"],
] as const;

if (process.env.CMS_SEED_CONFIRM !== "ccmg") {
  throw new Error("Seed blocked. Set CMS_SEED_CONFIRM=ccmg in a local or deployment-only environment file to continue.");
}

const payload = await getPayload({ config });

async function ensureMedia(source: { path: string; alt: string }) {
  const filename = basename(source.path);
  const existing = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1, overrideAccess: true });
  if (existing.docs[0]) return existing.docs[0].id;

  const absolutePath = resolve(publicAssets, source.path);
  const data = await readFile(absolutePath);
  const created = await payload.create({
    collection: "media",
    data: { alt: source.alt },
    file: { data, mimetype: mimeTypeFor(filename), name: filename, size: data.byteLength },
    overrideAccess: true,
  });
  return created.id;
}

async function upsertBySlug(collection: "services" | "case-studies" | "insights", slug: string, data: Record<string, unknown>) {
  const existing = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1, overrideAccess: true });
  if (existing.docs[0]) return payload.update({ collection, id: existing.docs[0].id, data, overrideAccess: true });
  return payload.create({ collection, data, overrideAccess: true });
}

async function upsertTeamMember(name: string, data: Record<string, unknown>) {
  const existing = await payload.find({ collection: "team-members", where: { name: { equals: name } }, limit: 1, overrideAccess: true });
  if (existing.docs[0]) return payload.update({ collection: "team-members", id: existing.docs[0].id, data, overrideAccess: true });
  return payload.create({ collection: "team-members", data, overrideAccess: true });
}

try {
  const media = new Map<string, string | number>();
  for (const [key, source] of Object.entries(mediaAssets)) media.set(key, await ensureMedia(source));

  for (const [index, [slug, title, summary, cover, capabilities]] of services.entries()) {
    await upsertBySlug("services", slug, {
      ...published, slug, title, summary, order: index + 1, featured: index < 3,
      coverImage: media.get(Object.entries(mediaAssets).find(([, value]) => value === cover)?.[0] ?? ""),
      capabilities: capabilities.map((title) => ({ title })),
    });
  }

  const caseStudyIds = new Map<string, string | number>();
  for (const [index, study] of caseStudies.entries()) {
    const { cover, story, ...caseStudy } = study;
    const coverKey = Object.entries(mediaAssets).find(([, value]) => value === study.cover)?.[0] ?? "";
    const document = await upsertBySlug("case-studies", study.slug, {
      ...published,
      ...caseStudy,
      coverImage: media.get(coverKey),
      order: index + 1,
      body: richText([{ paragraphs: [...story] }]),
    });
    caseStudyIds.set(study.slug, document.id);
  }

  for (const insightEntry of insights) {
    const { cover, sections, ...insight } = insightEntry;
    const coverKey = Object.entries(mediaAssets).find(([, value]) => value === cover)?.[0] ?? "";
    await upsertBySlug("insights", insight.slug, {
      ...published,
      ...insight,
      coverImage: media.get(coverKey),
      content: richText(sections),
      publishedAt: "2026-08-25T00:00:00.000Z",
    });
  }

  for (const [index, [name, role]] of team.entries()) {
    await upsertTeamMember(name, { ...published, name, role, order: index + 1 });
  }

  await payload.updateGlobal({
    slug: "site-settings",
    overrideAccess: true,
    data: {
      ...published,
      companyName: "Colombo Consultants & Management Group",
      tagline: "Global reach, local insight.",
      email: "sampath@colomboconsultants.lk",
      phone: "+94 11 287 7204",
      location: "512/C, Asiri Mawatha, Battaramulla, Sri Lanka",
      linkedinUrl: "https://www.linkedin.com/company/colombo-consultants-management-group/",
      defaultSeoTitle: "CCMG | Colombo Consultants & Management Group",
      defaultSeoDescription: "Strategic advisory, infrastructure delivery, and sustainability expertise across Sri Lanka and the region.",
    },
  });

  await payload.updateGlobal({
    slug: "home-page",
    overrideAccess: true,
    data: {
      ...published,
      hero: {
        eyebrow: "Colombo Consultants & Management Group",
        title: "Navigating complexity.\nDelivering impact.",
        summary: "We bridge public ambition and private capital, structuring and delivering critical infrastructure mandates across Sri Lanka and the region.",
        primaryCtaLabel: "Our Expertise", primaryCtaHref: "/#services",
        secondaryCtaLabel: "Explore Services", secondaryCtaHref: "/#services",
      },
      stats: [{ value: "2006", label: "Founded" }, { value: "6", label: "Practice lines" }, { value: "Sri Lanka + region", label: "Delivery focus" }],
      featuredCaseStudy: caseStudyIds.get("mahaweli-water-security-investment-program"),
      faqs: [
        { question: "How does CCMG support international partners?", answer: "We combine local representation, stakeholder access, and practical delivery coordination from bid through implementation." },
        { question: "What sustainability work does CCMG provide?", answer: "CCMG supports carbon, ESG reporting, sustainable finance, and assurance readiness through local delivery and international technical partnerships." },
      ],
      closingCta: { title: "Ready to move from insight to impact?", summary: "Tell us your challenge and we will connect you with the right expertise and a clear path to delivery.", label: "Start a Conversation" },
    },
  });

  console.log("CCMG CMS content seed completed successfully.");
} finally {
  await payload.destroy();
}
