import type { SiteSettings } from "@/sanity/types";
import { Button } from "@/components/ui/button";

interface BookingCtaProps {
  siteSettings: SiteSettings | null;
}

export function BookingCta({ siteSettings }: BookingCtaProps) {
  const bookingUrl = siteSettings?.bookingUrl;
  const bookingLabel = siteSettings?.bookingLabel || "Bestill time";

  if (!bookingUrl) return null;

  return (
    <section
      className="relative overflow-hidden border-t border-primary/20 bg-primary px-6 py-20 text-primary-foreground"
      aria-label="Bestill time"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.99 0 0 / 0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Vil du bestille time?
        </h2>
        <p className="mb-8 text-primary-foreground/90">
          Ta kontakt eller bruk lenken under for å bestille.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full bg-primary-foreground px-8 text-base font-medium text-primary shadow-lg transition-all hover:bg-primary-foreground/95 hover:shadow-xl"
        >
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${bookingLabel} (åpnes i ny fane)`}
          >
            {bookingLabel}
          </a>
        </Button>
      </div>
    </section>
  );
}
