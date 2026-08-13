import type { StaticImageData } from "next/image";

/** A link with a label — used for CTAs and nav-like references in sections. */
export interface Action {
  label: string;
  href: string;
}

/** Standard section opener content, rendered via SectionHeading. */
export interface SectionIntro {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** Image for fill-based rendering inside aspect-ratio containers.
 *  alt is required — decorative images don't belong in sections (DESIGN.md §12). */
export interface SectionImage {
  src: string | StaticImageData;
  alt: string;
}

/** Logo with intrinsic dimensions (rendered at fixed height, no layout shift). */
export interface Logo {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

/** A framed image that fills its aspect box (object-cover). */
export interface HeroImageMedia {
  type: "image";
  src: string | StaticImageData;
  alt: string;
}

/** An autoplaying, muted, looping background video. Under
 *  prefers-reduced-motion it does not autoplay and shows the poster. */
export interface HeroVideoMedia {
  type: "video";
  /** Video file URL (mp4/webm). */
  src: string;
  /** Poster frame — shown before play and when motion is reduced. */
  poster?: string;
  /** Accessible description of the video content. */
  alt: string;
}

/** A foreground object floating on a premium stage (object-contain). Ideally
 *  a cut-out asset (transparent product/device/render). */
export interface HeroObjectMedia {
  type: "object";
  src: string | StaticImageData;
  alt: string;
}

/** Optional hero visual, discriminated by `type`. The Hero System renders
 *  each kind with its own premium treatment (see HeroVisual). */
export type HeroMedia = HeroImageMedia | HeroVideoMedia | HeroObjectMedia;
