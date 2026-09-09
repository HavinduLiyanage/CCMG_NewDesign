import { ArrowIcon } from "./icons";
import { useCmsContent } from "../cms/CmsContentProvider";
import "./Footer.css";

export default function Footer() {
  const { site } = useCmsContent();
  const phoneHref = site.phone.replace(/\D/g, "");

  return (
    <footer className="site-footer">
      <div className="site-footer__inner page-shell">
        <div className="site-footer__brand">
          <a href="/" aria-label="Colombo Consultants & Management Group home">
            <img className="brand-logo" src="/assets/ccmg/company-logo-transparent-exact.png" alt="CCMG — Colombo Consultants & Management Group" />
          </a>
          <p>{site.tagline} Turning complex mandates into projects that are socially responsible and commercially viable.</p>
          <a className="button site-footer__button" href="/contact">
            Let’s Talk <ArrowIcon />
          </a>
        </div>

        <nav className="site-footer__column" aria-label="Footer main pages">
          <h2>Main Pages</h2>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/blogs">Insights</a>
          <a href="/contact">Contact</a>
        </nav>

        <address className="site-footer__column site-footer__contact">
          <h2>Contact</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${phoneHref}`}>{site.phone}</a>
          <span>{site.location}</span>
        </address>

        <div className="site-footer__legal">
          <div>
            <a href="/legal-policy/legal-policy">Terms</a>
            <a href="/legal-policy/privacy-policy">Private Policy</a>
          </div>
          <a href={site.linkedinUrl || "/"} target={site.linkedinUrl ? "_blank" : undefined} rel={site.linkedinUrl ? "noreferrer" : undefined}>
            © {site.companyName}
          </a>
        </div>
      </div>
    </footer>
  );
}
