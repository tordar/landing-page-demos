"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Clock,
  Dumbbell,
  Users,
  UserCheck,
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  ArrowRight,
  Zap,
  Heart,
  Target,
  Flame,
  Shield,
  Quote,
  Check,
} from "lucide-react";

/* ---------- DATA ---------- */

const NAV_LINKS = [
  { label: "Om oss", href: "#om" },
  { label: "Tilbud", href: "#tilbud" },
  { label: "Gruppetimer", href: "#gruppetimer" },
  { label: "Priser", href: "#priser" },
  { label: "Trenere", href: "#trenere" },
  { label: "Kontakt", href: "#kontakt" },
];

const USPS = [
  { icon: Clock, label: "Åpent 24/7" },
  { icon: Dumbbell, label: "Moderne utstyr" },
  { icon: Users, label: "50+ gruppetimer/uke" },
  { icon: UserCheck, label: "Personlig trener" },
];

const STATS = [
  { value: "2 400+", label: "Aktive medlemmer" },
  { value: "50+", label: "Gruppetimer per uke" },
  { value: "8", label: "Sertifiserte trenere" },
  { value: "8", label: "År i Fredrikstad" },
];

const SERVICES = [
  {
    title: "Styrketrening",
    desc: "Frivektsområde, maskiner og kettlebells. Alt du trenger for å bygge styrke og muskelmasse.",
    icon: Dumbbell,
    gradient: "from-red-electric/20 to-charcoal-light",
  },
  {
    title: "Cardio",
    desc: "Tredemøller, romaskin, assault bikes og mer. Få pulsen opp og forbrenninga i gang.",
    icon: Heart,
    gradient: "from-charcoal-lighter to-charcoal-light",
  },
  {
    title: "Gruppetimer",
    desc: "Fra yoga til HIIT — finn timen som passer deg. Motiverende instruktører og fellesskap.",
    icon: Users,
    gradient: "from-charcoal-light to-red-electric/10",
  },
  {
    title: "CrossFit",
    desc: "Funksjonell trening i høy intensitet. Varierte økter som utfordrer hele kroppen.",
    icon: Flame,
    gradient: "from-red-electric/15 to-charcoal",
  },
  {
    title: "Personlig Trener",
    desc: "Skreddersydd program og oppfølging. Nå målene dine raskere med ekspertbistand.",
    icon: Target,
    gradient: "from-charcoal-lighter to-red-electric/10",
  },
  {
    title: "Restitusjon",
    desc: "Badstue, stretching-sone og foam rollers. Ta vare på kroppen mellom øktene.",
    icon: Shield,
    gradient: "from-charcoal-light to-charcoal-lighter",
  },
];

const DAYS = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"] as const;

type DayKey = (typeof DAYS)[number];

const SCHEDULE: Record<DayKey, { time: string; name: string; trainer: string }[]> = {
  Mandag: [
    { time: "06:30", name: "HIIT", trainer: "Erik" },
    { time: "09:00", name: "Yoga", trainer: "Maja" },
    { time: "12:00", name: "Styrke & Teknikk", trainer: "Lars" },
    { time: "17:00", name: "Spinning", trainer: "Erik" },
    { time: "18:30", name: "CrossFit", trainer: "Lars" },
    { time: "20:00", name: "Yin Yoga", trainer: "Maja" },
  ],
  Tirsdag: [
    { time: "07:00", name: "Spinning", trainer: "Erik" },
    { time: "09:30", name: "Pilates", trainer: "Maja" },
    { time: "12:00", name: "Kettlebell", trainer: "Lars" },
    { time: "16:30", name: "HIIT", trainer: "Erik" },
    { time: "18:00", name: "Styrke Total", trainer: "Lars" },
    { time: "19:30", name: "Yoga Flow", trainer: "Maja" },
  ],
  Onsdag: [
    { time: "06:30", name: "CrossFit", trainer: "Lars" },
    { time: "09:00", name: "Yoga", trainer: "Maja" },
    { time: "12:00", name: "Core & Stabilitet", trainer: "Erik" },
    { time: "17:00", name: "Dans", trainer: "Maja" },
    { time: "18:30", name: "HIIT", trainer: "Erik" },
    { time: "20:00", name: "Stretch & Restitusjon", trainer: "Maja" },
  ],
  Torsdag: [
    { time: "07:00", name: "Spinning", trainer: "Erik" },
    { time: "09:30", name: "Pilates", trainer: "Maja" },
    { time: "12:00", name: "Styrke & Teknikk", trainer: "Lars" },
    { time: "16:30", name: "Kettlebell", trainer: "Lars" },
    { time: "18:00", name: "CrossFit", trainer: "Lars" },
    { time: "19:30", name: "Yoga Flow", trainer: "Maja" },
  ],
  Fredag: [
    { time: "06:30", name: "HIIT", trainer: "Erik" },
    { time: "09:00", name: "Yoga", trainer: "Maja" },
    { time: "12:00", name: "Styrke Total", trainer: "Lars" },
    { time: "16:00", name: "CrossFit", trainer: "Lars" },
    { time: "17:30", name: "Spinning", trainer: "Erik" },
  ],
  Lørdag: [
    { time: "09:00", name: "CrossFit", trainer: "Lars" },
    { time: "10:30", name: "Yoga", trainer: "Maja" },
    { time: "12:00", name: "HIIT", trainer: "Erik" },
  ],
  Søndag: [
    { time: "10:00", name: "Yoga & Meditasjon", trainer: "Maja" },
    { time: "11:30", name: "Styrke Total", trainer: "Lars" },
  ],
};

