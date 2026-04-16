# Fysio / Kiropraktor landingsside

Landingssidemal for selvstendig næringsdrivende (fysioterapeut, kiropraktor m.m.) bygget med **Next.js**, **Sanity CMS** og **shadcn/ui**.

## Seksjoner

- **Hero** – Overskrift, tagline og knapp for «Bestill time»
- **Om [person]** – Navn, tittel, bilde og biografi
- **Referanser** – Sitater fra pasienter
- **Priser** – Prisliste og egen seksjon for **Helseforsikring**
- **Kontakt** – Kart (Google Maps embed) og kontaktinfo (adresse, telefon, e-post, åpningstider)
- **Bestill time** – CTA som åpner ekstern bestillingslenke i ny fane

## Kom i gang

### 1. Avhengigheter

```bash
npm install
```

### 2. Sanity-prosjekt

Du trenger et Sanity-prosjekt for å hente innhold.

1. Gå til [sanity.io/manage](https://sanity.io/manage) og opprett et prosjekt (eller logg inn og bruk eksisterende).
2. Kopier prosjekt-ID og dataset (vanligvis `production`):

```bash
cd sanity
npx sanity login
npx sanity project list   # eller opprett ny med: npx sanity project create
```

3. Opprett `.env.local` i **prosjektroten** (samme nivå som `package.json`) for Next.js:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ditt-prosjekt-id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. For **Sanity Studio** (som kjører fra `sanity/`-mappen) trenger du de samme variablene i `sanity/.env`. Kopier innholdet fra roten eller fra `sanity/.env.example` til `sanity/.env`.

### 3. Sanity Studio

**Lokalt (eget vindue):**

```bash
npm run studio
```

Studio åpnes vanligvis på [http://localhost:3333](http://localhost:3333).

**Innebygd på nettsiden (/studio):**

Når du kjører `npm run dev` eller har deployet til Vercel, er Studio også tilgjengelig på **`/studio`** (f.eks. [http://localhost:3000/studio](http://localhost:3000/studio)). Slik kan brukere redigere innhold uten å kjøre Studio separat. Legg til domenet ditt (f.eks. `https://dittnettsted.vercel.app`) under [sanity.io/manage](https://sanity.io/manage) → prosjektet ditt → **API** → **CORS origins**, med «Allow credentials» avkrysset. Her oppretter du dokumenter for:

- **Innstillinger** – Sidetittel, tagline, «Bestill time»-URL og knappetekst
- **Om personen** – Navn, tittel, bilde, kort og lang biografi
- **Referanser** – Sitater med forfatternavn (og valgfri rolle)
- **Priser** – Prisliste (tjeneste, beløp, beskrivelse) + tittel og tekst for Helseforsikring
- **Kontakt** – Adresse, telefon, e-post, åpningstider, Google Maps embed-URL

**Singleton-dokumenter:** Under «Om personen», «Priser» og «Kontakt» brukes faste dokument-ID-er (`person`, `prices`, `contact`, `siteSettings`). Opprett dokumentet med den ID-en som vises i Studio, eller la strukturen opprette dem.

**Kart:** I Kontakt-dokumentet fyller du inn «Google Maps embed-URL». Finn adressen i Google Maps → Del → «Bygg en kart» → kopier `src`-URL fra iframe-koden og lim den inn i feltet.

### 4. Kjøre nettsiden

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000). Uten konfigurert Sanity vises en tom landingsside; med riktig `.env.local` og innhold i Studio lastes innholdet inn (med revalidering hvert 60. sekund i dev).

### 5. Bygg og produksjon

```bash
npm run build
npm run start
```

Uten `NEXT_PUBLIC_SANITY_PROJECT_ID` (eller med verdi `your-project-id`) bygges siden med tomme data slik at bygget ikke feiler.

## Scripts

| Script   | Beskrivelse                    |
|----------|---------------------------------|
| `npm run dev`    | Starter Next.js i utviklingsmodus |
| `npm run build`  | Bygger Next.js til produksjon      |
| `npm run start`  | Starter produksjonsserver          |
| `npm run studio` | Starter Sanity Studio i `sanity/`  |
| `npm run lint`   | Kjører ESLint                      |

## Læring – Sanity

- **Studio:** Opprett og rediger dokumenter og se hvordan typer (schemas) styrer skjemaene.
- **GROQ:** I Studio, åpne «Vision»-verktøyet og prøv spørringer som `*[_type == "person"][0]`. Samme spørringer brukes i `src/sanity/queries.ts`.
- **Bilder:** Bilder lagres i Sanity og bygges til URL-er med `urlFor()` i `src/sanity/image.ts` (brukes av Next.js `Image`).
- **Revalidering:** Siden bruker ISR med `revalidate: 60`. Etter endringer i Studio oppdateres innholdet innen ett minutt (eller ved ny bygg/deploy).

## Lisens

MIT
