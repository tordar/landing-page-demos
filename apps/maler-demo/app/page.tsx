"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Paintbrush,
  Home,
  Layers,
  Droplets,
  GlassWater,
  Building2,
  Star,
  Award,
  Users,
  Clock,
  Menu,
  X,
  ArrowRight,
  Quote,
  CheckCircle2,
  ExternalLink,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Innvendig maling",
    desc: "Vegger, tak og listverk — vi gir rommene dine nytt liv med presist håndverk og førsteklasses materialer.",
    accent: "from-cobalt/10 to-cobalt/5",
  },
  {
    icon: Building2,
    title: "Utvendig maling",
    desc: "Beskyttelse og fornyelse av fasaden. Vi bruker værbestandige produkter tilpasset vestlandsklima.",
    accent: "from-terracotta/10 to-terracotta/5",
  },
  {
    icon: Layers,
    title: "Tapetsering",
    desc: "Fra klassisk mønster til moderne tekstil — presis oppsetting som holder i årevis.",
    accent: "from-cobalt/10 to-cobalt/5",
  },
  {
    icon: Droplets,
    title: "Sparkling",
    desc: "Jevne, feilfrie flater er grunnlaget for alt godt malerarbeid. Vi sparkler til perfeksjon.",
    accent: "from-terracotta/10 to-terracotta/5",
  },
  {
    icon: GlassWater,
    title: "Glassarbeid",
    desc: "Montering og utskifting av glass i vinduer, dører og fasader — sikkert og presist.",
    accent: "from-cobalt/10 to-cobalt/5",
  },
  {
    icon: Paintbrush,
    title: "Fasadearbeid",
    desc: "Komplett fasaderehabilitering — fra forarbeid og reparasjon til ferdig overflate.",
    accent: "from-terracotta/10 to-terracotta/5",
  },
];

