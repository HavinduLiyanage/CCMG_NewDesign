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
import TestimonialsSection from "./components/TestimonialsSection";
import { BlogsSection } from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";
import {
  AboutPage,
  ArticlePage,
  BlogsPage,
  ContactPage,
  LegalPage,
  ProjectDetailPage,
  ProjectsPage,
} from "./pages/RoutePages";
import { articles, projects } from "./data/routeData";

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, "") || "/");

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
  const project = projects.find((item) => item.slug === projectSlug);
  const article = articles.find((item) => item.slug === articleSlug);

  let content = (
    <>
      <HeroHeader />
      <main id="main-content">
        <IntroStatement />
        <ProjectsSection />
        <PartnersSection />
        <FeatureTestimonial />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <BlogsSection />
        <ContactSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );

  if (path === "/about") content = <AboutPage />;
  if (path === "/projects") content = <ProjectsPage />;
  if (project) content = <ProjectDetailPage project={project} />;
  if (path === "/blogs") content = <BlogsPage />;
  if (article) content = <ArticlePage article={article} />;
  if (path === "/contact") content = <ContactPage />;
  if (path === "/legal-policy/legal-policy") content = <LegalPage />;
  if (path === "/legal-policy/privacy-policy") content = <LegalPage privacy />;

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="main-content">{content}</div>
    </MotionConfig>
  );
}
