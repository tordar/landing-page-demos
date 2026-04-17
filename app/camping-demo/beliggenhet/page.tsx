import type { Metadata } from "next";
import PageHero from "@/app/camping-demo/components/ui/PageHero";
import LocationDetail from "@/app/camping-demo/components/pages/LocationDetail";

export const metadata: Metadata = {
  title: "Beliggenhet",
  description: "Finn Solvik Camping. Veibeskrivelse, kart og praktisk info.",
};

export default function BeliggenhetPage() {
  return (
    <>
      <PageHero title="Finn oss" subtitle="Beliggenhet og veibeskrivelse" image="https://images.unsplash.com/photo-1508189860359-777d945909ef?w=1600&q=80" />
      <LocationDetail />
    </>
  );
}
