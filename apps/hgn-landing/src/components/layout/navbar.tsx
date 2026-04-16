"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigationItems = [
  { name: "Hjem", href: "/" },
  { name: "Tjenester", href: "/tjenester" },
  { name: "Portefølje", href: "/portefolje" },
  { name: "Autorisasjoner", href: "/autorisasjoner" },
  { name: "Karriere", href: "/karriere" },
  { name: "Om HGN", href: "/om-hgn" },
  { name: "Kontakt oss", href: "/kontakt-oss" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/HGN logo.jpg"
              alt="HGN Elektro AS"
              width={120}
              height={60}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Åpne meny</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
                <SheetTitle className="sr-only">Navigasjonsmeny</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/HGN logo.jpg"
                        alt="HGN Elektro AS"
                        width={80}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 px-6 py-8">
                    <div className="space-y-1">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground group"
                        >
                          <span className="flex-1">{item.name}</span>
                          <div className="w-1 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="p-6 border-t bg-muted/30">
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-muted-foreground">
                        Kontakt oss
                      </div>
                      <div className="space-y-2">
                        <a
                          href="tel:22120003"
                          className="flex items-center text-sm hover:text-primary transition-colors"
                        >
                          📞 22 12 00 03
                        </a>
                        <a
                          href="mailto:post@hgnelektro.no"
                          className="flex items-center text-sm hover:text-primary transition-colors"
                        >
                          ✉️ post@hgnelektro.no
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 