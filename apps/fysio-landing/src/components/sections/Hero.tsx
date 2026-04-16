import type { SiteSettings, Person } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  siteSettings: SiteSettings | null;
  person: Person | null;
}

export function Hero({ siteSettings, person }: HeroProps) {
  const title = siteSettings?.siteTitle || person?.name || "Praksis";
  const tagline = siteSettings?.tagline || person?.shortBio || null;
  const bookingUrl = siteSettings?.bookingUrl;
  const bookingLabel = siteSettings?.bookingLabel || "Bestill time";
  const image = person?.image ? urlFor(person.image) : null;
  const yrke = siteSettings?.yrke;

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Ambient gradient mesh */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 70% 30%, oklch(0.42 0.09 195 / 0.25), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[350px] w-[350px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 30% 80%, oklch(0.42 0.09 195 / 0.2), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Tekst-kolonne */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {yrke && (
              <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                {yrke}
              </span>
            )}
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-foreground">
              {title}
            </h1>
            {tagline && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {tagline}
              </p>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {bookingUrl && (
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-primary px-8 text-base font-medium shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
                >
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    {bookingLabel}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-2 px-8 text-base font-medium"
              >
                Våre tjenester
              </Button>
            </div>
          </div>

          {/* Bilde-kolonne */}
          <div className="relative flex justify-center lg:justify-end">
            {image && (
              <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]">
                <div
                  className="absolute -inset-6 rounded-3xl opacity-40 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.09 195 / 0.35), oklch(0.42 0.09 195 / 0.05))",
                  }}
                />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl ring-1 ring-black/5">
                  <Image
                    src={image.width(800).height(800).url()}
                    alt={person?.name || ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}