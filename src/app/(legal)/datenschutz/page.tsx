import type { Metadata } from "next";

import { LegalText } from "@/components/shared/legal-text";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: datenschutz.title,
};

export default function DatenschutzPage() {
  return <LegalText content={datenschutz} />;
}
