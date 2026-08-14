"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface BackgroundRippleEffectProps {
  className?: string;
  /** Target cell width in px — the actual column count is derived from the
   *  container's measured width so the grid always fills it edge to edge. */
  cellSize?: number;
  rows?: number;
}

const DEFAULT_COLS = 16;
const MIN_COLS = 6;
const MAX_COLS = 48;
const RIPPLE_DURATION = 900;
const RIPPLE_STEP_DELAY = 55;
const RIPPLE_MAX_DELAY = 650;

/**
 * A quiet grid of cells behind hero content: the hovered row picks up a
 * faint highlight, and clicking a cell sends a ripple of brightness pulses
 * outward by Chebyshev distance — a nod to a blueprint grid, in the brand's
 * own orange. Hand-rolled instead of a motion library: with a few hundred
 * simultaneously-animatable cells, writing the animation straight onto DOM
 * refs (the same approach floating-projects.tsx uses for its tile field)
 * stays smooth where per-cell React state or `motion` components would not.
 * Purely decorative — aria-hidden, no keyboard/focus surface of its own.
 */
export function BackgroundRippleEffect({
  className,
  cellSize = 32,
  rows = 6,
}: BackgroundRippleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cols, setCols] = useState(DEFAULT_COLS);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    function measure() {
      const width = container!.clientWidth;
      const next = Math.round(width / cellSize);
      setCols(Math.min(MAX_COLS, Math.max(MIN_COLS, next)));
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [cellSize]);

  function triggerRipple(originRow: number, originCol: number) {
    cellRefs.current.forEach((el, i) => {
      if (!el) return;
      const row = Math.floor(i / cols);
      const col = i % cols;
      const distance = Math.max(
        Math.abs(row - originRow),
        Math.abs(col - originCol),
      );
      const delay = Math.min(distance * RIPPLE_STEP_DELAY, RIPPLE_MAX_DELAY);
      // Reset first so a repeated click restarts the animation instead of
      // being ignored (identical inline `animation` values don't retrigger).
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = `cell-ripple ${RIPPLE_DURATION}ms ease-out ${delay}ms 1`;
    });
  }

  const cellCount = cols * rows;

  return (
    <div
      ref={containerRef}
      data-slot="background-ripple-effect"
      aria-hidden="true"
      className={cn("grid h-full w-full", className)}
      style={
        {
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          "--cell-ripple-from": 0.05,
          "--cell-ripple-peak": 0.45,
        } as React.CSSProperties
      }
      onMouseLeave={() => setHoveredRow(null)}
    >
      {Array.from({ length: cellCount }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <div
            key={i}
            ref={(el) => {
              cellRefs.current[i] = el;
            }}
            onMouseEnter={() => setHoveredRow(row)}
            onClick={() => triggerRipple(row, col)}
            className={cn(
              "border-t border-l border-brand bg-brand/[0.55] opacity-[0.05] transition-opacity duration-300",
              col === cols - 1 && "border-r",
              row === rows - 1 && "border-b",
              hoveredRow === row && "opacity-[0.14]",
            )}
          />
        );
      })}
    </div>
  );
}
