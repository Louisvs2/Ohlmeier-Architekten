"use client";

import { useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { LazyMotion, domMax, m, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

import { materialTreatments, type MosaicMaterial } from "./project-mosaic";

// A playful alternative to ProjectMosaic's calm editorial grid: every
// project tile drifts slowly through the space and can be dragged around
// with the mouse or a finger. Positions are seeded (not Math.random()) so
// server and client render the same scattered layout — no hydration
// mismatch, no "mounted" gate needed. Real <a href> tiles throughout, so
// links stay crawlable and keyboard/Enter-activatable even though pointer
// drags are intercepted. prefers-reduced-motion drops straight to a plain,
// static grid — nothing here is the only way to reach a project.

export interface FloatingTile {
  title: string;
  meta?: string;
  href: string;
  material: MosaicMaterial;
}

interface FloatingProjectsProps {
  tiles: FloatingTile[];
  className?: string;
}

function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const COLS = 6;

function useLayout(tiles: FloatingTile[]) {
  return useMemo(() => {
    const rows = Math.max(1, Math.ceil(tiles.length / COLS));
    const cellW = 100 / COLS;
    const cellH = 100 / rows;
    return {
      rows,
      items: tiles.map((tile, i) => {
        const rand = seededRandom(i * 97 + 13);
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        return {
          ...tile,
          size: 132 + Math.round(rand() * 70),
          leftPct: col * cellW + cellW / 2 + (rand() - 0.5) * cellW * 0.7,
          topPct: row * cellH + cellH / 2 + (rand() - 0.5) * cellH * 0.7,
          rotate: Math.round((rand() - 0.5) * 16),
          duration: 9 + rand() * 7,
          delay: rand() * 4,
          driftX: 10 + rand() * 14,
          driftY: 14 + rand() * 16,
        };
      }),
    };
  }, [tiles]);
}

function FloatingTile({
  tile,
  containerRef,
}: {
  tile: ReturnType<typeof useLayout>["items"][number];
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  // Framer's `drag` gesture swallows native click events unreliably, so
  // navigation goes through its own `onTap` gesture (which already
  // disambiguates a tap from a drag) instead of onClick. `pointerActiveRef`
  // then tells onClick whether *this* click followed a pointer gesture
  // (already handled by onTap → suppress the native href navigation) or
  // came from the keyboard (Enter/Space never fires onPointerDown → let the
  // native anchor navigation run, so keyboard users keep working).
  const pointerActiveRef = useRef(false);
  const router = useRouter();

  return (
    <div
      className="absolute"
      style={{
        top: `${tile.topPct}%`,
        left: `${tile.leftPct}%`,
        width: tile.size,
        height: tile.size,
        transform: "translate(-50%, -50%)",
      }}
    >
      <m.div
        className="h-full w-full"
        animate={{
          x: [0, tile.driftX, -tile.driftX * 0.6, 0],
          y: [0, -tile.driftY, tile.driftY * 0.5, 0],
          rotate: [tile.rotate, tile.rotate + 4, tile.rotate - 3, tile.rotate],
        }}
        transition={{
          duration: tile.duration,
          delay: tile.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <m.a
          href={tile.href}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          dragMomentum
          whileDrag={{ scale: 1.08, zIndex: 30, cursor: "grabbing" }}
          style={{ touchAction: "none" }}
          onPointerDown={() => {
            pointerActiveRef.current = true;
          }}
          onTap={() => {
            router.push(tile.href);
          }}
          onClick={(e) => {
            if (pointerActiveRef.current) e.preventDefault();
            pointerActiveRef.current = false;
          }}
          className="group relative block h-full w-full cursor-grab overflow-hidden shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <div
            className={cn(
              "absolute inset-0",
              materialTreatments[tile.material],
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
            <p className="text-sm font-medium text-white">{tile.title}</p>
            {tile.meta && <p className="text-xs text-white/70">{tile.meta}</p>}
          </div>
        </m.a>
      </m.div>
    </div>
  );
}

export function FloatingProjects({ tiles, className }: FloatingProjectsProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { rows, items } = useLayout(tiles);

  if (reduceMotion) {
    return (
      <ul
        className={cn(
          "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
          className,
        )}
      >
        {tiles.map((tile) => (
          <li key={tile.href}>
            <a
              href={tile.href}
              className={cn(
                "relative block aspect-square overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                materialTreatments[tile.material],
              )}
            >
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium text-white">
                {tile.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <LazyMotion features={domMax} strict>
      <div
        ref={containerRef}
        className={cn("relative w-full overflow-hidden", className)}
        style={{ height: Math.max(560, rows * 200) }}
      >
        {items.map((item) => (
          <FloatingTile
            key={item.href}
            tile={item}
            containerRef={containerRef}
          />
        ))}
      </div>
    </LazyMotion>
  );
}
