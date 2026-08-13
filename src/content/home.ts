// Startseiten-Inhalte für Ohlmeier Architekten, aus verifizierten Fakten
// (CLIENT.md). Stats enthalten nur belegbare Zahlen (Gründungsjahr) —
// unbekannte Kennzahlen (Projektanzahl, Weiterempfehlungsrate) wurden
// bewusst entfernt statt erfunden. Testimonials und FAQ bleiben Platzhalter,
// bis der Kunde echte Zitate bzw. echte Kundenfragen liefert (CLIENT.md §20, §23).

import type { Service } from "@/components/sections/features";
import type { FaqItem } from "@/components/sections/faq";
import type { ProcessStep } from "@/components/sections/process";
import type { Stat } from "@/components/sections/stats";
import type { Testimonial } from "@/components/shared/testimonial-card";
import { services } from "@/content/services";
import type { Action, SectionIntro } from "@/types/content";

interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    actions: { primary: Action; secondary: Action };
  };
  services: { intro: SectionIntro; items: Service[] };
  stats: Stat[];
  process: { intro: SectionIntro; steps: ProcessStep[] };
  testimonials: { intro: SectionIntro; items: Testimonial[] };
  faq: { intro: SectionIntro; items: FaqItem[] };
  cta: { title: string; subtitle: string; action: Action; note: string };
}

export const home: HomeContent = {
  hero: {
    eyebrow: "Architekturbüro in Kassel seit 1992",
    title: "Architektur, die Nutzung, Budget und Ort zusammendenkt",
    subtitle:
      "Ohlmeier Architekten begleitet Bauvorhaben vom ersten Entwurf bis zur Bauüberwachung — für private Bauherren ebenso wie für Büro-, Pflege- und Bildungsbauten.",
    actions: {
      primary: { label: "Projekt anfragen", href: "/kontakt" },
      secondary: { label: "Leistungen ansehen", href: "/leistungen" },
    },
  },
  services: {
    intro: {
      eyebrow: "Leistungen",
      title: "Was wir für Sie tun",
      subtitle:
        "Von der ersten Idee bis zur Übergabe — über alle Leistungsphasen der HOAI.",
    },
    items: services.map((service) => ({
      icon: service.icon,
      title: service.title,
      description: service.excerpt,
      href: `/leistungen/${service.slug}`,
    })),
  },
  stats: [
    { value: 1992, label: "Bürogründung" },
    { value: 34, label: "Jahre Erfahrung" },
  ],
  process: {
    intro: {
      eyebrow: "So arbeiten wir",
      title: "In drei Schritten zum Ergebnis",
      subtitle:
        "Ein transparenter Ablauf nimmt die Unsicherheit aus der Entscheidung.",
    },
    steps: [
      {
        title: "Kennenlernen",
        description:
          "Ein Erstgespräch zu Ausgangslage, Nutzung und Budget Ihres Vorhabens — Grundlage für die weitere Planung.",
      },
      {
        title: "Entwurf & Planung",
        description:
          "Entwurfs- und Ausführungsplanung mit Abstimmung der beteiligten Fachdisziplinen, bis zur Baugenehmigung und Ausschreibung.",
      },
      {
        title: "Bauüberwachung & Übergabe",
        description:
          "Begleitung der Bauausführung vor Ort bis zur Abnahme und mängelfreien Übergabe.",
      },
    ],
  },
  testimonials: {
    intro: {
      eyebrow: "Referenzen",
      title: "Was Kundinnen und Kunden sagen",
    },
    items: [
      {
        quote:
          "Ein konkretes Zitat mit einem messbaren Ergebnis wirkt stärker als jedes Eigenlob. Dieser Platzhalter zeigt die ideale Länge.",
        name: "Vorname Nachname",
        role: "Position, Unternehmen",
      },
      {
        quote:
          "Zwei bis drei Sätze, die ein echtes Projekt beschreiben: Ausgangslage, Zusammenarbeit und was sich danach verbessert hat.",
        name: "Vorname Nachname",
        role: "Position, Unternehmen",
      },
      {
        quote:
          "Nur echte Stimmen mit echtem Namen und Einverständnis verwenden — anonyme Zitate schaden mehr, als sie nützen.",
        name: "Vorname Nachname",
        role: "Position, Unternehmen",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "FAQ",
      title: "Häufige Fragen",
      subtitle:
        "Die echten Fragen aus Anfragen und Gesprächen — inklusive der unbequemen zu Preis und Dauer.",
    },
    items: [
      {
        question: "Was kostet ein Projekt?",
        answer:
          "Eine ehrliche Antwort mit Preisrahmen oder Einstiegspreis. Die Preisfrage offen zu beantworten schafft Vertrauen und filtert unpassende Anfragen.",
      },
      {
        question: "Wie lange dauert die Umsetzung?",
        answer:
          "Ein realistischer Zeitrahmen mit den wichtigsten Einflussfaktoren, damit Interessenten planen können.",
      },
      {
        question: "Wie läuft die Zusammenarbeit ab?",
        answer:
          "Kurzfassung des Prozesses mit Verweis auf die Prozess-Sektion: Erstgespräch, Angebot, Umsetzung, Übergabe.",
      },
      {
        question: "Was passiert nach der Anfrage?",
        answer:
          "Konkret beschreiben, was der nächste Schritt ist und wie schnell eine Antwort kommt — das senkt die Hürde vor dem Absenden.",
      },
      {
        question: "Eine unbequeme, aber ehrliche Frage?",
        answer:
          "Auch Einwände offen beantworten. Wer die kritischen Fragen selbst stellt und beantwortet, wirkt souverän.",
      },
    ],
  },
  cta: {
    title: "Bereit für den nächsten Schritt?",
    subtitle: "Erzählen Sie uns von Ihrem Vorhaben — wir melden uns zurück.",
    action: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
    note: "Wir melden uns nach Ihrer Anfrage zurück.",
  },
};
