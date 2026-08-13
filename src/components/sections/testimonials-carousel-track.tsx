"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  TestimonialCard,
  type Testimonial,
} from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";

// CSS scroll-snap instead of a carousel library: native touch behavior,
// no JavaScript on the critical path, and the buttons are the only
// enhancement. Smooth scrolling is skipped under reduced motion.
export function TestimonialsCarouselTrack({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.offsetWidth : track.clientWidth;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollBy({
      left: direction * amount,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <ul
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto px-6 pb-2 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.name}
            className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31.5%]"
          >
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Zurück"
          onClick={() => scrollByCard(-1)}
        >
          <ArrowLeft aria-hidden />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Weiter"
          onClick={() => scrollByCard(1)}
        >
          <ArrowRight aria-hidden />
        </Button>
      </div>
    </div>
  );
}
