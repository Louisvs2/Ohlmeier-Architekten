# DESIGN.md — The Design Bible

The permanent design philosophy of this agency.

This is **not** a branding guide for any single customer. Client brands change per project (colors, fonts, logos live in the design tokens and `src/config/`). This document defines the visual quality standards that **every** website we ship must meet, regardless of brand.

The goal: every site we build should feel like it was designed by one of the world's best digital product studios. We use Apple, Stripe, Linear, Vercel, Raycast, Arc Browser, and Notion as **quality references** — a bar for craft, restraint, and polish. We never copy them. A client's site must feel like the best version of _that client_, executed at that level of quality.

How the documents relate: `PLAN.md` defines what we build, `CLAUDE.md` defines how we work, `DESIGN.md` defines what quality looks like. When a design decision conflicts with convenience, this document wins.

---

## 1. Overall Design Philosophy

**Clarity over decoration.** Every element on the page must earn its place by helping the visitor understand, trust, or act. Decoration that doesn't serve one of these three jobs is removed.

**Restraint is the skill.** Anyone can add. The studios we measure against are defined by what they leave out. Our default answer to "should we add this?" is no; the element has to argue its way in.

**Quality lives in details.** The difference between good and world-class is rarely the big idea — it's optical alignment, consistent radii, tight letter-spacing on headlines, easing curves, and the absence of any element that looks accidental. We sweat these details on every project.

**Calm confidence.** Great products don't shout. Our sites feel composed and assured: generous space, few colors, deliberate motion. Urgency, noise, and visual tricks read as insecurity — and visitors sense it.

**One idea per view.** At any scroll position, the visitor should know exactly what they're looking at and why. If a viewport-full of content tries to say two things, split it or cut one.

**Designed, not assembled.** A page must never look like stacked third-party blocks. Sections share one rhythm, one type scale, one radius system, one motion language — the site reads as a single, intentional composition.

---

## 2. Visual Hierarchy

Hierarchy is the reader's navigation system. If a visitor squints at the page, the order in which elements pop must match their order of importance.

- **One dominant element per section.** Usually the heading. Everything else is visibly subordinate — through size, weight, or color, never through decoration.
- **Three levels are enough.** Primary (headline), secondary (supporting copy / subheads), tertiary (captions, labels, meta). If a section needs a fourth level, the section is too complex.
- **Hierarchy through scale and space first**, weight second, color last. Reaching for a new color to create emphasis is a sign the type scale isn't doing its job.
- **Muted is the default for body text.** Full-contrast foreground is reserved for headlines and key statements; body copy sits at a slightly muted tone so the important lines register instantly.
- **De-emphasize deliberately.** Secondary actions, legal text, and metadata are made quiet on purpose. If everything is emphasized, nothing is.
- **The eye path is designed.** Each section has an intended reading order — eyebrow → headline → subline → proof → action — and the layout enforces it. Never let the CTA compete with the headline for first attention.

## 3. Typography

Typography carries the design. On most of the best sites in the world, type does 80% of the visual work — ours too.

- **Maximum two typefaces** per site: one display, one body. Often one family in different weights is enough. Fonts load via `next/font` — self-hosted, subset, zero layout shift.
- **A fixed modular scale.** All sizes come from a defined scale (e.g. 1.25 ratio) implemented as tokens. Never an arbitrary `text-[17px]` because it "looked right".
- **Headlines: tight and heavy.** Large headings get negative letter-spacing (`tracking-tight` or tighter) and reduced line-height (~1.05–1.15). Loose, floaty headlines are the most common tell of amateur sites.
- **Body: comfortable and readable.** 16–18px base, line-height ~1.6–1.7, line length 60–75 characters. Body text never spans a full wide container.
- **Weight contrast over size soup.** Prefer a strong jump (e.g. 400 body vs. 600–700 headings) to many in-between sizes and weights.
- **Hierarchy within text blocks:** eyebrow/kicker (small, uppercase or medium-weight, muted or accent), headline, supporting paragraph. This trio is our standard section header, centralized in `SectionHeading`.
- **Typographic hygiene is non-negotiable:** real quotation marks, proper dashes, no widows/orphans in headlines (use balanced text wrapping), tabular figures for stats and prices.
- **Never:** stretched or condensed type via CSS, faux bold/italic, justified text, more than one alignment strategy per section, letter-spaced lowercase body text.

