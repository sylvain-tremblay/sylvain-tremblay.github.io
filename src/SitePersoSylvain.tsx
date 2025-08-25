
import React, { useMemo, useState } from "react";

const messages = {
  fr: {
    nav: { about: "Parcours", books: "Livres", projects: "Projets", photos: "Photos", contact: "Contact" },
    heroTitle: "vCIO & Architecte logiciel · Auteur-éditeur numérique",
    heroBody:
      "30+ ans d’expérience en TI : direction technologique, architecture, transformation numérique, cloud (AWS/Azure/GCP), cybersécurité et conformité (ISO 27001, Loi 25, RGPD). Ancien d’Intuit (Quicken, QuickBooks, TurboTax), fondateur de Global‑Lan, cofondateur de 55+ YOGA.",
    ctaContact: "Me contacter",
    ctaBooks: "Voir mes livres",
    available: "Disponible pour mandats fractionnaires",
    aboutTitle: "Parcours",
    aboutP1:
      "Bilingue FR/EN, j’accompagne les PME et organisations comme vCIO / architecte fractionnaire et auteur‑éditeur numérique. J’ai contribué à des produits majeurs chez Intuit (Quicken, QuickBooks, TurboTax/ImpôtRapide Online), fondé Global‑Lan (hébergement Web, 2007–2022) et cofondé 55+ YOGA (plateforme de cours en ligne, 2020–2025).",
    aboutP2:
      "Mes domaines de prédilection : cloud (AWS/Azure/GCP), sécurité (ISO 27001, Loi 25, RGPD), data & IA appliquée, modernisation applicative et automatisation pragmatique.",
    booksTitle: "Livres",
    booksIntro: "Guides IA (EN/FR) et livres de casse‑têtes — miniatures optimisées.",
    viewOnAmazon: "Voir sur Amazon",
    aiGuides: "Guides sur l’IA",
    puzzleBooks: "Livres de casse‑têtes",
    projectsTitle: "Projets",
    photosTitle: "Photos",
    photosHint: "Sélection de photos personnelles et professionnelles.",
    contactTitle: "Contact",
    contactLead: "Pour collaborations, mandats fractionnaires ou médias.",
    footerLoc: "Basé au Québec, Canada",
    langToggle: "EN",
  },
  en: {
    nav: { about: "About", books: "Books", projects: "Projects", photos: "Photos", contact: "Contact" },
    heroTitle: "vCIO & Software Architect · Author-Publisher",
    heroBody:
      "30+ years in tech: technology leadership, architecture, digital transformation, cloud (AWS/Azure/GCP), security & compliance (ISO 27001, Quebec Law 25, GDPR). Ex‑Intuit (Quicken, QuickBooks, TurboTax), founder of Global‑Lan, co‑founder of 55+ YOGA.",
    ctaContact: "Contact me",
    ctaBooks: "See my books",
    available: "Available for fractional engagements",
    aboutTitle: "About",
    aboutP1:
      "Bilingual FR/EN, I help SMEs and organizations as a fractional vCIO/architect and author‑publisher. I contributed to major Intuit products (Quicken, QuickBooks, TurboTax), founded Global‑Lan (web hosting, 2007–2022) and co‑founded 55+ YOGA (online classes, 2020–2025).",
    aboutP2:
      "Focus areas: cloud (AWS/Azure/GCP), security (ISO 27001, Law 25, GDPR), applied data & AI, app modernization and pragmatic automation.",
    booksTitle: "Books",
    booksIntro: "AI guides (EN/FR) and puzzle books — optimized thumbnails.",
    viewOnAmazon: "View on Amazon",
    aiGuides: "AI Guides",
    puzzleBooks: "Puzzle Books",
    projectsTitle: "Projects",
    photosTitle: "Photos",
    photosHint: "Curated personal & professional shots.",
    contactTitle: "Contact",
    contactLead: "For collaborations, fractional work or media.",
    footerLoc: "Based in Québec, Canada",
    langToggle: "FR",
  },
} as const;

type Lang = keyof typeof messages;

function amazonLink(asin: string) {
  const lang = typeof navigator !== "undefined" ? navigator.language : "en-CA";
  const lower = lang.toLowerCase();
  if (lower.includes("fr")) return `https://www.amazon.fr/dp/${asin}`;
  if (lower.includes("ca")) return `https://www.amazon.ca/dp/${asin}`;
  if (lower.includes("us") || lower.includes("en")) return `https://www.amazon.com/dp/${asin}`;
  if (lower.includes("uk") || lower.includes("gb")) return `https://www.amazon.co.uk/dp/${asin}`;
  if (lower.includes("de")) return `https://www.amazon.de/dp/${asin}`;
  if (lower.includes("es")) return `https://www.amazon.es/dp/${asin}`;
  if (lower.includes("it")) return `https://www.amazon.it/dp/${asin}`;
  return `https://www.amazon.com/dp/${asin}`;
}

