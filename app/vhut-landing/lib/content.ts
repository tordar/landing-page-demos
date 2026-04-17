/**
 * Hardcoded content for VHUT landing page.
 * Shape is Sanity-ready: swap to getContent() fetching from Sanity later.
 */

export const hero = {
  title: "Vestfold Historic Ultra Trail",
  tagline: "Krevende men fair – terrengultraløp i nordre Vestfold",
  date: "6.–7. juni 2026",
  location: "Nordre Vestfold",
  ctaLabel: "Påmelding",
  ctaHref: "https://my.raceresult.com/358397/registration?lang=nb",
  navLinks: [
    { label: "Om VHUT", href: "/om" },
    { label: "Distanser", href: "/distanser" },
    { label: "Løypebeskrivelse", href: "/loypebeskrivelse" },
    { label: "Praktisk info", href: "/praktisk" },
    { label: "Regler", href: "/regler" },
  ] as const,
} as const;

export type Distance = {
  distance: number;
  elevation: number;
  maxTime: string;
  startDate: string;
  startTime: string;
  startPlace: string;
  dropBags: number;
};

export type PricePeriod = {
  /** Date range label, e.g. "10.09.2025 – 30.09.2025" */
  label: string;
  /** Start date (YYYY-MM-DD) */
  start: string;
  /** End date (YYYY-MM-DD), inclusive */
  end: string;
  /** Price in NOK */
  price: number;
};

export type DistanceDetail = Distance & {
  surface?: string;
  itraPoints?: number;
  description?: string;
  mandatoryEquipment?: string[];
  checkpoints?: { name: string; km: number }[];
  gpxUrl?: string;
  mapUrl?: string;
  /** Parking and frammøte from vhut.no praktisk-info */
  parking?: string;
  frammote?: string;
  parkingMapUrl?: string;
  /** Strava route embed (data-embed-id and data-map-hash from Strava embed code) */
  stravaEmbedId?: string;
  stravaMapHash?: string;
  /** Registration price periods – current period is highlighted */
  pricePeriods?: PricePeriod[];
};

export const distances: DistanceDetail[] = [
  {
    distance: 147,
    elevation: 5000,
    maxTime: "36t",
    startDate: "06.06.26",
    startTime: "07:00",
    startPlace: "Hengsrød",
    dropBags: 2,
    surface: "Ca. 94% sti og skog, 6% asfalt",
    itraPoints: 5,
    description:
      "Langløypa gir deg det beste av terreng i nordre Vestfold. Løypa går gjennom 2 fylker og 5 kommuner med lokalhistorisk betydning. Self support – du må navigere med GPS og ta med nødvendig utstyr.",
    mandatoryEquipment: [
      "Ryggsekk",
      "Drikkebeholdere med min. 2 liter kapasitet",
      "Mat (energi) og drikke til hele turen, inkl depot i dropbag(er) for 80 og 140km",
      "Fulladet mobiltelefon med løpsleders nummer 92069077 lagret. (For å spare batteri til man evt får bruk for å ringe anbefaler vi å slå av wifi og mobildata, mailsync og andre strømkrevende apper, og også bluetooth om man ikke trenger dette)",
      "Vind- og vanntett jakke",
      "Nødteppe (Emergency blanket)",
      "For navigasjon: GPS/GPS-klokke med sporet lagret, evt papirkart og kompass.",
      "Ekstra batterier/lademulighet til GPS/GPS-klokke (om GPS brukes)",
      "Betalingskort",
      "Hodelykt av god kvalitet + reservebatteri, evt 2 lykter",
      "Powerbank og ladekabel til mobiltelefon",
      "Vind- og vanntett lang bukse",
      "Alt obligatorisk utstyr skal medbringes hele veien, med mindre annen beskjed gis av arrangør.",
      "Om staver benyttes skal de også medbringes hele veien.",
      "Ut over dette må deltaker gjøre egne vurderinger utfra værmelding og egne behov, feks ift varme klær, lue, buff etc.",
    ],
    checkpoints: [
      { name: "Dropbag 1", km: 55 },
      { name: "Dropbag 2", km: 100 },
      { name: "Hajern (servering)", km: 75 },
    ],
    gpxUrl: "#",
    mapUrl: "https://langtoglengelive.com/events/vhut/map/2025-05-31_01/",
    parking: "Ved bedriften Hengsrød AS, Hengsrudveien 342/344",
    frammote: "Hengsrudveien 336",
    parkingMapUrl: "https://www.google.com/maps/search/Hengsrudveien+336",
    stravaEmbedId: "3457712226836879814",
    stravaMapHash: "8.12/59.481/10.133",
    pricePeriods: [
      { label: "10.09.2025 – 30.09.2025", start: "2025-09-10", end: "2025-09-30", price: 1000 },
      { label: "01.10.2025 – 30.04.2026", start: "2025-10-01", end: "2026-04-30", price: 1400 },
      { label: "01.05.2026 – 04.06.2026", start: "2026-05-01", end: "2026-06-04", price: 1600 },
    ],
  },
  {
    distance: 87,
    elevation: 2700,
    maxTime: "22t",
    startDate: "06.06.26",
    startTime: "21:00",
    startPlace: "Eidsfoss",
    dropBags: 1,
    surface: "Hovedsakelig sti og skog",
    itraPoints: 4,
    description:
      "Mellomdistanse med start lørdag kveld. Løypa følger langløypa fra Eidsfoss og byr på krevende men fair trail. En dropbagstasjon med servering.",
    mandatoryEquipment: [
      "Ryggsekk",
      "Drikkebeholdere med min. 2 liter kapasitet",
      "Mat (energi) og drikke til hele turen, inkl depot i dropbag(er) for 80 og 140km",
      "Fulladet mobiltelefon med løpsleders nummer 92069077 lagret. (For å spare batteri til man evt får bruk for å ringe anbefaler vi å slå av wifi og mobildata, mailsync og andre strømkrevende apper, og også bluetooth om man ikke trenger dette)",
      "Vind- og vanntett jakke",
      "Nødteppe (Emergency blanket)",
      "For navigasjon: GPS/GPS-klokke med sporet lagret, evt papirkart og kompass.",
      "Ekstra batterier/lademulighet til GPS/GPS-klokke (om GPS brukes)",
      "Betalingskort",
      "Hodelykt av god kvalitet + reservebatteri, evt 2 lykter",
      "Powerbank og ladekabel til mobiltelefon",
      "Vind- og vanntett lang bukse",
      "Alt obligatorisk utstyr skal medbringes hele veien, med mindre annen beskjed gis av arrangør.",
      "Om staver benyttes skal de også medbringes hele veien.",
      "Ut over dette må deltaker gjøre egne vurderinger utfra værmelding og egne behov, feks ift varme klær, lue, buff etc.",
    ],
    checkpoints: [
      { name: "Dropbag / servering", km: 45 },
      { name: "Hajern (servering)", km: 62 },
    ],
    gpxUrl: "#",
    mapUrl: "https://langtoglengelive.com/events/vhut/map/2025-05-31_01/",
    parking: "P-plass ved Eidsfossveien 58",
    frammote: "Eidsfos Landhandel",
    parkingMapUrl: "https://www.google.com/maps/search/Eidsfossveien+58",
    stravaEmbedId: "3457732435089523142",
    stravaMapHash: "8.29/59.464/10.133",
    pricePeriods: [
      { label: "10.09.2025 – 30.09.2025", start: "2025-09-10", end: "2025-09-30", price: 850 },
      { label: "01.10.2025 – 30.04.2026", start: "2025-10-01", end: "2026-04-30", price: 1200 },
      { label: "01.05.2026 – 04.06.2026", start: "2026-05-01", end: "2026-06-04", price: 1400 },
    ],
  },
  {
    distance: 50,
    elevation: 1250,
    maxTime: "12t",
    startDate: "07.06.26",
    startTime: "07:00",
    startPlace: "Damtjernv.",
    dropBags: 0,
    surface: "Sti og skog",
    itraPoints: 2,
    description:
      "Korteste distanse med start søndag morgen. Perfekt for deg som vil prøve ultraløp eller ønsker en kortere dag i fjellet. Ingen dropbags – ta med det du trenger.",
    mandatoryEquipment: [
      "Ryggsekk",
      "Drikkebeholdere med min. 2 liter kapasitet",
      "Mat (energi) og drikke til hele turen, inkl depot i dropbag(er) for 80 og 140km",
      "Fulladet mobiltelefon med løpsleders nummer 92069077 lagret. (For å spare batteri til man evt får bruk for å ringe anbefaler vi å slå av wifi og mobildata, mailsync og andre strømkrevende apper, og også bluetooth om man ikke trenger dette)",
      "Vind- og vanntett jakke",
      "Nødteppe (Emergency blanket)",
      "For navigasjon: GPS/GPS-klokke med sporet lagret, evt papirkart og kompass.",
      "Ekstra batterier/lademulighet til GPS/GPS-klokke (om GPS brukes)",
      "Betalingskort",
      "Alt obligatorisk utstyr skal medbringes hele veien, med mindre annen beskjed gis av arrangør.",
      "Om staver benyttes skal de også medbringes hele veien.",
      "Ut over dette må deltaker gjøre egne vurderinger utfra værmelding og egne behov, feks ift varme klær, lue, buff etc.",
    ],
    checkpoints: [{ name: "Hajern (servering)", km: 32 }],
    gpxUrl: "#",
    mapUrl: "https://langtoglengelive.com/events/vhut/map/2025-05-31_01/",
    parking: "P-plass ved tjernet Damtjern, rett øst for Damtjernveien 276",
    frammote: "Velteplass 300 m vest for Damtjern",
    parkingMapUrl: "https://www.google.com/maps/search/Damtjernveien+276",
    stravaEmbedId: "3457735778958769550",
    pricePeriods: [
      { label: "10.09.2025 – 30.09.2025", start: "2025-09-10", end: "2025-09-30", price: 650 },
      { label: "01.10.2025 – 30.04.2026", start: "2025-10-01", end: "2026-04-30", price: 900 },
      { label: "01.05.2026 – 04.06.2026", start: "2026-05-01", end: "2026-06-04", price: 1100 },
    ],
  },
];

