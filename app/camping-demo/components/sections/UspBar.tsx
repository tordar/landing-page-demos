import { siteData } from "@/app/camping-demo/data/site";

export default function UspBar() {
  return (
    <section className="bg-surface py-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteData.usps.map((usp) => (
          <div key={usp.text} className="text-center text-secondary text-sm font-medium">
            <span className="mr-1">{usp.icon}</span> {usp.text}
          </div>
        ))}
      </div>
    </section>
  );
}
