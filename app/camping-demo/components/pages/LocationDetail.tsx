import { siteData } from "@/app/camping-demo/data/site";
import SectionHeading from "@/app/camping-demo/components/ui/SectionHeading";

export default function LocationDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="rounded-xl overflow-hidden h-96 mb-12">
        <iframe src={siteData.location.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kart til campingplassen" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionHeading label="Veibeskrivelse" title="Slik kjem du deg hit" className="text-left" />
          <p className="text-gray-600 leading-relaxed mb-6">{siteData.location.directions}</p>
          {siteData.location.travelTimes && (
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Reisetid</h3>
              {siteData.location.travelTimes.map((tt) => (
                <div key={tt.from} className="flex justify-between bg-light rounded-lg p-3">
                  <span className="text-gray-600">Frå {tt.from}</span>
                  <span className="font-medium text-primary">{tt.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <SectionHeading label="I nærheten" title="Praktisk informasjon" className="text-left" />
          <div className="space-y-3">
            {siteData.location.nearby.map((place) => (
              <div key={place.name} className="flex justify-between items-center bg-light rounded-lg p-3">
                <div>
                  <p className="font-medium text-primary">{place.name}</p>
                  {place.type && <p className="text-xs text-gray-500">{place.type}</p>}
                </div>
                <span className="text-secondary font-medium text-sm">{place.distance}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-2">Adresse</h3>
            <p className="text-gray-600">{siteData.contact.address}</p>
            <p className="text-gray-600 mt-1">GPS: {siteData.location.coordinates.lat}, {siteData.location.coordinates.lng}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
