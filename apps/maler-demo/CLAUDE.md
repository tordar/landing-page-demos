@AGENTS.md

# Maler- og glassarbeid — Demo Website

## Your task
Build a complete, production-quality demo website for a Norwegian painting/decorator company.
This is a cold outreach demo — it must look real, feel premium, and be unique to the painting trade.
All copy in Norwegian Bokmål.

## IMPORTANT: Research first, then design
Before writing any code:
1. Use WebFetch to fetch and study these real Norwegian painting company sites:
   - https://100maling.no
   - https://7fjellbs.no
   - https://100pa.com
2. Analyze what makes them work: layout patterns, how they showcase projects, what services they list, how they present before/after work, what CTAs they use
3. Design YOUR site based on what you learn — do NOT copy advokatfirma-demo's layout. Painting companies have very different needs than law firms.

## Technical approach
- Single page.tsx file with all content
- "use client" with useState/useEffect for interactivity
- Tailwind v4 with @theme tokens in globals.css
- Two Google Fonts that suit a professional trades company
- lucide-react icons
- All hardcoded Norwegian content — no CMS
- Use the impeccable:frontend-design skill for design quality

## What painting company sites typically need (adapt based on your research)
- Project gallery/portfolio (use CSS color blocks or gradient panels as placeholders for project photos)
- Service list: innvendig maling, utvendig maling, tapetsering, sparkling, glassarbeid, fasadearbeid
- "Få et tilbud" (get a quote) as the primary CTA — trades are quote-driven, not booking-driven
- About section with company story, number of years, team size
- Customer testimonials from homeowners and businesses
- Service area (which regions they cover)
- Certifications / mesterbrev
- Before/after visual concept (even as placeholders)

## Design direction
**Aesthetic:** Clean craft portfolio. The site should feel like transformation — color, renewal, fresh surfaces. Professional trades aesthetic, not corporate. Show pride in craftsmanship.
**Color palette:** Off-white #faf8f5, cobalt blue #1a3c8f, warm grey #6b6b6b, accent terracotta #c0583a
**Tone:** Professional, reliable, craftsman-proud Norwegian

## Fictional business details
- **Name:** Strand Malermestre
- **Location:** Stavanger
- **Founded:** 2003
- **Tagline:** Kvalitetshåndverk som varer

## After building
Run: npm run build
Fix any errors until build passes. Do not deploy.
