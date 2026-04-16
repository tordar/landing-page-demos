import { therapistSchema } from "./therapist";
import { clinicSchema } from "./clinic";
import { referenceSchema } from "./reference";
import { pricesSchema } from "./prices";
import { contactSchema } from "./contact";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  therapistSchema,
  clinicSchema,
  referenceSchema,
  pricesSchema,
  contactSchema,
  siteSettingsSchema,
];
