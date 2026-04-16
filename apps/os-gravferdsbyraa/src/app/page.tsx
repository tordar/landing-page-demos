import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[870px] w-full flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent z-10" />
          <img
            alt="Stille norsk fjord ved soloppgang"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ5kPr-_FfFKEzTzUPEK29-0om2_KjjgdR4mP3cldiecG_a3zJ_tnhjmlvb8p6cssLEETvyn9LGFAyMOrbhzMfugzt-ZyOMNpSmFrJUEVbtPkWRMelsEAw10DcxQyHUJUBFL2vHk1XcqaYBrHB8aFm1Jc8ADvLgY_ClFcMdSspSSWPYX1qLZXLIoOJNSoimquQ39ffFgQ4KLVIR1eBontD98EkzH0OmkcTHCtsNtH0gZqyKEdm26vv-fwEKn8AIVguj0GXrTUMK7NQ"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-6 font-semibold">
              Velkommen
            </span>
            <h1 className="font-headline text-5xl md:text-7xl leading-tight text-on-background mb-8">
              Det lille byrået med{" "}
              <span className="italic text-primary">det store hjertet</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-10 max-w-lg">
              Vi er her for å bistå deg med verdighet, omtanke og
              profesjonalitet i en vanskelig tid.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ved-dodsfall/praktisk-info"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Våre tjenester
              </Link>
              <Link
                href="/kontakt"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-medium hover:bg-surface-container transition-colors"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Quick Links */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-headline text-3xl md:text-4xl text-on-background mb-8">
                Omsorg i alle ledd
              </h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-light">
                <p>
                  Ved Os Gravferdsbyrå forstår vi at tapet av en kjær er en av
                  livets mest utfordrende stunder. Vi er et lokalt eid byrå som
                  legger stor vekt på personlig oppfølging og tilrettelegging.
                </p>
                <p>
                  Vårt mål er å skape en avskjed som reflekterer den avdødes liv
                  og gir de etterlatte en minneverdig og god ramme for sorgen. Vi
                  hjelper til med alt fra praktiske gjøremål til seremonielle
                  detaljer.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <QuickLink icon="local_florist" label="Bestill blomster" />
              <QuickLink icon="newspaper" label="Dødsannonser" />
              <QuickLink icon="church" label="Våre minnesider" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl mb-4">Vi bistår med</h2>
            <div className="w-16 h-1 bg-primary-container mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="partner_exchange"
              title="Samtale og planlegging"
              description="Vi kommer gjerne på hjemmebesøk for å planlegge gravferden i trygge omgivelser."
            />
            <ServiceCard
              icon="content_paste"
              title="Det praktiske"
              description="Melding til myndigheter, bestilling av solist, trykking av program og alt annet nødvendig."
            />
            <ServiceCard
              icon="edit_calendar"
              title="Minnesamvær"
              description="Vi kan formidle lokaler og bevertning for en verdig avslutning på dagen."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function QuickLink({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="bg-surface-container rounded-xl p-8 hover:bg-surface-container-high transition-all cursor-pointer group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            {icon}
          </span>
          <span className="text-xl font-medium">{label}</span>
        </div>
        <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
          arrow_forward
        </span>
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-10 bg-surface-container-lowest rounded-xl text-center flex flex-col items-center">
      <span className="material-symbols-outlined text-4xl text-primary mb-6">
        {icon}
      </span>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-on-surface-variant font-light">{description}</p>
    </div>
  );
}
