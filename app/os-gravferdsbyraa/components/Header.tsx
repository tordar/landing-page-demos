"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Hjem", href: "/" },
  {
    label: "Ved Dødsfall",
    href: "/ved-dodsfall",
    children: [
      { label: "Praktisk info", href: "/ved-dodsfall/praktisk-info" },
      {
        label: "Gravferd eller kremasjon",
        href: "/ved-dodsfall/gravferd-eller-kremasjon",
      },
      { label: "Gravsted", href: "/ved-dodsfall/gravsted" },
    ],
  },
  {
    label: "Om oss",
    href: "/om-oss",
    children: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Priser", href: "/om-oss/priser" },
    ],
  },
  { label: "Kontakt oss", href: "/kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-surface sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-headline text-primary tracking-tight"
        >
          Os Gravferdsbyrå AS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.href)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.children ? item.children[0].href : item.href}
                className={`font-headline font-light tracking-wide transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-background opacity-80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.href && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/15 py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-5 py-3 text-sm font-body transition-colors ${
                          pathname === child.href
                            ? "text-primary bg-surface-container-low"
                            : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <div className="bg-surface-container-highest/80 backdrop-blur-md px-5 py-2 rounded-full border border-outline-variant/15 flex items-center gap-2">
            <span
              className="material-symbols-outlined text-tertiary text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              phone_in_talk
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Døgnvakt: 56 57 49 50
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div className="h-px w-full bg-surface-container-highest" />

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/15 px-8 py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.children ? item.children[0].href : item.href}
                  className={`font-headline tracking-wide text-lg ${
                    isActive(item.href) ? "text-primary font-bold" : "text-on-background"
                  }`}
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-on-surface-variant text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-outline-variant/20">
            <a
              href="tel:56574950"
              className="flex items-center gap-2 text-primary font-bold"
            >
              <span className="material-symbols-outlined">call</span>
              Døgnvakt: 56 57 49 50
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