export const about = {
  title: "Om VHUT",
  paragraphs: [
    "VHUT er et terrengultraløp som går gjennom det beste av terreng i nordre Vestfold. Kun 6% asfalt for langløypa.",
    "Vårt mål er å tilby løperne en skikkelig trail-opplevelse – mottoet er «krevende men fair».",
    "Løypa går gjennom 2 fylker og ikke mindre enn 5 kommuner, og underveis passerer løperne mange steder med lokalhistorisk betydning.",
  ],
} as const;

/** Historien – from vhut.no/historien/ */
export const history = {
  title: "Historien",
  paragraphs: [
    "I 2015 deltok undertegnede (løpsleder for VHUT) på Hof Toppers Ultra 75 km (som ble lagt ned i 2019). Hof Toppers er egentlig et duathlon der deltakerne bruker sykkel på «transportetappene» og løper opp på tilsammen 10 topper i Hof. Ultraløpet på 75 km utgjorde 7 av disse 10 toppene og tok deltakerne rundt på en mengde flotte steder rundt om i Hof.",
    "Funksjonærene var hyggelige og servicen upåklagelig, det var i sum et veldig bra arrangement. Problemet var alle asfaltstrekkene innimellom, ikke bra for skranglete knær … det måtte da la seg gjøre å lage et hardcore ultra trail i denne delen av Vestfold? Vi har jo så mye fin natur og så mange fine åser!",
    "Mange steder i distriktet var jeg godt kjent allerede, og selvskrevne topper i et slikt løp var Ryksåsen, Hvittingen, Montebello, Skibergfjell og Snippane.",
    "I årene som fulgte foretok jeg med svært ujevne mellomrom diverse «rekketurer» på aktuelle strekninger mens ideen til trasé forma seg i hodet, nye topper ble inkludert og arkivet av GPS-spor vokste. Pga. mye annet å styre med gikk dette veldig i langdrag, men det har blitt mange fine langturer.",
    "Konsept og rettesnor har hele tida vært akkurat det jeg liker aller best med løpinga selv: gode naturopplevelser, topper med fin utsikt, mest mulig (teknisk) sti og minst mulig asfalt. I planleggingen har det også vært viktig å tilby romslig maksimaltid.",
    "For å gjøre det enkelt for meg selv ble start og mål lagt hjemme hos oss, samme sted som en ikke ukjent matstasjon for 100/50-milesløpet Soria Moria til Verdens Ende. Langløypa endte til slutt på 147 km, og det var også naturlig å tilby en 87 km med start på Eidsfoss. Litt seinere ga interessen grunnlag også for en 50 km med start på Damtjernveien.",
    "Mot slutten av 2019 var konseptet så ferdig at løpet kunne lanseres, og 1. august 2020 kunne vi ønske deltakerne velkommen til det første VHUT, en runde gjennom det beste av natur i nordre Vestfold!",
  ],
  author: "Arne Nåtedal",
} as const;

/** Sub-section for e.g. parking per venue */
export type PracticalInfoSub = {
  readonly title: string;
  readonly description: string;
  readonly linkLabel?: string;
  readonly linkHref?: string;
};

/** Single section: paragraph, list, and/or optional link */
export type PracticalInfoItem = {
  readonly title: string;
  readonly description?: string;
  readonly paragraphs?: readonly string[];
  readonly list?: readonly string[];
  readonly linkLabel?: string;
  readonly linkHref?: string;
  readonly subs?: readonly PracticalInfoSub[];
};

