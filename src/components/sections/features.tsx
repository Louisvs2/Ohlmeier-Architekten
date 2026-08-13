import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/types/content";

export interface Feature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  icon?: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface FeaturesBaseProps {
  intro?: SectionIntro;
  background?: SectionBackground;
  className?: string;
}

function FeatureIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/60 backdrop-blur-[var(--glass-blur)] transition-colors group-hover:border-brand/40 group-hover:text-brand">
      <Icon className="size-5" aria-hidden />
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
            {items.map((feature) => (
              <li key={feature.title}>
                <FadeIn className="flex flex-col gap-4">
                  {feature.icon && <FeatureIcon icon={feature.icon} />}
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
              {items.map((feature) => (
                <li key={feature.title}>
                  <FadeIn className="flex flex-col gap-4">
                    {feature.icon && <FeatureIcon icon={feature.icon} />}
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
    <Section
      background={background}
      className={cn("relative isolate overflow-hidden", className)}
    >
      {/* Soft brand glow — gives the frosted cards something to blur against. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[34rem] w-[64rem] max-w-[130%] -translate-x-1/2 rounded-full opacity-[0.1] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--brand), transparent)",
        }}
      />
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((service) => (
              <li key={service.href}>
                <FadeIn className="h-full">
                  <SpotlightCard href={service.href}>
                    <div className="flex items-start justify-between gap-4">
                      {service.icon && <FeatureIcon icon={service.icon} />}
                      <ArrowUpRight
                        aria-hidden
                        className="ml-auto size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                      />
                    </div>
                    <h3 className="mt-5 text-base font-medium">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </SpotlightCard>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
