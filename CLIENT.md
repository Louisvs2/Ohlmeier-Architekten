# CLIENT.md — Client Briefing Template

> **How to use this document:** Copy this file for every new client project and fill in every field. This briefing must contain **all** information required to build the complete website without asking further questions. A field left empty is a question that will interrupt production — resolve every `[...]` placeholder before development starts. Delete this note block once the briefing is complete.
>
> - Feeds `src/config/site.ts` → Company Name, Contact, Address, Opening Hours, Social Media
> - Feeds `src/content/` → Services, USP, FAQs, Testimonials/Reviews
> - Feeds design tokens (`globals.css`) → Brand Colors, Typography
> - Guides copywriting & SEO → Target Audience, Tone of Voice, Keywords, CTAs
>
> **Status:** ☐ Draft ☐ Complete & approved by client ☐ Handed off to development
> **Last updated:** [YYYY-MM-DD] · **Filled in by:** [Name]

---

## 1. Company Name

- **Legal name:** [Full legal company name, e.g. "Müller Sanitärtechnik GmbH"]
- **Display name / brand name:** [Name as it should appear on the website, e.g. "Müller Sanitär"]
- **Domain:** [e.g. www.example.de — confirmed and owned by client? yes/no]
- **Tagline / slogan (if any):** [Existing slogan, or "none — to be developed"]

## 2. Industry

- **Industry / sector:** [e.g. plumbing & heating, law firm, dental practice, SaaS]
- **Business type:** [local service business / regional / national / online-only]
- **Years in business:** [e.g. "since 1998" — useful as a trust signal]
- **Team size:** [e.g. 12 employees — useful for About/Team section]

## 3. Target Audience

- **Primary audience:** [Who exactly? e.g. "homeowners aged 35–65 in the greater Munich area planning a bathroom renovation"]
- **Secondary audience:** [e.g. "property managers and landlords" — or "none"]
- **Customer situation / pain points:** [What problem do they have when they search for this company? What are they worried about?]
- **Decision criteria:** [What makes them choose one provider over another? Price, speed, trust, quality, proximity?]
- **Knowledge level:** [layperson / informed / expert — determines how technical the copy may be]
- **B2C / B2B / both:** [ ]

## 4. Services

> List every service that should appear on the website. Order = display order. Each service becomes an entry in `src/content/` and, if marked, a detail page under `/leistungen/[slug]`.

| #   | Service name | Short description (1–2 sentences)                 | Detail page? | Priority    |
| --- | ------------ | ------------------------------------------------- | ------------ | ----------- |
| 1   | [Service A]  | [What is it, what outcome does the customer get?] | yes/no       | high/normal |
| 2   | [Service B]  | [...]                                             | yes/no       | high/normal |
| 3   | [Service C]  | [...]                                             | yes/no       | high/normal |
| 4   | [...]        | [...]                                             | yes/no       | high/normal |

- **Flagship service** (gets the most prominence): [Service name]
- **Services explicitly NOT offered** (to avoid wrong inquiries): [e.g. "no emergency service", or "none"]

## 5. USP (Unique Selling Proposition)

- **Main USP in one sentence:** [Why should a customer choose this company and not the competitor? Be specific — "quality and reliability" is not a USP.]
- **Supporting proof points (3–5):**
  - [e.g. "24h response time, guaranteed in writing"]
  - [e.g. "certified XYZ partner — only one in the region"]
  - [e.g. "fixed-price quotes, no hidden costs"]
- **Guarantees / certifications / awards:** [List with year — these appear as trust signals]
- **Numbers we may publish:** [e.g. "1,200+ completed projects", "4.9★ from 214 reviews" — only real, verifiable numbers]

## 6. Brand Personality

> Determines the overall feel of design and copy. Check per pair — where on the spectrum does this brand sit?

| Trait               | 1   | 2   | 3   | 4   | 5   | Trait                      |
| ------------------- | --- | --- | --- | --- | --- | -------------------------- |
| Traditional         | ☐   | ☐   | ☐   | ☐   | ☐   | Modern                     |
| Serious             | ☐   | ☐   | ☐   | ☐   | ☐   | Playful                    |
| Premium / exclusive | ☐   | ☐   | ☐   | ☐   | ☐   | Accessible / down-to-earth |
| Corporate           | ☐   | ☐   | ☐   | ☐   | ☐   | Personal                   |
| Calm / understated  | ☐   | ☐   | ☐   | ☐   | ☐   | Bold / expressive          |

- **Three adjectives the client wants visitors to feel:** [e.g. "competent, warm, precise"]
- **Brands the client admires (any industry):** [Used to calibrate taste — not to copy]

## 7. Tone of Voice

- **Formality (German sites):** ☐ "Sie" (formal) ☐ "Du" (informal)
- **Language(s) of the website:** [e.g. German only / German + English]
- **Voice description:** [e.g. "confident but never salesy; short sentences; plain language, no jargon"]
- **Words / phrases to use:** [Industry terms or brand phrases the client wants]
- **Words / phrases to avoid:** [e.g. "cheap", superlatives, anglicisms — anything the client dislikes]
- **Example sentence in the target tone:** [Write one hero-style sentence as calibration]

