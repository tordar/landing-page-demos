import Hero from "@/app/camping-demo/components/sections/Hero";
import UspBar from "@/app/camping-demo/components/sections/UspBar";
import AccommodationCards from "@/app/camping-demo/components/sections/AccommodationCards";
import FacilitiesGrid from "@/app/camping-demo/components/sections/FacilitiesGrid";
import TestimonialCards from "@/app/camping-demo/components/sections/TestimonialCards";
import LocationPreview from "@/app/camping-demo/components/sections/LocationPreview";
import CtaBanner from "@/app/camping-demo/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <UspBar />
      <AccommodationCards />
      <FacilitiesGrid />
      <TestimonialCards />
      <LocationPreview />
      <CtaBanner />
    </>
  );
}
