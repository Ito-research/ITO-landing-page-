"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { MarketIllustration } from "../components/illustrations";
import { SiteFooter, SiteNav } from "../components/site-chrome";
import { notes } from "../lib/notes";

const principles = [
  {
    number: "03.1",
    label: "Research",
    title: "Begin with a question, not a position.",
    description:
      "Every strategy starts as a hypothesis we try to disprove. Most don't survive. The ones that do are simple enough to explain and strict enough to trust.",
    art: "field",
  },
  {
    number: "03.2",
    label: "Execution",
    title: "The best trade is the one you barely notice.",
    description:
      "Execution should be quiet. We design for minimal footprint, so the work is felt in the result and never in the market.",
    art: "orbit",
  },
  {
    number: "03.3",
    label: "Risk",
    title: "Constraints are the product.",
    description:
      "Before we decide how much to make, we decide how much we are willing to lose. Everything else follows from that.",
    art: "bounds",
  },
];

const foundations = [
  ["Approach", "Systematic. Rules over discretion."],
  ["Markets", "Digital assets. Selected carefully."],
  ["Infrastructure", "Built for speed, designed for failure."],
  ["Custody", "Separation of trading and safekeeping."],
  ["Oversight", "Independent of the strategies it watches."],
];

function LineArtwork() {
  return (
    <svg
      className="hero-line"
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="line-noise"
        d="M0 82 22 78 39 86 55 69 70 94 87 76 101 81 116 71 131 89 148 76 162 82 178 63 193 94 210 73 227 85 243 78 260 96 276 68 294 83 309 75 325 87 341 69 359 91 376 77 395 85 414 70 434 90 451 76 470 84 487 73 506 88 526 76 545 82 563 70 581 91 601 78 620 84 641 73 661 87 680 78 699 83 718 75 738 87 757 79 778 83 798 76 818 86 840 78 862 83 883 76 904 84 926 78 948 82 970 77 992 84 1014 79 1038 82 1062 77 1085 83 1110 79 1135 82 1160 78 1185 83 1211 79 1238 82 1264 78 1290 83 1318 79 1347 82 1374 78 1402 83 1440 80"
      />
      <path className="line-smooth" pathLength="1" d="M0 82 C340 82 440 66 720 76 S1110 92 1440 74" />
    </svg>
  );
}

