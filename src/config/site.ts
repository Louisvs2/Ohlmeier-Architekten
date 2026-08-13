// Central client configuration (PLAN.md §3) — the ONLY place where brand
// identity lives. Components must never hardcode a name, claim, or link;
// they read from this config so a new client project is a config change.

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Brand/display name — used in the header, footer, and metadata. */
  name: string;
  /** One-sentence description — used in metadata and the footer brand block. */
  description: string;
  /** Public contact channels — shown on the contact page. */
  contact: {
    email: string;
    phone?: string;
    /** Address lines, rendered as-is. */
    address?: string[];
  };
  /** Active social profiles only (dead profiles hurt trust, DESIGN.md §13). */
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Ohlmeier Architekten",
  description:
    "Architekturbüro in Kassel — Entwurf, Ausführungsplanung und Bauüberwachung für Wohn-, Büro- und Sonderbauten seit 1992.",
  contact: {
    email: "office@ohlmeier-architekten.de",
    phone: "+49 561 3085570",
    address: ["Rolandstraße 4", "34131 Kassel"],
  },
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/ohlmeier_architekten/",
    },
  ],
};
