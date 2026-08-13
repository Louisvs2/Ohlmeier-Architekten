"use client";

import { createContext, useContext } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

// Motion language of the template (DESIGN.md §10–11): small distances,
// short durations, ease-out, animate once on entry, never re-animate.
// With prefers-reduced-motion the movement is dropped and only a fade runs.
// LazyMotion + m keeps the motion runtime out of the main bundle.

const StaggerContext = createContext(false);

const viewport = { once: true } as const;

// Expo-out curve — the fast-in, softly-settling reveal that reads as
// premium (Linear/Vercel). Paired with a short distance so it never
// distracts from the content it introduces.
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function FadeIn(props: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();
  const isInsideStagger = useContext(StaggerContext);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={{
          hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: EASE_OUT },
          },
        }}
        // Inside a FadeInStagger the parent orchestrates the variants;
        // standalone, the element animates itself when entering the viewport.
        {...(isInsideStagger
          ? {}
          : { initial: "hidden", whileInView: "visible", viewport })}
        {...props}
      />
    </LazyMotion>
  );
}

export function FadeInStagger({
  fast = false,
  ...props
}: HTMLMotionProps<"div"> & { fast?: boolean }) {
  return (
    <StaggerContext.Provider value={true}>
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            visible: {
              transition: { staggerChildren: fast ? 0.05 : 0.09 },
            },
          }}
          {...props}
        />
      </LazyMotion>
    </StaggerContext.Provider>
  );
}
