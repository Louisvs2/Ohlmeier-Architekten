"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import {
  FloatingProjects,
  type FloatingTile,
} from "@/components/sections/floating-projects";
import { ProjectDirectory } from "@/components/sections/project-directory";
import { Button, buttonVariants } from "@/components/ui/button";
import type { ProjectDetail } from "@/content/projects";
import { cn } from "@/lib/utils";

interface ProjectsExplorerProps {
  tiles: FloatingTile[];
  projects: ProjectDetail[];
}

// Toggles between the floating field and a plain, organised directory of
// every project. Owns the only piece of state here so floating-projects.tsx
// stays a generic, reusable section (CLAUDE.md §5) with no knowledge of
// this page-specific alternate view.
export function ProjectsExplorer({ tiles, projects }: ProjectsExplorerProps) {
  const [showList, setShowList] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listTriggerRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (showList) {
      headingRef.current?.focus();
    } else {
      listTriggerRef.current?.focus();
    }
  }, [showList]);

  if (showList) {
    return (
      <Container>
        <FadeInStagger>
          <FadeIn className="mb-6 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowList(false)}
            >
              Zur freien Ansicht
            </Button>
          </FadeIn>
          <FadeIn>
            <ProjectDirectory ref={headingRef} projects={projects} />
          </FadeIn>
        </FadeInStagger>
      </Container>
    );
  }

  return (
    <div>
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Zum Erkunden ziehen — klicken oder tippen öffnet das Projekt.
      </p>
      <div className="relative">
        <FloatingProjects
          tiles={tiles}
          exiting={isExiting}
          onExitComplete={() => {
            setShowList(true);
            setIsExiting(false);
          }}
        />
        {!isExiting && (
          <button
            ref={listTriggerRef}
            type="button"
            onClick={() => setIsExiting(true)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shadow-lg",
            )}
          >
            Projekte auflisten
          </button>
        )}
      </div>
    </div>
  );
}
