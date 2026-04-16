import { defineField, defineType } from "sanity";

export const clinicSchema = defineType({
  name: "person",
  title: "Om klinikken",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Undertittel",
      type: "string",
      description: "Valgfri undertittel under klinikkens navn i «Om klinikken»-seksjonen",
    }),
    defineField({
      name: "image",
      title: "Bilde",
      type: "image",
      description: "Vises til venstre for teksten i «Om klinikken»-seksjonen",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imageRight",
      title: "Bilde til høyre",
      type: "image",
      description: "Vises til høyre for teksten i «Om klinikken»-seksjonen",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "shortBio",
      title: "Kort beskrivelse",
      type: "text",
      description: "Kort introduksjon til klinikken (valgfri)",
      rows: 2,
    }),
    defineField({
      name: "longBio",
      title: "Om klinikken (tekst)",
      type: "text",
      description: "Hovedtekst i «Om klinikken»-seksjonen på forsiden",
      rows: 6,
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: "Om klinikken",
        subtitle: title,
      };
    },
  },
});
