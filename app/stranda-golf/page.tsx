import Nav from "@/app/stranda-golf/components/Nav";
import Hero from "@/app/stranda-golf/components/Hero";
import SpecialOffer from "@/app/stranda-golf/components/SpecialOffer";
import WhyStranda from "@/app/stranda-golf/components/WhyStranda";
import Membership from "@/app/stranda-golf/components/Membership";
import VeienTilGolf from "@/app/stranda-golf/components/VeienTilGolf";
import Simulators from "@/app/stranda-golf/components/Simulators";
import Testimonials from "@/app/stranda-golf/components/Testimonials";
import Contact from "@/app/stranda-golf/components/Contact";
import Footer from "@/app/stranda-golf/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SpecialOffer />
        <WhyStranda />
        <Membership />
        <VeienTilGolf />
        <Simulators />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
