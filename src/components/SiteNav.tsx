import { useEffect, useState } from "react";
import { ArrowIcon } from "./icons";
import "./SiteNav.css";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blogs" },
] as const;

type SiteNavProps = {
  inverted?: boolean;
};

export default function SiteNav({ inverted = false }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <header className={`site-nav${inverted ? " site-nav--inverted" : ""}`}>
      <a className="site-nav__brand" href="/" aria-label="Colombo Consultants & Management Group home">
        <img className="brand-logo" src="/assets/ccmg/company-logo-transparent-exact.png" alt="CCMG — Colombo Consultants & Management Group" />
      </a>

      <nav className="site-nav__links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="site-nav__cta" href="/contact">
        Let’s Talk <ArrowIcon />
      </a>

      <button
        type="button"
        className="site-nav__menu"
        aria-controls="site-navigation-drawer"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="site-nav__menu-lines"><i /><i /></span>
        Menu
      </button>

      <div id="site-navigation-drawer" className="site-nav__drawer" data-open={open} aria-hidden={!open}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Let’s Talk</a>
      </div>
    </header>
  );
}
