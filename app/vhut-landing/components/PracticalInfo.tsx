"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/vhut-landing/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { practicalInfo, type PracticalInfoItem } from "@/app/vhut-landing/lib/content";

const PRAKTISK_IMAGE = "/img/photo-1702507398034-fed38dd1c4bd.avif";

function PracticalCard({ item, index }: { item: PracticalInfoItem; index: number }) {
  const [open, setOpen] = useState(false);
  const hasLink = "linkHref" in item && item.linkHref;
  const hasSubs = "subs" in item && item.subs && item.subs.length > 0;
  const hasList = "list" in item && item.list && item.list.length > 0;
  const desc = "description" in item ? item.description : undefined;
  const paragraphs = "paragraphs" in item ? item.paragraphs : undefined;

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full min-h-[52px] items-center justify-between py-4 text-left transition-colors hover:text-primary cursor-pointer [-webkit-tap-highlight-color:transparent]"
        aria-expanded={open}
      >
        <span className={`text-base font-semibold pointer-events-none transition-colors ${open ? "text-primary" : ""}`}>{item.title}</span>
        {open ? (
          <Minus className="h-4 w-4 shrink-0 text-primary pointer-events-none" />
        ) : (
          <Plus className="h-4 w-4 shrink-0 text-muted-foreground pointer-events-none" />
        )}
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-5 space-y-2">
            {desc && (
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {desc}
              </p>
            )}
            {paragraphs?.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            {hasList && (
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {item.list!.map((entry, i) => (
                  <li key={i}>{entry}</li>
                ))}
              </ul>
            )}
            {hasSubs && (
              <div className="mt-3 space-y-3">
                {item.subs!.map((sub, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-3">
                    <p className="font-medium text-foreground text-sm">{sub.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{sub.description}</p>
                    {sub.linkHref && (
                      <Button variant="link" size="sm" className="h-auto p-0 mt-1" asChild>
                        <Link href={sub.linkHref} target="_blank" rel="noopener noreferrer">
                          {sub.linkLabel ?? "Kart"}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
            {hasLink && (
              <Button variant="link" size="sm" className="mt-1 h-auto p-0" asChild>
                <Link
                  href={item.linkHref!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkLabel}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PracticalInfo() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto w-full max-w-2xl space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {practicalInfo.title}
          </h2>
          {"updatedAt" in practicalInfo && practicalInfo.updatedAt && (
            <p className="text-sm text-muted-foreground mt-2">
              {practicalInfo.updatedAt}
            </p>
          )}
        </div>
        <div className="border-b border-border">
          {practicalInfo.items.map((item, i) => (
            <PracticalCard key={i} item={item} index={i} />
          ))}
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={PRAKTISK_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>
      </div>
    </section>
  );
}
