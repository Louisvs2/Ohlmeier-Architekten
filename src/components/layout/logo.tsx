import { cn } from "@/lib/utils";

// A self-designed "OA" mark in the Bauhaus vocabulary: two flat primary
// shapes — a disc and a square, the two forms the movement built its whole
// alphabet from — each carrying one letter. No gradients, no glow, no
// overlap trick; just plain geometry and confident colour blocking, echoing
// the reference site's brand without copying its actual logo file (which
// isn't ours to reuse). Decorative only: the enclosing <Link> carries the
// accessible name.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-8 items-center gap-[0.08em] font-display text-3xl leading-none font-bold select-none",
        className,
      )}
    >
      <span className="flex aspect-square h-full items-center justify-center rounded-full bg-foreground text-[0.5em] text-background">
        O
      </span>
      <span className="flex aspect-square h-full items-center justify-center bg-brand text-[0.5em] text-brand-foreground">
        A
      </span>
    </span>
  );
}
