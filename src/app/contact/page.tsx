import type { Metadata } from "next";
import { ContactCards } from "@/components/sections/ContactCards";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = { title: "İletişim" };

/** Contact page: phone and e-mail cards (there is intentionally no contact form). */
export default function ContactPage() {
  return (
    <Container className="py-16">
      <SectionTitle title="İletişim" subtitle="Benimle aşağıdaki kanallardan iletişime geçebilirsiniz." />
      <ContactCards />
    </Container>
  );
}
