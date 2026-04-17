import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravferd eller kremasjon | Os Gravferdsbyrå AS",
  description:
    "Veiledning om valget mellom kistebegravelse og kremasjon.",
};

export default function GravferdEllerKremasjonPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7">
          <h1 className="font-headline text-5xl md:text-7xl text-on-background leading-tight mb-8">
            Gravferd eller kremasjon
          </h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-10">
            Valget mellom kistebegravelse og kremasjon er et personlig og viktig
            valg. Vi veileder dere gjennom prosessen med respekt for både
            tradisjon og individuelle ønsker.
          </p>
          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl">
                info
              </span>
              <div>
                <h3 className="font-headline text-xl mb-2 text-on-background">
                  Juridisk krav
                </h3>
                <p className="text-on-surface-variant">
                  Begravelse eller kremasjon skal finne sted innen 10 virkedager
                  etter dødsfallet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-full overflow-hidden shadow-[0_32px_64px_-12px_rgba(35,26,10,0.06)]">
            <img
              alt="Rolig norsk fjellandskap"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDQnatAvJxO_3m6zOcKQoztCNkk95jLBXV9Vf-UbDvdtDiOSKwQhpY9zBACguOdQM5DhgQryrGWzhRrc4-22d-kIbNKEuGfrRmm3GopHjqSkUAN7b_ARuMuMrfcX_wjYE_Ux6ty82vPvR9n1pyWs36qXbfV2mbl-BFxbrAYJC2sd1v2QB2oYP_4Y-1sRFg2GrlTRpfsSLVvlTegOMrHTYe37JkHdA8sLCskSi0zKGljBDbEhWgK2ALm9cGg1wTGbb_TiI2bnKOlx8z"
            />
          </div>
        </div>
      </div>

      {/* Decision Process */}
      <section className="mb-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary block mb-4">
            Veiledning
          </span>
          <h2 className="font-headline text-3xl md:text-4xl text-on-background mb-6">
            Beslutningsprosessen
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Avdødes egne ønsker avgjør ofte valget. Dersom det ikke foreligger
            skriftlige eller muntlige ønsker, er det de nærmeste etterlatte som
            tar beslutningen sammen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kistegravlegging */}
          <div className="bg-surface-container-low p-10 md:p-12 rounded-xl group hover:bg-surface-container transition-colors duration-500">
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <span className="material-symbols-outlined text-5xl text-primary mb-6">
                  folded_hands
                </span>
                <h3 className="font-headline text-3xl text-on-background mb-4">
                  Kistegravlegging
                </h3>
                <div className="h-1 w-12 bg-primary-container mb-6 group-hover:w-24 transition-all duration-500" />
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Ved en tradisjonell begravelse senkes kisten i jorden etter
                seremonien. Dette skjer vanligvis på en kirkegård i den avdødes
                bostedskommune. Etterlatte følger ofte kisten helt til graven for
                en siste avskjed.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  Fysisk gravsted umiddelbart tilgjengelig
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  Mulighet for felles familiegrav
                </li>
              </ul>
            </div>
          </div>

          {/* Kremasjon */}
          <div className="bg-surface-container-low p-10 md:p-12 rounded-xl group hover:bg-surface-container transition-colors duration-500">
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <span className="material-symbols-outlined text-5xl text-primary mb-6">
                  local_fire_department
                </span>
                <h3 className="font-headline text-3xl text-on-background mb-4">
                  Kremasjon
                </h3>
                <div className="h-1 w-12 bg-primary-container mb-6 group-hover:w-24 transition-all duration-500" />
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Ved kremasjon blir kisten fraktet til et krematorium etter
                seremonien. Urnen settes ned på kirkegården på et senere
                tidspunkt, ofte med bare de nærmeste til stede. Det er også
                mulig å søke om askespredning.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  Fleksibilitet med tanke på urnenedsettelse
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  Mulighet for navnet minnelund eller askespredning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Detail */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative pt-12">
            <div className="bg-surface-container-high rounded-xl p-8 shadow-[0_32px_64px_-12px_rgba(35,26,10,0.06)] relative z-10">
              <h4 className="font-headline text-2xl mb-6">
                Viktig å vite om valg
              </h4>
              <div className="space-y-8">
                <InfoItem
                  title="Religiøse hensyn"
                  description="Ulike tros- og livssynssamfunn kan ha spesifikke tradisjoner eller krav knyttet til valg av gravferdsform."
                />
                <InfoItem
                  title="Miljø og kirkegård"
                  description="Noen kirkegårder kan ha begrensninger på plass, noe som kan påvirke muligheten for ny kistegrav."
                />
                <InfoItem
                  title="Askespredning"
                  description="Dersom man ønsker askespredning, må det søkes Statsforvalteren. Vi hjelper med formalitetene."
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-20 rounded-full -mr-16 -mt-8" />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <h3 className="font-headline text-3xl mb-8">
            Vi er her for samtalen
          </h3>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
            Det er ingen fasit på hva som er det &ldquo;riktige&rdquo; valget.
            Det viktigste er at beslutningen føles rett for dere og er i tråd
            med avdødes personlighet og ønsker.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-12">
            Vi i Os Gravferdsbyrå har lang erfaring i å bistå familier med disse
            vurderingene. Vi kan møtes på vårt kontor i Brugata, eller vi kan
            komme hjem til dere for en uforpliktende samtale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Bestill samtale
            </Link>
            <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary-container transition-all">
              Se vår prisliste
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h5 className="font-semibold text-primary mb-2">{title}</h5>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
