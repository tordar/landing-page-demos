"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  Mail,
  Users,
  Trophy,
  Heart,
  Calendar,
  ArrowUpRight,
  Star,
  Shield,
  Footprints,
  Mountain,
  Volleyball,
  Bike,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Aktiviteter", href: "#aktiviteter" },
  { label: "Treninger", href: "#treninger" },
  { label: "Aktuelt", href: "#aktuelt" },
  { label: "Dugnad", href: "#dugnad" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

const ACTIVITIES = [
  {
    name: "Fotball",
    members: 284,
    teams: 12,
    ages: "6–senior",
    icon: Footprints,
    color: "#1a6b3c",
    description: "Fra knøttefotball til A-lag. Treninger hele året.",
  },
  {
    name: "Håndball",
    members: 156,
    teams: 8,
    ages: "8–senior",
    icon: Trophy,
    color: "#d4a843",
    description: "Sterk håndballtradisjon siden 1960-tallet.",
  },
  {
    name: "Friidrett",
    members: 98,
    teams: 4,
    ages: "10–senior",
    icon: Bike,
    color: "#1a6b3c",
    description: "Sprint, hopp, kast og langdistanse.",
  },
  {
    name: "Ski",
    members: 167,
    teams: 6,
    ages: "7–senior",
    icon: Mountain,
    color: "#d4a843",
    description: "Langrenn og skiskyting i Trondheims fineste løyper.",
  },
  {
    name: "Turn",
    members: 112,
    teams: 5,
    ages: "4–16",
    icon: Star,
    color: "#1a6b3c",
    description: "Apparatturn og rytmisk gymnastikk for barn og ungdom.",
  },
  {
    name: "Volleyball",
    members: 73,
    teams: 3,
    ages: "14–senior",
    icon: Volleyball,
    color: "#d4a843",
    description: "Innendørs og sandvolleyball gjennom hele sesongen.",
  },
];

const SCHEDULE = [
  { day: "Mandag", activity: "Fotball J10–J13", time: "17:00–18:30", location: "Nordvik kunstgress" },
  { day: "Mandag", activity: "Håndball senior damer", time: "19:00–20:30", location: "Nordvikhallen" },
  { day: "Tirsdag", activity: "Turn 4–8 år", time: "16:30–17:30", location: "Nordvikhallen" },
  { day: "Tirsdag", activity: "Friidrett ungdom", time: "17:30–19:00", location: "Nordvik stadion" },
  { day: "Onsdag", activity: "Fotball G7–G10", time: "17:00–18:00", location: "Nordvik kunstgress" },
  { day: "Onsdag", activity: "Volleyball mix", time: "19:00–20:30", location: "Nordvikhallen" },
  { day: "Torsdag", activity: "Ski 7–12 år", time: "17:00–18:30", location: "Estenstadmarka" },
  { day: "Torsdag", activity: "Håndball J14–J16", time: "18:00–19:30", location: "Nordvikhallen" },
  { day: "Fredag", activity: "Fotball A-lag herrer", time: "18:00–19:30", location: "Nordvik kunstgress" },
  { day: "Lørdag", activity: "Turn 9–16 år", time: "10:00–12:00", location: "Nordvikhallen" },
];

const NEWS = [
  {
    date: "22. mars 2026",
    tag: "Arrangement",
    title: "Nordvik Cup 2026 — Påmelding åpen!",
    excerpt:
      "Årets største fotballturnering for barn og ungdom arrangeres 13.–15. juni. Over 80 lag fra hele Trøndelag forventes.",
  },
  {
    date: "18. mars 2026",
    tag: "Resultat",
    title: "Håndballjentene til NM-sluttspill",
    excerpt:
      "J16-laget kvalifiserte seg til NM etter sterk seier 28–21 mot Ranheim i regionfinalen.",
  },
  {
    date: "12. mars 2026",
    tag: "Klubben",
    title: "Ny friidrettsbane åpner i mai",
    excerpt:
      "Etter to års arbeid er den nye tartanbanen klar. Offisiell åpning 3. mai med friidrettsstevne for alle aldersgrupper.",
  },
  {
    date: "5. mars 2026",
    tag: "Dugnad",
    title: "Vårdugnaden 12. april — bli med!",
    excerpt:
      "Vi rydder, maler og fikser anlegget klart for sesongen. Alle familier oppfordres til å stille. Pizza og brus etterpå!",
  },
];

const BOARD = [
  { name: "Kari Nordvik", role: "Leder", since: "2022" },
  { name: "Bjørn Haugen", role: "Nestleder", since: "2023" },
  { name: "Ingrid Solberg", role: "Økonomiansvarlig", since: "2021" },
  { name: "Erik Dahl", role: "Sportslig leder", since: "2024" },
  { name: "Marte Vik", role: "Ungdomsansvarlig", since: "2023" },
  { name: "Olav Strand", role: "Anleggsansvarlig", since: "2022" },
];

const SPONSORS = [
  "Nordvik Bilverksted",
  "Trøndelag Bygg AS",
  "Bakeri Solsiden",
  "SportXtra Trondheim",
  "Fosen Energi",
  "Heimdal Elektro",
  "Lade Dagligvare",
  "Nidarvoll Regnskap",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredSchedule = activeDay
    ? SCHEDULE.filter((s) => s.day === activeDay)
    : SCHEDULE;

  const days = [...new Set(SCHEDULE.map((s) => s.day))];

  return (
    <>
      {/* ─── NAV ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_var(--border-subtle)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${
                scrolled ? "bg-club-green" : "bg-white"
              }`}
            >
              <Shield
                size={20}
                className={`transition-colors duration-500 ${
                  scrolled ? "text-white" : "text-club-green"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg font-bold leading-tight tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                Nordvik IL
              </span>
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-500 ${
                  scrolled ? "text-text-muted" : "text-white/70"
                }`}
              >
                Est. 1947
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-charcoal hover:bg-club-green-light"
                    : "text-white/90 hover:bg-white/15"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bli-medlem"
              className={`ml-3 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                scrolled
                  ? "bg-club-green text-white hover:bg-club-green-dark"
                  : "bg-white text-club-green hover:bg-club-gold hover:text-charcoal"
              }`}
            >
              Bli medlem
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-border-subtle px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:bg-club-green-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bli-medlem"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 rounded-full bg-club-green px-5 py-3 text-center text-sm font-bold text-white"
            >
              Bli medlem
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-club-green">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                white 40px,
                white 42px
              )`,
            }}
          />
        </div>

        {/* Large decorative year */}
        <div
          className={`absolute top-[15%] right-[-2%] font-display text-[20vw] font-bold leading-none text-white/[0.04] select-none transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          1947
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-48">
          <div className="max-w-3xl">
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <MapPin size={14} />
              Trondheim · Siden 1947
            </div>

            <h1
              className={`font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Idrettsglede
              <br />
              for hele
              <br />
              <span className="text-club-gold">bygda</span>
            </h1>

            <p
              className={`mt-8 max-w-lg text-lg leading-relaxed text-white/75 transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Nordvik Idrettslag samler over 890 aktive medlemmer i seks idretter.
              Fellesskap, mestring og gode opplevelser — fra 4 til 80 år.
            </p>

            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#bli-medlem"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-club-green transition-all hover:bg-club-gold hover:text-charcoal"
              >
                Bli medlem i dag
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#aktiviteter"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-4 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Se våre aktiviteter
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className={`mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-4 lg:mt-20 transition-all duration-700 delay-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "890+", label: "Aktive medlemmer" },
              { value: "38", label: "Lag og grupper" },
              { value: "6", label: "Idretter" },
              { value: "77", label: "År med idrettsglede" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.06] px-6 py-6 backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACTIVITIES ─── */}
      <section id="aktiviteter" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-club-green">
                Våre idretter
              </span>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-charcoal">
                Noe for alle,
                <br />
                hele året
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-text-muted lg:text-right">
              Fra de yngste knøttene til de erfarne seniorene —
              vi tilbyr et bredt idrettstilbud der alle finner sin plass.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.name}
                  className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-white p-8 transition-all duration-300 hover:border-club-green/20 hover:shadow-[0_8px_30px_-12px_rgba(26,107,60,0.15)]"
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{ backgroundColor: activity.color + "12" }}
                  >
                    <Icon size={22} style={{ color: activity.color }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {activity.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {activity.description}
                  </p>
                  <div className="mt-5 flex gap-4 text-xs font-medium text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Users size={13} />
                      {activity.members} utøvere
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield size={13} />
                      {activity.teams} lag
                    </span>
                  </div>
                  <div className="mt-4 border-t border-border-subtle pt-4">
                    <span className="text-xs font-medium text-club-green">
                      Alder: {activity.ages}
                    </span>
                  </div>
                  <div className="absolute right-6 top-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} className="text-club-green" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TRAINING SCHEDULE ─── */}
      <section id="treninger" className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-club-gold">
                Treningsoversikt
              </span>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
                Denne ukens
                <br />
                treninger
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Oversikt over faste treninger. Sjekk med din treningsgruppe for eventuelle endringer.
            </p>
          </div>

          {/* Day filters */}
          <div className="mt-10 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDay(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeDay === null
                  ? "bg-club-green text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
              }`}
            >
              Alle dager
            </button>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(activeDay === day ? null : day)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeDay === day
                    ? "bg-club-green text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule table */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[140px_1fr_140px_1fr] gap-px bg-white/5 text-xs font-bold uppercase tracking-[0.15em] text-white/40 sm:grid">
              <div className="bg-charcoal-light px-6 py-4">Dag</div>
              <div className="bg-charcoal-light px-6 py-4">Aktivitet</div>
              <div className="bg-charcoal-light px-6 py-4">Tid</div>
              <div className="bg-charcoal-light px-6 py-4">Sted</div>
            </div>
            {filteredSchedule.map((item, i) => (
              <div
                key={`${item.day}-${item.activity}`}
                className={`grid gap-2 border-t border-white/5 px-6 py-4 sm:grid-cols-[140px_1fr_140px_1fr] sm:gap-px transition-colors hover:bg-white/[0.03] ${
                  i === 0 ? "border-t-0" : ""
                }`}
              >
                <div className="text-sm font-semibold text-club-gold sm:text-white/50 sm:font-normal">
                  {item.day}
                </div>
                <div className="text-sm font-medium text-white">
                  {item.activity}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <Clock size={13} className="shrink-0 text-white/40" />
                  {item.time}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin size={13} className="shrink-0 text-white/40" />
                  {item.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS ─── */}
      <section id="aktuelt" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-club-green">
            Aktuelt
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-charcoal">
            Siste nytt fra
            <br />
            Nordvik IL
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2">
            {NEWS.map((item, i) => (
              <article
                key={i}
                className="group relative bg-white p-8 transition-colors hover:bg-club-green-light/50 lg:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-club-green/10 px-3 py-1 text-xs font-bold text-club-green">
                    {item.tag}
                  </span>
                  <span className="text-xs text-text-muted">{item.date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-charcoal lg:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-club-green transition-all group-hover:gap-2">
                  Les mer
                  <ArrowUpRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP CTA ─── */}
      <section
        id="bli-medlem"
        className="relative overflow-hidden bg-club-green py-24 lg:py-32"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Heart className="mx-auto mb-6 text-club-gold" size={32} />
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Bli en del av
              <br />
              Nordvik-familien
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Medlemskap gir tilgang til alle treninger, sosiale arrangementer og
              et fellesskap som varer livet ut. Kontingent fra kun 500 kr/år for
              barn og ungdom.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-club-green transition-all hover:bg-club-gold hover:text-charcoal"
              >
                Meld deg inn nå
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <span className="text-sm text-white/50">
                Barn under 6 år: gratis
              </span>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
              {[
                {
                  title: "Barn & ungdom",
                  price: "500",
                  details: "6–18 år. Inkluderer alle idretter.",
                },
                {
                  title: "Voksen",
                  price: "900",
                  details: "19+ år. Full tilgang til alle aktiviteter.",
                },
                {
                  title: "Familie",
                  price: "1 800",
                  details: "Hele husstanden. Beste verdi.",
                },
              ].map((tier) => (
                <div
                  key={tier.title}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="text-sm font-bold text-white/70">
                    {tier.title}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-white">
                    {tier.price}
                    <span className="ml-1 text-base font-normal text-white/50">
                      kr/år
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-white/50">
                    {tier.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DUGNAD / VOLUNTEER ─── */}
      <section id="dugnad" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-club-gold">
                Dugnad & frivillighet
              </span>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-charcoal">
                Sammen gjør vi
                <br />
                Nordvik sterkere
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                Et idrettslag drives av frivillige. Hvert år bidrar over 200
                foreldre og ildsjeler med tusenvis av timer — fra kioskvakt til
                trenerjobb, fra styrearbeid til vaffelsteking.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Din innsats betyr alt. Enten du har én time eller ti timer å gi,
                trenger vi deg.
              </p>
              <a
                href="#kontakt"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-club-gold px-7 py-4 text-sm font-bold text-charcoal transition-all hover:bg-club-green hover:text-white"
              >
                Meld deg som frivillig
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  value: "200+",
                  label: "Frivillige hvert år",
                },
                {
                  icon: Clock,
                  value: "12 000",
                  label: "Dugnadstimer i 2025",
                },
                {
                  icon: Calendar,
                  value: "45",
                  label: "Arrangementer i året",
                },
                {
                  icon: Heart,
                  value: "100%",
                  label: "Drevet av ildsjeler",
                },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border-subtle bg-white p-6"
                  >
                    <Icon size={20} className="text-club-green" />
                    <div className="mt-4 font-display text-2xl font-bold text-charcoal">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-text-muted">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOARD ─── */}
      <section id="om-oss" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-club-green">
            Styret
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-charcoal">
            Mennesker bak
            <br />
            idrettsgleden
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted">
            Styret i Nordvik IL jobber frivillig for at klubben skal være et
            trygt og godt sted for alle. Valgt på årsmøtet 2025.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 rounded-xl border border-border-subtle bg-white p-5 transition-colors hover:border-club-green/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-club-green text-base font-bold text-white">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-base font-bold text-charcoal">
                    {person.name}
                  </div>
                  <div className="text-sm text-text-muted">
                    {person.role}{" "}
                    <span className="text-text-muted/60">
                      · siden {person.since}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPONSORS ─── */}
      <section className="border-t border-border-subtle py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
              Våre samarbeidspartnere
            </span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {SPONSORS.map((sponsor) => (
              <span
                key={sponsor}
                className="whitespace-nowrap text-sm font-semibold text-text-muted/50 transition-colors hover:text-charcoal"
              >
                {sponsor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="kontakt" className="bg-charcoal py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-club-green">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-white">
                    Nordvik IL
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                    Est. 1947 · Trondheim
                  </div>
                </div>
              </div>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
                Nordvik Idrettslag er et fleridrettslag i Trondheim med over 890
                medlemmer. Vi tilbyr idrettsglede for alle aldersgrupper.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Org.nr: 987 654 321
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Kontakt
              </h3>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Mail size={14} className="text-white/40" />
                  post@nordvikil.no
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Phone size={14} className="text-white/40" />
                  73 12 34 56
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin
                    size={14}
                    className="mt-0.5 shrink-0 text-white/40"
                  />
                  <span>
                    Nordvikveien 22
                    <br />
                    7036 Trondheim
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Hurtiglenker
              </h3>
              <div className="mt-5 space-y-2.5">
                {[
                  "Aktiviteter",
                  "Treningsoversikt",
                  "Bli medlem",
                  "Dugnad",
                  "Styret",
                ].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="block text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Åpningstider kontor
              </h3>
              <div className="mt-5 space-y-2.5 text-sm text-white/50">
                <div>
                  Man–Fre:{" "}
                  <span className="text-white/70">09:00–15:00</span>
                </div>
                <div>
                  Lør–Søn: <span className="text-white/70">Stengt</span>
                </div>
              </div>
              <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Anlegg
              </h3>
              <div className="mt-4 text-sm text-white/50">
                Nordvikhallen & stadion
                <br />
                <span className="text-white/70">Åpent for trening daglig</span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-xs text-white/30">
              © {new Date().getFullYear()} Nordvik Idrettslag. Alle rettigheter
              reservert.
            </div>
            <div className="flex gap-6 text-xs text-white/30">
              <a href="#" className="transition-colors hover:text-white/60">
                Personvern
              </a>
              <a href="#" className="transition-colors hover:text-white/60">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
