import type { Metadata } from "next";
import PageHero from "@/app/camping-demo/components/ui/PageHero";
import AccommodationDetail from "@/app/camping-demo/components/pages/AccommodationDetail";
import CtaBanner from "@/app/camping-demo/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Overnatting",
  description: "Hytter, teltplasser og bobilplasser ved Hardangerfjorden. Finn overnattingen som passer for deg.",
};

export default function OvernattingPage() {
  return (
    <>
      <PageHero title="Overnatting" subtitle="Finn overnattingen som passer for deg" image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&q=80" />
      <AccommodationDetail />
      <CtaBanner />
    </>
  );
}
