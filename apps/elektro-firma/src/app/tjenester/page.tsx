import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import CertificationsRibbon from "@/components/sections/CertificationsRibbon";

export const metadata: Metadata = {
  title: "Tjenester | EL-KRAFT",
  description:
    "Vi leverer fremtidens elektriske løsninger for både private og næring. Fra smarte hjem til industrielle solcelleanlegg.",
};

const services = [
  {
    icon: "ev_station",
    title: "Elbillading",
    description:
      "Sikker og effektiv lading for elbil hjemme eller i fellesanlegg. Vi prosjekterer og installerer godkjente ladestasjoner.",
  },
  {
    icon: "home_iot_device",
    title: "Smarthus",
    description:
      "Full kontroll over boligen fra mobilen. Vi integrerer varme, lys og sikkerhet i sømløse styringssystemer.",
  },
  {
    icon: "lightbulb",
    title: "Belysning",
    description:
      "Design belysning som skaper stemning og sparer energi. Vi hjelper med både innendørs og utendørs lysplaner.",
  },
  {
    icon: "fact_check",
    title: "El-kontroll",
    description:
      "Sertifisert kontroll av det elektriske anlegget. Vi avdekker brannfare og sikrer driftssikkerhet i ditt hjem.",
  },
  {
    icon: "security",
    title: "Alarmsystemer",
    description:
      "Skreddersydde sikkerhetsløsninger med brann- og innbruddsalarm koblet direkte til din smarttelefon.",
  },
  {
    icon: "solar_power",
    title: "Solceller",
    description:
      "Produser din egen strøm med miljøvennlige solcellepaneler. Vi tar oss av hele installasjonen fra A til Å.",
  },
  {
    icon: "heat_pump",
    title: "Varmepumper",
    description:
      "Effektiv oppvarming og kjøling som senker strømregningen. Vi monterer og utfører service på ledende modeller.",
  },
  {
    icon: "settings_input_component",
    title: "Styringssystemer",
    description:
      "Avanserte løsninger for driftsstyring og automasjon i næringsbygg og industrilokaler.",
  },
];

export default function TjenesterPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative py-24 px-8 overflow-hidden bg-primary-container text-white pt-40">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/circuit-board.jpg"
            alt="Industrielt kretskort med blå indikatorer"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-tertiary-fixed font-black mb-4 block text-xs">
              Ekspertise &amp; Presisjon
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight mb-6 leading-tight">
              Våre <span className="text-secondary-fixed-dim">Tjenester</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-fixed-dim leading-relaxed font-light">
              Vi leverer fremtidens elektriske løsninger for både private og
              næring. Fra smarte hjem til industrielle solcelleanlegg.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden bg-primary relative flex flex-col md:flex-row items-center p-12 md:p-16">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/images/architecture.jpg"
              alt="Abstrakt arkitektonisk geometri"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center md:text-left md:flex-1">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-white mb-4">
              Uforpliktende befaring?
            </h2>
            <p className="text-primary-fixed-dim text-lg mb-8 md:mb-0">
              Våre sertifiserte elektrikere hjelper deg å finne de beste
              løsningene. Kontakt oss i dag.
            </p>
          </div>
          <div className="relative z-10 md:ml-12">
            <Link
              href="/kontakt"
              className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-lg text-lg font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xl shadow-tertiary-fixed/30"
            >
              Bestill nå
            </Link>
          </div>
        </div>
      </section>

      <CertificationsRibbon />
    </>
  );
}
