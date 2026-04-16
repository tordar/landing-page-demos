import Hero from "@/components/sections/Hero";
import UspBar from "@/components/sections/UspBar";
import AccommodationCards from "@/components/sections/AccommodationCards";
import FacilitiesGrid from "@/components/sections/FacilitiesGrid";
import TestimonialCards from "@/components/sections/TestimonialCards";
import LocationPreview from "@/components/sections/LocationPreview";
import CtaBanner from "@/components/sections/CtaBanner";

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
