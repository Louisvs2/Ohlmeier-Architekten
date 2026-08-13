# PLAN.md — Agentur-Website-Template

Architekturplan für das Starter-Template der Webagentur. Dieses Dokument ist die verbindliche Grundlage für die Implementierung und wird bei Architekturentscheidungen fortgeschrieben.

---

## 1. Projektziel

Ein wiederverwendbares, produktionsreifes Starter-Template für hochwertige Marketing-Websites, das als Grundlage für jedes neue Kundenprojekt dient.

**Kernanforderungen:**

- **Wiederverwendbarkeit:** Ein neues Kundenprojekt ist ein Konfigurations-Job, kein Umbau. Kundenspezifisches (Branding, Inhalte, Navigation) lebt an drei klar definierten Stellen: `src/config/`, `src/content/` und den Design-Tokens in `src/styles/globals.css`.
- **Qualität als Verkaufsargument:** Hervorragende Core Web Vitals, saubere SEO-Grundlagen und Accessibility unterscheiden das Template messbar von Baukasten-Seiten.
- **Rechtssicherheit:** DSGVO-konforme Grundausstattung (Impressum, Datenschutz, Cookie-Consent) ist von Anfang an eingebaut.
- **Wartbarkeit:** Strikte Konventionen, TypeScript strict mode und automatisierte Formatierung/Linting halten das Template über viele Kundenprojekte hinweg konsistent.

**Nicht-Ziele (bewusst ausgelassen):**

- Kein CMS, keine i18n, kein Blog/MDX im Grundgerüst. Diese werden als dokumentierte Erweiterungsrezepte in der README geführt und nur bei Bedarf pro Kunde ergänzt.

---

## 2. Technologie-Stack

| Bereich        | Technologie                                | Anmerkung                                                |
| -------------- | ------------------------------------------ | -------------------------------------------------------- |
| Framework      | Next.js 15 (App Router)                    | React 19, Server Components als Default                  |
| Sprache        | TypeScript                                 | `strict: true`                                           |
| Styling        | Tailwind CSS v4                            | CSS-first-Konfiguration, Design-Tokens als CSS-Variablen |
| UI-Komponenten | shadcn/ui                                  | Generierte Komponenten in `src/components/ui/`           |
| Animationen    | Framer Motion (`motion`)                   | Nur in dünnen Client-Wrappern                            |
| Hosting        | Vercel                                     | Preview-Deployments pro Branch als Review-Workflow       |
| Formulare      | react-hook-form + zod                      | Validierung client- und serverseitig                     |
| E-Mail         | Resend + react-email                       | Kontaktformular-Versand                                  |
| Analytics      | @vercel/analytics + @vercel/speed-insights | Laden erst nach Cookie-Consent                           |
| Icons          | lucide-react                               | shadcn-Standard                                          |

**Tooling (devDependencies):**

- ESLint (`eslint-config-next`)
- Prettier + `prettier-plugin-tailwindcss` (automatische Klassensortierung)
- Husky + lint-staged (Lint/Format vor jedem Commit)

---

## 3. Ordnerstruktur

```
website-template/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (marketing)/            # Route Group für alle Marketing-Seiten
│   │   │   ├── page.tsx            # Startseite
│   │   │   ├── ueber-uns/page.tsx
│   │   │   ├── leistungen/
│   │   │   │   ├── page.tsx        # Übersicht
│   │   │   │   └── [slug]/page.tsx # Detailseite pro Leistung
│   │   │   ├── kontakt/page.tsx
│   │   │   └── layout.tsx          # Header + Footer für Marketing-Seiten
│   │   ├── (legal)/                # Route Group für Rechtstexte
│   │   │   ├── impressum/page.tsx
│   │   │   └── datenschutz/page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts    # Kontaktformular-Endpoint
│   │   ├── layout.tsx              # Root-Layout (Fonts, Metadata, Analytics)
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── sitemap.ts              # Dynamische Sitemap
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   └── opengraph-image.tsx     # Generiertes OG-Image
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui (generiert — nicht manuell ändern)
│   │   ├── layout/                 # Header, Footer, MobileNav, Container, Section
│   │   ├── sections/               # Seiten-Sektionen (Hero, Features, CTA, …)
│   │   ├── shared/                 # Logo, SectionHeading, CookieConsent, SkipLink
│   │   └── motion/                 # Wiederverwendbare Framer-Motion-Wrapper
│   │
│   ├── config/
│   │   ├── site.ts                 # ⭐ Zentrale Kundenkonfiguration
│   │   └── navigation.ts           # Menüstruktur an einer Stelle
│   │
│   ├── content/                    # Statischer Content pro Kunde (typisiert)
│   ├── lib/
│   │   ├── utils.ts                # cn()-Helper (shadcn)
│   │   ├── metadata.ts             # Metadata-Factory für konsistentes SEO
│   │   └── schema.ts               # JSON-LD-Generatoren (LocalBusiness, FAQ, …)
│   ├── hooks/                      # useScrollPosition, useMediaQuery, …
│   ├── styles/
│   │   └── globals.css             # Tailwind + Design-Tokens als CSS-Variablen
│   └── types/                      # Gemeinsame TypeScript-Typen
│
├── public/
│   └── images/
│
├── .env.example
├── components.json                 # shadcn/ui-Konfiguration
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── .prettierrc
├── PLAN.md
└── README.md                       # inkl. Checkliste „Neuen Kunden aufsetzen"
```

