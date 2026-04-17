import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Os Gravferdsbyrå AS",
  description:
    "Lær om Os Gravferdsbyrå - det lille byrået med det store hjertet.",
};

export default function OmOssPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Vår historie
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-light text-primary leading-tight">
            Det lille byrået med det store hjertet.
          </h1>
          <div className="h-1 w-20 bg-primary-container" />
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
            Jorunn Moberg starta byrået i 2002. Som en familiebedrift i Os har
            vi alltid prioritert det personlige møtet og den nære omsorgen i en
            vanskelig tid.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low">
            <img
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
              alt="Stille norsk fjordlandskap"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwaP4d17OjLjcOJc4HkT8UihVmPPmV7VbIJqIUOoi6XnqyNTgJf8g5JBZ4RDsyrD6wHl8x9UdKdrkhCl7tLT5RWoPI_uyMqQz9k50Qt2LFBmInBUJYUmv0YfaGrOw8ncJ6mRxqfh7Mg9_xdgUPjBfNUN-WRO9fqL1yz0I2Z9Mbs8Muu6R9EiR_vtc5aQaxstZroiRb1RihpsqWRlaqgtLDMcaad_lo8uNj0CtMnkrBeFKn-UKVfVfimfH0JGHYBBJrKW1xCj4RVSpW"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 p-8 bg-surface-container rounded-xl shadow-xl shadow-on-surface/5 max-w-xs border border-outline-variant/10">
            <p className="text-sm italic font-headline text-on-surface-variant">
              &ldquo;Vi er her for å bære byrden sammen med deg, med respekt og
              verdighet.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* History & NAV */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-12 bg-surface rounded-xl flex flex-col justify-center space-y-6">
              <h2 className="font-headline text-3xl font-light text-primary">
                Over 20 år med tillit
              </h2>
              <p className="text-on-surface-variant leading-relaxed font-light">
                Gjennom to tiår har vi bistått familier i Os og omegn med å
                skape verdige avskjeder. Vår erfaring er din trygghet når alt
                føles uoversiktlig. Vi tar hånd om alle praktiske detaljer, slik
                at dere kan fokusere på det emosjonelle.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  className="inline-flex items-center gap-2 text-primary border-b border-primary/30 hover:border-primary transition-all pb-1 font-medium text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    picture_as_pdf
                  </span>
                  Se vår prisliste (PDF)
                </a>
              </div>
            </div>

            <div className="p-10 bg-surface-container-highest rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">
                  account_balance
                </span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-primary">
                Stønad fra NAV
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Det kan i visse tilfeller søkes om behovsprøvd gravferdsstønad
                fra NAV. Vi bistår med informasjon og utfylling av nødvendige
                søknader.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest text-primary pt-2 flex items-center gap-1 group">
                Les mer
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-light text-primary">
            Våre ansatte
          </h2>
          <p className="text-on-surface-variant mt-4 font-light italic">
            Vi møter deg der du er
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <StaffProfile
            name="Agnethe Øvreeide"
            role="Daglig leder"
            email="agnethe@osgravferdsbyraa.no"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDluRjFuuG6UoRbJEDUF8sPvPS38EUhDK0e0L72_6zECGaPE-H8X7FflkgEdi-sCWU47QwzDsrguD4hVI6SBX84uv3SEOuISECn21jORM-dqgv4_uF74EVRAW4nFPg2U25hmeUrC-O5chqCqNGP2kTMgmxFdK48AyCbUuYfZEYm6KGJDVejocDbjR5TnyUZkgBG76FcnqsF-zzTb-tBYf1MyK3l-wXmzmC88C8UrzZoGkDgPajGZUFh62KVdlcTWAWOTx4nLc20gcKX"
          />
          <StaffProfile
            name="Jorunn Moberg"
            role="Gravferdskonsulent"
            email="jorunn@osgravferdsbyraa.no"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBBngMYhgGJgpPNljlVLrHwJ2dT2pzNadGIBSJdvKm0XRMedukkrfqH5I9JBa4my-sHX0PZN2u38RyhhRacks5B_wTe1NUh76gOtM1xhbISygR8EK6X-hoQBQOqpU5QNrART27AYI55r7mkAPa77O0l6YZLTqPDZLch8ttOOJeU2a5oJgg1yqX3-MwRaqUvCwg3gEfz-SiWt62UwRDGYop2eZCKK_ezUat7ScTnyPsdLqlJGyxXU9Ku2kaYohRAIKfd1bFBIEQgJ6Ub"
          />
        </div>
      </section>
    </div>
  );
}

function StaffProfile({
  name,
  role,
  email,
  imageSrc,
}: {
  name: string;
  role: string;
  email: string;
  imageSrc: string;
}) {
  return (
    <div className="group">
      <div className="aspect-square rounded-xl overflow-hidden bg-surface-container mb-8 relative">
        <img
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          alt={`Portrett av ${name}`}
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="space-y-2">
        <h3 className="font-headline text-2xl font-light">{name}</h3>
        <p className="text-xs font-bold uppercase tracking-widest text-primary opacity-70">
          {role}
        </p>
        <div className="pt-4 space-y-1">
          <a
            className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
            href={`mailto:${email}`}
          >
            <span className="material-symbols-outlined text-primary/60">
              mail
            </span>
            {email}
          </a>
          <p className="flex items-center gap-3 text-on-surface-variant text-sm">
            <span className="material-symbols-outlined text-primary/60">
              call
            </span>
            56 57 49 50
          </p>
        </div>
      </div>
    </div>
  );
}
