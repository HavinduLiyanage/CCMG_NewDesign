import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import ClosingCta from "../components/ClosingCta";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { ArrowIcon } from "../components/icons";
import SiteNav from "../components/SiteNav";
import type { CmsTeamMember } from "../data/cmsContent";
import type { Article, Project } from "../data/routeData";
import "./RoutePages.css";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] as const },
};

function PageFrame({ children, ctaTitle }: { children: ReactNode; ctaTitle?: string }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <ClosingCta title={ctaTitle} />
      <Footer />
    </>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="route-kicker">{children}</p>;
}

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <a className={`project-card${compact ? " project-card--compact" : ""}`} href={`/projects/${project.slug}`}>
      <img src={project.image} alt={`${project.title} project`} loading="lazy" />
      <span className="project-card__veil" aria-hidden="true" />
      <span className="project-card__category">{project.category}</span>
      <span className="project-card__copy">
        <strong>{project.title}</strong>
        <small>{project.location}</small>
      </span>
      <span className="project-card__arrow" aria-hidden="true"><ArrowIcon /></span>
    </a>
  );
}

function BlogCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  return (
    <a className={`blog-card${compact ? " blog-card--compact" : ""}`} href={`/blogs/${article.slug}`}>
      <img className="blog-card__image" src={article.image} alt="" loading="lazy" />
      <span className="blog-card__category">{article.category}</span>
      <strong>{article.title}</strong>
      <span className="blog-card__footer"><time>{article.date}</time><span>{article.readTime}</span></span>
    </a>
  );
}

