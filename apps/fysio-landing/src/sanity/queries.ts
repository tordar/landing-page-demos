export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  yrke,
  siteTitle,
  tagline,
  bookingUrl,
  bookingLabel,
  logo
}`;

export const personQuery = `*[_type == "person"][0]{
  name,
  title,
  image,
  imageRight,
  shortBio,
  longBio
}`;

export const referencesQuery = `*[_type == "testimonial"] | order(order asc, _createdAt desc){
  quote,
  authorName,
  authorRole
}`;

export const pricesQuery = `*[_type == "prices"][0]{
  title,
  items[]{
    name,
    amount,
    description
  },
  helseforsikringTitle,
  helseforsikringText
}`;

export const contactQuery = `*[_type == "contact"][0]{
  address,
  phone,
  email,
  openingHours,
  mapEmbedUrl
}`;

export const allTherapistsQuery = `*[_type == "therapist" && (!defined(isActive) || isActive == true)] | order(order asc, _createdAt asc){
  _id,
  name,
  slug,
  title,
  image,
  shortBio,
  specialties
}`;

export const therapistBySlugQuery = `*[_type == "therapist" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  title,
  image,
  imageRight,
  shortBio,
  longBio,
  specialties,
  email,
  phone,
  bookingUrl
}`;
