import Link from "next/link";
import { siteData } from "@/app/camping-demo/data/site";
import SectionHeading from "@/app/camping-demo/components/ui/SectionHeading";

export default function PricingTable() {
  const { seasons, items, extras } = siteData.pricing;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="overflow-x-auto mb-16">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-primary text-white rounded-tl-xl font-semibold">Type</th>
              {seasons.map((s) => (
                <th key={s} className="p-4 bg-primary text-white font-semibold text-center last:rounded-tr-xl whitespace-pre-line">{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item.name} className={i % 2 === 0 ? "bg-light" : "bg-white"}>
                <td className="p-4 font-medium text-primary">{item.name}</td>
                {item.prices.map((price, j) => (
                  <td key={j} className="p-4 text-center text-gray-700">{price} kr</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SectionHeading label="Tillegg" title="Tilleggstjenester" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {extras.map((extra) => (
          <div key={extra.name} className="flex justify-between items-center bg-light rounded-lg p-4">
            <span className="text-primary font-medium">{extra.name}</span>
            <span className="text-secondary font-bold">{extra.price}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-4">Prisane inkluderer ikkje straum med mindre anna er oppgitt.</p>
        <Link href="/kontakt" className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
          Kontakt for booking →
        </Link>
      </div>
    </div>
  );
}
