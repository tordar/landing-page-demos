"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Printer,
  FileText,
  Package,
  BookOpen,
  CreditCard,
  Image as ImageIcon,
  Layers,
  Clock,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Send,
} from "lucide-react";

/* ─────────────────────────── NAV ─────────────────────────── */

const NAV_ITEMS = [
  { label: "Tjenester", href: "#tjenester" },
  { label: "Arbeider", href: "#arbeider" },
  { label: "Produksjon", href: "#produksjon" },
  { label: "Leveranse", href: "#leveranse" },
  { label: "Kontakt", href: "#kontakt" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-yellow flex items-center justify-center">
            <span className="font-display font-bold text-black text-sm leading-none">
              GT
            </span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Grafisk Trykk
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide transition-colors hover:text-yellow text-white/70"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-yellow text-black text-sm font-display font-bold px-5 py-2.5 hover:bg-yellow/90 transition-colors"
          >
            Be om tilbud
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 mt-3">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 text-lg hover:text-yellow transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="bg-yellow text-black font-display font-bold px-5 py-3 text-center mt-2"
            >
              Be om tilbud
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-black min-h-[100svh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute top-0 right-0 w-1/3 h-[45%] bg-yellow/8" />

      <div className="relative mx-auto max-w-[1400px] w-full px-6 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-12 h-px bg-yellow" />
              <span className="text-yellow text-sm font-display tracking-widest uppercase">
                Trykkeri i Oslo siden 2001
              </span>
            </div>

            <h1
              className={`font-display font-bold leading-[0.92] tracking-tight transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="block text-white text-[clamp(2.5rem,7vw,6.5rem)]">
                Fra idé til
              </span>
              <span className="block text-yellow text-[clamp(2.5rem,7vw,6.5rem)]">
                ferdig trykk
              </span>
            </h1>

            <p
              className={`text-white/50 text-lg md:text-xl max-w-xl mt-8 leading-relaxed transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Vi leverer alt fra visittkort til storformat — med presisjon,
              fargenøyaktighet og kort leveringstid. Alltid.
            </p>

            <div
              className={`flex flex-wrap gap-4 mt-10 transition-all duration-700 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#kontakt"
                className="group bg-yellow text-black font-display font-bold px-8 py-4 flex items-center gap-3 hover:gap-4 transition-all"
              >
                Be om tilbud
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#tjenester"
                className="text-white/60 border border-white/20 font-display px-8 py-4 hover:border-white/40 hover:text-white transition-all"
              >
                Se tjenester
              </a>
            </div>
          </div>

          <div
            className={`md:col-span-4 flex md:flex-col gap-8 md:gap-0 md:border-l md:border-white/10 md:pl-10 transition-all duration-700 delay-[400ms] ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { number: "24+", label: "Års erfaring" },
              { number: "5000+", label: "Prosjekter levert" },
              { number: "48t", label: "Rask levering" },
            ].map((stat, i) => (
              <div key={i} className="md:py-6 md:first:pt-0 md:last:pb-0">
                <div className="font-display font-bold text-3xl md:text-4xl text-white">
                  {stat.number}
                </div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`hidden md:flex items-center gap-3 mt-20 transition-all duration-700 delay-500 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <ChevronDown size={16} className="text-white/30 animate-bounce" />
          <span className="text-white/30 text-xs tracking-widest uppercase">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */

const SERVICES = [
  {
    icon: Printer,
    title: "Offsettrykk",
    desc: "Høyvolum med uovertruffen fargenøyaktighet. Ideelt for opplag over 500.",
    tag: "Storkjøring",
  },
  {
    icon: Layers,
    title: "Digitaltrykk",
    desc: "Fleksibelt og raskt for små og mellomstore opplag. Ingen plater nødvendig.",
    tag: "Kort leveringstid",
  },
  {
    icon: ImageIcon,
    title: "Storformat",
    desc: "Bannere, fasadeskilt, messevegg og vindusdekorer i stort format.",
    tag: "Opptil 5m bredde",
  },
  {
    icon: Package,
    title: "Emballasje",
    desc: "Skreddersydd emballasjedesign og produksjon. Fra kartong til fleksibel.",
    tag: "Egne stanseformer",
  },
  {
    icon: BookOpen,
    title: "Bøker & kataloger",
    desc: "Limt, stiftet eller trådsydd. Vi håndterer hele prosessen fra fil til ferdig bok.",
    tag: "Innbinding",
  },
  {
    icon: CreditCard,
    title: "Visittkort",
    desc: "Premium visittkort med folietrykk, preging, soft-touch og spesialfinish.",
    tag: "Spesialfinish",
  },
  {
    icon: FileText,
    title: "Plakater & flyers",
    desc: "Enkeltark i alle formater — fra A6 til B0. Matt, blank eller ubestrøket.",
    tag: "Alle formater",
  },
];

function Services() {
  return (
    <section id="tjenester" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-5">
            <span className="text-yellow font-display text-sm tracking-widest uppercase font-bold">
              Tjenester
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight mt-3 text-black">
              Alt du trenger
              <br />
              under ett tak
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-grey text-lg leading-relaxed">
              Fra konsept til ferdig produkt — vi har kompetansen, utstyret og
              erfaringen til å levere på alle trykkformat og materialer.
            </p>
          </div>
        </div>

        <div className="border-t-[3px] border-black" />

        <div>
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-12 gap-4 md:gap-6 py-7 border-b border-grey-light items-center hover:bg-black/[0.02] transition-colors -mx-6 px-6"
            >
              <div className="md:col-span-1 flex items-center">
                <span className="font-display text-grey text-sm tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-3 flex items-center gap-3">
                <service.icon
                  size={20}
                  className="text-yellow shrink-0"
                  strokeWidth={1.5}
                />
                <h3 className="font-display font-bold text-xl tracking-tight">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-grey leading-relaxed">{service.desc}</p>
              </div>
              <div className="md:col-span-2 flex items-center justify-end">
                <span className="text-xs tracking-wider uppercase text-grey border border-grey-light px-3 py-1.5">
                  {service.tag}
                </span>
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <ArrowRight
                  size={16}
                  className="text-grey group-hover:text-yellow group-hover:translate-x-1 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PORTFOLIO ─────────────────────────── */

const PORTFOLIO = [
  { title: "Årsrapport Hydro", category: "Offsettrykk", color: "#1a1a2e" },
  { title: "Messemateriell NHO", category: "Storformat", color: "#2d3a4a" },
  { title: "Produktkatalog Jotun", category: "Digitaltrykk", color: "#4a3728" },
  { title: "Emballasje Lervig", category: "Emballasje", color: "#1e3a2f" },
  { title: "Brandbook DNB", category: "Bøker", color: "#3a2d4a" },
  { title: "Kampanjemateriell Finn.no", category: "Plakater", color: "#4a3a1e" },
];

function Portfolio() {
  return (
    <section id="arbeider" className="py-24 md:py-32 bg-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-yellow font-display text-sm tracking-widest uppercase font-bold">
              Utvalgte arbeider
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight mt-3 text-white">
              Prosjekter vi er
              <br />
              stolte av
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-lg leading-relaxed">
            Et knippe av de over 5000 prosjektene vi har levert til norske
            bedrifter og organisasjoner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {PORTFOLIO.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${
                i === 0 || i === 3
                  ? "md:row-span-2 aspect-[3/4]"
                  : "aspect-[4/3]"
              }`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: item.color }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-yellow text-xs tracking-widest uppercase font-display">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-white text-xl mt-1">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 left-4">
                <span className="text-white/20 font-display text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PRODUCTION ─────────────────────────── */

const CAPABILITIES = [
  "Heidelberg Speedmaster XL 106 — 6-fargers offset",
  "HP Indigo 12000 HD — digital produksjonspresse",
  "Durst P5 350 — storformatprinter (UV, latex)",
  "Polar 137 XT — høyhastighets skjæremaskin",
  "Müller Martini Vareo — perfekt innbinding",
  "Bobst Expertcut 106 — stansing og preging",
  "Koenig & Bauer Rapida 105 — 5-fargers offset",
  "Esko CDI Spark — flexo plateframstilling",
];

function Production() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const details = [
    {
      title: "Prepress",
      content:
        "Komplett prepress-avdeling med fargestyring etter ISO 12647. Soft-proofing, kontraktsproofing og digital imposisjon. Vi kvalitetssikrer alle filer før produksjon.",
    },
    {
      title: "Trykk",
      content:
        "Tre offsetpresser og to digitale produksjonspresser gir oss kapasitet til å kjøre både store og små opplag effektivt. Fargenøyaktighet kontrolleres med spektrofotometer gjennom hele kjøringen.",
    },
    {
      title: "Etterbehandling",
      content:
        "Laminering, UV-lakk, folietrykk, stansing, preging, falsing, innbinding — alt utføres in-house. Ingen outsourcing, full kontroll over kvalitet og leveringstid.",
    },
    {
      title: "Logistikk",
      content:
        "Egen distribusjon i Oslo-området. Samarbeider med Bring og PostNord for leveranser nasjonalt. Palleforsendelser til hele Norden.",
    },
  ];

  return (
    <section id="produksjon" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <span className="text-yellow font-display text-sm tracking-widest uppercase font-bold">
              Produksjon
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight mt-3 mb-10 text-black">
              Maskinparken som
              <br />
              gjør forskjellen
            </h2>

            <div className="space-y-0">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-grey-light"
                >
                  <span className="text-yellow mt-0.5">
                    <CheckCircle size={14} strokeWidth={2} />
                  </span>
                  <span className="text-sm text-grey-dark leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="md:mt-20">
              {details.map((item, i) => (
                <div key={i} className="border-b border-grey-light">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="w-full flex items-center justify-between py-6 group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-grey text-sm tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display font-bold text-xl tracking-tight group-hover:text-yellow transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-grey transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300"
                    style={{
                      gridTemplateRows:
                        openIndex === i ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-grey leading-relaxed pb-6 pl-10">
                        {item.content}
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
  );
}

/* ─────────────────────────── FILE SPECS ─────────────────────────── */

function FileSpecs() {
  const specs = [
    {
      title: "Filformat",
      items: ["PDF/X-4 (anbefalt)", "PDF/X-1a", "TIFF (flatet)", "EPS"],
    },
    {
      title: "Fargerom",
      items: [
        "CMYK (ISO Coated v2)",
        "Pantone (PMS)",
        "Unngå RGB i trykk",
        "ICC-profiler tilgjengelig",
      ],
    },
    {
      title: "Oppløsning",
      items: [
        "300 dpi for trykksaker",
        "150 dpi for storformat",
        "Vektorgrafikk foretrukket",
        "Ingen oppskalering",
      ],
    },
    {
      title: "Beskjæring",
      items: [
        "3mm bleed på alle sider",
        "5mm sikkerhetsmargin",
        "Skjæremerker inkludert",
        "Maler tilgjengelig",
      ],
    },
  ];

  return (
    <section id="leveranse" className="py-24 md:py-32 bg-[#f2f2f0]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-yellow font-display text-sm tracking-widest uppercase font-bold">
            Leveransespesifikasjoner
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight mt-3 text-black">
            Lever filer riktig —
            <br />
            få perfekt resultat
          </h2>
          <p className="text-grey text-lg leading-relaxed mt-5">
            For best mulig resultat ber vi om at filer leveres etter våre
            spesifikasjoner. Vi tilbyr gratis filsjekk ved usikkerhet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <div key={i} className="bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-yellow" />
                <h3 className="font-display font-bold text-lg tracking-tight">
                  {spec.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {spec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="text-yellow mt-1 shrink-0">
                      <CheckCircle size={12} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-grey-dark leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Clock size={24} className="text-yellow shrink-0" />
            <div>
              <h3 className="font-display font-bold text-white text-lg">
                Leveringstider
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Standard 5 virkedager · Express 48 timer · Same-day for
                utvalgte produkter
              </p>
            </div>
          </div>
          <a
            href="#kontakt"
            className="bg-yellow text-black font-display font-bold text-sm px-6 py-3 hover:bg-yellow/90 transition-colors shrink-0 flex items-center gap-2"
          >
            Forespør leveringstid
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CLIENTS ─────────────────────────── */

const CLIENTS = [
  "Equinor",
  "DNB",
  "Telenor",
  "Jotun",
  "NHO",
  "Posten",
  "Hydro",
  "Schibsted",
  "OBOS",
  "Statkraft",
];

function Clients() {
  return (
    <section className="py-20 bg-white border-b border-grey-light">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <p className="text-grey text-sm tracking-widest uppercase font-display shrink-0">
            Kunder som stoler på oss
          </p>
          <div className="flex-1 h-px bg-grey-light hidden md:block" />
          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="font-display font-bold text-grey/40 text-lg tracking-tight hover:text-black transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT / CTA ─────────────────────────── */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <span className="text-yellow font-display text-sm tracking-widest uppercase font-bold">
              Kontakt
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight mt-3 text-black">
              La oss snakke om
              <br />
              ditt neste prosjekt
            </h2>
            <p className="text-grey text-lg leading-relaxed mt-6">
              Beskriv prosjektet ditt, så sender vi et uforpliktende tilbud
              innen 24 timer. Ingen oppdrag er for stort eller lite.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+4722123456"
                className="flex items-center gap-4 text-grey-dark hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 bg-grey-light flex items-center justify-center group-hover:bg-yellow transition-colors">
                  <Phone size={16} />
                </div>
                <span>+47 22 12 34 56</span>
              </a>
              <a
                href="mailto:post@grafisktrykk.no"
                className="flex items-center gap-4 text-grey-dark hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 bg-grey-light flex items-center justify-center group-hover:bg-yellow transition-colors">
                  <Mail size={16} />
                </div>
                <span>post@grafisktrykk.no</span>
              </a>
              <div className="flex items-center gap-4 text-grey-dark">
                <div className="w-10 h-10 bg-grey-light flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span>Schweigaards gate 34, 0191 Oslo</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="bg-black p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 bg-yellow flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-black" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl">
                  Takk for henvendelsen
                </h3>
                <p className="text-white/50 mt-3 max-w-sm">
                  Vi tar kontakt innen 24 timer med et skreddersydd tilbud.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-grey mb-2 font-display">
                      Navn
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ditt navn"
                      className="w-full bg-transparent border border-grey-light px-4 py-3.5 text-black placeholder:text-grey/40 focus:border-yellow focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-grey mb-2 font-display">
                      Bedrift
                    </label>
                    <input
                      type="text"
                      placeholder="Bedriftsnavn"
                      className="w-full bg-transparent border border-grey-light px-4 py-3.5 text-black placeholder:text-grey/40 focus:border-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-grey mb-2 font-display">
                      E-post
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="din@epost.no"
                      className="w-full bg-transparent border border-grey-light px-4 py-3.5 text-black placeholder:text-grey/40 focus:border-yellow focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-grey mb-2 font-display">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+47"
                      className="w-full bg-transparent border border-grey-light px-4 py-3.5 text-black placeholder:text-grey/40 focus:border-yellow focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-grey mb-2 font-display">
                    Tjeneste
                  </label>
                  <select
                    className="w-full bg-transparent border border-grey-light px-4 py-3.5 text-grey-dark focus:border-yellow focus:outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Velg tjeneste
                    </option>
                    <option>Offsettrykk</option>
                    <option>Digitaltrykk</option>
                    <option>Storformat</option>
                    <option>Emballasje</option>
                    <option>Bøker & kataloger</option>
                    <option>Visittkort</option>
                    <option>Plakater & flyers</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-grey mb-2 font-display">
                    Prosjektbeskrivelse
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Beskriv prosjektet, opplag, format, tidsramme..."
                    className="w-full bg-transparent border border-grey-light px-4 py-3.5 text-black placeholder:text-grey/40 focus:border-yellow focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow text-black font-display font-bold px-8 py-4 hover:bg-yellow/90 transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Send size={16} />
                  Send forespørsel
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-yellow flex items-center justify-center">
                <span className="font-display font-bold text-black text-sm leading-none">
                  GT
                </span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Grafisk Trykk AS
              </span>
            </div>
            <p className="text-white/40 leading-relaxed max-w-xs">
              Oslos fullservice-trykkeri siden 2001. Fra idé til ferdig trykk —
              med presisjon og lidenskap for faget.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Tjenester
            </h4>
            <ul className="space-y-2.5">
              {["Offsettrykk", "Digitaltrykk", "Storformat", "Emballasje"].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#tjenester"
                      className="text-white/40 text-sm hover:text-yellow transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Selskap
            </h4>
            <ul className="space-y-2.5">
              {["Om oss", "Arbeider", "Karriere", "Personvern"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-yellow transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>+47 22 12 34 56</li>
              <li>post@grafisktrykk.no</li>
              <li>
                Schweigaards gate 34
                <br />
                0191 Oslo
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/20 text-sm">
            © 2001–2026 Grafisk Trykk AS · Org.nr 912 345 678
          </p>
          <p className="text-white/20 text-sm">
            Man–fre 07:30–16:00 · Schweigaards gate 34, Oslo
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Production />
        <FileSpecs />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