// Use a higher-res cover and display it smaller for sharpness
function coverUrl(asin: string) {
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SL1000_.jpg`;
}

const photos = [
  { src: "/images/profile.jpeg", alt: "Portrait lumineux — chemise blanche" },
  { src: "/images/nature.jpeg", alt: "Plein air, montagnes" },
  { src: "/images/portrait-noir.jpeg", alt: "Portrait professionnel fond noir" },
  { src: "/images/portrait-classique.jpeg", alt: "Portrait classique studio" },
  { src: "/images/wings.jpeg", alt: "Street art — ailes murales" },
  { src: "/images/portrait-jeune.jpeg", alt: "Portrait plus ancien verdure" },
];

// tag books by type for separate sections
const aiBooks = [
  { title: "AI in Action: Real-World Strategies for Small Business Growth", asin: "B0FLB9KK8S", lang: "EN" },
  { title: "L’IA en action : Stratégies concrètes pour la croissance des PME", asin: "B0FLF2NHRM", lang: "FR" },
];

const puzzleBooks = [
  { title: "Mots cachés — Vacances d’été & activités (avec lexique)", asin: "B0FNL9WY4N", lang: "FR" },
  { title: "Mots cachés — Camping & plein air (avec lexique)", asin: "B0FN7RF28R", lang: "FR" },
  { title: "Mots cachés — Géographie du monde", asin: "B0FN4X1HNL", lang: "FR" },
  { title: "Mots cachés — Animaux", asin: "B0FN4V48DC", lang: "FR" },
  { title: "Mots cachés — Cuisine & gastronomie (avec lexique)", asin: "B0FN4QZBQ9", lang: "FR" },
];

export default function SitePersoSylvain() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = useMemo(() => messages[lang], [lang]);
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-fuchsia-400/30">
      <Header t={t} onToggle={() => setLang(lang === "fr" ? "en" : "fr")} />
      <Hero t={t} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <About t={t} />
        <Books t={t} />
        <Gallery t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

function Header({ t, onToggle }: any) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white font-bold">
            ST
          </div>
          <div className="font-semibold">Sylvain Tremblay</div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#about" className="hover:text-white">{t.nav.about}</a>
          <a href="#books" className="hover:text-white">{t.nav.books}</a>
          <a href="#gallery" className="hover:text-white">{t.nav.photos}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
          <button onClick={onToggle} className="ml-2 rounded-lg px-2 py-1 ring-1 ring-neutral-700 hover:bg-neutral-900/60">
            {t.langToggle}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ t }: any) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_10%_-10%,rgba(217,70,239,0.15),transparent),radial-gradient(50rem_30rem_at_110%_10%,rgba(79,70,229,0.15),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">{t.heroTitle}</h1>
            <p className="mt-4 text-neutral-300 max-w-xl">{t.heroBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl px-5 py-3 bg-white text-neutral-900 font-medium hover:opacity-90">
                {t.ctaContact}
              </a>
              <a href="#books" className="rounded-xl px-5 py-3 ring-1 ring-inset ring-neutral-700 hover:bg-neutral-900/60">
                {t.ctaBooks}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-900">
              <img src="/images/profile.jpeg" alt="Portrait Sylvain Tremblay" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }: any) {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold">{t.aboutTitle}</h2>
          <p className="mt-4 text-neutral-300">{t.aboutP1}</p>
          <p className="mt-4 text-neutral-300">{t.aboutP2}</p>
        </div>
      </div>
    </section>
  );
}

function BookCard({ book, t }: any) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 hover:bg-neutral-900">
      <a href={amazonLink(book.asin)} target="_blank" rel="noreferrer" className="block mx-auto">
        <img
          src={coverUrl(book.asin)}
          alt={`Couverture — ${book.title}`}
          className="mx-auto rounded-md ring-1 ring-white/10 object-cover aspect-[2/3]"
          style={{ width: 160, height: 240 }}  // small display for sharpness
          loading="lazy"
        />
      </a>
      <div className="text-xs text-neutral-400 mt-3">{book.lang}</div>
      <h3 className="mt-1 font-medium leading-snug text-sm">{book.title}</h3>
      <div className="mt-3">
        <a href={amazonLink(book.asin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-fuchsia-300 px-2.5 py-1.5 rounded-lg ring-1 ring-neutral-700 hover:bg-neutral-800">
          <span>{t.viewOnAmazon}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M13 5h6v6h-2V8.41l-9.29 9.3-1.42-1.42 9.3-9.29H13V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Books({ t }: any) {
  return (
    <section id="books" className="py-16 sm:py-24 border-t border-neutral-800">
      <h2 className="text-2xl sm:text-3xl font-bold">{t.booksTitle}</h2>
      <p className="mt-3 text-neutral-300">{t.booksIntro}</p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">{t.aiGuides}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {aiBooks.map((b) => <BookCard key={b.asin} book={b} t={t} />)}
      </div>

      <h3 className="mt-10 mb-3 text-lg font-semibold">{t.puzzleBooks}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {puzzleBooks.map((b) => <BookCard key={b.asin} book={b} t={t} />)}
      </div>
    </section>
  );
}

function Gallery({ t }: any) {
  return (
    <section id="gallery" className="py-16 sm:py-24 border-t border-neutral-800">
      <h2 className="text-2xl sm:text-3xl font-bold">{t.photosTitle}</h2>
      <p className="mt-3 text-neutral-300">{t.photosHint}</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {photos.map((p, i) => (
          <figure key={i} className="overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-900">
            <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }: any) {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-neutral-800">
      <h2 className="text-2xl sm:text-3xl font-bold">{t.contactTitle}</h2>
      <p className="mt-3 text-neutral-300">{t.contactLead}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://www.linkedin.com/in/sylvaintremblay/" target="_blank" rel="noreferrer" className="rounded-xl px-4 py-2 ring-1 ring-inset ring-neutral-700 hover:bg-neutral-900/60 text-sm" title="Profil LinkedIn">LinkedIn</a>
        <a href="mailto:info@sylvaintremblay.com" className="rounded-xl px-4 py-2 ring-1 ring-inset ring-neutral-700 hover:bg-neutral-900/60 text-sm" title="Adresse courriel">Courriel</a>
      </div>
    </section>
  );
}

function Footer({ t }: any) {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Sylvain Tremblay. Tous droits réservés.</div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            {t.footerLoc}
          </span>
        </div>
      </div>
    </footer>
  );
}