export const practicalInfo = {
  title: "Praktisk info",
  updatedAt: "Oppdatert for 2026. Endringer publiseres her.",
  items: [
    {
      title: "Frammøte og parkering",
      description:
        "Pga. stor påmelding ventes det mange biler. Arenaer for start/mål og CP har begrenset plass (spesielt Damtjernveien) og det er IKKE mulig å parkere på selve arena/CP. Følg parkeringsanvisningene og parker fornuftig.",
      subs: [
        {
          title: "Hengsrød – Start 147 km / mål alle distanser",
          description:
            "Parkering: Ved bedriften Hengsrød AS, Hengsrudveien 342/344. Frammøte start/mål: Hengsrudveien 336.",
          linkLabel: "Kart",
          linkHref: "https://www.google.com/maps/search/Hengsrudveien+336",
        },
        {
          title: "Eidsfoss – Start 87 km, dropbag 147 km",
          description:
            "Parkering: P-plass ved Eidsfossveien 58. Frammøte CP: Eidsfos Landhandel.",
          linkLabel: "Kart",
          linkHref: "https://www.google.com/maps/search/Eidsfossveien+58",
        },
        {
          title: "Damtjernveien – Start 50 km, dropbag 87 og 147 km",
          description:
            "Parkering: P-plass ved tjernet Damtjern, rett øst for Damtjernveien 276. Frammøte CP: Velteplass 300 m vest for Damtjern.",
          linkLabel: "Kart",
          linkHref: "https://www.google.com/maps/search/Damtjernveien+276",
        },
      ],
    },
    {
      title: "Overnatting 147 km",
      description:
        "Vi tilbyr overnatting fredag til lørdag. Telting på plenen, evt. på medbrakt madrass/campingseng innendørs, tilgang til WC/dusj/tekjøkken m/kjølerom. Laken + sovepose/dyne medbringes. Bestilles via Racetracker ved påmelding.",
    },
    {
      title: "Transport til start",
      description:
        "Tilbud om transport fra Hengsrød (mål) til start for 87 km og 50 km. Avreise fra Hengsrød henholdsvis kl. 19:30 og 05:30. Bestilles via Racetracker ved påmelding.",
    },
    {
      title: "Frammøtetid start",
      description:
        "Min. 30 minutter før start. Utdeling av trackere og startnummer foregår fra 60 til 30 minutter før start.",
    },
    {
      title: "Løyper og GPS-spor",
      description:
        "Alle løpere må laste ned oppdaterte GPX-filer før løpet; disse gjøres tilgjengelig under Løyper. Les gjennom løypebeskrivelsen – her finnes mye nyttig info om traseen. Vi anbefaler også å lese beskrivelse av historiske steder (markert med rød skrift i løypebeskrivelsen).",
    },
    {
      title: "Starttider",
      list: [
        "147 km: lørdag kl. 07:00 på Hengsrød",
        "87 km: lørdag kl. 21:00 på Eidsfoss",
        "50 km: søndag kl. 07:00 på Damtjernveien",
      ],
    },
    {
      title: "Sperretider",
      description:
        "Sperretider er identiske med starttid for «neste» distanse, dvs. kl. 21:00 på Eidsfoss og 07:00 på Damtjernveien. Sperretid i mål på Hengsrød er kl. 19:00 for alle løyper.",
    },
    {
      title: "Dropbager",
      description:
        "Dropbager samt bag til mål leveres på angitt sted ved start. Disse plukkes opp av løperen selv ved passering dropbagstasjon og settes tilbake samme sted. Alle dropbager og bager til mål leveres ut etter målpassering. Løpere på 87 km og 147 km har 1 stk. dropbag tilgjengelig; for 147 km flyttes denne mellom Eidsfoss og Damtjernveien.",
    },
    {
      title: "Serveringstilbud på CP",
      description: "På CP Eidsfoss og Damtjernveien: enkel servering. I tillegg enkel stasjon på Hajern (vannfylling, cola, potetgull m.m.).",
      list: [
        "Vann, saft, cola",
        "Varmt vann til tilbereding av egen mat",
        "Pasta m/saus",
        "Brød med syltetøy eller salami",
        "Frukt, potetgull",
        "Pølse i brød/lompe (kun Damtjernveien)",
      ],
    },
    {
      title: "Tilgang på vann",
      description:
        "Avhengig av vær og nedbør er det mange steder med vann i terrenget. Generelt er det trygt å fylle der det er rennende vann og du befinner deg høyere enn bebyggelse/landbruk/industri, og hvor det ikke er husdyr/husdyrmøkk. Topp opp vannbeholdere når du har mulighet.",
    },
    {
      title: "Trackere og startnummer",
      description:
        "Alle løpere skal gjennom hele løpet bære startnummer godt synlig foran på mage eller lår. Alle løpere skal bære GPS-tracker festet høyt på skulder eller utenpå sekk. Trackeren har nødknapp som trykkes i nødsfall for å varsle arrangør.",
      linkLabel: "Live tracking",
      linkHref: "https://map.racetracker.no/?race=vhut_2025",
    },
    {
      title: "Mobiltelefon",
      description:
        "Skal til enhver tid være påslått med tilstrekkelig volum. Arrangør lagres: 920 69 077. Alternativt: 908 74 972. Arrangør kan sende SMS underveis med relevant info (f.eks. utvidelse av sperretid).",
    },
    {
      title: "Bevegelse langs og kryssing av vei",
      description:
        "Vi ber deltakerne om å vise aktsomhet ved løping langs og kryssing av trafikert vei, spesielt i mørket.",
    },
    {
      title: "Løpsregler og utstyr",
      description: "Se regler og liste over obligatorisk utstyr.",
      linkLabel: "Utstyr og regler VHUT",
      linkHref: "https://www.vhut.no/utstyr-regler/",
    },
  ],
} as const;

export const resultaterLinks = [
  { year: 2025, href: "https://racetracker.no/events/2025/vhut/" },
  { year: 2024, href: "https://racetracker.no/events/2024/vhut/" },
  { year: 2023, href: "https://racetracker.no/events/2023/vhut/" },
  { year: 2022, href: "https://racetracker.no/events/2022/vhut/" },
  { year: 2021, href: "https://racetracker.no/events/2021/vhut/#tabs-3" },
  { year: 2020, href: "https://racetracker.no/events/2020/vhut/" },
] as const;

/** One segment of the course description. Same segment can apply to multiple distances at different km. */
export type CourseDescriptionSegment = {
  /** Cumulative km where this segment starts on 147 km course (undefined if not on 147 km) */
  km147?: number;
  /** Cumulative km where this segment starts on 87 km course */
  km87?: number;
  /** Cumulative km where this segment starts on 50 km course */
  km50?: number;
  /** Length of this stage in km (etappe lengde) */
  stageLength?: number;
  /** Starting place name (fra sted) */
  fromPlace: string;
  /** Narrative description; use \n\n for paragraphs. Use [[PlaceName]] for hover highlights (see placeHighlights). */
  description: string;
};

