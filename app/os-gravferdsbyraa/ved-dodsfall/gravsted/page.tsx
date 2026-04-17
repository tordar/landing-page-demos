import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravsted | Os Gravferdsbyrå AS",
  description: "Informasjon om ulike typer gravsteder i Os og omegn.",
};

export default function GravstedPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-20 pb-16 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block font-semibold">
              Informasjon og valg
            </span>
            <h1 className="font-headline text-5xl md:text-6xl text-primary leading-tight mb-6">
              Valg av gravsted
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-light">
              Valg av gravsted er en personlig beslutning som har betydning for
              etterslekten. Vi veileder dere gjennom de ulike alternativene i Os
              og omegn, slik at dere finner en løsning som føles riktig.
            </p>
          </div>
          <div className="relative h-[400px] rounded-full overflow-hidden shadow-sm">
            <img
              alt="Fredfull kirkegårdshage"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByUzjH-nv8Wl6_bbBP8o4HqVhATEmAH_8OJ9M3TH9DHj4dJC_vd6EIm4To48CM0YVrqAnvudUv-oBTsjE524HopkwNBCYjqzKdbwdapcFvkT243rkYQjA0mEZa6PP2LESYCjmtLg__bnaYlsawevXSv6zvwYXg9QCmCQp7dBYLI2KKBOOv-pY-T2hltZc92-AfHiQ15ZlQXO_2ZKBXwTOqpMg-zC7tnHTvUYe_Ikw5-ZdbozAV8BGLdufEc9uXOSIRknD-y7UjiQoE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-32">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Enkeltgrav */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container transition-colors duration-300">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="font-headline text-2xl text-primary mb-2">
                  Enkeltgrav
                </h3>
                <p className="text-on-surface-variant font-light max-w-md">
                  Den vanligste formen for kistegrav. Gir rom for ett gravminne
                  og en fastsatt fredningstid.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl">
                church
              </span>
            </div>
            <div className="flex items-baseline gap-4 mt-auto">
              <span className="text-sm uppercase tracking-wider text-outline">
                Estimert kostnad
              </span>
              <span className="text-xl font-medium text-primary">
                Fra kr 4 200,-
              </span>
            </div>
          </div>

          {/* Urngrav */}
          <div className="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-2xl text-primary mb-2">
                  Urngrav
                </h3>
                <p className="text-on-surface-variant text-sm font-light">
                  Mindre arealbehov. Plass til flere urner i samme gravsted over
                  tid.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl">
                deceased
              </span>
            </div>
            <div className="mt-auto">
              <span className="text-sm uppercase tracking-wider text-outline block mb-1">
                Prisinformasjon
              </span>
              <span className="text-lg font-medium text-primary">
                Etter kommunale takster
              </span>
            </div>
          </div>

          {/* Minnelund */}
          <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-highest transition-colors duration-300 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline text-2xl text-primary mb-2">
                Minnelund
              </h3>
              <p className="text-on-surface-variant text-sm font-light mb-4">
                Navnet minnelund med felles gravminne. Vedlikeholdet ivaretas av
                gravplassmyndighetene.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-primary font-medium mt-auto">
              <span className="material-symbols-outlined text-sm">info</span>
              <span className="text-sm">Veldig etterspurt i Os</span>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary opacity-5 rounded-full" />
          </div>

          {/* Dobbeltgrav */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center border-l-4 border-primary/20">
            <div className="flex-1">
              <h3 className="font-headline text-2xl text-primary mb-2">
                Dobbeltgrav
              </h3>
              <p className="text-on-surface-variant font-light mb-6">
                To graver ved siden av hverandre, ofte reservert for ektefeller
                eller partnere. Dette sikrer at man kan hvile sammen.
              </p>
              <div className="flex items-baseline gap-4">
                <span className="text-sm uppercase tracking-wider text-outline">
                  Festeavgift
                </span>
                <span className="text-xl font-medium text-primary">
                  Kr 1 100,- per år
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
              <img
                alt="Dobbeltgrav-område"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTMacvGJNxzn4lN8AiC-YI__h1gYrKZjyA6xwrHwvCinUwY1m4LvV-Ex4hNEcdIS2pV3w5TY_R41nZy6YbTw7-xMxR1rbTjtpwX_fiDKP20UDK1Kq3bdM0Jjpx0WhKzm9UAPkS-_RdbRxqzxOWsMvLIc2k4JSxSL18B4DMxb0Ps--pCnOHrkLckf1hHtReMdHtvlmp5nFf8MjRcOpwyRsM1HSQvZP6_OP6GBl3nNo4huIk0haUjVqTYfEax_PkteY8gBgr5jhiFh9y"
              />
            </div>
          </div>

          {/* Anonym grav */}
          <div className="md:col-span-12 bg-surface-container-lowest rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-10 shadow-sm border border-outline-variant/10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  visibility_off
                </span>
                <h3 className="font-headline text-2xl text-primary">
                  Anonym grav / Spredning
                </h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed">
                For de som ønsker at graven ikke skal være markert med navn,
                eller ønsker askespredning for vinden. Vi bistår med
                søknadsprosessen til Statsforvalteren for askespredning i naturen
                eller på sjøen.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <Link
                href="/kontakt"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all mb-4"
              >
                Bestill veiledning
              </Link>
              <p className="text-xs text-outline uppercase tracking-wider">
                Kostnadsfri konsultasjon
              </p>
            </div>
          </div>
        </div>

        {/* Important info */}
        <section className="mt-24 bg-surface-container-low rounded-2xl p-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <h2 className="font-headline text-3xl text-primary mb-8">
              Viktig å vite om gravplasser
            </h2>
            <div className="space-y-8">
              <InfoRow
                icon="history"
                title="Fredningstid"
                description="I Norge er fredningstiden normalt 20 år. I denne perioden kan ikke graven gjenbrukes uten særskilt tillatelse."
              />
              <InfoRow
                icon="payments"
                title="Festeavgift"
                description="Etter fredningstiden kan man velge å 'feste' graven videre mot en årlig eller flerårig avgift til kommunen."
              />
              <InfoRow
                icon="yard"
                title="Gravstell"
                description="Vi tilbyr egne avtaler for planting og stell gjennom hele året for de som ikke har anledning til å gjøre dette selv."
              />
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">eco</span>
          </div>
        </section>
      </main>
    </>
  );
}

function InfoRow({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-on-surface mb-1">{title}</h4>
        <p className="text-on-surface-variant font-light">{description}</p>
      </div>
    </div>
  );
}
