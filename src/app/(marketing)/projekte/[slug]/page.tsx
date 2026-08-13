import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { Gallery } from "@/components/sections/gallery";
import { HeroStatement } from "@/components/sections/hero";
import { materialPhotos, materialTreatments } from "@/lib/materials";
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
      {project.gallery ? (
        <Gallery images={project.gallery} background="muted" />
      ) : (
        // Placeholder visual until real project photography is delivered
        // (CLIENT.md §18) — a real material macro-photo where one exists,
        // otherwise the abstract CSS fallback (never a fabricated stock photo).
        <Section background="muted">
          <Container>
            {(() => {
              const photo = materialPhotos[project.material];
              return (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {photo ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 80rem, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={cn(
                        "absolute inset-0",
                        materialTreatments[project.material],
                      )}
                    />
                  )}
                </div>
              );
            })()}
          </Container>
        </Section>
      )}
      <CTA {...projectsPage.cta} />
    </>
  );
}
