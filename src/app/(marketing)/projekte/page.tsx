import { CTA } from "@/components/sections/cta";
import { HeroCentered } from "@/components/sections/hero";
import { ProjectMosaic } from "@/components/sections/project-mosaic";
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
        className="py-20 sm:py-24 lg:py-28"
      />
      <ProjectMosaic
        tiles={projects.map((project) => ({
          title: project.title,
          meta:
            [project.year, project.location].filter(Boolean).join(" · ") ||
            project.category,
          href: `/projekte/${project.slug}`,
          material: project.material,
          span: project.span,
        }))}
        wide
      />
      <CTA {...projectsPage.cta} background="muted" />
    </>
  );
}