function PrincipleArt({ kind }: { kind: string }) {
  if (kind === "field") {
    return (
      <svg className="principle-art art-field" viewBox="0 0 460 340" aria-hidden="true">
        {Array.from({ length: 42 }, (_, index) => {
          const x = 30 + ((index * 71 + (index % 4) * 19) % 400);
          const y = 28 + ((index * 47 + (index % 5) * 13) % 280);
          return (
            <circle
              key={index}
              className={`field-dot${index === 17 ? " dot-clay" : ""}`}
              cx={x}
              cy={y}
              r={index % 7 === 0 ? 3.2 : 2}
              style={{ "--dot-index": index } as React.CSSProperties}
            />
          );
        })}
        <path className="field-grid" pathLength="1" d="M95 250 186 166l79 26 96-112" />
        <path className="field-grid field-grid-second" pathLength="1" d="m140 94 52 72 115 30 55 48" />
      </svg>
    );
  }

  if (kind === "orbit") {
    return (
      <svg className="principle-art art-orbit" viewBox="0 0 460 340" aria-hidden="true">
        <circle className="orbit-outline" cx="276" cy="170" r="95" />
        <path className="orbit-path" pathLength="1" d="M4 174 38 156 66 189 98 144 126 186 154 162 186 179 211 164 233 171" />
        <path className="orbit-quiet" pathLength="1" d="M4 174 C94 174 152 170 204 170 S260 170 276 170" />
        <circle className="orbit-dot" cx="276" cy="170" r="4" />
        <circle className="orbit-offset" cx="281" cy="166" r="95" />
      </svg>
    );
  }

  return (
    <svg className="principle-art art-bounds" viewBox="0 0 460 340" aria-hidden="true">
      <path className="bounds-line" d="M10 73H450M10 267H450" />
      <path
        className="bounds-wild"
        pathLength="1"
        d="M0 171c22-92 35 81 58-19s37 100 59-22 35 111 57-4 34 66 58-8 38 67 60-10 38 56 60-5 37 40 60-4 38 18 58-1"
      />
      <path className="bounds-contained" pathLength="1" d="M0 171c39-55 67 51 108-3s68 27 105-2 67 15 105-1 75 7 142 0" />
      <circle className="bounds-tick" cx="222" cy="74" r="3" />
      <circle className="bounds-tick" cx="222" cy="266" r="3" />
    </svg>
  );
}

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [activeEssay, setActiveEssay] = useState<number | null>(null);
  const [contactStatus, setContactStatus] = useState("");

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const message = String(formData.get("message"));
    const subject = `Website enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    setContactStatus("Your email app should open with your message. If it doesn't, email us directly.");
    window.location.href = `mailto:hello@ito.fund?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const alreadyVisited = window.sessionStorage.getItem("ito-intro-seen");
    if (alreadyVisited || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntro(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setIntro(false);
      window.sessionStorage.setItem("ito-intro-seen", "true");
    }, 2550);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main id="top" className={intro ? "intro-active" : ""}>
      <div className={`intro-screen${intro ? " intro-visible" : ""}`} aria-hidden={!intro}>
        <div className="intro-mark">
          <svg viewBox="0 0 160 90" aria-hidden="true">
            <path className="intro-scribble" pathLength="1" d="m15 72 22-34 17 20 24-37 18 32 19-28 31 43" />
            <path className="intro-caret" pathLength="1" d="M18 72 80 20l62 52" />
          </svg>
          <div className="intro-letters">Itô</div>
        </div>
      </div>

      <SiteNav />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Independent by design <span>·</span> Est. 2026</p>
          <h1 id="hero-title" className="hero-wordmark" aria-label="Itô">
            <span className="word-i">I</span>
            <span className="word-t">t</span>
            <span className="word-o">
              o
              <svg className="hero-circumflex" viewBox="0 0 110 52" aria-hidden="true">
                <path pathLength="1" d="M7 45 55 7l48 38" />
              </svg>
            </span>
          </h1>
          <div className="hero-copy">
            <p className="hero-tagline">Order from noise.</p>
            <p className="hero-description">A quantitative trading firm for digital asset markets.</p>
          </div>
        </div>
        <MarketIllustration className="home-market-art" />
        <span className="market-art-caption eyebrow">A gathering place for exchange <span>·</span> c. 1500</span>
        <LineArtwork />
        <div className="hero-bottom">
          <span className="eyebrow">Founded 2026</span>
          <a className="eyebrow scroll-link" href="#thesis">Scroll to explore <span aria-hidden="true">↓</span></a>
        </div>
        <span className="hero-index eyebrow">01 / 07</span>
      </section>

      <section className="thesis section-grid" id="thesis">
        <div className="section-meta eyebrow">02 / Thesis</div>
        <div className="thesis-copy">
          <p className="thesis-line">Crypto markets never close.</p>
          <p className="thesis-line">They are fragmented, fast, and indifferent to opinion.</p>
          <p className="thesis-line thesis-gap">We believe the right response is not more conviction.</p>
          <p className="thesis-line thesis-care">It is more care.</p>
          <p className="thesis-last">
            We are building a firm that measures before it acts, and acts only when it understands <em>why.</em>
          </p>
        </div>
        <span className="margin-line" aria-hidden="true" />
      </section>

      <section className="principles" id="principles">
        <div className="principles-heading section-grid">
          <p className="section-meta eyebrow">03 / Principles</p>
          <h2>How we work<br />is what we are.</h2>
        </div>
        {principles.map((principle) => (
          <article className={`principle section-grid principle-${principle.art}`} key={principle.number}>
            <p className="section-meta eyebrow">{principle.number} / {principle.label}</p>
            <h3>{principle.title}</h3>
            <PrincipleArt kind={principle.art} />
            <p className="principle-description">{principle.description}</p>
          </article>
        ))}
      </section>

      <section className="risk-first section-grid" id="risk">
        <p className="section-meta eyebrow">04 / Risk, first</p>
        <div className="risk-content">
          <div className="risk-row">
            <h2>Limit<span>.</span></h2>
            <p>Every strategy has a boundary it cannot cross.</p>
          </div>
          <div className="risk-row">
            <h2>Observe<span>.</span></h2>
            <p>Every position is measured continuously, never assumed.</p>
          </div>
          <div className="risk-row stop-row">
            <h2>Stop<span>.</span></h2>
            <p>Any system can be halted instantly, by design, without debate.</p>
          </div>
          <p className="risk-closing">We build the brakes before the engine.</p>
        </div>
      </section>

      <section className="foundations section-grid" id="foundations">
        <p className="section-meta eyebrow">05 / Foundations</p>
        <div className="foundations-content">
          <div className="foundation-list">
            {foundations.map(([label, detail], index) => (
              <div className="foundation-row" key={label} style={{ "--row-index": index } as React.CSSProperties}>
                <span className="foundation-tick" aria-hidden="true" />
                <span className="foundation-label eyebrow">{label}</span>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <p className="foundation-note">We would rather be precise about what we are building than loud about what we might become.</p>
        </div>
      </section>

      <section className="notes section-grid" id="notes">
        <p className="section-meta eyebrow">06 / Notes</p>
        <div className="notes-content">
          <h2>Writing from<br />the work.</h2>
          <p className="notes-intro">Short essays on market structure, measurement, and the discipline of building systems that fail gracefully.</p>
          <div className="essay-list">
            {notes.map((essay, index) => (
              <article className={`essay${activeEssay === index ? " essay-open" : ""}`} key={essay.slug}>
                <button
                  type="button"
                  className="essay-trigger"
                  aria-expanded={activeEssay === index}
                  onClick={() => setActiveEssay(activeEssay === index ? null : index)}
                >
                  <span className="essay-date eyebrow">{essay.date}</span>
                  <span className="essay-title">{essay.title}</span>
                  <span className="essay-time eyebrow">{essay.time}</span>
                  <span className="essay-toggle" aria-hidden="true">{activeEssay === index ? "−" : "+"}</span>
                </button>
                {activeEssay === index && (
                  <>
                    <p className="essay-copy">{essay.summary}</p>
                    <a className="essay-read eyebrow" href={`/notes/${essay.slug}`}>Read the essay <span aria-hidden="true">↗</span></a>
                  </>
                )}
              </article>
            ))}
          </div>
          <a className="all-notes eyebrow" href="/notes">View all notes <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact section-grid" id="contact">
        <p className="section-meta eyebrow">07 / Contact</p>
        <div className="contact-content">
          <h2>We are new,<br />and we are careful.</h2>
          <p>If you share our view of how this should be done, we would like to hear from you.</p>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-form-fields">
              <label className="contact-field">
                <span className="eyebrow">Your name</span>
                <input autoComplete="name" name="name" required />
              </label>
              <label className="contact-field">
                <span className="eyebrow">Email address</span>
                <input autoComplete="email" name="email" required type="email" />
              </label>
              <label className="contact-field contact-message">
                <span className="eyebrow">A little about what brings you here</span>
                <textarea name="message" required rows={3} />
              </label>
            </div>
            <div className="contact-form-bottom">
              <p className="contact-status" role="status">{contactStatus}</p>
              <button className="contact-submit eyebrow" type="submit">
                Send a note <span aria-hidden="true">↗</span>
              </button>
            </div>
            <p className="contact-direct eyebrow">Or write directly to <a href="mailto:hello@ito.fund">hello@ito.fund</a></p>
          </form>
        </div>
        <svg className="contact-line" viewBox="0 0 1440 2" preserveAspectRatio="none" aria-hidden="true">
          <path pathLength="1" d="M0 1H1432" />
          <circle cx="1434" cy="1" r="1.5" />
        </svg>
      </section>

      <SiteFooter />
    </main>
  );
}
