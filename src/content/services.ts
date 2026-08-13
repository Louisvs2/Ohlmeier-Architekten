// Leistungen von Ohlmeier Architekten (CLIENT.md §4), recherchiert aus
// öffentlichen Quellen — Feature-Texte sind branchenübliche Beschreibungen
// des jeweiligen Leistungsbilds, keine wörtlichen Kundenzitate. FAQ-Inhalte
// (Preise, Fristen) bleiben bewusst offen, bis echte Kundenfragen vorliegen
// (CLIENT.md §23) — keine erfundenen Preisversprechen.

import { Compass, HardHat, PenTool, type LucideIcon } from "lucide-react";

import type { Feature } from "@/components/sections/features";
import type { FaqItem } from "@/components/sections/faq";
import type { SectionIntro } from "@/types/content";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** Short card/teaser description, also used as meta description. */
  excerpt: string;
  hero: { title: string; subtitle: string };
  featuresIntro: SectionIntro;
  features: Feature[];
  faq?: FaqItem[];
}

export const services: ServiceDetail[] = [
  {
    slug: "entwurfsplanung",
    icon: Compass,
    title: "Entwurfsplanung",
    excerpt:
      "Von der ersten Idee zum genehmigungsfähigen Entwurf — Grundlagenermittlung, Vorplanung und Entwurf für Wohn-, Büro- und Sonderbauten.",
    hero: {
      title: "Entwurfsplanung: aus Ihrer Idee wird ein tragfähiges Konzept",
      subtitle:
        "Wir erfassen Ausgangslage, Nutzung und Budget und entwickeln daraus einen Entwurf, der Gestaltung, Funktion und Wirtschaftlichkeit zusammenbringt — abgestimmt mit den beteiligten Fachplanern.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Grundlagenermittlung",
        description:
          "Klärung von Aufgabenstellung, Rahmenbedingungen und Zielen als Basis für die weitere Planung.",
      },
      {
        title: "Vor- und Entwurfsplanung",
        description:
          "Erarbeitung eines Planungskonzepts inklusive Kostenschätzung nach HOAI-Leistungsphasen 1–3.",
      },
      {
        title: "Abstimmung mit Fachdisziplinen",
        description:
          "Koordination mit Statik, Haustechnik und weiteren Fachplanern für ein stimmiges Gesamtkonzept.",
      },
      {
        title: "Bauantrag",
        description:
          "Vorbereitung und Einreichung der Genehmigungsplanung bei der zuständigen Behörde.",
      },
    ],
  },
  {
    slug: "ausfuehrungsplanung-ausschreibung",
    icon: PenTool,
    title: "Ausführungsplanung & Ausschreibung",
    excerpt:
      "Detaillierte Ausführungsplanung und Ausschreibung — die Grundlage für eine reibungslose Vergabe an ausführende Firmen.",
    hero: {
      title: "Ausführungsplanung & Ausschreibung: der Entwurf wird baubar",
      subtitle:
        "Wir übersetzen den genehmigten Entwurf in eine detaillierte Ausführungsplanung, erstellen Leistungsverzeichnisse und begleiten die Vergabe an ausführende Firmen.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Ausführungsplanung",
        description:
          "Detailpläne mit allen für die Bauausführung notwendigen Angaben nach HOAI-Leistungsphase 5.",
      },
      {
        title: "Leistungsverzeichnisse",
        description:
          "Vorbereitung der Vergabe mit prüfbaren, vollständigen Leistungsverzeichnissen.",
      },
      {
        title: "Ausschreibung & Vergabe",
        description:
          "Einholen und Auswerten von Angeboten sowie Mitwirkung bei der Vergabe an ausführende Firmen.",
      },
      {
        title: "Kostenkontrolle",
        description:
          "Fortlaufender Abgleich der Angebote und Vergaben mit der Kostenplanung.",
      },
    ],
  },
  {
    slug: "objektueberwachung",
    icon: HardHat,
    title: "Objektüberwachung",
    excerpt:
      "Bauleitung und Qualitätssicherung auf der Baustelle — von der Grundsteinlegung bis zur Übergabe.",
    hero: {
      title: "Objektüberwachung: Qualität auf der Baustelle sichern",
      subtitle:
        "Wir überwachen die Bauausführung auf Übereinstimmung mit Genehmigung, Ausführungsplanung und den anerkannten Regeln der Technik — bis zur mängelfreien Übergabe.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: [
      {
        title: "Bauleitung vor Ort",
        description:
          "Regelmäßige Baustellenpräsenz und Koordination der ausführenden Gewerke.",
      },
      {
        title: "Terminüberwachung",
        description:
          "Abgleich des Baufortschritts mit dem vereinbarten Terminplan.",
      },
      {
        title: "Qualitäts- und Kostenkontrolle",
        description:
          "Prüfung der Bauausführung und laufender Abgleich mit der Kostenplanung nach HOAI-Leistungsphase 8.",
      },
      {
        title: "Abnahme & Übergabe",
        description:
          "Organisation der Abnahme, Mängelfeststellung und -verfolgung bis zur Übergabe.",
      },
    ],
  },
];

export const servicesPage = {
  hero: {
    title: "Leistungen im Überblick",
    subtitle:
      "Von der ersten Idee bis zur Übergabe: Ohlmeier Architekten begleitet Ihr Bauvorhaben über alle Leistungsphasen — für Wohn-, Büro- und Sonderbauten.",
  },
  cta: {
    title: "Nicht sicher, welche Leistung Sie brauchen?",
    subtitle:
      "Im Erstgespräch klären wir gemeinsam, welcher Leistungsumfang zu Ihrem Vorhaben passt.",
    action: { label: "Kontakt aufnehmen", href: "/kontakt" },
    note: "Wir melden uns nach Ihrer Anfrage zurück.",
  },
};
