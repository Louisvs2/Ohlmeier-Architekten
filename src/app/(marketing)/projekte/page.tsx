import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { HeroCentered } from "@/components/sections/hero";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
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
        <ProjectsExplorer
          tiles={projects.map((project) => ({
            title: project.title,
            meta:
              [project.year, project.location].filter(Boolean).join(" · ") ||
              project.category,
            href: `/projekte/${project.slug}`,
            material: project.material,
            image: project.image,
          }))}
          projects={projects}
        />
      </Section>
      <CTA {...projectsPage.cta} background="brand" />
    </>
  );
}
