import { defineField, defineType } from "sanity";

export const contactSchema = defineType({
  name: "contact",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Adresse",
      type: "text",
      description: "Full adresse (brukes også for kart)",
      rows: 2,
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-post",
      type: "string",
    }),
    defineField({
      name: "openingHours",
      title: "Åpningstider",
      type: "text",
      description: "F.eks. Man–Fre 08–16",
      rows: 4,
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps embed-URL",
      type: "url",
      description: "Lim inn embed-URL fra Google Maps (Del → Bygg en kart – iframe src)",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Kontakt" };
    },
  },
});