**Kernprinzip:** `config/`, `content/` und die Design-Tokens sind die Kunden-Schnittstelle. Alles andere bleibt zwischen Projekten stabil.

---

## 4. Komponentenbibliothek

### Layout

| Komponente  | Beschreibung                                   |
| ----------- | ---------------------------------------------- |
| `Header`    | Sticky, mit Scroll-Verhalten (Blur/Schrumpfen) |
| `MobileNav` | Sheet/Drawer-basiert (shadcn `Sheet`)          |
| `Footer`    | Spalten generiert aus `config/navigation.ts`   |
| `Container` | Einheitliche max-width/padding-Logik           |
| `Section`   | Vertikaler Rhythmus + Hintergrundvarianten     |

### Marketing-Sektionen

Decken ~90 % jeder Kundenseite ab. Jede Sektion erhält ihren Content als typisierte Props aus `content/`:

- `Hero` — 2–3 Varianten: zentriert, split mit Bild, mit Animation
- `LogoCloud` — Kundenlogos / „Bekannt aus"
- `Features` / `ServicesGrid`
- `Testimonials` — Grid- und Carousel-Variante
- `Stats` — animierte Zahlen (Count-up)
- `PricingTable`
- `FAQ` — shadcn `Accordion` + FAQ-JSON-LD
- `CTA` — Abschluss-Sektion
- `TeamGrid`
- `ProcessSteps` — „So arbeiten wir"
- `ContactSection` mit `ContactForm`

### Motion-Wrapper (`components/motion/`)

- `FadeIn` / `FadeInStagger` — Scroll-getriggerte Eingangsanimationen
- `AnimatedNumber` — für Stats
- Alle respektieren `prefers-reduced-motion`

### Shared

`Logo`, `SectionHeading` (Eyebrow + Titel + Subtitle), `CookieConsent` (DSGVO), `SkipLink` (a11y), optional `ThemeToggle`

### shadcn/ui-Basisset

`button`, `sheet`, `accordion`, `card`, `input`, `textarea`, `label`, `form`, `sonner`, `dialog`, `navigation-menu`, `separator`, `badge`, `skeleton`

---

## 5. Designsystem

**Token-basiert nach shadcn-Konvention.** Alle Design-Entscheidungen leben als CSS-Variablen in `globals.css` — Rebranding pro Kunde = eine Datei ändern.

### Token-Kategorien

- **Farben:** Semantische Tokens (`--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--ring`) statt roher Farbwerte. Optional Light/Dark über `.dark`-Klasse.
- **Typografie:** Fonts über `next/font` (kein Layout Shift, kein externer Request). Eine Display- und eine Body-Schrift als Variablen (`--font-display`, `--font-sans`). Typografische Skala über Tailwind-Utilities, Überschriften-Stile in `SectionHeading` zentralisiert.
- **Radius & Schatten:** `--radius` als Basis, shadcn leitet Varianten ab.
- **Spacing-Rhythmus:** Vertikale Abstände zwischen Sektionen ausschließlich über die `Section`-Komponente — nie ad hoc pro Seite.

### Regeln

