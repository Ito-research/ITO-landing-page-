import type { Metadata } from "next";
import Link from "next/link";
import { ConsultingIllustration } from "../../components/illustrations";
import { SiteFooter, SiteNav } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Consulting — Itô",
  description: "Thoughtful, independent consulting on digital-asset market structure, quantitative research, and risk-aware systems.",
};

const services = [
  ["Market structure", "A clear-eyed view of venues, liquidity, data, and the mechanics that shape digital-asset markets."],
  ["Research design", "Help turning an open question into a testable research plan, with assumptions and limitations made explicit."],
  ["Systems & controls", "A practical review of monitoring, operational boundaries, and the decisions that should be made before pressure arrives."],
];

export default function ConsultingPage() {
  return (
    <main className="inner-page">
      <SiteNav />
      <header className="page-hero section-grid consulting-hero">
        <p className="section-meta eyebrow">Itô / Consulting</p>
        <div className="page-hero-copy">
          <p className="eyebrow page-kicker">Independent perspective</p>
          <h1>Careful work.<br />Clear counsel.</h1>
          <p className="page-lede">We offer focused advisory work for teams navigating the mechanics and measurement of digital-asset markets.</p>
        </div>
        <ConsultingIllustration className="page-hero-art" />
        <span className="page-hero-index eyebrow">Listen · Understand · Advise</span>
      </header>

      <section className="page-intro section-grid">
        <p className="section-meta eyebrow">01 / How we help</p>
        <div className="page-intro-copy">
          <h2>Good advice begins<br />with listening.</h2>
          <p>Every engagement starts with the context and question—not a prewritten answer. We work in a focused, confidential way, make scope explicit, and distinguish observation from recommendation.</p>
        </div>
      </section>

      <section className="services-list section-grid">
        <p className="section-meta eyebrow">02 / Areas of work</p>
        <div className="page-rows">
          {services.map(([title, copy], index) => (
            <article className="page-row service-row" key={title}>
              <span className="eyebrow page-row-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-approach section-grid">
        <p className="section-meta eyebrow">03 / Engagement</p>
        <div className="service-approach-copy">
          <p>We agree on the question, scope, and output before work begins. If your needs fall outside our experience, we will say so.</p>
          <a className="text-link eyebrow" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
