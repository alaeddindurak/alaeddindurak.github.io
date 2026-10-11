import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

/** Returns the initials of a full name, used inside the avatar placeholder. */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Home page intro: name, headline, call-to-action buttons and an avatar placeholder. */
export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase">Merhaba, ben</p>
          <h1 className="text-navy mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="text-muted mt-4 text-lg sm:text-xl">{siteConfig.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">Projelerimi Gör</Button>
            <Button href="/contact" variant="outline">
              İletişime Geç
            </Button>
          </div>
        </div>

        {/* Avatar placeholder: replace with a real <Image> when a photo is available. */}
        <div className="order-1 flex justify-center md:order-2">
          <div
            role="img"
            aria-label={`${siteConfig.name} profil fotoğrafı alanı`}
            className="from-brand to-brand-dark flex h-48 w-48 items-center justify-center rounded-3xl bg-linear-to-br text-5xl font-bold text-white shadow-lg sm:h-64 sm:w-64"
          >
            {getInitials(siteConfig.name)}
          </div>
        </div>
      </Container>
    </section>
  );
}
