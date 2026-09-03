
import React, { useMemo, useState } from "react";

const messages = {
  fr: {
    bioTitle: "Biographie complète",
    bioParas: [
      "Sylvain Tremblay travaille depuis plus de 30 ans à l’intersection de la stratégie d’affaires, de l’architecture logicielle et de la transformation numérique. Bilingue français-anglais, il a bâti sa carrière sur une conviction simple : la technologie n’a de valeur que lorsqu’elle rend une organisation plus claire, plus sûre et plus capable d’agir.",
      "Il développe une rigueur produit exigeante chez Intuit, où il contribue à des solutions utilisées à grande échelle — Quicken, QuickBooks et ImpôtRapide/TurboTax Online — et y affine sa pratique de la performance, de la sécurité, de la télémétrie et de la simplification des parcours clients.",
      "En 2007, il fonde Global‑Lan, entreprise d’hébergement et de services Web qu’il dirige jusqu’en 2022, où il met en place des pratiques d’exploitation durables : niveaux de service, surveillance, sauvegardes, reprise après sinistre et automatisations pensées pour réduire les coûts récurrents sans sacrifier la fiabilité.",
      "En 2020, il cofonde 55+ YOGA, une plateforme de cours en ligne, où il pilote la conception UX, la diffusion vidéo, l’abonnement, l’automatisation marketing et la conformité — une expérience qui approfondit sa compréhension des modèles d’affaires numériques et de la relation client.",
      "Aujourd’hui, il accompagne des PME, des OBNL et des équipes dirigeantes comme architecte logiciel fractionnaire, là où les décisions technologiques doivent être à la fois ambitieuses et pragmatiques : feuille de route, architecture, modernisation applicative, migration cloud (AWS, Azure, GCP), cybersécurité, conformité (ISO 27001, Loi 25, RGPD) et intégration responsable de l’IA.",
      "Son approche : partir des objectifs d’affaires, clarifier la valeur attendue, choisir l’architecture minimale viable, sécuriser les données dès la conception, documenter juste ce qu’il faut et avancer par itérations courtes. Ses domaines de prédilection : architecture logicielle, cloud, automatisation, IA appliquée, protection des données, expérience client et analytique produit.",
      "En 2026, il crée sa propre maison d’édition pour donner une continuité éditoriale à son travail : des ouvrages ancrés dans la pratique, la clarté et l’autonomie des lecteurs, qu’il s’agisse de technologie, de création ou de livres illustrés.",
      <><em>L’IA en action : Stratégies concrètes pour la croissance des PME</em> et sa version anglaise, <em>AI in Action: Real‑World Strategies for Small Business Growth</em>, ouvrent sa série sur l’intelligence artificielle pour les petites entreprises. Cette série comprend aussi <em>L’écart, c’est vous. — Décider, construire, vérifier et durer avec l’IA</em>. Deux titres sont à paraître : <em>Personne n’a décidé ça. — Décider, répondre, assumer : ce que l’IA remet entre vos mains</em>, consacré à la responsabilité et à l’éthique; et <em>Les mains dans l’IA — Écrire, vérifier, automatiser : le guide pratique pour les petites entreprises</em>, consacré au geste, aux outils et aux pratiques concrètes.</>,
      "Il publie également deux livres illustrés et une collection de livres de casse‑têtes thématiques. À travers l’ensemble de ses projets, Sylvain Tremblay poursuit le même objectif : transformer des sujets complexes en décisions, systèmes et œuvres utiles — solides dans leur conception, accessibles dans leur forme et durables dans leurs effets."
    ],
    nav: { about: "Parcours", books: "Livres", projects: "Projets", contact: "Contact" },
    heroTitle: "Architecte logiciel fractionnaire · Auteur-éditeur numérique",
    heroBody:
      "30+ ans d’expérience en TI : direction technologique, architecture, transformation numérique, cloud (AWS/Azure/GCP), cybersécurité et conformité (ISO 27001, Loi 25, RGPD). Ancien d’Intuit (Quicken, QuickBooks, TurboTax), fondateur de Global‑Lan, cofondateur de 55+ YOGA.",
    ctaContact: "Me contacter",
    ctaBooks: "Voir mes livres",
    available: "Disponible pour mandats fractionnaires",
    aboutTitle: "Parcours",
    aboutP1:
      "J’aide les dirigeants de PME et organisations à prendre des décisions technologiques claires et mesurables : feuille de route numérique, architecture logicielle, migration cloud, sécurité et conformité (Loi 25, RGPD), et intégration pragmatique de l’IA.",
    aboutP2:
      "Mon approche est simple : livrer vite une valeur visible (audit éclair → plan d’action priorisé), puis itérer avec des indicateurs concrets. J’interviens en mode fractionnaire, comme architecte logiciel, aux côtés des équipes internes et partenaires.",
    booksTitle: "Livres",
    booksIntro: "Guides IA (EN/FR) et livres de casse‑têtes — miniatures optimisées.",
    viewOnEditionsst: "Voir sur editionsst.com",
    viewOnAmazon: "Voir sur Amazon",
    aiGuides: "Livres sur l’IA",
    puzzleBooks: "Livres de casse‑têtes",
    illustratedBooks: "Livres illustrés",
    projectsTitle: "Projets",
    contactTitle: "Contact",
    contactLead: "Pour collaborations, mandats fractionnaires ou médias.",
    footerLoc: "Basé au Québec, Canada",
    langToggle: "EN",
  },
  en: {
    bioTitle: "Full Biography",
    bioParas: [
      "Sylvain Tremblay has spent more than 30 years at the intersection of business strategy, software architecture, and digital transformation. Bilingual in French and English, he has built his career on a simple conviction: technology matters only when it makes an organization clearer, safer, and more capable of acting.",
      "He developed strong product discipline at Intuit, contributing to widely used solutions — Quicken, QuickBooks, and TurboTax/ImpôtRapide Online — and sharpened his practice of performance, security, telemetry, and customer-journey simplification.",
      "In 2007, he founded Global‑Lan, a web hosting and services company he led until 2022, where he established durable operating practices: service levels, monitoring, backups, disaster recovery, and automations designed to cut recurring costs without compromising reliability.",
      "In 2020, he co-founded 55+ YOGA, an online course platform, where he led UX, video delivery, subscriptions, marketing automation, and compliance — deepening his hands-on understanding of digital business models and customer relationships.",
      "Today, he advises SMEs, nonprofits, and leadership teams as a fractional software architect, working where technology decisions need to be both ambitious and pragmatic: roadmaps, architecture, application modernization, cloud migration (AWS, Azure, GCP), cybersecurity, compliance (ISO 27001, Quebec Law 25, GDPR), and responsible AI integration.",
      "His approach: start with business outcomes, clarify the expected value, choose the minimum viable architecture, secure data by design, document just enough, and advance through short iterations. His focus areas: software architecture, cloud, automation, applied AI, data protection, customer experience, and product analytics.",
      "In 2026, he founded his own publishing house to give his editorial work a lasting home: books grounded in practice, clarity, and reader autonomy — across technology, creative work, and illustrated books.",
      <><em>L’IA en action: Stratégies concrètes pour la croissance des PME</em> and its English edition, <em>AI in Action: Real‑World Strategies for Small Business Growth</em>, open his AI series for small businesses. The series also includes <em>The gap is you. — Decide, build, verify, and last with AI</em>. Two books are forthcoming: <em>Nobody made that decision. — Decide, respond, take responsibility: what AI puts back in your hands</em>, on responsibility and ethics; and <em>Hands on AI — Write, verify, automate: the practical guide for small businesses</em>, focused on real tools and practical work.</>,
      "He also publishes two illustrated books and a collection of themed word-search puzzle books. Across all his work, Sylvain Tremblay pursues the same aim: turn complex subjects into useful decisions, systems, and works — sound in design, accessible in form, and durable in effect."
    ],
    nav: { about: "About", books: "Books", projects: "Projects", contact: "Contact" },
    heroTitle: "Fractional Software Architect · Author-Publisher",
    heroBody:
      "30+ years in tech: technology leadership, architecture, digital transformation, cloud (AWS/Azure/GCP), security & compliance (ISO 27001, Quebec Law 25, GDPR). Ex‑Intuit (Quicken, QuickBooks, TurboTax), founder of Global‑Lan, co‑founder of 55+ YOGA.",
    ctaContact: "Contact me",
    ctaBooks: "See my books",
    available: "Available for fractional engagements",
    aboutTitle: "About",
    aboutP1:
      "I help SME leaders and organizations make clear, measurable technology decisions: digital roadmap, software architecture, cloud migration, security & compliance (Law 25, GDPR), and pragmatic AI integration.",
    aboutP2:
      "My approach is straightforward: deliver visible value fast (rapid assessment → prioritized plan), then iterate with concrete KPIs. I operate in a fractional software architect role, alongside internal teams and partners.",
    booksTitle: "Books",
    booksIntro: "AI guides (EN/FR) and puzzle books — optimized thumbnails.",
    viewOnEditionsst: "See on editionsst.com",
    viewOnAmazon: "View on Amazon",
    aiGuides: "AI Books",
    puzzleBooks: "Puzzle Books",
    illustratedBooks: "Illustrated Books",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    contactLead: "For collaborations, fractional work or media.",
    footerLoc: "Based in Québec, Canada",
    langToggle: "FR",
  },
} as const;

