"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SectionImage } from "@/types/content";

import {
  materialPhotos,
  materialTreatments,
  type MosaicMaterial,
} from "@/lib/materials";

// Every project tile drifts slowly through the space, pushes away from the
// pointer like water when you swipe through, and can be grabbed and shoved
// around. Deliberately built WITHOUT a motion library — the idle drift is a
// plain CSS animation (compositor-only, free), and the water-repel + drag
// are driven by a single shared requestAnimationFrame loop that writes
// transforms straight to the DOM via refs (no React re-renders per frame).
// This mirrors the hand-rolled, direct-style-mutation pattern already used
// by `magnetic.tsx` elsewhere in this codebase, and is what makes 30+
// simultaneously-animated tiles stay smooth.
//
// Always renders this same tile field (never swaps to a different DOM tree
// for prefers-reduced-motion — that used to cause a visible "pop" on every
// load while the media query resolved). Reduced-motion users get the idle
// CSS drift killed for free by the global stylesheet rule, and the JS
// water-repel is skipped below; dragging still works either way.

export type { MosaicMaterial };

export interface FloatingTile {
  title: string;
  meta?: string;
  href: string;
  material: MosaicMaterial;
  /** A real project photo, when available — takes priority over the
   *  material texture treatment. */
  image?: SectionImage;
}

interface FloatingProjectsProps {
  tiles: FloatingTile[];
  className?: string;
  /** Grid columns the layout is seeded from — fewer columns gives each tile
   *  more room, which matters when there are only a handful of tiles (a
   *  homepage teaser) versus a full project list. */
  cols?: number;
  /** Smallest/largest a plain (photo-less, material-texture) tile can be. */
  sizeMin?: number;
  sizeMax?: number;
  /** Floor for tiles that carry a real photo — they get to be bigger since
   *  they have the best content to show off. */
  photoSizeMin?: number;
  /** When true, every tile flies outward from the field's centre and fades
   *  out — a one-shot exit, not a toggleable state. Meant for a parent that
   *  wants to swap this field for something else once the tiles are gone. */
  exiting?: boolean;
  /** Fires once the exit (or, under reduced motion, immediately) has
   *  finished, so the parent knows it's safe to unmount this field. */
  onExitComplete?: () => void;
}

function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const DEFAULT_COLS = 6;
const DEFAULT_SIZE_MIN = 84;
const DEFAULT_SIZE_MAX = 264;
const DEFAULT_PHOTO_SIZE_MIN = 150;
const REPEL_RADIUS = 210;
const REPEL_STRENGTH = 32;
const NEIGHBOR_RADIUS = 220;
const EASE = 0.09;
const DRAG_THRESHOLD = 4;
const EXIT_DURATION = 550;
const EXIT_MAX_STAGGER = 260;
const EXIT_STAGGER_STEP = 12;

interface TileLayout extends FloatingTile {
  width: number;
  height: number;
  leftPct: number;
  topPct: number;
  floatDx: number;
  floatDy: number;
  duration: number;
  delay: number;
  rotA: number;
  rotB: number;
  rotC: number;
}

// Width and height are drawn independently (not from one "size" applied to
// both), so tiles land on every kind of rectangle — tall portraits, wide
// landscapes, the occasional square — instead of always being square.
// Tiles with a real photo get a higher floor on both axes since they have
// the best content to show off.
function computeLayout(
  tiles: FloatingTile[],
  cols: number,
  sizeMin: number,
  sizeMax: number,
  photoSizeMin: number,
): TileLayout[] {
  const rows = Math.max(1, Math.ceil(tiles.length / cols));
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  return tiles.map((tile, i) => {
    const rand = seededRandom(i * 97 + 13);
    const col = i % cols;
    const row = Math.floor(i / cols);
    const floor = tile.image ? photoSizeMin : sizeMin;
    return {
      ...tile,
      width: Math.round(floor + rand() * (sizeMax - floor)),
      height: Math.round(floor + rand() * (sizeMax - floor)),
      leftPct: col * cellW + cellW / 2 + (rand() - 0.5) * cellW * 0.7,
      topPct: row * cellH + cellH / 2 + (rand() - 0.5) * cellH * 0.7,
      floatDx: 10 + rand() * 16,
      floatDy: 14 + rand() * 18,
      duration: 9 + rand() * 7,
      delay: rand() * 4,
      rotA: Math.round((rand() - 0.5) * 14),
      rotB: Math.round((rand() - 0.5) * 14),
      rotC: Math.round((rand() - 0.5) * 14),
    };
  });
}

interface TileState {
  basePxX: number;
  basePxY: number;
  settledX: number;
  settledY: number;
  repelX: number;
  repelY: number;
  targetRepelX: number;
  targetRepelY: number;
  dragX: number;
  dragY: number;
  dragging: boolean;
}

function createState(): TileState {
  return {
    basePxX: 0,
    basePxY: 0,
    settledX: 0,
    settledY: 0,
    repelX: 0,
    repelY: 0,
    targetRepelX: 0,
    targetRepelY: 0,
    dragX: 0,
    dragY: 0,
    dragging: false,
  };
}