1. Keine rohen Hex-Werte in Komponenten — nur semantische Tokens.
2. Komponentenvarianten über `class-variance-authority` (cva), nicht über Prop-Weichen mit String-Konkatenation.
3. Klassen-Merging ausschließlich über `cn()` (`clsx` + `tailwind-merge`).
4. Neue UI-Grundbausteine zuerst als shadcn-Komponente prüfen, bevor etwas Eigenes gebaut wird.

---

## 6. SEO-Strategie

1. **Metadata-Factory** (`lib/metadata.ts`): Jede Seite ruft sie mit Titel/Beschreibung auf; Canonical-URL, Open-Graph- und Twitter-Tags entstehen konsistent und automatisch aus `config/site.ts`.
2. **Strukturierte Daten** (`lib/schema.ts`): JSON-LD-Generatoren für `Organization`/`LocalBusiness`, `FAQPage`, `BreadcrumbList` und `WebSite` — ohne Zusatzpaket, selbst generiert.
3. **Technische Basis:** `sitemap.ts`, `robots.ts`, `manifest.ts` als App-Router-Konventionen; generiertes `opengraph-image.tsx`.
4. **Semantik:** Eine `<h1>` pro Seite, logische Überschriften-Hierarchie über `SectionHeading` erzwungen, sprechende URLs (deutsche Slugs: `/ueber-uns`, `/leistungen`).
5. **Rendering:** Statisches Rendering (SSG) als Default — Marketing-Seiten haben keinen Grund, dynamisch zu sein. Volle Indexierbarkeit ohne Client-seitiges Nachladen von Inhalten.
6. **Performance ist SEO:** Die Performance-Ziele (Abschnitt 7) zahlen direkt auf das Ranking ein.

---

## 7. Performance-Ziele

**Messbare Ziele (Lighthouse, Mobile, Produktions-Build auf Vercel):**

| Metrik                          | Ziel     |
| ------------------------------- | -------- |
| Lighthouse Performance          | ≥ 95     |
| LCP (Largest Contentful Paint)  | < 2,0 s  |
| CLS (Cumulative Layout Shift)   | < 0,05   |
| INP (Interaction to Next Paint) | < 200 ms |
| First-Load JS (Startseite)      | < 150 kB |

**Maßnahmen:**

- Statisches Rendering als Default; keine unnötigen dynamischen Routen.
- `next/image` überall mit korrekten `sizes`; Hero-Bilder mit `priority`.
- `next/font` mit Subsetting statt Font-CDNs.
- Animationen ausschließlich auf `transform`/`opacity`; `whileInView` mit `viewport={{ once: true }}` als Standard.
- `"use client"` nur an den Blättern des Komponentenbaums — Framer Motion und Formulare in dünnen Client-Wrappern, Sektionen bleiben Server Components.
- Third-Party-Skripte (Analytics) erst nach Consent und nach Interaktion/Idle laden.
- Speed Insights auf Vercel als kontinuierliches Monitoring in Produktion.

---

## 8. Accessibility-Ziele

**Ziel: WCAG 2.1 AA** für alle Template-Bestandteile.

- **Semantik:** Landmark-Struktur (`header`, `nav`, `main`, `footer`), eine `<h1>` pro Seite, Listen als Listen.
- **Tastatur:** Alles per Tastatur bedienbar; `SkipLink` zum Hauptinhalt; sichtbare, kontraststarke Fokus-Styles (`focus-visible`); Fokus-Management in `MobileNav` und Dialogen (übernimmt shadcn/Radix).
- **Kontrast:** Design-Tokens werden bei jedem Kunden-Rebranding auf mindestens 4,5:1 (Text) bzw. 3:1 (große Texte, UI-Komponenten) geprüft — als Punkt in der Kunden-Checkliste der README.
- **Motion:** Alle Motion-Wrapper respektieren `prefers-reduced-motion` und degradieren zu einfachem Einblenden oder statischer Darstellung.
- **Formulare:** Sichtbare Labels (kein Placeholder-only), Fehlermeldungen programmatisch verknüpft (`aria-describedby`), Statusmeldungen als Live-Region.
- **Bilder:** `alt`-Texte verpflichtend über typisierte Content-Strukturen (Feld ist nicht optional).
- **Prüfung:** Lighthouse-Accessibility-Score ≥ 95 als Gate; manuelle Tastatur-Prüfung der Kernflüsse vor jedem Kunden-Launch.

