# CLIENT.md — Client Briefing Template

> **How to use this document:** Copy this file for every new client project and fill in every field. This briefing must contain **all** information required to build the complete website without asking further questions. A field left empty is a question that will interrupt production — resolve every `[...]` placeholder before development starts. Delete this note block once the briefing is complete.
>
> - Feeds `src/config/site.ts` → Company Name, Contact, Address, Opening Hours, Social Media
> - Feeds `src/content/` → Services, USP, FAQs, Testimonials/Reviews
> - Feeds design tokens (`globals.css`) → Brand Colors, Typography
> - Guides copywriting & SEO → Target Audience, Tone of Voice, Keywords, CTAs
>
> **Status:** ☐ Draft ☑ teilweise recherchiert — offene Punkte mit ❓ markiert ☐ Complete & approved by client ☐ Handed off to development
> **Last updated:** 2026-08-13 · **Filled in by:** Claude (Recherche aus öffentlichen Quellen — Direktzugriff auf ohlmeier-architekten.de war netzwerkseitig blockiert, Daten stammen aus Suchmaschinen-Snippets/Branchenverzeichnissen. Vor Launch mit dem Kunden verifizieren.)

---

## 1. Company Name

- **Legal name:** Ohlmeier Architekten PartmbB
- **Display name / brand name:** Ohlmeier Architekten
- **Domain:** https://www.ohlmeier-architekten.de/
- **Tagline / slogan (if any):** ❓ mit Kunde klären

## 2. Industry

- **Industry / sector:** Architektur — Planung von Wohn-, Büro-, Sonder- und Gewerbebauten
- **Business type:** Partnerschaftsgesellschaft mbB (PartmbB); Mitglied im BDA (Bund Deutscher Architektinnen und Architekten)
- **Years in business:** Bürogründung 1992 → 34 Jahre (Stand 2026)
- **Team size:** ❓ mit Kunde klären — geführt von zwei Partnern (siehe §11)

## 3. Target Audience

- **Primary audience:** Private Bauherren (Ein-/Zweifamilienhäuser), Unternehmen mit Büro-/Verwaltungs-/Gewerbebauten, Träger von Pflege-/Wohnheimen und medizinischen Bauten
- **Secondary audience:** Öffentliche Träger (Schulen), Hotellerie
- **Customer situation / pain points:** ❓ mit Kunde klären
- **Knowledge level:** experts
- **B2C / B2B / both:** both — private Bauherren und institutionelle/gewerbliche Auftraggeber

## 4. Services

> List every service that should appear on the website. Order = display order. Each service becomes an entry in `src/content/` and, if marked, a detail page under `/leistungen/[slug]`.

| #   | Service name                       | Short description (1–2 sentences)                                                             | Detail page? | Priority |
| --- | ---------------------------------- | --------------------------------------------------------------------------------------------- | ------------ | -------- |
| 1   | Entwurfsplanung                    | Von der ersten Idee bis zum genehmigungsfähigen Entwurf — Grundlagenermittlung bis Bauantrag. | yes          | high     |
| 2   | Ausführungsplanung & Ausschreibung | Detaillierte Planung und Vergabe an ausführende Firmen, HOAI-Leistungsphasen 5–7.             | yes          | high     |
| 3   | Objektüberwachung                  | Bauleitung und Qualitätssicherung auf der Baustelle bis zur Übergabe (HOAI-Leistungsphase 8). | yes          | high     |
| 4   | Innenausbau, Messe- & Ladenbau     | Objekteinrichtungen und Innenausbau für Gewerbe- und Verkaufsflächen.                         | no           | normal   |

- **Flagship service** (gets the most prominence): Komplettbetreuung über alle HOAI-Leistungsphasen — vom Entwurf bis zur Bauüberwachung
- **Services explicitly NOT offered** (to avoid wrong inquiries): ❓ mit Kunde klären

## 5. USP (Unique Selling Proposition)

