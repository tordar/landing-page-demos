import Link from "next/link";
import { siteData } from "@/app/camping-demo/data/site";
import SectionHeading from "@/app/camping-demo/components/ui/SectionHeading";

export default function AccommodationCards() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading label="Overnatting" title="Velg det som passer deg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.accommodations.map((acc) => (
            <Link
              key={acc.slug}
              href={`/overnatting#${acc.slug}`}
              className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={acc.images[0]}
                  alt={acc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {acc.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {acc.shortDescription}
                </p>
                <p className="text-secondary font-bold">
                  Fra {acc.priceFrom} kr/{acc.priceUnit} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
