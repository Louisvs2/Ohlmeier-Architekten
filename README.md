# website-vorlage-2026

Wiederverwendbares Website-Template für Agentur-/Kundenprojekte. Next.js 15
(App Router, React 19, TypeScript strict, Tailwind CSS 4), mit einem
Look-Preset-System (glass / editorial / minimal / bold) unter `/looks`, das
als Ausgangspunkt für jedes neue Kundenprojekt dient.

## Nutzung für ein neues Kundenprojekt

1. Dieses Repository klonen bzw. als Vorlage für ein neues Repo verwenden.
2. `CLIENT.md` kopieren und mit den Kundendaten ausfüllen — feeds
   `src/config/site.ts`, `src/content/`, Design-Tokens und Copywriting.
3. `PLAN.md` lesen für Tech-Stack, Ordnerstruktur und Komponentenbibliothek.
4. `CLAUDE.md` beschreibt die Arbeitsweise (Code-Qualität, Performance,
   Design-Ansprüche) für dieses und alle daraus abgeleiteten Projekte.

## Entwicklung

```bash
npm install
npm run dev          # Entwicklungsserver
npm run typecheck    # TypeScript strict
npm run lint          # ESLint
npm run build          # Produktions-Build
```

## Struktur

Details in `PLAN.md`. Kurzfassung:

- `src/app/` — Next.js App Router Seiten
- `src/components/` — wiederverwendbare Sections und UI-Bausteine
- `src/content/` — seiten-/kundenspezifische Inhalte (props-driven Sections)
- `src/config/` — Site-Konfiguration (Name, Kontakt, Social-Profile)
