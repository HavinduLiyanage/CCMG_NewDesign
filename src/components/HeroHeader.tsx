import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { CmsHero } from "../data/cmsContent";
import { ArrowIcon } from "./icons";
import "./HeroHeader.css";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blogs" },
] as const;

export function HeroHeader({ hero }: { hero: CmsHero }) {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const resetTilt = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.style.setProperty("--hero-tilt-x", "0deg");
        hero.style.setProperty("--hero-tilt-y", "0deg");
      });
    };

    const updateTilt = (event: PointerEvent) => {
      if (reducedMotion.matches || event.pointerType === "touch") return;

      const bounds = hero.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.style.setProperty("--hero-tilt-x", `${(-y * 2).toFixed(2)}deg`);
        hero.style.setProperty("--hero-tilt-y", `${(x * 2).toFixed(2)}deg`);
      });
    };

    hero.addEventListener("pointermove", updateTilt, { passive: true });
    hero.addEventListener("pointerleave", resetTilt);

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", updateTilt);
      hero.removeEventListener("pointerleave", resetTilt);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // The first few frames of the supplied clip fade up from black. Start just
    // beyond that lead-in so a freshly opened page immediately reads as video,
    // rather than a flat dark hero while the media is buffering/decoding.
    const syncPlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
        return;
      }

      if (Number.isFinite(video.duration) && video.duration > 2 && video.currentTime < 0.25) {
        video.currentTime = Math.min(1.25, video.duration - 0.1);
      }

      void video.play().catch(() => {
        // Muted autoplay is still requested by the native video attributes.
      });
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    video.addEventListener("loadedmetadata", syncPlayback);
    video.addEventListener("canplay", syncPlayback);

    return () => {
      reducedMotion.removeEventListener("change", syncPlayback);
      video.removeEventListener("loadedmetadata", syncPlayback);
      video.removeEventListener("canplay", syncPlayback);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  let wordIndex = 0;
  const titleLines = hero.title.split(/\n+/).filter(Boolean);

  return (
    <header ref={heroRef} className="heroHeader" id="top" aria-labelledby="hero-heading">
      <video
        ref={videoRef}
        className="heroHeader__video"
        src="/assets/YhkPO5oUUmi1qY5jnyw6b30zR8w.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      />

      <div className="heroHeader__scrim" aria-hidden="true" />

      <div className="heroHeader__wireframeScene" aria-hidden="true">
        <div className="heroHeader__wireframeRig">
          <span className="heroHeader__wireframeBox heroHeader__wireframeBox--tower" />
          <span className="heroHeader__wireframeBox heroHeader__wireframeBox--annex" />
          <span className="heroHeader__wireframeBox heroHeader__wireframeBox--core" />
          <span className="heroHeader__wireframeCrane" />
        </div>
      </div>

      <nav className="heroHeader__nav" aria-label="Primary navigation">
        <a className="heroHeader__brand" href="/" aria-label="Colombo Consultants & Management Group home">
          <img className="brand-logo" src="/assets/ccmg/company-logo-transparent-exact.png" alt="CCMG — Colombo Consultants & Management Group" />
        </a>

        <div className="heroHeader__desktopLinks">
          {navigation.map((item) => (
            <a key={item.href} className="heroHeader__navPill" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="heroHeader__getStarted" href="/contact">
          Let’s Talk
        </a>

        <button
          className="heroHeader__menuButton"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="hero-mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="heroHeader__menuIcon" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>Menu</span>
        </button>

        <div
          id="hero-mobile-navigation"
          className="heroHeader__mobileLinks"
          data-open={menuOpen ? "true" : "false"}
          aria-hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            Let’s Talk
          </a>
        </div>
      </nav>

      <div className="heroHeader__content">
        <h1 id="hero-heading" className="heroHeader__title">
          {titleLines.map((line) => (
            <span className="heroHeader__titleLine" key={line}>
              {line.split(" ").map((word) => {
                const currentIndex = wordIndex++;
                return (
                  <span
                    className="heroHeader__word"
                    key={`${word}-${currentIndex}`}
                    style={{ "--word-index": currentIndex } as CSSProperties}
                  >
                    {word}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <p className="heroHeader__copy">
          {hero.summary}
        </p>

        <div className="heroHeader__actions">
          <a className="heroHeader__action heroHeader__action--primary" href={hero.primaryCtaHref}>
            <span>{hero.primaryCtaLabel}</span>
            <ArrowIcon className="heroHeader__arrow" />
          </a>
          <a className="heroHeader__action heroHeader__action--secondary" href={hero.secondaryCtaHref}>
            {hero.secondaryCtaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
