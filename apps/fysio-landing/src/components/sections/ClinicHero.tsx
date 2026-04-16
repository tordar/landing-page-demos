import type { SiteSettings } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ClinicHeroProps {
  siteSettings: SiteSettings | null;
}

export function ClinicHero({ siteSettings }: ClinicHeroProps) {
  const title = siteSettings?.siteTitle || "Praksis";
  const tagline = siteSettings?.tagline || null;
  const bookingUrl = siteSettings?.bookingUrl;
  const bookingLabel = siteSettings?.bookingLabel || "Bestill time";
  const logo = siteSettings?.logo ? urlFor(siteSettings.logo) : null;

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Text and buttons – left aligned */}
          <div className="flex flex-col items-start text-left">
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
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-2 px-8 text-base font-medium"
              >
                <a href="#team">Møt teamet</a>
              </Button>
            </div>
          </div>

          {/* Logo – right side, wider aspect with rounded corners */}
          {logo && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-44 w-72 sm:h-52 sm:w-80 lg:h-56 lg:w-96 overflow-hidden rounded-2xl">
                <Image
                  src={logo.width(800).height(480).url()}
                  alt={title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
