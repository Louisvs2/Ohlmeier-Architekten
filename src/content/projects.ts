// Echte Projektliste von Ohlmeier Architekten (Übersichtsseite der
// bestehenden Website). Baujahr/Ort sind nur für die 3 Projekte bekannt,
// deren Detailseiten im PDF-Export vorlagen (Eichenbergstraße,
// Wilhelmshöher-Allee, Germania) — für alle anderen bewusst leer gelassen,
// nicht erfunden (CLIENT.md, „wartet auf Kundendaten"). `category` ist nur
// gesetzt, wo der Projektname sie eindeutig nahelegt (Wohnhaus/Wohnen/
// Mehrfamilienhaus → Wohnen, Schule → Öffentlich) — alles andere bleibt
// unkategorisiert statt geraten. `material` steuert nur die Kachel-Optik
// im schwebenden Projekte-Feld (FloatingProjects), keine inhaltliche Aussage.

import type { MosaicMaterial } from "@/lib/materials";
import type { SectionImage } from "@/types/content";

export interface ProjectDetail {
  slug: string;
  title: string;
  category?: "Wohnen" | "Öffentlich";
  year?: number;
  location?: string;
  material: MosaicMaterial;
  /** Real teaser/hero photo — only set for projects whose photography was
   *  recovered from the reference PDFs (CLIENT.md §18). */
  image?: SectionImage;
  /** Full photo set for the project detail page. */
  gallery?: SectionImage[];
}

const materials: MosaicMaterial[] = [
  "concrete",
  "wood",
  "glass",
  "rust",
  "steel",
];

function cycle<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