const projects = [
  {
    title: "Villa på Eiganes",
    category: "Innvendig",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Næringsbygg Forus",
    category: "Fasade",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Enebolig Madla",
    category: "Utvendig",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Leilighet Storhaug",
    category: "Tapetsering",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Kontorfellesskap Stavanger sentrum",
    category: "Innvendig",
    image:
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Rekkehus Sandnes",
    category: "Utvendig",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Kristin Helgesen",
    role: "Huseier, Eiganes",
    text: "Strand Malermestre forvandlet stuen og kjøkkenet vårt totalt. Ryddig, punktlig og et resultat som overgikk forventningene. Anbefales på det varmeste!",
    rating: 5,
  },
  {
    name: "Bjørn-Erik Tangen",
    role: "Daglig leder, Tangen Eiendom AS",
    text: "Vi har brukt Strand på tre næringsbygg de siste årene. Alltid profesjonelle, alltid innenfor budsjett. De er vår faste leverandør for alt av malerarbeid.",
    rating: 5,
  },
  {
    name: "Marianne Bø",
    role: "Huseier, Madla",
    text: "Fantastisk jobb med utvendig maling av huset. De tok seg tid til grundig forarbeid, og fasaden ser helt ny ut. Virkelig kvalitetshåndverk.",
    rating: 5,
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const navLinks = [
    { label: "Tjenester", href: "#tjenester" },
    { label: "Prosjekter", href: "#prosjekter" },
    { label: "Om oss", href: "#om-oss" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(26,26,30,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-cobalt">
              <Paintbrush className="h-5 w-5 text-cream" strokeWidth={1.5} />
            </div>
            <div className="leading-none">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                Strand
              </span>
              <span className="block font-display text-[0.6rem] font-medium uppercase tracking-[0.25em] text-warm-grey">
                Malermestre
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold uppercase tracking-wider text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA group */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:51843200"
              className="flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              51 84 32 00
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-terracotta px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-terracotta-dark"
            >
              Gratis befaring
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-ink" />
            ) : (
              <Menu className="h-6 w-6 text-ink" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-ink/5 bg-cream px-6 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-base font-semibold uppercase tracking-wider text-ink/70"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <a
                  href="tel:51843200"
                  className="flex items-center gap-2 text-sm font-medium text-ink/70"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  51 84 32 00
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-terracotta px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-cream"
                >
                  Gratis befaring
                  <ChevronRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
          {/* Text column */}
          <div className="fade-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
              Malermestre i Stavanger siden 2003
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink">
              Kvalitets&shy;håndverk
              <br />
              <span className="paint-stroke inline-block text-cobalt">
                som varer
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-warm-grey">
              Vi er 14 dyktige håndverkere som leverer førsteklasses maler- og
              glassarbeid til boliger og næringsbygg i Stavanger-regionen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-terracotta px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-terracotta-dark"
              >
                Få gratis befaring
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="#tjenester"
                className="inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-ink transition-all hover:border-ink/30"
              >
                Våre tjenester
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-up relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-cobalt/10">
              <Image
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=80&auto=format&fit=crop"
                alt="Malerrulle med frisk maling på vegg"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Cobalt wash to tie image to palette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/30 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-ink/30 to-transparent" />
              {/* Decorative corner element */}
              <div className="absolute top-6 left-6 h-16 w-16 border-t-2 border-l-2 border-cream/60" />
              <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-cream/60" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 bg-cobalt px-5 py-3 shadow-lg lg:-bottom-6 lg:-left-6">
              <span className="block font-display text-2xl font-bold text-cream">
                20+
              </span>
              <span className="font-display text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream/70">
                Års erfaring
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-ink/5 bg-cream-dark">
        <div className="stagger mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {[
            { value: "20+", label: "Års erfaring", icon: Clock },
            { value: "1 200+", label: "Fullførte prosjekter", icon: Paintbrush },
            { value: "98%", label: "Fornøyde kunder", icon: Users },
            { value: "Mesterbrev", label: "Sertifisert kvalitet", icon: Award },
          ].map((stat) => (
            <div
              key={stat.label}
              className="fade-up flex flex-col items-center gap-2 bg-cream px-6 py-8 text-center lg:py-10"
            >
              <stat.icon
                className="mb-1 h-5 w-5 text-terracotta"
                strokeWidth={1.5}
              />
              <span className="font-display text-3xl font-bold uppercase text-ink lg:text-4xl">
                {stat.value}
              </span>
              <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="tjenester" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-up mb-16 max-w-2xl">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
              Våre tjenester
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tight text-ink">
              Alt innen maler-
              <br />
              og glassarbeid
            </h2>
            <p className="mt-4 text-base leading-relaxed text-warm-grey">
              Fra innvendig oppussing til komplett fasaderehabilitering — vi har
              kompetansen og erfaringen som trengs for et førsteklasses resultat.
            </p>
          </div>

          <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="fade-up group relative overflow-hidden border border-ink/5 bg-cream p-8 transition-all hover:border-ink/10 hover:shadow-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <span className="mb-4 block font-display text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-warm-grey-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <service.icon
                    className="mb-4 h-6 w-6 text-cobalt"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-grey">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-up mb-16 max-w-2xl">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-terracotta-light">
              Transformasjoner
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tight text-cream">
              Fra slitt til
              <br />
              <span className="text-terracotta-light">strålende</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-warm-grey-light">
              Se forskjellen grundig forarbeid og kvalitetsmaling gjør. Hvert
              prosjekt starter med en tilstandsvurdering og ender med et resultat
              vi er stolte av.
            </p>
          </div>

          <div className="stagger grid gap-6 lg:grid-cols-2">
            {/* Before/After pair 1 */}
            <div className="fade-up grid grid-cols-2 gap-1 overflow-hidden rounded-sm">
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-light">
                <Image
                  src="https://images.unsplash.com/photo-1585128903994-9788298932a6?w=700&q=80&auto=format&fit=crop"
                  alt="Stue med slitt overflate før oppussing"
                  fill
                  className="object-cover [filter:grayscale(0.55)_sepia(0.12)_brightness(0.92)]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <span className="absolute top-4 left-4 bg-ink/80 px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream">
                  Før
                </span>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden bg-cream">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80&auto=format&fit=crop"
                  alt="Nymalt stue etter oppussing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-4 left-4 bg-terracotta px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream">
                  Etter
                </span>
              </div>
              <p className="col-span-2 bg-ink-light px-5 py-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-warm-grey-light">
                Stue — Villa, Eiganes
              </p>
            </div>

            {/* Before/After pair 2 */}
            <div className="fade-up grid grid-cols-2 gap-1 overflow-hidden rounded-sm">
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-light">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
                  alt="Næringsbygg-fasade med værslitte overflater"
                  fill
                  className="object-cover [filter:grayscale(0.6)_brightness(0.85)]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/25" />
                <span className="absolute top-4 left-4 bg-ink/80 px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream">
                  Før
                </span>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden bg-cobalt/20">
                <Image
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80&auto=format&fit=crop"
                  alt="Nymalt næringsbygg-fasade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-4 left-4 bg-terracotta px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream">
                  Etter
                </span>
              </div>
              <p className="col-span-2 bg-ink-light px-5 py-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-warm-grey-light">
                Fasade — Næringsbygg, Forus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="prosjekter" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-up mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
                Utvalgte prosjekter
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tight text-ink">
                Vårt arbeid
                <br />
                taler for seg
              </h2>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-cobalt transition-colors hover:text-cobalt-dark"
            >
              Se alle prosjekter
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="fade-up group">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-all group-hover:bg-ink/10" />
                  <span className="absolute bottom-4 left-4 bg-cream/90 px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-ink backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base font-bold uppercase tracking-wide text-ink">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-y border-ink/5 bg-cream-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-up mb-16 text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
              Kundeomtaler
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tight text-ink">
              Hva kundene sier
            </h2>
          </div>

          <div className="stagger grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="fade-up relative border border-ink/5 bg-cream p-8"
              >
                <Quote
                  className="mb-4 h-6 w-6 text-terracotta/30"
                  strokeWidth={1.5}
                />
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-terracotta text-terracotta"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-ink/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-warm-grey">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="om-oss" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
          {/* About image */}
          <div className="fade-up relative">
            <div className="relative aspect-[5/4] overflow-hidden bg-cobalt/20">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1100&q=80&auto=format&fit=crop"
                alt="Malermester i arbeid med vindusrammer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-cobalt/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 h-20 w-20 border-b-2 border-l-2 border-cream/60" />
            </div>
            {/* Floating certification badge */}
            <div className="absolute -right-3 -bottom-3 flex items-center gap-3 bg-cream px-5 py-4 shadow-lg lg:-right-6 lg:-bottom-6">
              <Award className="h-8 w-8 text-cobalt" strokeWidth={1.5} />
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                  Mesterbrev
                </p>
                <p className="text-xs text-warm-grey">Sertifisert malermester</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-up">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
              Om Strand Malermestre
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tight text-ink">
              Håndverk med
              <br />
              stolthet siden 2003
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-warm-grey">
              <p>
                Strand Malermestre ble grunnlagt i Stavanger med én overbevisning:
                at grundig håndverk og ærlige materialer gir resultater som varer.
                Over to tiår senere er vi 14 dyktige fagfolk som deler denne
                overbevisningen.
              </p>
              <p>
                Som sertifisert malermester med mesterbrev leverer vi arbeid etter
                de høyeste bransjestandardene. Vi er stolte partnere av Jotun og
                Beckers, og bruker kun førsteklasses produkter tilpasset norske
                forhold.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Mesterbrev-sertifisert",
                "Jotun- og Beckers-partner",
                "Gratis befaring",
                "Skriftlig garanti",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-cobalt"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-ink/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="kontakt" className="bg-cobalt py-24 lg:py-32">
        <div className="fade-up mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-cream/50">
            Klar for forandring?
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-cream">
            Få et uforpliktende
            <br />
            tilbud i dag
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/60">
            Ta kontakt for en gratis befaring og tilbud. Vi svarer innen 24
            timer — ingen forpliktelser.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:51843200"
              className="inline-flex items-center gap-2 bg-terracotta px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-terracotta-light"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              Ring 51 84 32 00
            </a>
            <a
              href="mailto:post@strandmalermestre.no"
              className="inline-flex items-center gap-2 border border-cream/20 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:border-cream/40"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              Send e-post
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-8">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-cream/10">
                <Paintbrush
                  className="h-4 w-4 text-cream"
                  strokeWidth={1.5}
                />
              </div>
              <div className="leading-none">
                <span className="font-display text-base font-bold uppercase tracking-wide text-cream">
                  Strand
                </span>
                <span className="block font-display text-[0.55rem] font-medium uppercase tracking-[0.25em] text-warm-grey">
                  Malermestre
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-warm-grey">
              Kvalitetshåndverk som varer — maler- og glassarbeid i
              Stavanger-regionen siden 2003.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center bg-cream/5 transition-colors hover:bg-cream/10"
              >
                <Globe
                  className="h-4 w-4 text-warm-grey"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center bg-cream/5 transition-colors hover:bg-cream/10"
              >
                <ExternalLink
                  className="h-4 w-4 text-warm-grey"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-cream/40">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-warm-grey">
              <a
                href="tel:51843200"
                className="flex items-center gap-2 transition-colors hover:text-cream"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                51 84 32 00
              </a>
              <a
                href="mailto:post@strandmalermestre.no"
                className="flex items-center gap-2 transition-colors hover:text-cream"
              >
                <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                post@strandmalermestre.no
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                <span>
                  Fiskepiren 3<br />
                  4005 Stavanger
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-cream/40">
              Tjenester
            </h4>
            <div className="space-y-2 text-sm text-warm-grey">
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#tjenester"
                  className="block transition-colors hover:text-cream"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-cream/40">
              Dekningsområde
            </h4>
            <div className="space-y-2 text-sm text-warm-grey">
              {["Stavanger", "Sandnes", "Sola", "Randaberg", "Strand"].map(
                (area) => (
                  <p key={area}>{area}</p>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-cream/5 px-6 pt-8 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-warm-grey/60">
            <p>© 2003–2026 Strand Malermestre AS · Org.nr 987 654 321</p>
            <p>Mesterbrev-sertifisert malerbedrift</p>
          </div>
        </div>
      </footer>
    </>
  );
}