- **Main USP in one sentence:** ❓ mit Kunde klären — in eigenen Worten des Kunden formulieren, nicht raten
- **Supporting proof points (3–5), verifiziert:**
  - Seit 1992 in Kassel — 34 Jahre kontinuierliche Erfahrung
  - Mitglied im BDA (Bund Deutscher Architektinnen und Architekten)
  - Generationsübergreifend geführt: Dipl.-Ing. Hans-Georg Ohlmeier und Philipp Ohlmeier, M.Sc.
  - Breites Typologie-Spektrum: Wohn-, Büro-, Pflege-, Bildungs- und Gewerbebauten
- **Guarantees / certifications / awards:** ❓ mit Kunde klären
- **Numbers we may publish:** ❓ mit Kunde klären — keine Projekt-/Weiterempfehlungszahlen recherchierbar, nicht erfinden

## 6. Brand Personality

> Determines the overall feel of design and copy. Check per pair — where on the spectrum does this brand sit?

| Trait               | 1   | 2   | 3   | 4   | 5   | Trait                      |
| ------------------- | --- | --- | --- | --- | --- | -------------------------- |
| Traditional         | ☐   | ☐   | ☐   | ☐   | ☐   | Modern                     |
| Serious             | ☐   | ☐   | ☐   | ☐   | ☐   | Playful                    |
| Premium / exclusive | ☐   | ☐   | ☐   | ☐   | ☐   | Accessible / down-to-earth |
| Corporate           | ☐   | ☐   | ☐   | ☐   | ☐   | Personal                   |
| Calm / understated  | ☐   | ☐   | ☐   | ☐   | ☐   | Bold / expressive          |

- **Three adjectives the client wants visitors to feel:** ❓ mit Kunde klären
- **Brands the client admires (any industry):** ❓ mit Kunde klären

## 7. Tone of Voice

- **Formality (German sites):** ☑ "Sie" (formal) ☐ "Du" (informal) — Branchenstandard für Architekturbüros, mit Kunde bestätigen
- **Language(s) of the website:** German only (Annahme — mit Kunde bestätigen)
- **Voice description:** ❓ mit Kunde klären
- **Words / phrases to use:** ❓ mit Kunde klären
- **Words / phrases to avoid:** ❓ mit Kunde klären
- **Example sentence in the target tone:** ❓ mit Kunde klären

## 8. Business Goals

- **Primary goal of the website:** ❓ mit Kunde klären — vermutlich qualifizierte Projektanfragen (privat + gewerblich)
- **Secondary goals:** ❓ mit Kunde klären
- **What does a successful website mean in numbers?** ❓ mit Kunde klären
- **Current situation:** Bestehende Website unter ohlmeier-architekten.de vorhanden (Startseite, /oa, /projekte, /kontakt, /impressum). Was funktioniert/nicht funktioniert und woher aktuelle Kunden kommen: ❓ mit Kunde klären

## 9. Primary Call To Action

- **Action:** ❓ mit Kunde klären — Annahme: "Projekt anfragen / Erstgespräch vereinbaren"
- **CTA label:** ❓ mit Kunde klären
- **Destination / mechanism:** Kontaktformular / Telefon / E-Mail
- **What happens after?** ❓ mit Kunde klären

## 10. Secondary Call To Action

- **Action:** Referenzprojekte ansehen (die alte Website hat eine eigene /projekte-Sektion — im Template aktuell nicht abgebildet, siehe §27)
- **CTA label:** ❓ mit Kunde klären
- **Destination:** Projekte-/Referenzenseite

## 11. Contact Information

- **Phone:** +49 561 3085570 — ☑ show prominently in header ☐ footer only (Annahme, mit Kunde bestätigen)
- **Email:** office@ohlmeier-architekten.de
- **WhatsApp / other channels:** none bekannt
- **Contact person (name + role, for photos/signatures):** Dipl.-Ing. Hans-Georg Ohlmeier (Partner) und Philipp Ohlmeier, M.Sc. (Partner)
- **Preferred contact method for form submissions:** ❓ mit Kunde klären (vermutlich office@ohlmeier-architekten.de)
- **Response time promise:** ❓ mit Kunde klären — nicht ungeprüft "24h" versprechen

