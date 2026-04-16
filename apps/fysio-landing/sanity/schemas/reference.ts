import { defineField, defineType } from "sanity";

export const referenceSchema = defineType({
  name: "testimonial",
  title: "Referanse",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Sitat",
      type: "text",
      validation: (Rule) => Rule.required(),
      rows: 4,
    }),
    defineField({
      name: "authorName",
      title: "Forfatter / pasient (navn)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorRole",
      title: "Rolle (valgfritt)",
      type: "string",
      description: "F.eks. «Pasient», «Idrettsutøver»",
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "Lavere tall vises først",
    }),
  ],
  orderings: [
    {
      title: "Rekkefølge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Nyeste først",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { authorName: "authorName", quote: "quote" },
    prepare({ authorName, quote }) {
      return {
        title: authorName || "Referanse",
        subtitle: quote ? quote.slice(0, 50) + "…" : undefined,
      };
    },
  },
});
