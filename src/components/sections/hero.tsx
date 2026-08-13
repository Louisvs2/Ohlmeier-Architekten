import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { HeroVisual } from "@/components/sections/hero-visual";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Action, HeroMedia, SectionImage } from "@/types/content";

interface HeroActions {
  primary: Action;
  secondary?: Action;
}

interface HeroBaseProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: HeroActions;
  className?: string;
}

type HeroTone = "default" | "light";

// Refined eyebrow: a quiet bordered pill with a single brand-accent dot.
// One small piece of "jewelry" that signals a considered product (DESIGN.md §3).
export function HeroEyebrow({
  children,
  tone = "default",
}: {
  children: string;
  tone?: HeroTone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-sm font-medium shadow-sm backdrop-blur-[var(--glass-blur)]",
        tone === "light"
          ? "border-white/20 bg-white/5 text-white/80"
          : "border-border/60 bg-background/50 text-muted-foreground",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          tone === "light" ? "bg-white" : "bg-brand",
        )}
      />
      {children}
    </span>
  );
}

// One primary CTA per view (DESIGN.md §6): the secondary action stays quiet.
// Mobile-first — buttons stack full-width, then sit in a row from `sm`. The
// primary gains a premium trailing-arrow micro-interaction on hover.
export function HeroButtons({
  actions,
  align = "start",
  tone = "default",
  className,
}: {
  actions: HeroActions;
  align?: "start" | "center";
  tone?: HeroTone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center",
        align === "center" && "sm:justify-center",
        className,
      )}
    >
      <Magnetic className="w-full sm:w-auto">
        <Button
          asChild
          size="lg"
          className="group w-full shadow-[0_14px_44px_-16px_color-mix(in_oklch,var(--brand)_55%,transparent)] transition-shadow duration-300 hover:shadow-[0_20px_60px_-14px_color-mix(in_oklch,var(--brand)_70%,transparent)] sm:w-auto"
        >
          <Link href={actions.primary.href}>
            {actions.primary.label}
            <ArrowRight
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </Button>
      </Magnetic>
      {actions.secondary && (
        <Button
          asChild
          size="lg"
          variant={tone === "light" ? "outline" : "ghost"}
          className={cn(
            "w-full sm:w-auto",
            tone === "light" &&
              "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white",
          )}
        >
          <Link href={actions.secondary.href}>{actions.secondary.label}</Link>
        </Button>
      )}
    </div>
  );
}

/** Centered hero: the promise front and centre, nothing else competing. A
 *  warm gold aura sits behind the type — a single, static, performant flourish
 *  that lifts the stage from "text on a page" to "designed". */
