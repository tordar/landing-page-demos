import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutContent from "@/components/pages/AboutContent";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Bli kjend med familien bak Solvik Camping. Vi har drive campingplassen sidan 1985.",
};

export default function OmOssPage() {
  return (
    <>
      <PageHero title="Om oss" subtitle="Historia bak Solvik Camping" image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" />
      <AboutContent />
      <CtaBanner />
    </>
  );
}
