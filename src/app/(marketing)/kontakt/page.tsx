import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/config/site";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description: contact.intro.subtitle,
};

export default function KontaktPage() {
  return (
    <ContactSection
      intro={contact.intro}
      email={siteConfig.contact.email}
      phone={siteConfig.contact.phone}
      address={siteConfig.contact.address}
    >
      <ContactForm />
    </ContactSection>
  );
}
