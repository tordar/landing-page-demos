"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Calendar,
  Users,
  Waves,
  Mountain,
  Dumbbell,
  Trophy,
  Car,
  ArrowUpRight,
  Timer,
} from "lucide-react";

/* ───────── DATA ───────── */

const facilities = [
  {
    id: "flerbrukshall",
    name: "Flerbrukshall",
    icon: Trophy,
    size: "2 400 m²",
    desc: "Fullverdig håndballbane med tribunekapasitet for 800 tilskuere. Egnet for kamper, turneringer og messer.",
    hours: "06:00–23:00",
    features: ["Håndball", "Futsal", "Volleyball", "Messer"],
  },
  {
    id: "svommebasseng",
    name: "Svømmebasseng",
    icon: Waves,
    size: "25m × 6 baner",
    desc: "Oppvarmet 25-meters basseng med barnebasseng og stupetårn. Tilgjengelig for publikum, skoler og klubber.",
    hours: "06:30–21:00",
    features: ["Publikumsbading", "Svømmekurs", "Vannaerobic", "Stupetårn"],
  },
  {
    id: "klatrevegg",
    name: "Klatrevegg",
    icon: Mountain,
    size: "14m høyde",
    desc: "Regionens høyeste innendørs klatrevegg med 30 ruter i varierende vanskelighetsgrad. Buldrevegg inkludert.",
    hours: "10:00–21:00",
    features: ["Lead", "Buldring", "Topptau", "Kurs"],
  },
  {
    id: "friidrett",
    name: "Friidrettsbane",
    icon: Timer,
    size: "400m",
    desc: "Standard friidrettsbane med 6 løpebaner, lengdegrop, kulering og høydehoppanlegg.",
    hours: "07:00–22:00",
    features: ["Sprint", "Lengde", "Kule", "Høydehopp"],
  },
  {
    id: "styrkerom",
    name: "Styrkerom",
    icon: Dumbbell,
    size: "350 m²",
    desc: "Moderne styrkerom med frivekter, maskiner og funksjonell treningssone. Tilgjengelig for medlemmer og drop-in.",
    hours: "05:00–23:00",
    features: ["Frivekter", "Maskiner", "Funksjonell", "Drop-in"],
  },
];

const pricing = [
  { name: "Flerbrukshall — hel dag", price: "6 500", unit: "dag" },
  { name: "Flerbrukshall — kveldstid", price: "2 800", unit: "økt" },
  { name: "Svømmebasseng — baneleie", price: "1 200", unit: "time" },
  { name: "Klatrevegg — gruppeleie", price: "1 500", unit: "2 timer" },
  { name: "Møterom (20 pers.)", price: "800", unit: "halvdag" },
  { name: "Styrkerom — drop-in", price: "120", unit: "besøk" },
];

const events = [
  {
    date: "5. apr",
    day: "lør",
    title: "Regionsmesterskap håndball J16",
    location: "Flerbrukshall",
    time: "09:00–18:00",
  },
  {
    date: "12. apr",
    day: "lør",
    title: "Svømmestevne — Molde SK",
    location: "Svømmebasseng",
    time: "10:00–16:00",
  },
  {
    date: "19. apr",
    day: "lør",
    title: "Klatrekonkurranse — åpen klasse",
    location: "Klatrevegg",
    time: "12:00–17:00",
  },
  {
    date: "26. apr",
    day: "lør",
    title: "Fauske & Romsdal friidrettsstevne",
    location: "Friidrettsbane",
    time: "10:00–15:00",
  },
];

const tenants = [
  { name: "Molde HK", sport: "Håndball" },
  { name: "Storfjord Svømmeklubb", sport: "Svømming" },
  { name: "Romsdal Klatreklubb", sport: "Klatring" },
  { name: "Molde Friidrettsklubb", sport: "Friidrett" },
  { name: "Bjørset IL", sport: "Volleyball" },
  { name: "Molde Karateklubb", sport: "Kampsport" },
];

const navLinks = [
  { label: "Anlegg", href: "#anlegg" },
  { label: "Priser", href: "#priser" },
  { label: "Kalender", href: "#kalender" },
  { label: "Åpningstider", href: "#apningstider" },
  { label: "Kontakt", href: "#kontakt" },
];

