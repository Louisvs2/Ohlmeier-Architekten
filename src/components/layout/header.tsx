import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

// Sticky site header, fully config-driven. The translucent background with
// backdrop blur works without any scroll listener, so the header (and the
// desktop navigation) stays a Server Component; the mobile drawer is the
// only client leaf. Nav sits left (hamburger on mobile, links on desktop),
// the brand mark sits right — mirrors the reference site's own layout.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <MobileNav items={navigation.main} cta={navigation.cta} />
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
        </div>
        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
          <Link href="/" aria-label={`${siteConfig.name} – Startseite`}>
            <Logo />
          </Link>
        </div>
      </Container>
    </header>
  );
}
