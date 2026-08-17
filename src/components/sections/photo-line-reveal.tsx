"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";

import type { SectionImage } from "@/types/content";

interface PhotoLineRevealProps {
  image: SectionImage;
}

// A real project photo that quietly desaturates and resolves into its own
// technical line drawing as it scrolls through the middle of the viewport,
// then returns to the photograph as it passes — the same building read two
// ways, the way an architect moves between a photo and a drawing of it.
// The "drawing" is a live SVG edge-detection filter on the actual photo
// (no separate traced asset), tinted with the live --brand token so it
// always matches the current look. Driven by scroll position via a single
// rAF loop writing straight onto refs (no per-frame React state), the same
// pattern already used for the floating project field and the hero grid.
// Never runs under prefers-reduced-motion — the photo simply stays a photo.
export function PhotoLineReveal({ image }: PhotoLineRevealProps) {
  const filterId = `line-reveal-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    let raf = requestAnimationFrame(tick);
    function tick() {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const maxDistance = viewportHeight / 2 + rect.height / 2;
        const t =
          1 -
          Math.min(Math.abs(elementCenter - viewportCenter) / maxDistance, 1);
        if (photoRef.current) {
          photoRef.current.style.filter = `grayscale(${t})`;
        }
        if (lineRef.current) {
          lineRef.current.style.opacity = String(t);
        }
      }
      raf = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden"
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="saturate" values="0" result="gray" />
            <feConvolveMatrix
              in="gray"
              order="3 3"
              kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1"
              divisor={1}
              bias={0}
              edgeMode="duplicate"
              preserveAlpha="true"
              result="edges"
            />
            <feComponentTransfer in="edges" result="edgesBoost">
              <feFuncR type="gamma" exponent={0.6} amplitude={1} offset={0} />
              <feFuncG type="gamma" exponent={0.6} amplitude={1} offset={0} />
              <feFuncB type="gamma" exponent={0.6} amplitude={1} offset={0} />
            </feComponentTransfer>
            <feColorMatrix
              in="edgesBoost"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.33 0.33 0.33 0 0"
              result="edgeAlpha"
            />
            <feFlood
              style={{ floodColor: "var(--brand)" }}
              result="orangeFlood"
            />
            <feComposite in="orangeFlood" in2="edgeAlpha" operator="in" />
          </filter>
        </defs>
      </svg>
      <div ref={photoRef} className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 80rem, 100vw"
          className="object-cover"
        />
      </div>
      <div
        ref={lineRef}
        aria-hidden
        className="absolute inset-0 opacity-0"
        style={{ filter: `url(#${filterId})` }}
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 80rem, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
