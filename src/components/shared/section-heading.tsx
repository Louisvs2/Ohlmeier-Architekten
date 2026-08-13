import { cn } from "@/lib/utils";

interface SectionHeadingProps extends Omit<
  React.ComponentProps<"div">,
  "title"
> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  // Level of the rendered heading — the visual style stays identical so
  // the document outline can be correct without breaking the design.
  as?: "h1" | "h2" | "h3";
}

// The standard section opener (DESIGN.md §3): eyebrow → headline → subline.
// Every section that introduces content starts with this component so the
// typographic hierarchy stays identical across the whole site.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold tracking-wider text-brand-strong uppercase">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
