import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Innstillinger")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Terapeuter")
        .child(S.documentTypeList("therapist").title("Terapeuter")),
      S.listItem()
        .title("Om klinikken")
        .child(S.document().schemaType("person").documentId("person")),
      S.listItem()
        .title("Referanser")
        .child(S.documentTypeList("testimonial").title("Referanser")),
      S.listItem()
        .title("Priser")
        .child(S.document().schemaType("prices").documentId("prices")),
      S.listItem()
        .title("Kontakt")
        .child(S.document().schemaType("contact").documentId("contact")),
      ...S.documentTypeListItems().filter(
        (item) =>
          !["siteSettings", "therapist", "person", "testimonial", "prices", "contact"].includes(
            item.getId() ?? ""
          )
      ),
    ]);
