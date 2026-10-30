import type { Metadata } from "next";
import Link from "next/link";
import { ResearchIllustration } from "../../components/illustrations";
import { SiteFooter, SiteNav } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Research — Itô",
  description: "How Itô approaches quantitative research: clear questions, careful measurement, and ideas that must earn their place.",
};

const principles = [
  ["01", "Start with a question", "A useful research process begins with a claim that could be wrong. We define what we want to understand before selecting a method."],
  ["02", "Measure what matters", "We pay attention to data quality, market structure, and the assumptions that sit between an observation and a conclusion."],
  ["03", "Try to disprove it", "Robustness checks, out-of-sample thinking, and independent challenge help distinguish a durable idea from a persuasive story."],
  ["04", "Keep the explanation clear", "A finding should be explainable to the people responsible for operating and overseeing the system. Uncertainty belongs in the explanation, too."],
];

export default function ResearchPage() {
  return (
    <main className="inner-page">
      <SiteNav />
      <header className="page-hero section-grid research-hero">
        <p className="section-meta eyebrow">Itô / Research</p>
        <div className="page-hero-copy">
          <p className="eyebrow page-kicker">Questions before positions</p>
          <h1>Research that<br />knows its limits.</h1>
          <p className="page-lede">Markets reward curiosity, but they do not reward every explanation. Our research starts with a question, meets evidence with care, and stays honest about what remains unknown.</p>
        </div>
        <ResearchIllustration className="page-hero-art" />
        <span className="page-hero-index eyebrow">01 — 04</span>
      </header>

      <section className="page-intro section-grid">
        <p className="section-meta eyebrow">01 / Method</p>
        <div className="page-intro-copy">
          <h2>Understand first.<br />Act only with reason.</h2>
          <p>Our work is systematic by design. That means being specific about the question, rigorous about the measurement, and willing to set an idea aside when it does not hold up.</p>
        </div>
      </section>

      <section className="research-list section-grid">
        <p className="section-meta eyebrow">02 / Practice</p>
        <div className="page-rows">
          {principles.map(([number, title, copy]) => (
            <article className="page-row" key={number}>
              <span className="eyebrow page-row-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="research-note section-grid">
        <p className="section-meta eyebrow">03 / A note on evidence</p>
        <div className="research-note-copy">
          <p className="research-quote">“A good question should leave room for an inconvenient answer.”</p>
          <p>We do not publish performance claims or imply that research can remove uncertainty. We share how we think, what we are learning, and where the boundaries of a conclusion still are.</p>
          <Link className="text-link eyebrow" href="/notes">Read our notes <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
