"use client";

import {
  useState,
  useEffect,
  useRef,
  useMemo,
  type ElementType,
  type ReactNode,
} from "react";

// ── Data ──────────────────────────────────────────────────────────────

const NAV = [
  { id: "tjenester", label: "Tjenester" },
  { id: "prosess", label: "Prosess" },
  { id: "om", label: "Om" },
  { id: "resultater", label: "Resultater" },
  { id: "kontakt", label: "Kontakt" },
];

const SERVICES = [
  {
    num: "01",
    title: "Yrkesskade",
    sub: "Arbeidsulykker og yrkessykdommer",
    desc: "Ble du skadet på jobb eller utviklet sykdom av arbeidsmiljøet? Vi sikrer full erstatning fra arbeidsgiver og yrkesskadeforsikringen — og utfordrer avslag hele veien til Trygderetten.",
    bullets: [
      "Menerstatning og tap",
      "Godkjenning hos NAV",
      "Klage og Trygderetten",
      "Forsikringsoppgjør",
    ],
    meta: "Typisk varighet 6–18 mnd",
  },
  {
    num: "02",
    title: "Trafikkskade",
    sub: "Erstatning etter trafikkulykker",
    desc: "Personskade etter trafikkulykke gir deg rett på full erstatning. Vi fører saken mot forsikringsselskapet og sikrer at beregningene dekker alt — også fremtidige tap.",
    bullets: [
      "Bilansvarsloven",
      "Inntektstap",
      "Varig medisinsk invaliditet",
      "Forlik eller rettssak",
    ],
    meta: "Typisk varighet 9–24 mnd",
  },
  {
    num: "03",
    title: "Familierett",
    sub: "Skilsmisse, barnefordeling, arv",
    desc: "Juridisk bistand i de vanskeligste livssituasjonene — med fasthet der det trengs, og empati der det monner. Vi ivaretar både dine interesser og barnets beste.",
    bullets: [
      "Ekteskapsloven",
      "Foreldreansvar",
      "Samværsordning",
      "Skifte og arv",
    ],
    meta: "Ofte meglingsbasert",
  },
  {
    num: "04",
    title: "Arbeidsrett",
    sub: "Oppsigelse, diskriminering, tvister",
    desc: "Urettmessig oppsagt eller diskriminert på arbeidsplassen? Vi kjenner arbeidsmiljøloven godt, og har ført saker for både ansatte og mellomledere i privat og offentlig sektor.",
    bullets: ["Oppsigelsesvern", "Drøftingsmøter", "Sluttavtaler", "Varsling"],
    meta: "Ofte forhandlingsløsninger",
  },
  {
    num: "05",
    title: "NAV-saker",
    sub: "Klager, anker, Trygderetten",
    desc: "NAV-systemet er komplekst og regelverket krevende. Vi tar deg gjennom klageprosessen — fra første vedtak til Trygderetten — og bygger saken på det som faktisk teller.",
    bullets: [
      "Uføretrygd",
      "Arbeidsavklaringspenger",
      "Dagpenger",
      "Klageordning",
    ],
    meta: "Fri rettshjelp ofte aktuelt",
  },
  {
    num: "06",
    title: "Forsikringssaker",
    sub: "Tvister med forsikringsselskaper",
    desc: "Selskapet avviser, underbetaler eller trenerer? Vi kjenner avtalevilkårene, bevisbyrden og forhandlingsteknikken — og bringer saken inn for Finansklagenemnda når det trengs.",
    bullets: [
      "Personforsikring",
      "Innbo og eiendom",
      "Reise og ulykke",
      "Finansklagenemnda",
    ],
    meta: "No cure, no pay ofte mulig",
  },
];

const RESULTS = [
  {
    cat: "Yrkesskade · 2024",
    amount: "2,8 MNOK",
    desc: "Full erstatning etter syv års tvist med forsikringsselskapet om varig medisinsk invaliditet.",
    case: "Sak nr. 24-0142",
    venue: "Oslo tingrett",
  },
  {
    cat: "Trafikkskade · 2023",
    amount: "4,1 MNOK",
    desc: "Forlik tre uker før hovedforhandling etter motpartens førstetilbud på 900 000 kroner.",
    case: "Sak nr. 23-0881",
    venue: "Borgarting",
  },
  {
    cat: "NAV-sak · 2024",
    amount: "Medhold",
    desc: "Omgjøring i Trygderetten — uføretrygd innvilget etter tre tidligere avslag over fire år.",
    case: "Sak nr. TR-24-1012",
    venue: "Trygderetten",
  },
];

