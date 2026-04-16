import type { Metadata } from "next";
import { getLandingData } from "@/sanity/data";
import { Header } from "@/components/Header";
import { ClinicHero } from "@/components/sections/ClinicHero";
import { About } from "@/components/sections/About";
import { TeamSection } from "@/components/sections/TeamSection";
import { References } from "@/components/sections/References";
import { Prices } from "@/components/sections/Prices";
import { Contact } from "@/components/sections/Contact";
import { BookingCta } from "@/components/sections/BookingCta";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLandingData();
  const title = data.siteSettings?.siteTitle || "Praksis";
  const description =
    data.siteSettings?.tagline ||
    "Profesjonell fysioterapi og behandling. Møt vårt team og bestill time.";
  return {
    title: `${title} – Fysioterapi og kiropraktikk`,
    description,
  };
}

export default async function Home() {
  const data = await getLandingData();

  return (
    <>
      <Header siteSettings={data.siteSettings} />
      <main>
        <ClinicHero siteSettings={data.siteSettings} />
        <About person={data.person} />
        <TeamSection therapists={data.therapists} />
        <References references={data.references} />
        <Prices prices={data.prices} />
        <Contact contact={data.contact} siteTitle={data.siteSettings?.siteTitle} />
        <BookingCta siteSettings={data.siteSettings} />
      </main>
    </>
  );
}
