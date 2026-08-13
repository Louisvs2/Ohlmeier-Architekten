import type { Metadata } from "next";

import { LegalText } from "@/components/shared/legal-text";
import { impressum } from "@/content/legal";

export const metadata: Metadata = {
  title: impressum.title,
};

export default function ImpressumPage() {
  return <LegalText content={impressum} />;
}
