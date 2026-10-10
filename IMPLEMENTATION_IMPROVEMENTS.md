# Frontend improvements — implementation plan

Tracked plan for the frontend-only upgrades discussed after reviewing the live site. **No backend work.** Booking stays an external Calendly (or similar) link.

Check a box when that item is done and verified in the browser (desktop and mobile where it matters).

---

## How to use this file

- Work **in phase order**. Later phases assume photos, a working mobile hero, and a clearer schedule.
- Keep the existing brand: dark near-black, orange accent, Archivo + Barlow, booking-first single page.
- Prefer copy, layout, local data, and images over new libraries.
- After each phase: click through hero → schedule (filters + days + full class) → coach → proof → logistics → final CTA → footer, on phone and desktop widths.

**Progress**

- [ ] Phase 1 — Photos and mobile hero
- [ ] Phase 2 — Schedule as “this week”
- [ ] Phase 3 — How it works, price, real contact
- [ ] Phase 4 — Nav, next-slot CTA, cut filler
- [ ] Phase 5 — Accessibility, SEO, language, legal

---

## Out of scope

Do not add these while working through this plan:

- [ ] Booking backend, waitlist emails, or in-app checkout
- [ ] Light theme / second colour theme
- [ ] Coach dashboard or admin UI
- [ ] Extra Radix/shadcn chrome that is not used on the page
- [ ] Full month calendar (day tabs + list is enough)
- [ ] Rewriting published git history

---

## Key files (expected touch points)

| Area | Files |
| --- | --- |
| Page composition | `src/routes/index.tsx`, `src/routes/__root.tsx` |
| Sections / chrome | `src/components/site/Sections.tsx` |
| Schedule UI | `src/components/site/Schedule.tsx` |
| Session data | `src/data/schedule.ts` |
| Booking URL | `src/config/booking.ts` |
| Tokens / type | `src/styles.css` |
| Assets | `public/` (photos, OG image, favicon) |

---

## Phase 1 — Photos and mobile hero

Highest visual impact. The site should stop looking like a wireframe, and the first phone screen should be readable.

### 1.1 Real photography

- [ ] Collect 6–8 photos: coach portrait, studio coaching, outdoor (beach / park / Montjuïc), 1–2 community/session shots
- [ ] Replace hero `Photo` placeholder (“Alex coaching — studio”)
- [ ] Replace coach portrait placeholder
- [ ] Replace location tiles (Eixample / Barceloneta / Ciutadella)
- [ ] Replace or **remove** the four proof squares (Studio group, Beach session, Park circuit, Barbell class) — keep only if the images are real
- [ ] Add meaningful `alt` text (who / where / what’s happening), not just the old eyebrow labels
- [ ] Compress images for web (don’t ship huge originals)
- [ ] Decide hero treatment: keep two-column, **or** full-bleed photo with dark gradient and type on top (prefer full-bleed once photos exist)

### 1.2 Mobile headline and first screen

- [ ] Headline `Stronger. Consistently. In less time.` fits a ~390px viewport with no horizontal overflow
- [ ] Use fluid / stepped type so `text-5xl` uppercase is not clipping
- [ ] Third line wraps or sizes down before it runs off-screen
- [ ] First mobile viewport is not three identical Book CTAs (header + hero + sticky bar)
- [ ] Keep **one** strong primary Book on the first screen; sticky bar can stay as the persistent action
- [ ] Header Book stays smaller / quieter than the sticky bar (or hide header Book on small screens if the bar is enough)
- [ ] “View Schedule” remains easy to reach without competing with Book

### 1.3 Phase 1 verification

- [ ] Phone: hero type fully visible; no sideways scroll
- [ ] Phone: not looking at stacked duplicate orange buttons above the fold
- [ ] Desktop: hero still reads as editorial, not a squeezed mobile layout
- [ ] Every remaining image tile is a real photo or has been deleted

---

## Phase 2 — Schedule as “this week”

Make the timetable answer *when, where, and what is this class?* without leaving the page.

### 2.1 Time context (client-side only)

- [ ] Default selected day is **today** if there are sessions, otherwise the **next day with sessions**
- [ ] Day tabs show a date (e.g. `Mon 13 Oct`), not only `Mon`
- [ ] Visually mark **today**
- [ ] Highlight the **next bookable** (not full) slot
- [ ] Confirm Sunday stays closed — or add an explicit “Rest / closed Sunday” note so it doesn’t look forgotten

### 2.2 Rows → clearer session UI

- [ ] Mobile: card layout (time + place on one line, Book full-width) instead of the cramped multi-row grid
- [ ] Desktop: keep scannable rows or cards, but align columns so Book / spots don’t jump
- [ ] Add a one-line description per class type (Strength Foundations, Lunch Conditioning, etc.) — static copy on the session or a small lookup
- [ ] Tap/click to expand: what you’ll do, who it’s for, what to bring
- [ ] Show scarcity more clearly when spots ≤ 2 (keep orange text; optional tiny capacity bar using existing `spots` / `capacity`)

