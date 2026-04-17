"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/app/vhut-landing/components/ui/dialog";
import { Button } from "@/app/vhut-landing/components/ui/button";
import type { DistanceDetail } from "@/app/vhut-landing/lib/content";

const STRAVA_EMBED_SCRIPT = "https://strava-embeds.com/embed.js";

function isPricePeriodActive(startIso: string, endIso: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const s = new Date(startIso + "T00:00:00");
  const e = new Date(endIso + "T00:00:00");
  return today >= s && today <= e;
}

function StravaEmbedScript({ loaded }: { loaded: boolean }) {
  useEffect(() => {
    if (!loaded) return;
    const existing = document.querySelector(`script[src="${STRAVA_EMBED_SCRIPT}"]`);
    if (existing) return;
    const script = document.createElement("script");
    script.src = STRAVA_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [loaded]);
  return null;
}

type DistanceDetailViewProps = {
  distance: DistanceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Fetched from RaceResult; distance (km) -> soldOut */
  soldOutMap?: Record<number, boolean> | null;
};

function StatRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/60 py-3 text-sm">
      <span className="text-muted-foreground uppercase tracking-wide">
        {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export function DistanceDetailView({
  distance,
  open,
  onOpenChange,
  soldOutMap = null,
}: DistanceDetailViewProps) {
  if (!distance) return null;

  const soldOut = soldOutMap?.[distance.distance] ?? false;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        className="left-1/2 flex w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-0 flex-col gap-0 overflow-hidden p-0 !max-w-[min(1024px,calc(100vw-2rem))] top-[5vh] h-[90dvh] max-sm:top-4 max-sm:h-[calc(100dvh-2rem)]"
      >
        {/* On mobile: explicit max-h so iOS constrains height; touch-scroll enables momentum scrolling */}
        <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden max-sm:max-h-full max-sm:overflow-y-auto touch-scroll">
          <div className="grid min-w-0 flex-1 grid-cols-1 grid-rows-[auto_auto] overflow-x-hidden max-sm:min-h-0 max-sm:flex-none sm:min-h-0 sm:grid-cols-[minmax(0,300px)_1fr] sm:grid-rows-1 sm:overflow-hidden">
          {/* Left: stats panel (scrolls away on mobile, fixed on desktop) */}
          <div className="flex min-w-0 shrink-0 flex-col overflow-hidden border-b border-border bg-muted/30 p-6 sm:border-b-0 sm:border-r">
            <DialogTitle className="mb-1 text-2xl">
              {distance.distance} km
            </DialogTitle>
            <div className="mt-4 space-y-0">
              <StatRow
                label="Stigning"
                value={`${distance.elevation.toLocaleString("nb-NO")} m`}
              />
              <StatRow label="Maxtid" value={distance.maxTime} />
              {distance.surface && (
                <StatRow label="Underlag" value={distance.surface} />
              )}
              <StatRow label="Start" value={`${distance.startDate} kl. ${distance.startTime}`} />
              <StatRow label="Startsted" value={distance.startPlace} />
              {distance.dropBags > 0 && (
                <StatRow label="Dropbags" value={distance.dropBags} />
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {distance.itraPoints != null && (
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
                  ITRA {distance.itraPoints}
                </span>
              )}
              {soldOut ? (
                <span className="rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-500/30 dark:bg-red-500/20 dark:text-red-400">
                  Utsolgt
                </span>
              ) : (
                <span className="rounded-full border border-green-600/50 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:border-green-500/30 dark:bg-green-500/20 dark:text-green-400">
                  Ledige plasser
                </span>
              )}
            </div>
          </div>

          {/* Right: scrollable content (only this column scrolls on desktop) */}
          <div className="flex min-h-0 flex-col overflow-x-hidden p-6 max-sm:min-h-0 max-sm:overflow-visible sm:overflow-y-auto">
            {distance.description && (
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {distance.description}
                </p>
              </div>
            )}

            {distance.mandatoryEquipment && distance.mandatoryEquipment.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Påkrevd utstyr</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {distance.mandatoryEquipment.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {(distance.gpxUrl || distance.mapUrl) && (
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Rute og kart</h3>
                <div className="flex flex-wrap gap-2">
                  {distance.gpxUrl && (
                    <Button variant="outline" size="sm" className="bg-card" asChild>
                      <Link
                        href={distance.gpxUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 size-3.5" />
                        GPX
                      </Link>
                    </Button>
                  )}
                  {distance.mapUrl && (
                    <Button variant="outline" size="sm" className="bg-card" asChild>
                      <Link
                        href={distance.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 size-3.5" />
                        3D-kart
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            )}

            {distance.stravaEmbedId && (
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Rute (Strava)</h3>
                <div
                  className="strava-embed-placeholder min-h-[400px] w-full rounded-lg border border-border bg-muted/20"
                  data-embed-type="route"
                  data-embed-id={distance.stravaEmbedId}
                  data-style="standard"
                  data-map-hash={distance.stravaMapHash ?? ""}
                  data-from-embed="true"
                />
                <StravaEmbedScript loaded={open && !!distance.stravaEmbedId} />
              </div>
            )}

            {distance.checkpoints && distance.checkpoints.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">
                  Sjekkpunkter og hjelpestasjoner
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {distance.checkpoints.map((cp, i) => (
                    <li key={i}>
                      {cp.name} – {cp.km} km
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(distance.parking || distance.frammote) && (
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Parkering og frammøte</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {distance.parking && <p><span className="font-medium text-foreground">Parkering:</span> {distance.parking}</p>}
                  {distance.frammote && <p><span className="font-medium text-foreground">Frammøte:</span> {distance.frammote}</p>}
                  {distance.parkingMapUrl && (
                    <Button variant="link" size="sm" className="h-auto p-0 mt-1" asChild>
                      <Link href={distance.parkingMapUrl} target="_blank" rel="noopener noreferrer">
                        Åpne kart
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            )}

            {distance.pricePeriods && distance.pricePeriods.length > 0 && (
              <div>
                <h3 className="mb-2 font-semibold">Priser</h3>
                <div className="space-y-2 text-sm">
                  {distance.pricePeriods.map((period) => {
                    const active = isPricePeriodActive(period.start, period.end);
                    return (
                      <div
                        key={period.label}
                        className={`flex justify-between gap-4 py-2 ${active ? "font-medium text-foreground" : "text-muted-foreground"}`}
                      >
                        <span>{period.label}</span>
                        <span>{period.price.toLocaleString("nb-NO", { minimumFractionDigits: 2 })} NOK</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
