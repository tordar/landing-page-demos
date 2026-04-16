"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero, distances } from "@/lib/content";

const HERO_BG_IMAGE = "/img/premium_photo-1738597038226-798c17679c7e.avif";

function HeroBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      aria-hidden
    >
      <Image
        src={HERO_BG_IMAGE}
        alt=""
        fill
        className="object-cover saturate-[0.5]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/15" aria-hidden />
    </div>
  );
}

export function Hero() {
  useEffect(() => {
    const container = document.createElement("div");
    container.setAttribute("data-hero-background", "");
    document.body.prepend(container);
    const root = createRoot(container);
    root.render(<HeroBackground />);
    return () => {
      setTimeout(() => {
        root.unmount();
        container.remove();
      }, 0);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-full min-w-full flex-col justify-end px-6 pb-14 sm:pb-20 md:pb-24"
    >
      <div className="relative z-10 w-full max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/60 reveal-up [animation-delay:80ms]">
          {hero.date} · {hero.location}
        </p>
        <h1 className="mb-6 text-6xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl reveal-up [animation-delay:260ms]">
          {hero.title}
        </h1>
        <div className="mb-8 flex flex-wrap gap-3 reveal-up [animation-delay:460ms]">
          {distances.map((d) => (
            <span
              key={d.distance}
              className="border border-white/30 px-4 py-1.5 text-sm font-medium text-white/90"
            >
              {d.distance} km
            </span>
          ))}
        </div>
        <p className="mb-8 max-w-xl text-base text-white/70 sm:text-lg reveal-up [animation-delay:590ms]">
          {hero.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-3 reveal-up [animation-delay:720ms]">
          {hero.navLinks.map((item) => (
            <Button
              key={item.href}
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90"
            asChild
          >
            <Link href={hero.ctaHref} target="_blank" rel="noopener noreferrer">
              {hero.ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
