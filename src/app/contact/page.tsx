import type { Metadata } from "next";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "İletişim" };

/** Contact page: phone and e-mail cards, plus the message form once an access key is configured. */
export default function ContactPage() {
  const { formAccessKey } = siteConfig.contact;

  return (
    <Container className="py-16">
      <SectionTitle title="İletişim" subtitle="Benimle aşağıdaki kanallardan iletişime geçebilirsiniz." />
      <ContactCards />
      {formAccessKey ? <ContactForm accessKey={formAccessKey} /> : null}
    </Container>
  );
}
