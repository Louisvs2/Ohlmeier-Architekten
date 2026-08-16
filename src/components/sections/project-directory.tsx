import { ArrowUpRight } from "lucide-react";
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
      <p className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-strong uppercase">
        <span aria-hidden className="inline-block size-2 bg-brand" />
        Verzeichnis
      </p>
      <h2
        ref={ref}
        tabIndex={-1}
        className="mt-3 text-3xl leading-[1.1] font-semibold tracking-tight text-balance outline-none sm:text-4xl"
      >
        Alle Projekte
      </h2>
      <Accordion
        type="multiple"
        defaultValue={groups.map((group) => group.key)}
        className="mt-10 border-t border-border/70"
      >
        {groups.map((group) => (
          <AccordionItem key={group.key} value={group.key}>
            <AccordionTrigger className="py-5 text-lg font-semibold hover:no-underline">
              <span className="flex items-center gap-3">
                <span aria-hidden className="inline-block size-2 bg-brand" />
                {group.label}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((project) => (
                  <li key={project.slug} className="border-b border-border/50">
                    <Link
                      href={`/projekte/${project.slug}`}
                      className="group flex items-start justify-between gap-3 rounded-sm py-3 text-sm transition-colors hover:text-brand focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      <span className="min-w-0">{project.title}</span>
                      <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                        {(project.year || project.location) && (
                          <span>
                            {[project.year, project.location]
                              .filter(Boolean)
                              .join(" · ")}
                          </span>
                        )}
                        <ArrowUpRight
                          aria-hidden
                          className="size-3.5 shrink-0 text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </span>
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
