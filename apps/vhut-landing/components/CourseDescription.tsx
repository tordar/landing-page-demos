"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  courseDescriptionSegments,
  placeHighlights,
  type CourseDescriptionSegment,
} from "@/lib/content";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PLACE_MARKER = /\[\[([^\]]+)\]\]/g;

function parseDescriptionParagraph(
  text: string
): (string | { type: "place"; name: string })[] {
  const parts: (string | { type: "place"; name: string })[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  PLACE_MARKER.lastIndex = 0;
  while ((m = PLACE_MARKER.exec(text)) !== null) {
    if (m.index > lastIndex) {
      parts.push(text.slice(lastIndex, m.index));
    }
    parts.push({ type: "place", name: m[1].trim() });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function PlaceHighlight({ name, info }: { name: string; info: string }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeIfOutside = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        contentRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("pointerdown", closeIfOutside);
    return () => document.removeEventListener("pointerdown", closeIfOutside);
  }, [open]);

  return (
    <Tooltip open={open} onOpenChange={() => {}} delayDuration={0}>
      <TooltipTrigger asChild>
        <span
          ref={triggerRef}
          role="button"
          tabIndex={0}
          className="cursor-pointer border-b border-dotted border-red-600/70 text-red-600 hover:border-red-600 dark:border-red-400/70 dark:text-red-400 dark:hover:border-red-400"
          onClick={(e) => {
            e.preventDefault();
            setOpen((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((prev) => !prev);
            }
          }}
        >
          {name}
        </span>
      </TooltipTrigger>
      <TooltipContent ref={contentRef} aria-label={`Info om ${name}`}>
        {info}
      </TooltipContent>
    </Tooltip>
  );
}

function ParagraphWithPlaces({ text }: { text: string }) {
  const parts = useMemo(() => parseDescriptionParagraph(text), [text]);
  if (parts.length === 1 && typeof parts[0] === "string") {
    return <>{parts[0]}</>;
  }
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <React.Fragment key={i}>{part}</React.Fragment>
        ) : placeHighlights[part.name] ? (
          <PlaceHighlight
            key={i}
            name={part.name}
            info={placeHighlights[part.name]}
          />
        ) : (
          <React.Fragment key={i}>{part.name}</React.Fragment>
        )
      )}
    </>
  );
}

const DISTANCES = [147, 87, 50] as const;
type Distance = (typeof DISTANCES)[number];

function getKmKey(d: Distance): keyof Pick<CourseDescriptionSegment, "km147" | "km87" | "km50"> {
  return d === 147 ? "km147" : d === 87 ? "km87" : "km50";
}

function segmentsForDistance(
  segments: CourseDescriptionSegment[],
  distance: Distance
): { km: number; segment: CourseDescriptionSegment }[] {
  const key = getKmKey(distance);
  return segments
    .filter((s): s is CourseDescriptionSegment & { [K in typeof key]: number } => s[key] != null)
    .map((s) => ({ km: s[key]!, segment: s }))
    .sort((a, b) => a.km - b.km);
}

export function CourseDescription() {
  const [distance, setDistance] = useState<Distance>(147);
  const ordered = useMemo(
    () => segmentsForDistance(courseDescriptionSegments, distance),
    [distance]
  );

  return (
    <section className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Løypebeskrivelse
          </h2>
          <p className="mt-2 text-muted-foreground">
            Velg distanse for å se beskrivelsen i løpsrekkefølge.
          </p>
        </div>

        {/* Distance selector */}
        <div className="flex flex-wrap justify-center gap-2">
          {DISTANCES.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDistance(d)}
              className={`border px-5 py-2 text-sm font-medium transition-colors ${
                distance === d
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {d} km
            </button>
          ))}
        </div>

        {/* Segment list with smooth transition on distance change */}
        <div
          key={distance}
          className="animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out"
        >
          {ordered.length === 0 ? (
            <p className="border border-dashed border-border/60 px-4 py-8 text-center text-muted-foreground">
              Løypebeskrivelse for {distance} km er ikke lagt inn ennå.
            </p>
          ) : (
            <TooltipProvider>
              <ol className="border-t border-border/60">
                {ordered.map(({ km, segment }, index) => (
                  <li key={`${distance}-${index}-${km}-${segment.fromPlace}`}>
                    <article className="border-b border-border/60 py-6">
                      <header className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-lg font-semibold text-foreground">
                          <span className="text-primary">{km} km</span>
                          {" – "}
                          {segment.fromPlace}
                        </span>
                        {segment.stageLength != null && (
                          <span className="text-sm text-muted-foreground">
                            Etappe: {segment.stageLength} km
                          </span>
                        )}
                      </header>
                      <div className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert">
                        {segment.description.split(/\n\n+/).map((para, i) => (
                          <p key={i} className="leading-relaxed">
                            <ParagraphWithPlaces text={para.trim()} />
                          </p>
                        ))}
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </TooltipProvider>
          )}
        </div>
      </div>
    </section>
  );
}
