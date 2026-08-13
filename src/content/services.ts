// Placeholder services for the template. Replaced per client from the
// CLIENT.md briefing (§4) — slugs, titles, and copy are all placeholders.
// This file is the single source for service slugs: the homepage cards,
// the overview page, and the detail routes all derive from it.

import { Compass, PenTool, Rocket, type LucideIcon } from "lucide-react";

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

const sharedFeatures: Feature[] = [
  {
    title: "Bestandteil Eins",
    description:
      "Ein konkreter Bestandteil dieser Leistung, als Ergebnis für den Kunden formuliert.",
  },
  {
    title: "Bestandteil Zwei",
    description:
      "Ein konkreter Bestandteil dieser Leistung, als Ergebnis für den Kunden formuliert.",
  },
  {
    title: "Bestandteil Drei",
    description:
      "Ein konkreter Bestandteil dieser Leistung, als Ergebnis für den Kunden formuliert.",
  },
  {
    title: "Bestandteil Vier",
    description:
      "Ein konkreter Bestandteil dieser Leistung, als Ergebnis für den Kunden formuliert.",
  },
];

export const services: ServiceDetail[] = [
  {
    slug: "leistung-eins",
    icon: Compass,
    title: "Leistung Eins",
    excerpt:
      "Zwei Sätze zum Ergebnis dieser Leistung: Was hat der Kunde am Ende in der Hand, und welches Problem ist damit gelöst?",
    hero: {
      title: "Leistung Eins: das Versprechen in einem Satz",
      subtitle:
        "Zwei bis drei Sätze, die die Leistung aus Sicht des Kunden beschreiben: Ausgangslage, Vorgehen und das konkrete Ergebnis.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: sharedFeatures,
    faq: [
      {
        question: "Eine häufige Frage zu dieser Leistung?",
        answer:
          "Eine ehrliche, konkrete Antwort — die echten Fragen aus Kundengesprächen konvertieren am besten.",
      },
      {
        question: "Was kostet diese Leistung?",
        answer:
          "Ein Preisrahmen oder Einstiegspreis. Offenheit bei der Preisfrage schafft Vertrauen und filtert unpassende Anfragen.",
      },
    ],
  },
  {
    slug: "leistung-zwei",
    icon: PenTool,
    title: "Leistung Zwei",
    excerpt:
      "Zwei Sätze zum Ergebnis dieser Leistung: Was hat der Kunde am Ende in der Hand, und welches Problem ist damit gelöst?",
    hero: {
      title: "Leistung Zwei: das Versprechen in einem Satz",
      subtitle:
        "Zwei bis drei Sätze, die die Leistung aus Sicht des Kunden beschreiben: Ausgangslage, Vorgehen und das konkrete Ergebnis.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: sharedFeatures,
  },
  {
    slug: "leistung-drei",
    icon: Rocket,
    title: "Leistung Drei",
    excerpt:
      "Zwei Sätze zum Ergebnis dieser Leistung: Was hat der Kunde am Ende in der Hand, und welches Problem ist damit gelöst?",
    hero: {
      title: "Leistung Drei: das Versprechen in einem Satz",
      subtitle:
        "Zwei bis drei Sätze, die die Leistung aus Sicht des Kunden beschreiben: Ausgangslage, Vorgehen und das konkrete Ergebnis.",
    },
    featuresIntro: {
      eyebrow: "Leistungsumfang",
      title: "Was enthalten ist",
    },
    features: sharedFeatures,
  },
];

export const servicesPage = {
  hero: {
    title: "Leistungen im Überblick",
    subtitle:
      "Ein einleitender Satz, der das Leistungsspektrum zusammenfasst und die Auswahl erleichtert.",
  },
  cta: {
    title: "Nicht sicher, was Sie brauchen?",
    subtitle:
      "Im kostenlosen Erstgespräch klären wir gemeinsam, welcher Weg zu Ihrem Vorhaben passt.",
    action: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
    note: "Unverbindlich. Antwort innerhalb von 24 Stunden.",
  },
};
