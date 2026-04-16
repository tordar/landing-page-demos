import type { Therapist } from "@/sanity/types";
import { TherapistCard } from "@/components/TherapistCard";

interface TeamSectionProps {
  therapists: Therapist[] | null;
}

function hasSlug(therapist: { slug?: { current?: string | null } | string | null }): boolean {
  if (!therapist.slug) return false;
  return typeof therapist.slug === "string" ? true : !!therapist.slug.current;
}

export function TeamSection({ therapists }: TeamSectionProps) {
  const withSlug = therapists?.filter(hasSlug) ?? [];
  if (withSlug.length === 0) return null;

  return (
    <section
      id="team"
      className="scroll-mt-20 border-t border-border/60 bg-background px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-12 text-3xl font-semibold tracking-tight text-foreground">
          Møt teamet
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {withSlug.map((therapist) => (
            <TherapistCard key={therapist._id} therapist={therapist} />
          ))}
        </div>
      </div>
    </section>
  );
}
