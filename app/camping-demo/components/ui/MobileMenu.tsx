"use client";

import Link from "next/link";

const navLinks = [
  { href: "/overnatting", label: "Overnatting" },
  { href: "/fasiliteter", label: "Fasiliteter" },
  { href: "/aktiviteter", label: "Aktiviteter" },
  { href: "/galleri", label: "Galleri" },
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/beliggenhet", label: "Finn oss" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary/95 flex flex-col items-center justify-center gap-6">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl"
        aria-label="Lukk meny"
      >
        ✕
      </button>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-white text-2xl font-semibold hover:text-accent transition-colors"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/kontakt"
        onClick={onClose}
        className="mt-4 bg-accent text-primary px-8 py-3 rounded-lg font-bold text-lg"
      >
        Kontakt oss
      </Link>
    </div>
  );
}
