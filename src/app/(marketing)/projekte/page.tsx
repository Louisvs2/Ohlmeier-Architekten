import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { FloatingProjects } from "@/components/sections/floating-projects";
import { HeroCentered } from "@/components/sections/hero";
import { projects, projectsPage } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: projectsPage.hero.title,
  description: projectsPage.hero.subtitle,
});

export default function ProjektePage() {
  return (
    <>
      <HeroCentered
        title={projectsPage.hero.title}
        subtitle={projectsPage.hero.subtitle}
        className="py-20 sm:pt-24 sm:pb-8 lg:pt-28"
      />
      <Section background="muted" className="overflow-hidden px-2 py-8 sm:px-4">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Zum Erkunden ziehen — klicken oder tippen öffnet das Projekt.
        </p>
        <FloatingProjects
          tiles={projects.map((project) => ({
            title: project.title,
            meta:
              [project.year, project.location].filter(Boolean).join(" · ") ||
              project.category,
            href: `/projekte/${project.slug}`,
            material: project.material,
            image: project.image,
          }))}
        />
      </Section>
      <CTA {...projectsPage.cta} background="brand" />
    </>
  );
}
