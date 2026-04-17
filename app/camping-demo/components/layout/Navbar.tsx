"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "@/app/camping-demo/components/ui/MobileMenu";
import { siteData } from "@/app/camping-demo/data/site";

const navLinks = [
  { href: "/overnatting", label: "Overnatting" },
  { href: "/fasiliteter", label: "Fasiliteter" },
  { href: "/aktiviteter", label: "Aktiviteter" },
  { href: "/galleri", label: "Galleri" },
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/beliggenhet", label: "Finn oss" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-extrabold text-primary">
            🏕️ {siteData.name}
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-secondary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-colors"
            >
              Kontakt oss
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-primary text-2xl"
            aria-label="Åpne meny"
          >
            ☰
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
