import Link from "next/link";
import { siteData } from "@/app/camping-demo/data/site";
import SectionHeading from "@/app/camping-demo/components/ui/SectionHeading";

export default function LocationPreview() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading label="Beliggenhet" title="Finn oss" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              📍 {siteData.contact.address}
            </p>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              {siteData.location.nearby.slice(0, 4).map((place) => (
                <li key={place.name}>
                  🚗 {place.name} — {place.distance}
                </li>
              ))}
            </ul>
            <Link
              href="/beliggenhet"
              className="text-secondary font-semibold hover:underline"
            >
              Se veibeskrivelse →
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden h-64">
            <iframe
              src={siteData.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kart til campingplassen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
