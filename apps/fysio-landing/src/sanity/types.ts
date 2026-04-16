export interface SiteSettings {
  yrke?: string | null;
  siteTitle?: string | null;
  tagline?: string | null;
  bookingUrl?: string | null;
  bookingLabel?: string | null;
  logo?: { _type: string; asset?: { _ref?: string } } | null;
}

export interface Person {
  name?: string | null;
  title?: string | null;
  image?: { _type: string; asset?: { _ref?: string } } | null;
  imageRight?: { _type: string; asset?: { _ref?: string } } | null;
  shortBio?: string | null;
  longBio?: string | null;
}

export interface Therapist {
  _id?: string;
  name?: string | null;
  slug?: { current?: string | null } | string | null;
  title?: string | null;
  image?: { _type: string; asset?: { _ref?: string } } | null;
  imageRight?: { _type: string; asset?: { _ref?: string } } | null;
  shortBio?: string | null;
  longBio?: string | null;
  order?: number | null;
  specialties?: string[] | null;
  isActive?: boolean | null;
  email?: string | null;
  phone?: string | null;
  bookingUrl?: string | null;
}

export interface Reference {
  quote?: string | null;
  authorName?: string | null;
  authorRole?: string | null;
}

export interface PriceItem {
  name?: string | null;
  amount?: string | null;
  description?: string | null;
}

export interface Prices {
  title?: string | null;
  items?: PriceItem[] | null;
  helseforsikringTitle?: string | null;
  helseforsikringText?: string | null;
}

export interface Contact {
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  openingHours?: string | null;
  mapEmbedUrl?: string | null;
}

export interface LandingData {
  siteSettings: SiteSettings | null;
  person: Person | null;
  therapists: Therapist[] | null;
  references: Reference[] | null;
  prices: Prices | null;
  contact: Contact | null;
}

export interface TherapistPageData {
  siteSettings: SiteSettings | null;
  therapist: Therapist | null;
  references: Reference[] | null;
  prices: Prices | null;
  contact: Contact | null;
}
