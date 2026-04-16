import Link from "next/link";
import { siteData } from "@/data/site";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 text-center text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Klar for ein uforglemmelig ferie?
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Ta kontakt i dag for å sikre deg plass på {siteData.name}
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
        >
          Kontakt oss →
        </Link>
      </div>
    </section>
  );
}
