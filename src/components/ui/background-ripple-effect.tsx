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

/**
 * A quiet grid of cells behind hero content: the hovered row picks up a
 * faint highlight — a nod to a blueprint grid, in the brand's own orange.
 * Purely decorative — aria-hidden, no keyboard/focus surface of its own.
 */
export function BackgroundRippleEffect({
  className,
  cellSize = 32,
  rows = 6,
}: BackgroundRippleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const cellCount = cols * rows;

  return (
    <div
      ref={containerRef}
      data-slot="background-ripple-effect"
      aria-hidden="true"
      className={cn("grid h-full w-full", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      onMouseLeave={() => setHoveredRow(null)}
    >
      {Array.from({ length: cellCount }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <div
            key={i}
            onMouseEnter={() => setHoveredRow(row)}
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
