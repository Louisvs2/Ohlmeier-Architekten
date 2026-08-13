import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

// Site footer, fully config-driven: brand block from site config, link
// columns from navigation.footer, bottom bar with copyright, legal links,
// and social profiles (rendered only when configured).
export function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="text-base font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {navigation.footer.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className="text-sm font-medium">{column.title}</p>
                <ul className="mt-3 space-y-2">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <nav aria-label="Rechtliches" className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {siteConfig.socials.length > 0 && (
              <nav aria-label="Soziale Medien" className="flex gap-6">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
