import type { Metadata } from "next";
import Link from "next/link";
import { NotesIllustration } from "../../components/illustrations";
import { SiteFooter, SiteNav } from "../../components/site-chrome";
import { notes } from "../../lib/notes";

export const metadata: Metadata = {
  title: "Notes — Itô",
  description: "Essays on market structure, measurement, and building systems that fail gracefully.",
};

export default function NotesPage() {
  return (
    <main className="inner-page">
      <SiteNav />
      <header className="page-hero section-grid notes-hero">
        <p className="section-meta eyebrow">Itô / Notes</p>
        <div className="page-hero-copy">
          <p className="eyebrow page-kicker">Field notes · 2026</p>
          <h1>Writing from<br />the work.</h1>
          <p className="page-lede">Short essays on market structure, measurement, and the discipline of building systems that fail gracefully.</p>
        </div>
        <NotesIllustration className="page-hero-art" />
        <span className="page-hero-index eyebrow">An ongoing journal</span>
      </header>

      <section className="notes-index section-grid">
        <p className="section-meta eyebrow">Index / 04 essays</p>
        <div className="page-rows">
          {notes.map((note) => (
            <article className="note-index-row" key={note.slug}>
              <span className="eyebrow note-date">{note.date} <span>·</span> {note.time}</span>
              <div>
                <h2><Link href={`/notes/${note.slug}`}>{note.title}</Link></h2>
                <p>{note.summary}</p>
              </div>
              <Link className="note-arrow" href={`/notes/${note.slug}`} aria-label={`Read ${note.title}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-outro section-grid">
        <p className="section-meta eyebrow">A living record</p>
        <p className="page-outro-copy">Ideas change. Our notes should show the work of changing our minds, not just the comfort of being right.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
