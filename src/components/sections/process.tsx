import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/types/content";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  intro?: SectionIntro;
  steps: ProcessStep[];
  background?: SectionBackground;
  className?: string;
}

/** Numbered vertical timeline — "how we work" in 3–5 scannable steps. */
export function ProcessSteps({
  intro,
  steps,
  background,
  className,
}: ProcessStepsProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger
          className={cn("mx-auto max-w-2xl", intro && "mt-14 sm:mt-20")}
        >
          <ol>
            {steps.map((step, index) => (
              <li key={step.title}>
                <FadeIn className="flex gap-5 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium tabular-nums">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="my-2 w-px flex-1 bg-border" aria-hidden />
                    )}
                  </div>
                  <div
                    className={cn(
                      "pt-1.5",
                      index < steps.length - 1 && "pb-10",
                    )}
                  >
                    <h3 className="text-base font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