### 2.3 Waitlist, empty states, filters

- [ ] “Waitlist via booking” is a **real control** (link or button) that opens the booking URL, not muted static text
- [ ] Empty filter copy (“No outdoor sessions this day”) suggests the **next day that has that filter**
- [ ] Studio / Outdoor filters remain; selected state stays obvious
- [ ] Selected **day** tab uses stronger contrast (brand orange or clearly lighter than `surface`) — two similar dark greys is not enough

### 2.4 Places and outdoor logistics

- [ ] Place names link out to Google Maps (Eixample studio, Ciutadella, Barceloneta, Montjuïc)
- [ ] Outdoor sessions show a one-line **rain plan** (“Studio backup if weather is bad” or similar)
- [ ] Maps links open in a new tab and are labelled as external / maps

### 2.5 Day tabs on small phones

- [ ] Six day labels don’t collide or overflow on a narrow screen
- [ ] Use a horizontal scroll strip **or** Today / Tomorrow + remainder — pick one and stick to it
- [ ] Tabs remain keyboard-operable after the layout change

### 2.6 Phase 2 verification

- [ ] Open the site on a weekday and a weekend (or mock the date) and confirm the default day is correct
- [ ] Filter Outdoor on a day with none → empty state points somewhere useful
- [ ] Full class: waitlist control opens booking
- [ ] Expand a class: extra copy appears; Book still works
- [ ] Maps links open the right place
- [ ] Phone + desktop: day tabs usable, selected day obvious

---

## Phase 3 — How it works, price, real contact

Trust and conversion copy. Still static; no forms backend.

### 3.1 How booking works

- [ ] Add a short **How it works** block (3 steps): pick a slot → book in Calendly → show up
- [ ] Place it near the schedule or between schedule and coach (not buried after testimonials)
- [ ] First-session expectation: arrive 5 min early, what happens in session 1, English / Spanish

### 3.2 Price and “who it’s for”

- [ ] Put a **price or range** in Logistics (e.g. from €X / 60 min, intro session €Y) — static copy is enough
- [ ] Keep “For” / “Not for” — make “Not for” easier to scan (it is good positioning)
- [ ] Optional: one line on cancellation / late policy if you have it

### 3.3 Contact that locals actually use

- [ ] Instagram URL is a **real profile**, not `https://instagram.com`
- [ ] Add **WhatsApp** as a secondary CTA (link with prefilled message is fine)
- [ ] Optional email or tap-to-call if Alex wants it
- [ ] Footer lists location + Instagram + WhatsApp (not a single stray link)
- [ ] Drop or rewrite “Coach, 33” — use credentials / who he trains instead of age

### 3.4 Testimonials

- [ ] Keep quotes; avoid four identical card clones feeling like lorem
- [ ] Optional face crop **only if real**
- [ ] Tag session type where it helps (studio / beach)
- [ ] Pull one metric quote (e.g. deadlift +40 kg) so it isn’t all “fits my calendar”

### 3.5 Phase 3 verification

- [ ] A new visitor can answer: what it costs, how to book, what session 1 is, how to message Alex
- [ ] Instagram and WhatsApp go to real destinations
- [ ] No leftover placeholder social URLs

---

## Phase 4 — Nav, next-slot CTA, cut filler

Tighten the page chrome and the last conversion beat.

### 4.1 Navigation

- [ ] Desktop nav: Schedule, Coach, Details (logistics), Book — not only Schedule + Book
- [ ] Mobile: Schedule is reachable in the header **or** sticky bar (today it is hidden on xs)
- [ ] Sticky header doesn’t eat the whole viewport; sticky bottom bar stays the primary mobile Book
- [ ] In-page anchors scroll correctly under the sticky header (`scroll-mt` on all targets)
- [ ] Optional Instagram in nav/footer only — don’t add a fourth Book

### 4.2 Final CTA = next real slots

- [ ] Final section is not a repeat of the hero headline plus another generic Book
- [ ] Show the **next 1–2 open sessions** as mini-cards (class, day/date, time, place, Book)
- [ ] Fallback if everything is full: waitlist / “view schedule”
- [ ] Keep one primary Book for people who don’t care which slot

### 4.3 Cut noise

- [ ] Remove unused photo galleries left over from placeholders
- [ ] Don’t add decorative tiles “for balance”
- [ ] 404 / error pages use the same wordmark, type, and orange button (not generic shadcn-only)

### 4.4 Light motion (optional, after the above)

- [ ] Subtle transition on day tabs / location filters
- [ ] Light hover on session rows/cards
- [ ] Honor `prefers-reduced-motion: reduce` (no motion in that case)
- [ ] Focus rings visible on dark backgrounds (orange/off-white ring on Book and tabs)

