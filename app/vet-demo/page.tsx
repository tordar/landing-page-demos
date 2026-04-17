"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Syringe,
  Stethoscope,
  Scissors,
  ScanLine,
  FlaskConical,
  Tag,
  ChevronDown,
  Menu,
  X,
  Heart,
  Star,
  ArrowRight,
  Shield,
  CalendarCheck,
} from "lucide-react";

/* ─── data ─── */

const services = [
  {
    icon: Stethoscope,
    title: "Generell konsultasjon",
    desc: "Grundig helseundersøkelse med fokus på forebyggende helse. Vi tar oss tid til å lytte og forklare.",
  },
  {
    icon: Syringe,
    title: "Vaksinering",
    desc: "Skreddersydde vaksineprogrammer for hund, katt og kanin. Alltid oppdatert etter norske retningslinjer.",
  },
  {
    icon: Scissors,
    title: "Kirurgi",
    desc: "Moderne operasjonsstue med gassanestesi og overvåkningsutstyr. Fra kastrering til bløtdelskirurgi.",
  },
  {
    icon: ScanLine,
    title: "Røntgen & ultralyd",
    desc: "Digital bildediagnostikk med høy oppløsning. Rask avklaring av skjelettskader og indre organer.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorium",
    desc: "Blodprøver, urinanalyser og hurtigtester med svar samme dag. Eget laboratorium på klinikken.",
  },
  {
    icon: Tag,
    title: "ID-merking",
    desc: "Mikrochip-merking med registrering i Norsk ID-register. Lovpålagt for hund — anbefalt for alle.",
  },
];

const team = [
  {
    name: "Dr. Ingrid Fjellbekk",
    role: "Klinikksjef & veterinær",
    specialty: "Bløtdelskirurgi, indremedisin",
    years: "18 års erfaring",
    color: "bg-teal",
  },
  {
    name: "Dr. Erik Solheim",
    role: "Veterinær",
    specialty: "Ortopedi, bildediagnostikk",
    years: "12 års erfaring",
    color: "bg-coral",
  },
  {
    name: "Dr. Marte Ødegård",
    role: "Veterinær",
    specialty: "Tannhelse, katt & smådyr",
    years: "9 års erfaring",
    color: "bg-teal-dark",
  },
  {
    name: "Silje Haugen",
    role: "Dyrepleier",
    specialty: "Anestesi, postoperativ pleie",
    years: "7 års erfaring",
    color: "bg-warm-grey",
  },
];

const hours = [
  { day: "Mandag – Fredag", time: "08:00 – 16:00" },
  { day: "Lørdag", time: "09:00 – 13:00" },
  { day: "Søndag", time: "Stengt" },
];

const reviews = [
  {
    name: "Kristin M.",
    text: "Fantastisk omsorg for katten vår. De tok seg virkelig tid og forklarte alt grundig. Anbefales varmt!",
    stars: 5,
  },
  {
    name: "Anders T.",
    text: "Ringte akuttnummeret en søndag kveld og fikk hjelp umiddelbart. Hunden vår ble tatt godt vare på.",
    stars: 5,
  },
  {
    name: "Lise B.",
    text: "Har brukt Fjellbekk i over 10 år. Profesjonelle, varme og alltid oppdaterte på det siste innen dyrehelse.",
    stars: 5,
  },
];