// A ref (not state) on purpose: this only gates the JS water-repel inside
// the rAF loop below, so flipping it never triggers a re-render or swaps
// out the tile tree — it just quietly stops nudging tiles toward the
// pointer for users who asked for less motion.
function useReducedMotionRef() {
  const reducedRef = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      reducedRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reducedRef;
}

export function FloatingProjects({
  tiles,
  className,
  cols = DEFAULT_COLS,
  sizeMin = DEFAULT_SIZE_MIN,
  sizeMax = DEFAULT_SIZE_MAX,
  photoSizeMin = DEFAULT_PHOTO_SIZE_MIN,
  exiting = false,
  onExitComplete,
}: FloatingProjectsProps) {
  const reducedMotionRef = useReducedMotionRef();
  const containerRef = useRef<HTMLDivElement>(null);
  const tileElRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const layout = useMemo(
    () => computeLayout(tiles, cols, sizeMin, sizeMax, photoSizeMin),
    [tiles, cols, sizeMin, sizeMax, photoSizeMin],
  );
  const statesRef = useRef<TileState[]>([]);
  if (statesRef.current.length !== layout.length) {
    statesRef.current = layout.map(() => createState());
  }

  const dragIndexRef = useRef<number | null>(null);
  const dragOriginRef = useRef<{ x: number; y: number } | null>(null);
  const dragMovedRef = useRef(false);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const neighborsRef = useRef<{ j: number; weight: number }[][]>([]);
  const exitingRef = useRef(false);
  const wasExitingRef = useRef(false);
  const onExitCompleteRef = useRef(onExitComplete);
  onExitCompleteRef.current = onExitComplete;

  // A one-shot burst, not a continuous state: on the false→true edge, every
  // tile flies outward from the field's centre (direction taken straight
  // from its own seeded grid position, so the burst reads as "the field
  // scatters" rather than random jitter) and fades out. The shared rAF loop
  // below stops writing transforms for the duration (via `exitingRef`) so
  // it can't fight the CSS transition doing the actual animating.
  useEffect(() => {
    exitingRef.current = exiting;
    if (!exiting || wasExitingRef.current) {
      wasExitingRef.current = exiting;
      return;
    }
    wasExitingRef.current = true;

    if (reducedMotionRef.current) {
      onExitCompleteRef.current?.();
      return;
    }

    layout.forEach((tile, i) => {
      const el = tileElRefs.current[i];
      if (!el) return;
      const dx = tile.leftPct - 50;
      const dy = tile.topPct - 50;
      const len = Math.hypot(dx, dy) || 1;
      const distance = 650 + (i % 5) * 40;
      const flyX = (dx / len) * distance;
      const flyY = (dy / len) * distance;
      const rot = (dx >= 0 ? 1 : -1) * (18 + (i % 6) * 5);
      const delay = Math.min(i * EXIT_STAGGER_STEP, EXIT_MAX_STAGGER);
      el.style.transition = `transform ${EXIT_DURATION}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, opacity ${EXIT_DURATION - 130}ms ease-in ${delay}ms`;
      el.style.transform = `translate(${flyX.toFixed(0)}px, ${flyY.toFixed(0)}px) rotate(${rot}deg) scale(0.85)`;
      el.style.opacity = "0";
    });

    const timer = setTimeout(
      () => onExitCompleteRef.current?.(),
      EXIT_DURATION + EXIT_MAX_STAGGER + 60,
    );
    return () => clearTimeout(timer);
  }, [exiting, layout, reducedMotionRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function measure() {
      const rect = container!.getBoundingClientRect();
      layout.forEach((tile, i) => {
        const st = statesRef.current[i];
        st.basePxX = (tile.leftPct / 100) * rect.width;
        st.basePxY = (tile.topPct / 100) * rect.height;
      });
      // A tile's neighbours (by base position) so the water-repel below
      // spreads across a connected patch of the field instead of each tile
      // reacting to the pointer in isolation — recomputed on resize since
      // base positions shift with the container.
      const lists: { j: number; weight: number }[][] = layout.map(() => []);
      for (let i = 0; i < layout.length; i++) {
        for (let j = i + 1; j < layout.length; j++) {
          const dx =
            statesRef.current[i].basePxX - statesRef.current[j].basePxX;
          const dy =
            statesRef.current[i].basePxY - statesRef.current[j].basePxY;
          const dist = Math.hypot(dx, dy);
          if (dist < NEIGHBOR_RADIUS) {
            const t = 1 - dist / NEIGHBOR_RADIUS;
            const weight = t * t;
            lists[i].push({ j, weight });
            lists[j].push({ j: i, weight });
          }
        }
      }
      neighborsRef.current = lists;
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      const i = dragIndexRef.current;
      if (i !== null && dragOriginRef.current) {
        const st = statesRef.current[i];
        st.dragX = e.clientX - dragOriginRef.current.x;
        st.dragY = e.clientY - dragOriginRef.current.y;
        if (Math.hypot(st.dragX, st.dragY) > DRAG_THRESHOLD) {
          dragMovedRef.current = true;
        }
      }
    }
    function onPointerLeave() {
      pointerRef.current = null;
    }
    function endDrag() {
      const i = dragIndexRef.current;
      if (i === null) return;
      const st = statesRef.current[i];
      st.settledX += st.dragX;
      st.settledY += st.dragY;
      st.basePxX += st.dragX;
      st.basePxY += st.dragY;
      st.dragX = 0;
      st.dragY = 0;
      st.dragging = false;
      dragIndexRef.current = null;
      dragOriginRef.current = null;
    }

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    const rawX = new Array<number>(layout.length).fill(0);
    const rawY = new Array<number>(layout.length).fill(0);

    let raf = requestAnimationFrame(tick);
    function tick() {
      if (exitingRef.current) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const pointer = pointerRef.current;

      // Pass 1: how strongly the pointer alone displaces each tile. A tile
      // directly under the pointer barely moves — like water parting around
      // a hand rather than fleeing from directly beneath it — so a tile
      // stays put and clickable exactly where you're aiming. The push peaks
      // a little further out and fades back to nothing at the radius edge
      // (a bump, not a spike at the centre).
      layout.forEach((tile, i) => {
        const st = statesRef.current[i];
        if (st.dragging || !pointer || reducedMotionRef.current) {
          rawX[i] = 0;
          rawY[i] = 0;
          return;
        }
        const dx = st.basePxX + st.settledX - pointer.x;
        const dy = st.basePxY + st.settledY - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS && dist > 0.001) {
          const t = dist / REPEL_RADIUS;
          const strength = Math.sin(Math.PI * t) * REPEL_STRENGTH;
          rawX[i] = (dx / dist) * strength;
          rawY[i] = (dy / dist) * strength;
        } else {
          rawX[i] = 0;
          rawY[i] = 0;
        }
      });

      // Pass 2: blend each tile's own pull with its neighbours' — this is
      // what turns "each tile dodges the cursor" into "the whole patch of
      // tiles moves together like a sheet of water being brushed through".
      layout.forEach((tile, i) => {
        const st = statesRef.current[i];
        if (st.dragging) return;
        const neighbors = neighborsRef.current[i] ?? [];
        let sumX = rawX[i];
        let sumY = rawY[i];
        let totalWeight = 1;
        for (const { j, weight } of neighbors) {
          sumX += rawX[j] * weight;
          sumY += rawY[j] * weight;
          totalWeight += weight;
        }
        st.targetRepelX = sumX / totalWeight;
        st.targetRepelY = sumY / totalWeight;
      });

      // Pass 3: ease everyone toward their (blended) target and paint.
      // The slow EASE is what keeps this calm instead of twitchy.
      layout.forEach((tile, i) => {
        const st = statesRef.current[i];
        st.repelX += (st.targetRepelX - st.repelX) * EASE;
        st.repelY += (st.targetRepelY - st.repelY) * EASE;

        const el = tileElRefs.current[i];
        if (el) {
          const tx = st.settledX + st.repelX + st.dragX;
          const ty = st.settledY + st.repelY + st.dragY;
          el.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px)`;
        }
      });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [layout, reducedMotionRef]);

  const rows = Math.max(1, Math.ceil(tiles.length / cols));
  const rowHeight = Math.max(200, sizeMax * 0.85);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height: Math.max(560, rows * rowHeight) }}
    >
      {layout.map((tile, i) => (
        <div
          key={tile.href}
          className="absolute"
          style={{
            top: `${tile.topPct}%`,
            left: `${tile.leftPct}%`,
            width: tile.width,
            height: tile.height,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="h-full w-full"
            style={
              {
                animation: `float-drift ${tile.duration}s ease-in-out ${tile.delay}s infinite`,
                "--float-dx": `${tile.floatDx}px`,
                "--float-dy": `${tile.floatDy}px`,
                "--float-rot-a": `${tile.rotA}deg`,
                "--float-rot-b": `${tile.rotB}deg`,
                "--float-rot-c": `${tile.rotC}deg`,
              } as React.CSSProperties
            }
          >
            <a
              ref={(el) => {
                tileElRefs.current[i] = el;
              }}
              href={tile.href}
              draggable={false}
              style={{ touchAction: "none" }}
              className="group relative block h-full w-full cursor-grab overflow-hidden transition-shadow duration-200 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:cursor-grabbing"
              onPointerDown={(e) => {
                dragIndexRef.current = i;
                dragOriginRef.current = { x: e.clientX, y: e.clientY };
                dragMovedRef.current = false;
                statesRef.current[i].dragging = true;
              }}
              onDragStart={(e) => e.preventDefault()}
              onClick={(e) => {
                if (dragMovedRef.current) e.preventDefault();
              }}
            >
              {(() => {
                const photo = tile.image ?? materialPhotos[tile.material];
                return photo ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={cn(
                      "absolute inset-0",
                      materialTreatments[tile.material],
                    )}
                  />
                );
              })()}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                <p className="text-sm font-medium text-white">{tile.title}</p>
                {tile.meta && (
                  <p className="text-xs text-white/70">{tile.meta}</p>
                )}
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
