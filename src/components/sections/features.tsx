import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { PlanCard } from "@/components/motion/plan-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/types/content";

export interface Feature {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
}

interface FeaturesBaseProps {
  intro?: SectionIntro;
  background?: SectionBackground;
  className?: string;
}

// A sheet marker, not a stock icon: the numbered circle-with-tail is the
// reference bubble architects use to point from a plan to a detail drawn
// elsewhere — borrowed here as the index for each item instead of a generic
// icon-in-a-box.
function FeatureIcon({ index }: { index: number }) {
  return (
    <div
      aria-hidden
      className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-border/70 font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:border-brand group-hover:text-brand"
    >
      {String(index + 1).padStart(2, "0")}
      <span className="absolute top-1/2 -right-4 h-px w-4 -translate-y-1/2 bg-border/70 transition-colors duration-200 group-hover:bg-brand" />
    </div>
  );
}

/** Icon-card grid — the default feature presentation. */
export function FeatureGrid({
  intro,
  items,
  background,
  className,
}: FeaturesBaseProps & { items: Feature[] }) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((feature, i) => (
              <li key={feature.title}>
                <FadeIn className="flex flex-col gap-4">
                  <FeatureIcon index={i} />
                  <div>
                    <h3 className="text-base font-medium">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}

/** Split layout: intro stays left while the feature list flows right. */
export function FeatureSplit({
  intro,
  items,
  background,
  className,
}: FeaturesBaseProps & { intro: SectionIntro; items: Feature[] }) {
  return (
    <Section background={background} className={className}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <SectionHeading {...intro} align="start" />
          <FadeInStagger fast className="lg:col-span-2">
            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {items.map((feature, i) => (
                <li key={feature.title}>
                  <FadeIn className="flex flex-col gap-4">
                    <FeatureIcon index={i} />
                    <div>
                      <h3 className="text-base font-medium">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </Container>
    </Section>
  );
}

/** Linkable service cards — the whole card is the link (DESIGN.md §7). */
export function ServiceCards({
  intro,
  items,
  background,
  className,
}: FeaturesBaseProps & { items: Service[] }) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((service, i) => (
              <li key={service.href}>
                <FadeIn className="h-full">
                  <PlanCard href={service.href}>
                    <div className="flex items-start justify-between gap-4">
                      <FeatureIcon index={i} />
                      <ArrowUpRight
                        aria-hidden
                        className="ml-auto size-5 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                      />
                    </div>
                    <h3 className="mt-5 text-base font-medium">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </PlanCard>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
