import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import type { Logo } from "@/types/content";

interface LogoCloudProps {
  /** Quiet one-liner above the logos, e.g. a trust statement. */
  label?: string;
  logos: Logo[];
  background?: SectionBackground;
  className?: string;
}

// Deliberately slim and quiet: a proof strip, not a feature section.
// Only real client logos belong here (DESIGN.md §13).
export function LogoCloud({
  label,
  logos,
  background,
  className,
}: LogoCloudProps) {
  return (
    <Section
      background={background}
      className={cn("py-12 sm:py-16 lg:py-16", className)}
    >
      <Container>
        <FadeIn>
          {label && (
            <p className="text-center text-sm text-muted-foreground">{label}</p>
          )}
          <ul
            className={cn(
              "flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14",
              label && "mt-8",
            )}
          >
            {logos.map((logo) => (
              <li key={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-7 w-auto opacity-60"
                />
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </Section>
  );
}