/* ───────── COMPONENTS ───────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent font-display">
      <span className="w-8 h-px bg-accent" />
      {children}
    </span>
  );
}

/* ───────── PAGE ───────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFacility, setActiveFacility] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── NAV ─── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-deep/95 backdrop-blur-sm shadow-lg shadow-slate-deep/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-offwhite font-display font-extrabold text-sm tracking-tight">
              SA
            </div>
            <div className="flex flex-col">
              <span className="text-offwhite font-display font-bold text-sm leading-none tracking-tight">
                Storfjord Arena
              </span>
              <span className="text-grey text-[10px] tracking-widest uppercase mt-0.5">
                Molde
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-grey hover:text-offwhite transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-offwhite text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors font-display"
            >
              Book anlegg
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-offwhite p-2"
            aria-label="Meny"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-slate-deep/98 backdrop-blur-sm border-t border-white/5 animate-fade-in">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-offwhite text-lg font-display font-semibold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-accent text-offwhite font-semibold px-5 py-3 rounded-lg mt-2 font-display"
              >
                Book anlegg
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex items-end bg-slate-deep overflow-hidden">
        {/* Geometric accent */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/8 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-deep to-transparent" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Diagonal accent line */}
          <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent rotate-12 origin-top" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <SectionLabel>Regionens møteplass for idrett og kultur</SectionLabel>
            </div>

            <h1 className="mt-6 font-display font-extrabold text-offwhite text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-up stagger-1">
              Storfjord
              <br />
              Arena<span className="text-accent">.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-grey leading-relaxed max-w-xl animate-fade-up stagger-2">
              Fem moderne anlegg under ett tak i hjertet av Molde. Her trener
              eliteutøvere og mosjonister side om side — hver dag siden 2008.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up stagger-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-offwhite font-display font-bold text-base px-7 py-4 rounded-lg transition-colors"
              >
                Book anlegg
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#anlegg"
                className="inline-flex items-center gap-2.5 border border-white/15 hover:border-white/30 text-offwhite font-display font-semibold text-base px-7 py-4 rounded-lg transition-colors"
              >
                Se våre anlegg
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden animate-fade-up stagger-4">
            {[
              { value: "5", label: "Anlegg" },
              { value: "12 000+", label: "Brukere årlig" },
              { value: "6", label: "Klubber" },
              { value: "17", label: "År i drift" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/[0.03] px-6 py-5">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-offwhite">
                  {stat.value}
                </div>
                <div className="text-grey text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACILITIES ─── */}
      <section id="anlegg" className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Våre anlegg</SectionLabel>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-deep tracking-tight">
            Alt du trenger —<br className="hidden sm:block" /> under ett tak
          </h2>

          <div className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10">
            {/* Facility nav */}
            <div className="flex flex-col gap-2">
              {facilities.map((f, i) => {
                const Icon = f.icon;
                const isActive = i === activeFacility;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveFacility(i)}
                    className={`group flex items-center gap-4 text-left px-5 py-4 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-slate-deep text-offwhite shadow-lg shadow-slate-deep/10"
                        : "hover:bg-grey-warm text-slate"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? "bg-accent text-offwhite" : "bg-grey-light text-grey"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-base">
                        {f.name}
                      </div>
                      <div
                        className={`text-sm mt-0.5 ${
                          isActive ? "text-grey" : "text-grey"
                        }`}
                      >
                        {f.size}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ml-auto flex-shrink-0 transition-all ${
                        isActive
                          ? "opacity-100 text-accent"
                          : "opacity-0 group-hover:opacity-50"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Facility detail */}
            <div className="bg-slate-deep rounded-2xl p-8 sm:p-10 lg:p-12 text-offwhite relative overflow-hidden">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[80px]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                      {facilities[activeFacility].name}
                    </h3>
                    <p className="text-accent font-display font-semibold text-sm mt-1">
                      {facilities[activeFacility].size}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent flex-shrink-0">
                    {(() => {
                      const Icon = facilities[activeFacility].icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                </div>

                <p className="mt-6 text-grey text-base leading-relaxed">
                  {facilities[activeFacility].desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm text-grey">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>
                    Åpningstider:{" "}
                    <span className="text-offwhite font-medium">
                      {facilities[activeFacility].hours}
                    </span>
                  </span>
                </div>

                <div className="mt-8">
                  <div className="text-xs font-semibold tracking-widest uppercase text-grey mb-3">
                    Aktiviteter
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {facilities[activeFacility].features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 bg-white/[0.07] rounded-lg text-sm text-offwhite font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#kontakt"
                  className="mt-10 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-offwhite font-display font-bold text-sm px-6 py-3 rounded-lg transition-colors"
                >
                  Lei {facilities[activeFacility].name.toLowerCase()}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="priser" className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Priser & utleie</SectionLabel>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-deep tracking-tight">
            Enkel booking,
            <br className="hidden sm:block" /> transparente priser
          </h2>
          <p className="mt-4 text-grey text-lg max-w-xl">
            Alle priser er eks. mva. Rabatterte avtaler for faste leietakere og
            kommunale aktører. Ta kontakt for tilbud.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricing.map((item) => (
              <div
                key={item.name}
                className="group bg-offwhite rounded-xl p-6 hover:bg-slate-deep hover:text-offwhite transition-all duration-300 border border-grey-light hover:border-transparent"
              >
                <div className="text-sm text-grey group-hover:text-grey font-medium">
                  {item.name}
                </div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-3xl tracking-tight group-hover:text-offwhite">
                    {item.price}
                  </span>
                  <span className="text-sm text-grey">kr / {item.unit}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-grey-light group-hover:border-white/10">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-accent font-display"
                  >
                    Forespør
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section id="kalender" className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Kommende arrangementer</SectionLabel>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-deep tracking-tight">
            Det skjer alltid
            <br className="hidden sm:block" /> noe på arenaen
          </h2>

          <div className="mt-14 flex flex-col gap-3">
            {events.map((event, i) => (
              <div
                key={i}
                className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[100px_1fr_200px_auto] items-center gap-4 sm:gap-6 bg-surface rounded-xl px-6 py-5 hover:bg-slate-deep hover:text-offwhite transition-all duration-300 border border-grey-light hover:border-transparent"
              >
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-display font-extrabold text-lg leading-none">
                    {event.date}
                  </span>
                  <span className="text-xs text-grey uppercase tracking-wider mt-1">
                    {event.day}
                  </span>
                </div>

                <div>
                  <div className="font-display font-bold text-base">
                    {event.title}
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-sm text-grey">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-sm text-grey">
                  {event.time}
                </div>

                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPENING HOURS ─── */}
      <section id="apningstider" className="py-24 lg:py-32 bg-slate-deep text-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Åpningstider</SectionLabel>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Tidlig morgen til
            <br className="hidden sm:block" /> sen kveld — hver dag
          </h2>
          <p className="mt-4 text-grey text-lg max-w-xl">
            Åpningstidene varierer per anlegg. Reduserte tider i helger og
            helligdager.
          </p>

          <div className="mt-14 overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-left text-xs font-semibold tracking-widest uppercase text-grey">
                    Anlegg
                  </th>
                  <th className="pb-4 text-left text-xs font-semibold tracking-widest uppercase text-grey">
                    Man–Fre
                  </th>
                  <th className="pb-4 text-left text-xs font-semibold tracking-widest uppercase text-grey">
                    Lørdag
                  </th>
                  <th className="pb-4 text-left text-xs font-semibold tracking-widest uppercase text-grey">
                    Søndag
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    name: "Flerbrukshall",
                    weekday: "06:00–23:00",
                    sat: "08:00–20:00",
                    sun: "10:00–18:00",
                  },
                  {
                    name: "Svømmebasseng",
                    weekday: "06:30–21:00",
                    sat: "08:00–18:00",
                    sun: "10:00–17:00",
                  },
                  {
                    name: "Klatrevegg",
                    weekday: "10:00–21:00",
                    sat: "10:00–18:00",
                    sun: "12:00–17:00",
                  },
                  {
                    name: "Friidrettsbane",
                    weekday: "07:00–22:00",
                    sat: "08:00–18:00",
                    sun: "Stengt",
                  },
                  {
                    name: "Styrkerom",
                    weekday: "05:00–23:00",
                    sat: "07:00–20:00",
                    sun: "08:00–20:00",
                  },
                ].map((row) => (
                  <tr key={row.name} className="group">
                    <td className="py-4 font-display font-bold text-base">
                      {row.name}
                    </td>
                    <td className="py-4 text-sm text-grey group-hover:text-offwhite transition-colors">
                      {row.weekday}
                    </td>
                    <td className="py-4 text-sm text-grey group-hover:text-offwhite transition-colors">
                      {row.sat}
                    </td>
                    <td
                      className={`py-4 text-sm transition-colors ${
                        row.sun === "Stengt"
                          ? "text-accent font-medium"
                          : "text-grey group-hover:text-offwhite"
                      }`}
                    >
                      {row.sun}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── TENANTS ─── */}
      <section className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Faste leietakere</SectionLabel>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-deep tracking-tight">
            Hjem for {tenants.length} klubber
          </h2>
          <p className="mt-4 text-grey text-lg max-w-xl">
            Storfjord Arena er fast treningsarena for regionens fremste
            idrettslag. Vi tilbyr langsiktige leieavtaler tilpasset klubbenes
            behov.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tenants.map((tenant) => (
              <div
                key={tenant.name}
                className="bg-surface rounded-xl p-5 text-center border border-grey-light hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-deep/5 mx-auto flex items-center justify-center">
                  <Users className="w-5 h-5 text-slate" />
                </div>
                <div className="mt-3 font-display font-bold text-sm text-slate-deep">
                  {tenant.name}
                </div>
                <div className="text-xs text-grey mt-1">{tenant.sport}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / LOCATION ─── */}
      <section id="kontakt" className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionLabel>Kontakt & beliggenhet</SectionLabel>
              <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-deep tracking-tight">
                Finn oss i
                <br />
                Molde sentrum
              </h2>
              <p className="mt-4 text-grey text-lg">
                Storfjord Arena ligger sentralt i Molde med god tilgang til
                offentlig transport og rikelig med parkering.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Adresse</div>
                    <div className="text-grey text-sm mt-0.5">
                      Idrettsveien 12, 6413 Molde
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Telefon</div>
                    <div className="text-grey text-sm mt-0.5">71 20 45 00</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">E-post</div>
                    <div className="text-grey text-sm mt-0.5">
                      post@storfjordarena.no
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Parkering</div>
                    <div className="text-grey text-sm mt-0.5">
                      120 gratis parkeringsplasser. HC-plasser ved
                      hovedinngang. Ladestasjon for elbil.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div className="bg-slate-deep rounded-2xl p-8 sm:p-10 text-offwhite">
              <h3 className="font-display font-extrabold text-xl tracking-tight">
                Send forespørsel
              </h3>
              <p className="text-grey text-sm mt-2">
                Fyll ut skjemaet så tar vi kontakt innen 24 timer.
              </p>

              <form
                className="mt-8 flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-grey mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    placeholder="Fullt navn"
                    className="w-full bg-white/[0.07] border border-white/10 rounded-lg px-4 py-3 text-sm text-offwhite placeholder:text-grey/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-grey mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    placeholder="din@epost.no"
                    className="w-full bg-white/[0.07] border border-white/10 rounded-lg px-4 py-3 text-sm text-offwhite placeholder:text-grey/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-grey mb-2">
                    Anlegg
                  </label>
                  <select className="w-full bg-white/[0.07] border border-white/10 rounded-lg px-4 py-3 text-sm text-offwhite focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="">Velg anlegg</option>
                    {facilities.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-grey mb-2">
                    Melding
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Beskriv ditt behov — dato, antall deltakere, type arrangement..."
                    className="w-full bg-white/[0.07] border border-white/10 rounded-lg px-4 py-3 text-sm text-offwhite placeholder:text-grey/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-accent hover:bg-accent-hover text-offwhite font-display font-bold text-sm px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send forespørsel
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-slate-deep text-offwhite py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center font-display font-extrabold text-sm text-offwhite">
                  SA
                </div>
                <div>
                  <div className="font-display font-bold text-sm">
                    Storfjord Arena
                  </div>
                  <div className="text-grey text-[10px] tracking-widest uppercase">
                    Molde
                  </div>
                </div>
              </div>
              <p className="mt-4 text-grey text-sm leading-relaxed">
                Regionens møteplass for idrett og kultur. Driftet med stolthet
                siden 2008.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-grey mb-4">
                Anlegg
              </h4>
              <ul className="flex flex-col gap-2.5">
                {facilities.map((f) => (
                  <li key={f.id}>
                    <a
                      href="#anlegg"
                      className="text-sm text-grey hover:text-offwhite transition-colors"
                    >
                      {f.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-grey mb-4">
                Informasjon
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Priser & utleie",
                  "Åpningstider",
                  "Arrangementer",
                  "Leietakere",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-grey hover:text-offwhite transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-grey mb-4">
                Kontakt
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-grey">
                <li>Idrettsveien 12, 6413 Molde</li>
                <li>71 20 45 00</li>
                <li>post@storfjordarena.no</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-grey">
              &copy; {new Date().getFullYear()} Storfjord Arena AS. Alle
              rettigheter reservert.
            </div>
            <div className="flex gap-6 text-xs text-grey">
              <a href="#" className="hover:text-offwhite transition-colors">
                Personvern
              </a>
              <a href="#" className="hover:text-offwhite transition-colors">
                Vilkår
              </a>
              <a href="#" className="hover:text-offwhite transition-colors">
                Tilgjengelighet
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
