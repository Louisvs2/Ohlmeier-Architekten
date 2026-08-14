import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { ServiceCards } from "@/components/sections/features";
import { FloatingProjects } from "@/components/sections/floating-projects";
import { HeroEditorial } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { TestimonialsGrid } from "@/components/sections/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

// Default homepage composition following the canonical arc (DESIGN.md §14):
// promise → offer → proof → process → deep proof → objections → action.
export default function HomePage() {
  return (
    <>
      <HeroEditorial {...home.hero} />
      <Section background="muted" className="overflow-hidden">
        <Container>
          <SectionHeading {...home.projectsTeaser.intro} />
        </Container>
        <div className="mt-14 px-2 sm:mt-20 sm:px-4">
          <FloatingProjects
            tiles={home.projectsTeaser.tiles}
            cols={4}
            sizeMin={150}
            sizeMax={380}
            photoSizeMin={220}
          />
        </div>
        <Container className="mt-10 flex justify-center sm:mt-16">
          <Button asChild size="lg" variant="outline">
            <Link href={home.projectsTeaser.cta.href}>
              {home.projectsTeaser.cta.label}
            </Link>
          </Button>
        </Container>
      </Section>
      <ServiceCards intro={home.services.intro} items={home.services.items} />
      <Stats items={home.stats} background="muted" />
      <ProcessSteps intro={home.process.intro} steps={home.process.steps} />
      <TestimonialsGrid
        intro={home.testimonials.intro}
        items={home.testimonials.items}
        background="muted"
      />
      <FAQ intro={home.faq.intro} items={home.faq.items} />
      <CTA {...home.cta} background="brand" />
    </>
  );
}
