import type { Metadata } from "next";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = { title: "Sosyal Medya" };

/** Social media page: links to the Instagram and LinkedIn profiles. */
export default function SocialPage() {
  return (
    <Container className="py-16">
      <SectionTitle title="Sosyal Medya" subtitle="Beni bu platformlardan takip edebilirsiniz." />
      <SocialLinks />
    </Container>
  );
}
