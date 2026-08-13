import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

// Sticky site header, fully config-driven. The translucent background with
// backdrop blur works without any scroll listener, so the header (and the
// desktop navigation) stays a Server Component; the mobile drawer is the
// only client leaf.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight"
          aria-label={`${siteConfig.name} – Startseite`}
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
          <MobileNav items={navigation.main} cta={navigation.cta} />
        </div>
      </Container>
    </header>
  );
}
