"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import type { HeroMedia } from "@/types/content";

// One frame treatment for framed media: contained, hairline ring, muted
// placeholder — elevation is a whisper (DESIGN.md §7).
const FRAME =
  "relative overflow-hidden rounded-2xl bg-muted ring-1 ring-black/5 dark:ring-white/10";

interface HeroVisualProps {
  media: HeroMedia;
  /** Set on the hero's LCP media so next/image emits a preload. */
  priority?: boolean;
  sizes?: string;
  /** Override the aspect ratio per layout (e.g. a wide editorial band). */
  className?: string;
}

// The unified hero visual: a framed image, an autoplaying muted video, or a
// floating object on a premium stage. This is the only client leaf of the
// Hero System — video needs autoplay + reduced-motion gating. Image/object
// still server-render their markup, so an LCP image keeps its preload.
export function HeroVisual({
  media,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: HeroVisualProps) {
  const reduceMotion = useReducedMotion();

  if (media.type === "video") {
    return (
      <div className={cn(FRAME, "aspect-video", className)}>
        <video
          className="size-full object-cover"
          poster={media.poster}
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          aria-label={media.alt}
        >
          <source src={media.src} />
        </video>
      </div>
    );
  }

  if (media.type === "object") {
    // The object floats on a subtle stage with a soft shadow — the premium
    // "product on a plinth" treatment (Apple-grade), theme-aware.
    return (
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background ring-1 ring-black/5 dark:ring-white/10",
          className,
        )}
      >
        <div className="relative h-[76%] w-[76%]">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.22)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(FRAME, "aspect-[4/3]", className)}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
