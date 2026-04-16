export type Accommodation = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  priceFrom: number;
  priceUnit: string;
  capacity: string;
  amenities: string[];
  images: string[];
};

export type Facility = {
  icon: string;
  name: string;
  description: string;
  details?: string;
  image?: string;
};

export type Activity = {
  name: string;
  description: string;
  image: string;
  season?: string;
  ageGroup?: string;
};

export type NearbyAttraction = {
  name: string;
  description: string;
  distance: string;
  image?: string;
};

export type Testimonial = {
  text: string;
  author: string;
  rating: number;
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: "alle" | "hytter" | "natur" | "fasiliteter" | "aktiviteter";
};

export type PricingItem = {
  name: string;
  prices: number[];
};

export type PricingExtra = {
  name: string;
  price: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type NearbyPlace = {
  name: string;
  distance: string;
  type?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteData = {
  name: "Solvik Camping",
  tagline: "Din familievennlige campingplass ved Hardangerfjorden",
  description:
    "Solvik Camping tilbyr hytter, teltplasser og bobilplasser i fantastiske omgivelser ved Hardangerfjorden. Perfekt for familier som søker naturopplevelser og avslapning.",

  contact: {
    phone: "+47 412 34 567",
    email: "post@solvikcamping.no",
    address: "Fjordveien 42, 5750 Odda",
    season: "1. mai – 30. september",
  },

  social: {
    facebook: "https://facebook.com/solvikcamping",
    instagram: "https://instagram.com/solvikcamping",
  },

  usps: [
    { icon: "📍", text: "Ved Hardangerfjorden" },
    { icon: "👨‍👩‍👧‍👦", text: "Familievennlig" },
    { icon: "⭐", text: "4.8 på Google" },
    { icon: "📶", text: "Gratis WiFi" },
  ],

  accommodations: [
    {
      slug: "hytter",
      name: "Hytter",
      shortDescription: "Koselige hytter med alt du trenger for et behagelig opphold",
      fullDescription:
        "Våre hytter ligger spredt i naturskjønne omgivelser med utsikt mot fjorden. Hver hytte er fullt utstyrt med kjøkken, bad, og terrasse. Perfekt for familier og par som ønsker komfort i naturen. Sengetøy og håndklær er inkludert.",
      priceFrom: 890,
      priceUnit: "natt",
      capacity: "2–6 personer",
      amenities: ["Kjøkken", "Bad med dusj", "Sengetøy", "Terrasse", "Kjøleskap", "Kokeplater", "Oppvarming"],
      images: [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
        "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=800&q=80",
      ],
    },
    {
      slug: "teltplasser",
      name: "Teltplasser",
      shortDescription: "Rolige plasser i naturen med tilgang til strøm og vann",
      fullDescription:
        "Teltplassene våre ligger på en flat, gresskledd slette omgitt av bjørketrær. Hver plass har tilgang til strøm og vannpost i nærheten. Sanitæranlegget med varme dusjer er bare et par minutters gange unna.",
      priceFrom: 250,
      priceUnit: "natt",
      capacity: "1–4 personer",
      amenities: ["Strømtilkobling", "Vannpost", "Gressunderlag", "Bålplass i nærheten"],
      images: [
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
        "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&q=80",
      ],
    },
    {
      slug: "bobil",
      name: "Bobil & Caravan",
      shortDescription: "Oppstillingsplasser med full service for bobil og campingvogn",
      fullDescription:
        "Romslige oppstillingsplasser med strøm, vann og avløp. Plassene er asfalterte med gressareal ved siden av. Tømmestasjon for gråvann og toalett er tilgjengelig. Perfekt beliggenhet med kort vei til fjorden.",
      priceFrom: 350,
      priceUnit: "natt",
      capacity: "1 enhet",
      amenities: ["Strøm 16A", "Vann", "Avløp", "Tømmestasjon", "Asfaltert", "WiFi"],
      images: [
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
        "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80",
      ],
    },
  ] as Accommodation[],

  facilities: [
    {
      icon: "🚿",
      name: "Sanitæranlegg",
      description: "Moderne sanitæranlegg med varme dusjer, toaletter og stellerom",
      details: "6 dusjer, 8 toaletter, stellerom for barn, universelt utformet",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    },
    {
      icon: "🍳",
      name: "Felleskjøkken",
      description: "Fullt utstyrt kjøkken med kokeplater, kjøleskap og spiseplass",
      details: "4 kokeplater, 2 kjøleskap, mikrobølgeovn, oppvaskmaskin",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    },
    {
      icon: "👶",
      name: "Lekeplass",
      description: "Stor lekeplass med husker, sklie og sandkasse for de minste",
      image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80",
    },
    {
      icon: "📶",
      name: "Gratis WiFi",
      description: "Trådløst internett over hele campingplassen",
    },
    {
      icon: "🧺",
      name: "Vaskerom",
      description: "Vaskemaskin og tørketrommel tilgjengelig for gjester",
      details: "2 vaskemaskiner, 2 tørketromler. Betales med mynt.",
    },
    {
      icon: "🔌",
      name: "Strøm",
      description: "Strømuttak på alle plasser (16A)",
    },
    {
      icon: "♿",
      name: "Universell utforming",
      description: "Tilrettelagt for rullestolbrukere i sanitæranlegg og fellesarealer",
    },
    {
      icon: "🅿️",
      name: "Parkering",
      description: "Gratis parkering ved din plass eller på felles parkeringsplass",
    },
  ] as Facility[],

  activities: [
    {
      name: "Fiske",
      description: "Fjorden byr på fantastiske fiskemuligheter. Lån fiskeutstyr i resepsjonen.",
      image: "https://images.unsplash.com/photo-1532015421997-59f2acf2ec48?w=800&q=80",
      season: "Mai–September",
      ageGroup: "Alle aldre",
    },
    {
      name: "Fjellvandring",
      description: "Flotte turløyper rett fra campingplassen. Alt fra lette familieturer til krevende toppturer.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      season: "Juni–September",
      ageGroup: "Alle aldre",
    },
    {
      name: "Kajakk",
      description: "Lei kajakk og utforsk fjorden fra vannet. Enkel- og dobbeltkajakker tilgjengelig.",
      image: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=800&q=80",
      season: "Juni–August",
      ageGroup: "Fra 12 år",
    },
    {
      name: "Sykling",
      description: "Utforsk området på to hjul. Vi har sykler til utleie for hele familien.",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
      season: "Mai–September",
      ageGroup: "Alle aldre",
    },
  ] as Activity[],

  nearbyAttractions: [
    {
      name: "Trolltunga",
      description: "Norges mest ikoniske fjellformasjon, en uforglemmelig dagstur.",
      distance: "45 min kjøring",
      image: "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=800&q=80",
    },
    {
      name: "Hardangerbrua",
      description: "Norges lengste hengebru med spektakulær utsikt over fjorden.",
      distance: "30 min kjøring",
    },
    {
      name: "Folgefonna Nasjonalpark",
      description: "Isbre, fjellvandring og fantastisk natur.",
      distance: "1 time kjøring",
    },
  ] as NearbyAttraction[],

  testimonials: [
    {
      text: "Fantastisk plass for hele familien! Rent og velholdt, flotte omgivelser og hyggelige vertsfolk. Vi kommer tilbake hvert år.",
      author: "Kari M., Oslo",
      rating: 5,
    },
    {
      text: "Beste campingplassen vi har vært på i Norge. Hyttene er koselige, og beliggenheten ved fjorden er helt magisk.",
      author: "Per S., Bergen",
      rating: 5,
    },
    {
      text: "Perfekt utgangspunkt for Trolltunga-turen. Fin lekeplass for barna og rene fasiliteter. Anbefales!",
      author: "Lise T., Trondheim",
      rating: 5,
    },
    {
      text: "Rolig og fredelig camping med god avstand mellom plassene. Elskede å våkne opp til fjordutsikten hver morgen.",
      author: "Anders K., Stavanger",
      rating: 4,
    },
  ] as Testimonial[],

  gallery: [
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Fjordlandskap ved campingplassen", category: "natur" as const },
    { src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", alt: "Koselig hytte med terrasse", category: "hytter" as const },
    { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80", alt: "Telt ved innsjøen i solnedgang", category: "natur" as const },
    { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80", alt: "Fjellvandring med utsikt", category: "aktiviteter" as const },
    { src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80", alt: "Hytte i vinterlandskap", category: "hytter" as const },
    { src: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=800&q=80", alt: "Kajakkpadling på fjorden", category: "aktiviteter" as const },
    { src: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80", alt: "Lekeplass for barna", category: "fasiliteter" as const },
    { src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80", alt: "Bobiler på campingplassen", category: "natur" as const },
    { src: "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=800&q=80", alt: "Trolltunga i solnedgang", category: "aktiviteter" as const },
    { src: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&q=80", alt: "Telt under stjernehimmelen", category: "natur" as const },
    { src: "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=800&q=80", alt: "Innvendig hytte med peisovn", category: "hytter" as const },
    { src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80", alt: "Sykling langs fjorden", category: "aktiviteter" as const },
  ],

  pricing: {
    seasons: ["Lavsesong\n(mai, sep)", "Skuldersesong\n(jun, aug)", "Høysesong\n(jul)"],
    items: [
      { name: "Hytte 4-pers", prices: [690, 890, 1090] },
      { name: "Hytte 6-pers", prices: [890, 1190, 1490] },
      { name: "Teltplass", prices: [200, 250, 300] },
      { name: "Bobil/Caravan", prices: [300, 350, 420] },
    ] as PricingItem[],
    extras: [
      { name: "Strøm", price: "50 kr/døgn" },
      { name: "Sengetøy (per sett)", price: "100 kr" },
      { name: "Håndklær (per sett)", price: "50 kr" },
      { name: "Sluttrengjøring hytte", price: "400 kr" },
      { name: "Kajakk (per time)", price: "150 kr" },
      { name: "Sykkel (per dag)", price: "200 kr" },
    ] as PricingExtra[],
  },

  location: {
    coordinates: { lat: 60.07, lng: 6.54 },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15600!2d6.54!3d60.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDA0JzEyLjAiTiA2wrAzMicyNC4wIkU!5e0!3m2!1sno!2sno",
    directions:
      "Frå Bergen: Følg E16 til Voss, deretter Rv13 langs Hardangerfjorden til Odda. Campingplassen ligg 20 minutt sør for Odda sentrum, godt skilta frå hovudvegen.",
    nearby: [
      { name: "Odda sentrum", distance: "20 min", type: "By" },
      { name: "Coop Extra daglegvare", distance: "15 min", type: "Butikk" },
      { name: "Odda sjukehus", distance: "25 min", type: "Sjukehus" },
      { name: "Esso bensinstasjon", distance: "15 min", type: "Bensin" },
    ] as NearbyPlace[],
    travelTimes: [
      { from: "Bergen", time: "2,5 timar" },
      { from: "Stavanger", time: "4 timar" },
      { from: "Oslo", time: "6 timar" },
    ],
  },

  about: {
    story:
      "Solvik Camping har vore driven av familien Solheim sidan 1985. Det som starta som ein liten teltplass ved fjorden, har gjennom snart 40 år blitt ein kjær ferieplass for familiar frå heile Noreg. Vi er stolte av den roen og nærleiken til naturen vi kan tilby gjestene våre. Hjå oss er det viktigaste at du kan senke skuldrene, puste inn frisk fjordluft, og skape minner som varar.",
    teamMembers: [
      {
        name: "Bjørn Solheim",
        role: "Dagleg leiar",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      },
      {
        name: "Ingrid Solheim",
        role: "Resepsjon og booking",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      },
    ] as TeamMember[],
  },

  faq: [
    {
      question: "Når er sesongen?",
      answer: "Vi har ope frå 1. mai til 30. september. Høgsesong er juli.",
    },
    {
      question: "Kan vi ta med hund?",
      answer: "Ja, hundar er velkomne! Vi ber om at dei haldast i band på fellesområda.",
    },
    {
      question: "Er det mogleg å kome utan reservasjon?",
      answer: "Ja, om det er ledige plassar. Men i høgsesongen tilrår vi å bestille på førehand.",
    },
    {
      question: "Har de lader for elbil?",
      answer: "Ja, vi har 2 ladepunkt for elbil ved parkeringsplassen.",
    },
    {
      question: "Kva tid er innsjekk og utsjekk?",
      answer: "Innsjekk frå kl. 15:00, utsjekk innan kl. 12:00. Fleksibelt ved ledig kapasitet.",
    },
  ] as FaqItem[],

  seo: {
    titleTemplate: "%s | Solvik Camping",
    defaultTitle: "Solvik Camping — Familiecamping ved Hardangerfjorden",
    defaultDescription:
      "Solvik Camping tilbyr hytter, teltplasser og bobilplasser ved Hardangerfjorden. Perfekt for familier. Nær Trolltunga og Folgefonna.",
  },
};
