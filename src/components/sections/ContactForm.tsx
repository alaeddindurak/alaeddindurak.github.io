"use client";

import { type FormEvent, useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

/** Web3Forms endpoint that receives the message and forwards it to the owner's e-mail. */
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  /** Public Web3Forms access key (see `formAccessKey` in src/data/site.ts). */
  accessKey: string;
}

const fieldClasses =
  "border-line bg-card text-ink focus-visible:border-brand mt-2 w-full rounded-xl border px-4 py-3 text-sm";

/**
 * Contact form. Messages are sent from the visitor's browser straight to Web3Forms,
 * which e-mails them to the owner (the site itself has no server).
 */
export function ContactForm({ accessKey }: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Portfolyo sitesinden yeni mesaj",
          from_name: "Portfolyo Sitesi",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          // Honeypot: humans never see this field, bots fill it and get rejected.
          botcheck: data.get("botcheck") === "on",
        }),
      });
      const result = (await response.json()) as { success?: boolean };

      if (response.ok && result.success) {
        form.reset();
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      // Network failure (offline, blocked request, ...).
      setState("error");
    }
  }

  const isSubmitting = state === "submitting";

  return (
    <Card className="mt-10 p-6 sm:p-8">
      <h2 className="text-navy text-xl font-bold">Mesaj Gönderin</h2>
      <p className="text-muted mt-2 text-sm">Formu doldurun, mesajınız doğrudan e-postama ulaşsın.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="contact-name" className="text-navy text-sm font-medium">
            Ad Soyad
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-navy text-sm font-medium">
            E-posta
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-navy text-sm font-medium">
            Mesaj
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            className={cn(fieldClasses, "resize-y")}
          />
        </div>

        {/* Honeypot checkbox: hidden from people and from screen readers. */}
        <div className="hidden" aria-hidden="true">
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand hover:bg-brand-dark inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>

        {/* Status messages are announced to screen readers. */}
        <div role="status" aria-live="polite">
          {state === "success" ? (
            <p className="text-success text-sm font-medium">
              Mesajınız iletildi, teşekkürler. En kısa sürede dönüş yapacağım.
            </p>
          ) : null}
          {state === "error" ? (
            <p className="text-brand-ink text-sm font-medium">
              Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin ya da yukarıdaki telefon veya e-posta ile ulaşın.
            </p>
          ) : null}
        </div>

        <p className="text-muted text-xs leading-relaxed">
          Bu formdaki bilgiler (ad, e-posta, mesaj) yalnızca size yanıt vermek için kullanılır ve form hizmeti Web3Forms
          üzerinden iletilir. Başka amaçla kullanılmaz ve üçüncü kişilerle paylaşılmaz.
        </p>
      </form>
    </Card>
  );
}
