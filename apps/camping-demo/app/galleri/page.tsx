import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/pages/GalleryGrid";

export const metadata: Metadata = {
  title: "Galleri",
  description: "Bilete frå Solvik Camping — hytter, natur, aktivitetar og meir.",
};

export default function GalleriPage() {
  return (
    <>
      <PageHero title="Galleri" subtitle="Sjå korleis det er hos oss" image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&q=80" />
      <GalleryGrid />
    </>
  );
}
