import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PlanCardProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * A single sheet from a drawing set: hairline border, flat paper surface,
 * square corners — no blur, no glow, no gradient sheen. The whole card is
 * the link; the only motion on hover is the border picking up the brand
 * colour, deliberately quiet so the numbered marker and copy carry it.
 */
export function PlanCard({ href, className, children }: PlanCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col border border-border/70 bg-background p-6 transition-colors duration-200 outline-none sm:p-8",
        "hover:border-brand focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className,
      )}
    >
      {children}
    </Link>
  );
}
