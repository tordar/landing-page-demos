import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FacilitiesDetail from "@/components/pages/FacilitiesDetail";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Fasiliteter",
  description: "Sanitæranlegg, kjøkken, lekeplass, WiFi og meir. Sjå kva fasiliteter vi tilbyr.",
};

export default function FasiliteterPage() {
  return (
    <>
      <PageHero title="Fasiliteter" subtitle="Alt du trenger for eit komfortabelt opphald" image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80" />
      <FacilitiesDetail />
      <CtaBanner />
    </>
  );
}