const TESTIMONIALS = [
  {
    q: "Etter mange avslag fra NAV ga jeg opp håpet. Holm tok saken og vi vant i Trygderetten. Uten ham hadde jeg aldri fått uføretrygden jeg hadde krav på.",
    name: "Ingrid T.",
    loc: "Bærum",
    area: "NAV-sak",
  },
  {
    q: "Grundig, tilgjengelig og ærlig. Fikk hjelp med en komplisert yrkesskade — jeg visste til enhver tid hvor vi sto og hva neste steg var.",
    name: "Lars H.",
    loc: "Oslo",
    area: "Yrkesskade",
  },
  {
    q: "Rask respons og tydelig kommunikasjon gjennom hele prosessen. Har allerede anbefalt Holm til to kolleger.",
    name: "Mohammed A.",
    loc: "Oslo",
    area: "Arbeidsrett",
  },
  {
    q: "Bistod oss i en krevende skilsmissesak. Alltid tilgjengelig, og genuint opptatt av utfallet for familien — ikke bare juridisk, men menneskelig.",
    name: "Kari L.",
    loc: "Lørenskog",
    area: "Familierett",
  },
];

const PROCESS = [
  {
    n: "01",
    t: "Første samtale",
    d: "30 min, gratis. Vi vurderer om saken har grunnlag — og om det er vi som bør ta den.",
  },
  {
    n: "02",
    t: "Dokumentgjennomgang",
    d: "Vi går gjennom vedtak, journaler og korrespondanse. Du får en skriftlig vurdering.",
  },
  {
    n: "03",
    t: "Strategi og forhandling",
    d: "Klage, krav eller forliksforhandling. Du får klare alternativer, med kostnader og sannsynlighet.",
  },
  {
    n: "04",
    t: "Rettssak om nødvendig",
    d: "Vi fører saken i retten eller i Trygderetten. Du møter samme advokat hele veien.",
  },
];

// ── Hooks ─────────────────────────────────────────────────────────────

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const compute = () => {
      const anchor = window.scrollY + window.innerHeight * 0.25;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= anchor) current = id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20
      ) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids]);
  return active;
}

// ── Components ────────────────────────────────────────────────────────

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
};

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: "-5% 0px -5% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${delay ? `d${delay}` : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

function ArrowIcon({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      aria-hidden="true"
    >
      <path d="M3 7h8m-3-3 3 3-3 3" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV.map((n) => n.id));
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            <span className="logo-mark">Holm</span>
            <span className="logo-sub">Advokatkontor&nbsp;· Oslo</span>
          </a>
          <nav className="nav-links">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={active === n.id ? "active" : ""}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#kontakt" className="btn btn-primary nav-cta">
              Book konsultasjon
              <ArrowIcon />
            </a>
            <button
              className="hamb"
              onClick={() => setOpen((o) => !o)}
              aria-label="Meny"
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mmenu ${open ? "open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a
          href="#kontakt"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Book konsultasjon
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="ambient">H</div>
        <Reveal>
          <span className="availability">
            <span className="dot" />
            Tar imot nye saker — svar innen én virkedag
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display">
            Juridisk bistand
            <br />
            der det <em>virkelig</em>
            <br />
            betyr noe.
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="hero-sub">
            Holm Advokatkontor representerer privatpersoner i saker mot
            forsikringsselskaper, arbeidsgivere og NAV. Samme advokat fra første
            samtale til saken er avsluttet — og alltid en gratis, uforpliktende
            vurdering først.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Book gratis konsultasjon
              <ArrowIcon />
            </a>
            <a href="#tjenester" className="btn btn-ghost">
              Se tjenester
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="hero-meta">
            <div>
              <div className="k">Etablert</div>
              <div className="v num">2006</div>
            </div>
            <div>
              <div className="k">Saker ført</div>
              <div className="v num">
                1 000<small>+</small>
              </div>
            </div>
            <div>
              <div className="k">Vurdering</div>
              <div className="v num">
                5,0<small>/5 · 47</small>
              </div>
            </div>
            <div>
              <div className="k">Første møte</div>
              <div className="v">Gratis</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="trust">
      <div className="wrap trust-inner">
        <div className="trust-chip">Medlem · Advokatforeningen</div>
        <div className="trust-chip">Møterett · Høyesterett</div>
        <div className="trust-chip">Spesialisering · Personskade</div>
        <div className="trust-chip">Fri rettshjelp · Når tilgjengelig</div>
        <div className="trust-chip">Oslo sentrum · Stortingsgata 22</div>
      </div>
    </div>
  );
}

