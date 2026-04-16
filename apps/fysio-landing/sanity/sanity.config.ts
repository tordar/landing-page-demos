import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";

// Vite (Sanity Studio) only exposes VITE_* to the client; use fallback or set in sanity/.env
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.VITE_SANITY_PROJECT_ID ??
  "3xe7r0vl";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  process.env.VITE_SANITY_DATASET ??
  "production";

export default defineConfig({
  name: "fysio-landing",
  title: "Fysio Landing",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
  schema: {
    types: schemaTypes,
  },
});
