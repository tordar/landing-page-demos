"use client";

import { useState, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: "01",
    title: "Yrkesskade",
    sub: "Arbeidsulykker og yrkessykdommer",
    desc: "Ble du skadet på jobb eller utviklet sykdom av arbeidsmiljøet? Vi hjelper deg med å sikre full erstatning fra arbeidsgiver og yrkesskadeforsikringen.",
  },
  {
    num: "02",
    title: "Trafikkskade",
    sub: "Erstatning etter trafikkulykker",
    desc: "Personskade etter trafikkulykke gir deg rett på erstatning. Vi fører saken mot forsikringsselskapet og sikrer at du får det du faktisk har krav på.",
  },
  {
    num: "03",
    title: "Familierett",
    sub: "Skilsmisse, barnefordeling og arv",
    desc: "Juridisk bistand i de vanskeligste livssituasjonene – vi sikrer dine interesser og barnets beste med fasthet og empati.",
  },
  {
    num: "04",
    title: "Arbeidsrett",
    sub: "Oppsigelse, diskriminering og tvister",
    desc: "Urettmessig oppsagt eller diskriminert på arbeidsplassen? Vi kjenner arbeidsmiljøloven og kjemper for dine rettigheter.",
  },
  {
    num: "05",
    title: "NAV-saker",
    sub: "Klager og anker mot NAV",
    desc: "NAV-systemet er komplekst og regelverket krevende. Vi hjelper deg gjennom klageprosessen og representerer deg i Trygderetten.",
  },
  {
    num: "06",
    title: "Forsikringssaker",
    sub: "Tvister med forsikringsselskaper",
    desc: "Forsikringsselskapet avviser kravet ditt? Vi kjenner avtalevilkårene og kjemper for din rett til full dekning.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Etter mange avslag fra NAV ga jeg opp håpet. Erik tok saken min og vi vant i Trygderetten. Uten ham hadde jeg aldri fått uføretrygden jeg hadde krav på.",
    name: "Ingrid T.",
    location: "Bærum",
  },
  {
    quote:
      "Grundig, tilgjengelig og ærlig. Fikk hjelp med en komplisert yrkesskade – Erik var alltid klar over statusen i saken.",
    name: "Lars H.",
    location: "Oslo",
  },
  {
    quote:
      "Rask respons og tydelig kommunikasjon gjennom hele prosessen. Har allerede anbefalt Holm Advokatkontor til to kolleger.",
    name: "Mohammed A.",
    location: "Oslo",
  },
  {
    quote:
      "Bistod oss i en krevende skilsmissesak med barnefordelingsspørsmål. Alltid tilgjengelig og genuint opptatt av utfallet for familien.",
    name: "Kari L.",
    location: "Lørenskog",
  },
];

