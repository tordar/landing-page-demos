"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Truck,
  Shirt,
  Sparkles,
  Wind,
  ChevronDown,
  Building2,
  Zap,
  Timer,
  CalendarCheck,
  ArrowRight,
  Star,
  Users,
  Award,
} from "lucide-react";

/* ───────── scroll-reveal hook ───────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((child) => io.observe(child));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ───────── data ───────── */
const services = [
  {
    icon: Shirt,
    name: "Rens",
    price: "189",
    desc: "Dresser, jakker, kjoler og frakker. Skånsom behandling som forlenger plaggenes levetid.",
  },
  {
    icon: Wind,
    name: "Skjorteservice",
    price: "69",
    desc: "Vasket, strøket og brettet eller på henger. Perfekt for travle hverdager.",
  },
  {
    icon: Sparkles,
    name: "Skinnbehandling",
    price: "349",
    desc: "Profesjonell rens og pleie av skinn- og semsket plagg. Vi gjenoppretter mykhet og farge.",
  },
  {
    icon: Wind,
    name: "Gardiner",
    price: "149",
    desc: "Vi henter, renser og henger opp igjen. Friske gardiner uten at du løfter en finger.",
  },
  {
    icon: Award,
    name: "Bunadpleie",
    price: "495",
    desc: "Spesialtilpasset rens for bunader og stakker. Vi behandler hver bunad med den respekten den fortjener.",
  },
  {
    icon: Sparkles,
    name: "Dyne & pute",
    price: "199",
    desc: "Grundig vask av dyner og puter. Fjerner midd, allergener og gir nytt liv til sengetøyet.",
  },
];

const turnaroundOptions = [
  {
    icon: Timer,
    label: "Standard",
    time: "3–5 virkedager",
    note: "Inkludert i alle priser",
  },
  {
    icon: Zap,
    label: "Express",
    time: "24 timer",
    note: "+50% pristillegg",
  },
  {
    icon: CalendarCheck,
    label: "Bedrift",
    time: "Etter avtale",
    note: "Fast henting hver uke",
  },
];

const faqs = [
  {
    q: "Hva kan jeg levere til rens?",
    a: "Vi tar imot det meste — dresser, kjoler, jakker, skjorter, gardiner, dyner, puter, bunader, skinnplagg og mer. Er du usikker? Ring oss, så hjelper vi deg.",
  },
  {
    q: "Hvor lang tid tar henting og levering?",
    a: "Vi henter normalt innen 24 timer etter bestilling. Standard leveringstid er 3–5 virkedager. Express-levering på 24 timer er tilgjengelig mot pristillegg.",
  },
  {
    q: "Er det gratis henting og levering?",
    a: "Ja, vi tilbyr gratis henting og levering i Drammen og nærområdene for bestillinger over 300 kr. For mindre bestillinger er fraktkostnaden 49 kr.",
  },
  {
    q: "Hva gjør dere med flekker?",
    a: "Vi vurderer alle plagg individuelt før rens. Spesielle flekker blir behandlet med egnede midler uten ekstra kostnad. Vi kontakter deg dersom plagget krever spesialbehandling.",
  },
];

const navLinks = [
  { label: "Tjenester", href: "#tjenester" },
  { label: "Henting", href: "#henting" },
  { label: "Bedrift", href: "#bedrift" },
  { label: "Om oss", href: "#om" },
  { label: "Kontakt", href: "#kontakt" },
];

