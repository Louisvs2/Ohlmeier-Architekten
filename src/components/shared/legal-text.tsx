import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { LegalPageContent } from "@/content/legal";

// Shared renderer for legal pages: narrow measure, quiet typography.
export function LegalText({ content }: { content: LegalPageContent }) {
  return (
    <Section>
      <Container className="max-w-2xl lg:px-6">
        <SectionHeading as="h1" align="start" title={content.title} />
        <div className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-medium">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
