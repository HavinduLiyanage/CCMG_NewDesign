import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { HeroHeader } from "./components/HeroHeader";
import IntroStatement from "./components/IntroStatement";
import { ProjectsSection } from "./components/ProjectsSection";
import PartnersSection from "./components/PartnersSection";
import FeatureTestimonial from "./components/FeatureTestimonial";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import ResultsSection from "./components/ResultsSection";
import { BlogsSection } from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";
import { CmsContentProvider, useCmsContent } from "./cms/CmsContentProvider";
import {
  AboutPage,
  ArticlePage,
  BlogsPage,
  ContactPage,
  LegalPage,
  ProjectDetailPage,
  ProjectsPage,
} from "./pages/RoutePages";

function AppRoutes() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, "") || "/");
  const cms = useCmsContent();

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname.replace(/\/+$/, "") || "/");
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  const projectSlug = path.startsWith("/projects/") ? path.slice("/projects/".length) : "";
  const articleSlug = path.startsWith("/blogs/") ? path.slice("/blogs/".length) : "";
  const project = cms.projects.find((item) => item.slug === projectSlug);
  const article = cms.articles.find((item) => item.slug === articleSlug);
  const featuredProjects = cms.projects.filter((item) => item.featured).slice(0, 3);

  let content = (
    <>
      <HeroHeader hero={cms.home.hero} />
      <main id="main-content">
        <IntroStatement />
        <ProjectsSection projects={featuredProjects.length ? featuredProjects : cms.projects.slice(0, 3)} />
        <PartnersSection partners={cms.partners} />
        <FeatureTestimonial />
        <ServicesSection services={cms.services} />
        <ProcessSection />
        <ResultsSection stats={cms.home.stats} />
        <BlogsSection articles={cms.articles.slice(0, 2)} />
        <ContactSection />
        <ClosingCta {...cms.home.closingCta} />
      </main>
      <Footer />
    </>
  );

  if (path === "/about") content = <AboutPage team={cms.team} />;
  if (path === "/projects") content = <ProjectsPage projects={cms.projects} />;
  if (project) content = <ProjectDetailPage project={project} projects={cms.projects} />;
  if (path === "/blogs") content = <BlogsPage articles={cms.articles} />;
  if (article) content = <ArticlePage article={article} articles={cms.articles} />;
  if (path === "/contact") content = <ContactPage />;
  if (path === "/legal-policy/legal-policy") content = <LegalPage />;
  if (path === "/legal-policy/privacy-policy") content = <LegalPage privacy />;

  return <><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{content}</div></>;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CmsContentProvider>
        <AppRoutes />
      </CmsContentProvider>
    </MotionConfig>
  );
}
