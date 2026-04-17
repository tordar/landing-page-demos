"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/app/stranda-golf/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/app/stranda-golf/components/ui/sheet";

const links = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Banen", href: "#banen" },
  { label: "Medlemskap", href: "#medlemskap" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a3a2a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center">
            <span className="text-[#1a3a2a] font-bold text-sm">S</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
            Stranda Golfklubb
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#c9a84c] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            nativeButton={false} render={<a href="#medlemskap" />}
            className="bg-[#c9a84c] hover:bg-[#e2c068] text-[#1a3a2a] font-semibold text-sm px-5"
          >
            Bli Medlem
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            render={
              <button className="md:hidden text-white p-2">
                <Menu className="w-5 h-5" />
              </button>
            }
          />
          <SheetContent
            side="right"
            className="bg-[#1a3a2a] border-[#2a5040] w-72"
            showCloseButton={false}
          >
            <div className="flex flex-col gap-6 pt-8 px-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#2a5040]">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center">
                  <span className="text-[#1a3a2a] font-bold text-sm">S</span>
                </div>
                <span className="text-white font-semibold">
                  Stranda Golfklubb
                </span>
              </div>
              {links.map((l) => (
                <SheetClose
                  key={l.href}
                  render={
                    <a
                      href={l.href}
                      className="text-white/80 hover:text-[#c9a84c] text-lg font-medium transition-colors"
                    >
                      {l.label}
                    </a>
                  }
                />
              ))}
              <SheetClose
                render={
                  <Button
                    nativeButton={false} render={<a href="#medlemskap" />}
                    className="mt-4 bg-[#c9a84c] hover:bg-[#e2c068] text-[#1a3a2a] font-semibold w-full"
                  >
                    Bli Medlem
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
