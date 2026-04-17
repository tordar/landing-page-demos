import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt | EL-KRAFT",
  description:
    "Kontakt EL-KRAFT for elektriske løsninger. Vi realiserer dine visjoner med teknisk presisjon og fremtidsrettet ingeniørkunst.",
};

export default function KontaktPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter text-primary mb-4">
          Kontakt oss
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">
          Vi realiserer dine elektriske visjoner med teknisk presisjon og
          fremtidsrettet ingeniørkunst. Enten det er næringsbygg eller
          privatbolig, står våre eksperter klare.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Info & Map */}
        <div className="lg:col-span-5 space-y-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="bg-surface-container-high p-4 rounded-lg text-secondary">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl mb-1">
                  Telefon
                </h3>
                <p className="text-on-surface-variant font-medium">
                  +47 22 33 44 55
                </p>
                <p className="text-sm text-on-surface-variant/70 italic">
                  Døgnvakt for akutte feil
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-surface-container-high p-4 rounded-lg text-secondary">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl mb-1">E-post</h3>
                <p className="text-on-surface-variant font-medium">
                  post@el-kraft.no
                </p>
                <p className="text-sm text-on-surface-variant/70">
                  Vi svarer innen 24 timer
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-surface-container-high p-4 rounded-lg text-secondary">
                <span className="material-symbols-outlined text-3xl">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl mb-1">
                  Besøksadresse
                </h3>
                <p className="text-on-surface-variant font-medium">
                  Energiveien 14, 0150 Oslo
                </p>
                <p className="text-sm text-on-surface-variant/70">
                  Inngang B, 4. etasje
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative overflow-hidden rounded-xl h-80 bg-surface-container-high shadow-sm">
            <Image
              src="/elektro-firma/images/map.jpg"
              alt="Kart over Oslo med kontorplassering"
              fill
              className="object-cover opacity-80 grayscale"
            />
            <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-sm flex items-center justify-between border-l-4 border-secondary">
              <span className="font-headline font-bold text-sm">
                EL-KRAFT Hovedkontor
              </span>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                Se i Google Maps
              </span>
            </div>
          </div>

          {/* Business Hours */}
          <section className="bg-primary-container text-white p-8 rounded-xl">
            <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">schedule</span>
              Åpningstider
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-on-primary-container">
                  Mandag - Fredag
                </span>
                <span className="font-bold">08:00 - 16:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-on-primary-container">Lørdag</span>
                <span className="font-bold">Stengt</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-on-primary-container">Søndag</span>
                <span className="font-bold">Stengt</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-tertiary-fixed font-bold">
                  Vakttelefon
                </span>
                <span className="text-tertiary-fixed font-bold">24 / 7</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-xl shadow-lg border border-outline-variant/15">
            <h2 className="font-headline font-bold text-3xl mb-8">
              Send oss en henvendelse
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">
                    Navn
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="Ditt fulle navn"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">
                    E-post
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="navn@firma.no"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">
                  Tjeneste
                </label>
                <select className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all appearance-none">
                  <option>Velg en tjeneste</option>
                  <option>Privatbolig / Smarthus</option>
                  <option>Næring / Industri</option>
                  <option>Elbillading</option>
                  <option>Serviceoppdrag</option>
                  <option>Solcelleanlegg</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">
                  Beskjed
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary transition-all"
                  placeholder="Beskriv ditt prosjekt eller behov..."
                  rows={5}
                />
              </div>
              <button
                className="w-full bg-secondary text-on-secondary py-5 rounded-lg font-headline font-extrabold text-lg flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
                type="submit"
              >
                Send melding
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Video CTA */}
          <div className="bg-tertiary-fixed p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1">
              <h3 className="font-headline font-bold text-2xl text-on-tertiary-fixed">
                Foretrekker du video?
              </h3>
              <p className="text-on-tertiary-fixed-variant">
                Spar tid og book en rask gjennomgang over video med en av våre
                eksperter.
              </p>
            </div>
            <button className="whitespace-nowrap bg-on-tertiary-fixed text-tertiary-fixed px-8 py-4 rounded-lg font-headline font-bold hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer">
              Book gratis videobefaring
            </button>
          </div>

          {/* Certifications Strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 py-8 px-4 bg-surface-container rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-label font-bold tracking-widest text-xs uppercase text-on-surface-variant">
              Våre Sertifiseringer:
            </span>
            <div className="flex gap-8 items-center">
              <span className="font-headline font-black text-xl italic">
                NELFO
              </span>
              <span className="font-headline font-black text-xl">Nemko</span>
              <span className="font-headline font-black text-xl tracking-tighter">
                STARTBANK
              </span>
              <span className="font-headline font-black text-xl">
                Miljøfyrtårn
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
