import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  ShowerHead,
  Flame,
  CheckCircle,
  Star,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";

const PHONE = "22 45 67 89";
const PHONE_EMERGENCY = "900 12 345";
const EMAIL = "post@bergevvs.no";
const ADDRESS = "Industrigata 14, 0357 Oslo";
const ORG_NR = "912 345 678";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-poppins)]">
      {/* Top bar */}
      <div className="bg-[#122448] text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#ffda21]" />
            <span className="font-semibold text-[#ffda21]">AKUTT?</span>
            <span className="hidden sm:inline">Ring oss døgnet rundt:</span>
            <a
              href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
              className="font-bold text-[#ffda21] hover:underline"
            >
              {PHONE_EMERGENCY}
            </a>
          </span>
          <span className="hidden md:flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              {EMAIL}
            </span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#1b3463] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#ffda21] rounded p-1.5">
              <Wrench className="w-5 h-5 text-[#1b3463]" />
            </div>
            <div>
              <div className="text-xl font-bold leading-tight">Berge VVS AS</div>
              <div className="text-xs text-blue-200 font-medium uppercase tracking-wide">
                Rørleggermester
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#tjenester" className="hover:text-[#ffda21] transition-colors">
              Tjenester
            </a>
            <a href="#om-oss" className="hover:text-[#ffda21] transition-colors">
              Om oss
            </a>
            <a href="#kontakt" className="hover:text-[#ffda21] transition-colors">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="bg-[#ffda21] text-[#1b3463] font-bold px-5 py-2.5 rounded text-sm hover:bg-[#e5c200] transition-colors"
          >
            Be om pristilbud
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background image via unsplash - modern bathroom */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[#1b3463]/80" />

          <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#ffda21] text-[#1b3463] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
                <Shield className="w-3.5 h-3.5" />
                VVS Fagmann sertifisert
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                EN ALLSIDIG{" "}
                <span className="text-[#ffda21]">RØRLEGGERBEDRIFT</span>
                <br />I OSLO
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Vi leverer kvalitetsarbeid innen rør og sanitær, baderomsbygning
                og varmeinstallasjon. Med over 20 års erfaring er vi din
                pålitelige partner – uansett oppdragets størrelse.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-[#ffda21] text-[#1b3463] font-bold px-8 py-4 rounded text-base hover:bg-[#e5c200] transition-colors"
                >
                  Be om pristilbud
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded text-base hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#ffda21] py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[#1b3463]">
              {[
                { value: "20+", label: "År med erfaring" },
                { value: "1 400+", label: "Fornøyde kunder" },
                { value: "24/7", label: "Akuttberedskap" },
                { value: "100%", label: "Autorisert arbeid" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold">{stat.value}</div>
                  <div className="text-sm font-semibold mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="tjenester" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b3463] mb-4">
                Våre tjenester
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Vi utfører alle typer VVS-arbeid for private og næringsliv – fra
                enkle reparasjoner til komplette installasjoner.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Wrench,
                  title: "Vann og avløp",
                  description:
                    "Installasjon og reparasjon av vann- og avløpssystemer. Vi fikser lekkasjer, bytter røropplegg og oppgraderer gamle installasjoner.",
                  items: [
                    "Rørutskifting",
                    "Lekkasjesøk",
                    "Avløpsrensing",
                    "Stoppekraner",
                  ],
                },
                {
                  icon: ShowerHead,
                  title: "Baderomsrenovering",
                  description:
                    "Totalrenovering eller deloppgradering av bad. Vi tar ansvar for alt fra rivning til ferdig flislagt bad – inkludert rørleggerarbeidet.",
                  items: [
                    "Totalrenovering",
                    "Flislegging",
                    "Dusjnisje",
                    "Baderomsinnredning",
                  ],
                },
                {
                  icon: Flame,
                  title: "Varme og varmtvann",
                  description:
                    "Installasjon av gulvvarme, varmtvannsberedere og varmepumper. Vi sørger for effektive og energibesparende løsninger.",
                  items: [
                    "Gulvvarme",
                    "Varmtvannsberedere",
                    "Varmepumpe",
                    "Radiatorer",
                  ],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1b3463]/20 transition-all group"
                >
                  <div className="bg-[#1b3463] text-[#ffda21] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ffda21] group-hover:text-[#1b3463] transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1b3463] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-[#ffda21] fill-[#1b3463] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-[#1b3463] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                  <Zap className="w-8 h-8 text-[#ffda21]" />
                  <h2 className="text-2xl font-extrabold">AKUTT VANNLEKKASJE?</h2>
                </div>
                <p className="text-blue-200 max-w-md">
                  Vi er tilgjengelig døgnet rundt, alle dager i året. Ring oss
                  umiddelbart – vi rykker ut raskt i hele Oslo og omegn.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a
                  href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 bg-[#ffda21] text-[#1b3463] font-extrabold px-8 py-4 rounded text-lg hover:bg-[#e5c200] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_EMERGENCY}
                </a>
                <span className="hidden sm:flex items-center text-blue-300 font-medium text-sm">
                  Akuttvakt 24/7
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About / Why us */}
        <section id="om-oss" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b3463] mb-6">
                  VI TAR JOBBEN PÅ ALVOR
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Berge VVS ble grunnlagt i 2004 og har siden den gang hjulpet
                  tusenvis av boligeiere og bedrifter i Oslo-regionen. Vi er
                  stolte av å levere arbeid som holder – med riktige materialer,
                  faglig stolthet og full dokumentasjon.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Alle oppdrag utføres av autoriserte fagfolk. Vi gir skriftlig
                  tilbud i forkant og sørger for at du vet hva arbeidet koster
                  – ingen overraskelser på fakturaen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: "Autorisert rørlegger" },
                    { icon: Star, label: "5-stjernes vurderinger" },
                    { icon: Clock, label: "Rask responstid" },
                    { icon: CheckCircle, label: "Fast pris – ingen overraskelser" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm font-semibold text-[#1b3463]"
                    >
                      <div className="bg-[#ffda21] w-9 h-9 rounded flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#1b3463]" />
                      </div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                    alt="VVS-montør i arbeid"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#1b3463] text-white rounded-xl p-5 shadow-xl">
                  <div className="text-4xl font-extrabold text-[#ffda21]">20+</div>
                  <div className="text-sm font-medium text-blue-200">
                    År i bransjen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-[#1b3463] text-center mb-12">
              Hva kundene våre sier
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kari Johansen",
                  location: "Frogner, Oslo",
                  text: "Berge VVS reddet oss da vi fikk vannlekkasje en søndag kveld. Rask utrykning, profesjonelt arbeid og hyggelige folk. Vil anbefale dem til alle!",
                  rating: 5,
                },
                {
                  name: "Thomas Berg",
                  location: "Majorstuen, Oslo",
                  text: "Fikk totalrenovert badet og er ekstremt fornøyd. Jobben ble gjort til avtalt tid og pris. Ingenting ble overlatt til tilfeldighetene.",
                  rating: 5,
                },
                {
                  name: "Lene Andreassen",
                  location: "Grorud, Oslo",
                  text: "Satte inn ny varmtvannstank og gulvvarme på bad. Ryddig arbeid, god kommunikasjon og rimelig pris. Kan varmt anbefales!",
                  rating: 5,
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="bg-white rounded-xl p-7 shadow-sm border border-gray-100"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ffda21] text-[#ffda21]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-[#1b3463] text-sm">
                      {review.name}
                    </div>
                    <div className="text-gray-400 text-xs">{review.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b3463] mb-6">
                  Ta kontakt
                </h2>
                <p className="text-gray-600 mb-8">
                  Vi besvarer alle henvendelser så raskt som mulig. Be om
                  pristilbud – det er gratis og uforpliktende.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "Telefon", value: PHONE },
                    {
                      icon: Phone,
                      label: "Akuttvakt (24/7)",
                      value: PHONE_EMERGENCY,
                    },
                    { icon: Mail, label: "E-post", value: EMAIL },
                    { icon: MapPin, label: "Adresse", value: ADDRESS },
                    {
                      icon: Clock,
                      label: "Åpningstider",
                      value: "Man–fre: 07:00–17:00",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-[#1b3463] text-[#ffda21] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-[#1b3463] font-semibold">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 text-xs text-gray-400">
                  Org.nr: {ORG_NR} MVA
                </div>
              </div>

              {/* Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#1b3463] mb-6">
                  Be om gratis pristilbud
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Fornavn
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1b3463] focus:ring-1 focus:ring-[#1b3463] transition-colors"
                        placeholder="Ola"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Etternavn
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1b3463] focus:ring-1 focus:ring-[#1b3463] transition-colors"
                        placeholder="Nordmann"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1b3463] focus:ring-1 focus:ring-[#1b3463] transition-colors"
                      placeholder="900 00 000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      E-post
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1b3463] focus:ring-1 focus:ring-[#1b3463] transition-colors"
                      placeholder="ola@eksempel.no"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Hva trenger du hjelp med?
                    </label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1b3463] focus:ring-1 focus:ring-[#1b3463] transition-colors bg-white">
                      <option value="">Velg tjeneste...</option>
                      <option>Vann og avløp</option>
                      <option>Baderomsrenovering</option>
                      <option>Varme og varmtvann</option>
                      <option>Akuttoppdrag</option>
                      <option>Annet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Beskriv oppdraget
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1b3463] focus:ring-1 focus:ring-[#1b3463] transition-colors resize-none"
                      placeholder="Fortell oss litt om hva du trenger hjelp med..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1b3463] text-white font-bold py-4 rounded-lg hover:bg-[#122448] transition-colors flex items-center justify-center gap-2"
                  >
                    Send forespørsel
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Vi svarer som regel innen 1–2 timer på hverdager.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#122448] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ffda21] rounded p-1.5">
                  <Wrench className="w-5 h-5 text-[#1b3463]" />
                </div>
                <div className="text-lg font-bold">Berge VVS AS</div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                Din lokale rørlegger i Oslo. Vi tilbyr alt innen VVS – fra
                enkle reparasjoner til totalrenovering av bad.
              </p>
            </div>
            <div>
              <div className="font-semibold text-sm uppercase tracking-wide text-[#ffda21] mb-4">
                Tjenester
              </div>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Vann og avløp</li>
                <li>Baderomsrenovering</li>
                <li>Gulvvarme</li>
                <li>Varmtvannsberedere</li>
                <li>Akuttoppdrag</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-sm uppercase tracking-wide text-[#ffda21] mb-4">
                Kontakt
              </div>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>{PHONE}</li>
                <li>{EMAIL}</li>
                <li>{ADDRESS}</li>
                <li className="pt-1 font-semibold text-white">
                  Akuttvakt: {PHONE_EMERGENCY}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
            <span>© 2024 Berge VVS AS – Org.nr: {ORG_NR} MVA</span>
            <span>VVS Fagmann sertifisert · Autorisert rørlegger · Oslo</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
