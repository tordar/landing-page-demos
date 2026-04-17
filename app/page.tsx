import Link from "next/link";

const demos = [
  { slug: "fysio-landing", industry: "Helse", name: "Fysioterapi" },
  { slug: "vhut-landing", industry: "Demo", name: "Vhut" },
  { slug: "hgn-landing", industry: "Demo", name: "HGN" },
  { slug: "advokatfirma-demo", industry: "Juss", name: "Advokatfirma" },
  { slug: "tannlege-demo", industry: "Helse", name: "Tannlege" },
  { slug: "vet-demo", industry: "Helse", name: "Veterinær" },
  { slug: "renseri-demo", industry: "Tjenester", name: "Renseri" },
  { slug: "camping-demo", industry: "Reiseliv", name: "Camping" },
  { slug: "treningssenter-demo", industry: "Helse", name: "Treningssenter" },
  { slug: "trelast-demo", industry: "Bygg", name: "Trelast" },
  { slug: "maler-demo", industry: "Håndverk", name: "Maler" },
  { slug: "idrettsanlegg-demo", industry: "Sport", name: "Idrettsanlegg" },
  { slug: "idrettslag-demo", industry: "Sport", name: "Idrettslag" },
  { slug: "trykk-demo", industry: "Media", name: "Trykk" },
  { slug: "elektro-firma", industry: "Håndverk", name: "Elektro" },
  { slug: "vvs", industry: "Håndverk", name: "VVS" },
  { slug: "stranda-golf", industry: "Sport", name: "Golf" },
  { slug: "os-gravferdsbyraa", industry: "Tjenester", name: "Gravferdsbyrå" },
];

export default function Home() {
  return (
    <main className="px-8 py-12 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-1">Landing Page Demos</h1>
        <p className="text-neutral-500">Industry-specific landing page examples.</p>
      </header>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {demos.map((demo) => (
          <Link
            key={demo.slug}
            href={`/${demo.slug}/`}
            className="block bg-white border border-neutral-200 rounded-xl p-5 pb-4 no-underline text-current hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <div className="text-[0.72rem] uppercase tracking-wider text-neutral-400 mb-1">
              {demo.industry}
            </div>
            <div className="text-base font-semibold">{demo.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
