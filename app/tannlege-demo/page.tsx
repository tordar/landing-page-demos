"use client";

import { useState, useEffect, type CSSProperties, type ReactNode } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    title: "Tannbleking",
    desc: "Profesjonell bleking som gir deg et naturlig, hvitere smil — trygt og skånsomt utført av våre spesialister.",
    detail:
      "Tre behandlingstyper: klinikkbleking (ett besøk), hjemmebleking med tilpassede skinner, eller kombinasjon. Alle produkter er CE-godkjente og skånsomme mot emaljen.",
  },
  {
    title: "Implantater",
    desc: "Varige løsninger for tapte tenner. Vi bruker førsteklasses materialer og avansert 3D-planlegging.",
    detail:
      "Digital 3D-planlegging med CBCT-skanner. Straumann og Nobel Biocare implantater med livstidsgaranti. Behandlingstid typisk 3–6 måneder inkl. tilheling.",
  },
  {
    title: "Kjeveortopedi",
    desc: "Usynlig tannregulering og tradisjonelle bøyler for barn og voksne — skreddersydd behandlingsplan.",
    detail:
      "Invisalign® usynlig regulering, selvligerende bøyler, og lingual teknikk. Gratis førstekonsultasjon med digital behandlingssimulering.",
  },
  {
    title: "Rotfylling",
    desc: "Smertefri rotbehandling med moderne teknikker. Vi redder tenner som ellers måtte trekkes.",
    detail:
      "Mikroskopassistert endodonti med roterende NiTi-instrumenter. Behandling i ett eller to besøk avhengig av kompleksitet.",
  },
  {
    title: "Forebyggende tannhelse",
    desc: "Regelmessig undersøkelse, rens og veiledning — grunnlaget for et friskt smil hele livet.",
    detail:
      "Årlig undersøkelse med digital røntgen, profesjonell tannrens, fluorbehandling og personlig veiledning i hjemmestell.",
  },
  {
    title: "Akuttbehandling",
    desc: "Akutt tannpine? Vi prioriterer hastetilfeller og tilbyr rask hjelp når du trenger det mest.",
    detail:
      "Daglige hastetimer reservert for smerte, avslåtte tenner eller tapte fyllinger. Ring før 10:00 for time samme dag.",
  },
];

const team = [
  {
    name: "Dr. Ingrid Fjellstad",
    role: "Klinikksjef & tannlege",
    specialty: "Protetikk og implantologi",
    years: "18 års erfaring",
    initials: "IF",
  },
  {
    name: "Dr. Erik Solvang",
    role: "Tannlege",
    specialty: "Kjeveortopedi",
    years: "12 års erfaring",
    initials: "ES",
  },
  {
    name: "Dr. Amina Berge",
    role: "Tannlege",
    specialty: "Endodonti og barnetannpleie",
    years: "9 års erfaring",
    initials: "AB",
  },
  {
    name: "Lise Haugen",
    role: "Tannpleier",
    specialty: "Forebyggende behandling",
    years: "14 års erfaring",
    initials: "LH",
  },
];

const testimonials = [
  {
    name: "Marte K.",
    text: "Jeg har alltid vært redd for tannlegen, men hos Fjordtann føler jeg meg trygg. Dr. Fjellstad tok seg tid til å forklare alt, og jeg kjente ingenting under behandlingen.",
    rating: 5,
    treatment: "Rotfylling",
    age: "34 år",
  },
  {
    name: "Thomas L.",
    text: "Fantastisk opplevelse fra start til slutt. Klinikken er moderne og rolig, og teamet er utrolig profesjonelle. Mine nye implantater ser helt naturlige ut.",
    rating: 5,
    treatment: "Implantater",
    age: "52 år",
  },
  {
    name: "Silje R.",
    text: "Sønnen min gledet seg faktisk til tannlegen etter første besøk. Det sier alt om stemningen og folkene her. Varmt anbefalt for hele familien.",
    rating: 5,
    treatment: "Barnetannpleie",
    age: "41 år",
  },
];

const hours = [
  { day: "Mandag", time: "08:00–16:00" },
  { day: "Tirsdag", time: "08:00–16:00" },
  { day: "Onsdag", time: "08:00–16:00" },
  { day: "Torsdag", time: "08:00–16:00" },
  { day: "Fredag", time: "08:00–14:00" },
  { day: "Lørdag", time: "Stengt" },
  { day: "Søndag", time: "Stengt" },
];

