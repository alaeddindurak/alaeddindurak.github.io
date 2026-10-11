import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

/** Home page intro: name, headline, call-to-action buttons and the profile photo. */
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
            <Button href="/projects">Çalışmalarımı Gör</Button>
            <Button href="/contact" variant="outline">
              İletişime Geç
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          {/*
            Portrait frame with a fixed 3:4 aspect ratio, so any photo is cropped to the same shape.
            "object-top" keeps the face in view when the photo is cropped.
          */}
          <div className="relative aspect-3/4 w-44 overflow-hidden rounded-3xl shadow-lg ring-4 ring-white sm:w-52">
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