## 4. White Space

White space is not empty — it is the most important design element we have. Generous space is what makes a site read as premium before a single word is read.

- **Space signals value.** Cramped layouts read as cheap; generous ones read as confident. When a layout feels weak, the first fix is more space, not more elements.
- **Sections breathe.** Vertical padding between sections is large and consistent (defined once in the `Section` component — roughly 6–10rem on desktop, scaled down on mobile). Never ad-hoc margins between sections.
- **Space is hierarchical.** The gap between two sections > gap between heading and content > gap between paragraphs > gap between lines. Related things sit closer than unrelated things — proximity is grouping.
- **Containers stay narrow-ish.** Content never touches the viewport edges; text content lives in narrower measures inside the container. Full-bleed is a deliberate exception (imagery, section backgrounds), not the default.
- **Whitespace comes from the spacing scale.** All gaps derive from the spacing tokens. Two sections with "almost the same" padding are a bug.
- **Resist the urge to fill.** Empty space next to a headline is a feature. We never add an illustration, blob, or icon just because a corner "looks empty".

## 5. Color Usage

Color is our scarcest resource. The less we use, the more powerful it becomes.

- **The formula: neutral canvas + one accent.** Roughly 90% of every page is neutrals (background, foreground, muted tones), one brand accent does the work (primary actions, key highlights, active states), plus functional colors (success/error) that appear only when needed.
- **Neutrals do the heavy lifting.** Backgrounds, text, borders, and surfaces are a disciplined neutral ramp — slightly warm or cool to match the brand, but always a single consistent temperature.
- **The accent color is earned.** It marks the most important action or statement in a view — if the accent appears more than a handful of times per viewport, it has stopped meaning anything.
- **Semantic tokens only.** Components use `--primary`, `--muted`, `--border` etc., never raw hex values. Rebranding a client site means changing tokens, and every component follows (see `PLAN.md` §5).
- **Backgrounds create rhythm, subtly.** Alternating section backgrounds (base ↔ slightly tinted surface) structure long pages. The step between them is barely perceptible — a whisper, not a stripe pattern.
- **Contrast is a hard constraint.** Text meets WCAG AA (4.5:1 body, 3:1 large text) on whatever background it sits on — checked at every client rebrand, no exceptions for "brand reasons".
- **Gradients, if ever, are whispers.** A subtle tonal shift within one hue on a hero background can work; multi-color rainbow gradients are banned (§18).

## 6. Buttons

Buttons are the highest-stakes components on a marketing site — they are where the visitor decides.

- **Exactly one primary button style** per site: solid accent background, high-contrast label. It marks the single most important action in any view.
- **One primary CTA per view.** Two solid accent buttons side by side means no decision has been made. The pattern is primary + quiet secondary ("Get started" / "Learn more").
- **Clear variant system** (via `cva`): `primary` (solid accent), `secondary` (subtle surface or outline), `ghost` (text-weight, for tertiary actions). Nothing else without a very good reason.
- **Labels are verbs.** "Start your project", "View our work", "Book a call" — never "Submit", "Click here", or "More".
- **Proportions matter:** comfortable horizontal padding (roughly 2.5× vertical), medium weight label, radius from the token system — consistent with cards and inputs. Generous hit area (≥44px) on touch.
- **States are designed, not defaulted:** hover (subtle darken/lift, ~150ms), active (slightly pressed), focus-visible (clear ring), disabled (muted, no pointer events), loading (spinner replaces label, width stays stable).
- **Restrained expression:** no gradient buttons, no glow effects, no bouncing arrows, no pulsing. A confident button sits still.

