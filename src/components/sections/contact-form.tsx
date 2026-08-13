"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-form";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-destructive">
      {message}
    </p>
  );
}

// Minimum friction (DESIGN.md §15): three fields, visible labels, inline
// errors linked via aria-describedby, and a success state that says what
// happens next.
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col justify-center rounded-xl bg-muted p-8"
      >
        <p className="text-base font-medium">Vielen Dank für Ihre Nachricht!</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Ihre Anfrage ist angekommen. Sie erhalten innerhalb von 24 Stunden
          eine Antwort.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          {...register("name")}
        />
        <FieldError id="contact-name-error" message={errors.name?.message} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">E-Mail</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
        />
        <FieldError id="contact-email-error" message={errors.email?.message} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Nachricht</Label>
        <Textarea
          id="contact-message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          {...register("message")}
        />
        <FieldError
          id="contact-message-error"
          message={errors.message?.message}
        />
      </div>
      {/* Honeypot: visually hidden, ignored by humans, filled by bots. */}
      <div className="sr-only" aria-hidden>
        <label htmlFor="contact-company">Firma</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>
      <div className="space-y-3">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet …" : "Nachricht senden"}
        </Button>
        <div aria-live="polite">
          {status === "error" && (
            <p className="text-sm text-destructive">
              Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder
              schreiben Sie uns direkt per E-Mail.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