const rawProjects: Omit<ProjectDetail, "material">[] = [
  {
    slug: "buero-und-geschaeftshaus-lutherplatz",
    title: "Büro- und Geschäftshaus am Lutherplatz",
  },
  {
    slug: "wohnhaus-weidlingstrasse",
    title: "Wohnhaus Weidlingstraße",
    category: "Wohnen",
  },
  { slug: "wohnhaus-borken", title: "Wohnhaus Borken", category: "Wohnen" },
  {
    slug: "buerogebaeude-friedrich-ebert-strasse",
    title: "Bürogebäude Friedrich-Ebert-Straße",
  },
  {
    slug: "wohnhaus-eichenbergstrasse",
    title: "Wohnhaus Eichenbergstraße",
    category: "Wohnen",
    year: 2007,
    location: "Kassel",
    image: {
      src: "/images/projects/wohnhaus-eichenbergstrasse/hero.jpg",
      alt: "Wohnhaus Eichenbergstraße, Kassel — Außenansicht",
    },
    gallery: [
      {
        src: "/images/projects/wohnhaus-eichenbergstrasse/hero.jpg",
        alt: "Wohnhaus Eichenbergstraße, Straßenansicht",
      },
      {
        src: "/images/projects/wohnhaus-eichenbergstrasse/01.jpg",
        alt: "Wohnhaus Eichenbergstraße, Balkon und Terrasse",
      },
      {
        src: "/images/projects/wohnhaus-eichenbergstrasse/02.jpg",
        alt: "Wohnhaus Eichenbergstraße, Eckansicht",
      },
      {
        src: "/images/projects/wohnhaus-eichenbergstrasse/03.jpg",
        alt: "Wohnhaus Eichenbergstraße, Gartenansicht",
      },
      {
        src: "/images/projects/wohnhaus-eichenbergstrasse/04.jpg",
        alt: "Wohnhaus Eichenbergstraße, Eingangsseite",
      },
    ],
  },
  {
    slug: "henschel-schule-kassel",
    title: "Henschel Schule Kassel",
    category: "Öffentlich",
  },
  { slug: "christkoenig-borken", title: "Christkönig Borken" },
  { slug: "volksbank-kassel-goettingen", title: "Volksbank Kassel-Göttingen" },
  { slug: "hotel-schweizer-hof", title: "Hotel Schweizer Hof" },
  {
    slug: "wohnhaus-stiegelwiesen",
    title: "Wohnhaus Stiegelwiesen",
    category: "Wohnen",
  },
  {
    slug: "buero-wohn-und-geschaeftshaus-hauptbahnhof-aachen",
    title: "Büro-, Wohn- und Geschäftshaus Hauptbahnhof Aachen",
  },
  { slug: "autistenwohnheim-st-martin", title: "Autistenwohnheim St. Martin" },
  {
    slug: "buerogebaeude-wilhelmshoeher-allee",
    title: "Bürogebäude Wilhelmshöher-Allee",
    year: 2010,
    location: "Kassel",
    image: {
      src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/hero.jpg",
      alt: "Bürogebäude Wilhelmshöher-Allee, Kassel — Außenansicht",
    },
    gallery: [
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/hero.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Eckansicht",
      },
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/01.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Fassadendetail",
      },
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/02.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Treppenhaus",
      },
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/03.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Fassade",
      },
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/04.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Detailansicht",
      },
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/05.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Straßenansicht",
      },
      {
        src: "/images/projects/buerogebaeude-wilhelmshoeher-allee/06.jpg",
        alt: "Bürogebäude Wilhelmshöher-Allee, Gesamtansicht",
      },
    ],
  },
  {
    slug: "wohnhaus-seebergstrasse",
    title: "Wohnhaus Seebergstraße",
    category: "Wohnen",
  },
  {
    slug: "buerogebaeude-landgraf-karl-strasse",
    title: "Bürogebäude Landgraf-Karl-Straße",
  },
  { slug: "musik-und-kongresshalle", title: "Musik- und Kongresshalle" },
  {
    slug: "praxis-und-buerohaus-germania",
    title: "Praxis- und Bürohaus Germania",
    year: 2016,
    location: "Kassel",
    image: {
      src: "/images/projects/praxis-und-buerohaus-germania/hero.jpg",
      alt: "Praxis- und Bürohaus Germania, Kassel — Außenansicht",
    },
    gallery: [
      {
        src: "/images/projects/praxis-und-buerohaus-germania/hero.jpg",
        alt: "Praxis- und Bürohaus Germania, Straßenansicht",
      },
      {
        src: "/images/projects/praxis-und-buerohaus-germania/01.jpg",
        alt: "Praxis- und Bürohaus Germania, Balkone",
      },
      {
        src: "/images/projects/praxis-und-buerohaus-germania/02.jpg",
        alt: "Praxis- und Bürohaus Germania, Eckansicht",
      },
      {
        src: "/images/projects/praxis-und-buerohaus-germania/03.jpg",
        alt: "Praxis- und Bürohaus Germania, Detailansicht",
      },
      {
        src: "/images/projects/praxis-und-buerohaus-germania/04.jpg",
        alt: "Praxis- und Bürohaus Germania, Gesamtansicht",
      },
    ],
  },
  {
    slug: "buero-und-geschaeftshaus-friedrich-ebert",
    title: "Büro- und Geschäftshaus Friedrich-Ebert",
  },
  { slug: "praxis-und-buerohaus", title: "Praxis- und Bürohaus" },
  {
    slug: "buero-und-wohnhaus-rolandstrasse",
    title: "Büro- und Wohnhaus Rolandstraße",
  },
  {
    slug: "mehrfamilienhaus-kassel",
    title: "Mehrfamilienhaus Kassel",
    category: "Wohnen",
  },
  { slug: "aerztehaus-haldorf", title: "Ärztehaus Haldorf" },
  { slug: "pflegeheim-st-elisabeth", title: "Pflegeheim St. Elisabeth" },
  {
    slug: "wohnhauserweiterung-kassel",
    title: "Wohnhauserweiterung Kassel",
    category: "Wohnen",
  },
  { slug: "haus-elisabethenruhe", title: "Haus Elisabethenruhe" },
  {
    slug: "georg-august-zinn-schule",
    title: "Georg-August-Zinn Schule",
    category: "Öffentlich",
  },
  { slug: "wohnen-am-mulang", title: "Wohnen am Mulang", category: "Wohnen" },
  {
    slug: "bmw-neubau-gebrauchtwagenzentrum",
    title: "BMW Neubau Gebrauchtwagenzentrum",
  },
  {
    slug: "wohnhaus-bad-wildungen",
    title: "Wohnhaus Bad Wildungen",
    category: "Wohnen",
  },
  { slug: "innenarchitektur-feldberg", title: "Innenarchitektur Feldberg" },
  {
    slug: "reformschule-kassel",
    title: "Reformschule Kassel",
    category: "Öffentlich",
  },
  {
    slug: "mehrfamilienhaus-wilhelmshoehe",
    title: "Mehrfamilienhaus Wilhelmshöhe",
    category: "Wohnen",
  },
  {
    slug: "gastronomie-genohotel-baunatal",
    title: "Gastronomie GenoHotel Baunatal",
  },
];

export const projects: ProjectDetail[] = rawProjects.map((project, i) => ({
  ...project,
  material: cycle(materials, i),
}));

export const projectsPage = {
  hero: {
    title: "Projekte",
    subtitle:
      "Unsere Projekte beinhalten die gesamte Bandbreite der Architekturthemen — von Wohnen über Gewerbe und Verwaltung bis zu Gesundheit, Bildung und städtischen Freiräumen.",
  },
  cta: {
    title: "Ein eigenes Vorhaben?",
    subtitle: "Erzählen Sie uns davon — wir melden uns zurück.",
    action: { label: "Kontakt aufnehmen", href: "/kontakt" },
    note: "Wir melden uns nach Ihrer Anfrage zurück.",
  },
};
