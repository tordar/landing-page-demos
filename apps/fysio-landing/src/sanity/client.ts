import { createClient } from "next-sanity";

// Use same fallback as sanity.config.ts so frontend matches Studio when .env isn’t loaded
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3xe7r0vl";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
