import Link from "next/link";
import { siteData } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FacilitiesGrid() {
  const previewFacilities = siteData.facilities.slice(0, 8);

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading label="Fasiliteter" title="Alt du trenger på ett sted" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewFacilities.map((fac) => (
            <div
              key={fac.name}
              className="text-center p-6 bg-white rounded-xl"
            >
              <div className="text-3xl mb-2">{fac.icon}</div>
              <h3 className="font-semibold text-primary text-sm">
                {fac.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/fasiliteter"
            className="text-secondary font-semibold hover:underline"
          >
            Se alle fasiliteter →
          </Link>
        </div>
      </div>
    </section>
  );
}
