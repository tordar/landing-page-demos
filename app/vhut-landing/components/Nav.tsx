"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/app/vhut-landing/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/vhut-landing/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/vhut-landing/components/ui/sheet";
import { hero, resultaterLinks } from "@/app/vhut-landing/lib/content";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resultaterOpen, setResultaterOpen] = useState(false);

  return (
    <nav
      className="nav-scroll-shadow fixed top-0 left-0 right-0 z-50 border-b border-border bg-background"
      aria-label="Hovednavigasjon"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4">
        {/* Wordmark */}
        <Link
          href="/"
          className="nav-wordmark font-display text-xl font-black tracking-tight text-foreground hover:text-primary transition-colors"
        >
          VHUT
        </Link>

        {/* Desktop: nav links */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {hero.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Resultater
                <ChevronDown className="size-3.5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {resultaterLinks.map(({ year, href }) => (
                <DropdownMenuItem key={year} asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {year}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" asChild>
            <Link href={hero.ctaHref} target="_blank" rel="noopener noreferrer">
              {hero.ctaLabel}
            </Link>
          </Button>
        </div>

        {/* Mobile: hamburger + CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <Button size="sm" asChild>
            <Link href={hero.ctaHref} target="_blank" rel="noopener noreferrer">
              {hero.ctaLabel}
            </Link>
          </Button>
          <Sheet
            open={mobileOpen}
            onOpenChange={(open) => {
              setMobileOpen(open);
              if (!open) setResultaterOpen(false);
            }}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Åpne meny">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="left-0 right-0 w-full max-w-none flex flex-col pt-16 pb-8 overflow-hidden"
            >
              <SheetTitle className="sr-only">Meny</SheetTitle>
              <div className="flex min-h-0 flex-1 flex-col gap-0 overflow-y-auto px-6">
                <Button
                  variant="ghost"
                  className="min-h-16 justify-start px-4 text-2xl font-medium"
                  asChild
                >
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    Hjem
                  </Link>
                </Button>
                {hero.navLinks.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="min-h-16 justify-start px-4 text-2xl font-medium"
                    asChild
                  >
                    <Link href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
                <div>
                  <Button
                    variant="ghost"
                    className="min-h-16 w-full justify-between px-4 text-2xl font-medium"
                    onClick={() => setResultaterOpen((o) => !o)}
                  >
                    <span className="flex-1 text-left">Resultater</span>
                    <ChevronRight
                      className={`size-6 shrink-0 opacity-70 transition-transform ${resultaterOpen ? "rotate-90" : ""}`}
                    />
                  </Button>
                  {resultaterOpen && (
                    <div className="flex flex-col gap-0 pl-4 pb-1">
                      {resultaterLinks.map(({ year, href }) => (
                        <Button
                          key={year}
                          variant="ghost"
                          className="min-h-14 justify-start px-4 text-xl font-normal"
                          asChild
                        >
                          <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                          >
                            {year}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="min-h-16 justify-start px-4 text-2xl font-medium"
                  asChild
                >
                  <Link
                    href={hero.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {hero.ctaLabel}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
