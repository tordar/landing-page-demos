"use client";

import { useEffect, useState } from "react";
import { DistanceDetailView } from "@/components/DistanceDetailView";
import { distances, type DistanceDetail } from "@/lib/content";

export function Distances() {
  const [selected, setSelected] = useState<DistanceDetail | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [soldOutMap, setSoldOutMap] = useState<Record<number, boolean> | null>(
    null
  );

  useEffect(() => {
    fetch("/api/registration-status")
      .then((r) => r.json())
      .then((data: { soldOut?: Record<number, boolean> }) =>
        setSoldOutMap(data.soldOut ?? {})
      )
      .catch(() => setSoldOutMap({}));
  }, []);

  const openDetail = (d: DistanceDetail) => {
    setSelected(d);
    setDetailOpen(true);
  };

  const isSoldOut = (distance: number) => soldOutMap?.[distance] ?? false;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Distanser
        </p>
        <div className="border-t border-border">
          {distances.map((d) => (
            <button
              key={d.distance}
              type="button"
              onClick={() => openDetail(d)}
              className="group relative flex w-full items-center justify-between border-b border-border px-0 py-8 text-left transition-colors hover:bg-muted/40 sm:px-4"
            >
              <span
                className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100 motion-reduce:transition-none"
                aria-hidden
              />
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[5.5rem] font-black leading-none tracking-tight text-foreground sm:text-[7rem] md:text-[8rem]">
                  {d.distance}
                </span>
                <span className="text-xl font-light text-muted-foreground sm:text-2xl">
                  km
                </span>
              </div>
              <div className="flex flex-col items-end gap-1.5 text-right">
                <span className="text-sm text-muted-foreground">
                  {d.elevation.toLocaleString("nb-NO")} m stigning
                </span>
                <span className="text-sm text-muted-foreground">
                  {d.maxTime} maxtid
                </span>
                {d.dropBags > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {d.dropBags} dropbag
                  </span>
                )}
                {isSoldOut(d.distance) ? (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    <span className="size-1.5 shrink-0 rounded-full bg-red-500 dark:bg-red-400" aria-hidden />
                    Utsolgt
                  </span>
                ) : soldOutMap !== null ? (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-500">
                    <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-green-600 dark:bg-green-500" aria-hidden />
                    Ledige plasser
                  </span>
                ) : null}
                <span className="mt-1 text-xs font-medium text-primary opacity-0 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-x-1 motion-reduce:transition-none">
                  Se detaljer →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <DistanceDetailView
        distance={selected}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        soldOutMap={soldOutMap}
      />
    </section>
  );
}
