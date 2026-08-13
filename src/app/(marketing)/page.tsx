import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { ServiceCards } from "@/components/sections/features";
import { HeroEditorial } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process";
import { ProjectMosaic } from "@/components/sections/project-mosaic";
import { Stats } from "@/components/sections/stats";
import { TestimonialsGrid } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

// Default homepage composition following the canonical arc (DESIGN.md §14):
// promise → offer → proof → process → deep proof → objections → action.
export default function HomePage() {
  return (
    <>
      <HeroEditorial {...home.hero} />
      <ProjectMosaic
        intro={home.projectsTeaser.intro}
        tiles={home.projectsTeaser.tiles}
        background="muted"
        wide
      />
      <Container className="-mt-10 mb-20 flex justify-center sm:-mt-16 sm:mb-28">
        <Button asChild size="lg" variant="outline">
          <Link href={home.projectsTeaser.cta.href}>
            {home.projectsTeaser.cta.label}
          </Link>
        </Button>
      </Container>
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