/* ───────── components ───────── */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-green flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-charcoal">
            Sentrum Renseri
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-charcoal-light hover:text-charcoal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:32834500"
            className="text-sm font-medium text-charcoal-light hover:text-charcoal flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            32 83 45 00
          </a>
          <a
            href="#henting"
            className="inline-flex items-center gap-2 rounded-lg bg-green px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
          >
            Bestill henting
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-charcoal"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-border px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNav}
              className="py-2.5 text-sm font-medium text-charcoal-light hover:text-charcoal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-border flex flex-col gap-3">
            <a
              href="tel:32834500"
              className="text-sm font-medium text-charcoal-light flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              32 83 45 00
            </a>
            <a
              href="#henting"
              onClick={handleNav}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-4 py-2.5 text-sm font-semibold text-white"
            >
              Bestill henting
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--blue-light)_0%,transparent_50%)] opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="reveal flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-light px-3 py-1 text-xs font-semibold text-green-dark tracking-wide uppercase">
              <MapPin className="w-3 h-3" />
              Drammen sentrum
            </span>
          </div>

          <h1 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
            Profesjonell
            <br />
            tekstilpleie
            <br />
            <span className="text-green">siden 1995</span>
          </h1>

          <p className="reveal mt-6 text-lg text-charcoal-light leading-relaxed max-w-lg">
            Drammens mest pålitelige renseri. Vi henter, renser og leverer —
            slik at du kan bruke tiden din på det som betyr noe.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a
              href="#henting"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
            >
              Bestill henting
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#tjenester"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-charcoal/15 px-6 py-3 text-sm font-semibold text-charcoal hover:border-charcoal/30 transition-colors"
            >
              Se prisliste
            </a>
          </div>

          <div className="reveal mt-14 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: Star, text: "30+ år erfaring" },
              { icon: Users, text: "5 000+ fornøyde kunder" },
              { icon: Truck, text: "Gratis henting & levering" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-charcoal-light"
              >
                <badge.icon className="w-4 h-4 text-green" />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      id="tjenester"
      className="py-20 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal max-w-lg mb-14">
          <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
            Tjenester & priser
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            Alt innen tekstilpleie
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed">
            Vi behandler hvert plagg individuelt. Transparente priser, ingen
            overraskelser.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="reveal group relative rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:border-green/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center group-hover:bg-green-light transition-colors">
                  <s.icon
                    className="w-5 h-5 text-charcoal group-hover:text-green transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-sm font-semibold text-green">
                  fra {s.price} kr
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                {s.name}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pickup() {
  const ref = useReveal();
  const steps = [
    {
      num: "01",
      title: "Bestill henting",
      desc: "Ring oss eller bestill via telefon. Vi avtaler tid som passer deg.",
    },
    {
      num: "02",
      title: "Vi henter hos deg",
      desc: "Vår sjåfør kommer til døren. Ingen frakt for bestillinger over 300 kr.",
    },
    {
      num: "03",
      title: "Levert rent tilbake",
      desc: "Plaggene dine kommer tilbake nyrenset, presset og klare til bruk.",
    },
  ];

  return (
    <section
      ref={ref}
      id="henting"
      className="py-20 lg:py-28 bg-blue-light/40 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal max-w-lg mb-14">
          <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
            Henting & levering
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            Vi kommer til deg
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed">
            Spar tid med vår hente- og bringetjeneste. Gratis i Drammen for
            bestillinger over 300 kr.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {i < 2 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px border-t-2 border-dashed border-charcoal/10 -translate-x-4" />
              )}
              <span className="font-heading text-4xl font-bold text-green/20">
                {step.num}
              </span>
              <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12">
          <a
            href="tel:32834500"
            className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            Ring for å bestille henting
          </a>
        </div>
      </div>
    </section>
  );
}

