import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionImage, SectionIntro } from "@/types/content";

export interface TeamMember {
  name: string;
  role: string;
  /** Omit until a real photo is available — renders an initials avatar
   *  instead of a fabricated stock photo (DESIGN.md §12). */
  image?: SectionImage;
}

interface TeamGridProps {
  intro?: SectionIntro;
  members: TeamMember[];
  background?: SectionBackground;
  className?: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => /^[A-ZÄÖÜ]/.test(part))
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

// Real people are the strongest trust anchor (DESIGN.md §13). Members
// without a delivered photo get an initials avatar rather than a stock
// photo standing in for a real person.
export function TeamGrid({
  intro,
  members,
  background,
  className,
}: TeamGridProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {members.map((member) => (
              <li key={member.name}>
                <FadeIn>
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                    {member.image ? (
                      <Image
                        src={member.image.src}
                        alt={member.image.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-brand">
                        <span className="text-2xl font-semibold text-brand-foreground">
                          {initials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