export function AboutPage({ team }: { team: CmsTeamMember[] }) {
  const timeline = [
    ["2006", "CCMG is founded in Sri Lanka as an advisory and transaction partner for complex public and private-sector mandates."],
    ["2009–2010", "Legal and institutional advisory supports stronger accountability and service quality in Sri Lanka’s water and sanitation sector."],
    ["2018–2025", "CCMG supports the Mahaweli Water Security Investment Program from bidding through implementation."],
    ["2024–2025", "Mallavi Urban Water Supply System work brings design coordination, construction supervision, and pre-bid support together."],
  ];

  return (
    <PageFrame>
      <section className="about-hero page-shell">
        <img src="/assets/ccmg/about-local-global-strategy.png" alt="Advisers overlooking a resilient urban infrastructure landscape in Sri Lanka" />
        <div className="about-hero__veil" aria-hidden="true" />
        <h1>Deep local roots.<br />Global strategic rigor.</h1>
      </section>

      <motion.section className="about-intro" {...reveal}>
        <p>Founded in 2006, CCMG is a Sri Lankan advisory and transaction partner that turns complex mandates into projects that are socially responsible and commercially viable.</p>
        <p>We align policy, permits, finance, environmental and social safeguards, and stakeholder engagement so international ideas can succeed on Sri Lankan ground and across the region.</p>
      </motion.section>

      <section className="about-mission">
        <motion.div className="page-shell about-mission__inner" {...reveal}>
          <div className="about-mission__title"><Kicker>Our North Star</Kicker><h2>What guides us.</h2></div>
          <article><span>01</span><h3>Our Mission</h3><p>To help organizations navigate Sri Lanka’s complexity with trusted local representation, disciplined advisory, and outcome ownership.</p></article>
          <article><span>02</span><h3>Our Vision</h3><p>To create sustainable institutional impact across the sectors that shape Sri Lanka’s future.</p></article>
        </motion.div>
      </section>

      <section className="about-values">
        <div className="page-shell">
        <motion.div className="about-values__heading" {...reveal}><Kicker>Our journey</Kicker><h2>From local roots to complex mandates.</h2></motion.div>
          <div className="about-timeline">
            {timeline.map(([year, copy]) => <motion.article key={year} {...reveal}><strong>{year}</strong><span /><p>{copy}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="about-team page-shell">
        <motion.div className="about-team__heading" {...reveal}><Kicker>Our Team</Kicker><h2>The people behind the work</h2></motion.div>
        <div className="about-team__grid">
          {team.map(({ name, role }, index) => <motion.article key={name} {...reveal}><span className="about-team__number">{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{role}</p></div></motion.article>)}
        </div>
      </section>

      <ContactSection />
    </PageFrame>
  );
}

export function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <PageFrame>
      <section className="route-collection page-shell">
        <motion.div className="route-collection__heading" {...reveal}>
          <Kicker>Case Studies</Kicker>
          <h1>Experience that moves Sri Lanka forward.</h1>
          <p>Explore selected CCMG engagements across water, institutional infrastructure, recovery, and strategic advisory.</p>
        </motion.div>
        <div className="project-grid">
          {projects.map((project) => <motion.div key={project.slug} {...reveal}><ProjectCard project={project} /></motion.div>)}
        </div>
      </section>
    </PageFrame>
  );
}

export function ProjectDetailPage({ project, projects }: { project: Project; projects: Project[] }) {
  const propertyDetails = project.details;
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="project-detail__hero" style={{ backgroundImage: `url(${project.image})` }}>
        <span className="project-detail__hero-veil" aria-hidden="true" />
        <SiteNav inverted />
        <h1>{project.title}</h1>
      </section>
      <main>
        <section className="project-detail__story page-shell">
          <div className="project-detail__details"><Kicker>Engagement details</Kicker>{propertyDetails.map(({ label, value }) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          <div className="project-detail__body">{project.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="project-detail__gallery page-shell" aria-label={`${project.title} gallery`}>
          {project.gallery.map((image, index) => <motion.figure key={image} {...reveal}><img src={image} alt="" loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></motion.figure>)}
        </section>

        <section className="project-detail__quote">
          <div className="page-shell project-detail__quote-inner">
            <img src={project.portrait} alt="CCMG project context" loading="lazy" />
            <blockquote><span>“</span><p>{project.quote}</p><footer>{project.quoteBy}</footer></blockquote>
          </div>
        </section>

        <section className="project-detail__related page-shell">
          <div><Kicker>Related projects</Kicker><h2>You also might like</h2></div>
          <div className="project-detail__related-grid">{related.map((item) => <ProjectCard key={item.slug} project={item} compact />)}</div>
        </section>
      </main>
      <ClosingCta />
      <Footer />
    </>
  );
}

export function BlogsPage({ articles }: { articles: Article[] }) {
  return (
    <PageFrame>
      <section className="route-collection page-shell">
        <motion.div className="route-collection__heading" {...reveal}>
          <Kicker>Insights</Kicker>
          <h1>Perspective for sustainable progress.</h1>
          <p>Practical CCMG perspectives on ESG, carbon markets, infrastructure, and operating successfully in Sri Lanka.</p>
        </motion.div>
        <div className="blog-grid">{articles.map((article) => <motion.div key={article.slug} {...reveal}><BlogCard article={article} /></motion.div>)}</div>
      </section>
    </PageFrame>
  );
}

export function ArticlePage({ article, articles }: { article: Article; articles: Article[] }) {
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  return (
    <PageFrame>
      <article className="article-page">
        <header className="article-page__header page-shell">
          <motion.div {...reveal}><Kicker>{article.category}</Kicker><h1>{article.title}</h1><p>{article.excerpt}</p><div><time>{article.date}</time><span>•</span><span>{article.readTime}</span></div></motion.div>
        </header>
        <motion.figure className="article-page__cover page-shell" {...reveal}><img src={article.image} alt="" /><span className="article-page__cover-depth" aria-hidden="true" /></motion.figure>
        <div className="article-page__body">
          {article.sections.map((section) => <motion.section key={section.heading} {...reveal}>{section.heading && <h2>{section.heading}</h2>}{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</motion.section>)}
        </div>
        <section className="article-page__related page-shell"><div><Kicker>More insights</Kicker><h2>You also might like</h2></div><div className="article-page__related-grid">{related.map((item) => <BlogCard key={item.slug} article={item} compact />)}</div></section>
      </article>
    </PageFrame>
  );
}

export function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const offices = [["Battaramulla", "512/C, Asiri Mawatha, Battaramulla, Sri Lanka", "sampath@colomboconsultants.lk", "+94 11 287 7204"]];
  const faqs = [
    ["How do you support foreign investors and partners?", "We help assess the Sri Lankan operating environment, establish credible local representation, and coordinate the relationships needed to move from market-entry intent to practical delivery."],
    ["Can CCMG support ESG and carbon projects?", "Yes. CCMG provides sustainability, ESG, and carbon advisory support from project identification through validation, registration, issuance, and monetisation."],
    ["Do you work with public-sector stakeholders?", "CCMG has experience in institutional environments and helps clients navigate government engagement, community context, and delivery coordination."],
    ["What is CCMG’s integrator model?", "CCMG brings the right technical, institutional, and delivery partners around a clear mandate, retaining accountability for a coordinated outcome."],
    ["How do we get started?", "Share your challenge through the contact form or contact the Colombo team directly. We will scope the right next conversation."],
  ];
  return (
    <PageFrame>
      <ContactSection asMainHeading />
      <section className="contact-offices page-shell"><motion.div {...reveal}><Kicker>Direct Contact</Kicker><h2>Based in Sri Lanka.<br />Connected globally.</h2></motion.div><div className="contact-offices__grid">{offices.map(([city, address, email, phone]) => <motion.article key={city} {...reveal}><h3>{city}, Sri Lanka</h3><p>{address}</p><a href={`mailto:${email}`}>{email}</a><a href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a></motion.article>)}</div></section>
      <section className="contact-faq page-shell"><motion.div {...reveal}><Kicker>FAQ</Kicker><h2>You have questions.<br />We have answers.</h2></motion.div><div className="contact-faq__items">{faqs.map(([question, answer], index) => <article key={question}><button type="button" aria-expanded={activeFaq === index} onClick={() => setActiveFaq((active) => active === index ? -1 : index)}><span>{question}</span><i aria-hidden="true">+</i></button><div className="contact-faq__answer" data-open={activeFaq === index}><p>{answer}</p></div></article>)}</div></section>
    </PageFrame>
  );
}

const termsSections = [
  ["1. Acceptance of Terms", "By accessing or using the Colombo Consultants & Management Group website and our consulting services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services."],
  ["2. Services", "Colombo Consultants & Management Group provides local representation, strategic advisory, infrastructure, and sustainability support. All service scopes, deliverables, and timelines will be defined in a separate engagement agreement or proposal signed by both parties."],
  ["3. Consultations & Scheduling", "When you schedule a call or consultation through our website, you agree to provide accurate contact information. We reserve the right to cancel or reschedule sessions with reasonable notice."],
  ["4. Intellectual Property", "All content on this website—including text, graphics, reports, frameworks, and methodologies—is the property of Colombo Consultants & Management Group and protected by applicable copyright and intellectual property laws."],
  ["5. Confidentiality", "We treat all client information with strict confidentiality. Any proprietary business information you share during engagements will not be disclosed to third parties without your consent, except as required by law."],
  ["6. Limitation of Liability", "Colombo Consultants & Management Group provides advisory services based on available information and professional judgment. While we strive for the best outcomes, we cannot guarantee specific financial results."],
  ["7. Third-Party Links", "Our website may contain links to third-party sites. We are not responsible for the content or practices of those external sites."],
  ["8. Changes to Terms", "We reserve the right to update these Terms at any time. Continued use of our website after changes constitutes your acceptance of the revised Terms."],
  ["9. Governing Law", "These Terms shall be governed by the laws of your applicable state or country, without regard to its conflict of law provisions."],
  ["10. Contact", "For questions about these Terms, please contact us at sampath@colomboconsultants.lk."],
];

const privacySections = [
  ["1. Introduction", "Colombo Consultants & Management Group is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services."],
  ["2. Information We Collect", "We may collect contact information when you fill out a contact form, usage data collected via analytics tools, and messages or inquiries you send directly."],
  ["3. How We Use Your Information", "We use your information to respond to inquiries, deliver and improve our services, send relevant updates with your consent, and improve the website experience."],
  ["4. Data Sharing", "We do not sell your personal information. We use Formspree to process website contact-form submissions and may use other trusted service providers solely to operate our business. We require them to handle information securely."],
  ["5. Cookies", "Our website may use cookies to enhance your browsing experience and track analytics. You can disable cookies through your browser settings, though some features may not function properly."],
  ["6. Data Retention", "We retain your personal data only as long as necessary to fulfill the stated purposes or as required by law."],
  ["7. Your Rights", "Depending on your location, you may have the right to access, correct, or delete personal data, withdraw consent, or lodge a complaint with a data protection authority."],
  ["8. Data Security", "We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure."],
  ["9. Children's Privacy", "Our services are not directed to individuals under 18. We do not knowingly collect data from minors."],
  ["10. Updates to This Policy", "We may update this Privacy Policy periodically. We'll post the revised version on this page with an updated effective date."],
  ["11. Contact Us", "If you have questions about this Privacy Policy, please reach out at sampath@colomboconsultants.lk."],
];

export function LegalPage({ privacy = false }: { privacy?: boolean }) {
  const title = privacy ? "Privacy Policy" : "Terms & Conditions";
  const date = privacy ? "Feb 18, 2026" : "Aug 15, 2025";
  const sections = privacy ? privacySections : termsSections;
  return (
    <PageFrame>
      <article className="legal-page page-shell"><motion.header {...reveal}><Kicker>Legal Policy</Kicker><h1>{title}</h1><p>Last updated <time>{date}</time></p></motion.header><div className="legal-page__body">{sections.map(([heading, copy]) => <motion.section key={heading} {...reveal}><h2>{heading}</h2><p>{copy}</p></motion.section>)}</div></article>
    </PageFrame>
  );
}
