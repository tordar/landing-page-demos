import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser | Os Gravferdsbyrå AS",
  description:
    "Prisoppsett i henhold til prisopplysningsforskriften. Komplett prisliste pr. 1. februar 2026.",
};

export default function PriserPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-4">
            Prisopplysning
          </span>
          <h1 className="font-headline text-5xl md:text-6xl font-light text-primary leading-tight mb-6">
            Hva koster en seremoni?
          </h1>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            Prisoppsett i henhold til prisopplysningsforskriften. Prisene kan
            variere noe etter dødssted og omstendigheter. Vi gir alltid et
            personlig og skriftlig tilbud etter konsultasjon.
          </p>
        </div>
      </section>

      {/* Price overview cards */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-xl p-10 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-outline mb-2">
              Enkleste seremoni fra
            </span>
            <span className="font-headline text-5xl text-primary mb-4">
              kr 31 690,-
            </span>
            <p className="text-on-surface-variant text-sm font-light">
              Inkluderer kiste, stell, transport, assistanse, program,
              dødsannonse og byråets honorar.
            </p>
          </div>
          <div className="bg-surface-container rounded-xl p-10 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-outline mb-2">
              Fullstendig seremoni opptil
            </span>
            <span className="font-headline text-5xl text-primary mb-4">
              kr 76 905,-
            </span>
            <p className="text-on-surface-variant text-sm font-light">
              Med oppgradert kiste, større program, full dekorasjon og
              dødsannonse i riksaviser.
            </p>
          </div>
        </div>
      </section>

      {/* Byråets tjenester table */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <h2 className="font-headline text-3xl text-primary mb-8">
          Byråets tjenester
        </h2>
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Tjeneste
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Minimum
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Maksimum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <PriceRow
                  service="Kiste inkl. svøp"
                  min="8 650,-*"
                  max="37 125,-*"
                />
                <PriceRow
                  service="Stell og nedlegging i kiste"
                  min="1 600,-"
                  max="1 600,-"
                />
                <PriceRow
                  service="Henting av avdøde og transport fra dødssted til oppbevaringssted"
                  min="3 950,-"
                  max="7 900,-"
                />
                <PriceRow
                  service="Transport etter seremoni ved behov m/mannskap"
                  min="1 950,-"
                  max="1 950,-"
                />
                <PriceRow
                  service="Assistanse i seremoni"
                  min="5 950,-"
                  max="5 950,-"
                />
                <PriceRow
                  service="Pynt og annet utstyr v/seremonien"
                  min="690,-*"
                  max="690,-*"
                />
                <PriceRow
                  service="Kistedekorasjon"
                  min="2 500,-*"
                  max="5 500,-*"
                />
                <PriceRow
                  service="Program"
                  min="2 250,-* (25 stk)"
                  max="6 450,-* (500 stk)"
                />
                <PriceRow
                  service="Administrasjonskostnader"
                  min="1 250,-*"
                  max="1 250,-*"
                />
                <PriceRow
                  service="Byråets honorar ved full tilrettelegging"
                  min="2 050,-"
                  max="3 990,-"
                />
                <PriceRow
                  service="Dødsannonse over èn spalte 75mm i Os & FusaPosten"
                  min="850,-*"
                  max="4 500,-*"
                />
                <tr className="bg-surface-container-low font-bold">
                  <td className="px-6 py-4 text-on-background">
                    Sum byråets tjenester
                  </td>
                  <td className="px-6 py-4 text-right text-primary">
                    31 690,-
                  </td>
                  <td className="px-6 py-4 text-right text-primary">
                    76 905,-
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-low/50 text-xs text-on-surface-variant">
            Priser merket med * er inkl. 25% mva. Resten er fritatt mva.
          </div>
        </div>

        <div className="mt-6 bg-surface-container-low rounded-xl p-8 border-l-4 border-primary/30">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Prisene kan variere noe etter dødssted og omstendigheter.
            Dødsannonsene varierer også fra avis til avis — lokalavisen er
            billigst, BT er noe dyrere, mens BA og Aftenposten er dyrest.
            Annonseprisene kan variere fra kr 750,- til kr 4–5 000,- avhengig av
            avis og antall annonser. Du vil også kunne velge mer blomster og evt.
            solistinnslag.
          </p>
        </div>
      </section>

      {/* Komplett prisliste */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <h2 className="font-headline text-3xl text-primary mb-2">
          Komplett prisliste
        </h2>
        <p className="text-on-surface-variant mb-8">Pr. 1. februar 2026</p>

        {/* Tjenester */}
        <div className="mb-12">
          <h3 className="font-headline text-xl text-on-background mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              handshake
            </span>
            Tjenester
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PriceCard service="Navnekors" price="850,-*" />
            <PriceCard
              service="Nedlegg/stell i kiste v/dødsfall på Haukeland"
              price="1 600,-"
            />
            <PriceCard
              service="Hygieneartikler v/nedlegg og stell"
              price="550,-"
            />
            <PriceCard
              service="Svøpning/andakt dag/kveld"
              price="2 950,- / 4 950,-"
            />
            <PriceCard
              service="Bårebil ved henting innad i kommunen"
              price="1 950,-"
            />
            <PriceCard service="Assistent pr. time" price="990,-" />
            <PriceCard
              service="Henting av avdøde innad i kommunen"
              price="3 950,-"
            />
            <PriceCard
              service="Ekstra ved henting utenfor kommunen, bårebil pr. km"
              price="39,-"
            />
            <PriceCard
              service="Solister, sang og instrumental"
              price="Fra 3 000,- til 5 500,-*"
            />
            <PriceCard
              service="Byråets honorar ved full tilrettelegging"
              price="3 990,-"
            />
            <PriceCard
              service="Byråets honorar, ingen seremoni"
              price="2 050,-"
            />
            <PriceCard
              service="Administrasjonskostnader"
              price="1 250,-*"
            />
            <PriceCard
              service="Assistenter ved seremonidagen"
              price="5 950,-"
            />
            <PriceCard
              service="Pynt og nødvendig utstyr ved seremonien"
              price="690,-*"
            />
            <PriceCard
              service="Dødsannonser"
              price="Etter regning fra den enkelte avis"
            />
            <PriceCard
              service="Kistedekorasjon u/sløyfe"
              price="Fra 2 500,- til 4 500,-"
            />
            <PriceCard
              service="Fylt hjerte til å henge på kisten m/sløyfe"
              price="2 800,-"
            />
          </div>
        </div>

        {/* Programhefter */}
        <div className="mb-12">
          <h3 className="font-headline text-xl text-on-background mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              menu_book
            </span>
            Programhefter
          </h3>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Antall
                    </th>
                    <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Pris
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    ["25 stk", "2 250,-*"],
                    ["50 stk", "2 450,-*"],
                    ["75 stk", "2 650,-*"],
                    ["100 stk", "2 850,-*"],
                    ["125 stk", "3 050,-*"],
                    ["150 stk", "3 250,-*"],
                    ["175 stk", "3 450,-*"],
                    ["200 stk", "3 650,-*"],
                    ["225 stk", "3 850,-*"],
                    ["250 stk", "4 050,-*"],
                    ["275 stk", "4 250,-*"],
                    ["300 stk", "4 450,-*"],
                  ].map(([qty, price]) => (
                    <tr key={qty} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-3 text-sm text-on-background">
                        {qty}
                      </td>
                      <td className="px-6 py-3 text-sm text-right text-primary font-medium">
                        {price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-surface-container-low/50 text-xs text-on-surface-variant">
              Program over 300 stk: kr 250,- pr. økte 25
            </div>
          </div>
        </div>

        {/* Kister */}
        <div className="mb-12">
          <h3 className="font-headline text-xl text-on-background mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              deployed_code
            </span>
            Kister
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PriceCard
              service="Klassisk hvit kiste m/profiler inkl. svøp"
              price="9 490,-"
            />
            <PriceCard
              service="Klassisk hvit kiste m/profiler inkl. svøp XB"
              price="11 475,-"
            />
            <PriceCard
              service="Klassisk hvit kiste m/profiler inkl. svøp XL"
              price="11 590,-"
            />
            <PriceCard
              service="Klassisk hvit kiste m/profiler inkl. svøp XL+XB"
              price="11 590,-"
            />
            <PriceCard
              service="Enkel hvit kiste u/profiler inkl. svøp"
              price="8 650,-"
            />
            <PriceCard
              service="Hvit kiste med ornament inkl. svøp"
              price="12 620,-"
            />
            <PriceCard
              service="Klassisk kiste m/profiler inkl. svøp, sort"
              price="13 165,-"
            />
            <PriceCard
              service="Kiste maritim, blå med kompassrose, inkl. svøp"
              price="12 850,-"
            />
            <PriceCard
              service="Klarlakkert kiste m/profiler inkl. svøp"
              price="9 470,-"
            />
            <PriceCard
              service="Klarlakkert kiste m/profiler inkl. svøp XB"
              price="11 660,-"
            />
            <PriceCard
              service="Klarlakkert kiste m/profiler inkl. svøp XL"
              price="11 670,-"
            />
            <PriceCard
              service="Kiste kun kremasjon, umalt spon"
              price="6 450,-"
            />
            <PriceCard
              service="Barnekiste fra 40cm til 170cm"
              price="Fra 4 265,- til 7 850,-"
            />
          </div>
          <p className="text-xs text-on-surface-variant mt-4">
            Ved dødsfall på Haukeland kommer det et tillegg på kr 250,- på
            kistene.
          </p>
        </div>
      </section>

      {/* NAV */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="bg-primary text-on-primary rounded-xl p-10 md:p-12">
          <h2 className="font-headline text-3xl mb-6">NAV-stønader</h2>
          <p className="text-on-primary/80 mb-8 max-w-2xl">
            Det finnes støtteordninger fra NAV som kan dekke deler av
            gravferdskostnadene. Vi er behjelpelige med søknader.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-on-primary/10 rounded-xl p-6">
              <h3 className="font-bold mb-2">
                Behovsprøvd gravferdsstønad
              </h3>
              <p className="text-on-primary/80 text-sm mb-3">
                Hvis avdøde var ubemidlet, formue kr 0,- på siste ligning.
              </p>
              <span className="font-headline text-2xl font-bold">
                Inntil kr 30 898,-
              </span>
            </div>
            <div className="bg-on-primary/10 rounded-xl p-6">
              <h3 className="font-bold mb-2">Transportrefusjon</h3>
              <p className="text-on-primary/80 text-sm mb-3">
                Hvis avstanden mellom dødssted og seremonisted er over 20 km, får
                man alt over kr 3 090,- (egenandel) dekket av NAV.
              </p>
              <span className="font-headline text-2xl font-bold">
                Over 20 km
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PriceRow({
  service,
  min,
  max,
}: {
  service: string;
  min: string;
  max: string;
}) {
  return (
    <tr className="hover:bg-surface-container-low/50 transition-colors">
      <td className="px-6 py-4 text-sm text-on-background">{service}</td>
      <td className="px-6 py-4 text-sm text-right text-on-surface-variant whitespace-nowrap">
        {min}
      </td>
      <td className="px-6 py-4 text-sm text-right text-primary font-medium whitespace-nowrap">
        {max}
      </td>
    </tr>
  );
}

function PriceCard({
  service,
  price,
}: {
  service: string;
  price: string;
}) {
  return (
    <div className="bg-surface-container-low rounded-xl px-6 py-4 flex justify-between items-center gap-4">
      <span className="text-sm text-on-background">{service}</span>
      <span className="text-sm font-medium text-primary whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}
