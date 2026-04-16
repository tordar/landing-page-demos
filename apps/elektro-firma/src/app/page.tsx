import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CertificationsRibbon from "@/components/sections/CertificationsRibbon";
import CTABanner from "@/components/sections/CTABanner";

const testimonials = [
  {
    quote:
      "Veldig fornøyd med installasjon av elbillader. Punktlige, ryddige og profesjonelle fra start til slutt. Kan trygt anbefales!",
    name: "Anders Hansen",
    location: "Oslo",
    initials: "AH",
  },
  {
    quote:
      "Fikk montert smarthus-styring i hele eneboligen. Fantastisk oppfølging og god opplæring i appen. Strålende resultat!",
    name: "Marianne Lund",
    location: "Asker",
    initials: "ML",
  },
  {
    quote:
      "Profesjonell befaring og ryddig tilbud på solceller. Montørene gjorde en kjempejobb. Alltid hyggelige folk fra El-Kraft.",
    name: "Kristian Nilsen",
    location: "Ski",
    initials: "KN",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background tracking-tight leading-[1.1] mb-6">
              Din lokale elektriker med fokus på{" "}
              <span className="text-secondary">kvalitet</span> og{" "}
              <span className="text-secondary">innovasjon</span>.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Vi leverer fremtidens elektriske løsninger for både private og
              bedrifter. Fra smarte hjem til industrielle installasjoner – vi
              sikrer din kraft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                Bestill befaring
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/tjenester"
                className="bg-surface-container-high text-secondary border border-outline-variant/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-variant transition-all text-center"
              >
                Se våre tjenester
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/images/hero-solar.jpg"
                alt="Moderne solcelleanlegg på tak med klar blå himmel"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 to-transparent" />
            </div>
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <span className="material-symbols-outlined filled text-secondary">
                    bolt
                  </span>
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">
                    Responstid
                  </p>
                  <p className="text-xl font-headline font-extrabold">
                    Under 2 timer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -z-0 opacity-10">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="300" fill="url(#heroGrad)" />
            <defs>
              <linearGradient
                id="heroGrad"
                x1="300"
                y1="0"
                x2="300"
                y2="600"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0059bb" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Featured Services (Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Våre spesialfelt
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Vi kombinerer teknisk ekspertise med moderne teknologi for å gi deg
              de beste løsningene.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px] group">
              <div>
                <span className="material-symbols-outlined filled text-secondary text-4xl mb-6">
                  ev_station
                </span>
                <h3 className="text-2xl font-headline font-bold mb-3">
                  Elbillading
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Sikker og effektiv lading for alle biltyper. Vi installerer
                  ladebokser tilpasset ditt strømnett.
                </p>
              </div>
              <Link
                href="/tjenester"
                className="text-secondary font-bold flex items-center gap-2 mt-6 group-hover:underline"
              >
                Les mer
                <span className="material-symbols-outlined icon-inline">arrow_forward</span>
              </Link>
            </div>

            {/* Service Card 2 - Dark */}
            <div className="bg-primary-container p-8 rounded-xl shadow-sm text-white flex flex-col justify-between min-h-[300px] group">
              <div>
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-6">
                  home_iot_device
                </span>
                <h3 className="text-2xl font-headline font-bold mb-3">
                  Smarthus
                </h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Full kontroll over lys, varme og sikkerhet rett fra mobilen.
                </p>
              </div>
              <Link
                href="/tjenester"
                className="text-tertiary-fixed font-bold flex items-center gap-2 mt-6"
              >
                Utforsk
                <span className="material-symbols-outlined icon-inline">arrow_forward</span>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px] group">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                  solar_power
                </span>
                <h3 className="text-2xl font-headline font-bold mb-3">
                  Solceller
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Produser din egen strøm og reduser strømregningen betraktelig.
                </p>
              </div>
              <Link
                href="/tjenester"
                className="text-secondary font-bold flex items-center gap-2 mt-6"
              >
                Se muligheter
                <span className="material-symbols-outlined icon-inline">arrow_forward</span>
              </Link>
            </div>

            {/* Service Card 4 - Blue */}
            <div className="md:col-span-2 bg-secondary text-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-8 min-h-[300px]">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl mb-6">
                  heat_pump
                </span>
                <h3 className="text-2xl font-headline font-bold mb-3">
                  Varmepumper
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Miljøvennlig oppvarming som sparer deg for penger og gir bedre
                  inneklima hele året.
                </p>
                <Link
                  href="/kontakt"
                  className="bg-white text-secondary px-6 py-2 rounded-sm font-bold text-sm uppercase inline-block"
                >
                  Få tilbud
                </Link>
              </div>
              <div className="hidden md:block w-1/3">
                <Image
                  src="/images/heatpump.jpg"
                  alt="Tekniker jobber med varmepumpe"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
            </div>

            {/* Emergency Card */}
            <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl flex items-center justify-between border-2 border-dashed border-outline-variant/30">
              <div className="max-w-md">
                <h3 className="text-xl font-headline font-bold">
                  Trenger du akutt hjelp?
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Vår vakttelefon er betjent 24/7 for alle typer elektriske
                  nødsituasjoner.
                </p>
              </div>
              <div className="text-3xl font-black text-secondary">02 300</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-tertiary-fixed">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled">
                      star
                    </span>
                  ))}
                </div>
                <span className="font-bold">4.9/5 på Google</span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">
                Hva våre kunder sier
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CertificationsRibbon />

      <CTABanner
        title="La oss skape fremtidens løsninger sammen."
        description="Vi står klare til å hjelpe deg med ditt neste prosjekt, enten det er stort eller lite."
        buttonText="Kontakt oss"
      />
    </>
  );
}
