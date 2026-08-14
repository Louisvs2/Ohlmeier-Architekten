// Leistungen von Ohlmeier Architekten — Originaltext von der "OA"-Seite der
// echten Website ("Die Architektenleistungen"), zu vier Detailseiten
// gebündelt. Energieberatung ist bewusst NICHT hier, sondern eine eigene
// Seite (src/content/energieberatung.ts), da sie auf der echten Seite einen
// eigenen Navigationspunkt hat. Die "Generalplanerleistungen" (Statik,
// Gebäudetechnik, Bauphysik, Akustik, Lichtplanung, Vermessung,
// Freiraumplanung) sind koordinierte Fachdisziplinen, keine eigenen
// Ohlmeier-Leistungen — siehe `generalplanerleistungen` unten, wird auf der
// Leistungen-Übersicht als unterstützende Liste angezeigt, nicht als
// eigene Detailseite.

import type { Feature } from "@/components/sections/features";
import type { SectionIntro } from "@/types/content";

export interface ServiceDetail {
  slug: string;
  title: string;
  /** Short card/teaser description, also used as meta description. */
  excerpt: string;
  hero: { title: string; subtitle: string };
  featuresIntro: SectionIntro;
  features: Feature[];
}

export const services: ServiceDetail[] = [
  {
    slug: "entwurfsplanung",
    title: "Entwurfsplanung",
    excerpt:
      "Gebäude-Entwurfsplanung — aus Ort, Nutzung, Budget und Ökologie entsteht ein stimmiges räumliches Konzept.",
    hero: {
      title: "Entwurfsplanung",
      subtitle:
        "Mit gezieltem Einsatz gestalterischer Mittel verbinden wir Ort, Nutzung, Budget und Ökologie zu einem qualitätsvollen und stimmigen räumlichen Konzept — der Ausgangspunkt für jedes Projekt.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Gebäude Entwurfsplanung",
        description:
          "Entwicklung eines tragfähigen Gestaltungskonzepts für Neubau- und Sanierungsvorhaben.",
      },
      {
        title: "Klare Gestaltung",
        description:
          "Unsere Arbeiten zeichnen sich durch eine klare Gestaltung aus — kein Stil um seiner selbst willen, sondern ein Konzept, das aus Ort, Nutzung, Budget und Ökologie entsteht.",
      },
      {
        title: "Abstimmung mit Fachdisziplinen",
        description:
          "Zusammenarbeit mit den beteiligten Fachdisziplinen für qualitätsvolle, nachhaltige und wirtschaftliche Lösungen.",
      },
    ],
  },
  {
    slug: "ausfuehrungsplanung",
    title: "Ausführungsplanung",
    excerpt:
      "Gebäude-Ausführungsplanung mit verlässlicher Einhaltung von Qualitäts-, Termin- und Kostenzielen.",
    hero: {
      title: "Ausführungsplanung",
      subtitle:
        "Wir begleiten den gesamten Prozess von der ersten Skizze bis zum Projektabschluss — mit effizienter, strukturierter Planung und klarer Kommunikation.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Gebäude Ausführungsplanung",
        description:
          "Detaillierte Planung als Grundlage für eine reibungslose Bauausführung.",
      },
      {
        title: "Strukturierte Planung",
        description:
          "Effiziente, strukturierte Planung und klare Kommunikation über den gesamten Bauprozess.",
      },
      {
        title: "Qualitäts-, Termin- und Kostenziele",
        description:
          "Verlässliche Einhaltung der vereinbarten Ziele bis zum Projektabschluss.",
      },
    ],
  },
  {
    slug: "grundlagenplanung-projektstudien",
    title: "Grundlagenplanung & Projektstudien",
    excerpt:
      "Gutachten, Standortuntersuchungen sowie Projektstudien, Entwicklungs- und Programmplanungen als fundierte Basis für Ihr Vorhaben.",
    hero: {
      title: "Grundlagenplanung & Projektstudien",
      subtitle:
        "Bevor geplant wird, klären wir die Grundlagen: Standort, Machbarkeit und Programm — eine fundierte Basis für alle weiteren Entscheidungen.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Grundlagenplanungen",
        description: "Gutachten und Standortuntersuchungen.",
      },
      {
        title: "Projektstudien",
        description: "Entwicklungs- und Programmplanungen für Ihr Bauvorhaben.",
      },
      {
        title: "Städtebauliche Entwurfsplanung",
        description:
          "Konzepte, die das Gebäude in seinen städtebaulichen Kontext einordnen.",
      },
    ],
  },
  {
    slug: "innenausbau-farbkonzepte",
    title: "Innenausbau & Farbkonzepte",
    excerpt:
      "Planungen zum Innenausbau und Farbkonzepte — Raumerlebnis bis ins Detail.",
    hero: {
      title: "Innenausbau & Farbkonzepte",
      subtitle:
        "Mit wohlüberlegtem Einsatz gestalterischer Ideen verdichten wir Ort, Nutzung, Budget und Ökologie zu einem spannenden Raumerlebnis — bis in den Innenausbau hinein.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Planungen zum Innenausbau",
        description:
          "Raumkonzepte, die Gestaltung und Nutzung konsequent zusammendenken.",
      },
      {
        title: "Farbkonzepte",
        description:
          "Abgestimmte Farb- und Materialkonzepte für ein stimmiges Gesamtbild.",
      },
    ],
  },
];

/** Fachdisziplinen, die Ohlmeier Architekten koordiniert, aber nicht selbst
 *  erbringt — auf der Leistungen-Übersicht als unterstützende Liste, keine
 *  eigenen Detailseiten (Korrektheit: keine fremden Leistungen als eigene
 *  ausweisen). */
export const generalplanerleistungen = {
  intro: {
    eyebrow: "In Zusammenarbeit",
    title: "Generalplanerleistungen",
    subtitle:
      "Durch die Zusammenarbeit mit beteiligten Fachdisziplinen entwickeln wir qualitätsvolle, nachhaltige und wirtschaftliche Lösungen.",
  },
  items: [
    "Statik",
    "Gebäudetechnik",
    "Bauphysik",
    "Akustik",
    "Lichtplanung",
    "Vermessung",
    "Freiraumplanung",
  ],
};

export const servicesPage = {
  hero: {
    title: "Leistungen im Überblick",
    subtitle:
      "Wir bieten Bauherren eine umfassende und verlässliche Betreuung und begleiten den gesamten Prozess von der ersten Skizze bis zum Projektabschluss.",
  },
  cta: {
    title: "Nicht sicher, welche Leistung Sie brauchen?",
    subtitle:
      "Im Erstgespräch klären wir gemeinsam, welcher Leistungsumfang zu Ihrem Vorhaben passt.",
    action: { label: "Kontakt aufnehmen", href: "/kontakt" },
    note: "Wir melden uns nach Ihrer Anfrage zurück.",
  },
};
