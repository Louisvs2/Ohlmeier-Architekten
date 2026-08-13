// Placeholder content for the about page. Replaced per client from the
// CLIENT.md briefing (§2, §5, §6).

import { Handshake, Sparkles, Target } from "lucide-react";

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
    title: "Wer hinter der Arbeit steht",
    subtitle:
      "Zwei bis drei Sätze zur Geschichte und Haltung des Unternehmens: seit wann, für wen, und was die Arbeit auszeichnet. Menschen kaufen von Menschen.",
  },
  values: {
    intro: {
      eyebrow: "Werte",
      title: "Wofür wir stehen",
      subtitle:
        "Drei Werte, die sich im Alltag beweisen — keine Floskeln, sondern überprüfbare Arbeitsweisen.",
    },
    items: [
      {
        icon: Handshake,
        title: "Wert Eins",
        description:
          "Was dieser Wert konkret im Projektalltag bedeutet und woran Kundinnen und Kunden ihn merken.",
      },
      {
        icon: Target,
        title: "Wert Zwei",
        description:
          "Was dieser Wert konkret im Projektalltag bedeutet und woran Kundinnen und Kunden ihn merken.",
      },
      {
        icon: Sparkles,
        title: "Wert Drei",
        description:
          "Was dieser Wert konkret im Projektalltag bedeutet und woran Kundinnen und Kunden ihn merken.",
      },
    ],
  },
  cta: {
    title: "Lernen Sie uns kennen",
    subtitle:
      "Ein kurzes Gespräch sagt mehr als jede Website. Wir freuen uns auf Ihr Anliegen.",
    action: { label: "Kontakt aufnehmen", href: "/kontakt" },
    note: "Unverbindlich. Antwort innerhalb von 24 Stunden.",
  },
};
