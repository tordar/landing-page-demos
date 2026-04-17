"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-slate-900 font-headline"
        >
          EL-KRAFT
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1 font-bold tracking-tight"
                    : "text-slate-600 font-medium hover:text-blue-600 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/kontakt"
          className="hidden md:block bg-secondary text-on-secondary px-6 py-2.5 rounded-sm font-bold hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-wide"
        >
          Bestill befaring
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/20 px-8 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg ${
                  isActive
                    ? "text-secondary font-bold"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="block bg-secondary text-on-secondary px-6 py-3 rounded-sm font-bold text-center text-sm uppercase tracking-wide mt-4"
          >
            Bestill befaring
          </Link>
        </div>
      )}
    </nav>
  );
}
