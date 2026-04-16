import { ServiceCard } from "@/components/sections/service-card";

const services = [
  {
    title: "Næring og offentlig",
    description: "HGN elektro tilbyr alle elektrotjenester til næring- og offentlig sektor. Vi har en bred erfaringshistorikk innenfor hoteller, kontor, industri, skoler og butikker. Sammen med våre leverandører og samarbeidspartnere, skreddersyr vi løsninger etter ditt ønske.",
    image: "/images/services/naering-offentlig.jpeg",
    href: "/tjenester/naering-offentlig"
  },
  {
    title: "Privat",
    description: "Vi tilbyr både service og nyinstallasjon til privatkunder i både nye og gamle hjem. Vi er også oppdatert på det siste innen elbil-lading, enøktiltak, smarthusløsninger, og trender innen belysning.",
    image: "/images/services/privat.jpeg",
    href: "/tjenester/privat"
  },
  {
    title: "Smarthus",
    description: "Et smarthussystem kan hjelpe deg i hverdagen, og gi deg praktisk informasjon om elforbruk og tilstandsstatus. Vi kan finne løsningen som passer for deg og dine behov, slik at smarthussystemet gir deg den utnyttelsen du forventer.",
    image: "/images/services/smarthus.jpeg",
    href: "/tjenester/smarthus"
  },
  {
    title: "Brannalarm",
    description: "Vi installerer og vedlikeholder brannalarmsystemer for både private boliger og kommersielle bygninger. Fra enkle røykdetektorer til avanserte brannvarslingsanlegg som oppfyller alle sikkerhetskrav og forskrifter.",
    image: "/images/services/brannalarm.jpeg",
    href: "/tjenester/brannalarm"
  },
  {
    title: "Belysning",
    description: "Fra funksjonell arbeidsbelysning til stemningsskapende løsninger. Vi designer og installerer moderne belysningssystemer som kombinerer estetikk, funksjonalitet og energieffektivitet.",
    image: "/images/services/belysning.jpeg",
    href: "/tjenester/belysning"
  }
];

export default function TjenesterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Våre tjenester</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          HGN Elektro tilbyr et komplett spekter av elektrotjenester for både private og kommersielle kunder. 
          Med vår erfaring og ekspertise leverer vi kvalitetsløsninger tilpasset dine behov.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            href={service.href}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Trenger du hjelp med et elektroarbeid?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Kontakt oss for en uforpliktende samtale om ditt prosjekt. Vi gir deg råd og veiledning 
          basert på vår lange erfaring innen elektrofaget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/kontakt-oss"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Kontakt oss
          </a>
          <a
            href="tel:22120003"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Ring 22 12 00 03
          </a>
        </div>
      </div>
    </div>
  );
} 