/* ─── component ─── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#tjenester", label: "Tjenester" },
    { href: "#om-oss", label: "Om oss" },
    { href: "#teamet", label: "Teamet" },
    { href: "#apningstider", label: "Åpningstider" },
  ];

  return (
    <>
      {/* ── Emergency bar ── */}
      <div className="bg-coral text-off-white text-sm font-medium tracking-wide">
        <div className="mx-auto max-w-7xl px-5 py-2.5 flex items-center justify-between gap-4 flex-wrap">
          <span className="flex items-center gap-2">
            <Phone size={14} strokeWidth={2.5} />
            <span>
              Akutt?{" "}
              <a href="tel:+4761234567" className="underline underline-offset-2 font-bold">
                Ring 61 23 45 67
              </a>{" "}
              — døgnåpen vakttelefon
            </span>
          </span>
          <span className="hidden sm:flex items-center gap-2 opacity-80">
            <MapPin size={14} />
            Storgata 42, 2609 Lillehammer
          </span>
        </div>
      </div>

      {/* ── Nav ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-off-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(13,115,119,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 flex items-center justify-between h-16 lg:h-18">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Heart size={18} className="text-off-white" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-semibold text-lg text-ink tracking-tight">
                Fjellbekk
              </span>
              <span className="hidden sm:block text-[11px] text-warm-grey-light tracking-widest uppercase">
                Dyreklinikk
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-teal"
                    : "text-warm-grey hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bestill"
              className="inline-flex items-center gap-2 bg-teal text-off-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-dark transition-colors duration-200"
            >
              <CalendarCheck size={16} />
              Bestill time
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-ink"
            aria-label="Meny"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-6 pt-2 flex flex-col gap-1 bg-off-white border-t border-cream-dark">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-warm-grey hover:text-ink font-medium py-2.5 text-[15px] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bestill"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-teal text-off-white font-semibold px-5 py-3 rounded-full"
            >
              <CalendarCheck size={16} />
              Bestill time
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-cream">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                <Shield size={14} />
                Lillehammers dyreklinikk siden 2005
              </div>

              <h1 className="font-heading text-ink leading-[1.08] tracking-tight">
                <span className="block text-[clamp(2.25rem,5vw,4rem)]">
                  Omsorgsfull
                </span>
                <span className="block text-[clamp(2.25rem,5vw,4rem)]">
                  behandling for
                </span>
                <span className="block text-[clamp(2.25rem,5vw,4rem)] text-teal">
                  ditt kjæledyr
                </span>
              </h1>

              <p className="mt-6 text-warm-grey text-lg lg:text-xl max-w-xl leading-relaxed">
                Vi kombinerer moderne veterinærmedisin med genuin omsorg.
                Fra forebyggende helse til akutt kirurgi — alltid med dyrets
                velvære i fokus.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#bestill"
                  className="inline-flex items-center gap-2.5 bg-teal text-off-white font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-teal-dark transition-colors duration-200 shadow-lg shadow-teal/20"
                >
                  <CalendarCheck size={18} />
                  Bestill time
                </a>
                <a
                  href="#tjenester"
                  className="inline-flex items-center gap-2.5 bg-off-white text-ink font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-cream-dark transition-colors duration-200 border border-cream-dark"
                >
                  Våre tjenester
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-warm-grey">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  Døgnåpen akuttlinje
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral" />
                  Moderne utstyr
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-dark" />
                  20+ års erfaring
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="tjenester" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl mb-14">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Tjenester
              </p>
              <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight tracking-tight">
                Alt ditt dyr trenger,
                <br className="hidden sm:block" /> under ett tak
              </h2>
              <p className="mt-4 text-warm-grey text-lg leading-relaxed">
                Vår klinikk er fullt utstyrt for diagnostikk, behandling og forebyggende
                helsearbeid for hund, katt og smådyr.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group relative p-6 rounded-2xl bg-off-white border border-transparent hover:border-cream-dark hover:shadow-[0_8px_30px_-12px_rgba(13,115,119,0.12)] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-off-white text-teal transition-colors duration-300">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-ink mb-2">
                      {s.title}
                    </h3>
                    <p className="text-warm-grey text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="om-oss" className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-teal-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-teal/10" />
                    <div className="absolute top-6 left-12 w-32 h-32 rounded-full bg-coral/15" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-teal/20" />
                    <Heart
                      size={64}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal"
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                  Om oss
                </p>
                <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight tracking-tight mb-6">
                  Bygget på tillit,
                  <br />
                  drevet av omsorg
                </h2>
                <div className="space-y-4 text-warm-grey text-[15px] lg:text-base leading-relaxed">
                  <p>
                    Fjellbekk Dyreklinikk ble grunnlagt i 2005 av veterinær Ingrid Fjellbekk
                    med en enkel visjon: å tilby Lillehammer-regionen den beste veterinærbehandlingen,
                    med et personlig preg.
                  </p>
                  <p>
                    I dag er vi et team på fire dedikerte fagfolk som behandler alt fra
                    rutinevaksinering til komplekse kirurgiske inngrep. Vi investerer
                    kontinuerlig i oppdatert utstyr og faglig utvikling.
                  </p>
                  <p>
                    Hos oss møter du alltid kjente fjes — vi tror relasjonen mellom
                    dyreeier, dyr og veterinær er grunnlaget for god behandling.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { num: "20+", label: "års erfaring" },
                    { num: "4 000+", label: "pasienter" },
                    { num: "24/7", label: "akuttberedskap" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-2xl lg:text-3xl text-teal font-semibold">
                        {stat.num}
                      </p>
                      <p className="text-warm-grey-light text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section id="teamet" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl mb-14">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Teamet
              </p>
              <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight tracking-tight">
                Møt menneskene bak
              </h2>
              <p className="mt-4 text-warm-grey text-lg leading-relaxed">
                Erfarne veterinærer og dyrepleiere med genuin kjærlighet for dyr.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-cream">
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2/3 ${member.color} opacity-[0.07]`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-20 h-20 rounded-full ${member.color} opacity-20`}
                      />
                    </div>
                    <span className="absolute bottom-4 left-4 right-4 text-xs font-medium text-warm-grey bg-off-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-center">
                      {member.years}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-ink text-[17px]">
                    {member.name}
                  </h3>
                  <p className="text-teal text-sm font-medium mt-0.5">{member.role}</p>
                  <p className="text-warm-grey-light text-sm mt-1">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Tilbakemeldinger
              </p>
              <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight tracking-tight">
                Hva dyreeierne sier
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <blockquote
                  key={review.name}
                  className="bg-off-white rounded-2xl p-7 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-coral"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-warm-grey text-[15px] leading-relaxed flex-1 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-5 text-ink font-semibold text-sm">{review.name}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hours & Contact ── */}
        <section id="apningstider" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                  Åpningstider
                </p>
                <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight tracking-tight mb-8">
                  Når kan du nå oss?
                </h2>

                <div className="space-y-0 mb-8">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between py-4 border-b border-cream-dark"
                    >
                      <span className="text-ink font-medium">{h.day}</span>
                      <span
                        className={`font-semibold ${
                          h.time === "Stengt" ? "text-coral" : "text-teal"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-coral-light rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-off-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-ink text-lg mb-1">
                        Akuttberedskap 24/7
                      </h3>
                      <p className="text-warm-grey text-[15px] leading-relaxed mb-3">
                        Ved akutte tilfeller utenfor åpningstid, ring vår vakttelefon.
                        En av våre veterinærer er alltid tilgjengelig.
                      </p>
                      <a
                        href="tel:+4761234567"
                        className="inline-flex items-center gap-2 text-coral-dark font-bold text-lg"
                      >
                        <Phone size={16} />
                        61 23 45 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                  Kontakt
                </p>
                <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink leading-tight tracking-tight mb-8">
                  Finn oss
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0 text-teal">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-ink font-medium">Adresse</p>
                      <p className="text-warm-grey text-[15px] mt-0.5">
                        Storgata 42, 2609 Lillehammer
                      </p>
                      <p className="text-warm-grey-light text-sm mt-1">
                        Gratis parkering bak bygget
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0 text-teal">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-ink font-medium">Telefon</p>
                      <a
                        href="tel:+4761234567"
                        className="text-teal font-medium text-[15px] mt-0.5 block"
                      >
                        61 23 45 67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0 text-teal">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-ink font-medium">E-post</p>
                      <a
                        href="mailto:post@fjellbekk.no"
                        className="text-teal font-medium text-[15px] mt-0.5 block"
                      >
                        post@fjellbekk.no
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 aspect-[16/9] rounded-2xl bg-cream border border-cream-dark flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-teal mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-warm-grey-light text-sm">
                      Storgata 42, Lillehammer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="bestill" className="py-20 lg:py-28 bg-teal relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-2xl" />

          <div className="relative mx-auto max-w-7xl px-5 text-center">
            <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] text-off-white leading-tight tracking-tight max-w-2xl mx-auto">
              Klar for å bestille time?
            </h2>
            <p className="mt-4 text-teal-light text-lg max-w-lg mx-auto leading-relaxed">
              Ring oss direkte eller send en forespørsel. Vi svarer vanligvis
              innen én arbeidsdag.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+4761234567"
                className="inline-flex items-center gap-2.5 bg-off-white text-teal-dark font-bold text-[15px] px-7 py-3.5 rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/10"
              >
                <Phone size={18} />
                Ring 61 23 45 67
              </a>
              <a
                href="mailto:post@fjellbekk.no"
                className="inline-flex items-center gap-2.5 bg-teal-dark text-off-white font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-teal-dark/80 transition-colors duration-200 border border-white/10"
              >
                Send e-post
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-ink text-white/60 py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
                  <Heart size={14} className="text-off-white" fill="currentColor" />
                </div>
                <span className="font-heading font-semibold text-white text-lg">
                  Fjellbekk Dyreklinikk
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Omsorgsfull veterinærbehandling i Lillehammer siden 2005. Godkjent
                av Mattilsynet. Medlem av Den norske veterinærforening.
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
                Snarveier
              </h4>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
                Kontakt
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>Storgata 42, 2609 Lillehammer</li>
                <li>
                  <a href="tel:+4761234567" className="hover:text-white transition-colors">
                    61 23 45 67
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:post@fjellbekk.no"
                    className="hover:text-white transition-colors"
                  >
                    post@fjellbekk.no
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Fjellbekk Dyreklinikk. Alle rettigheter reservert.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Personvern
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Vilkår
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Scroll to top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Til toppen"
        className={`fixed bottom-6 right-6 w-11 h-11 bg-teal text-off-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-teal-dark z-40 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ChevronDown size={20} className="rotate-180" />
      </button>
    </>
  );
}