/** Historic/local info for place names. Use [[PlaceName]] in segment descriptions to show this on hover. Source: VHUT historiske steder v. 20230608 */
export const placeHighlights: Record<string, string> = {
  Bergstigen:
    "Den gamle hovedveien mellom Sande og Hof før veien over Hanekleiva ble bygget i 1880-årene. Før telefonforbindelse ble anlagt i 1892 fikk smågutter 25 øre turen for å springe med telegrammer mellom Eidsfos Værk og filialen i Sande. Telefonlinja var i drift helt til 1962.",
  Brånafjell:
    "Brånafjell 398,9 MOH, høyeste punktet i nye Sandefjord kommune fra 1.1.2017, tidligere i Andebu kommune.",
  Eidsfoss:
    "Historisk er industristedet Eidsfoss i stor grad synonymt med Eidsfos Jernverk, grunnlagt 9. mars 1697 av Caspar Herman Hausmann etter avtale med Gustav Wilhelm von Wedel, eier av Jarlsberg Grevskap. Fallet på 17 meter fra Bergsvannet – Eidsfossen – ble utnytta til å drive maskiner. Driften krevde betydlig transport, både av trekull til smelting og av malm, og også til frakt av ferdige produkter. Malmen kom bl.a. med skip fra Arendal til Sande og ble frakta med hest og slede over Bergstigen. Dampbåten Statshauptmand Schwartz trafikerte Eikeren til Vestfossen, og i 1901 kom Tønsberg-Eidsfossbanen som inntil 1938 lettet transporten betydelig. Selve jernverket ble lagt ned i 1884, mens ovnsstøperiet var i drift til 1961. Lokale ildsjeler redda på slutten av 70-tallet arbeiderboligene i Bråtagata fra riving, disse utgjør nå sammen med store deler av verket og Eidsfoss Hovedgård en del av Vestfoldmuseene, og står som et minne om viktig kapittel i norsk industrihistorie. (digitaltmuseum.no)",
  "Eidsfoss Stridsanlegg":
    "Anlegget ble ferdigstilt så seint som 1995, dvs. flere år etter den kalde krigens slutt. Det utgjorde i likhet med anlegget i Hanekleiva en del av Hillestaddefileet, som var et ledd i en forsvarslinje som skulle stoppe/forsinke fienden ved en eventuell invasjon i Vestfold. Bevæpning: 2 stillinger for 84 mm RFK, 10 skyteskår for MG3, 8 GL10-luker for 84 mm RFK eller MG3. (www.kak.net / Espen Kristoffersen)",
  Finneplassen:
    "Gammel boplass, bebodd av finner som slo seg ned her. Forlengst fraflytta, uthuset har ila det siste tiåret rast sammen.",
  Hajern:
    "Mesteparten av Hajern 410 MOH ligger i Kongsberg kommune i Viken, men en liten bit ligger i Holmestrand kommune. Vannet er regulert med en reguleringshøyde på 4,8 meter. Vannet ledes i tunnel til Øksne, og videre til Hakavika kraftstasjon ved Eikeren.",
  "Hanekleiva Stridsanlegg":
    "Anlegget ble ferdigstilt siste halvdel av 80-tallet. Det er en del av Hillestad-defileet som igjen er en del av Njordlinjen. Stillingene skulle fungere som sperrestillinger mot tropper som rykket frem nordover fra Vestfold, og ble i forsvaret kalt \"Jervehi\". Bevæpning: 2 x 2 RFK 84 mm, 1 x 20 mm lett luftvernkanon, NM 45 samt et antall MG-3. Bemanning: 18–24 mann fordelt på 2 RFK lag, 1 LLA lag, 4 MG lag, vaktlag og befal. Ramponert og plyndra av uvedkommende på 2000-tallet, seinere overtatt, sikra og rusta opp av forsvarsentusiaster. (www.kak.net)",
  Heierstadsetra:
    "Her lå det ei seter som tilhørte gården Heierstad. De hadde ikke egen seterskog, og setra derfor på grunn leid av Eidsfos Verk. Til setra var det langt og bratt, og de fulgte antakelig den gamle seterveien fra Vassbånn via Jordbærbånn og rett opp derfra. Når budeiene trengte hjelp fra bygda gikk de ut på fjellet kalt \"Tutærn\" og blåste i horn for å signalisere.",
  "Holmestrand-Vittingfosbanen":
    "Banen ble åpnet 30. september 1902 og medførte en stor forbedring for tresliperiet i Hvittingfoss som produserte tremasse som måtte transporteres ut for utskiping. For persontrafikken var det også en revolusjon i en tid da hest eller apostlenes hester var alternativene. Banen brukte 90 minutter på den 31 km lange strekningen, som mellom Kronlia og Hof delte trase med Tønsberg-Eidsfossbanen. Traseen er lagt i så lange og slake kurver som mulig for å redusere stigningen, men likevel klarte ikke lokomotivene å dra fulle tog opp fra Hvittingfoss. Løsningen ble å kippe godsvogner fra Hvittingfoss til Mossåsen på natta, og på morgenen gikk lokomotivet med personvogner fra Hvittingfoss og kobla på resten av settet på Mossåsen. Pga. automobilens fremtog på 1920-tallet gikk banen økonomisk stadig dårligere, og ble lagt ned i 1928.",
  Hvittingen:
    "Høyeste punktet i gamle Holmestrand kommune, 404 MOH. Televerket satte ca. 1960 opp masta her, med sin synlighet fra nær sagt alle retninger er dette et sentralt punkt for radiokommunikasjon av mange slag. Sør for masta står et utsiktstårn med DNT-kasse, utsikten er imponerende – man ser på klare dager f.eks. Holmenkollen og Færder for å nevne noe.",
  Kabretta:
    "Standsmessig jaktslott bygget i 1890-årene av eierne Schwartz på Eidsfos Verk, 8 sengeplasser og servise til 12. Schwartz tok sine venner og forbindelser opp på toppen, det ble anlagt ridevei opp og bord og stoler ble anbrakt der oppe. Kokke med kurv og hvitt forkle fulgte med opp med mange godsaker. På toppen skulle man nyte både god mat og god utsikt. (Hof historielag)",
  Malmveien:
    "Malmen til Nikkerud gruver ved Konnerud ble overtatt av Eidsfoss Verk i 1697, og transporten av malm foregikk med hest og slede (med opptil 1 tonn malm) over skauen ned til Thorrud ved Eikeren. Når Eikeren var islagt ble denne brukt, ellers gikk transporten til jernverket sydover langs Eikeren, over Hovet og ned til Vassbånn ved Bergsvannet.",
  Merkedammen:
    "Merkedammen 374 MOH er et vann i Aulivassdraget som renner ut i Tønsbergfjorden. Vannet er fra gammelt av regulert med demning, antakelig for både tømmerfløting og drift av sager og møller.",
  'Milorg D-15 slipplass "Lind"':
    "Natt til 13. september 1944 droppa oberst Bernt Balchen med sin Dakota (DC-3) 12 containere med våpen og sabotasjemateriell rett vest for Tolvmannsmyr. Slippstedet fikk navnet \"Lind\" og materiellet ble tatt imot og plukka opp av Milorg D-15 (Vestfold). (\"På Tur i Vestfold\", Erlend Larsen)",
  Montebello:
    "Utsiktspunkt rett opp for Kabretta. Opprinnelig het toppen Kikkut, men den ble etter hvert kalt Montebello av eierne Schwartz på Eidsfos Verk. Det italienske navnet klang litt bedre i de kondisjonertes ører. (Hof historielag)",
  "Nordre Løkenseter":
    "Tilhører Løken gård i Hillestad. Under krigen da alle arrangementer unntatt i regi av NS var forbudt, ble det arrangert illegal dans her.",
  Ramnesvulkanen:
    "Mot slutten av karbontida for ca. 280 mill. år siden ble Vestfold dekka av store lavstrømmer. Etterhvert dannet det seg en såkalt kjeglevulkan i Ramnes som ble mer og mer aktiv. På et tidspunkt eksploderte den i en ekstrem stor eksplosjon, og en stor sirkelformet del av jordskorpa sank ned og den såkalte Ramneskalderaen dannet seg. Kaldera betyr stor kjele/gryte, og innsiden av gryta er her den fruktbare Ramnessletta, noe av østlandets beste landbruksjord. Kantene av gryta ser man som bratte åser rundt, bl.a. Søndre Brattås, Sjøssfjell og Bøåsen i nord. (Ramnesiana, Ramnes Historielag 1979)",
  Revetal:
    "Opprinnelig et veikryss og en gård i Våle kommune, fra 1901 en stasjonsby (25,3 MOH) langs Tønsberg-Eidsfosbanen, med landhandel, smie og seinere potetkokeri med ei høy teglsteinspipe, som inntil ca. 1984 representerte et landemerke synlig på lange avstander. I 1969 ble Revetal Ungdomsskole som var felles for Våle og Ramnes lagt her, en første spede start på samarbeidet som leda til sammenslåing i 2002. De siste tiårene har Revetal gjennomgått en rivende utvikling som knapt noen kunne forutse, og foruten store boligfelter finnes her kjøpesenter, industri og næringer av nærmest alle slag. Revetal var fra 1.1.2002–1.1.2020 kommunesenter for Re kommune, inntil sammenslåing med Tønsberg.",
  Ryksåsen:
    "Høyeste punktet i gamle Våle kommune inntil år 2000, ca. 222 MOH. Herfra har man god utsikt over store deler av nordre Våle. Fram til 70-tallet stod det et såkalt trigonometrisk punkt her, slik det gjorde på svært mange topper. De ble brukt av Norges Geografiske Oppmåling (nå Statens Kartverk) for oppmåling og karttegning. Litt nordover og ned til venstre finnes to jettegryter som man antar er gravd ut av isen.",
  Skibergfjell:
    "Skibergfjell 633,85 MOH ble i alle år regnet som Vestfolds høyeste punkt, inntil Statens Kartverk i 2017 kontrollmålte og fant ut at Vestfjellet litt lenger sydvest er 17 cm høyere. Statnett drifter her en radiolinjestasjon som er et knutepunkt for kommunikasjon i sentralnettet.",
  Slettefjell:
    "På kartet ofte kalt Presteslettås, 563 MOH. I gamle dager var det dans på slette fjellet her rundt Olsok. Mye brukt turmål for folk på Eidsfosssida.",
  Snippane:
    "Snippane 399,7 MOH er høyeste punktet i nye Tønsberg kommune, tidligere i Ramnes kommune inntil 1.1.2002 og Re kommune til 1.1.2020. En kuriositet er at den er 80 cm høyere enn Brånafjell, høyeste punktet i Sandefjord.",
  Stampeelva:
    "Navnet stammer fra gammel tid da det lå ei stampemølle lenger ned i elva. For å få vadmel (vømmøl) til å bli fast og nesten vanntett måtte det vevde ullstoffet toves (bankes/stampes) samtidig som det lå i kokende vann. Dette forgikk i stampemølla ved at et vannhjul drev en aksel med tapper på som igjen løftet trehammere som banket/stampet tøyet. Så ble tøyet tørket og lagt under press for så å være ferdig til å sy varme og gode klær. Virksomheten varte til utpå 1800-tallet da det også bodde folk her. Steinmuren kan fortsatt sees. (Våle Historielag / IL Ivrig / Sparebankstiftelsen)",
  Tolvmannsmyr:
    "Tolvmannsmyr hvor det i dag er naturreservat fikk etter sagnet navnet sitt etter en grensetvist. Bønder i Svarstad og Vivestad krangla om hvor grensa mellom sognene skulle gå. Løsningen ble at 6 mann fra hvert dalføre skulle starte samtidig på et avtalt tidspunkt og gå til møtes, og der de 12 møttes skulle grensa gå. Et av kjennemerkene til myra, som også har fått plass på VHUT-medaljen, er de 360 meter lange trekloppene som er lagt ut. (\"På Tur i Vestfold\", Erlend Larsen)",
  Vestfjellet:
    "Vestfjellet 634,02 MOH ble ved kontrollmåling i 2017 offisielt erklært som det høyeste punktet i Vestfold fylke, 17 cm høyere enn Skibergfjell. Tittelen som fylkestopp varte bare i 2 1/2 år, fram til sammenslåing med Telemark fra 1.1.2020.",
};