## 7. Cards

Cards group related content — they are containers, not decoration.

- **Defined by surface, not by shadow.** Our default card is a subtle background shift plus a 1px border. Shadows, when used, are soft, low, and barely visible — elevation is a whisper (see §18 for what oversized shadows say about a site).
- **One radius system.** Cards, buttons, inputs, and images share radii derived from the same `--radius` token. Mixed corner radii on one page is an instant quality tell.
- **Consistent internal anatomy.** Icon/image → title → description → optional link/action, with identical internal padding and gaps across all cards in a grid. If one card in a grid is taller by accident, fix the content or the layout.
- **Interactive cards behave like one link.** The whole card is clickable, with a subtle hover response (border emphasis or minimal lift) — never a "Read more" link floating inside an already-clickable card.
- **Cards need a reason.** If content doesn't need grouping or separation, it doesn't need a card. A page where everything is boxed reads as a dashboard, not a marketing site. Grids of 2–4 columns max, equalized heights, generous gaps.

## 8. Layout Rhythm

A great long-scrolling page feels like music: consistent measures, deliberate variation, no random breaks.

- **One grid, one container.** A single container width and grid system governs the whole site (via the `Container` component). Sections may vary their internal layout, but always on the same underlying grid.
- **Consistent vertical measures.** Section padding, heading-to-content gaps, and grid gaps repeat identically across the page. Rhythm comes from repetition; character comes from controlled variation within it.
- **Vary the composition, not the system.** Alternate centered sections, split (text + media) sections, and full-width statements to keep a long page alive — but background changes, alignment changes, and density changes are deliberate beats, not accidents.
- **Alignment is sacred.** Every element sits on the grid. Headlines align with the content below them, media edges align with text blocks, and optical alignment beats mathematical alignment where they conflict (e.g. icons next to text).
- **Sections start with orientation.** Almost every section opens with the eyebrow → headline → subline pattern so the visitor always knows where they are. Exceptions (full-bleed statements, logo clouds) are deliberate.
- **The page has dramaturgy.** Density and energy vary intentionally: a quiet, spacious hero → denser proof section → calm CTA. A page where every section has identical energy is monotonous; one where every section screams is exhausting.

## 9. Icons

Icons support text — they never replace it and never become decoration.

- **One icon set per site** (default: Lucide, per `PLAN.md`), one stroke width, one sizing scale. Mixing sets or weights is banned.
- **Icons are functional.** They mark features, aid scanning in lists, and label actions. If removing an icon loses no meaning, remove it.
- **Small and quiet:** typically 16–24px inline, aligned optically with their text, colored with the current text color or muted tone — icons don't get their own color party. Feature icons in cards may sit in a subtle tinted container, sized consistently.
- **Never:** oversized icons as section filler, clip-art style, colorful illustrated icon packs, emoji as UI icons, or icons that need a caption to be understood standing next to that caption.

## 10. Motion Design

Motion is our quality signature — visitors feel it more than they see it. It explains, orients, and adds polish. It never performs.

- **Purpose test:** every animation must orient (where did this come from?), provide feedback (did that work?), or add perceived quality (does this feel crafted?). Animation for its own sake is cut.
- **Fast and small.** UI transitions run 150–300ms; entrance animations up to ~500–700ms. Movement distances are small (8–24px). Anything slower or larger draws attention to itself instead of the content.
- **Standard easing everywhere.** Ease-out for entrances, ease-in-out for state changes — defined once in the motion wrappers and reused. Springy/bouncy easing only where playfulness is explicitly part of the brand, and even then subtly.
- **`transform` and `opacity` only.** No animating layout properties, no jank. This is both a performance rule (`CLAUDE.md` §3) and a quality rule.
- **Hover states are micro.** Slight color shifts, 1–2px lifts, gentle border emphasis. No growing cards, no spinning icons, no shine sweeps.
- **`prefers-reduced-motion` is honored everywhere.** Every motion wrapper degrades to simple fades or static rendering. Non-negotiable.
- **Motion is consistent.** The same element type animates the same way across the site. A site with five different entrance styles feels assembled, not designed (§1).

