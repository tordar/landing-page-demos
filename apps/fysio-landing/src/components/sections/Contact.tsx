import type { Contact as ContactType, Therapist } from "@/sanity/types";

interface ContactProps {
  contact: ContactType | null;
  therapist?: Therapist | null;
  siteTitle?: string | null;
}

export function Contact({ contact, therapist, siteTitle }: ContactProps) {
  if (!contact) return null;

  // Use therapist-specific contact if available, otherwise clinic contact
  const email = therapist?.email || contact.email;
  const phone = therapist?.phone || contact.phone;

  const hasInfo =
    contact.address ||
    phone ||
    email ||
    contact.openingHours;
  const mapUrl = contact.mapEmbedUrl;

  if (!hasInfo && !mapUrl) return null;

  const contactTitle = siteTitle ? `Kontakt ${siteTitle}` : "Kontakt";

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t border-border/60 bg-background px-6 py-20"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="kontakt-heading" className="font-display mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {contactTitle}
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {mapUrl && (
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-sm ring-1 ring-black/5">
              <iframe
                src={mapUrl}
                title="Kart"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
          {hasInfo && (
            <div className="flex flex-col justify-center">
              <address className="not-italic space-y-6">
                {contact.address && (
                  <p className="text-foreground">
                    <span className="font-semibold text-foreground">Adresse</span>
                    <br />
                    <span className="mt-1 block whitespace-pre-wrap text-muted-foreground">
                      {contact.address}
                    </span>
                  </p>
                )}
                {phone && (
                  <p>
                    <span className="font-semibold text-foreground">Telefon</span>
                    <br />
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  </p>
                )}
                {email && (
                  <p>
                    <span className="font-semibold text-foreground">E-post</span>
                    <br />
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {email}
                    </a>
                  </p>
                )}
                {contact.openingHours && (
                  <p className="text-foreground">
                    <span className="font-semibold text-foreground">Åpningstider</span>
                    <br />
                    <span className="mt-1 block whitespace-pre-wrap text-muted-foreground">
                      {contact.openingHours}
                    </span>
                  </p>
                )}
              </address>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
