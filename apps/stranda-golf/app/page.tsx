import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SpecialOffer from "@/components/SpecialOffer";
import WhyStranda from "@/components/WhyStranda";
import Membership from "@/components/Membership";
import VeienTilGolf from "@/components/VeienTilGolf";
import Simulators from "@/components/Simulators";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
