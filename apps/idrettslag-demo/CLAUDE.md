@AGENTS.md

# Idrettslag og -klubber — Demo Website

## Your task
Build a complete, production-quality demo website for a Norwegian local sports club (idrettslag).
This is a cold outreach demo — it must look real, feel premium, and be unique to community sports clubs.
All copy in Norwegian Bokmål.

## IMPORTANT: Research first, then design
Before writing any code:
1. Use WebFetch to fetch and study these real Norwegian sports club sites:
   - https://agdermotorsport.no
   - https://www.thommessen.no (for modern Norwegian design quality reference)
2. Analyze what sports clubs need: how they organize information about teams, activities, schedules, membership, volunteer info, news/events
3. Design YOUR site based on what you learn — do NOT copy advokatfirma-demo's layout. Sports clubs have completely different needs than law firms. They're community organizations, not businesses.

## Technical approach
- Single page.tsx file with all content
- "use client" with useState/useEffect for interactivity
- Tailwind v4 with @theme tokens in globals.css
- Two Google Fonts that suit an energetic community sports club
- lucide-react icons
- All hardcoded Norwegian content — no CMS
- Use the impeccable:frontend-design skill for design quality

## What sports club sites typically need (adapt based on your research)
- Hero with club identity, established year, member count
- Activities/sports sections (fotball, håndball, friidrett, ski, etc.)
- Upcoming events / treningsoversikt (training schedule)
- "Bli medlem" (become a member) as primary CTA — membership-driven, not sales
- News/announcements section
- Volunteer/dugnad appeal (community spirit is central)
- Sponsors section (local businesses)
- Board/leadership team
- Contact info and facility location
- Youth development focus

## Design direction
**Aesthetic:** Energetic, community-first, club pride. This is NOT a business — it's a volunteer-driven local community. The design should feel welcoming, active, inclusive. Think local identity, team colors, pride in history.
**Color palette:** Club green #1a6b3c, white #ffffff, charcoal #1e1e1e, gold accent #d4a843
**Tone:** Welcoming, energetic, community-proud Norwegian

## Fictional business details
- **Name:** Nordvik Idrettslag
- **Location:** Trondheim
- **Founded:** 1947
- **Tagline:** Idrettsglede for hele bygda

## After building
Run: npm run build
Fix any errors until build passes. Do not deploy.
