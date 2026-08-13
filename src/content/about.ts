// Über-uns-Inhalte für Ohlmeier Architekten, recherchiert aus öffentlichen
// Quellen (CLIENT.md §2, §5). Werte-Sektion bleibt bewusst allgemein
// gehalten, bis der Kunde eigene Formulierungen liefert (CLIENT.md §6) —
// keine erfundenen Alleinstellungsmerkmale.

import { Building2, Handshake, Users } from "lucide-react";

import type { Feature } from "@/components/sections/features";
import type { Action, SectionIntro } from "@/types/content";

interface AboutContent {
  hero: { eyebrow: string; title: string; subtitle: string };
  values: { intro: SectionIntro; items: Feature[] };
  cta: { title: string; subtitle: string; action: Action; note: string };
}

export const about: AboutContent = {
  hero: {
    eyebrow: "Über uns",
    title: "Architektur aus Kassel, seit 1992",
    subtitle:
      "Ohlmeier Architekten plant und begleitet Bauvorhaben von der ersten Idee bis zur Übergabe — von Ein- und Zweifamilienhäusern über Büro- und Verwaltungsbauten bis zu Pflege- und Bildungseinrichtungen. Geführt von Dipl.-Ing. Hans-Georg Ohlmeier und Philipp Ohlmeier, M.Sc.",
  },
  values: {
    intro: {
      eyebrow: "Das Büro",
      title: "Was uns auszeichnet",
      subtitle:
        "Verifizierte Fakten — die persönliche Haltung dazu ergänzt der Kunde in eigenen Worten.",
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
  cta: {
    title: "Lernen Sie uns kennen",
    subtitle:
      "Ein kurzes Gespräch sagt mehr als jede Website. Wir freuen uns auf Ihr Anliegen.",
    action: { label: "Kontakt aufnehmen", href: "/kontakt" },
    note: "Wir melden uns nach Ihrer Anfrage zurück.",
  },
};
