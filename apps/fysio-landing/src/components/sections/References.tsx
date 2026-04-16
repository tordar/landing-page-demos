import type { Reference } from "@/sanity/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ReferencesProps {
  references: Reference[] | null;
}

export function References({ references }: ReferencesProps) {
  if (!references?.length) return null;

  return (
    <section
      id="referanser"
      className="scroll-mt-20 border-t border-border/60 bg-background px-6 py-20"
      aria-labelledby="referanser-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="referanser-heading" className="font-display mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Referanser
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {references.map((ref, i) => (
            <li key={i}>
              <Card className="h-full border-border/80 bg-card shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
                <CardHeader>
                  <blockquote className="text-base font-medium leading-relaxed text-foreground">
                    &ldquo;{ref.quote}&rdquo;
                  </blockquote>
                </CardHeader>
                <CardContent className="pt-0" />
                <CardFooter className="border-t border-border/60 pt-4 text-sm text-muted-foreground">
                  <cite className="not-italic font-semibold text-foreground">
                    {ref.authorName}
                  </cite>
                  {ref.authorRole && (
                    <span className="before:content-['–'] before:mr-1 ml-1">
                      {ref.authorRole}
                    </span>
                  )}
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
