import {
  articles as staticArticles,
  projects as staticProjects,
  team as staticTeam,
  type Article,
  type Project,
} from "./routeData";

export type CmsService = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type CmsProject = Project & {
  featured: boolean;
  order: number;
};

export type CmsTeamMember = {
  name: string;
  role: string;
};

export type CmsPartner = {
  name: string;
  slug: string;
  image: string;
  website?: string;
};

export type CmsStat = {
  value: string;
  label: string;
  description: string;
};

export type CmsHero = {
  title: string;
  summary: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export type CmsSiteSettings = {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
};

export type CmsContent = {
  source: "cms" | "static";
  services: CmsService[];
  projects: CmsProject[];
  articles: Article[];
  team: CmsTeamMember[];
  partners: CmsPartner[];
  home: {
    hero: CmsHero;
    stats: CmsStat[];
    closingCta: { title: string; summary?: string; label: string };
  };
  site: CmsSiteSettings;
};

const staticServices: CmsService[] = [
  {
    title: "Strategic Local Partnerships & Representation",
    description: "Local expert resourcing, facilitation, and single-point coordination for international consultants and EPC contractors from bidding through execution.",
    tags: ["Bid & execution support", "Local expert resourcing", "Authority liaison", "Mobilisation planning"],
    image: "/assets/YCHJGgkRB7sMQLRvuj4cAnDgI.png",
  },
  {
    title: "PPP & Transaction Advisory",
    description: "End-to-end management of complex public-private partnerships, ensuring financial viability and regulatory compliance from inception to financial close.",
    tags: ["Feasibility & due diligence", "Procurement strategy", "Contract negotiation", "Risk allocation"],
    image: "/assets/bALzNKWF74Li4qPs3Fnux5hNyQ.jpg",
  },
  {
    title: "Strategic Advisory",
    description: "Data-driven corporate strategy for high-growth markets, helping organizations enter, restructure, transform, and improve performance.",
    tags: ["Market entry", "Operational restructuring", "Change management", "M&A integration"],
    image: "/assets/JY6gnnC5szRzDaloNrjsKReabo.webp",
  },
  {
    title: "Stakeholder Engagement",
    description: "Navigating complex political and social landscapes to align interests, mitigate risk, and secure the social licence to operate.",
    tags: ["Community engagement", "Government relations", "Crisis communications", "Policy advocacy"],
    image: "/assets/eoKG5OCrfjIcZFq8Ajo0MwUVJ6c.jpeg",
  },
  {
    title: "ESG & Sustainability",
    description: "Moving beyond compliance to integrate sustainability into core business logic, creating long-term environmental, social, and commercial value.",
    tags: ["Carbon footprinting", "Social impact assessment", "Governance reviews", "Supply chain audit"],
    image: "/assets/ccmg/us-embassy-gallery-1.jpg",
  },
  {
    title: "Government, Regulatory & Engineering Support",
    description: "Approvals pathways, compliance tracking, institutional coordination, design interface, construction-supervision support, and ESHS alignment.",
    tags: ["Permits & approvals", "Utility coordination", "Construction supervision", "ESHS management"],
    image: "/assets/ccmg/government-engineering-site.png",
  },
];

const staticPartners: CmsPartner[] = [
  ["rosen", "ROSEN"], ["sweroad", "Sweroad"], ["greenenergy-gpo", "GreenEnergy GPO"], ["ek-consult", "EK Consult"],
  ["suez", "SUEZ"], ["cecb", "CECB"], ["ipd", "Institute for Participatory Development"], ["alf-consulting", "ALF Consulting Engineers"],
  ["ocreeds", "O.CREEDS"], ["inter-consult", "Inter-Consult"], ["cscec", "China State Construction Engineering Corporation"],
  ["china-geo", "China Geo Engineering Group"], ["china-poly", "China Poly Group Corporation"], ["ages", "Consultants AGES"],
  ["millennium-it-esp", "Millennium IT ESP"], ["careedge", "CareEdge Analytics & Advisory"], ["caddell", "Caddell Construction"],
].map(([slug, name]) => ({ name, slug, image: `/assets/ccmg/partners/${slug}.png` }));

const staticStats: CmsStat[] = [
  { value: "19+", label: "Years of excellence", description: "Navigating complex regulatory landscapes and delivering viable frameworks across South Asia." },
  { value: "$4.2B", label: "Project value", description: "Cumulative value of infrastructure and energy projects structured and advised." },
  { value: "100%", label: "Stakeholder alignment", description: "Deep integration with government bodies, development banks, and private investors." },
  { value: "2006", label: "Established", description: "Sri Lankan advisory and transaction support for complex public and private-sector mandates." },
];

export const fallbackCmsContent: CmsContent = {
  source: "static",
  services: staticServices,
  projects: staticProjects.map((project, index) => ({ ...project, featured: index < 3, order: index + 1 })),
  articles: staticArticles,
  team: Array.from(staticTeam, ([name, role]) => ({ name, role })),
  partners: staticPartners,
  home: {
    hero: {
      title: "Navigating complexity.\nDelivering impact.",
      summary: "We bridge public ambition and private capital, structuring and delivering critical infrastructure mandates across Sri Lanka and the region.",
      primaryCtaLabel: "Our Expertise",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "Explore Services",
      secondaryCtaHref: "/#services",
    },
    stats: staticStats,
    closingCta: {
      title: "Ready to transform your infrastructure strategy?",
      label: "Book a Consultation",
    },
  },
  site: {
    companyName: "Colombo Consultants & Management Group",
    tagline: "Global reach, local insight.",
    email: "sampath@colomboconsultants.lk",
    phone: "+94 11 287 7204",
    location: "512/C, Asiri Mawatha, Battaramulla, Sri Lanka",
    linkedinUrl: "https://www.linkedin.com/company/colombo-consultants-management-group/",
    defaultSeoTitle: "CCMG | Colombo Consultants & Management Group",
    defaultSeoDescription: "Strategic advisory, infrastructure delivery, and sustainability expertise across Sri Lanka and the region.",
  },
};

type PayloadMedia = { url?: string | null } | number | null | undefined;

type PayloadLexicalNode = {
  children?: PayloadLexicalNode[];
  tag?: string;
  text?: string;
  type?: string;
};

type PayloadRichText = { root?: { children?: PayloadLexicalNode[] } } | null | undefined;

type PayloadService = {
  title?: string;
  slug?: string;
  summary?: string;
  coverImage?: PayloadMedia;
  capabilities?: { title?: string | null }[] | null;
};

type PayloadProject = {
  title?: string;
  slug?: string;
  category?: string;
  location?: string | null;
  client?: string | null;
  partner?: string | null;
  investmentValue?: string | null;
  summary?: string;
  body?: PayloadRichText;
  coverImage?: PayloadMedia;
  gallery?: { image?: PayloadMedia }[] | null;
  metrics?: { label?: string | null; value?: string | null }[] | null;
  featured?: boolean | null;
  order?: number | null;
};

type PayloadInsight = {
  title?: string;
  slug?: string;
  category?: string;
  excerpt?: string;
  content?: PayloadRichText;
  coverImage?: PayloadMedia;
  readTime?: string | null;
  publishedAt?: string | null;
};

type PayloadTeamMember = { name?: string; role?: string; order?: number | null };

type PayloadPartner = {
  name?: string;
  slug?: string;
  logo?: PayloadMedia;
  website?: string | null;
};

type PayloadHome = {
  hero?: Partial<CmsHero>;
  stats?: { value?: string | null; label?: string | null }[] | null;
  closingCta?: { title?: string; summary?: string | null; label?: string };
};

type PayloadSiteSettings = Partial<CmsSiteSettings>;

type PayloadResponse<T> = { docs?: T[] };

const cmsUrl = import.meta.env.VITE_CMS_URL?.replace(/\/$/, "");

function textFromNode(node: PayloadLexicalNode): string {
  if (typeof node.text === "string") return node.text;
  return (node.children ?? []).map(textFromNode).join("");
}

function paragraphsFromRichText(value: PayloadRichText): string[] {
  return (value?.root?.children ?? [])
    .filter((node) => node.type === "paragraph")
    .map(textFromNode)
    .filter(Boolean);
}

function sectionsFromRichText(value: PayloadRichText): Article["sections"] {
  const sections: Article["sections"] = [];
  let current: Article["sections"][number] = { paragraphs: [] };

  for (const node of value?.root?.children ?? []) {
    if (node.type === "heading") {
      if (current.heading || current.paragraphs.length) sections.push(current);
      current = { heading: textFromNode(node), paragraphs: [] };
    }
    if (node.type === "paragraph") current.paragraphs.push(textFromNode(node));
  }

  if (current.heading || current.paragraphs.length) sections.push(current);
  return sections.filter((section) => section.heading || section.paragraphs.length);
}

function mediaUrl(media: PayloadMedia, fallback: string): string {
  if (!media || typeof media === "number" || typeof media.url !== "string") return fallback;
  if (/^https?:\/\//i.test(media.url)) return media.url;
  return `${cmsUrl}${media.url.startsWith("/") ? "" : "/"}${media.url}`;
}

function fallbackProject(slug?: string): CmsProject {
  return fallbackCmsContent.projects.find((project) => project.slug === slug) ?? {
    slug: slug ?? "untitled-project",
    title: "Untitled project",
    category: "CCMG engagement",
    location: "Sri Lanka",
    image: "/assets/ccmg/mahaweli-water-security.png",
    portrait: "/assets/ccmg/mahaweli-water-security.png",
    gallery: ["/assets/ccmg/mahaweli-water-security.png"],
    details: [],
    story: [],
    quote: "Global reach, local insight.",
    quoteBy: "Colombo Consultants & Management Group",
    featured: false,
    order: 999,
  };
}

function toProject(document: PayloadProject): CmsProject {
  const fallback = fallbackProject(document.slug);
  const image = mediaUrl(document.coverImage, fallback.image);
  const gallery = (document.gallery ?? [])
    .map((entry) => mediaUrl(entry.image, ""))
    .filter(Boolean);
  const story = paragraphsFromRichText(document.body);
  const editableDetails = [
    ...(document.metrics ?? []).flatMap(({ label, value }) => label && value ? [{ label, value }] : []),
    ...(document.location ? [{ label: "Location", value: document.location }] : []),
    ...(document.client ? [{ label: "Client", value: document.client }] : []),
    ...(document.partner ? [{ label: "Partner", value: document.partner }] : []),
    ...(document.investmentValue ? [{ label: "Investment", value: document.investmentValue }] : []),
  ].filter((detail, index, all) => all.findIndex(({ label }) => label === detail.label) === index);

  return {
    ...fallback,
    title: document.title || fallback.title,
    slug: document.slug || fallback.slug,
    category: document.category || fallback.category,
    location: document.location || fallback.location,
    image,
    portrait: gallery[0] || fallback.portrait || image,
    gallery: gallery.length ? gallery : fallback.gallery,
    details: editableDetails.length ? editableDetails : fallback.details,
    story: story.length ? story : fallback.story,
    featured: Boolean(document.featured),
    order: document.order ?? fallback.order,
  };
}

function toArticle(document: PayloadInsight): Article {
  const fallback = fallbackCmsContent.articles.find((article) => article.slug === document.slug);
  const image = mediaUrl(document.coverImage, fallback?.image ?? "/assets/ccmg/insight-carbon-accounting.png");
  const sections = sectionsFromRichText(document.content);

  return {
    slug: document.slug || fallback?.slug || "untitled-insight",
    category: document.category || fallback?.category || "Insight",
    title: document.title || fallback?.title || "Untitled insight",
    excerpt: document.excerpt || fallback?.excerpt || "",
    date: fallback?.date || "CCMG insight",
    readTime: document.readTime || fallback?.readTime || "4 min read",
    image,
    sections: sections.length ? sections : fallback?.sections || [{ paragraphs: [document.excerpt || ""] }],
  };
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${cmsUrl}${path}`, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`CMS request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export async function getCmsContent(): Promise<CmsContent> {
  if (!cmsUrl) return fallbackCmsContent;

  try {
    const published = "where[_status][equals]=published";
    const [services, projects, insights, team, partners, home, site] = await Promise.all([
      getJson<PayloadResponse<PayloadService>>(`/api/services?${published}&sort=order&depth=1&limit=100`),
      getJson<PayloadResponse<PayloadProject>>(`/api/case-studies?${published}&sort=order&depth=2&limit=100`),
      getJson<PayloadResponse<PayloadInsight>>(`/api/insights?${published}&sort=-publishedAt&depth=1&limit=100`),
      getJson<PayloadResponse<PayloadTeamMember>>(`/api/team-members?${published}&sort=order&limit=100`),
      getJson<PayloadResponse<PayloadPartner>>(`/api/partners?${published}&sort=order&depth=1&limit=100`),
      getJson<PayloadHome>("/api/globals/home-page?depth=1"),
      getJson<PayloadSiteSettings>("/api/globals/site-settings"),
    ]);

    const liveServices = (services.docs ?? []).map((service) => {
      const fallback = fallbackCmsContent.services.find((item) => item.title === service.title);
      return {
        title: service.title || fallback?.title || "Untitled service",
        description: service.summary || fallback?.description || "",
        tags: (service.capabilities ?? []).flatMap(({ title }) => title ? [title] : []),
        image: mediaUrl(service.coverImage, fallback?.image || "/assets/ccmg/government-engineering-site.png"),
      };
    });

    const liveProjects = (projects.docs ?? []).map(toProject);
    const liveArticles = (insights.docs ?? []).map(toArticle);
    const liveTeam = (team.docs ?? []).flatMap(({ name, role }) => name && role ? [{ name, role }] : []);
    const livePartners = (partners.docs ?? []).flatMap((partner) => {
      if (!partner.name || !partner.slug) return [];
      const fallback = fallbackCmsContent.partners.find((item) => item.slug === partner.slug);
      return [{
        name: partner.name,
        slug: partner.slug,
        image: mediaUrl(partner.logo, fallback?.image || "/assets/ccmg/partners/rosen.png"),
        ...(partner.website ? { website: partner.website } : {}),
      }];
    });

    return {
      source: "cms",
      services: liveServices.length ? liveServices : fallbackCmsContent.services,
      projects: liveProjects.length ? liveProjects : fallbackCmsContent.projects,
      articles: liveArticles.length ? liveArticles : fallbackCmsContent.articles,
      team: liveTeam.length ? liveTeam : fallbackCmsContent.team,
      partners: livePartners.length ? livePartners : fallbackCmsContent.partners,
      home: {
        hero: { ...fallbackCmsContent.home.hero, ...home.hero },
        stats: (home.stats ?? []).flatMap(({ value, label }, index) => value && label ? [{
          value,
          label,
          description: fallbackCmsContent.home.stats[index]?.description || "A CCMG measure of delivery and capability.",
        }] : []),
        closingCta: {
          ...fallbackCmsContent.home.closingCta,
          ...(home.closingCta?.title ? { title: home.closingCta.title } : {}),
          ...(home.closingCta?.summary ? { summary: home.closingCta.summary } : {}),
          ...(home.closingCta?.label ? { label: home.closingCta.label } : {}),
        },
      },
      site: { ...fallbackCmsContent.site, ...site },
    };
  } catch (error) {
    console.warn("CCMG CMS content could not be loaded; using approved local fallback.", error);
    return fallbackCmsContent;
  }
}