## 11. Scroll Animations

Scroll-triggered animation is where premium and cheap diverge fastest. Used with restraint, it adds life; overused, it makes a site feel like a template demo.

- **The default: subtle fade-up on entry.** Elements fade in and rise 12–24px as they enter the viewport. Once, and never again (`viewport={{ once: true }}`) — content must not re-animate on scroll-up.
- **Stagger sparingly.** Grids and lists may stagger children by 50–100ms for a sense of order. Staggering more than ~6 elements makes visitors wait — cap it or group it.
- **Content is never hostage to animation.** Trigger early (before the element is fully in view), keep durations short, and ensure content is readable immediately if JS fails or motion is reduced. A visitor scrolling fast must never see empty sections waiting to animate.
- **The hero doesn't wait for scroll.** Above-the-fold content animates in on load (quick, subtle, staggered) or not at all — never blank until interaction.
- **Parallax and scroll-linked effects are rare exceptions.** Only ever subtle (a few pixels of drift on imagery), never on text, and only when the brand calls for expressiveness. Scroll-jacking — hijacking scroll speed or direction — is absolutely banned.
- **Count-up numbers are the one indulgence.** Animated stats (via `AnimatedNumber`) earn their motion because they draw the eye to proof. Everything else stays quiet.

## 12. Images

One weak image undoes a page of careful typography. Imagery gets the same rigor as everything else.

- **Photography quality bar:** real, high-resolution, consistently lit and graded. Team photos are shot in one style. Product/work screenshots are pixel-perfect and shown in clean, minimal frames.
- **No generic stock, no generic AI.** Recognizable stock photos (handshakes, headset women, pointing-at-whiteboard teams) and generic AI illustrations are banned (§18). If authentic imagery isn't available, prefer a strong typographic or abstract-graphic treatment over fake photos.
- **Consistent treatment.** All images on a site share one crop discipline, one radius (from the token system), one grading direction. A warm photo next to a cold render reads as sloppy.
- **Images are content, not filler.** Every image must inform (show the product, the work, the people) or set tone deliberately. Decorative filler images are removed and replaced with whitespace (§4).
- **Technical discipline:** always `next/image` with correct `sizes`, explicit dimensions (zero layout shift), `priority` only for the LCP image, meaningful `alt` text (enforced by typed content — the field is required), and modern formats.
- **Text on images is a last resort.** If unavoidable, guarantee contrast with a subtle scrim — never place text on an unpredictable image area and hope.

## 13. Trust Building

Marketing sites have one underlying job: making a stranger trust a company. Design builds trust before copy is ever read.

- **Craft is the first trust signal.** A visually flawless site transfers to "these people are precise". This is why every rule in this document is a conversion rule.
- **Proof over claims.** Real client logos, specific numbers ("47 projects shipped", not "many happy clients"), named testimonials with faces and roles, concrete case results. Vague superlatives ("best-in-class solutions") are noise — cut them.
- **Testimonials are designed as evidence:** real names, real photos, real companies, specific outcomes. Anonymous quotes ("M., CEO") hurt more than they help — leave them out.
- **Show the humans.** Real team photos, a real address, direct contact options. For local businesses, place and people are the strongest trust anchors we have.
- **Precision in the small print.** Working links, correct legal pages, consistent formatting of phone numbers and prices, no placeholder text in production — sloppiness here silently destroys everything the design built.
- **Never fake anything.** No invented testimonials, no fabricated logos, no stock photos posing as "our team", no fake counters. Beyond ethics: visitors detect it, and one detected fake poisons all real proof on the page.

## 14. Landing Page Structure

Every page tells one story in a proven arc. The sections (from `PLAN.md` §4) are the vocabulary; this is the grammar.

**The canonical arc:**

