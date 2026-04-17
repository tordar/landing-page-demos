import { siteData } from "@/app/camping-demo/data/site";

export default function FacilitiesDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteData.facilities.map((fac) => (
          <div key={fac.name} className="bg-light rounded-xl overflow-hidden">
            {fac.image && (
              <img src={fac.image} alt={fac.name} className="w-full h-48 object-cover" width={600} height={300} loading="lazy" />
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{fac.icon}</span>
                <h2 className="text-xl font-bold text-primary">{fac.name}</h2>
              </div>
              <p className="text-gray-600 mb-2">{fac.description}</p>
              {fac.details && <p className="text-sm text-gray-500">{fac.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