## 12. Address

- **Street & number:** Rolandstraße 4
- **ZIP & city:** 34131 Kassel (Bad Wilhelmshöhe)
- **Country:** Deutschland
- **Show address publicly?** ☑ yes
- **Google Maps embed on contact page?** ❓ mit Kunde klären
- **Directions / parking notes:** ❓ mit Kunde klären

## 13. Opening Hours

> Used in the footer, contact page, and `LocalBusiness` structured data.

| Day       | Hours |
| --------- | ----- |
| Monday    | ❓    |
| Tuesday   | ❓    |
| Wednesday | ❓    |
| Thursday  | ❓    |
| Friday    | ❓    |
| Saturday  | ❓    |
| Sunday    | ❓    |

- **Deviations / notes:** ❓ mit Kunde klären — nicht recherchierbar

## 14. Service Area

- **Geographic area served:** Kassel und Nordhessen als Schwerpunkt; Referenzprojekte auch überregional (u. a. Bad Wildungen, Borken)
- **Cities/regions to mention explicitly (local SEO):** Kassel, Bad Wilhelmshöhe, Nordhessen — weitere Orte ❓ mit Kunde klären
- **On-site service or customers come to us?** Beides üblich in der Architekturbranche — ❓ mit Kunde klären

## 15. Brand Colors

> Becomes the design tokens in `globals.css`. If no brand colors exist, note preferences and the agency proposes a palette (per `DESIGN.md` §5: neutral ramp + one accent).

- **Existing brand colors (exact values):**
  - Primary: ❓ mit Kunde klären (Logo/Style Guide anfordern)
  - Secondary: ❓ mit Kunde klären
  - Source of truth: ❓ mit Kunde klären
- **Color preferences / direction (if no fixed brand):** ❓ mit Kunde klären — Vorschlag: zurückhaltende, hochwertige Palette (Architektur-Branchenstandard), agency decides bis Kundenrückmeldung
- **Colors to avoid:** ❓ mit Kunde klären
- **Dark mode desired?** ☐ yes ☐ no ☑ agency decides (bis Kundenrückmeldung)
- ⚠️ Note: final shades may be adjusted to meet WCAG AA contrast (per `DESIGN.md` §17). Brand color ≠ text color.

## 16. Typography Preferences

- **Existing brand font(s):** ❓ mit Kunde klären
- **Direction if none exists:** Vorschlag: klare, moderne Grotesk für Architektur-Anspruch — agency decides bis Kundenrückmeldung
- **Must-avoid:** ❓ mit Kunde klären
- ⚠️ Fonts must be self-hostable via `next/font` (license permitting). Google Fonts CDN is not used (GDPR).

## 17. Existing Logo

- **Logo exists?** ☑ yes (auf aktueller Website im Einsatz) ☐ no ☐ needs rework
- **Files provided:** ❓ noch nicht angefordert — Vektor-/Quelldatei beim Kunden anfragen
- **Variants available:** ❓ mit Kunde klären
- **Protection rules:** ❓ mit Kunde klären

## 18. Existing Images

- **What exists?** Referenzprojekt-Fotos auf der bestehenden Website (/projekte) — Wohn-, Büro- und Sonderbauten
- **Location & rights:** ❓ mit Kunde klären — Nutzungsrechte/Fotografennennung vor Übernahme klären
- **Quality assessment (by agency):** noch nicht geprüft (Direktzugriff auf die alte Website derzeit blockiert)
- **Photo shoot planned?** ❓ mit Kunde klären
- **If imagery is missing:** Fallback per `DESIGN.md` §12 — typografische/abstrakte Gestaltung; kein generisches Stock-/KI-Material

