import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/types/content";

export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsProps {
  intro?: SectionIntro;
  items: Stat[];
  background?: SectionBackground;
  className?: string;
}

// Only real, verifiable numbers belong here (DESIGN.md §13).
export function Stats({ intro, items, background, className }: StatsProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {items.map((stat) => (
              <FadeIn key={stat.label} className="border-l pl-4 sm:pl-6">
                <dd className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
                <dt className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </dt>
              </FadeIn>
            ))}
          </dl>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
