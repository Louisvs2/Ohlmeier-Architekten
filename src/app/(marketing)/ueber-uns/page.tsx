import type { Metadata } from "next";

import { CTA } from "@/components/sections/cta";
import { FeatureSplit } from "@/components/sections/features";
import { HeroStatement } from "@/components/sections/hero";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "Über uns",
  description: about.hero.subtitle,
};

export default function UeberUnsPage() {
  return (
    <>
      <HeroStatement {...about.hero} />
      <FeatureSplit
        intro={about.values.intro}
        items={about.values.items}
        background="muted"
      />
      <CTA {...about.cta} />
    </>
  );
}