## 8. Business Goals

- **Primary goal of the website:** [e.g. "generate qualified inquiries for bathroom renovations" — one goal, specific]
- **Secondary goals:** [e.g. "build trust for high-ticket projects", "attract job applicants", "reduce phone questions via FAQ"]
- **What does a successful website mean in numbers?** [e.g. "10 qualified inquiries per month"]
- **Current situation:** [Existing website? What works, what doesn't? Where do customers currently come from?]

## 9. Primary Call To Action

- **Action:** [What exactly should the visitor do? e.g. "request a free on-site quote"]
- **CTA label:** [Exact button text, e.g. "Kostenloses Angebot anfordern"]
- **Destination / mechanism:** [contact form / phone call / booking tool (which?) / email]
- **What happens after?** [e.g. "we reply within 24h with a callback" — used as reassurance microcopy under the CTA]

## 10. Secondary Call To Action

- **Action:** [Lower-commitment alternative, e.g. "view reference projects" or "call directly"]
- **CTA label:** [Exact button/link text]
- **Destination:** [page / phone number / download]

## 11. Contact Information

- **Phone:** [+49 ...] — ☐ show prominently in header ☐ footer only
- **Email:** [info@example.de]
- **WhatsApp / other channels:** [number or "none"]
- **Contact person (name + role, for photos/signatures):** [e.g. "Thomas Müller, Owner"]
- **Preferred contact method for form submissions:** [where do form emails go?]
- **Response time promise:** [e.g. "within 24 hours" — or "none"]

## 12. Address

- **Street & number:** [...]
- **ZIP & city:** [...]
- **Country:** [...]
- **Show address publicly?** ☐ yes ☐ no (online-only / home office)
- **Google Maps embed on contact page?** ☐ yes ☐ no
- **Directions / parking notes:** [if relevant for walk-in customers, else "n/a"]

## 13. Opening Hours

> Used in the footer, contact page, and `LocalBusiness` structured data.

| Day       | Hours                  |
| --------- | ---------------------- |
| Monday    | [08:00–17:00 / closed] |
| Tuesday   | [...]                  |
| Wednesday | [...]                  |
| Thursday  | [...]                  |
| Friday    | [...]                  |
| Saturday  | [...]                  |
| Sunday    | [...]                  |

- **Deviations / notes:** [e.g. "by appointment only", "24/7 emergency line", or "not applicable — online business"]

## 14. Service Area

- **Geographic area served:** [e.g. "Munich + 50 km radius", "all of Bavaria", "Germany-wide", "global"]
- **Cities/regions to mention explicitly (local SEO):** [e.g. "Munich, Freising, Erding, Dachau"]
- **On-site service or customers come to us?** [ ]

## 15. Brand Colors

> Becomes the design tokens in `globals.css`. If no brand colors exist, note preferences and the agency proposes a palette (per `DESIGN.md` §5: neutral ramp + one accent).

- **Existing brand colors (exact values):**
  - Primary: [#HEX / "none"]
  - Secondary: [#HEX / "none"]
  - Source of truth: [logo file / style guide / "colors exist only in the old website"]
- **Color preferences / direction (if no fixed brand):** [e.g. "warm, earthy", "clean tech blue"]
- **Colors to avoid:** [e.g. "no red — competitor's color"]
- **Dark mode desired?** ☐ yes ☐ no ☐ agency decides
- ⚠️ Note: final shades may be adjusted to meet WCAG AA contrast (per `DESIGN.md` §17). Brand color ≠ text color.

## 16. Typography Preferences

- **Existing brand font(s):** [Name + license status / webfont files available? / "none"]
- **Direction if none exists:** [e.g. "modern grotesque", "classic serif for premium feel", "agency decides"]
- **Must-avoid:** [e.g. "nothing playful/handwritten"]
- ⚠️ Fonts must be self-hostable via `next/font` (license permitting). Google Fonts CDN is not used (GDPR).

## 17. Existing Logo

- **Logo exists?** ☐ yes ☐ no ☐ needs rework (separate scope)
- **Files provided:** [SVG preferred; formats received: ...] — **Location:** [link/folder]
- **Variants available:** ☐ light background ☐ dark background ☐ icon-only / favicon source
- **Protection rules:** [minimum size, clear space, "never on photos", or "none defined"]

## 18. Existing Images

- **What exists?** [team photos / premises / completed projects / products / "nothing usable"]
- **Location & rights:** [link/folder — usage rights confirmed? photographer credit required?]
- **Quality assessment (by agency):** [usable as-is / usable with editing / re-shoot recommended]
- **Photo shoot planned?** ☐ yes, date: [...] ☐ no
- **If imagery is missing:** [agreed fallback per `DESIGN.md` §12 — typographic/abstract treatment; NO generic stock, NO generic AI images]

## 19. Social Media

> Linked in footer and `sameAs` structured data. Only list profiles that are actively maintained — dead profiles hurt trust.

| Platform           | URL       | Active? | Show on site? |
| ------------------ | --------- | ------- | ------------- |
| Instagram          | [URL / —] | yes/no  | yes/no        |
| Facebook           | [URL / —] | yes/no  | yes/no        |
| LinkedIn           | [URL / —] | yes/no  | yes/no        |
| YouTube            | [URL / —] | yes/no  | yes/no        |
| TikTok / X / other | [URL / —] | yes/no  | yes/no        |

## 20. Google Reviews

- **Google Business Profile URL:** [link / "none — to be created"]
- **Current rating & count:** [e.g. "4.8★, 132 reviews" as of YYYY-MM-DD]
- **Show rating on the website?** ☐ yes ☐ no
- **Best reviews to feature as testimonials** (with reviewer name — permission confirmed?):
  1. [Quote — Name, context] — permission: yes/no
  2. [Quote — Name, context] — permission: yes/no
  3. [Quote — Name, context] — permission: yes/no
- **Additional testimonials outside Google:** [source + permission status]

## 21. Competitors

> Used for positioning and SEO — never for copying.

| Competitor | Website | What they do well | How we differentiate |
| ---------- | ------- | ----------------- | -------------------- |
| [Name]     | [URL]   | [...]             | [...]                |
| [Name]     | [URL]   | [...]             | [...]                |
| [Name]     | [URL]   | [...]             | [...]                |

- **Websites the client likes (any industry) & why:** [URL — what specifically?]
- **Websites the client dislikes & why:** [URL — what specifically?]

## 22. SEO Keywords

- **Primary keyword (homepage):** [e.g. "Badsanierung München"]
- **Keyword per service page:**

| Page        | Target keyword | Search intent                 |
| ----------- | -------------- | ----------------------------- |
| Home        | [...]          | [...]                         |
| [Service A] | [...]          | [informational/transactional] |
| [Service B] | [...]          | [...]                         |

- **Local modifiers:** [city/region terms from §14]
- **Terms customers actually use** (client's words, from real inquiries): [often differs from industry jargon!]
- **Existing rankings to preserve** (if relaunch): [URLs + keywords — redirects required!]

## 23. Frequently Asked Questions

> Minimum 5 real questions customers actually ask (phone/email). Feeds the FAQ section + FAQ structured data. Include the uncomfortable ones (price, duration) — they convert best.

1. **Q:** [Question] — **A:** [Answer, 2–4 sentences, in the brand's tone]
2. **Q:** [...] — **A:** [...]
3. **Q:** [...] — **A:** [...]
4. **Q:** [...] — **A:** [...]
5. **Q:** [...] — **A:** [...]

## 24. Legal Pages

> GDPR-critical — must be complete before launch. The agency provides page templates; legal content responsibility stays with the client.

- **Impressum data complete?** ☐ yes — [legal form, registration court & number, VAT ID, responsible person, supervisory authority/chamber if applicable]
- **Privacy policy:** ☐ client provides ☐ client's lawyer ☐ generator (which?) — [status]
- **Analytics/tracking planned:** [Vercel Analytics / other — must be reflected in privacy policy + consent banner]
- **Terms & conditions (AGB) page needed?** ☐ yes ☐ no
- **Cancellation policy / other industry-specific legal pages:** [e.g. Widerrufsbelehrung, or "none"]
- **Professional regulations** (regulated professions: lawyers, doctors, …): [applicable rules or "n/a"]

## 25. Required Sections

> Check every section this website needs. Default template sections per `PLAN.md` §4.

**Pages:**
☐ Home ☐ About us ☐ Services overview ☐ Service detail pages ☐ Contact ☐ [Other: ...]

**Homepage sections:**
☐ Hero ☐ Logo cloud / "known from" ☐ Services grid ☐ Process steps ("how we work") ☐ Stats ☐ Testimonials ☐ Team ☐ FAQ ☐ Pricing ☐ Final CTA ☐ [Other: ...]

- **Special requirements beyond the template:** [e.g. job listings, gallery, downloads area — flag early, may affect scope/quote]

## 26. Sections to Avoid

- **Explicitly unwanted sections/elements:** [e.g. "no pricing on the website", "no team photos — privacy", "no blog"]
- **Topics not to mention:** [e.g. former partnerships, discontinued services]
- **Reason (if relevant for future decisions):** [...]
- ℹ️ Independent of client wishes, everything in `DESIGN.md` §18 (banned patterns) never ships.

## 27. Notes

- **Deadline / desired launch date:** [date + reason, e.g. trade fair]
- **Budget notes / agreed scope:** [reference to offer/contract]
- **Decision maker & approval process:** [who signs off? one person or committee?]
- **Content delivery:** [who writes/delivers what by when? texts, images, legal]
- **Domain & hosting access:** [registrar, DNS access status — needed for Vercel setup]
- **Existing site migration notes:** [what must be preserved? redirects? email addresses?]
- **Anything else the team must know:** [free text — quirks, history, sensitivities, promises made in sales calls]
