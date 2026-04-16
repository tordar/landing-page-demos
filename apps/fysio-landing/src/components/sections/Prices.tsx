import type { Prices as PricesType } from "@/sanity/types";
import { Separator } from "@/components/ui/separator";

interface PricesProps {
  prices: PricesType | null;
}

export function Prices({ prices }: PricesProps) {
  if (!prices) return null;

  const items = prices.items ?? [];
  const hasItems = items.length > 0;
  const hasHelseforsikring =
    prices.helseforsikringTitle || prices.helseforsikringText;

  if (!hasItems && !hasHelseforsikring) return null;

  return (
    <section
      id="priser"
      className="scroll-mt-20 border-t border-border/60 bg-muted/50 px-6 py-20"
      aria-labelledby="priser-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="priser-heading" className="font-display mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {prices.title || "Priser"}
        </h2>

        {hasItems && (
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm ring-1 ring-black/5">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/80 bg-primary/8">
                  <th
                    scope="col"
                    className="px-5 py-4 font-semibold text-foreground sm:px-6"
                  >
                    Tjeneste
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 font-semibold text-foreground sm:px-6"
                  >
                    Pris
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((row, i) => (
                  <tr key={i} className="border-b border-border/60 last:border-0 transition-colors hover:bg-muted/30">
                    <td className="px-5 py-4 sm:px-6">
                      <span className="font-medium text-foreground">{row.name}</span>
                      {row.description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {row.description}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-4 font-medium text-foreground sm:px-6">
                      {row.amount ? `${row.amount} kr` : "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {hasHelseforsikring && (
          <>
            {hasItems && <Separator className="my-10 bg-border/80" />}
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {prices.helseforsikringTitle || "Helseforsikring"}
              </h3>
              {prices.helseforsikringText && (
                <p className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
                  {prices.helseforsikringText}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
