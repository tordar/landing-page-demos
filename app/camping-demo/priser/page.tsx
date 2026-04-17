import type { Metadata } from "next";
import PageHero from "@/app/camping-demo/components/ui/PageHero";
import PricingTable from "@/app/camping-demo/components/pages/PricingTable";
import CtaBanner from "@/app/camping-demo/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Priser",
  description: "Prisar for hytter, teltplassar og bobilplassar ved Solvik Camping.",
};

export default function PriserPage() {
  return (
    <>
      <PageHero title="Priser" subtitle="Oversikt over prisar og sesongvariasjoner" image="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1600&q=80" />
      <PricingTable />
      <CtaBanner />
    </>
  );
}
