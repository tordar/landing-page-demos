"use client";

import { useState } from "react";
import { siteData } from "@/data/site";
import ImageLightbox from "@/components/ui/ImageLightbox";

const categories = ["alle", "hytter", "natur", "fasiliteter", "aktiviteter"] as const;
const categoryLabels: Record<string, string> = {
  alle: "Alle",
  hytter: "Hytter",
  natur: "Natur",
  fasiliteter: "Fasiliteter",
  aktiviteter: "Aktiviteter",
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "alle"
    ? siteData.gallery
    : siteData.gallery.filter((img) => img.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat ? "bg-secondary text-white" : "bg-light text-gray-600 hover:bg-gray-200"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img, i) => (
          <button key={img.src} onClick={() => setLightboxIndex(i)} className="overflow-hidden rounded-lg aspect-square">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" width={400} height={400} loading="lazy" />
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <ImageLightbox
          src={filtered[lightboxIndex].src}
          alt={filtered[lightboxIndex].alt}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
        />
      )}
    </div>
  );
}
