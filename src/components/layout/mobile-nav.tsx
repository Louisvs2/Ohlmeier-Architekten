"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: NavItem[];
  cta: NavItem;
  className?: string;
}

// The only client leaf of the header: a sheet-based drawer for small
// viewports. Receives its links via props — it never reads config itself,
// so it stays reusable wherever a drawer navigation is needed.
export function MobileNav({ items, cta, className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", className)}
        >
          <Menu className="size-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menü</SheetTitle>
          <SheetDescription className="sr-only">
            Hauptnavigation
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Hauptnavigation" className="flex flex-col px-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b py-4 text-lg font-medium text-foreground transition-colors last:border-b-0 hover:text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-2 px-4">
          <Button asChild size="lg" className="w-full">
            <Link href={cta.href} onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