type Lang = keyof typeof messages;

const EDITIONSST_BASE = "https://editionsst.com";

// Lien vers editionsst.com : page d’ouvrage dédiée si elle existe (selon la langue
// affichée sur le site), sinon page d’accueil editionsst.com dans cette même langue.
function editionsstLink(book: { pageFr?: string; pageEn?: string }, lang: Lang) {
  const page = lang === "fr" ? book.pageFr : book.pageEn;
  if (page) return `${EDITIONSST_BASE}${page}`;
  return lang === "fr" ? `${EDITIONSST_BASE}/` : `${EDITIONSST_BASE}/en/`;
}

type MarketCode =
  | "US" | "CA" | "UK" | "GB" | "FR" | "DE" | "ES" | "IT"
  | "AU" | "MX" | "BR" | "JP" | "IN" | "NL";

const MARKET_DOMAIN: Record<MarketCode, string> = {
  US: "amazon.com",
  CA: "amazon.ca",
  UK: "amazon.co.uk", // alias GB
  GB: "amazon.co.uk",
  FR: "amazon.fr",
  DE: "amazon.de",
  ES: "amazon.es",
  IT: "amazon.it",
  AU: "amazon.com.au",
  MX: "amazon.com.mx",
  BR: "amazon.com.br",
  JP: "amazon.co.jp",
  IN: "amazon.in",
  NL: "amazon.nl",
};

