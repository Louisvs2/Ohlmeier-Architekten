import Link from "next/link";
import { forwardRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ProjectDetail } from "@/content/projects";

interface ProjectDirectoryProps {
  projects: ProjectDetail[];
}

interface Group {
  key: string;
  label: string;
  items: ProjectDetail[];
}

function groupProjects(projects: ProjectDetail[]): Group[] {
  const byTitle = (a: ProjectDetail, b: ProjectDetail) =>
    a.title.localeCompare(b.title, "de");
  return [
    {
      key: "wohnen",
      label: "Wohnen",
      items: projects.filter((p) => p.category === "Wohnen").sort(byTitle),
    },
    {
      key: "oeffentlich",
      label: "Öffentlich",
      items: projects.filter((p) => p.category === "Öffentlich").sort(byTitle),
    },
    {
      key: "weitere",
      label: "Weitere Projekte",
      items: projects.filter((p) => !p.category).sort(byTitle),
    },
  ].filter((group) => group.items.length > 0);
}

// A plain, keyboard-operable directory of every project — the organised
// counterpart to the floating field, grouped the only way the current data
// actually supports (CLIENT.md: no category invented for the 20 projects
// nobody has confirmed one for). All groups start open so switching here
// really does show "all projects", not three collapsed accordions.
export const ProjectDirectory = forwardRef<
  HTMLHeadingElement,
  ProjectDirectoryProps
>(function ProjectDirectory({ projects }, ref) {
  const groups = groupProjects(projects);

  return (
    <div>
      <h2
        ref={ref}
        tabIndex={-1}
        className="text-xl font-semibold outline-none"
      >
        Alle Projekte
      </h2>
      <Accordion
        type="multiple"
        defaultValue={groups.map((group) => group.key)}
        className="mt-6"
      >
        {groups.map((group) => (
          <AccordionItem key={group.key} value={group.key}>
            <AccordionTrigger className="py-4 text-base">
              {group.label} ({group.items.length})
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projekte/${project.slug}`}
                      className="flex items-baseline justify-between gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted hover:text-brand focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      <span>{project.title}</span>
                      {(project.year || project.location) && (
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {[project.year, project.location]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
});
