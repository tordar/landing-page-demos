import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(
  source: { _type?: string; asset?: { _ref?: string } } | null | undefined
) {
  if (!source) return null;
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
