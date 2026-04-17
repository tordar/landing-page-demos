import type { Metadata } from "next";
import ProjectCard from "@/app/elektro-firma/components/ui/ProjectCard";
import CTABanner from "@/app/elektro-firma/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Prosjekter | EL-KRAFT",
  description:
    "Se vår prosjektportefølje med tidligere arbeid innen solceller, smarthus, elbillading og industrielle installasjoner.",
};

const projects = [
  {
    image: "/images/project-solar.jpg",
    imageAlt: "Solcelleanlegg på moderne skandinavisk bolig ved solnedgang",
    category: "Energi",
    year: "2023",
    title: "Komplett solcelleanlegg på enebolig",
    description:
      "Installasjon av 24 høyeffektive paneler kombinert med et intelligent batterisystem for maksimal egenutnyttelse av strøm.",
  },
  {
    image: "/images/project-office.jpg",
    imageAlt: "Moderne kontorlandskap med sofistikert arkitektonisk belysning",
    category: "Næring",
    year: "2024",
    title: "Smart belysning i næringsbygg",
    description:
      "Totalrenovering av lysstyring i kontorlandskap. DALI-basert system med bevegelsessensorer og dagslyshøsting.",
  },
  {
    image: "/images/project-smarthome.jpg",
    imageAlt: "Elektriker arbeider med industrielt sikringsskap",
    category: "Privat",
    year: "2023",
    title: "Smarte Hjem-integrasjon i villa",
    description:
      "Full KNX-installasjon som styrer alt fra varme og ventilasjon til lydanlegg og utendørsbelysning.",
  },
];

const featuredProject = {
  image: "/images/project-ev.jpg",
  imageAlt: "Profesjonell elbillading ved bedriftsparkeringsplass",
  category: "Energi",
  year: "2024",
  title: "Elbillading for borettslag",
  description:
    "Vi prosjekterte og installerte et skalerbart ladesystem med 45 ladepunkter og avansert lastbalansering for optimal effektfordeling.",
};

const industrialProject = {
  image: "/images/project-industrial.jpg",
  imageAlt: "Industriell transformator og høyspent infrastruktur",
  category: "Næring",
  year: "2022",
  title: "Høyspentanlegg til industripark",
  description:
    "Design og utførelse av transformatorstasjon og hovedtavler for sikring av stabil kraftforsyning.",
};

export default function ProsjekterPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 pt-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Referanseprosjekter
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight font-headline">
              Prosjektportefølje - Tidligere arbeid
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex bg-surface-container-high p-1 rounded-lg">
              <button className="px-6 py-2 bg-white shadow-sm rounded-md font-bold text-secondary text-sm cursor-pointer">
                Alle
              </button>
              <button className="px-6 py-2 text-on-surface-variant font-medium text-sm hover:text-secondary cursor-pointer">
                Privat
              </button>
              <button className="px-6 py-2 text-on-surface-variant font-medium text-sm hover:text-secondary cursor-pointer">
                Næring
              </button>
              <button className="px-6 py-2 text-on-surface-variant font-medium text-sm hover:text-secondary cursor-pointer">
                Energi
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
          <ProjectCard {...featuredProject} variant="featured" />
          <ProjectCard {...industrialProject} />
        </div>
      </section>

      <CTABanner
        title="Inspirert? La oss hjelpe deg med ditt neste prosjekt."
        description="Enten det er snakk om en enkel installasjon i hjemmet eller komplekse industrielle systemer, har våre ingeniører og montører ekspertisen du trenger."
        buttonText="Bestill befaring nå"
        variant="light"
      />
    </>
  );
}