const prices = [
  { label: "Undersøkelse inkl. røntgen", price: "fra 990", note: "Standard førstegangsundersøkelse" },
  { label: "Tannrens", price: "fra 850", note: "Profesjonell rens hos tannpleier" },
  { label: "Tannbleking", price: "fra 3 500", note: "Klinikk- eller hjemmebleking" },
  { label: "Fylling, komposit", price: "fra 1 200", note: "Avhenger av omfang og plassering" },
  { label: "Rotfylling", price: "fra 4 800", note: "Delvis refusjon via Helfo" },
  { label: "Implantat (per tann)", price: "fra 18 000", note: "Inkl. krone og planlegging" },
  { label: "Kjeveortopedi", price: "fra 25 000", note: "Full behandling, Invisalign eller bøyle" },
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

const navLinks = [
  { label: "Tjenester", href: "#tjenester" },
  { label: "Om oss", href: "#om" },
  { label: "Teamet", href: "#team" },
  { label: "Priser", href: "#priser" },
  { label: "Kontakt", href: "#kontakt" },
];

type PhotoTone = "warm" | "cool" | "deep" | "sand" | "mono";

function PhotoPlaceholder({
  label,
  aspect = "4/5",
  tone = "warm",
  src,
  alt,
  showLabel = false,
  className = "",
  style = {},
}: {
  label: string;
  aspect?: string;
  tone?: PhotoTone;
  src?: string;
  alt?: string;
  showLabel?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const tones: Record<PhotoTone, { bg: string; stripe: string; text: string }> = {
    warm: { bg: "#e8e2d6", stripe: "rgba(90,75,55,0.08)", text: "#6b5c47" },
    cool: { bg: "#dde3e6", stripe: "rgba(40,55,70,0.10)", text: "#3d4a55" },
    deep: { bg: "#2a2f38", stripe: "rgba(255,255,255,0.05)", text: "rgba(255,255,255,0.6)" },
    sand: { bg: "#ecdfc8", stripe: "rgba(120,90,50,0.08)", text: "#7a5a38" },
    mono: { bg: "#eeeae4", stripe: "rgba(30,30,30,0.06)", text: "#5a5652" },
  };
  const t = tones[tone];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect === "auto" ? undefined : aspect,
        background: src
          ? t.bg
          : `repeating-linear-gradient(135deg, ${t.bg} 0 14px, ${t.stripe} 14px 15px)`,
        ...style,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}
      {showLabel || !src ? (
        <div className="absolute inset-0 flex items-end justify-start p-4 pointer-events-none">
          <span
            className="font-mono uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.08em",
              color: t.text,
              background: "rgba(255,255,255,0.55)",
              padding: "4px 8px",
              borderRadius: 2,
              backdropFilter: "blur(4px)",
            }}
          >
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const serviceImages: Record<string, string> = {
  Tannbleking: UNSPLASH("1588776814546-1ffcf47267a5"),
  Implantater: UNSPLASH("1609840114035-3c981b782dfe"),
  Kjeveortopedi: UNSPLASH("1598256989800-fe5f95da9787"),
  Rotfylling: UNSPLASH("1606265752439-1f18756aa5fc"),
  "Forebyggende tannhelse": UNSPLASH("1571772996211-2f02c9727629"),
  Akuttbehandling: UNSPLASH("1606811971618-4486d14f3f99"),
};

const teamImages: Record<string, string> = {
  IF: UNSPLASH("1559839734-2b71ea197ec2", 600),
  ES: UNSPLASH("1612349317150-e413f6a5b16d", 600),
  AB: UNSPLASH("1580489944761-15a19d654956", 600),
  LH: UNSPLASH("1551836022-d5d88e9218df", 600),
};

const heroImage = UNSPLASH("1629909613654-28e377c37b09", 1800);
const aboutImage = UNSPLASH("1606811841689-23dfddce3e95");
const mapImage = UNSPLASH("1601439678777-b2b3c56fa627", 1400);

function Eyebrow({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono uppercase text-ink-mute ${
        centered ? "justify-center" : ""
      }`}
      style={{ fontSize: 11, letterSpacing: "0.14em", marginBottom: centered ? 16 : 20 }}
    >
      <span className="inline-block bg-accent" style={{ width: 24, height: 1 }} />
      <span>{children}</span>
      {centered ? <span className="inline-block bg-accent" style={{ width: 24, height: 1 }} /> : null}
    </div>
  );
}

function Logo({ color = "ink" }: { color?: "ink" | "paper" }) {
  const stroke = color === "paper" ? "#f7f4ee" : "#1a1916";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <circle cx="14" cy="14" r="13" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="14" cy="14" r="6" fill="#2d6b6b" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openService, setOpenService] = useState<number>(-1);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-paper text-ink min-h-dvh" style={{ fontSize: 15, lineHeight: 1.55 }}>
      {/* NAV */}
      <header
        className="sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300"
        style={{
          background: scrolled ? "rgba(247,244,238,0.92)" : "#f7f4ee",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: `1px solid ${scrolled ? "#d9d2c2" : "transparent"}`,
        }}
      >
        <div
          className="mx-auto grid items-center"
          style={{
            maxWidth: 1320,
            padding: "18px 40px",
            gridTemplateColumns: "auto 1fr auto",
            gap: 48,
          }}
        >
          <a href="#" className="flex items-center gap-3 text-ink no-underline">
            <Logo />
            <div className="flex flex-col leading-none">
              <span className="font-semibold" style={{ fontSize: 17, letterSpacing: "-0.01em" }}>
                Fjordtann
              </span>
              <span
                className="font-mono uppercase text-ink-mute"
                style={{ fontSize: 10, letterSpacing: "0.1em", marginTop: 4 }}
              >
                Tannklinikk · Bergen
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex justify-center" style={{ gap: 36 }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-medium text-ink no-underline hover:text-accent transition-colors"
                style={{ fontSize: 14 }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center" style={{ gap: 20 }}>
            <a
              href="tel:+4755123456"
              className="flex items-center gap-2 text-ink-soft no-underline hover:text-ink transition-colors"
              style={{ fontSize: 13 }}
            >
              <Phone className="w-3.5 h-3.5" />
              55 12 34 56
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-ink text-paper font-medium no-underline"
              style={{ padding: "11px 20px", fontSize: 13, borderRadius: 999 }}
            >
              Bestill time <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden justify-self-end text-ink p-2 -mr-2"
            aria-label="Meny"
            style={{ background: "transparent", border: 0 }}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden border-t"
            style={{ background: "rgba(247,244,238,0.98)", borderColor: "#d9d2c2", padding: "8px 40px 24px" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-medium text-ink no-underline border-b last:border-0"
                style={{ fontSize: 15, borderColor: "#d9d2c2" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-ink text-paper font-medium no-underline"
              style={{ padding: "13px 20px", fontSize: 14, borderRadius: 999 }}
            >
              Bestill time <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </header>

      {/* HERO — stacked */}
      <section style={{ padding: "80px 40px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div
              className="inline-flex items-center gap-2.5 font-mono uppercase text-ink-mute bg-panel"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                marginBottom: 32,
                padding: "8px 16px",
                border: "1px solid #d9d2c2",
                borderRadius: 999,
              }}
            >
              <span
                className="inline-block"
                style={{ width: 7, height: 7, borderRadius: 999, background: "#4ea069" }}
              />
              Tar imot nye pasienter
            </div>
            <h1
              className="font-medium text-ink"
              style={{
                fontSize: "clamp(56px, 9vw, 128px)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                margin: 0,
              }}
            >
              Trygg tannbehandling,
              <br />
              <span
                className="text-accent font-serif italic"
                style={{ fontWeight: 400 }}
              >
                i ditt tempo.
              </span>
            </h1>
            <p
              className="text-ink-soft mx-auto"
              style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 580, marginTop: 32 }}
            >
              Hos Fjordtann møter du et varmt og erfarent team som setter din trygghet først. Moderne teknologi. Rolig atmosfære. God tid til hver pasient.
            </p>
            <div
              className="flex justify-center flex-wrap"
              style={{ marginTop: 40, gap: 14 }}
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2.5 bg-ink text-paper font-medium no-underline"
                style={{ padding: "16px 28px", fontSize: 14, borderRadius: 999 }}
              >
                Bestill time <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#tjenester"
                className="inline-flex items-center font-medium text-ink no-underline"
                style={{
                  padding: "16px 28px",
                  fontSize: 14,
                  border: "1px solid #1a1916",
                  borderRadius: 999,
                }}
              >
                Se våre tjenester
              </a>
            </div>
          </div>

          <PhotoPlaceholder
            label="klinikk · hero · dagslys, bred vinkel"
            aspect="21/9"
            tone="warm"
            src={heroImage}
            alt="Fjordtann tannklinikk — behandlingsrom med dagslys"
          />
        </div>
      </section>

      {/* TRUST BAND */}
      <section
        className="bg-panel"
        style={{ borderTop: "1px solid #d9d2c2", borderBottom: "1px solid #d9d2c2" }}
      >
        <div
          className="mx-auto grid"
          style={{
            maxWidth: 1320,
            padding: "28px 40px",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
          }}
        >
          {[
            { v: "14 år", l: "Klinikk i Bergen" },
            { v: "8 500+", l: "Fornøyde pasienter" },
            { v: "4.9 / 5", l: "Google-vurdering" },
            { v: "45 min", l: "Førstekonsultasjon" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="flex items-baseline"
              style={{
                gap: 16,
                paddingLeft: i > 0 ? 40 : 0,
                borderLeft: i > 0 ? "1px solid #d9d2c2" : 0,
              }}
            >
              <div
                className="font-medium text-ink"
                style={{ fontSize: 28, letterSpacing: "-0.02em" }}
              >
                {s.v}
              </div>
              <div className="text-ink-mute" style={{ fontSize: 13, lineHeight: 1.3 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="tjenester" style={{ padding: "120px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div
            className="grid items-end"
            style={{ gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}
          >
            <div>
              <Eyebrow>Våre tjenester</Eyebrow>
              <h2
                className="font-medium"
                style={{
                  fontSize: 48,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Komplett tannbehandling under ett tak
              </h2>
            </div>
            <p
              className="text-ink-soft"
              style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 540, margin: 0, paddingBottom: 8 }}
            >
              Fra forebyggende kontroller til avanserte implantater — seks spesialområder utført av vårt faste team. Klikk på en tjeneste for mer informasjon.
            </p>
          </div>

          <div style={{ borderTop: "1px solid #1a1916" }}>
            {services.map((s, i) => {
              const open = openService === i;
              return (
                <div key={s.title} style={{ borderBottom: "1px solid #d9d2c2" }}>
                  <button
                    onClick={() => setOpenService(open ? -1 : i)}
                    className="w-full text-left text-ink grid items-center cursor-pointer"
                    style={{
                      background: "transparent",
                      border: 0,
                      padding: "28px 0",
                      gridTemplateColumns: "48px 280px 1fr 44px",
                      gap: 32,
                    }}
                  >
                    <span
                      className="font-mono text-ink-mute"
                      style={{ fontSize: 12, letterSpacing: "0.06em" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="font-medium"
                      style={{ fontSize: 22, letterSpacing: "-0.015em" }}
                    >
                      {s.title}
                    </span>
                    <span className="text-ink-soft" style={{ fontSize: 15, lineHeight: 1.55 }}>
                      {s.desc}
                    </span>
                    <span
                      className="inline-flex items-center justify-center justify-self-end transition-all"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 999,
                        border: "1px solid #1a1916",
                        background: open ? "#1a1916" : "transparent",
                        color: open ? "#f7f4ee" : "#1a1916",
                      }}
                    >
                      {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  <div
                    className="grid"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                      transition: "grid-template-rows .4s cubic-bezier(.2,.8,.2,1)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div
                        className="grid items-start"
                        style={{
                          gridTemplateColumns: "48px 280px 1fr 44px",
                          gap: 32,
                          paddingBottom: 40,
                        }}
                      >
                        <div />
                        <PhotoPlaceholder
                          label={`photo · ${s.title.toLowerCase()}`}
                          aspect="4/5"
                          tone="warm"
                          src={serviceImages[s.title]}
                          alt={s.title}
                        />
                        <div style={{ paddingTop: 8, maxWidth: 620 }}>
                          <p
                            className="text-ink"
                            style={{ fontSize: 16, lineHeight: 1.65, margin: 0, marginBottom: 24 }}
                          >
                            {s.detail}
                          </p>
                          <a
                            href="#kontakt"
                            className="inline-flex items-center gap-2 font-medium text-accent no-underline"
                            style={{
                              fontSize: 13,
                              borderBottom: "1px solid #2d6b6b",
                              paddingBottom: 3,
                            }}
                          >
                            Bestill konsultasjon <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="om" className="bg-band" style={{ padding: "120px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div
            className="grid items-start"
            style={{ gridTemplateColumns: "5fr 7fr", gap: 80 }}
          >
            <div>
              <PhotoPlaceholder
                label="klinikk · behandlingsrom · dagslys"
                aspect="4/5"
                tone="warm"
                src={aboutImage}
                alt="Behandlingsrom med dagslys"
              />
              <div
                className="flex items-center bg-panel"
                style={{
                  marginTop: 20,
                  padding: "18px 22px",
                  border: "1px solid #d9d2c2",
                  gap: 14,
                }}
              >
                <div
                  className="inline-flex items-center justify-center bg-accent-soft text-accent"
                  style={{ width: 38, height: 38, borderRadius: 999 }}
                >
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium" style={{ fontSize: 14 }}>
                    Autorisert av Helsedirektoratet
                  </div>
                  <div
                    className="font-mono text-ink-mute"
                    style={{ fontSize: 10, letterSpacing: "0.08em", marginTop: 2 }}
                  >
                    ORG · 998 123 456
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow>Om klinikken</Eyebrow>
              <h2
                className="font-medium"
                style={{
                  fontSize: 48,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  marginBottom: 28,
                }}
              >
                Moderne tannbehandling med tid til det viktigste — deg.
              </h2>
              <p
                className="text-ink-soft"
                style={{ fontSize: 17, lineHeight: 1.6, margin: 0, marginBottom: 40 }}
              >
                Fjordtann ble grunnlagt i 2011 med én enkel tanke: tannlegebesøket skal ikke være noe du gruer deg til. Vi kombinerer moderne teknologi med rolig atmosfære og god tid til hver pasient.
              </p>

              <div style={{ borderTop: "1px solid #d9d2c2" }}>
                {[
                  {
                    t: "Avansert teknologi",
                    d: "Digital røntgen med 80% lavere stråling og 3D-skanner for presise implantater.",
                  },
                  {
                    t: "Tannlegeskrekk tas på alvor",
                    d: "Pauser, rolig tempo, tydelig informasjon. Sedasjon tilgjengelig ved behov.",
                  },
                  {
                    t: "Transparente priser",
                    d: "Skriftlig kostnadsoverslag før behandling. Vi hjelper deg med Helfo-refusjon.",
                  },
                  {
                    t: "Tid til hver pasient",
                    d: "Førstekonsultasjon på 45 minutter — vi lytter før vi behandler.",
                  },
                ].map((p) => (
                  <div
                    key={p.t}
                    className="grid items-baseline"
                    style={{
                      padding: "22px 0",
                      borderBottom: "1px solid #d9d2c2",
                      gridTemplateColumns: "24px 1fr",
                      gap: 18,
                    }}
                  >
                    <Check className="w-4 h-4 text-accent" />
                    <div>
                      <h3
                        className="font-medium"
                        style={{ fontSize: 16, margin: 0, marginBottom: 4 }}
                      >
                        {p.t}
                      </h3>
                      <p
                        className="text-ink-soft"
                        style={{ fontSize: 14, margin: 0, lineHeight: 1.55 }}
                      >
                        {p.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={{ padding: "120px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 640, marginBottom: 64 }}>
            <Eyebrow centered>Møt teamet</Eyebrow>
            <h2
              className="font-medium"
              style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.025em", margin: 0 }}
            >
              Fire erfarne fagfolk
            </h2>
            <p
              className="text-ink-soft"
              style={{ fontSize: 17, lineHeight: 1.6, margin: "20px 0 0" }}
            >
              Samlet erfaring på over 50 år, fordelt på fire spesialområder. Du får alltid andrenes øye når det trengs.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {team.map((m) => (
              <div key={m.name}>
                <PhotoPlaceholder
                  label={`portrett · ${m.initials}`}
                  aspect="3/4"
                  tone="warm"
                  src={teamImages[m.initials]}
                  alt={m.name}
                />
                <div style={{ paddingTop: 20 }}>
                  <h3
                    className="font-medium"
                    style={{ fontSize: 19, margin: 0, letterSpacing: "-0.01em" }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="text-accent font-medium"
                    style={{ fontSize: 14, margin: "4px 0 0" }}
                  >
                    {m.role}
                  </p>
                  <div
                    style={{
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: "1px solid #d9d2c2",
                    }}
                  >
                    <p
                      className="text-ink-soft"
                      style={{ fontSize: 13, margin: 0, lineHeight: 1.5 }}
                    >
                      {m.specialty}
                    </p>
                    <p
                      className="font-mono text-ink-mute"
                      style={{ fontSize: 11, margin: "6px 0 0", letterSpacing: "0.05em" }}
                    >
                      {m.years}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-paper" style={{ padding: "120px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div className="text-center" style={{ marginBottom: 64 }}>
            <div
              className="inline-flex items-center gap-3 font-mono uppercase"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "rgba(247,244,238,0.5)",
                marginBottom: 16,
              }}
            >
              <span className="inline-block bg-accent" style={{ width: 24, height: 1 }} />
              <span>Pasientopplevelser</span>
              <span className="inline-block bg-accent" style={{ width: 24, height: 1 }} />
            </div>
            <h2
              className="font-medium"
              style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.025em", margin: 0 }}
            >
              Det pasientene våre sier
            </h2>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col"
                style={{
                  margin: 0,
                  padding: 36,
                  background: "rgba(247,244,238,0.04)",
                  border: "1px solid rgba(247,244,238,0.1)",
                }}
              >
                <div className="flex" style={{ gap: 2, marginBottom: 20 }}>
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star
                      key={k}
                      className="text-accent"
                      style={{ width: 13, height: 13, fill: "currentColor", stroke: "none" }}
                    />
                  ))}
                </div>
                <blockquote
                  className="flex-1"
                  style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: "#f7f4ee" }}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption
                  style={{
                    marginTop: 28,
                    paddingTop: 20,
                    borderTop: "1px solid rgba(247,244,238,0.1)",
                  }}
                >
                  <div className="font-medium" style={{ fontSize: 14 }}>
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(247,244,238,0.55)",
                      marginTop: 2,
                    }}
                  >
                    {t.treatment} · {t.age}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS + EMERGENCY */}
      <section style={{ padding: "120px 40px" }}>
        <div
          className="mx-auto grid items-start"
          style={{ maxWidth: 1320, gridTemplateColumns: "1fr 1fr", gap: 64 }}
        >
          <div>
            <Eyebrow>Åpningstider</Eyebrow>
            <h2
              className="font-medium"
              style={{
                fontSize: 40,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: 0,
                marginBottom: 32,
              }}
            >
              Når kan du besøke oss?
            </h2>
            <div style={{ borderTop: "1px solid #1a1916" }}>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between"
                  style={{ padding: "16px 0", borderBottom: "1px solid #d9d2c2" }}
                >
                  <span style={{ fontSize: 16 }}>{h.day}</span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 13,
                      color: h.time === "Stengt" ? "#7a7468" : "#1a1916",
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-ink text-paper relative overflow-hidden"
            style={{ padding: 40 }}
          >
            <div
              className="inline-flex items-center font-mono uppercase text-accent"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <span
                className="inline-block bg-accent"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  animation: "tannlege-pulse 2s infinite",
                }}
              />
              Akutt tilgjengelig
            </div>
            <h3
              className="font-medium"
              style={{
                fontSize: 32,
                margin: 0,
                marginBottom: 16,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Akutt tannpine?
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(247,244,238,0.75)",
                margin: 0,
                marginBottom: 32,
              }}
            >
              Ring oss før 10:00 i kontortiden, så finner vi tid samme dag. Utenfor åpningstid: Bergen legevakt, 116 117.
            </p>
            <a
              href="tel:+4755123456"
              className="inline-flex items-center bg-paper text-ink font-medium no-underline"
              style={{ gap: 12, padding: "14px 22px", fontSize: 14, borderRadius: 999 }}
            >
              <Phone className="w-3.5 h-3.5" /> Ring 55 12 34 56
            </a>
          </div>
        </div>
      </section>

      {/* PRICES + FAQ */}
      <section id="priser" className="bg-band" style={{ padding: "120px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div
            className="grid"
            style={{ gridTemplateColumns: "1fr 1fr", gap: 64 }}
          >
            <div>
              <Eyebrow>Priser &amp; refusjon</Eyebrow>
              <h2
                className="font-medium"
                style={{
                  fontSize: 40,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  marginBottom: 20,
                }}
              >
                Tydelige priser, ingen overraskelser
              </h2>
              <p
                className="text-ink-soft"
                style={{ fontSize: 16, lineHeight: 1.6, margin: 0, marginBottom: 40 }}
              >
                Du får alltid et skriftlig prisoverslag før behandlingen starter. Flere behandlinger dekkes delvis av Helfo — vi hjelper deg med søknaden.
              </p>

              <div style={{ borderTop: "1px solid #1a1916" }}>
                {prices.map((p) => (
                  <div
                    key={p.label}
                    className="grid items-baseline"
                    style={{
                      gridTemplateColumns: "1fr auto",
                      padding: "18px 0",
                      borderBottom: "1px solid #d9d2c2",
                      gap: 24,
                    }}
                  >
                    <div>
                      <div className="font-medium" style={{ fontSize: 15 }}>
                        {p.label}
                      </div>
                      <div className="text-ink-mute" style={{ fontSize: 13, marginTop: 3 }}>
                        {p.note}
                      </div>
                    </div>
                    <div
                      className="font-mono whitespace-nowrap"
                      style={{ fontSize: 14 }}
                    >
                      {p.price} kr
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="text-ink-mute"
                style={{ fontSize: 12, marginTop: 16, lineHeight: 1.5 }}
              >
                Veiledende priser. Endelig pris avhenger av behandlingens omfang.
              </p>
            </div>

            <div>
              <Eyebrow>Vanlige spørsmål</Eyebrow>
              <h2
                className="font-medium"
                style={{
                  fontSize: 40,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  marginBottom: 40,
                }}
              >
                Har du spørsmål?
              </h2>
              <div style={{ borderTop: "1px solid #1a1916" }}>
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={i} style={{ borderBottom: "1px solid #d9d2c2" }}>
                      <button
                        onClick={() => setOpenFaq(open ? -1 : i)}
                        className="w-full text-left text-ink flex justify-between cursor-pointer"
                        style={{
                          background: "transparent",
                          border: 0,
                          padding: "18px 0",
                          gap: 16,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          className="font-medium"
                          style={{ fontSize: 15, lineHeight: 1.4 }}
                        >
                          {f.q}
                        </span>
                        <span
                          className="inline-flex items-center justify-center flex-shrink-0 transition-all"
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 999,
                            border: "1px solid #1a1916",
                            background: open ? "#1a1916" : "transparent",
                            color: open ? "#f7f4ee" : "#1a1916",
                            marginTop: 2,
                          }}
                        >
                          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        </span>
                      </button>
                      <div
                        className="grid"
                        style={{
                          gridTemplateRows: open ? "1fr" : "0fr",
                          transition: "grid-template-rows .4s cubic-bezier(.2,.8,.2,1)",
                        }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <p
                            className="text-ink-soft"
                            style={{
                              fontSize: 14,
                              lineHeight: 1.65,
                              margin: 0,
                              paddingBottom: 18,
                              maxWidth: 460,
                            }}
                          >
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" style={{ padding: "120px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 640, marginBottom: 64 }}>
            <Eyebrow centered>Kontakt oss</Eyebrow>
            <h2
              className="font-medium"
              style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.025em", margin: 0 }}
            >
              Bestill time eller ta kontakt
            </h2>
            <p
              className="text-ink-soft"
              style={{ fontSize: 17, lineHeight: 1.6, margin: "20px 0 0" }}
            >
              Bestill online, ring oss, eller send en e-post — vi svarer innen én virkedag.
            </p>
          </div>

          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 40,
            }}
          >
            {[
              {
                icon: Phone,
                title: "Ring oss",
                v: "55 12 34 56",
                sub: "Man–Fre i kontortiden",
                h: "tel:+4755123456",
              },
              {
                icon: Mail,
                title: "Send e-post",
                v: "post@fjordtann.no",
                sub: "Svar innen 1 virkedag",
                h: "mailto:post@fjordtann.no",
              },
              {
                icon: MapPin,
                title: "Besøk oss",
                v: "Strandgaten 42",
                sub: "5013 Bergen · Heis",
                h: "#",
              },
            ].map((i) => {
              const Icon = i.icon;
              return (
                <a
                  key={i.title}
                  href={i.h}
                  className="bg-panel text-ink no-underline flex flex-col transition-[border-color] duration-200"
                  style={{
                    border: "1px solid #d9d2c2",
                    padding: 32,
                    gap: 16,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1a1916";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d9d2c2";
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center bg-accent-soft text-accent"
                    style={{ width: 44, height: 44, borderRadius: 999 }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-ink-mute" style={{ fontSize: 13, marginBottom: 4 }}>
                      {i.title}
                    </div>
                    <div
                      className="font-medium"
                      style={{ fontSize: 20, letterSpacing: "-0.01em" }}
                    >
                      {i.v}
                    </div>
                    <div className="text-ink-mute" style={{ fontSize: 13, marginTop: 6 }}>
                      {i.sub}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div
            className="bg-panel grid items-center"
            style={{
              border: "1px solid #d9d2c2",
              padding: 40,
              gridTemplateColumns: "1fr 1.3fr",
              gap: 48,
            }}
          >
            <div>
              <h3
                className="font-medium"
                style={{
                  fontSize: 24,
                  margin: 0,
                  marginBottom: 20,
                  letterSpacing: "-0.015em",
                }}
              >
                Finn oss i Bergen sentrum
              </h3>
              <div className="flex flex-col" style={{ gap: 14 }}>
                <div className="flex items-start" style={{ gap: 12 }}>
                  <MapPin className="w-4 h-4 text-accent" style={{ marginTop: 4 }} />
                  <div>
                    <div className="font-medium" style={{ fontSize: 15 }}>
                      Fjordtann Tannklinikk
                    </div>
                    <div
                      className="text-ink-soft"
                      style={{ fontSize: 14, lineHeight: 1.55 }}
                    >
                      Strandgaten 42, 3. etasje
                      <br />
                      5013 Bergen
                    </div>
                  </div>
                </div>
                <div className="flex items-start" style={{ gap: 12 }}>
                  <Clock className="w-4 h-4 text-accent" style={{ marginTop: 4 }} />
                  <div
                    className="text-ink-soft"
                    style={{ fontSize: 14, lineHeight: 1.55 }}
                  >
                    Man–Tor 08:00–16:00
                    <br />
                    Fre 08:00–14:00
                  </div>
                </div>
              </div>
              <p
                className="text-ink-mute"
                style={{ fontSize: 13, marginTop: 20, lineHeight: 1.55 }}
              >
                3 minutter fra Bystasjonen. Universell utforming med heis.
              </p>
            </div>
            <PhotoPlaceholder
              label="kart · bergen sentrum · strandgaten 42"
              aspect="16/10"
              tone="cool"
              src={mapImage}
              alt="Bergen sentrum"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper" style={{ padding: "72px 40px 32px" }}>
        <div className="mx-auto" style={{ maxWidth: 1320 }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 48,
              paddingBottom: 48,
              borderBottom: "1px solid rgba(247,244,238,0.15)",
            }}
          >
            <div>
              <div className="flex items-center" style={{ gap: 12, marginBottom: 20 }}>
                <Logo color="paper" />
                <span className="font-semibold" style={{ fontSize: 17 }}>
                  Fjordtann
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  margin: 0,
                  color: "rgba(247,244,238,0.7)",
                  maxWidth: 300,
                }}
              >
                Trygg tannbehandling i moderne omgivelser. Bergen, siden 2011.
              </p>
            </div>
            {[
              {
                h: "Tjenester",
                items: [
                  "Tannbleking",
                  "Implantater",
                  "Kjeveortopedi",
                  "Rotfylling",
                  "Akuttbehandling",
                ],
              },
              {
                h: "Klinikken",
                items: ["Om oss", "Teamet", "Priser", "Bestill time"],
              },
              {
                h: "Kontakt",
                items: [
                  "55 12 34 56",
                  "post@fjordtann.no",
                  "Strandgaten 42, Bergen",
                ],
              },
            ].map((col) => (
              <div key={col.h}>
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "rgba(247,244,238,0.5)",
                    marginBottom: 16,
                  }}
                >
                  {col.h}
                </div>
                {col.items.map((i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 13,
                      lineHeight: 2,
                      color: "rgba(247,244,238,0.8)",
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div
            className="flex justify-between font-mono uppercase"
            style={{
              paddingTop: 24,
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "rgba(247,244,238,0.5)",
            }}
          >
            <span>© 2026 Fjordtann Tannklinikk AS · ORG 998 123 456</span>
            <span>Personvern · Vilkår · Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
