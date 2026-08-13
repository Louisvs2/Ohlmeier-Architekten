import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import type { SectionIntro } from "@/types/content";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  intro: SectionIntro;
  items: FaqItem[];
  background?: SectionBackground;
  className?: string;
}

// The real questions convert best — including the uncomfortable ones
// (price, duration). Content comes from the client briefing (CLIENT.md §23).
export function FAQ({ intro, items, background, className }: FaqProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <SectionHeading {...intro} align="start" />
          <FadeIn className="lg:col-span-2">
            <Accordion type="single" collapsible>
              {items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="py-5 text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-prose text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
