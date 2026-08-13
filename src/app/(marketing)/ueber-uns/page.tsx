import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTA } from "@/components/sections/cta";
import { FeatureSplit } from "@/components/sections/features";
import { HeroStatement } from "@/components/sections/hero";
import { TeamGrid } from "@/components/sections/team";
import { SectionHeading } from "@/components/shared/section-heading";
import { about } from "@/content/about";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Über uns",
  description: about.hero.subtitle,
};

export default function UeberUnsPage() {
  return (
    <>
      <HeroStatement {...about.hero} />
      <FeatureSplit
        intro={about.intro.intro}
        items={about.intro.items}
        background="muted"
      />
      <Section>
        <Container>
          <SectionHeading {...about.schwerpunkte.intro} />
          <ul className="mt-10 flex flex-wrap gap-3">
            {about.schwerpunkte.items.map((item) => (
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
      <TeamGrid intro={about.team.intro} members={team} background="muted" />
      <CTA {...about.cta} />
    </>
  );
}
