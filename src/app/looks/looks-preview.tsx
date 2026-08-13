"use client";

import { useEffect, useState } from "react";

import { ServiceCards } from "@/components/sections/features";
import { HeroCentered } from "@/components/sections/hero";
import { looks, lookDescriptions, type LookName } from "@/config/theme";
import { home } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Internal preview: flip through every look on the real hero + cards. It
 * overrides `data-look` on <html> while mounted and restores it on leave, so
 * nothing about the shipped site changes. Delete src/app/looks once you've
 * picked a look for a client.
 */
export function LooksPreview() {
  const [look, setLook] = useState<LookName>("glass");

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute("data-look");
    root.setAttribute("data-look", look);
    return () => {
      if (previous) root.setAttribute("data-look", previous);
    };
  }, [look]);

  return (
    <div>
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3">
          <span className="mr-1 text-sm font-medium text-muted-foreground">
            Look
          </span>
          {looks.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setLook(name)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition",
                look === name
                  ? "border-brand bg-brand/10 text-brand-strong"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {name}
            </button>
          ))}
        </div>
        <p className="mx-auto max-w-5xl px-4 pb-3 text-sm text-muted-foreground">
          {lookDescriptions[look]}
        </p>
      </div>

      <HeroCentered {...home.hero} />
      <ServiceCards
        intro={home.services.intro}
        items={home.services.items}
        background="muted"
      />
    </div>
  );
}
