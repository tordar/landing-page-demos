import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTherapistPageData, getAllTherapistSlugs } from "@/sanity/data";
import { Header } from "@/components/Header";
import { TherapistHero } from "@/components/sections/TherapistHero";
import { TherapistAbout } from "@/components/sections/TherapistAbout";
import { References } from "@/components/sections/References";
import { Prices } from "@/components/sections/Prices";
import { Contact } from "@/components/sections/Contact";
import { BookingCta } from "@/components/sections/BookingCta";

interface TherapistPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllTherapistSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TherapistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getTherapistPageData(slug);

  if (!data.therapist) {
    return { title: "Terapeut ikke funnet" };
  }

  return {
    title: `${data.therapist.name} – ${data.therapist.title || "Terapeut"}`,
    description: data.therapist.shortBio || `Bestill time med ${data.therapist.name}`,
  };
}

export default async function TherapistPage({ params }: TherapistPageProps) {
  const { slug } = await params;
  const data = await getTherapistPageData(slug);

  if (!data.therapist) {
    notFound();
  }

  // Use therapist-specific booking URL or fallback to clinic booking
  const bookingUrl = data.therapist.bookingUrl || data.siteSettings?.bookingUrl;

  return (
    <>
      <Header siteSettings={data.siteSettings} />
      <main>
        <TherapistHero therapist={data.therapist} bookingUrl={bookingUrl} />
        <TherapistAbout therapist={data.therapist} contact={data.contact} />
        {data.references && <References references={data.references} />}
        {data.prices && <Prices prices={data.prices} />}
        {data.contact && (
          <Contact
            contact={data.contact}
            therapist={data.therapist}
            siteTitle={data.siteSettings?.siteTitle}
          />
        )}
        {bookingUrl && <BookingCta siteSettings={{ ...data.siteSettings, bookingUrl }} />}
      </main>
    </>
  );
}
