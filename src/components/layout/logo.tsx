import { cn } from "@/lib/utils";

// A self-designed "OA" wordmark — bold, geometric, the O and A overlapping
// into a single ligature-like mark (echoing the reference site's brand
// without copying its actual logo file, which isn't ours to reuse).
// Decorative only: the enclosing <Link> carries the accessible name.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-8 items-center font-display text-3xl leading-none font-bold tracking-tighter text-brand select-none",
        className,
      )}
    >
      <span className="relative z-10">O</span>
      <span className="relative z-0 -ml-[0.22em]">A</span>
    </span>
  );
}
