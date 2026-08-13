import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import type { SectionIntro } from "@/types/content";

interface ContactSectionProps {
  intro: SectionIntro;
  email?: string;
  phone?: string;
  /** Address lines, rendered as-is. */
  address?: string[];
  /** Slot for the contact form (added in Phase 4 per PLAN.md §10). */
  children?: React.ReactNode;
  background?: SectionBackground;
  className?: string;
}

function ContactChannel({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon
        className="mt-0.5 size-5 shrink-0 text-muted-foreground"
        aria-hidden
      />
      <div>
        <p className="text-sm font-medium">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

// Direct, human contact options reduce perceived risk at the point of
// action (DESIGN.md §15). The form mounts into the children slot.
export function ContactSection({
  intro,
  email,
  phone,
  address,
  children,
  background,
  className,
}: ContactSectionProps) {
  return (
    <Section background={background} className={className}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-10">
            <SectionHeading {...intro} align="start" />
            <div className="flex flex-col gap-6">
              {email && (
                <ContactChannel icon={Mail} label="E-Mail">
                  <a
                    href={`mailto:${email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {email}
                  </a>
                </ContactChannel>
              )}
              {phone && (
                <ContactChannel icon={Phone} label="Telefon">
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {phone}
                  </a>
                </ContactChannel>
              )}
              {address && address.length > 0 && (
                <ContactChannel icon={MapPin} label="Adresse">
                  <p>
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </ContactChannel>
              )}
            </div>
          </FadeIn>
          {children && <FadeIn>{children}</FadeIn>}
        </div>
      </Container>
    </Section>
  );
}
