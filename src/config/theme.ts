/**
 * The look of the site — the single switch a new client project flips.
 *
 * Each look bundles an accent colour, a font pairing, corner radius and the
 * "feel" of the interactions (glass blur, cursor spotlight, hover lift,
 * magnetic strength). The visual values live in src/styles/globals.css under
 * `:root[data-look="…"]`; the fonts are wired in src/lib/fonts.ts. To rebrand
 * beyond a preset, edit the accent tokens for that look in globals.css.
 */
export const looks = ["glass", "editorial", "minimal", "bold"] as const;

export type LookName = (typeof looks)[number];

/** Human-readable summary of each look (for docs / tooling). */
export const lookDescriptions: Record<LookName, string> = {
  glass:
    "Modern & tactile — Space Grotesk, warm gold, frosted-glass cards with a cursor spotlight and magnetic CTA.",
  editorial:
    "Refined & calm — Fraunces serif, deep burgundy, flat cards with hairline borders. Magazine-grade.",
  minimal:
    "Quiet & sharp — Inter throughout, monochrome ink accent, flat surfaces, tight corners. Gallery-like.",
  bold: "Vivid & playful — Sora, electric violet, strong glass, deep lift and a punchy magnetic CTA.",
};

/** The active look. Change this one line per client project. */
export const activeLook: LookName = "glass";
