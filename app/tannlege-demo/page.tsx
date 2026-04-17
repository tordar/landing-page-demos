"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Mail,
  ChevronDown,
  Star,
  Shield,
  Heart,
  Sparkles,
  Smile,
  AlertCircle,
  Users,
  Award,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Quote,
  CalendarDays,
  Zap,
  Eye,
  Wrench,
  Globe2,
  ExternalLink,
} from "lucide-react";

/* ─────────────────────────── data ─────────────────────────── */

const services = [
  {
    icon: Sparkles,
    title: "Tannbleking",
    desc: "Profesjonell bleking som gir deg et naturlig, hvitere smil — trygt og skånsomt utført av våre spesialister.",
  },
  {
    icon: Wrench,
    title: "Implantater",
    desc: "Varige løsninger for tapte tenner. Vi bruker førsteklasses materialer og avansert 3D-planlegging.",
  },
  {
    icon: Smile,
    title: "Kjeveortopedi",
    desc: "Usynlig tannregulering og tradisjonelle bøyler for barn og voksne — skreddersydd behandlingsplan.",
  },
  {
    icon: Shield,
    title: "Rotfylling",
    desc: "Smertefri rotbehandling med moderne teknikker. Vi redder tenner som ellers måtte trekkes.",
  },
  {
    icon: Heart,
    title: "Forebyggende tannhelse",
    desc: "Regelmessig undersøkelse, rens og veiledning — grunnlaget for et friskt smil hele livet.",
  },
  {
    icon: Zap,
    title: "Akuttbehandling",
    desc: "Akutt tannpine? Vi prioriterer hastetilfeller og tilbyr rask hjelp når du trenger det mest.",
  },
];

const team = [
  {
    name: "Dr. Ingrid Fjellstad",
    role: "Klinikksjef & tannlege",
    specialty: "Protetikk og implantologi",
    years: "18 års erfaring",
    initials: "IF",
    color: "from-sky/60 to-accent-light",
  },
  {
    name: "Dr. Erik Solvang",
    role: "Tannlege",
    specialty: "Kjeveortopedi",
    years: "12 års erfaring",
    initials: "ES",
    color: "from-accent-light to-sky/40",
  },
  {
    name: "Dr. Amina Berge",
    role: "Tannlege",
    specialty: "Endodonti og barnetannpleie",
    years: "9 års erfaring",
    initials: "AB",
    color: "from-sky/50 to-sky-deep/40",
  },
  {
    name: "Lise Haugen",
    role: "Tannpleier",
    specialty: "Forebyggende behandling",
    years: "14 års erfaring",
    initials: "LH",
    color: "from-sky-deep/30 to-accent-light",
  },
];

const testimonials = [
  {
    name: "Marte K.",
    text: "Jeg har alltid vært redd for tannlegen, men hos Fjordtann føler jeg meg trygg. Dr. Fjellstad tok seg tid til å forklare alt, og jeg kjente ingenting under behandlingen.",
    rating: 5,
    treatment: "Rotfylling",
  },
  {
    name: "Thomas L.",
    text: "Fantastisk opplevelse fra start til slutt. Klinikken er moderne og rolig, og teamet er utrolig profesjonelle. Mine nye implantater ser helt naturlige ut.",
    rating: 5,
    treatment: "Implantater",
  },
  {
    name: "Silje R.",
    text: "Sønnen min gledet seg faktisk til tannlegen etter første besøk. Det sier alt om stemningen og folkene her. Varmt anbefalt for hele familien.",
    rating: 5,
    treatment: "Barnetannpleie",
  },
];

const hours = [
  { day: "Mandag – Torsdag", time: "08:00 – 16:00" },
  { day: "Fredag", time: "08:00 – 14:00" },
  { day: "Lørdag – Søndag", time: "Stengt" },
];