/** All segments in table order. Filter by distance and sort by the distance's km to get the run order. Source: VHUT2025_Loypebeskrivelse.pdf */
export const courseDescriptionSegments: CourseDescriptionSegment[] = [
  {
    km147: 0,
    stageLength: 11.2,
    fromPlace: "Hengsrød",
    description:
      "Fra starten løper vi 1km på asfalt vestover FV306, tar så skrått til høyre på grus/sykkelløype som følges en snau kilometer. Fortsetter rett over grusvei og følger blåmerka turløype nordover, ned til [[Stampeelva]] og på bru over denne. Videre sti opp forbi Kjærdammen og over mot Brekkeåsen før vi kommer ut på Kopstadveien ved Nåla.\n\nVi følger asfalten på sykkelsti ned mot Bettum og så nordover Bettumveien til Huseby, i alt ca 1,7km asfalt før vi der svinger vestover inn på skogssti/traktorvei ned jordet og så opp igjen gjennom skogen mot Skjerpe. Der er vi så vidt innom asfalten før vi tar til høyre, bratt oppover mot [[Ryksåsen]] 222 MOH, inntil 1.1.2002 høyeste punktet i gamle Våle kommune.",
  },
  {
    km147: 11.2,
    stageLength: 9.7,
    fromPlace: "Ryksåsen",
    description:
      "Fra toppen løper vi høyden nordover forbi skilt mot jettegryter og forbi Telias basestasjon, følger videre åsryggen litt opp og ned til Ryksåsen i Botne 240 MOH. Dreier så vestover ned i en dal, litt nordover og så til venstre opp på en ny åsrygg som følges ned mot Kalsrudåsen.\n\nVidere nedstigning mot grusveien som følges ned mot Løvalddalsveien. Ca 1,5 km transportstrekk på asfalt før vi dreier til høyre og opp en bakke på grus.\n\nNB! Vi kommer her inn på treningsløype for hester, hold venstre kant, pass på og lytt/se etter hester i trav, de kommer fort!\n\nEtter grusløypa følger ca 700 m transport på asfalt før vi svinger inn på sti gjennom Bergskogen og forbi skolen ned mot Gullhaug og kryssing av Hvittingfssveien. Her er det mulighet for handling, 100 m avstikker til høyre til Coop Extra, Jafs til venstre.",
  },
  {
    km147: 20.9,
    stageLength: 10.8,
    fromPlace: "Gullhaug",
    description:
      "Vi følger sykkelstien ca 300 m vestover før vi tar til høyre opp gjennom boligfeltet, vekselvis på sti og vei, før vi fortsetter inn i Botnemarka. Vi følger kjerrevei og tursti nordover forbi Veierudsetra Kentucky til Liglaneren, der man kan nyte utsikten over Holmestrandsfjorden og Sandebukta.\n\nDerfra fortsetter vi vestover, over Brannåsen og på sti før oppstigning til Tyriåsen der man også har flott utsikt vest- og sydvestover. Etter bratt nedstigning fra Tyriåsen mot nordvest svinger vi brått til venstre og følger egenkomponert trase (mulighet for høyt grass) til vi er over på steinete og noe gjengrodd traktorvei. Denne blir raskt bedre, og vi fortsetter sydvestover og så nordvestover mot [[Nordre Løkenseter]]. Over setervollen, videre over toppen og vekselvis på traktorvei og grusvei til rett øst for Hvittingsrudbrua på E18",
  },
  {
    km147: 31.7,
    stageLength: 5.9,
    fromPlace: "Hvittingsrudbrua",
    description:
      "Vi starter så på Himmelstigen til [[Hvittingen]], ca 300 meter stigning på ca 1,7 km. Midtpartiet her utgjør kanskje den tøffeste stigningen på hele ruta, men det er verdt slitet, for vi beveger oss opp til flott furuskog på Hvittingen 404 MOH, tidligere høyeste punktet i Holmestrand kommune. Fra utsiktstårnet her ser man milevis i alle retninger.\n\nFra toppen løper vi SMVE-traseen baklengs over Kjeksrudglaneren, forbi Stokkestua og ned til [[Hanekleiva Stridsanlegg]] som ligger rett ved veien. FV319 følges ca 700 m nordover ned til Franzefoss pukkverk i Hanekleiva.",
  },
  {
    km147: 37.6,
    stageLength: 5.7,
    fromPlace: "Hanekleiva",
    description:
      "Vi følger grus/traktorvei et par km vestover forbi sprengstofflager og videre parallelt med høyspenten før vi tar skarpt av til høyre fra traktorveien og bratt ned lia, følger så merking gjennom skogen øst for hogstfeltet til vi kommer ut på traktorvei. Denne følges litt nordover ned bakken, hardt venstre, forbi ei hytte og videre langs Bondivann.\n\nEtter Bondivann dreier vi til høyre på traktorvei østover parallelt med vannet, før vi tar av til venstre inn draget, videre på sti ned til vi kommer ut på traktorvei. Denne følges nordover og dreier nordvestover rundt Bergstighøgda til vi kommer ut på [[Bergstigen]], den gamle hovedveien mellom Sande og Hof.",
  },
  {
    km147: 43.3,
    stageLength: 7.7,
    fromPlace: "Bergstigen",
    description:
      "Vi følger Bergstigen delvis bratt ned østover til vi har runda Purketjern, og tar så av til venstre på sti/traktorvei som etter litt tipper bratt ned lia. Denne er lite brukt og er noe utydelig, delvis med høyt grass og bregner. Vel nede kommer vi ut på skogsbilvei som følges ca 1 km oppover mot nordvest. Vi krysser så Haukelielva på steiner, det er her ikke bru eller tau. Fortsetter rett opp veiskråningen, følger grusveien 50 m nedover og tar til venstre og følger traktorveien opp til vakre Kalmovann.\n\nBekken krysses rett nedenfor demningen, og vi følger først sti og deretter merka skiløype nordvestover, opp Bukkebakkene, litt ned og krysser grusveien vest for Kalmosetra. Vi følger skiløypa nordover, en sving sydvestover og så nordover over Lavvannsmyr, krysser grusveien/-plassen før vi starter på oppstigningen på sti/traktorvei opp til [[Kabretta]], som i sin tid tilhørte eierne på Eidsfos Verk. Fra Kabretta stiger vi bratt opp på steinete sti opp på Montebelloplatået og dreier sydover ut på [[Montebello]] hvor utsikten er mer enn imponerende, langt utover Oslofjorden.",
  },
  {
    km147: 51,
    stageLength: 1.4,
    fromPlace: "Montebello",
    description:
      "Fra Montebello følger vi merking langs åskanten noen hundre meter vestover i terrenget. Der SMVE-traseen dreier hardt venstre ned mot Kabretta holder vi rett fram og følger merking i terrenget en drøy kilometer vestover. Her begynner det å bli sti, se godt etter merkebånd (kan være vanskelige å se) og følg sporet, først langs ryggen, så til venstre ned og over en liten dal, videre vestover og så sydover og opp til vi kommer inn på stien fra Kabretta. Denne følges til vi kommer opp på [[Slettefjell]], eller Presteslettås som det står på noen kart. Herfra er det også enorm utsikt, man ser bl.a. Gaustatoppen, Blefjell m.m.",
  },
  {
    km147: 52.4,
    stageLength: 6,
    fromPlace: "Slettefjell",
    description:
      "Fra Slettefjell skal vi følge stien ned til [[Heierstadsetra]]. De første 3–400 metrene er denne utydelig/ikke-eksisterende så her er traseen merka.\n\nFra toppen følger vi merking rett vestover ned i dumpa og rett sydover langs en slags \"terrasse\", over en liten kolle og dreier så vestover og deretter ned til vi kommer inn på stien, merkinga opphører her.\n\nStien er her noe utydelig, den følger åsryggen (følg med på utsikten!) og drar så bratt sydøstover ned lia til Heierstadsetra som forlengst er borte. Etter nylig hogst har det blitt mye åpnere her, og setervollen er mer synlig. Videre følger vi traktorvei over åsen og ned til høyspenten. Her er stien litt utydelig, følg sporet til høyre og deretter skarpt til venstre, ned bakken, tvers over høyspenttraseen og videre nordvestover. Vi er nå inne på den gamle seterveien som tar oss ned til \"kaffekjelen\" i Stordalen. Herfra følger vi relativt ny traktorvei ned til Jordbærbånn, og derfra skogsbilvei (med en liten snarvei langs gamleveien) ned til bommen ved Vassbånn.\n\nVi tar der hardt høyre og følger først sti og deretter lysløype som delvis sammenfaller med den gamle [[Malmveien]] hvor malmen ble frakta inn til jernverket, over Hurtaåsen og på grusveien sydover og ned til [[Eidsfoss Stridsanlegg]]. Vi drar så ned skråningen og ned trappa til vi ender opp bak Gamle Eidsfos Kro i Bråtagata i industristedet [[Eidsfoss]]. Dropbagstasjon for 147 km og startsted for 87 km er ved Eidsfos Landhandleri.",
  },
  {
    km147: 58.4,
    km87: 0,
    km50: undefined,
    stageLength: 6,
    fromPlace: "Eidsfoss",
    description:
      "Vi løper over den lille brua og deretter langs vannet forbi de gamle bygningene på Eidsfoss Jernverk, så over nok ei lita bru. Vi svinger så til høyre over grassletta og følger turstien i teknisk terreng langs vakre Eikeren, forbi badeplassen Sandvik og opp til Markenrudveien. Vi følger denne grusveien drøye 3 km oppover lia, svinger av til venstre og følger traktorveien sydover til den gamle boplassen [[Finneplassen]]. Herfra tar vi den gamle seterveien sydvestover. Her har det vært hogst og veien er delvis rehabilitert etter tømmerkjøring. Videre er veien lite brukt og det er delvis langt grass. Vi kommer etterhvert inn langs elva Surka som vi følger opp Dritarbakkane, såvidt ut på grusveien og så opp til gamle Gausesetra.\n\nFra Gausesetra går løypa i flott furu/lyngterreng opp over Gauseseterskarva. Når vi nærmer oss Trangdalen er løypa lagt om pga ny høyspenttrase, følg skilter og blåmerking (og sporet!). Løypa dreier først sydvestover litt opp og ned og så bratt opp mot [[Skibergfjell]] 634 MOH, tidligere (feilaktig antatt) høyeste punktet i Vestfold, og i gamle Hof kommune.",
  },
  {
    km147: 67.8,
    km87: 9.4,
    km50: undefined,
    stageLength: 9.4,
    fromPlace: "Skibergfjell",
    description:
      "Fra Skibergfjell fortsetter vi nordvestover ned fra toppen og dreier sydover i lett terreng til vi er på høyde med Bingtjern. Der dreier vi skarpt til høyre og drar over [[Vestfjellet]], som etter kontrollmåling siden 2017 offisielt har vært høyeste punktet i Vestfold, som fra 2024 igjen er eget fylke.\n\nVel nede igjen fortsetter vi sydover på stien, og ved myra før Dovrehallen (rett før høyspenttraseen) tar vi skarpt av til høyre og følger stien ut på åskanten, bratt ned lia, krysser Grønntjernveien og fortsetter skrått sydvestover ned lia til bilveien ved plassen Bamle. Vi følger bilveien 2–300 m og dreier så av til høyre på smal og teknisk sti som vi følger langs [[Hajern]] fram til Flisestø ved Hajern.",
  },
  {
    km147: 72.6,
    km87: 14.2,
    km50: undefined,
    stageLength: 4.8,
    fromPlace: "Flisestø",
    description:
      "Vi tar kjerreveien sydover forbi demningen og fortsetter opp gjennom hyttefeltet og videre sydover over en grusplass og ned til veien svinger vestover, der tar vi av til høyre på sti, på klopp over Sprutebekk. Herfra går løypa på smal og teknisk sti med sammenhengende stigning opp Hajerlia til Reineknatten og videre i vakkert terreng lang åsryggen med utsikt nordøstover, ned til Pyttestua, opp forbi tjernet Stutauet og over til Blåkollen.\n\nFra Blåkollen og ned er det nylig foretatt maskinell hogst og utkjøring, turløypa ble da delvis kjørt i stykker og er derfor lagt om langs en litt mer vestlig trase. Den er merka med rødmaling som kan være vanskelig å se i mørket, det er derfor i tillegg merka med bånd ned til slutten av hogsten. Nederst her er det dessverre nokså gjengrodd, så følg med på sporet!\n\nVel nede svinger løypa litt nordover, før vi snur sydover over Tuftfjell og ned til FV32 ved Tuftbekken øst for Hvittingfoss.",
  },
  {
    km147: 83.4,
    km87: 25,
    km50: undefined,
    stageLength: 10.8,
    fromPlace: "Tuftbekken",
    description:
      "Fra Tuftbekken følger vi FV32 et par hundre meter oppover mot Mossåsen før vi dreier til høyre inn på den nedlagte jernbanetraseen til [[Holmestrand-Vittingfosbanen]] som vi følger en snau kilometer sydover. Vi dreier så 90 grader til venstre, drar opp mot Tollåsen, og ved ei hytte dreier vi 90 grader til høyre og fortsetter sydover, litt ned og deretter i kraftig stigning opp lia, så litt utflating før en bratt oppstigning mot Høgås. I dagslys og klarvær ser vi her store deler av Ytre Sandsvær, som inntil 1.1.1964 var egen kommune.\n\nFra Høgås fortsetter vi slakt ut sydover, ned over Bossmyr, følger ryggen sydover før dels bratt nedstigning. Istedet for å følge turløypa nordover mot Gulli følger vi stien sydover langs åsen.\n\nNB! Før Skarvene dreier vi 90 grader til venstre ut av stien (følg med på sporet!) og kutter 50 meter i terrenget ned til en ny sti som vi følger ned mot Lindtjern.\n\nNB! Før tjernet skal vi ikke følge den mest tydelige stien rett fram, men følge sporet og dreie til høyre, over en bakkekam og ned til sydenden av tjernet der vi kommer inn på en (utydelig) sti. Denne følges langs tjernet, vi holder god klaring til hytta ved passering av denne (vis hensyn) og fortsetter stien ned bakken, til høyre på traktorvei og deretter hardt venstre på skogsbilvei som følges nordøstover opp bakken og videre østover.\n\nFør Småtjern tar vi av til høyre på traktorvei som følges sydover forbi ei tømmerhytte og videre over hogstflata der vi dreier svakt østover og ned over en liten bekk. Rett etter denne dreier vi hardt høyre. Her er det delvis merka sydover til Årvoldmyra, vestover over denne og inn på sti/traktorvei som følges sydover og ned til snuplassen vest for Berganvannet. Etter 50 meter på veien holder vi til høyre (rett fram) opp bakken og inn på delvis utydelig sti og tømmerslep i småkupert terreng over åsryggen og ned til Damtjernveien, et par hundre meter vest for Damtjern. På dette strekket er det nokså åpent i traseen men dårlig med tråkk, så følg nøye med på sporet!\n\nPå Damtjernveien er det dropbagstasjon og start for 50 km.",
  },
  {
    km147: 94,
    km87: 35.6,
    km50: 0,
    stageLength: 10.6,
    fromPlace: "Damtjernveien",
    description:
      "Vi følger Damtjernveien ca 50 meter østover og tar av til høyre på kjerrevei. Etter et par hundre meter tar vi av til høyre på tidligere gjengrodd traktorvei som nå er rydda og delvis merka. Denne følges opp lia, dreier sydover og opp på Loftåsen. Vi følger merkinga videre i terrenget sydover åsen og ned lia. Pga en tømmerlunne som sperrer tar vi til høyre på improvisert trase, ned over bekken og inn på bilveien. Vi følger bilveien oppover og etter noen hundre meter svinger vi rett opp lia på steinete traktorvei og følger denne bratt oppover mot syd, litt nordvestover og så igjen sydover, forbi ei hytte med et utsiktstårn og videre ut til toppen av sjekkpunkt [[Snippane]] 399,7 MOH, høyeste punktet i nye Tønsberg kommune. Her er det DNT-kasse og skilt.",
  },
  {
    km147: 96.7,
    km87: 38.3,
    km50: 2.7,
    stageLength: 2.7,
    fromPlace: "Snippane",
    description:
      "Fra toppen løper vi noen meter tilbake, holder høyre og følger traktorvei ned, først nordover og dreier så sydover. Vel nede holder vi til høyre over myra, litt sydover, dreier østover og så sydover over myra og følger traktorvei ned til Bjørndalsveien.\n\nVi følger Bjørndalsveien sydover drøye 2 km forbi Lånesetra til nordspissen av [[Merkedammen]], tar der til høyre og fortsetter langs vestsida av vannet ca 1 km, først på kjerrevei, så sti. I løypekryss tar vi så til høyre i retning Rososetra, etter å ha passert myra svinger vi av til høyre og drar rett opp den bratte stigningen opp østsida av Skalhogg. Her er utsikten upåklagelig.\n\nFra toppen fortsetter vi nordover ryggen og dreier ned på vestida, forbi ei hytte og ned Riveskaftkleiv. Vel nede på stien tar vi skarpt høyre og følger kjerrevei og sti forbi Rososetra, videre forbi Kallebergsetra til DNT-hytta Linsverksetra.\n\nFra Linsverksetra fortsetter vi nordøstover på merka rute, og passerer snart minneplate for [[Milorg D-15 slipplass \"Lind\"]], videre på klopper over vakre [[Tolvmannsmyr]] før vi rett før Merkedammen svinger sydover på løypa mot Åletjønn og ned mot Hølasetra. Her tar vi til venstre og forsetter sydøstover på teknisk sti før vi ved Grøntjern dreier av til venstre og starter på stigningen opp mot [[Brånafjell]] 398,7 MOH, høyeste punktet i nye Sandefjord kommune, DNT-kasse og skilt.",
  },
  {
    km147: 108.7,
    km87: 50.3,
    km50: 14.7,
    stageLength: 12,
    fromPlace: "Brånafjell",
    description:
      "Fra toppen følger vi stien (og sporet) nordover ryggen, dreier så ned vestover, over ei lita myr og opp til elgtårnet. Her er stien utydelig og det er ingen merking, men vi følger sporet og videre tømmervei nordover ryggen, ned forbi ei hytte og ut på Valmestadveien ved snuplassen nord for Smalmyr. Her følger 250 meter fall på snaue 5 km utfor og flatt på grusvei (og noen hundre meter asfalt) før vi krysser FV312 ved Elverheim.\n\nVi drar opp grusveien og fortsetter i grove trekk nordøstover på traktorvei opp på Nabberen. Like før toppen tar vi av til høyre og følger sporet sydover gjennom draget og inn på sti, denne fortsetter i småkupert terreng, etterhvert i vakker bøkeskog, fram til sydspissen av Nabberen ved Telia sin basestasjon.",
  },
  {
    km147: 117.3,
    km87: 58.9,
    km50: 23.3,
    stageLength: 8.6,
    fromPlace: "Nabberen",
    description:
      "Vi fortsetter bratt ned lia og videre ned mot FV306 på Kjønnerød. Vi drar selvfølgelig ikke ut på asfalten, men tar grusveien østover ned forbi Kjønnerød gård, Karlshus og Hjerpetjønngårdene ned til FV306 som vi følger 300 m østover.\n\nVi svinger av sydover forbi Øvre Bakke og inn på Reløypa, skiløypetraseen til turrennet Re-løpet. Skiløypa følges til rett nord for Gislerød, der vi tar av, krysser bekken og dreier østover og deretter sydover på kjerrevei, ut på Tinghaugveien som følges ca 150 m nedover før vi svinger inn på kjerreveien inn til badeplassen på Langevann.",
  },
  {
    km147: 124.3,
    km87: 65.9,
    km50: 30.3,
    stageLength: 7,
    fromPlace: "Langevann",
    description:
      "Vi svinger til venstre før utedoen, fortsetter ca 200 m på kjerrevei og svinger så ned til høyre, og løper smal og teknisk sti langs østbredden av det vakre Langevann. I sydspissen drar vi over kloppene forbi ei hytte og tar til venstre og opp på Bjønnemyrveien. Denne følges ca 1 km til snuplassen, over denne og videre på skiløypa/kjerrevei til vi litt ned i bakken tar til venstre og starter klatringen opp til Søndre Brattås. Vi løper her på teknisk sti i flott furu/lyngterreng med vid utsikt vestover, og vel oppe på sjekkpunktet på østsida av toppen har vi vid utsikt over hele Ramnessletta, som ligger inne i den såkalte [[Ramnesvulkanen]].",
  },
  {
    km147: 128.3,
    km87: 69.9,
    km50: 34.3,
    stageLength: 4,
    fromPlace: "Søndre Brattås",
    description:
      "Fra toppen returnerer vi en liten bit samme vei, og løper så nordover, ned bakken og tar til høyre ned åssida. Etter myra Pyttedraget drar vi nordover Skytøyåsen, og nesten helt nord på denne knekker vi i svingen skarpt av stien ut til venstre og ned til dammen. Her er det rydda trase gjennom hogstflata og merka ned siste biten.\n\nVi passerer dammen på vestsida, ut på gårdsveien og deretter Tinghaugveien som følges et par hundre meter, vi drar så inn på gårdsvei som følges noen hundre meter før vi tar av til høyre på fin sti. Vi følger stien hele veien ned, over bekken og ut nordover på Ramnesveien. Etter noen hundre meter nordover på denne drar vi av til høyre opp over beitet på Tufteplassen og rett fram på sti.\n\nEtter litt tar vi av til venstre og følger derfra sti og traktorvei opp til toppen av Sjøssfjell. Vi svinger opp på åsryggen syd for teknisk bygg og følger teknisk sti nordover åsryggen og ned eggen og litt østover til vi kommer ut på en annen sti. Denne følges sydøstover ned til traktorvei, den såkalte Opprannløypa, som vi følger sydover til barnehagen. Der tar vi av til venstre, inn på sti som følges ned til Kileveien ved Brår. Videre sykkelsti til [[Revetal]] sentrum der man bl.a. finner bensinstasjon hvor det er anledning til å handle.",
  },
  {
    km147: 135.2,
    km87: 76.8,
    km50: 41.2,
    stageLength: 6.9,
    fromPlace: "Revetal",
    description:
      "Vi fortsetter gjennom parken, inn på g/s-vei østover og så sydover retning Valleåsen. Vi tar så av til venstre og løper sikksakk på stikkveier og stier opp gjennom boligfeltet. Vi svinger så nordover ned på østsida av åsen og fortsetter sydover på sti, først forbi nytt boligfelt og deretter teknisk sti i vakre omgivelser på Bøåsen, på østre kant av Ramnesvulkanen. Nesten nede ved Bøgårdene drar vi hardt venstre og følger kjerre/traktorvei nordover og så østover, opp langs jordet til g/s-vei inn til Skjeggestadåsen. Vi tar så grusveien og stikkveier opp gjennom feltet og nordøstover til Langemyr. Derfra følger vi fin tursti halvannen kilometer nordover til Kåpe. Etter 200 m nordøstover på Kåpeveien drar vi til venstre inn på turstien, som følges i småkupert terreng nordover, til vi kommer ut på Hengsrudveien, FV306. De siste 100 m løper vi på utsida av autovernet, krysser Hengsrudveien og løper i mål!",
  },
  {
    km147: 143.7,
    km87: 85.3,
    km50: 49.7,
    stageLength: 8.5,
    fromPlace: "Hengsrød",
    description:
      "Mål for alle distanser.",
  },
];

