import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

/** Home page intro: name, headline, keyword badges, call-to-action buttons and the profile photo. */
export function Hero() {
  const linkedin = siteConfig.social.find((link) => link.platform === "linkedin");

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative soft color glows behind the content (hidden from assistive technology). */}
      <div
        aria-hidden="true"
        className="bg-brand/15 pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-navy/10 pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl"
      />

      <Container className="relative grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase">Merhaba, ben</p>
          <h1 className="text-navy mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="text-muted mt-4 text-lg sm:text-xl">{siteConfig.headline}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Uzmanlık etiketleri">
            {siteConfig.tags.map((tag) => (
              <li key={tag}>
                <Badge tone="brand">{tag}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">Çalışmalarımı Gör</Button>
            <Button href="/contact" variant="outline">
              İletişime Geç
            </Button>
            {linkedin ? (
              <Button href={linkedin.url} variant="outline" target="_blank" rel="noopener noreferrer">
                LinkedIn&apos;de Bağlan
              </Button>
            ) : null}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          {/*
            Portrait frame with a fixed 3:4 aspect ratio, so any photo is cropped to the same shape.
            "object-top" keeps the face in view when the photo is cropped.
          */}
          <div className="ring-card relative aspect-3/4 w-44 overflow-hidden rounded-3xl shadow-lg ring-4 sm:w-52">
            <Image
              src={siteConfig.photo}
              alt={`${siteConfig.name} profil fotoğrafı`}
              fill
              priority
              sizes="(min-width: 640px) 208px, 176px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