1. **Hero** — the promise. One headline that states the concrete value in the visitor's language, one supporting line, one primary CTA (plus optional quiet secondary). The visitor must be able to answer "what is this, and is it for me?" within seconds.
2. **Social proof, early** — a quiet logo cloud or one-line proof strip directly after the hero. Trust is established before the sales pitch begins.
3. **Problem / value** — show you understand the visitor's situation, then present the offering as the answer. Features are always framed as outcomes for the visitor, not capabilities of the company.
4. **How it works / services** — structure the offering into 3–4 scannable steps or service cards. Clarity beats completeness; details belong on subpages.
5. **Deep proof** — testimonials with faces, case results, stats. The emotional core of the page.
6. **Objection handling** — FAQ for the real questions (price, timeline, process), team/about section for the "who am I dealing with" question.
7. **Final CTA** — a calm, spacious, unmissable closing section repeating the primary action. After it, only the footer.

**Structural rules:**

- **One primary conversion goal per page.** Every section either advances toward it or gets cut.
- **Above the fold is sacred:** headline, subline, CTA, and a proof hint — never a carousel, never an animation the visitor must wait through.
- **7±2 sections per page.** Longer pages dilute; if there's more to say, it's a subpage.
- **Every page ends with a CTA section.** No page ends with a content whimper into the footer.
- **The arc adapts, the logic doesn't.** Section order can flex per client and audience, but promise → proof → offer → objections → action stays intact.

## 15. Conversion Optimization

Conversion optimization is applied respect for the visitor's time — never manipulation.

- **Reduce friction, everywhere.** Every click, field, and decision we remove increases conversion. Contact forms ask for the minimum (name, email, message — everything else is optional or asked later).
- **One clear next step.** At every scroll position, it's obvious what to do next. The primary CTA repeats through the page (hero, mid-page, final section) — same wording, same style, so it's recognized instantly.
- **Specific beats clever.** CTA copy states what happens next: "Book a free 20-minute call" converts better than "Get in touch" because it removes uncertainty. Microcopy under the CTA ("No obligation. Reply within 24h.") kills last-moment hesitation.
- **Reduce perceived risk** at the point of action: response time promises, "free & non-binding", a human face near the contact form. The moment before submitting is where trust is won or lost.
- **Forms are designed as carefully as heroes:** visible labels, large touch-friendly inputs, inline validation that helps instead of scolds, a clear success state that says what happens next. An ugly form after a beautiful page is a broken promise.
- **Measure, don't guess.** Analytics (consent-gated, per `PLAN.md`) inform iteration. But we never A/B-test our way into dark patterns.
- **Banned tactics:** fake urgency ("Only 2 spots left!"), countdown timers on evergreen offers, exit-intent popups, guilt-tripping decline buttons ("No, I hate success"), auto-playing anything with sound, chat widgets that fake a human. Any tactic that would embarrass us if the visitor saw through it — and they do — is out.

## 16. Mobile Experience

Most visitors meet our work on a phone. Mobile is not a shrunken desktop — it is the primary experience (`CLAUDE.md` §7: mobile first).

- **Designed mobile-first, not adapted.** Layouts are conceived for the small viewport and enhanced upward. If a section only works on desktop, the section is redesigned.
- **Typography rescales deliberately.** Display headlines step down (fluid or per-breakpoint) so they never wrap awkwardly or force zooming; body text never drops below 16px.
- **Spacing compresses proportionally.** Section padding and gaps scale down (roughly 60–70% of desktop) but the generous feel is preserved. A cramped mobile view betrays the entire premium positioning.
- **Touch is the input model:** targets ≥ 44px, comfortable gaps between tappable elements, no hover-dependent functionality — everything a hover reveals must be reachable by tap or visible by default.
- **Navigation is thumb-friendly:** clean sheet-based menu, few entries, CTA prominently placed, reachable controls.
- **Performance is a design feature on mobile.** Mid-range devices on cellular connections are the benchmark — the Lighthouse targets (`PLAN.md` §7) are measured on mobile, and heavy imagery or motion that stutters on a real phone is cut.
- **Motion is reduced on small screens.** Shorter distances, fewer staggers; scroll animations must never make content lag behind the thumb.
- **Verified on real devices.** Every page is checked on an actual phone before it counts as done — the emulator lies about feel.