### 4.5 Phase 4 verification

- [ ] Every nav item lands on the right section; heading isn’t hidden under the header
- [ ] Bottom of page shows specific upcoming slots
- [ ] Phone: Schedule discoverable without hunting
- [ ] Reduced-motion: no janky animation (if motion was added)

---

## Phase 5 — Accessibility, SEO, language, legal

Frontend hardening. Still no backend.

### 5.1 Accessibility

- [ ] Skip-to-content link to `#schedule` or `<main>`
- [ ] Day tabs: complete tab pattern (`aria-controls`, tab panel, selected state) **or** switch to a toggle group that doesn’t claim `role="tab"` incorrectly
- [ ] Filter chips keep `aria-pressed` (already present) and visible selected state
- [ ] External Book / Maps / Instagram / WhatsApp: announce new tab (visually or via `sr-only`)
- [ ] Keyboard: tab through header, filters, days, Book, expand/collapse, footer
- [ ] Contrast: muted grey on near-black, orange on dark, selected tab vs background
- [ ] Images: no empty `alt` on informative photos; decorative images empty alt if any remain

### 5.2 SEO / share

- [ ] Open Graph image (real photo + name / Barcelona) — shares should not be title-only
- [ ] Twitter/OG meta points at that image (`og:image`, dimensions if easy)
- [ ] Optional JSON-LD `LocalBusiness` / sports coach (name, city, URL, sameAs Instagram)
- [ ] Titles/descriptions still match the booking-first pitch

### 5.3 Language

- [ ] Keep English as default
- [ ] Add a simple **EN | ES** toggle with static copy (no CMS)
- [ ] Persist preference in `localStorage`
- [ ] `html lang` updates with the toggle
- [ ] Don’t machine-translate every eyebrow until the English page is finished — ES can follow in the same phase

### 5.4 Legal (static pages or footer links)

- [ ] Privacy policy (Spain / GDPR-oriented, even a short static page)
- [ ] Optional legal notice / cookies one-liner if analytics are added later
- [ ] Footer links to those pages; 404 still branded

### 5.5 Phase 5 verification

- [ ] Keyboard-only pass of the whole page
- [ ] Share debugger / Twitter card preview shows the OG image
- [ ] EN/ES toggle changes visible copy and `lang`
- [ ] Privacy link works

---

## Suggested implementation order (when coding starts)

Do not start this until the user asks to implement. Then:

1. Assets + `Photo` / hero layout + mobile type (Phase 1)
2. `schedule.ts` dates helper + `Schedule.tsx` cards, waitlist, maps, rain plan (Phase 2)
3. New How-it-works slice + logistics price + footer/contact copy (Phase 3)
4. Header/MobileBar anchors + final CTA next-slots + 404 (Phase 4)
5. Root meta, skip link, tabs a11y, OG image, i18n, legal (Phase 5)

Reuse existing data (`SCHEDULE`, `bookingLink`). Prefer small helpers in `src/data/` or `src/lib/` over new components unless a section is clearly distinct.

---

## Browser checklist (run at the end of every phase)

- [ ] `npm run dev` — home page loads
- [ ] Phone width (~390px): no horizontal scroll, sticky bar doesn’t hide the only Book/waitlist action
- [ ] Desktop (~1440px): hero, schedule columns, logistics grid
- [ ] Click Book (header, hero if present, session row, final CTA, sticky bar) → booking URL, new tab
- [ ] Day tabs + Studio/Outdoor filters + empty day
- [ ] Full class waitlist behaviour
- [ ] In-page anchors: Schedule, Coach, Details
- [ ] Footer links

---

## Copy / content still needed from Alex (not code)

Fill these in as they arrive; several checkboxes above stay blocked until then.

- [ ] Photo set (see 1.1)
- [ ] Real booking URL if not the Calendly placeholder
- [ ] Instagram handle
- [ ] WhatsApp number
- [ ] Prices (drop-in, pack, intro)
- [ ] Rain / backup policy
- [ ] First-session script (length, languages, what to bring)
- [ ] Certifications / proof points to replace age
- [ ] Spanish copy (or approval to translate)
- [ ] Maps addresses / pin URLs for studio and outdoor spots
- [ ] Cancellation policy (optional)
- [ ] Legal business name for privacy page

---

## Notes from the original review (why this plan exists)

- Brand and funnel (hero → schedule → Book) are right.
- Placeholders, clipped mobile type, Monday-always schedule, dead waitlist, missing price, generic Instagram, and proof-too-late were the main gaps.
- Sticky mobile Book is a keeper; duplicate CTAs on the first screen are not.
- shadcn under `src/components/ui/` can stay unused. Don’t expand the design system for its own sake.