function Services() {
  const [idx, setIdx] = useState<number | null>(0);
  const s = SERVICES[idx ?? 0];
  return (
    <section id="tjenester" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="eyebrow">
              <span className="dash">—</span>Fagområder
            </span>
            <Reveal>
              <h2 className="h2">
                Seks områder,
                <br />
                <em>én advokat</em> hele veien.
              </h2>
            </Reveal>
          </div>
          <div className="right">
            Holm Advokatkontor er bevisst holdt lite. Det betyr at saken din
            behandles av advokaten — ikke en saksbehandler eller et system. Velg
            et område for å se hvordan vi jobber.
          </div>
        </div>

        <div className="services">
          <div className="svc-list">
            {SERVICES.map((sv, i) => {
              const open = idx === i;
              return (
                <div
                  key={sv.num}
                  className={`svc-row ${open ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="svc-item"
                    onClick={() => setIdx((prev) => (prev === i ? null : i))}
                    aria-expanded={open}
                    aria-controls={`svc-drawer-${sv.num}`}
                  >
                    <span className="num">{sv.num}</span>
                    <span className="title">{sv.title}</span>
                    <svg
                      className="chev"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      width={16}
                      height={16}
                      aria-hidden="true"
                    >
                      <path d="M3 7h8m-3-3 3 3-3 3" />
                    </svg>
                  </button>
                  <div
                    id={`svc-drawer-${sv.num}`}
                    className="svc-drawer"
                    role="region"
                    aria-hidden={!open}
                  >
                    <div className="drawer-inner">
                      <div className="psub">{sv.sub}</div>
                      <p className="pbody">{sv.desc}</p>
                      <ul>
                        {sv.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div className="drawer-foot">
                        <span className="pmeta">{sv.meta}</span>
                        <a href="#kontakt" className="cta">
                          Diskuter din sak →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="svc-panel" key={s.num}>
            <div className="pmeta">{s.meta}</div>
            <div className="ptitle">{s.title}</div>
            <div className="psub">{s.sub}</div>
            <p className="pbody">{s.desc}</p>
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a href="#kontakt" className="cta">
              Diskuter din sak →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="prosess" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="eyebrow">
              <span className="dash">—</span>Prosess
            </span>
            <Reveal>
              <h2 className="h2">
                Fra første samtale
                <br />
                til <em>avsluttet sak</em>.
              </h2>
            </Reveal>
          </div>
          <div className="right">
            Du får én advokat, et tydelig opplegg og skriftlig vurdering før
            beslutninger tas. Ingen overraskelser — verken i prosess eller i
            pris.
          </div>
        </div>
        <div className="process">
          {PROCESS.map((p) => (
            <Reveal key={p.n} as="div" className="step">
              <div className="tick" />
              <div className="n">{p.n}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="om" className="section">
      <div className="wrap">
        <div className="about">
          <Reveal className="portrait">
            <div className="grid" />
            <div className="tag">— Advokat</div>
            <div className="ph">[ portrettfoto · 4:5 ]</div>
            <div className="name">
              <div className="n">Erik Holm</div>
              <div className="t">Cand.jur · UiO 2006</div>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow">
              <span className="dash">—</span>Om advokaten
            </span>
            <Reveal>
              <h2 className="h2">
                Atten år med mennesker i
                <br />
                <em>krevende situasjoner.</em>
              </h2>
            </Reveal>
            <div className="bio">
              <p>
                Erik Holm har siden 2006 representert privatpersoner i saker mot
                forsikringsselskaper, arbeidsgivere og offentlige myndigheter.
                Han spesialiserte seg tidlig på personskadeerstatning og har
                ført over tusen saker — fra enkle forsikringsoppgjør til
                prinsipielle saker i Høyesterett.
              </p>
              <p>
                Kontoret er bevisst holdt lite for å sikre at hver klient får
                personlig og dedikert oppfølging. Erik møter alle klienter selv
                — fra første samtale til saken er avsluttet.
              </p>
            </div>
            <div className="creds">
              <div>
                <div className="k">Utdanning</div>
                <div className="v">Cand.jur. UiO · 2006</div>
              </div>
              <div>
                <div className="k">Medlem</div>
                <div className="v">Advokatforeningen</div>
              </div>
              <div>
                <div className="k">Spesialisering</div>
                <div className="v">Personskadeerstatning</div>
              </div>
              <div>
                <div className="k">Volum</div>
                <div className="v">1&nbsp;000+ saker ført</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="resultater" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="eyebrow">
              <span className="dash">—</span>Utvalgte resultater
            </span>
            <Reveal>
              <h2 className="h2">
                Utfall som <em>faktisk</em>
                <br />
                betyr noe for klienten.
              </h2>
            </Reveal>
          </div>
          <div className="right">
            Anonymisert utvalg fra de siste årene. Hver sak er individuell —
            tidligere resultater er ingen garanti, men gir et bilde av hva som
            er mulig når saken føres godt.
          </div>
        </div>
        <div className="results">
          {RESULTS.map((r) => (
            <Reveal key={r.case} as="div" className="result">
              <div className="cat">
                <span className="d" />
                {r.cat}
              </div>
              <div className="amount num">{r.amount}</div>
              <div className="desc">{r.desc}</div>
              <div className="r-footer">
                <span>{r.case}</span>
                <span>{r.venue}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="referanser" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="eyebrow">
              <span className="dash">—</span>Klienter
            </span>
            <Reveal>
              <h2 className="h2">
                Ord fra folk vi har
                <br />
                <em>fått gjennom det.</em>
              </h2>
            </Reveal>
          </div>
          <div className="right">
            47 vurderinger · snittscore 5,0. Sitatene er gjengitt med tillatelse;
            navn er forkortet av personvernhensyn.
          </div>
        </div>
        <div className="testimonials">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name} as="div" className="testi">
              <p className="q">{t.q}</p>
              <div className="who">
                <div>
                  <div className="name">{t.name}</div>
                  <div className="loc">{t.loc}</div>
                </div>
                <div className="case">— {t.area}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const CATS = [
    "Yrkesskade",
    "Trafikkskade",
    "Familierett",
    "Arbeidsrett",
    "NAV-saker",
    "Forsikringssaker",
    "Annet",
  ];
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    cat: "",
    msg: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Påkrevd";
    if (!/^\+?[\d\s]{6,}$/.test(data.phone)) e.phone = "Ugyldig";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Ugyldig";
    if (!data.cat) e.cat = "Velg ett";
    if (data.msg.trim().length < 10) e.msg = "Minst 10 tegn";
    return e;
  }, [data]);

  const valid = Object.keys(errors).length === 0;
  const show = (k: string) => touched[k] && errors[k];

  const set = (k: keyof typeof data, v: string) =>
    setData((d) => ({ ...d, [k]: v }));
  const markTouched = (k: string) =>
    setTouched((t) => ({ ...t, [k]: true }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, cat: true, msg: true });
    if (!valid) return;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-head">
        <div className="title">Send henvendelse</div>
        <div className="step">— Svar innen 1 virkedag</div>
      </div>

      <div className="two-col">
        <div className={`field ${show("name") ? "invalid" : ""}`}>
          <label>
            Navn {show("name") && <span className="err">{errors.name}</span>}
          </label>
          <input
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => markTouched("name")}
            placeholder="Fornavn Etternavn"
          />
        </div>
        <div className={`field ${show("phone") ? "invalid" : ""}`}>
          <label>
            Telefon{" "}
            {show("phone") && <span className="err">{errors.phone}</span>}
          </label>
          <input
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => markTouched("phone")}
            placeholder="+47 …"
          />
        </div>
      </div>

      <div className={`field ${show("email") ? "invalid" : ""}`}>
        <label>
          E-post {show("email") && <span className="err">{errors.email}</span>}
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => set("email", e.target.value)}
          onBlur={() => markTouched("email")}
          placeholder="din@epost.no"
        />
      </div>

      <div className={`field ${show("cat") ? "invalid" : ""}`}>
        <label>
          Hva gjelder saken?{" "}
          {show("cat") && <span className="err">{errors.cat}</span>}
        </label>
        <div className="category-pills">
          {CATS.map((c) => (
            <button
              type="button"
              key={c}
              className={`pill ${data.cat === c ? "active" : ""}`}
              onClick={() => {
                set("cat", c);
                markTouched("cat");
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className={`field ${show("msg") ? "invalid" : ""}`}>
        <label>
          Kort om saken{" "}
          {show("msg") && <span className="err">{errors.msg}</span>}
        </label>
        <textarea
          value={data.msg}
          onChange={(e) => set("msg", e.target.value)}
          onBlur={() => markTouched("msg")}
          placeholder="Noen setninger om bakgrunn, vedtak og frister — vi svarer innen én virkedag."
        />
      </div>

      <div className="form-footer">
        <div className="fine">
          Konfidensielt. Vi behandler kun opplysninger nødvendig for å vurdere
          saken, i henhold til personvernreglene.
        </div>
        <button type="submit" className={`submit-btn ${sent ? "ok" : ""}`}>
          {sent ? (
            <>
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
              >
                <path d="M2 7.5l3 3L12 4" />
              </svg>
              Mottatt — svar innen 1 virkedag
            </>
          ) : (
            <>
              Send henvendelse
              <ArrowIcon />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <span className="eyebrow">
              <span className="dash">—</span>Kontakt
            </span>
            <Reveal>
              <h2 className="h2">
                Første samtale
                <br />
                <em>er alltid gratis.</em>
              </h2>
            </Reveal>
          </div>
          <div className="right">
            Ring, skriv eller fyll ut skjemaet. Du får en vurdering av saken, en
            anbefaling om videre vei, og — hvis du ønsker — et møte på kontoret
            eller via video.
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <dl>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+4722334455">+47 22 33 44 55</a>
                </dd>
              </div>
              <div>
                <dt>E-post</dt>
                <dd>
                  <a href="mailto:post@holmadvokat.no">post@holmadvokat.no</a>
                </dd>
              </div>
              <div>
                <dt>Adresse</dt>
                <dd>
                  Stortingsgata 22
                  <br />
                  0161 Oslo
                </dd>
              </div>
              <div>
                <dt>Åpningstider</dt>
                <dd>
                  Man–fre 08:00–17:00
                  <br />
                  <span className="quiet">Utenom: etter avtale</span>
                </dd>
              </div>
              <div>
                <dt>Responstid</dt>
                <dd>Innen 1 virkedag</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="brand">
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span className="logo-mark">Holm</span>
              <span className="logo-sub">Advokatkontor · Oslo</span>
            </div>
            <p>
              Personlig, dedikert juridisk bistand innen erstatning, arbeidsrett
              og familierett. Etablert 2006.
            </p>
          </div>
          <div>
            <h4>Tjenester</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.num}>
                  <a href="#tjenester">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Kontoret</h4>
            <ul>
              <li>
                <a href="#om">Om advokaten</a>
              </li>
              <li>
                <a href="#prosess">Prosess</a>
              </li>
              <li>
                <a href="#resultater">Resultater</a>
              </li>
              <li>
                <a href="#referanser">Klienter sier</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>Stortingsgata 22</li>
              <li>0161 Oslo</li>
              <li>+47 22 33 44 55</li>
              <li>post@holmadvokat.no</li>
            </ul>
          </div>
        </div>
        <div className="foot-bar">
          <div>© 2026 Holm Advokatkontor AS · Org.nr. 123 456 789</div>
          <div className="links">
            <a href="#">Personvern</a>
            <a href="#">Vilkår</a>
            <a href="#">Informasjonskapsler</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <About />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