export function HeroCentered({
  eyebrow,
  title,
  subtitle,
  actions,
  className,
}: HeroBaseProps) {
  return (
    <Section
      className={cn(
        "relative isolate overflow-hidden py-28 sm:py-36 lg:py-44",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-[14%] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl sm:h-[46rem] sm:w-[46rem]"
          style={{
            background:
              "radial-gradient(closest-side, var(--brand), transparent)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      <Container>
        <FadeInStagger className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
          {eyebrow && (
            <FadeIn>
              <HeroEyebrow>{eyebrow}</HeroEyebrow>
            </FadeIn>
          )}
          <FadeIn>
            <h1 className="text-5xl leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </FadeIn>
          {subtitle && (
            <FadeIn>
              <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                {subtitle}
              </p>
            </FadeIn>
          )}
          {actions && (
            <FadeIn className="pt-2">
              <HeroButtons actions={actions} align="center" />
            </FadeIn>
          )}
        </FadeInStagger>
      </Container>
    </Section>
  );
}

/**
 * Split hero: copy on one side, visual on the other. The visual — image,
 * video, or floating object — is the LCP element. Set `reversed` to place
 * the visual on the left. Part of the premium Hero System.
 */
export function HeroSplit({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  reversed = false,
  className,
}: HeroBaseProps & { media: HeroMedia; reversed?: boolean }) {
  return (
    <Section className={cn("py-24 sm:py-28 lg:py-32", className)}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeInStagger
            className={cn(
              "flex flex-col gap-6 sm:gap-7",
              reversed && "lg:order-2",
            )}
          >
            {eyebrow && (
              <FadeIn>
                <HeroEyebrow>{eyebrow}</HeroEyebrow>
              </FadeIn>
            )}
            <FadeIn>
              <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
                {title}
              </h1>
            </FadeIn>
            {subtitle && (
              <FadeIn>
                <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
                  {subtitle}
                </p>
              </FadeIn>
            )}
            {actions && (
              <FadeIn className="pt-2">
                <HeroButtons actions={actions} />
              </FadeIn>
            )}
          </FadeInStagger>
          <FadeIn className={cn(reversed && "lg:order-1")}>
            <HeroVisual
              media={media}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

/** Statement hero: a single large, left-aligned claim carried by type alone. */
export function HeroStatement({
  eyebrow,
  title,
  subtitle,
  actions,
  className,
}: HeroBaseProps) {
  return (
    <Section className={cn("py-28 sm:py-36 lg:py-44", className)}>
      <Container>
        <FadeInStagger className="flex max-w-4xl flex-col gap-6 sm:gap-8">
          {eyebrow && (
            <FadeIn>
              <HeroEyebrow>{eyebrow}</HeroEyebrow>
            </FadeIn>
          )}
          <FadeIn>
            <h1 className="text-[2.75rem] leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </FadeIn>
          {subtitle && (
            <FadeIn>
              <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                {subtitle}
              </p>
            </FadeIn>
          )}
          {actions && (
            <FadeIn className="pt-2">
              <HeroButtons actions={actions} />
            </FadeIn>
          )}
        </FadeInStagger>
      </Container>
    </Section>
  );
}

/** Full-width hero: a full-bleed background image with overlaid content.
 *  The image is the LCP element; a scrim guarantees text contrast on any
 *  image (DESIGN.md §12). Text is light-on-dark and therefore theme-neutral. */
export function HeroFullWidth({
  eyebrow,
  title,
  subtitle,
  actions,
  image,
  align = "center",
  className,
}: HeroBaseProps & { image: SectionImage; align?: "center" | "start" }) {
  const centered = align === "center";
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[75vh] items-center overflow-hidden py-28 sm:py-36 lg:min-h-[85vh]",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Even scrim for legible light text on any image (DESIGN.md §12). */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/55 to-black/70"
      />
      <Container>
        <FadeInStagger
          className={cn(
            "flex max-w-3xl flex-col gap-6 sm:gap-7",
            centered && "mx-auto items-center text-center",
          )}
        >
          {eyebrow && (
            <FadeIn>
              <HeroEyebrow tone="light">{eyebrow}</HeroEyebrow>
            </FadeIn>
          )}
          <FadeIn>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </FadeIn>
          {subtitle && (
            <FadeIn>
              <p className="max-w-2xl text-lg leading-relaxed text-pretty text-white/80 sm:text-xl">
                {subtitle}
              </p>
            </FadeIn>
          )}
          {actions && (
            <FadeIn className="pt-2">
              <HeroButtons
                actions={actions}
                align={centered ? "center" : "start"}
                tone="light"
              />
            </FadeIn>
          )}
        </FadeInStagger>
      </Container>
    </section>
  );
}

/**
 * Editorial hero: a magazine-grade, typography-led opener. A large headline
 * sits above a hairline rule, with the lead paragraph offset to the right and
 * the actions anchored left — an intentional asymmetry. An optional wide
 * visual band closes it. Part of the premium Hero System.
 */
export function HeroEditorial({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  className,
}: HeroBaseProps & { media?: HeroMedia }) {
  return (
    <Section className={cn("py-28 sm:py-36 lg:py-44", className)}>
      <Container>
        <FadeInStagger className="flex flex-col gap-8 sm:gap-10">
          {eyebrow && (
            <FadeIn>
              <HeroEyebrow>{eyebrow}</HeroEyebrow>
            </FadeIn>
          )}
          <FadeIn>
            <h1 className="max-w-4xl text-[2.75rem] leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </FadeIn>
          {(subtitle || actions) && (
            <FadeIn>
              <div className="grid gap-6 border-t pt-8 sm:gap-8 lg:grid-cols-12">
                {actions && (
                  <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
                    <HeroButtons actions={actions} />
                  </div>
                )}
                {subtitle && (
                  <p className="text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl lg:col-span-6 lg:col-start-7">
                    {subtitle}
                  </p>
                )}
              </div>
            </FadeIn>
          )}
          {media && (
            <FadeIn>
              <HeroVisual
                media={media}
                priority
                sizes="100vw"
                className="aspect-[16/9] lg:aspect-[21/9]"
              />
            </FadeIn>
          )}
        </FadeInStagger>
      </Container>
    </Section>
  );
}

/**
 * Premium object hero: centred copy above a large stage where the visual —
 * ideally a floating cut-out object — takes centre stage on a soft plinth
 * (Apple-grade product treatment). Part of the premium Hero System.
 */
export function HeroObject({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  className,
}: HeroBaseProps & { media: HeroMedia }) {
  return (
    <Section className={cn("py-24 sm:py-32 lg:py-36", className)}>
      <Container>
        <FadeInStagger className="flex flex-col items-center gap-6 text-center sm:gap-7">
          {eyebrow && (
            <FadeIn>
              <HeroEyebrow>{eyebrow}</HeroEyebrow>
            </FadeIn>
          )}
          <FadeIn>
            <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </FadeIn>
          {subtitle && (
            <FadeIn>
              <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                {subtitle}
              </p>
            </FadeIn>
          )}
          {actions && (
            <FadeIn className="pt-2">
              <HeroButtons actions={actions} align="center" />
            </FadeIn>
          )}
          <FadeIn className="mt-8 w-full max-w-4xl sm:mt-12">
            <HeroVisual
              media={media}
              priority
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="aspect-[16/10]"
            />
          </FadeIn>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