function B2B() {
  const ref = useReveal();
  return (
    <section ref={ref} id="bedrift" className="py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
              For bedrifter
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Skreddersydde løsninger for din virksomhet
            </h2>
            <p className="mt-5 text-charcoal-light leading-relaxed">
              Hoteller, restauranter, kontorer og helseinstitusjoner i Drammen
              stoler på oss for pålitelig tekstilpleie. Vi tilbyr faste avtaler
              med volumpriser og regelmessig henting.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Fast ukentlig henting og levering",
                "Volumpriser tilpasset ditt behov",
                "Dedikert kontaktperson",
                "Fakturering etter avtale",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-charcoal"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-green-light flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-green" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:32834500"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal-light transition-colors"
            >
              <Building2 className="w-4 h-4" />
              Kontakt oss for bedriftsavtale
            </a>
          </div>

          <div className="reveal bg-blue-light/50 rounded-2xl p-8 lg:p-10">
            <p className="font-heading text-lg font-semibold text-charcoal mb-6">
              Betjener blant annet
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: "Hoteller" },
                { icon: Users, label: "Restauranter" },
                { icon: Building2, label: "Kontorer" },
                { icon: Award, label: "Helsevesen" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl bg-white p-4"
                >
                  <item.icon
                    className="w-5 h-5 text-green shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium text-charcoal">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Turnaround() {
  const ref = useReveal();
  return (
    <section className="py-20 lg:py-28 bg-charcoal scroll-mt-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal text-center mb-14">
          <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
            Leveringstid
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Raskt tilbake til deg
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {turnaroundOptions.map((opt, i) => (
            <div
              key={opt.label}
              className={`reveal rounded-2xl p-6 lg:p-8 text-center ${
                i === 1
                  ? "bg-green text-white"
                  : "bg-white/5 border border-white/10 text-white"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <opt.icon
                className={`w-6 h-6 mx-auto mb-4 ${
                  i === 1 ? "text-white" : "text-green"
                }`}
                strokeWidth={1.5}
              />
              <p className="font-heading text-sm font-semibold uppercase tracking-wider opacity-70 mb-1">
                {opt.label}
              </p>
              <p className="font-heading text-2xl lg:text-3xl font-bold">
                {opt.time}
              </p>
              <p
                className={`mt-2 text-sm ${
                  i === 1 ? "text-white/80" : "text-white/50"
                }`}
              >
                {opt.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section ref={ref} id="om" className="py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
            Om oss
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            Familiedrevet kvalitet i over 30 år
          </h2>
          <p className="mt-6 text-charcoal-light leading-relaxed">
            Sentrum Renseri ble grunnlagt i 1995 midt i Drammen sentrum. Det som
            startet som et lite renseri har vokst til å bli byens foretrukne
            valg for tekstilpleie — for både privatpersoner og bedrifter.
          </p>
          <p className="mt-4 text-charcoal-light leading-relaxed">
            Vi kombinerer tradisjonelt håndverk med moderne teknikker for å gi
            hvert plagg den behandlingen det fortjener. Hos oss er det alltid en
            erfaren tekstilpleier som vurderer plagget ditt personlig.
          </p>
        </div>

        <div className="reveal mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "30+", label: "Års erfaring" },
            { value: "5 000+", label: "Fornøyde kunder" },
            { value: "50 000+", label: "Plagg behandlet årlig" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl lg:text-4xl font-bold text-green">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-charcoal-light font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-warm-white scroll-mt-20" ref={ref}>
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="reveal mb-12">
          <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
            Vanlige spørsmål
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            Lurer du på noe?
          </h2>
        </div>

        <div className="reveal space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-border bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm font-semibold text-charcoal pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal-light shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-charcoal-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  return (
    <section ref={ref} id="kontakt" className="py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <p className="text-xs font-semibold text-green tracking-widest uppercase mb-3">
              Finn oss
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Besøk oss i Drammen sentrum
            </h2>
            <p className="mt-5 text-charcoal-light leading-relaxed">
              Levér inn plagg direkte i butikken, eller bestill henting så
              kommer vi til deg.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-charcoal">
                    Adresse
                  </p>
                  <p className="text-sm text-charcoal-light mt-0.5">
                    Nedre Storgate 24, 3015 Drammen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-charcoal">
                    Telefon
                  </p>
                  <a
                    href="tel:32834500"
                    className="text-sm text-charcoal-light mt-0.5 hover:text-green transition-colors"
                  >
                    32 83 45 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-charcoal">
                    Åpningstider
                  </p>
                  <div className="text-sm text-charcoal-light mt-0.5 space-y-0.5">
                    <p>Mandag – fredag: 07:30 – 18:00</p>
                    <p>Lørdag: 09:00 – 15:00</p>
                    <p>Søndag: Stengt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal rounded-2xl bg-blue-light/40 p-8 lg:p-10 flex flex-col justify-center">
            <p className="font-heading text-xl font-bold text-charcoal mb-3">
              Klar for å prøve oss?
            </p>
            <p className="text-sm text-charcoal-light leading-relaxed mb-6">
              Ring oss for å bestille henting, eller stikk innom butikken i
              Nedre Storgate. Første gangs kunder får 20% rabatt.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:32834500"
                className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Ring oss nå
              </a>
              <a
                href="#tjenester"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-charcoal/15 px-6 py-3 text-sm font-semibold text-charcoal hover:border-charcoal/30 transition-colors"
              >
                Se alle priser
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-green flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-heading text-base font-bold text-white">
                Sentrum Renseri
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Profesjonell tekstilpleie i Drammen siden 1995. Kvalitet og
              pålitelighet i over 30 år.
            </p>
          </div>

          <div>
            <p className="font-heading text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Tjenester
            </p>
            <ul className="space-y-2">
              {["Rens", "Skjorteservice", "Skinnbehandling", "Gardiner", "Bunadpleie", "Dyne & pute"].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#tjenester"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Informasjon
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Kontakt
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <p>Nedre Storgate 24</p>
              <p>3015 Drammen</p>
              <a
                href="tel:32834500"
                className="block hover:text-white transition-colors"
              >
                32 83 45 00
              </a>
              <a
                href="mailto:post@sentrumrenseri.no"
                className="block hover:text-white transition-colors"
              >
                post@sentrumrenseri.no
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sentrum Renseri. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────── page ───────── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pickup />
        <B2B />
        <Turnaround />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