export const regler = {
  title: "Regler",
  intro: [
    "Vestfold Historic Ultra Trail (VHUT) er et non-stop terrengultraløp som over lange strekninger går i skogsterreng langt fra offentlig vei og bebyggelse, delvis i mørke (ikke 50km), og stedvis uten mobildekning.",
    "Det er to CPer med dropbagservice for 147km (Eidsfoss og Damtjernveien) og en for 87km (Damtjernveien), samt enkel servering på Hajern for 147 og 87km. Ut over dette er løpet basert på self-support.",
    "Ved påmelding til VHUT aksepterer Deltaker følgende vilkår for deltakelse. Ved overtredelse kan arrangøren etter en vurdering velge å diskvalifisere Deltaker eller å gi tillegg i tid, avhengig av overtredelsens alvorlighet.",
  ],
  rules: [
    { number: 1, text: "Deltaker deltar på eget ansvar, og tar selv ansvar for egen sikkerhet underveis. Arrangøren kan ikke holdes ansvarlig, økonomisk eller på annen måte, for forpliktelser, skader, sykdom e.l. Deltaker pådrar seg i forbindelse med arrangementet." },
    { number: 2, text: "Deltaker er frisk, og har ingen sykdom eller lidelse som hindrer deltakelse." },
    { number: 3, text: "Deltaker innehar det nødvendige treningsgrunnlaget, og har ved start gjort de nødvendige forberedelser som gjør ham/henne i stand til å gjennomføre konkurransen på egenhånd." },
    { number: 4, text: "Deltaker innehar de nødvendige ferdighetene for selvstendig å navigere gjennom løypa ved hjelp av GPS eller kart og kompass, og vil hele veien følge angitt rute, evt med unntak av direkte avstikkere til butikker/bensinstasjoner. GPS-spor blir gjort tilgjengelig fra arrangør. NB! Vis spesiell aktsomhet ved kryssing av/løping langs offentlig vei!" },
    { number: 5, text: "Deltaker plikter før start å sette seg inn i skriftlig informasjon gitt av arrangøren, og underveis i konkurransen å rette seg etter arrangørens anvisninger, direkte eller via telefon." },
    { number: 6, text: "Deltaker tillater at arrangøren publiserer resultatlister på nett der navn, klubb, fødselsår og nasjonalitet er inkludert. I tillegg har arrangøren rett til å publisere bilder og videoer av Deltaker på nett/sosiale medier." },
    { number: 7, text: "Deltaker skal under hele løpet bringe med seg obligatorisk utstyr som angitt fra arrangøren, og benytte dette ihht instruks. Liste over obligatorisk utstyr blir offentliggjort i god tid før løpet." },
    { number: 8, text: "Deltaker bringer selv med seg nødvendig mat og drikke til hele løpet, utenom servering på CPer. For 147km er det 2 CPer/dropbagstasjoner med servering: Eidsfoss ca 60 km og Damtjernveien ca 97km. For 87km er det 1 dropbagstasjon: Damtjernveien ca 37km. I tillegg er det et enkelt serveringstilbud på Hajern etter hhv 75km (147km) og 15km (87km). Det er også tillatt å handle i butikker/bensinstasjoner langs løypa. For 87 og 50km er det ingen steder å handle før Revetal ca 10km før mål. Det er normalt god tilgang på vann i terrenget langs store deler av løypa. Ved behov vil arrangøren sette ut vannposter underveis." },
    { number: 9, text: "Deltaker skal under hele løpet bære utlevert GPS-tracker festet utenpå (oppå) sekken. Dette innebærer at enhver som ønsker det kan følge Deltakers posisjon live underveis via racetracker.no på internett." },
    { number: 10, text: "Deltaker plikter å hjelpe enhver annen deltaker som trenger hjelp, og om nødvendig kontakte arrangør. Ved fare for liv og helse skal 113 kontaktes og deltaker bistår til vedkommende er overlatt til kyndig personell." },
    { number: 11, text: "Deltaker har ikke anledning til å motta hjelp eller etterforsyninger av noe slag fra privat støtteapparat underveis, og kan ikke benytte private depoter. Unntak er innenfor løpets offisielle dropbag-/servicestasjoner, se punkt 8. Det er ikke tillatt å hvile i privatbiler e.l." },
    { number: 12, text: "Det er ikke anledning til å benytte «pacere», dvs samløping med ikke-deltakere." },
    { number: 13, text: "Deltaker ferdes underveis ihht Friluftsloven, med de rettigheter og plikter som følger av denne. Dette innebærer bl.a. å vise hensyn ovenfor turgåere og beitedyr, lukke grinder/gjerder etter seg og ikke etterlate seg søppel av noe slag underveis." },
    { number: 14, text: "En deltaker som innser at han/hun ikke vil være i stand til å fullføre løpet eller rekke sperretida på dropbagstasjoner eller i mål skal straks varsle arrangør om brutt løp, og begi seg i retning offentlig vei e.l. Arrangøren kan ved behov forlenge sperretider underveis og i mål, og vil da informere berørte løpere pr telefon/sms." },
    { number: 15, text: "Mottatt GPS-tracker skal straks leveres tilbake ved fullført/brutt løp. Ikke tilbakelevert tracker faktureres Deltaker etter pris angitt av Racetracker.no." },
    { number: 16, text: "Ved avlysning av løpet vil startkontingenten refunderes, med fratrekk for påløpte ikkereversible utgifter. Startkontingent refunderes ikke for påmeldte deltakere som ikke stiller til start." },
    { number: 17, text: "Arrangøren kan ved behov endre og komme med presiseringer av disse vilkårene. Endringer av betydning publiseres på arrangementets FB-side/via mail til Deltaker i god tid før arrangementsdato." },
  ],
} as const;

export const footer = {
  facebookUrl: "https://www.facebook.com/vestfoldhistoricultratrail/",
  facebookLabel: "Facebook",
  newsletterLabel: "Nyhetsbrev",
  newsletterHref: "#",
  copyright: "Vestfold Historic Ultra Trail",
} as const;