## 17. Accessibility

Accessibility is a quality attribute of premium design, not a compliance checkbox. The measurable baseline (WCAG 2.1 AA) is defined in `PLAN.md` §8; these are the design-side principles:

- **Accessible by design, not by patch.** Contrast, focus states, and touch targets are designed into the tokens and components from the start — retrofitting accessibility always shows.
- **Contrast is part of the palette.** Every token combination used for text is AA-verified (4.5:1 body, 3:1 large text/UI). This is re-checked at every client rebrand, and no brand color overrides it — we adjust the shade, not the standard.
- **Focus states are designed, not default.** A clear, brand-consistent focus ring on every interactive element. Beautiful focus states are a hallmark of the studios we measure against; invisible ones are a hallmark of templates.
- **Semantic structure is the skeleton:** correct landmarks, one `<h1>`, logical heading order, real buttons and links used for what they are. The page must make sense read aloud, in order, with styles off.
- **Motion respects the visitor.** `prefers-reduced-motion` support in every animated component (§10) — not just an option, a guarantee.
- **Everything works without a mouse.** Full keyboard operability including the mobile menu, accordions, and forms; skip link to main content; no focus traps.
- **Content is perceivable by everyone:** required, meaningful `alt` texts; form fields with visible labels and programmatically linked errors; information never conveyed by color alone.

## 18. What Should NEVER Appear on Our Websites

The banned list. These patterns mark a site as template-built or trend-chasing — the opposite of what we sell. None of these ship, on any project, for any client, regardless of who asks.

**Visual clichés:**

- **Giant multi-color gradients** — rainbow meshes, purple-to-teal hero washes, gradient text on everything.
- **Random floating blobs** — amorphous shapes drifting behind content, decorative circles anchored to nothing.
- **Glassmorphism everywhere** — frosted-glass panels as a default surface treatment. (A subtle blur on a sticky header is fine; glass as an aesthetic is not.)
- **Oversized shadows** — cards levitating on 40px black glows. Elevation is a whisper, never a shout (§7).
- **Generic AI illustrations** — obviously AI-generated art, isometric people, style-clashing generated imagery (§12).
- **Too many colors** — more than a neutral ramp + one accent + functional colors. If a section needs a fifth color, the section is wrong (§5).
- **Inconsistent spacing** — ad-hoc margins, near-identical paddings, sections that don't share the rhythm (§4, §8). The subtlest of these sins, and the deadliest.

**More visual bans:**

- Mixed corner radii on one page; mixed icon sets or stroke weights.
- Stock photos anyone has seen before (handshakes, call-center headsets, pointing at whiteboards).
- Emoji as UI or feature icons; decorative fonts for body text; more than two typefaces.
- Dark-pattern badges: fake trust seals, invented award logos.

**Motion bans:**

- Scroll-jacking; parallax on text; content that re-animates on every scroll-up.
- Spinning logos, bouncing arrows, pulsing CTAs, shine sweeps on buttons.
- Entrance animations longer than ~700ms; anything that makes the visitor wait for content.
- Auto-playing carousels and auto-playing video with sound.

**UX bans:**

- Exit-intent popups; newsletter modals on first visit; countdown timers on evergreen offers; fake scarcity or urgency.
- Guilt-trip decline copy ("No thanks, I prefer failing").
- Fake chat widgets pretending to be a live human.
- Cookie banners that make declining harder than accepting.
- Hover-only functionality on touch devices; unlabeled icon-only navigation.
- Placeholder or lorem-ipsum text in anything a client or visitor sees.

**The test:** before shipping any page, ask — _would this section look at home on a site by the studios we measure against?_ If it would look at home on a €50 template marketplace instead, it gets redesigned. When in doubt, remove; restraint has never made one of our sites worse.
