import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/pages/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt med Solvik Camping. Send melding, ring oss eller sjå ofte stilte spørsmål.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontakt oss" subtitle="Vi hjelper deg gjerne" image="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=1600&q=80" />
      <ContactForm />
    </>
  );
}
