"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Check,
  Truck,
  Warehouse,
  PackageCheck,
  Quote,
  Clock,
  TreePine,
  Layers,
  DoorOpen,
  Droplets,
  Wrench,
  Shield,
  Send,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Produkter", href: "#produkter" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Leveranse", href: "#leveranse" },
  { label: "Referanser", href: "#referanser" },
  { label: "Kontakt", href: "#kontakt" },
];

const STATS = [
  { value: "35+", label: "års erfaring" },
  { value: "2 500+", label: "produkter på lager" },
  { value: "Hele", label: "Sunnmøre levering" },
  { value: "500+", label: "faste kunder" },
];

const CATEGORIES = [
  {
    icon: TreePine,
    title: "Trelast & konstruksjonsvirke",
    desc: "Bjelkelag, stenderverk, kledning, terrassebord og konstruksjonsvirke i alle dimensjoner.",
    accent: "bg-wood",
  },
  {
    icon: Layers,
    title: "Plater & isolasjon",
    desc: "OSB, kryssfiner, gipsplater, vindsperre og mineralull — alt for tett og varm bygning.",
    accent: "bg-wood-light",
  },
  {
    icon: DoorOpen,
    title: "Dører & vinduer",
    desc: "Ytterdører, innerdører og vinduer fra ledende produsenter. Tilpasset norsk klima.",
    accent: "bg-orange",
  },
  {
    icon: Droplets,
    title: "Sanitærutstyr & VVS",
    desc: "Rør, rørdeler, blandebatterier, toaletter og sluk fra anerkjente merkevarer.",
    accent: "bg-wood",
  },
  {
    icon: Wrench,
    title: "Verktøy & festemidler",
    desc: "Profesjonelt verktøy, skruer, spiker, beslag og festemidler for alle prosjekter.",
    accent: "bg-wood-light",
  },
  {
    icon: Shield,
    title: "Takprodukter & membraner",
    desc: "Takstein, takplater, undertak, membraner og beslag for varige takløsninger.",
    accent: "bg-orange",
  },
];

const TESTIMONIALS = [
  {
    name: "Rune Aarflot",
    company: "Aarflot Bygg AS",
    quote:
      "Vi har brukt Kysttre som hovedleverandør i over ti år. Rask levering, rett kvalitet og folk som forstår hva vi trenger på byggeplassen.",
  },
  {
    name: "Silje Devold",
    company: "Devold Entreprenør",
    quote:
      "Kysttre skiller seg ut med fagkunnskapen. De hjelper oss med materialvalg og logistikk på store prosjekter — det sparer oss for tid og penger.",
  },
  {
    name: "Øyvind Hareide",
    company: "Hareide Tømrer & Snekker",
    quote:
      "Som liten bedrift setter jeg pris på at Kysttre behandler oss like godt som storkontraktørene. Personlig service og konkurransedyktige priser.",
  },
];

