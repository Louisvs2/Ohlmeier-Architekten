import { cn } from "@/lib/utils";

// The real "OA" brand mark (supplied by the client, extracted from their own
// site), recoloured entirely in CSS: the source PNG is pre-processed into a
// pure alpha mask (public/images/logo-mask.png — shape opaque, background
// transparent, no baked-in colour) and painted with the live --brand token
// via mask-image, so it always tracks the active look instead of a
// hand-picked hex. Decorative only: the enclosing <Link> carries the
// accessible name. Sized by height — pass an `h-*` class and width follows
// automatically from the mark's own aspect ratio.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block h-8 bg-brand select-none", className)}
      style={{
        aspectRatio: "1029 / 521",
        WebkitMaskImage: "url(/images/logo-mask.png)",
        maskImage: "url(/images/logo-mask.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
