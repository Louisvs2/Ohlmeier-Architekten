import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Action, SectionIntro } from "@/types/content";

export interface PricingPlan {
  name: string;
  /** Formatted price, e.g. "990 €" or "ab 2.400 €". */
  price: string;
  /** Billing context, e.g. "pro Monat" or "einmalig". */
  period?: string;
  description?: string;
  features: string[];
  action: Action;
  /** Visually emphasized plan — at most one per table. */
  highlighted?: boolean;
  /** Small badge on the highlighted plan, e.g. "Beliebt". */
  badge?: string;
}

interface PricingTableProps {
  intro?: SectionIntro;
  plans: PricingPlan[];
  background?: SectionBackground;
  className?: string;
}

export function PricingTable({
  intro,
  plans,
  background,
  className,
}: PricingTableProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan) => (
              <li key={plan.name}>
                <FadeIn
                  className={cn(
                    "relative flex h-full flex-col rounded-xl border bg-card p-6 sm:p-8 lg:p-10",
                    plan.highlighted && "border-primary shadow-sm",
                  )}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-base font-medium">{plan.name}</h3>
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </p>
                  {plan.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {plan.description}
                    </p>
                  )}
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-foreground"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    className="mt-8 w-full"
                  >
                    <Link href={plan.action.href}>{plan.action.label}</Link>
                  </Button>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
