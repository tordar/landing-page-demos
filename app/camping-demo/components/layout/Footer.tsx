import Link from "next/link";
import { siteData } from "@/app/camping-demo/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#1a202c] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            {siteData.name}
          </h3>
          <p className="text-sm leading-relaxed">
            {siteData.contact.address}
          </p>
          <p className="text-sm mt-1">Sesong: {siteData.contact.season}</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Kontakt</h3>
          <p className="text-sm">
            <a href={`mailto:${siteData.contact.email}`} className="hover:text-white transition-colors">
              {siteData.contact.email}
            </a>
          </p>
          <p className="text-sm mt-1">
            <a href={`tel:${siteData.contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
              {siteData.contact.phone}
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Følg oss</h3>
          <div className="flex gap-4 text-sm">
            {siteData.social.facebook && (
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            )}
            {siteData.social.instagram && (
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        © {new Date().getFullYear()} {siteData.name}. Alle rettigheter reservert.
      </div>
    </footer>
  );
}
