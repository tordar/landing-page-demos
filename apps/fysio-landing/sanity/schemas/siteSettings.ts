import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Innstillinger",
  type: "document",
  fields: [
    defineField({
      name: "yrke",
      title: "Yrke",
      type: "string",
      description: "Vises over sidetittel i hero (f.eks. Fysioterapeut, Kiropraktor)",
    }),
    defineField({
      name: "siteTitle",
      title: "Sidetittel",
      type: "string",
      description: "Vises i hero og fanetittel",
    }),
    defineField({
      name: "tagline",
      title: "Tagline / underoverskrift",
      type: "string",
      description: "Kort slagord under overskriften",
    }),
    defineField({
      name: "bookingUrl",
      title: "Bestill time – URL",
      type: "url",
      description: "Lenke til bestillingssystem (åpnes i ny fane)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bookingLabel",
      title: "Tekst på bestill-knapp",
      type: "string",
      initialValue: "Bestill time",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Innstillinger" };
    },
  },
});
