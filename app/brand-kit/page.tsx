import type { Metadata } from "next";
import { SiteFooter, SiteNav } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Brand kit — Itô",
  description: "Download the Itô wordmark, symbol, social assets, and visual identity guide.",
};

const assets = [
  {
    name: "Primary wordmark",
    detail: "Transparent background · SVG + PNG",
    image: "/brand-kit/ito-wordmark.png",
    alt: "Itô wordmark in ink with a clay circumflex",
    vector: "/brand-kit/ito-wordmark.svg",
    raster: "/brand-kit/ito-wordmark.png",
  },
  {
    name: "Wordmark on paper",
    detail: "Paper background · SVG + PNG",
    image: "/brand-kit/ito-wordmark-paper.png",
    alt: "Itô wordmark on the Itô paper color",
    vector: "/brand-kit/ito-wordmark-paper.svg",
    raster: "/brand-kit/ito-wordmark-paper.png",
  },
  {
    name: "The symbol",
    detail: "Standalone circumflex · SVG + PNG",
    image: "/brand-kit/ito-symbol.png",
    alt: "Standalone clay circumflex symbol",
    vector: "/brand-kit/ito-symbol.svg",
    raster: "/brand-kit/ito-symbol.png",
  },
  {
    name: "Favicon",
    detail: "Compact wordmark · SVG + PNG",
    image: "/brand-kit/ito-favicon.png",
    alt: "Itô compact wordmark favicon",
    vector: "/brand-kit/ito-favicon.svg",
    raster: "/brand-kit/ito-favicon.png",
  },
  {
    name: "Social avatar",
    detail: "1024 × 1024 · SVG + PNG",
    image: "/brand-kit/ito-avatar.png",
    alt: "Square Itô avatar with its clay symbol",
    vector: "/brand-kit/ito-avatar.svg",
    raster: "/brand-kit/ito-avatar.png",
  },
  {
    name: "Social card",
    detail: "1200 × 630 · SVG + PNG",
    image: "/brand-kit/ito-social-card.png",
    alt: "Itô social sharing card with the Order from noise tagline",
    vector: "/brand-kit/ito-social-card.svg",
    raster: "/brand-kit/ito-social-card.png",
  },
  {
    name: "Profile banner",
    detail: "1584 × 396 · SVG + PNG",
    image: "/brand-kit/ito-linkedin-banner.png",
    alt: "Wide Itô profile banner with wordmark and signal line",
    vector: "/brand-kit/ito-linkedin-banner.svg",
    raster: "/brand-kit/ito-linkedin-banner.png",
  },
  {
    name: "Visual identity",
    detail: "One-page guide · SVG + PNG",
    image: "/brand-kit/ito-brand-board.png",
    alt: "Itô visual identity guide showing logo, colors, and type",
    vector: "/brand-kit/ito-brand-board.svg",
    raster: "/brand-kit/ito-brand-board.png",
  },
];

export default function BrandKitPage() {
  return (
    <main className="inner-page brand-kit-page">
      <SiteNav />
      <header className="page-hero section-grid brand-hero">
        <p className="section-meta eyebrow">Itô / Brand resources</p>
        <div className="page-hero-copy">
          <p className="eyebrow page-kicker">A small identity system</p>
          <h1>Made to travel.</h1>
          <p className="page-lede">The Itô wordmark, its circumflex symbol, and a few useful pieces for carrying the identity into the world.</p>
          <a className="brand-kit-download eyebrow" href="/ito-brand-kit.zip" download>
            Download complete brand kit <span aria-hidden="true">↓</span>
          </a>
        </div>
        <img className="brand-hero-mark" src="/brand-kit/ito-avatar.svg" width="360" height="360" alt="" />
      </header>

      <section className="brand-assets section-grid">
        <p className="section-meta eyebrow">01 / Assets</p>
        <div className="brand-asset-grid">
          {assets.map((asset) => (
            <article className="brand-asset" key={asset.name}>
              <a className="brand-preview" href={asset.vector} aria-label={`Open ${asset.name} SVG`}>
                <img src={asset.image} alt={asset.alt} loading="lazy" />
              </a>
              <div className="brand-asset-info">
                <div>
                  <h2>{asset.name}</h2>
                  <p className="eyebrow">{asset.detail}</p>
                </div>
                <div className="brand-asset-downloads">
                  <a className="eyebrow" href={asset.vector} download>SVG</a>
                  <a className="eyebrow" href={asset.raster} download>PNG</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-guidance section-grid">
        <p className="section-meta eyebrow">02 / Use</p>
        <div className="brand-guidance-copy">
          <h2>The mark is a peak,<br />not an ornament.</h2>
          <p>Keep the wordmark in Ink and the circumflex in Clay. Give it room to breathe; do not stretch, outline, or place it on a busy background. Use the symbol alone when space is tight.</p>
          <a className="text-link eyebrow" href="/brand-kit/BRAND-GUIDE.txt" download>Download the usage guide <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
