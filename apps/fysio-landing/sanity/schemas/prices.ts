import { defineField, defineType } from "sanity";

const priceItem = {
  name: "priceItem",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Tjeneste / beskrivelse", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "amount", title: "Pris (kr)", type: "string", description: "F.eks. 800 eller «Fra 600»" }),
    defineField({ name: "description", title: "Ekstra info (valgfritt)", type: "text", rows: 2 }),
  ],
  preview: {
    select: { name: "name", amount: "amount" },
    prepare(value: Record<string, unknown>) {
      const name = (value?.name as string | undefined) ?? "Pris";
      const amount = value?.amount as string | undefined;
      return { title: name, subtitle: amount ? `${amount} kr` : undefined };
    },
  },
};

export const pricesSchema = defineType({
  name: "prices",
  title: "Priser",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      initialValue: "Priser",
    }),
    defineField({
      name: "items",
      title: "Prisliste",
      type: "array",
      of: [priceItem],
    }),
    defineField({
      name: "helseforsikringTitle",
      title: "Tittel for Helseforsikring",
      type: "string",
      initialValue: "Helseforsikring",
    }),
    defineField({
      name: "helseforsikringText",
      title: "Tekst om helseforsikring",
      type: "text",
      description: "Forklaring om dekning, refusjon m.m.",
      rows: 6,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Priser" };
    },
  },
});