// Lien Amazon géolocalisé — comportement d'origine, restauré pour les livres
// de casse-têtes et les livres illustrés (seuls les trois titres de la série
// IA pointent vers editionsst.com, voir editionsstLink ci-dessus).
function amazonLink(
  asin: string,
  opts?: { market?: MarketCode }
) {
  if (opts?.market) {
    const domain = MARKET_DOMAIN[opts.market];
    if (domain) return `https://${domain}/dp/${asin}`;
  }

  const locale =
    (typeof navigator !== "undefined" && (navigator.languages?.[0] || navigator.language)) ||
    "en-US";
  const lc = locale.toLowerCase();

  // Vérifie d’abord les régions explicites (fr-CA, en-CA, etc.)
  const region = lc.split("-")[1]?.toUpperCase() as MarketCode | undefined;
  if (region && MARKET_DOMAIN[region]) {
    return `https://${MARKET_DOMAIN[region]}/dp/${asin}`;
  }

  // Priorité: CA avant FR
  if (lc.includes("ca")) return `https://${MARKET_DOMAIN.CA}/dp/${asin}`;
  if (lc.includes("fr")) return `https://${MARKET_DOMAIN.FR}/dp/${asin}`;

  // Autres langues/régions
  if (lc.includes("us")) return `https://${MARKET_DOMAIN.US}/dp/${asin}`;
  if (lc.includes("uk") || lc.includes("gb")) return `https://${MARKET_DOMAIN.UK}/dp/${asin}`;
  if (lc.startsWith("de")) return `https://${MARKET_DOMAIN.DE}/dp/${asin}`;
  if (lc.startsWith("es")) return `https://${MARKET_DOMAIN.ES}/dp/${asin}`;
  if (lc.startsWith("it")) return `https://${MARKET_DOMAIN.IT}/dp/${asin}`;
  if (lc.startsWith("ja")) return `https://${MARKET_DOMAIN.JP}/dp/${asin}`;
  if (lc.startsWith("nl")) return `https://${MARKET_DOMAIN.NL}/dp/${asin}`;
  if (lc.startsWith("hi") || lc.includes("in")) return `https://${MARKET_DOMAIN.IN}/dp/${asin}`;
  if (lc.startsWith("pt") || lc.includes("br")) return `https://${MARKET_DOMAIN.BR}/dp/${asin}`;
  if (lc.includes("mx")) return `https://${MARKET_DOMAIN.MX}/dp/${asin}`;
  if (lc.includes("au")) return `https://${MARKET_DOMAIN.AU}/dp/${asin}`;

  // défaut
  return `https://${MARKET_DOMAIN.US}/dp/${asin}`;
}

