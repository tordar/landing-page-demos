import type { LandingData, TherapistPageData } from "./types";
import { client } from "./client";
import {
  siteSettingsQuery,
  personQuery,
  allTherapistsQuery,
  therapistBySlugQuery,
  referencesQuery,
  pricesQuery,
  contactQuery,
} from "./queries";

// Short revalidate in dev so Studio changes show quickly
const revalidate =
  process.env.NODE_ENV === "development" ? 10 : 60;

const emptyLandingData: LandingData = {
  siteSettings: null,
  person: null,
  therapists: null,
  references: null,
  prices: null,
  contact: null,
};

function isSanityConfigured() {
  const id =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3xe7r0vl";
  return !!id && id !== "your-project-id";
}

export async function getLandingData(): Promise<LandingData> {
  if (!isSanityConfigured()) {
    return emptyLandingData;
  }
  const [siteSettings, person, therapists, references, prices, contact] = await Promise.all([
    client.fetch(siteSettingsQuery, {}, { next: { revalidate } }),
    client.fetch(personQuery, {}, { next: { revalidate } }),
    client.fetch(allTherapistsQuery, {}, { next: { revalidate } }),
    client.fetch(referencesQuery, {}, { next: { revalidate } }),
    client.fetch(pricesQuery, {}, { next: { revalidate } }),
    client.fetch(contactQuery, {}, { next: { revalidate } }),
  ]);
  return { siteSettings, person, therapists, references, prices, contact };
}

export async function getTherapistPageData(slug: string): Promise<TherapistPageData> {
  if (!isSanityConfigured()) {
    return {
      siteSettings: null,
      therapist: null,
      references: null,
      prices: null,
      contact: null,
    };
  }

  const [siteSettings, therapist, references, prices, contact] = await Promise.all([
    client.fetch(siteSettingsQuery, {}, { next: { revalidate } }),
    client.fetch(therapistBySlugQuery, { slug }, { next: { revalidate } }),
    client.fetch(referencesQuery, {}, { next: { revalidate } }),
    client.fetch(pricesQuery, {}, { next: { revalidate } }),
    client.fetch(contactQuery, {}, { next: { revalidate } }),
  ]);

  return { siteSettings, therapist, references, prices, contact };
}

export async function getAllTherapistSlugs(): Promise<string[]> {
  if (!isSanityConfigured()) return [];

  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "therapist" && defined(slug.current) && isActive == true]{ "slug": slug.current }`,
    {},
    { next: { revalidate } }
  );

  return slugs.map((s) => s.slug);
}
