// Über-uns-Inhalte für Ohlmeier Architekten — Originaltext von der echten
// "OA"-Seite (Philosophie-Zitat, "Das Architekturbüro"-Absatz,
// Projekt-Schwerpunkte). Team kommt separat aus src/content/team.ts.

import { Building2, Handshake, Users } from "lucide-react";

import type { Feature } from "@/components/sections/features";
import type { Action, SectionIntro } from "@/types/content";

interface AboutContent {
  hero: { eyebrow: string; title: string; subtitle: string };
  intro: { intro: SectionIntro; items: Feature[] };
  schwerpunkte: { intro: SectionIntro; items: string[] };
  team: { intro: SectionIntro };
  cta: { title: string; subtitle: string; action: Action; note: string };
}

export const about: AboutContent = {
  hero: {
    eyebrow: "Über uns",
    title: "Bauen ist ein Prozess",
    subtitle:
      "Unser Fundus ist die kraftvolle Ästhetik der Moderne – kritisch weiterentwickelt zu einem Handlungsprogramm, das mit wohlüberlegtem Einsatz gestalterischer Ideen den Ort, die Nutzung, das Budget und die Ökologie zu einem spannenden Raumerlebnis verdichtet.",
  },
  intro: {
    intro: {
      eyebrow: "Das Büro",
      title: "Das Architekturbüro",
      subtitle:
        "Unser in Kassel ansässiges Büro wurde 1992 gegründet und verfügt über eine umfassende und kontinuierliche Erfahrung in der Planung und Bauleitung von Projekten in allen Leistungsphasen und Aufgabenbereichen der Architektur. Wir bieten Bauherren eine umfassende und verlässliche Betreuung und begleiten den gesamten Prozess von der ersten Skizze bis zum Projektabschluss. Durch die Zusammenarbeit mit beteiligten Fachdisziplinen entwickeln wir qualitätsvolle, nachhaltige und wirtschaftliche Lösungen für unterschiedliche Bauaufgaben.",
    },
    items: [
      {
        icon: Building2,
        title: "34 Jahre Erfahrung",
        description:
          "Bürogründung 1992 in Kassel — kontinuierliche Erfahrung über alle Leistungsphasen und Gebäudetypologien hinweg.",
      },
      {
        icon: Users,
        title: "Generationsübergreifend",
        description:
          "Geführt von Dipl.-Ing. Hans-Georg Ohlmeier und Philipp Ohlmeier, M.Sc. — zwei Partner, eine gemeinsame Handschrift.",
      },
      {
        icon: Handshake,
        title: "Mitglied im BDA",
        description:
          "Mitgliedschaft im Bund Deutscher Architektinnen und Architekten als Qualitäts- und Berufsstandard.",
      },
    ],
  },
  schwerpunkte: {
    intro: {
      eyebrow: "Schwerpunkte",
      title:
        "Unsere Projekte beinhalten die gesamte Bandbreite der Architekturthemen",
    },
    items: [
      "Wohnen und Wohnsonderformen",
      "Gewerbe und Technik",
      "Verwaltung und Dienstleistung",
      "Sanierung von denkmalgeschützten Bauten",
      "Ruhender Verkehr",
      "Gesundheit und Geriatrie",
      "Städtische Freiräume",
    ],
  },
  team: {
    intro: {
      eyebrow: "Team",
      title: "Wer bei uns plant und baut",
    },
  },
  cta: {
    title: "Lernen Sie uns kennen",
    subtitle:
      "Ein kurzes Gespräch sagt mehr als jede Website. Wir freuen uns auf Ihr Anliegen.",
    action: { label: "Kontakt aufnehmen", href: "/kontakt" },
    note: "Wir melden uns nach Ihrer Anfrage zurück.",
  },
};
