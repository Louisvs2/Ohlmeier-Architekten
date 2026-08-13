import { z } from "zod";

// Shared between the client form and the API route so validation can
// never drift between the two sides.
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie Ihren Namen an.")
    .max(100, "Der Name ist zu lang."),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen kurz (mind. 10 Zeichen).")
    .max(2000, "Die Nachricht ist zu lang (max. 2.000 Zeichen)."),
  // Honeypot — humans never fill this hidden field.
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