const NAV_ITEMS = [
  { label: "Tjenester", href: "#tjenester" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Klienter sier", href: "#referanser" },
  { label: "Kontakt", href: "#kontakt" },
];

// ── Stars ─────────────────────────────────────────────────────────────
function Stars({ count = 5, size = "sm" }: { count?: number; size?: "sm" | "xs" }) {
  const s = size === "xs" ? "w-3 h-3" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`${s} text-[#a6863e]`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" };

  return (
    <div className="bg-[#f6f3ec]">

      {/* ── NAVBAR ───────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f6f3ec]/96 backdrop-blur-sm border-b border-[#ddd8cc] shadow-[0_1px_8px_rgba(12,26,46,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="text-xl font-bold tracking-wide text-[#0c1a2e]" style={serif}>
              HOLM
            </span>
            <span className="w-px h-4 bg-[#a6863e]" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#0c1a2e]/60 font-light">
              Advokatkontor
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[13px] text-[#0c1a2e]/60 hover:text-[#0c1a2e] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:flex items-center px-5 py-2 bg-[#0c1a2e] text-[#f6f3ec] text-[13px] tracking-wide hover:bg-[#162237] transition-colors"
          >
            Gratis konsultasjon
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Åpne meny"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#0c1a2e] origin-center transition-transform duration-200 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#0c1a2e] transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#0c1a2e] origin-center transition-transform duration-200 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#f6f3ec] border-t border-[#ddd8cc] px-6 py-5 flex flex-col gap-5">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#0c1a2e]/70 hover:text-[#0c1a2e]"
              >
                {label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0c1a2e] text-[#f6f3ec] text-sm w-full mt-1"
            >
              Gratis konsultasjon
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">

            {/* Left – editorial text */}
            <div>
              <p className="fade-up text-[11px] tracking-[0.32em] uppercase text-[#a6863e] mb-7">
                Oslo · Erstatning · Arbeidsrett · Familierett
              </p>

              <h1
                className="fade-up-d1 font-light leading-[1.06] tracking-tight text-[#0c1a2e] mb-8"
                style={{
                  ...serif,
                  fontSize: "clamp(3.2rem, 6.5vw, 5.5rem)",
                }}
              >
                Din advokat
                <br />
                <em className="not-italic" style={{ color: "#a6863e" }}>
                  for det som
                </em>
                <br />
                virkelig betyr noe.
              </h1>

              <div className="fade-up-d2 w-14 h-px bg-[#a6863e] mb-7" />

              <p className="fade-up-d2 text-[#0c1a2e]/55 text-[15px] leading-relaxed max-w-md mb-10">
                Vi bistår privatpersoner i saker mot forsikringsselskaper,
                arbeidsgivere og NAV. Første konsultasjon er alltid gratis
                og uforpliktende.
              </p>

              <div className="fade-up-d3 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="px-7 py-3 bg-[#0c1a2e] text-[#f6f3ec] text-[13px] tracking-wide hover:bg-[#162237] transition-colors"
                >
                  Book gratis konsultasjon
                </a>
                <a
                  href="#tjenester"
                  className="px-7 py-3 border border-[#0c1a2e]/20 text-[#0c1a2e] text-[13px] tracking-wide hover:border-[#0c1a2e]/50 transition-colors"
                >
                  Se tjenestene →
                </a>
              </div>

              {/* Stats */}
              <div className="fade-up-d4 flex flex-wrap gap-8 mt-14 pt-10 border-t border-[#ddd8cc]">
                {[
                  { val: "18+", label: "Års erfaring" },
                  { val: "1 000+", label: "Saker ført" },
                  { val: "5,0 ★", label: "Snittvurdering" },
                  { val: "Fri", label: "Rettshjelp" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div
                      className="text-3xl font-light text-[#0c1a2e] leading-none"
                      style={serif}
                    >
                      {val}
                    </div>
                    <div className="text-[11px] text-[#0c1a2e]/45 tracking-wide mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – dark identity panel */}
            <div className="hidden md:block">
              <div
                className="bg-[#0c1a2e] relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 48px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 48px)",
                  }}
                />
                {/* Diagonal texture */}
                <div
                  className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 32px)",
                  }}
                />
                {/* Large bg monogram */}
                <div
                  className="absolute -bottom-4 -right-6 leading-none text-white/[0.04] italic select-none"
                  style={{ ...serif, fontSize: "14rem", fontWeight: 700 }}
                >
                  EH
                </div>

                {/* Top badge */}
                <div className="absolute top-8 left-8 right-8">
                  <div className="w-8 h-px bg-[#a6863e] mb-5" />
                  <div
                    className="text-5xl font-light text-white/80 italic"
                    style={serif}
                  >
                    E.H.
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div
                    className="text-2xl text-white font-light mb-1"
                    style={serif}
                  >
                    Erik Holm
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
                    Advokat · Oslo sentrum
                  </div>
                  <div className="w-6 h-px bg-[#a6863e] mb-4" />
                  <div className="text-[11px] text-white/40 leading-[1.8]">
                    Cand.jur. Universitetet i Oslo
                    <br />
                    Spesialist i personskadeerstatning
                    <br />
                    Medlem av Advokatforeningen
                  </div>
                </div>
              </div>

              {/* Small gold offset accent */}
              <div className="h-1.5 bg-[#a6863e]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="tjenester" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-[#a6863e] mb-3">
                Tjenester
              </p>
              <h2
                className="font-light text-[#0c1a2e] leading-tight"
                style={{ ...serif, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
              >
                Våre tjenester
              </h2>
            </div>
            <p className="text-[13px] text-[#0c1a2e]/45 max-w-xs leading-relaxed">
              Usikker på om vi kan hjelpe? Ta kontakt – første samtale er alltid
              gratis og uforpliktende.
            </p>
          </div>

          <div className="grid md:grid-cols-2 border-t border-[#e5e1d8]">
            {SERVICES.map((svc) => (
              <div
                key={svc.num}
                className="group flex gap-5 py-8 px-4 border-b border-[#e5e1d8] hover:bg-[#f6f3ec] transition-colors"
              >
                <span
                  className="flex-shrink-0 text-[2.25rem] font-light leading-none mt-0.5 text-[#a6863e]/25 group-hover:text-[#a6863e]/55 transition-colors w-12"
                  style={serif}
                >
                  {svc.num}
                </span>
                <div>
                  <h3
                    className="text-[1.2rem] font-medium text-[#0c1a2e] leading-snug mb-1"
                    style={serif}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[11px] text-[#a6863e] tracking-wide mb-2">
                    {svc.sub}
                  </p>
                  <p className="text-[13px] text-[#0c1a2e]/50 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────── */}
      <section className="bg-[#f6f3ec] py-24 border-y border-[#ddd8cc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-[#ddd8cc]">
            {[
              {
                n: "01",
                title: "Personlig oppfølging",
                text: "Du snakker alltid direkte med advokaten – ikke en assistent eller et saksbehandlingssystem. Vi holder deg oppdatert gjennom hele prosessen.",
              },
              {
                n: "02",
                title: "Gratis første møte",
                text: "Vi vurderer saken din uten forpliktelser. Du vet hva vi kan gjøre for deg – og hva det koster – før du bestemmer deg.",
              },
              {
                n: "03",
                title: "Fri rettshjelp",
                text: "De fleste sakene våre dekkes av rettshjelpsforsikring eller fri rettshjelp. Vi undersøker dette for deg allerede i det første møtet.",
              },
            ].map(({ n, title, text }) => (
              <div key={n} className="bg-[#f6f3ec] p-10 md:p-12">
                <div
                  className="text-5xl font-light text-[#a6863e]/18 mb-7 leading-none"
                  style={serif}
                >
                  {n}
                </div>
                <h3
                  className="text-[1.25rem] font-medium text-[#0c1a2e] mb-3 leading-snug"
                  style={serif}
                >
                  {title}
                </h3>
                <p className="text-[13px] text-[#0c1a2e]/50 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section id="om-oss" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Photo placeholder */}
            <div className="relative">
              <div
                className="bg-[#0c1a2e] relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 56px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 56px)",
                  }}
                />
                {/* Diagonal accent */}
                <div
                  className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 36px)",
                  }}
                />
                {/* Large initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-[9rem] font-light italic leading-none text-white/[0.07] select-none"
                    style={serif}
                  >
                    EH
                  </div>
                </div>
                {/* Bottom name plate */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-10 h-px bg-[#a6863e] mb-4" />
                  <div className="text-2xl text-white font-light mb-1" style={serif}>
                    Erik Holm
                  </div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-white/40">
                    Advokat · Oslo
                  </div>
                </div>
              </div>
              {/* Offset accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-[#a6863e]/20 bg-[#a6863e]/6 -z-10" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-[#a6863e] mb-4">
                Om advokat Holm
              </p>
              <h2
                className="font-light text-[#0c1a2e] leading-tight mb-5"
                style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                18 år med mennesker i
                <br />
                <em>krevende livssituasjoner</em>
              </h2>
              <div className="w-12 h-px bg-[#a6863e] mb-6" />
              <p className="text-[14px] text-[#0c1a2e]/55 leading-relaxed mb-4">
                Erik Holm har siden 2006 representert privatpersoner i saker mot
                forsikringsselskaper, arbeidsgivere og offentlige myndigheter. Han
                spesialiserte seg tidlig på personskadeerstatning og har i løpet
                av karrieren ført over tusen saker – fra enkle forsikringsoppgjør
                til prinsipielle saker for Høyesterett.
              </p>
              <p className="text-[14px] text-[#0c1a2e]/55 leading-relaxed mb-10">
                Kontoret er bevisst holdt lite for å sikre at hver klient får
                personlig og dedikert oppfølging. Erik møter alle klienter selv
                – fra første samtale til saken er avsluttet.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cand.jur. UiO 2006",
                  "Medlem av Advokatforeningen",
                  "Spesialist i personskade",
                  "1 000+ saker ført",
                ].map((cred) => (
                  <div key={cred} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#a6863e] mt-[5px] flex-shrink-0" />
                    <span className="text-[12px] text-[#0c1a2e]/55">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section id="referanser" className="bg-[#0c1a2e] py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-[#a6863e] mb-3">
                Referanser
              </p>
              <h2
                className="font-light text-white leading-tight"
                style={{ ...serif, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
              >
                Klienter sier
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-white/40 text-[12px]">
                5,0 av 5 · 47 vurderinger
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="border border-white/10 p-8 hover:border-[#a6863e]/35 transition-colors group"
              >
                <div
                  className="text-5xl leading-none text-[#a6863e]/30 mb-4 group-hover:text-[#a6863e]/50 transition-colors"
                  style={serif}
                >
                  "
                </div>
                <p className="text-white/65 text-[14px] leading-relaxed mb-7 italic">
                  {t.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-[14px]">{t.name}</div>
                    <div className="text-white/40 text-[12px]">{t.location}</div>
                  </div>
                  <Stars count={5} size="xs" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="bg-[#a6863e] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="font-light text-white leading-tight mb-4"
            style={{ ...serif, fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            Usikker på om du har en sak?
          </h2>
          <p className="text-white/80 text-[14px] max-w-sm mx-auto mb-10 leading-relaxed">
            Første konsultasjon er alltid gratis og uforpliktende. Vi vurderer
            saken din og forteller deg hva vi kan gjøre for deg.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#kontakt"
              className="px-8 py-3 bg-white text-[#a6863e] text-[13px] font-medium hover:bg-[#f6f3ec] transition-colors"
            >
              Book gratis konsultasjon
            </a>
            <a
              href="tel:+4722334455"
              className="px-8 py-3 border border-white/40 text-white text-[13px] hover:border-white transition-colors"
            >
              Ring +47 22 33 44 55
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="kontakt" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20">

            {/* Contact info */}
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-[#a6863e] mb-4">
                Kontakt oss
              </p>
              <h2
                className="font-light text-[#0c1a2e] leading-tight mb-10"
                style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Vi er lett å nå
              </h2>

              <div className="space-y-7">
                {[
                  { label: "Adresse", val: "Stortingsgata 22, 0161 Oslo" },
                  { label: "Telefon", val: "+47 22 33 44 55" },
                  { label: "E-post", val: "post@holmadvokat.no" },
                  { label: "Åpningstider", val: "Mandag–fredag 08:00–17:00" },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-[#a6863e] mb-1">
                      {label}
                    </div>
                    <div className="text-[#0c1a2e] text-[14px]">{val}</div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="mt-10 bg-[#f6f3ec] border border-[#ddd8cc] flex items-center justify-center"
                style={{ height: 200 }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1.5">📍</div>
                  <div className="text-[12px] text-[#0c1a2e]/40">
                    Stortingsgata 22, Oslo sentrum
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0c1a2e]/45 mb-1.5">
                    Navn
                  </label>
                  <input
                    type="text"
                    placeholder="Ditt navn"
                    className="w-full border border-[#ddd8cc] bg-[#f6f3ec] px-4 py-3 text-[13px] text-[#0c1a2e] placeholder:text-[#0c1a2e]/25 focus:outline-none focus:border-[#a6863e] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0c1a2e]/45 mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+47"
                    className="w-full border border-[#ddd8cc] bg-[#f6f3ec] px-4 py-3 text-[13px] text-[#0c1a2e] placeholder:text-[#0c1a2e]/25 focus:outline-none focus:border-[#a6863e] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0c1a2e]/45 mb-1.5">
                  E-post
                </label>
                <input
                  type="email"
                  placeholder="din@epost.no"
                  className="w-full border border-[#ddd8cc] bg-[#f6f3ec] px-4 py-3 text-[13px] text-[#0c1a2e] placeholder:text-[#0c1a2e]/25 focus:outline-none focus:border-[#a6863e] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0c1a2e]/45 mb-1.5">
                  Hva gjelder saken?
                </label>
                <select className="w-full border border-[#ddd8cc] bg-[#f6f3ec] px-4 py-3 text-[13px] text-[#0c1a2e] focus:outline-none focus:border-[#a6863e] transition-colors appearance-none">
                  <option value="">Velg kategori...</option>
                  <option>Yrkesskade</option>
                  <option>Trafikkskade</option>
                  <option>Familierett</option>
                  <option>Arbeidsrett</option>
                  <option>NAV-saker</option>
                  <option>Forsikringssaker</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0c1a2e]/45 mb-1.5">
                  Beskrivelse
                </label>
                <textarea
                  rows={5}
                  placeholder="Beskriv saken din kort – vi svarer innen én virkedag."
                  className="w-full border border-[#ddd8cc] bg-[#f6f3ec] px-4 py-3 text-[13px] text-[#0c1a2e] placeholder:text-[#0c1a2e]/25 focus:outline-none focus:border-[#a6863e] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0c1a2e] text-[#f6f3ec] text-[13px] tracking-wide hover:bg-[#162237] transition-colors"
              >
                Send henvendelse — gratis og uforpliktende
              </button>

              <p className="text-[11px] text-[#0c1a2e]/35 text-center">
                Vi svarer innen én virkedag. Alle opplysninger behandles
                konfidensielt.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-[#0c1a2e] pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-14">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-lg font-bold tracking-wide text-white" style={serif}>
                  HOLM
                </span>
                <span className="w-px h-4 bg-[#a6863e]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/45">
                  Advokatkontor
                </span>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed max-w-xs">
                Spesialist innen erstatning, arbeidsrett og familierett.
                Personlig, dedikert juridisk bistand i Oslo siden 2006.
              </p>
            </div>

            {/* Services */}
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#a6863e] mb-5">
                Tjenester
              </div>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.num}>
                    <a
                      href="#tjenester"
                      className="text-[12px] text-white/35 hover:text-white/65 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#a6863e] mb-5">
                Kontakt
              </div>
              <ul className="space-y-2 text-[12px] text-white/35">
                <li>Stortingsgata 22</li>
                <li>0161 Oslo</li>
                <li className="pt-1">+47 22 33 44 55</li>
                <li>post@holmadvokat.no</li>
                <li className="pt-1">Man–fre 08:00–17:00</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[11px] text-white/25">
              © 2025 Holm Advokatkontor AS · Org.nr. 123 456 789
            </p>
            <div className="flex gap-6">
              {["Personvern", "Vilkår for bruk"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] text-white/25 hover:text-white/55 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
