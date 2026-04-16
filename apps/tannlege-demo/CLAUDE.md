@AGENTS.md

# Tannlegetjenester — Demo Website

## Your task
Build a complete, production-quality demo website for a Norwegian dental clinic.
This is a cold outreach demo — it must look real, feel premium, and be unique to the dental industry.
All copy in Norwegian Bokmål.

## IMPORTANT: Research first, then design
Before writing any code:
1. Use WebFetch to fetch and study these real Norwegian dental clinic sites:
   - https://afnan.no
   - https://tannklinikken.no
   - https://www.aktivtann.no
2. Analyze what makes them work: layout patterns, section ordering, what information dental patients care about, how they present services, what CTAs they use
3. Design YOUR site based on what you learn — do NOT copy advokatfirma-demo's layout. Dental sites have very different needs than law firms.

## Technical approach
- Single page.tsx file with all content
- "use client" with useState/useEffect for interactivity
- Tailwind v4 with @theme tokens in globals.css
- Two Google Fonts that suit a modern dental clinic
- lucide-react icons
- All hardcoded Norwegian content — no CMS
- Use the impeccable:frontend-design skill for design quality

## What dental clinic sites typically need (adapt based on your research)
- Booking/appointment CTA prominently placed (this is the #1 action)
- Services with brief descriptions (tannbleking, implantater, kjeveortopedi, rotfylling, etc.)
- Team/dentist presentation with credentials
- Patient testimonials focused on anxiety reduction and trust
- Opening hours and emergency info
- Location/map section
- Insurance/pricing transparency
- Modern, calming aesthetic — NOT corporate

## Design direction
**Aesthetic:** Clean, calming, medical-premium. Dental patients are often anxious — the design should feel reassuring, modern, and trustworthy. Rounded corners, soft gradients, plenty of white space.
**Color palette:** Navy #0a2540, white #ffffff, pale sky blue #e0f0ff, soft grey #f0f2f5
**Tone:** Warm, reassuring, professional Norwegian

## Fictional business details
- **Name:** Fjordtann Tannklinikk
- **Location:** Bergen
- **Founded:** 2011
- **Tagline:** Trygg tannbehandling i moderne omgivelser

## After building
Run: npm run build
Fix any errors until build passes. Do not deploy.
