import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// The single source of page width and horizontal padding (DESIGN.md §8:
// one grid, one container). Never set max-width or page gutters elsewhere.
// "wide" exists only for full-bleed editorial layouts (e.g. the project
// mosaic) that intentionally break out of the standard reading column.
const containerVariants = cva("mx-auto w-full px-6 sm:px-8 lg:px-10", {
  variants: {
    width: {
      default: "max-w-6xl",
      wide: "max-w-[100rem]",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

export function Container({
  className,
  width,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div className={cn(containerVariants({ width }), className)} {...props} />
  );
}
