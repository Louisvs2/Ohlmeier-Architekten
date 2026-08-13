import type { SectionImage } from "@/types/content";

// Shared material vocabulary for project tiles without a dedicated photo
// (FloatingProjects, project detail placeholders): a real extracted
// macro-texture photo where one exists (`materialPhotos`), otherwise an
// abstract CSS gradient fallback (`materialTreatments`, DESIGN.md §12) —
// never a generic stock photo.

export type MosaicMaterial = "concrete" | "wood" | "glass" | "rust" | "steel";

/** Real macro-texture photos extracted from the reference site's own PDF
 *  export (CLIENT.md) — used instead of the CSS gradients below wherever
 *  a project has no dedicated photo of its own. */
export const materialPhotos: Partial<Record<MosaicMaterial, SectionImage>> = {
  concrete: {
    src: "/images/materials/concrete.jpg",
    alt: "Betonoberfläche, Nahaufnahme",
  },
  wood: {
    src: "/images/materials/wood.jpg",
    alt: "Sonnenbeschienene Holzlamellen, Nahaufnahme",
  },
  glass: {
    src: "/images/materials/glass.jpg",
    alt: "Materialoberfläche, Nahaufnahme",
  },
  rust: {
    src: "/images/materials/rust.jpg",
    alt: "Verwitterte Steinoberfläche, Nahaufnahme",
  },
  steel: {
    src: "/images/materials/steel.jpg",
    alt: "Gebürstete Metalloberfläche, Nahaufnahme",
  },
};

export const materialTreatments: Record<MosaicMaterial, string> = {
  concrete:
    "bg-[linear-gradient(135deg,oklch(0.8_0.006_85),oklch(0.6_0.008_80))] bg-[radial-gradient(oklch(0_0_0/0.05)_1px,transparent_1px)] bg-[length:6px_6px]",
  wood: "bg-[repeating-linear-gradient(112deg,oklch(0.62_0.1_55)_0,oklch(0.62_0.1_55)_5px,oklch(0.5_0.1_42)_5px,oklch(0.5_0.1_42)_11px)]",
  glass: "bg-[linear-gradient(158deg,oklch(0.9_0.02_230),oklch(0.5_0.05_235))]",
  rust: "bg-[radial-gradient(circle_at_28%_30%,oklch(0.66_0.16_45),oklch(0.42_0.13_35)_75%)]",
  steel:
    "bg-[repeating-linear-gradient(98deg,oklch(0.74_0.004_260)_0,oklch(0.74_0.004_260)_3px,oklch(0.58_0.006_260)_3px,oklch(0.58_0.006_260)_6px)]",
};
