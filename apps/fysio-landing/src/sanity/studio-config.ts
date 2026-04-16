import type { SchemaTypeDefinition } from "sanity";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../../sanity/schemas";

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
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
});
