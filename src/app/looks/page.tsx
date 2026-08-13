import type { Metadata } from "next";

import { LooksPreview } from "./looks-preview";

// Temporary internal preview of the look presets. Not linked anywhere and
// excluded from indexing — safe to delete (the whole src/app/looks folder)
// once a look is chosen for a client.
export const metadata: Metadata = {
  title: "Looks – Vorschau",
  robots: { index: false, follow: false },
};

export default function LooksPage() {
  return <LooksPreview />;
}
