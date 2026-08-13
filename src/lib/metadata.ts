import type { Metadata } from "next";

// Minimal metadata factory (PLAN.md §6). Every page calls this with a title
// and description instead of hand-rolling a Metadata object — the single
// seam to extend later (canonical URLs, Open Graph) without touching every
// page. Deliberately small: no OG image generation, no JSON-LD.

interface CreateMetadataOptions {
  title: string;
  description: string;
}

export function createMetadata({
  title,
  description,
}: CreateMetadataOptions): Metadata {
  return { title, description };
}
