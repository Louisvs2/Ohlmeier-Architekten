import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { ServiceCards } from "@/components/sections/features";
import { HeroCentered } from "@/components/sections/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  generalplanerleistungen,
  services,
  servicesPage,
} from "@/content/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Leistungen",
  description: servicesPage.hero.subtitle,
});

export default function LeistungenPage() {
  return (
    <>
      <HeroCentered
        title={servicesPage.hero.title}
        subtitle={servicesPage.hero.subtitle}
        className="py-20 sm:py-24 lg:py-28"
      />
      <ServiceCards
        items={services.map((service) => ({
          icon: service.icon,
          title: service.title,
          description: service.excerpt,
          href: `/leistungen/${service.slug}`,
        }))}
        background="muted"
      />
      <Section>
        <Container>
          <SectionHeading {...generalplanerleistungen.intro} />
          <ul className="mt-10 flex flex-wrap gap-3">
            {generalplanerleistungen.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CTA {...servicesPage.cta} background="brand" />
    </>
  );
}