/* ─────────────────────────── component ─────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Tjenester", href: "#tjenester" },
    { label: "Om oss", href: "#om" },
    { label: "Teamet", href: "#team" },
    { label: "Priser", href: "#priser" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const faqs = [
    {
      q: "Jeg er redd for tannlegen — kan dere hjelpe?",
      a: "Absolutt. Vi har lang erfaring med tannlegeskrekk og tilbyr tilpasset behandling i ditt tempo. Vi forklarer hvert steg, tar pauser når du trenger det, og kan tilby sedasjon ved behov.",
    },
    {
      q: "Dekker Helfo noen av behandlingene?",
      a: "Ja, flere behandlinger dekkes delvis av Helfo, inkludert nødvendig rotbehandling og kirurgiske inngrep. Vi hjelper deg med å søke refusjon og gir alltid et tydelig prisoverslag før behandling.",
    },
    {
      q: "Hva koster en vanlig tannlegeundersøkelse?",
      a: "En standard undersøkelse inkludert røntgen koster fra 990 kr. Vi gir alltid fullstendig prisoverslag før videre behandling, slik at du vet hva du kan forvente — ingen overraskelser.",
    },
    {
      q: "Tar dere imot nye pasienter?",
      a: "Ja! Vi tar gjerne imot nye pasienter. Bestill time online eller ring oss, så finner vi en tid som passer for deg. Første konsultasjon inkluderer en grundig undersøkelse og samtale om dine behov.",
    },
  ];

  return (
    <>
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_var(--color-border-light)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white text-sm font-bold tracking-tight font-display">
              FT
            </div>
            <span className="font-display text-lg text-navy tracking-tight">
              Fjordtann
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-text-mid hover:text-navy transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+4755123456"
              className="text-sm font-medium text-text-mid hover:text-navy transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              55 12 34 56
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Bestill time
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-2 text-navy"
            aria-label="Meny"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border-light px-6 pb-6 pt-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-text-mid hover:text-navy transition-colors border-b border-border-light last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Bestill time
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
        {/* decorative orbs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky/50 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-accent-light/40 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky/60 px-4 py-1.5 text-xs font-semibold text-navy tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5" />
              Tannklinikk i Bergen sentrum
            </div>

            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] text-navy tracking-tight">
              Trygg tannbehandling
              <br />
              <span className="text-accent">i moderne omgivelser</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-mid max-w-lg">
              Hos Fjordtann møter du et varmt og erfarent team som setter din
              trygghet først. Vi kombinerer avansert teknologi med en rolig
              atmosfære — slik at du kan slappe av.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors shadow-lg shadow-navy/15"
              >
                Bestill time
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tjenester"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-navy hover:bg-sky/30 transition-colors"
              >
                Se våre tjenester
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-text-soft">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                Man–Tor 08–16, Fre 08–14
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-accent" />
                55 12 34 56
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-y border-border-light bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border-light">
          {[
            { value: "14+", label: "års erfaring", icon: Award },
            { value: "8 500+", label: "fornøyde pasienter", icon: Users },
            { value: "4.9", label: "av 5 i vurdering", icon: Star },
            { value: "6", label: "spesialområder", icon: Shield },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center lg:px-8">
              <s.icon className="w-5 h-5 text-accent mb-2" />
              <span className="font-display text-2xl lg:text-3xl text-navy">{s.value}</span>
              <span className="text-sm text-text-soft mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <div className="text-mist">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-auto block" preserveAspectRatio="none">
          <path
            d="M0 48V16C240 0 480 0 720 16C960 32 1200 32 1440 16V48H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ── SERVICES ── */}
      <section id="tjenester" className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Våre tjenester
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy leading-tight tracking-tight">
              Komplett tannbehandling —{" "}
              <span className="text-accent">alt under ett tak</span>
            </h2>
            <p className="mt-4 text-text-mid leading-relaxed">
              Fra forebyggende kontroller til avanserte implantater — vi
              tilbyr et bredt spekter av tannhelsetjenester tilpasset dine
              behov.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky/70 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  {s.desc}
                </p>
                <a
                  href="#kontakt"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-navy transition-colors"
                >
                  Bestill time
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="om" className="py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left — decorative illustration area */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky via-sky-deep/30 to-accent-light/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
                    <Heart className="w-9 h-9 text-navy" />
                  </div>
                  <p className="font-display text-xl text-navy">
                    Omsorg i sentrum
                  </p>
                  <p className="mt-1 text-sm text-text-mid">Siden 2011</p>
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-white rounded-2xl p-4 shadow-xl shadow-navy/[0.06] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sky/60 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Autorisert klinikk</p>
                  <p className="text-xs text-text-soft">Helsedirektoratet</p>
                </div>
              </div>
            </div>

            {/* right — text */}
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Hvorfor Fjordtann
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy leading-tight tracking-tight">
                Tannbehandling du kan{" "}
                <span className="text-accent">stole på</span>
              </h2>
              <p className="mt-5 text-text-mid leading-relaxed">
                Fjordtann Tannklinikk ble grunnlagt i 2011 med én visjon: å
                gjøre tannlegebesøket til en trygg og positiv opplevelse. Vi
                vet at mange gruer seg — derfor har vi skapt et miljø der du
                møtes med ro, respekt og grundig informasjon.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Eye,
                    title: "Avansert teknologi",
                    desc: "Digital røntgen, 3D-skanning og laserbehandling for presise og skånsomme inngrep.",
                  },
                  {
                    icon: Heart,
                    title: "Tannlegeskrekk? Vi forstår",
                    desc: "Ekstra tid, rolig stemning og sedasjon ved behov — vi tilpasser oss deg.",
                  },
                  {
                    icon: Shield,
                    title: "Transparent prising",
                    desc: "Du får alltid et skriftlig kostnadsoverslag før behandling starter.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5 h-10 w-10 rounded-xl bg-sky/60 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-text-mid leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-20 lg:py-28 bg-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Møt teamet
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy leading-tight tracking-tight">
              Erfarne fagfolk som{" "}
              <span className="text-accent">bryr seg</span>
            </h2>
            <p className="mt-4 text-text-mid leading-relaxed">
              Vårt team kombinerer bred kompetanse med et genuint ønske om å
              gi deg den beste opplevelsen.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div
                key={t.name}
                className="group rounded-2xl bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-0.5"
              >
                <div
                  className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${t.color}`}
                >
                  <span className="font-display text-2xl text-navy">
                    {t.initials}
                  </span>
                </div>
                <h3 className="font-display text-base text-navy">{t.name}</h3>
                <p className="text-sm text-accent font-medium mt-0.5">
                  {t.role}
                </p>
                <p className="text-xs text-text-soft mt-2">{t.specialty}</p>
                <p className="text-xs text-text-soft">{t.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Pasientopplevelser
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy leading-tight tracking-tight">
              Det våre pasienter{" "}
              <span className="text-accent">sier om oss</span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl bg-mist p-7 flex flex-col"
              >
                <Quote className="w-8 h-8 text-sky-deep/50 mb-4" />
                <p className="text-text-mid leading-relaxed flex-1">{t.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-text-soft">{t.treatment}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS + EMERGENCY ── */}
      <section className="bg-navy text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-sky">
                Åpningstider
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight">
                Når kan du besøke oss?
              </h2>
              <div className="mt-8 space-y-0 divide-y divide-white/10">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-4 text-sm"
                  >
                    <span className="text-white/80">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl bg-white/[0.07] backdrop-blur-sm p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-300" />
                  </div>
                  <h3 className="font-display text-lg">Akutt tannpine?</h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Ved akutt tannpine i kontortiden — ring oss direkte. Vi
                  setter av tid til hastetilfeller hver dag. Utenfor
                  kontortid, kontakt Bergen legevakt.
                </p>
                <a
                  href="tel:+4755123456"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-6 py-3 text-sm font-semibold hover:bg-sky transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Ring 55 12 34 56
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING / FAQ ── */}
      <section id="priser" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Priser & refusjon
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy leading-tight tracking-tight">
                Tydelige priser,{" "}
                <span className="text-accent">ingen overraskelser</span>
              </h2>
              <p className="mt-5 text-text-mid leading-relaxed">
                Vi tror på full åpenhet om kostnader. Du mottar alltid et
                skriftlig prisoverslag før behandlingen starter, og vi
                informerer om muligheter for refusjon gjennom Helfo.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { label: "Undersøkelse inkl. røntgen", price: "fra 990 kr" },
                  { label: "Tannrens", price: "fra 850 kr" },
                  { label: "Tannbleking", price: "fra 3 500 kr" },
                  { label: "Implantat (per tann)", price: "fra 18 000 kr" },
                  { label: "Kjeveortopedi", price: "fra 25 000 kr" },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex justify-between items-center py-3 border-b border-border-light"
                  >
                    <span className="text-sm text-text">{p.label}</span>
                    <span className="text-sm font-semibold text-navy">{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-text-soft">
                Alle priser er veiledende. Endelig pris avhenger av
                behandlingens omfang.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Vanlige spørsmål
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)] text-navy leading-tight tracking-tight mb-8">
                Har du spørsmål?
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-mist overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === i ? null : i)
                      }
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-sm font-medium text-navy pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-text-soft flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{
                        gridTemplateRows: activeFaq === i ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm text-text-mid leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / LOCATION ── */}
      <section id="kontakt" className="py-20 lg:py-28 bg-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Kontakt oss
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy leading-tight tracking-tight">
              Bestill time eller{" "}
              <span className="text-accent">ta kontakt</span>
            </h2>
            <p className="mt-4 text-text-mid leading-relaxed">
              Vi ser frem til å høre fra deg. Bestill time online, ring oss
              eller send en e-post — vi svarer innen én virkedag.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <a
              href="tel:+4755123456"
              className="group rounded-2xl bg-white p-7 text-center transition-all duration-300 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/60 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base text-navy">Ring oss</h3>
              <p className="mt-1 text-sm text-text-mid">55 12 34 56</p>
              <p className="mt-0.5 text-xs text-text-soft">Man–Fre i kontortiden</p>
            </a>

            <a
              href="mailto:post@fjordtann.no"
              className="group rounded-2xl bg-white p-7 text-center transition-all duration-300 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/60 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base text-navy">Send e-post</h3>
              <p className="mt-1 text-sm text-text-mid">post@fjordtann.no</p>
              <p className="mt-0.5 text-xs text-text-soft">Svar innen 1 virkedag</p>
            </a>

            <a
              href="#kontakt"
              className="group rounded-2xl bg-white p-7 text-center transition-all duration-300 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/60 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base text-navy">Online booking</h3>
              <p className="mt-1 text-sm text-text-mid">Bestill time døgnet rundt</p>
              <p className="mt-0.5 text-xs text-text-soft">Bekreftelse på e-post</p>
            </a>
          </div>

          {/* Location */}
          <div className="mt-12 rounded-2xl bg-white p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-xl text-navy mb-4">
                  Finn oss i Bergen sentrum
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Fjordtann Tannklinikk</p>
                      <p className="text-sm text-text-mid">Strandgaten 42, 3. etasje</p>
                      <p className="text-sm text-text-mid">5013 Bergen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-text-mid">Man–Tor: 08:00–16:00</p>
                      <p className="text-sm text-text-mid">Fre: 08:00–14:00</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-soft">
                  3 minutters gange fra Bystasjonen. Heis tilgjengelig.
                  Universell utforming.
                </p>
              </div>
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-sky via-sky-deep/20 to-accent-light/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-navy mx-auto mb-2" />
                  <p className="text-sm font-medium text-navy">Bergen sentrum</p>
                  <p className="text-xs text-text-mid">Strandgaten 42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-navy py-16 lg:py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-white leading-tight tracking-tight">
            Klar for et tryggere tannlegebesøk?
          </h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto">
            Ta det første steget mot bedre tannhelse. Bestill time i dag —
            vi tar godt vare på deg.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-7 py-3.5 text-sm font-semibold hover:bg-sky transition-colors"
            >
              Bestill time
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+4755123456"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Ring oss
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-light/10 border-t border-border-light py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold font-display">
                  FT
                </div>
                <span className="font-display text-base text-navy">
                  Fjordtann
                </span>
              </div>
              <p className="text-sm text-text-mid leading-relaxed">
                Trygg tannbehandling i moderne omgivelser — siden 2011.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="h-9 w-9 rounded-lg bg-mist flex items-center justify-center text-text-soft hover:text-navy hover:bg-sky/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Globe2 className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="h-9 w-9 rounded-lg bg-mist flex items-center justify-center text-text-soft hover:text-navy hover:bg-sky/50 transition-colors"
                  aria-label="Instagram"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-navy mb-4">Tjenester</h4>
              <ul className="space-y-2">
                {["Tannbleking", "Implantater", "Kjeveortopedi", "Rotfylling", "Tannrens", "Akuttbehandling"].map(
                  (s) => (
                    <li key={s}>
                      <a
                        href="#tjenester"
                        className="text-sm text-text-mid hover:text-navy transition-colors"
                      >
                        {s}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-navy mb-4">Klinikken</h4>
              <ul className="space-y-2">
                {[
                  { label: "Om oss", href: "#om" },
                  { label: "Teamet", href: "#team" },
                  { label: "Priser", href: "#priser" },
                  { label: "Bestill time", href: "#kontakt" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-text-mid hover:text-navy transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-navy mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm text-text-mid">
                <p>Strandgaten 42, 3. etasje</p>
                <p>5013 Bergen</p>
                <a
                  href="tel:+4755123456"
                  className="block hover:text-navy transition-colors"
                >
                  55 12 34 56
                </a>
                <a
                  href="mailto:post@fjordtann.no"
                  className="block hover:text-navy transition-colors"
                >
                  post@fjordtann.no
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border-light flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-soft">
            <p>© 2025 Fjordtann Tannklinikk. Alle rettigheter reservert.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-navy transition-colors">
                Personvern
              </a>
              <a href="#" className="hover:text-navy transition-colors">
                Vilkår
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/90 backdrop-blur-xl border-t border-border-light p-3 flex gap-2">
        <a
          href="tel:+4755123456"
          className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold text-navy"
        >
          <Phone className="w-4 h-4" />
          Ring oss
        </a>
        <a
          href="#kontakt"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-semibold text-white"
        >
          Bestill time
        </a>
      </div>
    </>
  );
}
