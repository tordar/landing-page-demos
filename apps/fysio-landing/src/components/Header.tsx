import Link from "next/link";
import type { SiteSettings } from "@/sanity/types";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  siteSettings: SiteSettings | null;
}

const navLinks = [
  { href: "#om", label: "Om" },
  { href: "#team", label: "Teamet" },
  { href: "#referanser", label: "Referanser" },
  { href: "#priser", label: "Priser" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header({ siteSettings }: HeaderProps) {
  const bookingUrl = siteSettings?.bookingUrl;
  const bookingLabel = siteSettings?.bookingLabel || "Bestill time";

  return (
<header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {siteSettings?.siteTitle || "Praksis"}
        </Link>
        <nav
          className="flex items-center gap-8"
          aria-label="Hovednavigasjon"
        >
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </div>
          {bookingUrl && (
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary px-5 font-medium shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
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
          )}
        </nav>
      </div>
    </header>
  );
}
