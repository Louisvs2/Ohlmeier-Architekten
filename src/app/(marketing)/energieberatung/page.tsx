import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { HeroStatement } from "@/components/sections/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { energieberatung } from "@/content/energieberatung";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Energieberatung",
  description: energieberatung.hero.subtitle,
});

export default function EnergieberatungPage() {
  return (
    <>
      <HeroStatement
        eyebrow="Energieberatung"
        title={energieberatung.hero.title}
        subtitle={energieberatung.hero.subtitle}
        className="py-20 sm:py-24 lg:py-28"
      />
      <Section>
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {energieberatung.intro}
          </p>
        </Container>
      </Section>
      <Section background="muted">
        <Container>
          <SectionHeading {...energieberatung.leistungenIntro} />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {energieberatung.leistungen.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <p className="max-w-3xl text-sm leading-relaxed text-pretty text-muted-foreground">
            {energieberatung.approach}
          </p>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-16">
            {energieberatung.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTA {...energieberatung.cta} background="brand" />
    </>
  );
}
