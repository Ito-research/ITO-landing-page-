"use client";

import { useEffect, useState } from "react";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`logo${footer ? " logo-footer" : ""}`} href="/" aria-label="Itô, home">
      <span>It</span>
      <span className="logo-o">
        o
        <svg className="circumflex" viewBox="0 0 28 14" aria-hidden="true">
          <path d="M3 11 14 2l11 9" />
        </svg>
      </span>
    </a>
  );
}

const links = [
  { href: "/research", label: "Research" },
  { href: "/notes", label: "Notes" },
  { href: "/consulting", label: "Consulting" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    const updateScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      if (window.matchMedia("(max-width: 760px)").matches || currentY < 120 || currentY < previousY) {
        setHidden(false);
      } else if (currentY > previousY + 4) {
        setHidden(true);
      }
      previousY = currentY;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const moveCursor = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      const target = event.target;
      document.documentElement.classList.toggle(
        "pointer-link",
        target instanceof Element && Boolean(target.closest("a, button, summary")),
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", moveCursor);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <nav className={`site-nav${scrolled ? " nav-scrolled" : ""}${hidden ? " nav-hidden" : ""}`} aria-label="Main navigation">
        <Logo />
        <div className="nav-links">
          {links.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
        </div>
        <details className="mobile-nav">
          <summary className="mobile-nav-toggle" aria-label="Toggle navigation menu">
            <span>Menu</span>
            <span className="mobile-nav-icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <div className="mobile-nav-panel">
            {links.map(({ href, label }) => (
              <a
                href={href}
                key={href}
                onClick={(event) => {
                  const menu = event.currentTarget.closest("details");
                  if (menu) menu.open = false;
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Logo footer />
        <div className="footer-links eyebrow">
          <a href="/#foundations">Disclosures</a>
          <a href="/#foundations">Privacy</a>
          <a href="/research">Research</a>
          <a href="/notes">Notes</a>
          <a href="/consulting">Consulting</a>
          <a href="/careers">Careers</a>
          <a href="/brand-kit">Brand kit</a>
          <span>© 2026</span>
        </div>
      </div>
      <p className="disclosure eyebrow">Nothing on this site is an offer or solicitation, or investment advice. Trading digital assets involves substantial risk of loss.</p>
    </footer>
  );
}
