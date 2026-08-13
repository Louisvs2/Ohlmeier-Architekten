import { cn } from "@/lib/utils";

// The single source of page width and horizontal padding (DESIGN.md §8:
// one grid, one container). Never set max-width or page gutters elsewhere.
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
