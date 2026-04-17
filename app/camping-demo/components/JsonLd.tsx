import { siteData } from "@/app/camping-demo/data/site";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Campground"],
    name: siteData.name,
    description: siteData.seo.defaultDescription,
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.contact.address,
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteData.location.coordinates.lat,
      longitude: siteData.location.coordinates.lng,
    },
    url: "https://solvikcamping.no",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: String(siteData.testimonials.length),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
