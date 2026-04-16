import type { Person } from "@/sanity/types";
import { urlFor } from "@/sanity/image";
import Image from "next/image";

interface AboutProps {
  person: Person | null;
}

export function About({ person }: AboutProps) {
  const hasContent =
    person &&
    (person.shortBio ||
      person.longBio ||
      person.image ||
      person.imageRight);
  if (!hasContent) return null;

  // Only use «Bilde» from Om klinikken (person document), not the site logo
  const imageUrl = person.image ? urlFor(person.image) : null;
  const imageRightUrl = person.imageRight ? urlFor(person.imageRight) : null;
  const hasRightImage = !!imageRightUrl;

  return (
    <section
      id="om"
      className="scroll-mt-20 border-t border-border/60 bg-muted/50 px-6 py-20"
      aria-labelledby="om-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="om-heading" className="font-display mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Om klinikken
        </h2>
        <div
          className={`grid gap-12 md:items-start ${
            imageUrl
              ? hasRightImage
                ? "md:grid-cols-[minmax(0,280px)_1fr_minmax(0,320px)]"
                : "md:grid-cols-[minmax(0,280px)_1fr]"
              : hasRightImage
                ? "md:grid-cols-[1fr_minmax(0,320px)]"
                : "md:grid-cols-1"
          }`}
        >
          {imageUrl && (
            <div className="relative aspect-square max-w-[280px] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg ring-1 ring-black/5 md:max-w-[280px]">
              <Image
                src={imageUrl.width(560).height(560).url()}
                alt="Klinikken"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
          )}
          <div className="min-w-0 space-y-4">
            {person.title && (
              <p className="font-medium text-primary">{person.title}</p>
            )}
            {(person.longBio || person.shortBio) && (
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {person.longBio || person.shortBio}
                </p>
              </div>
            )}
            {imageRightUrl && (
              <div className="relative aspect-video w-full max-w-[320px] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg ring-1 ring-black/5 mt-6 md:mt-0">
                <Image
                  src={imageRightUrl.width(800).height(500).url()}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
