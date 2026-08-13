import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { TestimonialsCarouselTrack } from "@/components/sections/testimonials-carousel-track";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  TestimonialCard,
  type Testimonial,
} from "@/components/shared/testimonial-card";
import { cn } from "@/lib/utils";
import type { SectionIntro } from "@/types/content";

interface TestimonialsBaseProps {
  intro?: SectionIntro;
  items: Testimonial[];
  background?: SectionBackground;
  className?: string;
}

/** Static grid — best for up to ~6 testimonials. */
export function TestimonialsGrid({
  intro,
  items,
  background,
  className,
}: TestimonialsBaseProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeInStagger fast className={cn(intro && "mt-14 sm:mt-20")}>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((testimonial) => (
              <li key={testimonial.name}>
                <FadeIn className="h-full">
                  <TestimonialCard testimonial={testimonial} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </Section>
  );
}

/** Swipeable carousel — best for longer lists of testimonials. */
export function TestimonialsCarousel({
  intro,
  items,
  background,
  className,
}: TestimonialsBaseProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        {intro && <SectionHeading {...intro} />}
        <FadeIn className={cn(intro && "mt-14 sm:mt-20")}>
          <TestimonialsCarouselTrack testimonials={items} />
        </FadeIn>
      </Container>
    </Section>
  );
}
