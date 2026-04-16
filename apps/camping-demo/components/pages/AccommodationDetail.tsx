import Link from "next/link";
import { siteData } from "@/data/site";

export default function AccommodationDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {siteData.accommodations.map((acc) => (
        <section key={acc.slug} id={acc.slug} className="mb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={acc.images[0]}
                alt={acc.name}
                className="w-full h-72 object-cover rounded-xl"
                width={800}
                height={500}
              />
              {acc.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {acc.images.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${acc.name} ${i + 2}`}
                      className="w-full h-40 object-cover rounded-lg"
                      width={400}
                      height={250}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">{acc.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{acc.fullDescription}</p>
              <div className="bg-light rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-primary">Pris</p>
                    <p className="text-gray-600">Fra {acc.priceFrom} kr/{acc.priceUnit}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Kapasitet</p>
                    <p className="text-gray-600">{acc.capacity}</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-primary mb-3">Dette er inkludert</h3>
                <div className="flex flex-wrap gap-2">
                  {acc.amenities.map((a) => (
                    <span key={a} className="bg-surface text-secondary text-sm px-3 py-1 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
              <Link href="/kontakt" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Kontakt for booking →
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
