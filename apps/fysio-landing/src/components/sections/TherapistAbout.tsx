import type { Therapist, Contact } from "@/sanity/types";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

interface TherapistAboutProps {
  therapist: Therapist;
  contact: Contact | null;
}

export function TherapistAbout({ therapist, contact }: TherapistAboutProps) {
  if (!therapist.name) return null;

  const imageRightUrl = therapist.imageRight ? urlFor(therapist.imageRight) : null;
  const hasRightImage = !!imageRightUrl;

  // Use therapist-specific contact info if available, otherwise use clinic contact
  const email = therapist.email || contact?.email;
  const phone = therapist.phone || contact?.phone;

  return (
    <section
      id="om"
      className="scroll-mt-20 border-t border-border/60 bg-muted/50 px-6 py-20"
      aria-labelledby="om-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="om-heading"
          className="font-display mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Om {therapist.name}
        </h2>
        <div
          className={`grid gap-12 md:items-start ${
            hasRightImage ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-1"
          }`}
        >
          {imageRightUrl && (
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg ring-1 ring-black/5">
              <Image
                src={imageRightUrl.width(800).height(800).url()}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="min-w-0 space-y-4">
            {therapist.title && (
              <p className="font-medium text-primary">{therapist.title}</p>
            )}
            {(therapist.longBio || therapist.shortBio) && (
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {therapist.longBio || therapist.shortBio}
                </p>
              </div>
            )}

            {/* Individual contact info */}
            {(email || phone) && (
              <div className="mt-6 space-y-3 border-t border-border/60 pt-6">
                {email && (
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${email}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {email}
                    </a>
                  </div>
                )}
                {phone && (
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
