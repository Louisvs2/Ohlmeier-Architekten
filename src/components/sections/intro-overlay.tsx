"use client";

import { useLayoutEffect, useState } from "react";

import { Logo } from "@/components/layout/logo";

const SESSION_KEY = "oa-intro-played";

type Phase = "initial" | "active" | "done";

// A one-time entrance for first-time landings on the homepage: the real
// mark draws itself in on a quiet paper-grid sheet, then the sheet closes
// like a camera iris to reveal the page underneath. Pure CSS clip-path
// transitions (GPU-composited, no animation library) sequenced with
// transition-delay — no per-frame JS. Plays once per browser session and
// never at all under prefers-reduced-motion; a real, keyboard-reachable
// skip button is always present rather than relying on "click anywhere".
//
// useLayoutEffect (not useEffect) is deliberate: it resolves before the
// browser paints, so a returning visitor within the same session never
// sees so much as a flash of the overlay — it simply never appears.
export function IntroOverlay() {
  const [phase, setPhase] = useState<Phase>("initial");

  useLayoutEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";
    if (reduced || alreadyPlayed) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    const raf = requestAnimationFrame(() => setPhase("active"));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === "done") return null;
  const active = phase === "active";

  return (
    <div
      role="presentation"
      onClick={() => setPhase("done")}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && e.propertyName === "clip-path") {
          setPhase("done");
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-[clip-path] duration-700 ease-in-out"
      style={{
        clipPath: active ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
        transitionDelay: active ? "1300ms" : "0ms",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <span
        className="inline-block h-24 transition-[clip-path] duration-700 ease-out sm:h-32"
        style={{
          clipPath: active ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transitionDelay: active ? "200ms" : "0ms",
        }}
      >
        <Logo className="h-full" />
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setPhase("done");
        }}
        className="absolute right-6 bottom-6 text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none sm:right-8 sm:bottom-8"
      >
        Überspringen
      </button>
    </div>
  );
}