---

## 9. Entwicklungsregeln

1. **Server Components als Default.** `"use client"` nur an den Blättern (Motion-Wrapper, Formulare, interaktive Navigation).
2. **Konfiguration statt Hardcoding.** Kein Kundenname, keine Telefonnummer, kein Menüpunkt außerhalb von `config/` und `content/`. Wichtigste Regel des Templates.
3. **Typisierter Content.** Strukturen in `content/` sind über `types/` typisiert — fehlender oder fehlerhafter Content fällt beim Build auf, nicht in Produktion.
4. **TypeScript strict, keine `any`.** Build muss ohne Type-Errors und ESLint-Warnings durchlaufen.
5. **shadcn/ui-Komponenten in `components/ui/` nicht manuell editieren.** Anpassungen über Wrapper oder Tokens; Ausnahmen werden im Code dokumentiert.
6. **Styling nur über Tailwind + Tokens.** Keine Inline-Styles, keine rohen Hex-Werte, Klassen-Merging über `cn()`.
7. **Formatierung ist automatisiert.** Prettier + Tailwind-Plugin via Husky/lint-staged — keine Formatierungsdiskussionen im Review.
8. **Jede Section ist props-getrieben** und ohne Seitenkontext wiederverwendbar; keine Inline-Texte in Sektionen.
9. **Serverseitige Validierung ist Pflicht.** Zod-Schemas werden zwischen Client (react-hook-form) und API-Route geteilt.
10. **Conventional Commits** (`feat:`, `fix:`, `chore:`, …) für nachvollziehbare Historie.
11. **Review über Vercel-Preview-Deployments** — jeder Branch erzeugt eine Preview-URL, die auch mit Kunden geteilt werden kann.
12. **Erweiterungen (CMS, i18n, Blog) kommen nicht ins Grundgerüst**, sondern als dokumentierte Rezepte in die README.

---

## 10. Roadmap für die Implementierung

### Phase 1 — Fundament

- Next.js 15 + TypeScript (strict) aufsetzen
- Tailwind CSS v4 + shadcn/ui initialisieren (`components.json`)
- Tooling: ESLint, Prettier + Tailwind-Plugin, Husky + lint-staged
- Basisdateien: `.env.example`, `tsconfig.json`, `next.config.ts`, `.prettierrc`

### Phase 2 — Designsystem & Layout-Primitives

- Design-Tokens in `globals.css` (Farben, Typografie, Radius)
- Fonts über `next/font`
- `Container`, `Section`, `SectionHeading`
- `Header` (sticky), `MobileNav`, `Footer`
- `config/site.ts` und `config/navigation.ts` mit typisierten Schemas

### Phase 3 — Motion & Sektionen

- Motion-Wrapper (`FadeIn`, `FadeInStagger`, `AnimatedNumber`) inkl. `prefers-reduced-motion`
- Alle Marketing-Sektionen aus Abschnitt 4, props-getrieben mit typisiertem Content
- Beispiel-Content in `content/` als Platzhalter-Kundenprojekt

### Phase 4 — Seiten, Formular & Recht

- Seitengerüst: Start, Über uns, Leistungen (+ Detail), Kontakt
- Kontaktformular: react-hook-form + zod + API-Route + Resend
- `(legal)`-Seiten (Impressum, Datenschutz) als strukturierte Platzhalter
- `CookieConsent` mit Consent-abhängigem Analytics-Loading

### Phase 5 — SEO, Performance & A11y-Härtung

- `lib/metadata.ts`, `lib/schema.ts` (JSON-LD)
- `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `not-found.tsx`, `error.tsx`
- Lighthouse-Audit gegen die Ziele aus Abschnitt 7 und 8; Nachbesserung

### Phase 6 — Dokumentation & Abnahme

- README mit Checkliste „Neuen Kunden aufsetzen" (Reihenfolge: Tokens → `site.ts` → `navigation.ts` → `content/` → Assets → Legal)
- Erweiterungsrezepte dokumentieren (CMS, i18n, Blog)
- Vercel-Deployment des Templates als Referenz/Demo

**Definition of Done pro Phase:** Build läuft fehlerfrei (`next build`), Lint/Format sauber, keine Type-Errors; ab Phase 5 zusätzlich die messbaren Ziele aus Abschnitt 7 und 8.
