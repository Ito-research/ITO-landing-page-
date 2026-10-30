import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteNav } from "../../../components/site-chrome";
import { getNote, notes } from "../../../lib/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  return note
    ? { title: `${note.title} — Itô Notes`, description: note.summary }
    : { title: "Note not found — Itô" };
}

export default async function NoteArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <main className="inner-page article-page">
      <SiteNav />
      <header className="article-heading section-grid">
        <p className="section-meta eyebrow"><Link href="/notes">← Notes</Link></p>
        <div className="article-heading-copy">
          <p className="eyebrow page-kicker">{note.date} <span>·</span> {note.time} read</p>
          <h1>{note.title}</h1>
          <p className="page-lede">{note.summary}</p>
        </div>
      </header>
      <article className="article-body">
        <p className="eyebrow">A note from Itô</p>
        {note.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <div className="article-end">
          <span className="article-end-mark" aria-hidden="true">⌃</span>
          <Link className="text-link eyebrow" href="/notes">Back to all notes <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