const DELIVERY_OPTIONS = [
  {
    icon: Truck,
    title: "Prosjektlevering",
    desc: "Direkte levering til byggeplass med kran- og lastebil. Vi planlegger leveransen etter fremdriftsplanen din.",
  },
  {
    icon: Warehouse,
    title: "Henting på lager",
    desc: "4 000 m² lager i Ålesund med drive-in. Bestill på nett eller telefon, og hent når det passer.",
  },
  {
    icon: PackageCheck,
    title: "Spesialbestilling",
    desc: "Trenger du noe utenom standardsortimentet? Vi skaffer det du trenger med kort leveringstid.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    navn: "",
    bedrift: "",
    epost: "",
    telefon: "",
    melding: "",
  });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSent(true);
  }

  return (
    <>
      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-[0_1px_0_0_rgba(59,42,26,.08)] backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col leading-none"
          >
            <span className="font-heading text-xl tracking-tight text-wood lg:text-2xl">
              Kysttre
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-text-muted">
              Byggevarer
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-text-muted transition-colors hover:text-wood"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+4770123456"
              className="flex items-center gap-2 text-sm font-medium text-text"
            >
              <Phone size={15} strokeWidth={2.2} />
              70 12 34 56
            </a>
            <button
              onClick={() => handleNav("#kontakt")}
              className="rounded bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
            >
              Få tilbud
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-wood"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-stone bg-white px-5 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left text-base font-medium text-text-muted"
                >
                  {l.label}
                </button>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:+4770123456"
                className="flex items-center gap-2 text-sm font-medium text-text"
              >
                <Phone size={15} />
                70 12 34 56
              </a>
              <button
                onClick={() => handleNav("#kontakt")}
                className="rounded bg-orange px-5 py-2.5 text-sm font-semibold text-white"
              >
                Få tilbud
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-wood pt-32 pb-20 lg:pt-44 lg:pb-28">
        {/* Diagonal grain pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, #fff 0px, #fff 1px, transparent 1px, transparent 18px)",
          }}
        />
        {/* Accent bar */}
        <div className="absolute left-0 top-0 h-1.5 w-full bg-orange" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-orange">
            Engroshandel siden 1988
          </p>
          <h1 className="max-w-3xl font-heading text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Sunnmøres ledende
            <br />
            grossist for trelast
            <br />
            og byggevarer
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-dark/80 lg:text-lg">
            Fra konstruksjonsvirke til sanitærutstyr — vi leverer komplett
            sortiment til byggmestere, entreprenører og håndverkere langs hele
            Sunnmørekysten.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav("#kontakt")}
              className="group flex items-center gap-2 rounded bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
            >
              Få tilbud
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <button
              onClick={() => handleNav("#produkter")}
              className="rounded border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Se produkter
            </button>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="border-b border-stone bg-stone/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center px-4 py-7 text-center ${
                i < STATS.length - 1
                  ? "border-b border-stone lg:border-b-0 lg:border-r"
                  : ""
              } ${i === 1 ? "border-r border-stone lg:border-r" : ""} ${
                i === 0 || i === 2 ? "border-r border-stone" : ""
              }`}
              style={{
                borderColor: "var(--color-stone-dark)",
              }}
            >
              <span className="font-heading text-2xl text-wood lg:text-3xl">
                {s.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section id="produkter" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-orange">
            Sortiment
          </p>
          <h2 className="mt-2 max-w-lg font-heading text-3xl text-wood lg:text-4xl">
            Alt du trenger — under ett tak
          </h2>
          <p className="mt-4 max-w-xl text-text-muted">
            Over 2 500 produkter fra ledende produsenter. Vi dekker hele
            materialbehovet for nybygg, rehabilitering og vedlikehold.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="group relative overflow-hidden rounded border border-stone transition-all duration-200 hover:border-stone-dark hover:shadow-[0_2px_12px_rgba(59,42,26,.06)]"
                >
                  {/* Accent top bar */}
                  <div className={`h-1 ${cat.accent}`} />
                  {/* Subtle diagonal pattern on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.02]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, var(--color-wood) 0px, var(--color-wood) 1px, transparent 1px, transparent 12px)",
                    }}
                  />
                  <div className="relative px-6 pb-6 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-stone text-wood">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-text">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About / Warehouse ── */}
      <section id="om-oss" className="bg-stone/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-orange">
              Om Kysttre
            </p>
            <h2 className="mt-2 font-heading text-3xl text-wood lg:text-4xl">
              Ditt lager på Sunnmøre
            </h2>
            <p className="mt-5 leading-relaxed text-text-muted">
              Siden 1988 har Kysttre Byggevarer vært den foretrukne
              byggevareleverandøren for profesjonelle aktører på Sunnmøre. Fra
              vårt 4 000 m² lager i Ålesund betjener 15 dyktige medarbeidere
              kunder langs hele kysten — med fagkunnskap, bredt sortiment og
              leveringsevne som matcher fremdriftsplanene deres.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Stort lager for rask levering",
                "Fagkunnskap i alle ledd",
                "Konkurransedyktige priser",
                "Fleksible leveringsløsninger",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative panel */}
          <div className="relative hidden overflow-hidden rounded lg:block">
            <div className="absolute inset-0 bg-wood" />
            {/* Stacked timber pattern */}
            <div className="absolute inset-0 flex flex-col justify-center gap-[3px] p-8">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{
                    height: `${20 + (i % 3) * 6}px`,
                    background:
                      i % 4 === 0
                        ? "rgba(217,122,43,0.15)"
                        : i % 3 === 0
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(255,255,255,0.03)",
                    marginLeft: `${(i * 7) % 40}px`,
                    marginRight: `${((14 - i) * 5) % 30}px`,
                  }}
                />
              ))}
            </div>
            {/* Overlay text */}
            <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center text-center">
              <span className="font-heading text-6xl text-white/10 lg:text-7xl">
                4 000
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-[.3em] text-white/30">
                kvadratmeter lager
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery ── */}
      <section id="leveranse" className="bg-wood py-20 lg:py-28">
        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(160deg, #fff 0px, #fff 1px, transparent 1px, transparent 22px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-orange">
            Logistikk
          </p>
          <h2 className="mt-2 max-w-md font-heading text-3xl text-white lg:text-4xl">
            Levering over hele Sunnmøre
          </h2>
          <p className="mt-4 max-w-xl text-stone-dark/70">
            Vi vet at riktig materiell til riktig tid er avgjørende. Derfor
            tilbyr vi fleksible leveringsløsninger tilpasset ditt prosjekt.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {DELIVERY_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="rounded border border-white/8 bg-white/[0.04] px-6 py-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded bg-orange/15 text-orange">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {opt.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-dark/60">
                    {opt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── References ── */}
      <section id="referanser" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-orange">
            Referanser
          </p>
          <h2 className="mt-2 font-heading text-3xl text-wood lg:text-4xl">
            Våre kunder forteller
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="relative rounded border border-stone px-6 pb-6 pt-8"
              >
                <Quote
                  size={28}
                  className="absolute top-5 right-5 text-stone-dark"
                  strokeWidth={1.5}
                />
                <p className="text-sm leading-relaxed text-text-muted italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-stone pt-4">
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + Opening Hours ── */}
      <section id="kontakt" className="bg-stone/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Opening hours */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-orange">
              Åpningstider
            </p>
            <h2 className="mt-2 font-heading text-3xl text-wood lg:text-4xl">
              Besøk oss i Ålesund
            </h2>

            <div className="mt-8">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                Ordinære kunder
              </h3>
              <table className="w-full max-w-xs text-sm">
                <tbody>
                  {[
                    ["Man — Fre", "07:00 – 16:00"],
                    ["Lørdag", "08:00 – 13:00"],
                    ["Søndag", "Stengt"],
                  ].map(([day, time]) => (
                    <tr key={day} className="border-b border-stone">
                      <td className="py-2.5 font-medium text-text">{day}</td>
                      <td className="py-2.5 text-right text-text-muted">
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange">
                <Clock size={13} />
                Proffkunder — tidlig tilgang
              </h3>
              <table className="w-full max-w-xs text-sm">
                <tbody>
                  <tr className="border-b border-stone">
                    <td className="py-2.5 font-medium text-text">
                      Man — Fre
                    </td>
                    <td className="py-2.5 text-right text-text-muted">
                      06:00 – 16:30
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-xs text-text-muted">
                Registrerte proffkunder får utvidet tilgang til lager og
                utlevering.
              </p>
            </div>

            <div className="mt-10 space-y-3 text-sm text-text-muted">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-wood" />
                <span>Industriveien 42, 6008 Ålesund</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-wood" />
                <a href="tel:+4770123456" className="hover:text-text">
                  70 12 34 56
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-wood" />
                <a
                  href="mailto:post@kysttre.no"
                  className="hover:text-text"
                >
                  post@kysttre.no
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-orange">
              Kontakt
            </p>
            <h2 className="mt-2 font-heading text-3xl text-wood lg:text-4xl">
              Send oss en forespørsel
            </h2>
            <p className="mt-4 text-sm text-text-muted">
              Beskriv hva du trenger, så kommer vi tilbake med et uforpliktende
              tilbud.
            </p>

            {formSent ? (
              <div className="mt-8 rounded border border-orange/20 bg-orange/5 px-6 py-8 text-center">
                <Check size={28} className="mx-auto text-orange" />
                <p className="mt-3 font-semibold text-text">Takk for din henvendelse!</p>
                <p className="mt-1 text-sm text-text-muted">
                  Vi tar kontakt innen én virkedag.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Navn"
                    required
                    value={form.navn}
                    onChange={(e) =>
                      setForm({ ...form, navn: e.target.value })
                    }
                    className="rounded border border-stone bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-wood"
                  />
                  <input
                    type="text"
                    placeholder="Bedrift"
                    value={form.bedrift}
                    onChange={(e) =>
                      setForm({ ...form, bedrift: e.target.value })
                    }
                    className="rounded border border-stone bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-wood"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    placeholder="E-post"
                    required
                    value={form.epost}
                    onChange={(e) =>
                      setForm({ ...form, epost: e.target.value })
                    }
                    className="rounded border border-stone bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-wood"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={form.telefon}
                    onChange={(e) =>
                      setForm({ ...form, telefon: e.target.value })
                    }
                    className="rounded border border-stone bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-wood"
                  />
                </div>
                <textarea
                  placeholder="Beskriv hva du trenger..."
                  rows={5}
                  required
                  value={form.melding}
                  onChange={(e) =>
                    setForm({ ...form, melding: e.target.value })
                  }
                  className="w-full rounded border border-stone bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-wood"
                />
                <button
                  type="submit"
                  className="group flex items-center gap-2 rounded bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
                >
                  Send forespørsel
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-wood py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-3 lg:px-8">
          {/* Col 1 — company */}
          <div>
            <span className="font-heading text-xl text-white">Kysttre</span>
            <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[.15em] text-white/40">
              Byggevarer
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Engroshandel med tømmer, trelast, byggevarer og sanitærutstyr.
              Betjener profesjonelle aktører på Sunnmøre siden 1988.
            </p>
            <p className="mt-4 text-xs text-white/25">Org.nr: 912 345 678</p>
          </div>

          {/* Col 2 — links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Snarveier
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Col 3 — contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Kontakt
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/30" />
                <span>Industriveien 42, 6008 Ålesund</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="shrink-0 text-white/30" />
                <a href="tel:+4770123456" className="hover:text-white/80">
                  70 12 34 56
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-white/30" />
                <a href="mailto:post@kysttre.no" className="hover:text-white/80">
                  post@kysttre.no
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/8 px-5 pt-6 lg:px-8">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Kysttre Byggevarer AS. Alle
            rettigheter reservert.
          </p>
        </div>
      </footer>
    </>
  );
}
