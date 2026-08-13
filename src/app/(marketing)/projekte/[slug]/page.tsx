import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { HeroStatement } from "@/components/sections/hero";
import { materialTreatments } from "@/components/sections/project-mosaic";
import { projects, projectsPage } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};
  const facts = [project.category, project.location, project.year]
    .filter(Boolean)
    .join(" · ");
  return createMetadata({
    title: project.title,
    description:
      facts || `${project.title} — ein Projekt von Ohlmeier Architekten.`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const facts = [
    project.year ? `Baujahr ${project.year}` : null,
    project.location ? `Ort ${project.location}` : null,
  ].filter((value): value is string => Boolean(value));

  return (
    <>
      <HeroStatement
        eyebrow="Projekt"
        title={project.title}
        subtitle={
          facts.length > 0
            ? facts.join(" · ")
            : "Fotografie und Details zu diesem Projekt folgen in Kürze."
        }
        className="py-20 sm:py-24 lg:py-28"
      />
      {/* Placeholder visual until real project photography is delivered
          (CLIENT.md §18) — reuses the mosaic's material treatment instead
          of a fabricated stock photo. */}
      <Section background="muted">
        <Container>
          <div
            className={cn(
              "relative aspect-[16/9] w-full overflow-hidden",
              materialTreatments[project.material],
            )}
          />
        </Container>
      </Section>
      <CTA {...projectsPage.cta} />
    </>
  );
}
