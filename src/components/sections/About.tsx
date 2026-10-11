import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";

/** "About me" block on the home page; renders each bio entry as a paragraph. */
export function About() {
  return (
    <section aria-labelledby="about-title" className="pb-20">
      <Container>
        <Card className="p-8 sm:p-10">
          <h2 id="about-title" className="text-navy text-2xl font-bold">
            Hakkımda
          </h2>
          <div className="bg-brand mt-2 h-1 w-12 rounded-full" aria-hidden="true" />
          <div className="text-muted mt-6 space-y-4 leading-relaxed">
            {siteConfig.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