## 19. Social Media

> Linked in footer and `sameAs` structured data. Only list profiles that are actively maintained — dead profiles hurt trust.

| Platform           | URL                                             | Active? | Show on site? |
| ------------------ | ----------------------------------------------- | ------- | ------------- |
| Instagram          | https://www.instagram.com/ohlmeier_architekten/ | ❓      | ❓            |
| Facebook           | ❓ mit Kunde klären                             | ❓      | ❓            |
| LinkedIn           | ❓ mit Kunde klären                             | ❓      | ❓            |
| YouTube            | —                                               | no      | no            |
| TikTok / X / other | —                                               | no      | no            |

## 20. Google Reviews

- **Google Business Profile URL:** ❓ mit Kunde klären
- **Current rating & count:** ❓ mit Kunde klären — nicht ungeprüft veröffentlichen
- **Show rating on the website?** ❓ mit Kunde klären
- **Best reviews to feature as testimonials** (with reviewer name — permission confirmed?):
  1. ❓ mit Kunde klären — keine echten Zitate erfinden
  2. ❓
  3. ❓
- **Additional testimonials outside Google:** ❓ mit Kunde klären

## 21. Competitors

> Used for positioning and SEO — never for copying.

| Competitor          | Website | What they do well | How we differentiate |
| ------------------- | ------- | ----------------- | -------------------- |
| ❓ mit Kunde klären | ❓      | ❓                | ❓                   |

- **Websites the client likes (any industry) & why:** ❓ mit Kunde klären
- **Websites the client dislikes & why:** ❓ mit Kunde klären

## 22. SEO Keywords

- **Primary keyword (homepage):** ❓ mit Kunde klären — Kandidat: "Architekturbüro Kassel"
- **Keyword per service page:**

| Page               | Target keyword                    | Search intent |
| ------------------ | --------------------------------- | ------------- |
| Home               | Architekturbüro Kassel (Kandidat) | transactional |
| Entwurfsplanung    | ❓                                | ❓            |
| Ausführungsplanung | ❓                                | ❓            |

