import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SectionImage } from "@/types/content";

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  image?: SectionImage;
}

// Testimonials are evidence, not decoration (DESIGN.md §13): real names,
// real faces, specific outcomes — anonymous quotes hurt more than they help.
export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-xl border bg-card p-6 sm:p-8 lg:p-10",
        className,
      )}
    >
      <blockquote className="flex-1 text-lg leading-relaxed text-pretty">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {testimonial.image && (
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.image.src}
              alt={testimonial.image.alt}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          {testimonial.role && (
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
