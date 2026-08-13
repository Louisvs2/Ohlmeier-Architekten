import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/features";
import { HeroStatement } from "@/components/sections/hero";
import { services, servicesPage } from "@/content/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.excerpt };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  return (
    <>
      <HeroStatement
        eyebrow="Leistung"
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        actions={{
          primary: { label: "Projekt anfragen", href: "/kontakt" },
        }}
        className="py-20 sm:py-24 lg:py-28"
      />
      <FeatureGrid
        intro={service.featuresIntro}
        items={service.features}
        background="muted"
      />
      {service.faq && (
        <FAQ
          intro={{ eyebrow: "FAQ", title: "Häufige Fragen zu dieser Leistung" }}
          items={service.faq}
        />
      )}
      <CTA {...servicesPage.cta} background="muted" />
    </>
  );
}
