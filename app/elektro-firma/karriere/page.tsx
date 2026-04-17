import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JobCard from "@/app/elektro-firma/components/ui/JobCard";

export const metadata: Metadata = {
  title: "Karriere | EL-KRAFT",
  description:
    "Bli en del av EL-KRAFT teamet. Vi bygger fremtidens elektriske infrastruktur med faglig stolthet og moderne teknologi.",
};

const jobs = [
  {
    title: "Saksbehandler Elektro",
    description:
      "Ansvar for prosjektering, kalkulasjon og oppfølging av prosjekter innen bolig og næring. Erfaring med Febdok og AutoCAD er en fordel.",
    type: "Heltid",
    location: "Oslo / Akershus",
  },
  {
    title: "Serviceelektriker",
    description:
      "Vi søker en selvstendig og løsningsorientert elektriker til varierte serviceoppdrag hos våre faste kunder. Egen servicebil medfølger.",
    type: "Fagbrev",
    location: "Oslo",
  },
  {
    title: "Lærling",
    description:
      "Ønsker du en læreplass i et firma som tar opplæring på alvor? Vi søker engasjerte lærlinger som vil lære av de beste i bransjen.",
    type: "Under utdanning",
    location: "Viken",
  },
];

const benefits = [
  { icon: "construction", title: "Moderne utstyr", subtitle: "Siste innen verktøy og bil" },
  { icon: "school", title: "Kurs og sertifisering", subtitle: "Betalt videreutdanning" },
  { icon: "diversity_3", title: "Godt arbeidsmiljø", subtitle: "Sosiale events og samhold" },
  { icon: "health_and_safety", title: "Helseforsikring", subtitle: "Gode dekninger for alle" },
];

export default function KarrierePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Bli en del av teamet
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8 font-headline">
              Bli en del av EL-KRAFT teamet
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Vi bygger fremtidens elektriske infrastruktur. Hos oss møter du et
              miljø preget av faglig stolthet, moderne teknologiske løsninger og
              en lidenskap for presisjon.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/elektro-firma/images/karriere-hero.jpg"
                alt="Elektriker bruker nettbrett for å kalibrere smarthus-kontrollpanel"
                width={600}
                height={750}
                className="w-full aspect-[4/5] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed p-6 rounded-lg shadow-xl max-w-[200px]">
              <p className="text-on-tertiary-fixed font-black text-2xl leading-tight">
                15+
              </p>
              <p className="text-on-tertiary-fixed text-sm font-bold opacity-80 uppercase tracking-wider">
                Nye prosjekter i 2024
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Values & Culture */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 font-headline">
              Vår Kultur og Verdier
            </h2>
            <div className="h-1.5 w-24 bg-secondary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                  bolt
                </span>
                <h3 className="text-2xl font-bold mb-4 font-headline">
                  Fokus på profesjonell vekst
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Vi investerer tungt i våre ansatte gjennom kontinuerlig
                  videreutdanning og sertifiseringer. Hos EL-KRAFT er du ikke
                  bare en montør; du er en teknisk arkitekt i stadig utvikling.
                </p>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <span className="bg-surface-container text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  Kurs
                </span>
                <span className="bg-surface-container text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  Sertifisering
                </span>
                <span className="bg-surface-container text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  Mentorskap
                </span>
              </div>
            </div>

            {/* Dark Card */}
            <div className="bg-primary-container text-white p-8 rounded-xl flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-6">
                  devices
                </span>
                <h3 className="text-2xl font-bold mb-4 font-headline">
                  Moderne Teknologi
                </h3>
                <p className="opacity-80 leading-relaxed">
                  Vi benytter de nyeste verktøyene og programvarene for
                  prosjektering og feilsøking.
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">
                  precision_manufacturing
                </span>
              </div>
            </div>

            {/* Wide Bottom Card */}
            <div className="md:col-span-3 bg-surface-container-highest p-8 rounded-xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black mb-2 font-headline">
                  Kinetic Precision
                </h3>
                <p className="text-on-surface-variant">
                  Vi verdsetter ryddighet, sikkerhet og arkitektonisk orden i alt
                  vårt arbeid.
                </p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0">
                <Image
                  src="/elektro-firma/images/fusebox.jpg"
                  alt="Organisert sikringsskap med symmetrisk kabling"
                  width={192}
                  height={128}
                  className="h-32 w-48 object-cover rounded-lg"
                />
                <Image
                  src="/elektro-firma/images/tablet-review.jpg"
                  alt="Teknisk tegning på nettbrett"
                  width={192}
                  height={128}
                  className="h-32 w-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight font-headline">
            Fordeler hos oss
          </h2>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 lg:gap-24">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  {b.icon}
                </span>
              </div>
              <h4 className="font-bold text-on-surface">{b.title}</h4>
              <p className="text-xs text-on-surface-variant mt-1">
                {b.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tighter font-headline">
              Ledige stillinger
            </h2>
            <p className="text-on-surface-variant mt-2">
              Bli med på laget vårt og form fremtiden.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-on-surface-variant text-sm font-bold opacity-50 uppercase tracking-widest">
              {jobs.length} Stillinger tilgjengelig
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-tertiary-fixed rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-on-tertiary-fixed mb-6 leading-tight font-headline">
              Vi er alltid på utkikk etter flinke folk.
              <br />
              Send oss en åpen søknad.
            </h2>
            <p className="text-on-tertiary-fixed-variant max-w-2xl mx-auto mb-10 text-lg">
              Fant du ikke stillingen som passet deg? Vi hører gjerne fra deg
              uansett. Fortell oss om din kompetanse og hvorfor du vil jobbe i
              EL-KRAFT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-primary-container text-white px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-xl"
              >
                Send åpen søknad
              </Link>
              <Link
                href="/kontakt"
                className="bg-white/40 text-on-tertiary-fixed px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/60 active:scale-95 transition-all"
              >
                Kontakt HR
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <span className="material-symbols-outlined text-9xl">
              person_add
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
