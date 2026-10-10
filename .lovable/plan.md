# Alex Moreno — Booking-First Trainer Site

Single scrolling page at `/`, English, dark near-black base, orange accent used sparingly. Mobile-first.

## Sections
1. **Sticky header** — "Alex Moreno" wordmark + always-visible orange "Book" button (booking always one tap away; also a sticky bottom bar on mobile).
2. **Hero** — Headline e.g. "Stronger. Consistently. In less time." Subline: "Strength & conditioning in Barcelona — studio or outdoors." Primary "Book Your Session", secondary "View Schedule" link scrolling to the schedule.
3. **Schedule** — The visual centrepiece. Day tabs (Mon–Sat) with a timetable list; each row: time, class name, focus tag (Strength / Conditioning / Mobility), location tag (Studio / Outdoor), duration, spots left (orange when low, "Full" muted), and a "Book" button. Filter chips for Studio/Outdoor. Desktop shows a week grid view.
4. **Trust** — Coach portrait + 3 bullets (10+ years experience, structured progressive programming, consistent weekly tracking). Two-image strip: studio and outdoor (Ciutadella park / Barceloneta beach).
5. **Social proof** — 4–6 one-line testimonials (first name, age, profession) + community photo grid.
6. **Logistics** — Compact grid: base location, outdoor spots, session length (45–60 min), what to bring, for / not for.
7. **Final CTA** — Large block "Your next session is on the schedule." + Book button.
8. **Footer** — Location, Instagram placeholder.

## Booking
All Book buttons open one external booking link (placeholder, e.g. Calendly) in a new tab; per-class buttons append the class name. You give me the real link later — set in one place.

## Images
Clean placeholders (dark tiles with labels) until you upload photos of Alex, the studio, outdoor sessions and the community.

## Design
- Display font: Archivo Black / Barlow-style condensed sans for headings, clean sans body. No Inter.
- Tokens in global styles: near-black background, graphite cards, off-white text, orange primary.
- No pricing, forms, email capture, blog, or motivational copy.

## Technical details
- `src/routes/index.tsx` rewritten with head() metadata; sections as components in `src/components/site/`.
- Schedule data in `src/data/schedule.ts`; booking URL constant in `src/config/booking.ts`.
- Fonts via `<link>` in `__root.tsx`; root title/meta updated.
- Small test confirming the booking link builder includes the class name.
