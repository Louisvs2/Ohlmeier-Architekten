import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import { contactFormSchema } from "@/lib/contact-form";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültige Eingabe." }, { status: 400 });
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot hit: pretend success so bots learn nothing.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Der Versand ist derzeit nicht möglich." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      process.env.CONTACT_FORM_FROM ??
      "Kontaktformular <onboarding@resend.dev>",
    to: process.env.CONTACT_FORM_TO ?? siteConfig.contact.email,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: sending failed.", error);
    return NextResponse.json(
      {
        error: "Der Versand ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