const PRICING = [
  {
    name: "Basis",
    price: "399",
    period: "/mnd",
    desc: "Perfekt for deg som trener på egenhånd.",
    features: [
      "Tilgang til treningsstudio 24/7",
      "Frivektsområde og maskiner",
      "Garderobe og dusj",
      "Treningsapp med programmer",
    ],
    highlighted: false,
  },
  {
    name: "Pluss",
    price: "549",
    period: "/mnd",
    desc: "Vårt mest populære valg. Alt du trenger.",
    features: [
      "Alt i Basis",
      "Alle gruppetimer inkludert",
      "Tilgang til badstue",
      "1 PT-time ved oppstart",
      "Treningsapp med ekstra innhold",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "799",
    period: "/mnd",
    desc: "For deg som vil ha alt — og litt til.",
    features: [
      "Alt i Pluss",
      "2 PT-timer per måned",
      "Kostholdsveiledning",
      "Prioritert booking på timer",
      "Gjestepass (2 per måned)",
      "Håndkleservice",
    ],
    highlighted: false,
  },
];

const TRAINERS = [
  {
    name: "Lars Henriksen",
    role: "Styrke & CrossFit",
    bio: "Sertifisert CrossFit Level 3 trener med 10 års erfaring. Spesialisert på styrkeløft og funksjonell trening.",
    gradient: "from-red-electric/30 via-charcoal-lighter to-charcoal",
  },
  {
    name: "Maja Solberg",
    role: "Yoga & Pilates",
    bio: "Utdannet yogalærer fra India med 500+ timer sertifisering. Brenner for helhetlig trening og mindfulness.",
    gradient: "from-charcoal-lighter via-red-electric/20 to-charcoal",
  },
  {
    name: "Erik Nordahl",
    role: "HIIT & Cardio",
    bio: "Tidligere eliteutøver i friidrett. Motiverer deg til å finne grenser du ikke visste du hadde.",
    gradient: "from-charcoal via-charcoal-lighter to-red-electric/25",
  },
];

const FACILITIES = [
  { name: "Frivektsområde", gradient: "from-red-electric/25 via-charcoal-light to-charcoal" },
  { name: "Cardio-sone", gradient: "from-charcoal-lighter via-charcoal to-red-electric/15" },
  { name: "CrossFit Box", gradient: "from-charcoal via-red-electric/20 to-charcoal-light" },
  { name: "Gruppetimer-sal", gradient: "from-red-electric/15 via-charcoal-lighter to-charcoal" },
  { name: "Badstue", gradient: "from-charcoal-light via-red-electric/10 to-charcoal-lighter" },
  { name: "Stretching-sone", gradient: "from-charcoal via-charcoal-light to-red-electric/20" },
];

const TESTIMONIALS = [
  {
    name: "Kristin M.",
    text: "Etter 6 måneder på Puls har jeg aldri følt meg sterkere. Trenerne er fantastiske og miljøet er utrolig motiverende.",
    role: "Medlem siden 2022",
  },
  {
    name: "Thomas R.",
    text: "CrossFit-timene med Lars er det beste jeg har gjort for helsa mi. Variert, utfordrende og alltid god stemning.",
    role: "Medlem siden 2021",
  },
  {
    name: "Ida K.",
    text: "Yoga-timene med Maja er en oase midt i hverdagen. Flotte lokaler og alltid rent og ordentlig.",
    role: "Medlem siden 2023",
  },
  {
    name: "Anders H.",
    text: "Endelig et treningssenter i Fredrikstad som tar styrketrening på alvor. Topp utstyr og bra folk.",
    role: "Medlem siden 2020",
  },
];

const FAQ_ITEMS = [
  {
    q: "Kan jeg prøve senteret før jeg melder meg inn?",
    a: "Absolutt! Vi tilbyr en gratis prøveuke der du får tilgang til alt — utstyr, gruppetimer og fasiliteter. Bare møt opp i resepsjonen med legitimasjon, så ordner vi resten.",
  },
  {
    q: "Er det bindingstid på medlemskapet?",
    a: "Nei, alle våre medlemskap er uten bindingstid. Du kan si opp med én måneds varsel når som helst. Vi tror på at du blir fordi du vil — ikke fordi du må.",
  },
  {
    q: "Hva er åpningstidene for bemannet resepsjon?",
    a: "Resepsjonen er bemannet mandag til fredag 07:00–21:00, lørdag 09:00–17:00 og søndag 10:00–16:00. Senteret er åpent 24/7 for alle medlemmer med nøkkelkort.",
  },
  {
    q: "Tilbyr dere studentrabatt?",
    a: "Ja! Studenter får 15% rabatt på alle våre medlemskap mot fremvisning av gyldig studentbevis. Rabatten gjelder hele studietiden.",
  },
  {
    q: "Kan jeg fryse medlemskapet mitt?",
    a: "Ja, du kan fryse medlemskapet i opptil 3 måneder per år ved sykdom, skade eller lengre reise. Kontakt resepsjonen for å avtale dette.",
  },
  {
    q: "Er det parkering ved senteret?",
    a: "Vi har gratis parkering for medlemmer med over 50 plasser rett utenfor inngangen. Det er også sykkelparkering og kort vei fra buss-stopp.",
  },
];

/* ---------- COMPONENT ---------- */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeDay, setActiveDay] = useState<DayKey>("Mandag");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* scroll spy */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      {/* -- NAVIGATION -- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-sm bg-red-electric transition-transform duration-300 group-hover:rotate-6" />
              <Zap className="relative h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-off-white">
              PULS
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-red-electric"
                    : "text-text-muted hover:text-off-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-red-electric" />
                )}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#priser"
              className="hidden rounded-sm bg-red-electric px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-hover active:scale-95 sm:inline-block"
            >
              Bli medlem
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-off-white"
              aria-label="Meny"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-full bg-charcoal/98 backdrop-blur-lg border-t border-white/5 lg:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="py-3 text-base font-medium text-text-body hover:text-red-electric transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#priser"
                onClick={closeMobile}
                className="mt-3 rounded-sm bg-red-electric px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Bli medlem
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* -- HERO -- */}
      <section className="relative min-h-screen flex items-center overflow-hidden clip-diagonal">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-red-electric/8 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-64 w-64 rounded-full bg-red-electric/5 blur-3xl" />

        {/* Vertical accent line */}
        <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-red-electric/30 to-transparent hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-0">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-muted animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-red-electric animate-pulse-dot" />
              Fredrikstads treningssenter siden 2016
            </div>

            {/* Headline */}
            <h1
              className="font-display text-5xl font-900 leading-[1.05] tracking-tight text-off-white sm:text-6xl lg:text-8xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Din styrke
              <br />
              <span className="text-red-electric">starter her.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-text-body animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Tren på dine premisser — 24 timer i døgnet, 7 dager i uken.
              Moderne utstyr, engasjerte trenere og et fellesskap som løfter deg opp.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#priser"
                className="group inline-flex items-center gap-2 rounded-sm bg-red-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-hover active:scale-95"
              >
                Start i dag
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#priser"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-7 py-3.5 text-sm font-semibold text-off-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                Se priser
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent" />
        </div>
      </section>

      {/* -- USP STRIP -- */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px rounded-sm bg-white/5 overflow-hidden md:grid-cols-4">
            {USPS.map((usp) => (
              <div
                key={usp.label}
                className="flex items-center gap-3 bg-charcoal-light px-6 py-5"
              >
                <usp.icon className="h-5 w-5 text-red-electric shrink-0" />
                <span className="text-sm font-medium text-off-white">{usp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- OM OSS -- */}
      <section id="om" ref={setSectionRef("om")} className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
                Om Puls
              </span>
              <h2 className="mt-3 font-display text-3xl font-800 leading-tight text-off-white sm:text-4xl lg:text-5xl">
                Mer enn et<br />treningssenter
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-body">
                Puls Treningssenter ble grunnlagt i 2016 med én enkel visjon: å skape
                Fredrikstads mest inspirerende sted å trene. Vi tror på at styrke handler om
                mer enn muskler — det handler om selvtillit, utholdenhet og et miljø som
                bringer ut det beste i deg.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                Med over 2 400 aktive medlemmer, 8 dedikerte trenere og et bredt utvalg
                av gruppetimer og utstyr, er vi her for å hjelpe deg — uansett hvor du er
                på treningsreisen.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px rounded-sm bg-white/5 overflow-hidden">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-charcoal-light p-8 lg:p-10">
                  <div className="font-display text-3xl font-800 text-red-electric lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- TRENINGSTILBUD -- */}
      <section
        id="tilbud"
        ref={setSectionRef("tilbud")}
        className="py-28 lg:py-36 bg-charcoal-light"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
              Treningstilbud
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 leading-tight text-off-white sm:text-4xl">
              Finn din treningsform
            </h2>
            <p className="mt-4 text-base text-text-body">
              Uansett om du foretrekker tung styrke, intens cardio eller rolige yogaøkter — vi har noe for alle.
            </p>
          </div>

          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden bg-white/5">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className={`group relative bg-gradient-to-br ${service.gradient} p-8 lg:p-10 transition-colors hover:bg-charcoal-lighter`}
              >
                <service.icon className="h-6 w-6 text-red-electric" />
                <h3 className="mt-5 font-display text-xl font-700 text-off-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">{service.desc}</p>
                <ChevronRight className="mt-5 h-4 w-4 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-red-electric" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- GRUPPETIMER -- */}
      <section id="gruppetimer" ref={setSectionRef("gruppetimer")} className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
                Timeplan
              </span>
              <h2 className="mt-3 font-display text-3xl font-800 leading-tight text-off-white sm:text-4xl">
                Gruppetimer
              </h2>
            </div>
          </div>

          {/* Day tabs */}
          <div className="mt-10 flex gap-1 overflow-x-auto pb-2 scrollbar-none">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`shrink-0 rounded-sm px-4 py-2.5 text-sm font-medium transition-all ${
                  activeDay === day
                    ? "bg-red-electric text-white"
                    : "bg-charcoal-light text-text-muted hover:text-off-white hover:bg-charcoal-lighter"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule grid */}
          <div className="mt-6 grid gap-px rounded-sm overflow-hidden bg-white/5">
            {/* Header */}
            <div className="grid grid-cols-3 bg-charcoal-light/80 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-text-muted">
              <span>Tid</span>
              <span>Time</span>
              <span>Instruktør</span>
            </div>
            {SCHEDULE[activeDay].map((cls, i) => (
              <div
                key={`${activeDay}-${i}`}
                className="grid grid-cols-3 items-center bg-charcoal-light px-6 py-4 transition-colors hover:bg-charcoal-lighter"
              >
                <span className="text-sm font-medium text-off-white tabular-nums">
                  {cls.time}
                </span>
                <span className="text-sm font-semibold text-off-white">{cls.name}</span>
                <span className="text-sm text-text-muted">{cls.trainer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- PRICING -- */}
      <section
        id="priser"
        ref={setSectionRef("priser")}
        className="py-28 lg:py-36 bg-charcoal-light"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
              Medlemskap
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-off-white sm:text-4xl">
              Velg ditt medlemskap
            </h2>
            <p className="mt-4 text-base text-text-body">
              Ingen bindingstid. Ingen skjulte kostnader. Si opp når du vil.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-sm p-8 lg:p-10 transition-all ${
                  tier.highlighted
                    ? "bg-charcoal ring-2 ring-red-electric"
                    : "bg-charcoal"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-sm bg-red-electric px-3 py-1 text-xs font-semibold text-white">
                    Mest populær
                  </span>
                )}
                <h3 className="font-display text-lg font-700 text-off-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{tier.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-800 text-off-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-text-muted">kr{tier.period}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-body">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-electric" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`mt-8 block rounded-sm py-3 text-center text-sm font-semibold transition-all active:scale-95 ${
                    tier.highlighted
                      ? "bg-red-electric text-white hover:bg-red-hover"
                      : "border border-white/15 text-off-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  Bli medlem
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            Alle priser inkl. mva. Studenter får 15% rabatt.
            Registreringsgebyr: 199 kr (engangs).
          </p>
        </div>
      </section>

      {/* -- TRENERE -- */}
      <section id="trenere" ref={setSectionRef("trenere")} className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
            Teamet
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 text-off-white sm:text-4xl">
            Våre trenere
          </h2>
          <p className="mt-4 max-w-lg text-base text-text-body">
            Sertifiserte, engasjerte og klare for å hjelpe deg nå dine mål.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRAINERS.map((trainer) => (
              <div key={trainer.name} className="group">
                {/* Avatar placeholder */}
                <div
                  className={`aspect-[4/5] rounded-sm bg-gradient-to-br ${trainer.gradient} transition-all group-hover:scale-[1.02]`}
                />
                <h3 className="mt-5 font-display text-lg font-700 text-off-white">
                  {trainer.name}
                </h3>
                <span className="text-sm font-medium text-red-electric">{trainer.role}</span>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FASILITETER -- */}
      <section className="py-28 lg:py-36 bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
            Fasiliteter
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 text-off-white sm:text-4xl">
            Våre lokaler
          </h2>

          <div className="mt-14 grid gap-px rounded-sm overflow-hidden bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((fac) => (
              <div
                key={fac.name}
                className={`relative aspect-[3/2] bg-gradient-to-br ${fac.gradient} flex items-end p-6`}
              >
                <span className="font-display text-lg font-700 text-off-white">{fac.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- TESTIMONIALS -- */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
            Medlemmer
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 text-off-white sm:text-4xl">
            Det sier medlemmene
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-sm bg-charcoal-light p-8 lg:p-10"
              >
                <Quote className="h-6 w-6 text-red-electric/40" />
                <p className="mt-4 text-base leading-relaxed text-text-body">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-electric/30 to-charcoal-lighter" />
                  <div>
                    <div className="text-sm font-semibold text-off-white">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="py-28 lg:py-36 bg-charcoal-light">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-electric">
              Spørsmål?
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-off-white sm:text-4xl">
              Ofte stilte spørsmål
            </h2>
          </div>

          <div className="mt-14 space-y-px rounded-sm overflow-hidden">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-charcoal">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-charcoal-lighter"
                >
                  <span className="text-sm font-semibold text-off-white pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 ${
                      openFaq === i ? "rotate-180 text-red-electric" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-200"
                  style={{
                    gridTemplateRows: openFaq === i ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-text-body">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA BANNER -- */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-electric to-red-dark" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Klar for å starte?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Prøv Puls gratis i 7 dager — ingen forpliktelser.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-red-electric transition-all hover:bg-off-white active:scale-95"
            >
              Prøv gratis i 7 dager
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#priser"
              className="inline-flex items-center rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Se medlemskap
            </a>
          </div>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <footer id="kontakt" ref={setSectionRef("kontakt")} className="bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <div className="relative flex h-8 w-8 items-center justify-center">
                  <div className="absolute inset-0 rounded-sm bg-red-electric" />
                  <Zap className="relative h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-display text-lg font-bold text-off-white">
                  PULS
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Fredrikstads mest motiverende treningssenter. Din styrke starter her.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-charcoal text-text-muted transition-colors hover:bg-red-electric hover:text-white"
                  aria-label="Instagram"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-charcoal text-text-muted transition-colors hover:bg-red-electric hover:text-white"
                  aria-label="Facebook"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Åpningstider */}
            <div>
              <h4 className="font-display text-sm font-700 uppercase tracking-wider text-off-white">
                Åpningstider
              </h4>
              <dl className="mt-4 space-y-2 text-sm text-text-muted">
                <div className="flex justify-between">
                  <dt>Senteret</dt>
                  <dd className="text-off-white">Døgnåpent</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Resepsjon man–fre</dt>
                  <dd className="text-off-white">07:00–21:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Resepsjon lørdag</dt>
                  <dd className="text-off-white">09:00–17:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Resepsjon søndag</dt>
                  <dd className="text-off-white">10:00–16:00</dd>
                </div>
              </dl>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="font-display text-sm font-700 uppercase tracking-wider text-off-white">
                Kontakt
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3 text-text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-electric" />
                  <span>
                    Storgata 42
                    <br />
                    1607 Fredrikstad
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+4769123456"
                    className="flex items-center gap-3 text-text-muted transition-colors hover:text-off-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-red-electric" />
                    69 12 34 56
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:post@pulstreningssenter.no"
                    className="flex items-center gap-3 text-text-muted transition-colors hover:text-off-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-red-electric" />
                    post@pulstreningssenter.no
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-display text-sm font-700 uppercase tracking-wider text-off-white">
                Snarveier
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted transition-colors hover:text-off-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Puls Treningssenter. Alle rettigheter reservert.
            </p>
            <div className="flex gap-6 text-xs text-text-muted">
              <a href="#" className="hover:text-off-white transition-colors">
                Personvern
              </a>
              <a href="#" className="hover:text-off-white transition-colors">
                Vilkår
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
