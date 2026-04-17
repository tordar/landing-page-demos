import { siteData } from "@/app/camping-demo/data/site";
import SectionHeading from "@/app/camping-demo/components/ui/SectionHeading";

export default function ActivitiesDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {siteData.activities.map((act) => (
          <div key={act.name} className="rounded-xl overflow-hidden border border-gray-200">
            <img src={act.image} alt={act.name} className="w-full h-56 object-cover" width={600} height={350} loading="lazy" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary mb-2">{act.name}</h2>
              <p className="text-gray-600 mb-4">{act.description}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                {act.season && <span>📅 {act.season}</span>}
                {act.ageGroup && <span>👤 {act.ageGroup}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      {siteData.nearbyAttractions.length > 0 && (
        <>
          <SectionHeading label="I nærheten" title="Opplevingar i området" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.nearbyAttractions.map((att) => (
              <div key={att.name} className="bg-light rounded-xl overflow-hidden">
                {att.image && (
                  <img src={att.image} alt={att.name} className="w-full h-40 object-cover" width={400} height={250} loading="lazy" />
                )}
                <div className="p-5">
                  <h3 className="font-bold text-primary mb-1">{att.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{att.description}</p>
                  <p className="text-sm text-secondary font-medium">📍 {att.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
