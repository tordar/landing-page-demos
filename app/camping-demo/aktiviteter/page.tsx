import type { Metadata } from "next";
import PageHero from "@/app/camping-demo/components/ui/PageHero";
import ActivitiesDetail from "@/app/camping-demo/components/pages/ActivitiesDetail";
import CtaBanner from "@/app/camping-demo/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Aktiviteter",
  description: "Fiske, fjellvandring, kajakk og meir. Oppdag aktivitetane ved Solvik Camping.",
};

export default function AktiviteterPage() {
  return (
    <>
      <PageHero title="Aktiviteter" subtitle="Opplevingar for heile familien" image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80" />
      <ActivitiesDetail />
      <CtaBanner />
    </>
  );
}
