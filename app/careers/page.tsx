import type { Metadata } from "next";
import { CareersIllustration } from "../../components/illustrations";
import { SiteFooter, SiteNav } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Careers — Itô",
  description: "Build thoughtful systems for open, always-on markets with Itô.",
};

export default function CareersPage() {
  return (
    <main className="inner-page">
      <SiteNav />
      <header className="page-hero section-grid careers-hero">
        <p className="section-meta eyebrow">Itô / Careers</p>
        <div className="page-hero-copy">
          <p className="eyebrow page-kicker">Small team · Long horizon</p>
          <h1>Room to think<br />carefully.</h1>
          <p className="page-lede">We are building a thoughtful firm for people who care about the questions behind the numbers—and the details that make good work dependable.</p>
        </div>
        <CareersIllustration className="page-hero-art" />
        <span className="page-hero-index eyebrow">A work in progress</span>
      </header>

      <section className="page-intro section-grid">
        <p className="section-meta eyebrow">01 / The work</p>
        <div className="page-intro-copy">
          <h2>Curiosity, craft,<br />and responsibility.</h2>
          <p>We value careful reasoning, clear communication, and the patience to test an assumption before building on it. The work spans research, engineering, operations, and independent oversight.</p>
        </div>
      </section>

      <section className="careers-note section-grid">
        <p className="section-meta eyebrow">02 / Open roles</p>
        <div className="careers-note-copy">
          <h2>No open roles<br />just yet.</h2>
          <p>We are early in our build and are not currently advertising positions. If you have a perspective or craft that you think belongs in this work, tell us a little about it.</p>
          <a className="text-link eyebrow" href="mailto:careers@ito.fund?subject=Working%20at%20It%C3%B4">Write to careers@ito.fund <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
