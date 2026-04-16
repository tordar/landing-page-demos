import { defineField, defineType } from "sanity";

export const therapistSchema = defineType({
  name: "therapist",
  title: "Terapeut",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-vennlig navn (slug)",
      type: "slug",
      description: "Brukes i URL-en, f.eks. /terapeuter/marie-hansen",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Tittel / yrkesbetegnelse",
      type: "string",
      description: "F.eks. Fysioterapeut, Kiropraktor",
    }),
    defineField({
      name: "image",
      title: "Profilbilde",
      type: "image",
      description: "Hovedbilde som vises i hero-seksjonen",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imageRight",
      title: "Bilde til høyre",
      type: "image",
      description: "Vises til høyre for teksten i «Om»-seksjonen",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "shortBio",
      title: "Kort beskrivelse",
      type: "text",
      description: "Brukes i terapeutkort og forhåndsvisning (2-3 linjer)",
      rows: 2,
    }),
    defineField({
      name: "longBio",
      title: "Utvidet biografi",
      type: "text",
      description: "Vises i «Om»-seksjonen på terapeutens side",
      rows: 6,
    }),
    defineField({
      name: "order",
      title: "Sorteringsrekkefølge",
      type: "number",
      description: "Lavere tall vises først i teamgalleriet",
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: "specialties",
      title: "Spesialiteter",
      type: "array",
      description: "F.eks. 'Idrettsskader', 'Ryggplager', 'Rehabilitering'",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isActive",
      title: "Aktiv",
      type: "boolean",
      description: "Skjul terapeuter som ikke lenger er aktive",
      initialValue: true,
    }),
    defineField({
      name: "email",
      title: "E-postadresse (valgfri)",
      type: "string",
      description: "Individuell e-post. Hvis tom, vises klinikkens e-post.",
    }),
    defineField({
      name: "phone",
      title: "Telefonnummer (valgfri)",
      type: "string",
      description: "Individuelt telefonnummer. Hvis tom, vises klinikkens nummer.",
    }),
    defineField({
      name: "bookingUrl",
      title: "Personlig bookinglenke (valgfri)",
      type: "url",
      description: "Individuell bookinglenke. Hvis tom, brukes klinikkens bookinglenke.",
    }),
  ],
  preview: {
    select: {
      name: "name",
      title: "title",
      media: "image",
      isActive: "isActive",
    },
    prepare({ name, title, media, isActive }) {
      return {
        title: name || "Terapeut",
        subtitle: isActive ? title : `${title} (Inaktiv)`,
        media,
      };
    },
  },
});
