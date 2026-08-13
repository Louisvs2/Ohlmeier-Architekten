# CLAUDE.md

Permanent working rules for Claude Code in this repository.

This file defines **how** we work. It does not describe the project's architecture — see `PLAN.md` for the tech stack, folder structure, component library, and roadmap. When in doubt about _what_ to build, consult `PLAN.md`; when in doubt about _how_ to build it, this file wins.

## 1. Way of Working

- **Analyze first.** Read the relevant code, config, and `PLAN.md` before touching anything. Never change code you haven't read.
- **Plan before large changes.** Before any change that spans multiple files or introduces a new pattern, write a short plan (goal, affected files, approach) and follow it.
- **Prefer existing components.** Reuse or extend what exists before building something new.
- **Never create unnecessary files.** Every new file must have a clear reason to exist. No speculative helpers, no placeholder files, no "might need this later".
- **Never write unnecessary code.** No dead code, no commented-out code, no unused exports, no premature abstractions.
- **Keep changes small.** Solve the task at hand — nothing more. Do not refactor, rename, or "improve" unrelated code in the same change.

## 2. Code Quality

- **Production ready.** Every change must build cleanly (`next build`), pass lint and type checks, and be safe to deploy as-is.
- **TypeScript strict.** The project runs with `strict: true`; code must compile without errors or suppressions (`@ts-ignore`, `@ts-expect-error` only with a documented reason).
- **No `any` types.** Use precise types, generics, or `unknown` with narrowing instead.
- **Clean code.** Clear naming, small functions, single responsibility, no clever tricks that need a comment to explain.
- **Readable components.** A component should be understandable top-to-bottom in one pass. Extract sub-components when JSX becomes hard to scan.
- **Reusable components.** Sections and UI building blocks are props-driven and free of page-specific or client-specific content (that lives in `src/content/` and `src/config/`).
- **No duplicates.** Shared logic goes into `src/lib/` or `src/hooks/`; shared UI goes into components. If you copy-paste, you're doing it wrong.

## 3. Performance

- **Prefer Server Components.** They are the default; rendering on the server is always the first choice.
- **`"use client"` only when necessary.** Only at the leaves of the tree (motion wrappers, forms, interactive navigation). Never mark a whole section or page as client just for one interactive detail.
- **Lighthouse > 95.** Mobile, production build. Changes that regress this score are not done.
- **Keep the bundle small.** Check the impact before adding any dependency; prefer platform features and existing dependencies. No heavyweight libraries for trivial tasks.
- **Lazy load where it makes sense.** Below-the-fold heavy components via `next/dynamic`, images via `next/image` (with `priority` only for the LCP element), third-party scripts deferred and consent-gated.

## 4. Design

- **Premium design.** Every screen must look intentional and polished — the quality bar is Apple, Linear, Stripe, and Vercel.
- **Generous whitespace.** Space is a design feature. Use the `Section`/`Container` rhythm; never cram elements together to fit more in.
- **Perfect typography.** Consistent scale, correct hierarchy, tight headline tracking, comfortable line lengths and line heights. Typography carries the design.
- **Subtle animations.** Motion supports the content, never competes with it: short durations, small distances, `transform`/`opacity` only, always respecting `prefers-reduced-motion`.
- **No overloaded layouts.** Few elements, clear focal point per section, restrained color use. When a layout feels busy, remove — don't rearrange.

## 5. Components

- **Check before creating.** Before building any new component, search `src/components/` (including `ui/`) for an existing one that fits.
- **Extend instead of duplicating.** Add a variant (via `cva`) or a prop to an existing component rather than creating a near-copy.
- **Sections stay reusable.** Every section in `src/components/sections/` must work on any page and for any client: content comes in via typed props, never hardcoded inside the component.

## 6. Git

- **Small commits.** One logical change per commit. Setup, feature, and fix commits stay separate.
- **Meaningful commit messages.** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`), imperative mood, message describes the _why_ when it isn't obvious.
- **Never commit half-finished code.** Every commit builds, lints, and type-checks. No `WIP` commits, no broken intermediate states on the branch.

## 7. General Rules

- **Always mobile first.** Style for the smallest viewport first, enhance with responsive variants (`sm:`, `md:`, …). Every feature is verified on mobile before it counts as done.
- **Consider accessibility.** WCAG 2.1 AA is the baseline: semantic HTML, keyboard operability, visible focus states, sufficient contrast, labeled form fields, meaningful `alt` texts.
- **Consider SEO.** Every page gets metadata via the metadata factory, one `<h1>`, a logical heading hierarchy, and structured data where applicable. No content hidden behind client-side loading.
- **Clean file structure.** Files go where `PLAN.md` says they go. No parallel structures, no dumping grounds, no `utils2.ts`.
- **Think first, then code.** Understand the problem, pick the simplest solution that meets the quality bar, and only then start writing code.
