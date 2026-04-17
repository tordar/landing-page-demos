import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praktisk info | Os Gravferdsbyrå AS",
  description:
    "Praktisk informasjon om hva som skjer ved et dødsfall og hvordan vi kan hjelpe deg.",
};

export default function PraktiskInfoPage() {
  return (
    <div className="pt-8 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block font-semibold">
              Praktisk Informasjon
            </span>
            <h1 className="font-headline text-5xl md:text-6xl text-on-background leading-tight mb-6">
              Første steg i en vanskelig tid
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-lg">
              Når et dødsfall inntreffer, er det mange spørsmål som melder seg.
              Vi er her for å veilede deg gjennom hvert steg med ro og respekt.
            </p>
            <div className="flex items-center gap-4 text-tertiary">
              <span className="material-symbols-outlined text-3xl">
                favorite
              </span>
              <span className="font-medium italic">
                Vi hjelper med alt som trengs
              </span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Rolig norsk natur med vann og fjell"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx0OrLPliHrrORszPu9S7KWg6Q_9uUf3pZZNoyATfzMC-HVy-8Uf7Kq1jJOiWTZBhPoxXg0hny5Pr_t7HjRp0toHw4MdYHeNpQNmC-ItdbeuElnJQ7BBNiHsuK__Z3FRgxUQ-vhT6TShmv01puZ2WjNa3wnXexJkUvWLzYyD2CDXOEsv4bTQmPN2g-QG0JkZuawBx_i5nd9dWuYldRYOF1vygp9LU3U_fMQHo-aDnbreG2mFdbNinvN-yCFAlFU3ulHiPYjad11HVz"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Melding om dødsfall"
              description="Dersom dødsfallet skjer i hjemmet, må lege kontaktes først. Ved institusjon sørger personalet for det praktiske rundt legeerklæring."
            />
            <StepCard
              number="02"
              title="Samtale med oss"
              description="Vi avtaler et møte, enten hos oss eller hjemme hos deg, for å planlegge begravelsen og avklare dine ønsker."
            />
            <StepCard
              number="03"
              title="Praktisk gjennomføring"
              description="Vi tar hånd om transport, stell av avdøde, kontakt med kirke eller livssynssamfunn, og alle nødvendige dokumenter."
            />
          </div>
        </div>
      </section>

      {/* Checklist Bento */}
      <section className="max-w-7xl mx-auto px-8 mt-24">
        <h2 className="font-headline text-3xl mb-12 text-center">
          Sjekkliste for pårørende
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Gravferdsform */}
          <div className="md:col-span-7 bg-surface-container p-10 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              gavel
            </span>
            <h3 className="font-headline text-2xl mb-4">Gravferdsform</h3>
            <p className="text-on-surface-variant mb-6 max-w-md">
              Valget mellom kistebegravelse eller kremasjon er ofte basert på
              avdødes egne ønsker eller familiens tradisjoner.
            </p>
            <ul className="space-y-3">
              <CheckItem label="Kistebegravelse med jordfestelse" />
              <CheckItem label="Bisettelse med kremasjon" />
              <CheckItem label="Askespredning (krever tillatelse)" />
            </ul>
          </div>

          {/* Dødsannonse */}
          <div className="md:col-span-5 bg-surface-container-highest p-10 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              description
            </span>
            <h3 className="font-headline text-2xl mb-4">Dødsannonse</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Vi hjelper med utforming og bestilling av annonse i ønskede aviser
              og på våre minnesider.
            </p>
            <div className="border-l-2 border-primary/30 pl-4 py-2 italic text-sm text-on-surface-variant">
              &ldquo;En verdig kunngjøring for å hedre et levd liv.&rdquo;
            </div>
          </div>

          {/* Musikk */}
          <div className="md:col-span-5 bg-surface-container-low p-10 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              library_music
            </span>
            <h3 className="font-headline text-2xl mb-4">Musikk og salmer</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Tonene i seremonien skaper en atmosfære for refleksjon og minner.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Organist", "Solister", "Fellessalmer", "CD/Streaming"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/50 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Seremoni */}
          <div className="md:col-span-7 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                church
              </span>
              <h3 className="font-headline text-2xl mb-4">
                Seremoni og syning
              </h3>
              <p className="text-on-surface-variant mb-6">
                Det er viktig å få tatt et verdig farvel. Vi tilrettelegger for
                visning (syning) og valg av seremonirom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/30 p-4 rounded-lg">
                <span className="text-xs font-bold block mb-1">Syning</span>
                <span className="text-xs opacity-70">
                  En rolig stund ved kisten før seremonien.
                </span>
              </div>
              <div className="bg-white/30 p-4 rounded-lg">
                <span className="text-xs font-bold block mb-1">
                  Minnesamvær
                </span>
                <span className="text-xs opacity-70">
                  Vi kan bistå med lokaler og servering.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 mt-32 text-center">
        <div className="bg-primary text-on-primary p-12 rounded-[2rem] overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-headline text-3xl mb-6">
              Trenger du veiledning nå?
            </h3>
            <p className="mb-8 text-primary-fixed-dim max-w-md mx-auto">
              Vår vakttelefon er bemannet hele døgnet, alle dager i året. Vi er
              her for deg.
            </p>
            <a
              href="tel:56574950"
              className="inline-flex items-center gap-3 bg-surface text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">call</span>
              Ring 56 57 49 50
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-8 rounded-xl flex flex-col gap-4">
      <span className="text-primary-container font-headline text-4xl">
        {number}
      </span>
      <h3 className="font-headline text-xl text-on-background">{title}</h3>
      <p className="text-sm leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-sm">
        check_circle
      </span>
      <span className="text-sm">{label}</span>
    </li>
  );
}
