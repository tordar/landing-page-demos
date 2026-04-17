import Link from "next/link";
import { siteData } from "@/app/camping-demo/data/site";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        alt={`Velkommen til ${siteData.name}`}
        className="absolute inset-0 w-full h-full object-cover"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/40" />
      <div className="relative text-center text-white px-4 max-w-3xl">
        <p className="text-sm tracking-[4px] mb-3 text-blue-200 uppercase">
          Velkommen til
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          {siteData.name}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          {siteData.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/overnatting"
            className="bg-accent text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
          >
            Se overnatting
          </Link>
          <Link
            href="/kontakt"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
    </section>
  );
}