// Cover CDN de secours pour les livres sans miniature locale
function coverUrl(asin: string) {
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SL1000_.jpg`;
}

// tag books by type for separate sections
const aiBooks = [
  {
    title: "AI in Action: Real-World Strategies for Small Business Growth",
    asin: "B0FLB9KK8S",
    lang: "EN",
    cover: "/images/covers/ai-in-action.jpg",
  },
  {
    title: "L’IA en action : Stratégies concrètes pour la croissance des PME",
    asin: "B0FLF2NHRM",
    lang: "FR",
    cover: "/images/covers/lia-en-action.jpg",
  },
  {
    title: "L’écart, c’est vous. — Décider, construire, vérifier et durer avec l’IA",
    asin: "B0HFWV11BX",
    lang: "FR",
    cover: "/images/covers/lecart-cest-vous.jpg",
    pageFr: "/lecart-cest-vous/",
    pageEn: "/en/the-gap-is-you/",
  },
];

const puzzleBooks = [
  { title: "Mots cachés — Été", asin: "B0FNL9WY4N", lang: "FR" },
  { title: "Mots cachés — Camping & plein air", asin: "B0FN7RF28R", lang: "FR" },
  { title: "Mots cachés — Animaux", asin: "B0FN4QZBQ9", lang: "FR" },
  { title: "Mots cachés — Géographie", asin: "B0FN4V48DC", lang: "FR" },
  { title: "Mots cachés — Culinaire", asin: "B0FN4X1HNL", lang: "FR" },
  { title: "Mots cachés — Automne", asin: "B0FPMN1SXK", lang: "FR" },
  { title: "Mots cachés — Halloween", asin: "B0FQ3MBVJH", lang: "FR" },
  { title: "Mots cachés — Noël", asin: "B0G3P9YHZ4", lang: "FR" },
];

const illustratedBooks = [
  { title: "Nora et ses amis", asin: "B0G442LCSZ", lang: "FR" },
  { title: "Nora et Papi", asin: "B0G4DM1DGT", lang: "FR" },
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
        <Biography t={t} />
        <Books t={t} lang={lang} />
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
          <a href="#bio" className="hover:text-white">{t.bioTitle}</a>
          <a href="#books" className="hover:text-white">{t.nav.books}</a>
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
            <div className="px-4 sm:px-6 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold">{t.aboutTitle}</h2>
              <p className="mt-4 text-neutral-300">{t.aboutP1}</p>
              <p className="mt-4 text-neutral-300">{t.aboutP2}</p>
            </div>
          </section>
  );
}

function Biography({ t }: any) {
  return (
          <section id="bio" className="py-16 sm:py-24 border-t border-neutral-800">
            <div className="px-4 sm:px-6 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold">{t.bioTitle}</h2>
              <div className="mt-6 grid gap-6 text-neutral-300">
                {t.bioParas?.map((p, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
  );
}

function BookCard({ book, t, lang, mode }: any) {
  const href = mode === "editionsst" ? editionsstLink(book, lang) : amazonLink(book.asin);
  const label = mode === "editionsst" ? t.viewOnEditionsst : t.viewOnAmazon;
  const cover = book.cover ?? coverUrl(book.asin);
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 hover:bg-neutral-900">
      <a href={href} target="_blank" rel="noreferrer" className="block mx-auto">
        <img
          src={cover}
          alt={`Couverture — ${book.title}`}
          className="mx-auto rounded-md ring-1 ring-white/10 object-cover aspect-[2/3]"
          style={{ width: 160, height: 240 }}  // small display for sharpness
          loading="lazy"
        />
      </a>
      <div className="text-xs text-neutral-400 mt-3">{book.lang}</div>
      <h3 className="mt-1 font-medium leading-snug text-sm">{book.title}</h3>
      <div className="mt-3">
        <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-fuchsia-300 px-2.5 py-1.5 rounded-lg ring-1 ring-neutral-700 hover:bg-neutral-800">
          <span>{label}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M13 5h6v6h-2V8.41l-9.29 9.3-1.42-1.42 9.3-9.29H13V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Books({ t, lang }: any) {
  return (
    <section id="books" className="py-16 sm:py-24 border-t border-neutral-800">
      <h2 className="text-2xl sm:text-3xl font-bold">{t.booksTitle}</h2>
      <p className="mt-3 text-neutral-300">{t.booksIntro}</p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">{t.aiGuides}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {aiBooks.map((b) => <BookCard key={b.asin} book={b} t={t} lang={lang} mode="editionsst" />)}
      </div>

      <h3 className="mt-10 mb-3 text-lg font-semibold">{t.puzzleBooks}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {puzzleBooks.map((b) => <BookCard key={b.asin} book={b} t={t} lang={lang} mode="amazon" />)}
      </div>

      <h3 className="mt-10 mb-3 text-lg font-semibold">{t.illustratedBooks}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {illustratedBooks.map((b) => <BookCard key={b.asin} book={b} t={t} lang={lang} mode="amazon" />)}
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