- **Local modifiers:** Kassel, Nordhessen (siehe §14) — vollständige Liste ❓ mit Kunde klären
- **Terms customers actually use** (client's words, from real inquiries): ❓ mit Kunde klären
- **Existing rankings to preserve** (if relaunch): Bestehende Seiten `/`, `/oa`, `/projekte`, `/kontakt`, `/impressum` sind indexiert — Redirects für gleichwertige neue URLs einplanen

## 23. Frequently Asked Questions

> Minimum 5 real questions customers actually ask (phone/email). Feeds the FAQ section + FAQ structured data. Include the uncomfortable ones (price, duration) — they convert best.

❓ mit Kunde klären — keine echten Kundenfragen recherchierbar, nicht erfinden. Die Platzhalter in `src/content/home.ts` und `src/content/services.ts` bleiben bis zur Kundenrückmeldung als Platzhalter markiert.

## 24. Legal Pages

> GDPR-critical — must be complete before launch. The agency provides page templates; legal content responsibility stays with the client.

- **Impressum data complete?** ☑ teilweise — recherchiert: Ohlmeier Architekten PartmbB, Rolandstraße 4, 34131 Kassel; vertretungsberechtigte Partner Dipl.-Ing. Hans-Georg Ohlmeier und Philipp Ohlmeier, M.Sc.; Partnerschaftsregister Amtsgericht Frankfurt am Main, PR 2887; Tel. 0561 3085570, office@ohlmeier-architekten.de. Fehlend: USt-IdNr., zuständige Kammer (Architektenkammer Hessen, Annahme), Berufshaftpflichtversicherung-Angaben (bei PartmbB Pflichtangabe nach § 5 DDG) — ❓ vor Launch mit Kunde verifizieren, alle recherchierten Angaben stammen aus Suchmaschinen-Snippets, nicht aus der Originalquelle.
- **Privacy policy:** ❓ mit Kunde klären — Template-Platzhalter, muss von Rechtsberatung final geprüft werden
- **Analytics/tracking planned:** Vercel Analytics (aus `PLAN.md` §2) — Consent-Banner vorhanden
- **Terms & conditions (AGB) page needed?** ❓ mit Kunde klären — bei Planungsleistungen unüblich, vermutlich no
- **Cancellation policy / other industry-specific legal pages:** ❓ mit Kunde klären
- **Professional regulations** (regulated professions: lawyers, doctors, …): Architekt — Berufsordnung der Architektenkammer Hessen (Annahme) gilt; ❓ mit Kunde/Kammer verifizieren

## 25. Required Sections

> Check every section this website needs. Default template sections per `PLAN.md` §4.

**Pages:**
☑ Home ☑ About us ☑ Services overview ☑ Service detail pages ☑ Contact ☑ Other: **Projekte/Referenzen** — auf der bestehenden Website ein eigener Bereich (`/projekte` + Detailseiten), im aktuellen Template-Grundgerüst noch nicht vorgesehen (siehe §27)

**Homepage sections:**
☑ Hero ☐ Logo cloud / "known from" ☑ Services grid ☑ Process steps ("how we work") ☐ Stats (nur mit echten Zahlen, aktuell keine verifizierbar) ☐ Testimonials (nur mit echten, freigegebenen Zitaten) ☐ Team ☑ FAQ (Platzhalter bis echte Fragen vorliegen) ☐ Pricing ☑ Final CTA ☑ Other: Projekt-/Referenz-Highlights

- **Special requirements beyond the template:** Referenzprojekte-/Portfolio-Bereich (Galerie mit Projektdetails) ist bei einem Architekturbüro zentral und fehlt im Grundgerüst — Scope-Erweiterung mit Kunde/Team abstimmen.

## 26. Sections to Avoid

- **Explicitly unwanted sections/elements:** ❓ mit Kunde klären
- **Topics not to mention:** ❓ mit Kunde klären
- **Reason (if relevant for future decisions):** ❓ mit Kunde klären
- ℹ️ Independent of client wishes, everything in `DESIGN.md` §18 (banned patterns) never ships.

## 27. Notes

- **Deadline / desired launch date:** ❓ mit Kunde klären
- **Budget notes / agreed scope:** ❓ mit Kunde klären
- **Decision maker & approval process:** vermutlich Hans-Georg Ohlmeier und/oder Philipp Ohlmeier (Partner) — ❓ bestätigen
- **Content delivery:** ❓ mit Kunde klären
- **Domain & hosting access:** ❓ mit Kunde klären — Domain ohlmeier-architekten.de existiert bereits, Registrar/DNS-Zugang für Vercel-Umzug anfragen
- **Existing site migration notes:** Bestehende URLs `/`, `/oa`, `/projekte`(+Detailseiten), `/kontakt`, `/impressum` sollten auf gleichwertige neue URLs weitergeleitet werden; E-Mail-Adresse office@ohlmeier-architekten.de muss erhalten bleiben.
- **Anything else the team must know:** Direktzugriff auf ohlmeier-architekten.de war beim Erstellen dieser Briefing-Version netzwerkseitig blockiert (Egress-Proxy). Alle Angaben stammen aus Google-Suchindex-Snippets, Branchenverzeichnissen (11880, Das Örtliche, Gelbe Seiten, heinze.de) und Kompass — **nicht von der Originalseite selbst**. Vor Launch zwingend gegen die echte Website und mit dem Kunden direkt verifizieren, insbesondere Impressum-Pflichtangaben (USt-IdNr., Kammer, Berufshaftpflicht).

- **Remaining open items:** Alle mit ❓ markierten Felder oben — Tagline, USP-Formulierung, Tonalität, genaue Öffnungszeiten, Markenfarben/Logo-Dateien, echte Testimonials, FAQ-Inhalte, Budget/Deadline.
