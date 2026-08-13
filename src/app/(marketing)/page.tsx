import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { ServiceCards } from "@/components/sections/features";
import { HeroCentered } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { TestimonialsGrid } from "@/components/sections/testimonials";
import { home } from "@/content/home";

// Default homepage composition following the canonical arc (DESIGN.md §14):
// promise → offer → proof → process → deep proof → objections → action.
export default function HomePage() {
  return (
    <>
      <HeroCentered {...home.hero} />
      <ServiceCards
        intro={home.services.intro}
        items={home.services.items}
        background="muted"
      />
      <Stats items={home.stats} />
      <ProcessSteps
        intro={home.process.intro}
        steps={home.process.steps}
        background="muted"
      />
      <TestimonialsGrid
        intro={home.testimonials.intro}
        items={home.testimonials.items}
      />
      <FAQ intro={home.faq.intro} items={home.faq.items} background="muted" />
      <CTA {...home.cta} />
    </>
  );
}
