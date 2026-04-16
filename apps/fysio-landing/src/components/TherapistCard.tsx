import type { Therapist } from "@/sanity/types";
import { Card, CardContent, CardAction } from "@/components/ui/card";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface TherapistCardProps {
  therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  const image = therapist.image ? urlFor(therapist.image) : null;
  const slug =
    typeof therapist.slug === "string"
      ? therapist.slug
      : therapist.slug?.current;

  if (!slug) return null;

  return (
    <Link href={`/terapeuter/${slug}`}>
      <Card className="group h-full pt-0 transition-all hover:shadow-lg hover:shadow-primary/10">
        {image && (
          <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
            <Image
              src={image.width(600).height(600).url()}
              alt={therapist.name || "Terapeut"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <CardContent className="p-6">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {therapist.name}
          </h3>
          {therapist.title && (
            <p className="mt-1 text-sm font-medium text-primary">
              {therapist.title}
            </p>
          )}
          {therapist.shortBio && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {therapist.shortBio}
            </p>
          )}
          {therapist.specialties && therapist.specialties.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {therapist.specialties.slice(0, 3).map((specialty, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}
        </CardContent>
        <CardAction className="px-6 pb-6">
          <span className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
            Les mer
            <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        </CardAction>
      </Card>
    </Link>
  );
}
