import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/types/content";

// Offset editorial grid for project references — the mosaic of real photos
// and material macro-shots on the reference site. Until real project
// photography is delivered, tiles render abstract CSS material textures
// instead of stock imagery (DESIGN.md §12: typographic/abstract, never
// generic stock). This is intentionally a separate component from Gallery,
// which guarantees one uniform crop/radius for real photo sets elsewhere —
// the mosaic's whole point is varied tile sizes and no rounding.

export type MosaicMaterial = "concrete" | "wood" | "glass" | "rust" | "steel";
export type MosaicSpan = "sm" | "md" | "lg";

export interface MosaicTile {
  title: string;
  meta?: string;
  href?: string;
  material: MosaicMaterial;
  span?: MosaicSpan;
}

interface ProjectMosaicProps {
  intro?: SectionIntro;
  tiles: MosaicTile[];
  background?: SectionBackground;
  wide?: boolean;
  className?: string;
}

export const materialTreatments: Record<MosaicMaterial, string> = {
  concrete:
    "bg-[linear-gradient(135deg,oklch(0.8_0.006_85),oklch(0.6_0.008_80))] bg-[radial-gradient(oklch(0_0_0/0.05)_1px,transparent_1px)] bg-[length:6px_6px]",
  wood: "bg-[repeating-linear-gradient(112deg,oklch(0.62_0.1_55)_0,oklch(0.62_0.1_55)_5px,oklch(0.5_0.1_42)_5px,oklch(0.5_0.1_42)_11px)]",
  glass: "bg-[linear-gradient(158deg,oklch(0.9_0.02_230),oklch(0.5_0.05_235))]",
  rust: "bg-[radial-gradient(circle_at_28%_30%,oklch(0.66_0.16_45),oklch(0.42_0.13_35)_75%)]",
  steel:
    "bg-[repeating-linear-gradient(98deg,oklch(0.74_0.004_260)_0,oklch(0.74_0.004_260)_3px,oklch(0.58_0.006_260)_3px,oklch(0.58_0.006_260)_6px)]",
};

const spanClasses: Record<MosaicSpan, string> = {
  sm: "col-span-1 row-span-1",
  md: "col-span-2 row-span-1",
  lg: "col-span-2 row-span-2",
};

export function ProjectMosaic({
  intro,
  tiles,
  background,
  wide,
  className,
}: ProjectMosaicProps) {
  return (
    <Section background={background} className={className}>
      <Container width={wide ? "wide" : "default"}>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[160px] sm:grid-cols-3 sm:gap-6 lg:auto-rows-[190px] lg:grid-cols-4 lg:gap-8">
            {tiles.map((tile) => {
              const visual = (
                <>
                  <div
                    className={cn(
                      "absolute inset-0 transition-transform duration-500 group-hover:scale-105",
                      materialTreatments[tile.material],
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-sm font-medium text-white">
                      {tile.title}
                    </p>
                    {tile.meta && (
                      <p className="text-xs text-white/70">{tile.meta}</p>
                    )}
                  </div>
                </>
              );

              return (
                <li key={tile.title} className={spanClasses[tile.span ?? "sm"]}>
                  <FadeIn className="h-full">
                    {tile.href ? (
                      <Link
                        href={tile.href}
                        className="group relative block h-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {visual}
                      </Link>
                    ) : (
                      <div className="group relative block h-full overflow-hidden">
                        {visual}
                      </div>
                    )}
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
