---
name: Service Business Web Design
description: Premium design patterns, conversion optimization, and UX principles for service-based business websites (contractors, repair companies, home services, trades)
---

# Service Business Web Design Skill

## Design Philosophy
Service-based business websites must balance **trust-building** with **conversion optimization**. Every pixel should either build credibility or drive action. The visitor is usually in a moment of need — their foundation is cracking, their HVAC is broken, their roof is leaking — and the site must communicate competence, reliability, and urgency.

---

## 1. Color Strategy

### Primary Palette Rules
- **Primary brand color** should convey authority and urgency (reds, deep blues, forest greens)
- **Dark backgrounds** (charcoal `#111`, near-black) for premium sections — builds authority
- **Warm whites** (`#f7f7f7` to `#fafafa`) for content sections — keeps readability
- **Accent color** derived from primary for interactive elements (hover states, focus rings)

### Trust Color Accents
- Gold/amber for star ratings and awards
- Green for "licensed", "insured", "verified" badges
- Never use more than 3 colors in any single section

---

## 2. Typography Hierarchy

### Font Pairing Rules
- **Display/Heading**: Bold, condensed, uppercase — conveys strength and stability
  - Recommended: Anton, Oswald, Barlow Condensed, Bebas Neue
- **Body**: Clean, readable, professional sans-serif
  - Recommended: Open Sans, Inter, Source Sans Pro, Nunito Sans
- **Numerical/Stats**: Use display font for large numbers (counters, stats, years)

### Size Scale (Mobile → Desktop)
```
h1: 2.25rem → 3.75rem  (Hero headline)
h2: 1.875rem → 3rem    (Section titles)
h3: 1.25rem → 1.5rem   (Card titles)
Body: 1rem → 1.125rem  (Content text)
Small: 0.75rem → 0.875rem (Labels, meta)
```

---

## 3. Section Architecture

### Mandatory Sections (in order of importance)
1. **Hero** — Full-viewport, parallax background, headline + CTA + optional lead form
2. **Trust Bar / Stats Ticker** — Social proof immediately below hero
3. **Services Grid** — Card-based with hover animations
4. **About Preview** — Photo + counter stats + brand story
5. **Testimonials / Reviews** — Star ratings, names, locations
6. **Gallery / Portfolio** — Masonry or grid with lightbox
7. **Service Areas / Locations** — Cards with click-to-call
8. **CTA Section** — Parallax background + form
9. **Trust Bar** — Certifications, licensing, insurance
10. **Footer** — Comprehensive with services, locations, contact

### Section Spacing
- Mobile: `py-16` (4rem)
- Desktop: `py-24` to `py-28` (6-7rem)
- Between related sections: reduce by 25%

---

## 4. Conversion Optimization Patterns

### Above-the-Fold Requirements
- Phone number visible at all times (TopBar or sticky header)
- Primary CTA button visible within 2 seconds
- Trust indicator (years in business, license badge) visible immediately
- Form accessible in hero on desktop

### CTA Button Hierarchy
```
Primary:   bg-primary, rounded-full, uppercase, tracking-wider, hover:scale-105
Secondary: border-2 border-white/40, rounded-full, ghost style
Tertiary:  text-primary, inline-flex with arrow icon
```

### Phone Number Display
- ALWAYS clickable (`tel:` links)
- Format: `(XXX) XXX-XXXX` — familiar and scannable
- TopBar: All locations on one line
- Cards: Large, bold, primary color
- Mobile: Sticky bottom bar with call button after scroll

### Lead Capture Forms
- Maximum 5 fields: Name, Phone, Email, Service (dropdown), Message
- Dark variant for dark backgrounds, light variant for white
- Success animation after submission
- Button text: action-oriented ("Get Free Inspection", "Schedule Now")

---

## 5. Mobile-First Design Patterns

### Mobile Navigation
- Hamburger menu with full-screen overlay
- Animated hamburger → X transition
- Services listed as sub-items under dropdown
- Bottom CTA button in mobile menu
- Consider sticky mobile CTA bar after scroll

### Mobile Optimizations
- Hero: Minimum height 700px, single column
- Service cards: Full width, stacked
- Gallery: 2-column grid
- Location cards: Full width, stacked
- Forms: Full width inputs
- Touch targets: Minimum 44×44px

### Scroll Behaviors
- TopBar: Hide on scroll down, show on scroll up
- Navbar: Sticky, shadow on scroll
- Back-to-top: Show after 50vh scroll
- Scroll progress bar: Top of viewport

---

## 6. Trust Building Elements

### Social Proof Hierarchy
1. **Counter Stats**: Years, Projects completed, Locations
2. **Star Ratings**: Google/Facebook ratings with count
3. **Testimonials**: Name, location, photo, quote
4. **Certifications**: Licensed, Insured, BBB, industry affiliations
5. **Gallery**: Real project photos (authenticity is critical)
6. **Financing**: Mention available financing options prominently

### Badge Design
- Rounded containers with subtle primary-color tinting
- Icon + label format
- Grid layout: 2 columns mobile, 4 columns desktop
- Include: Licensed & Insured, BBB Accredited, Financing Available, Years Experience

---

## 7. Animation Guidelines

### Scroll Animations
- **FadeUp**: Default entry for all content blocks
  - `initial={{ opacity: 0, y: 40 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - Stagger children by 0.1s delay
- **Parallax**: Hero and CTA background images
- **Counter**: Animate numbers on scroll into view
- **Word-by-word**: Headlines animate word by word

### Interaction Animations
- Cards: `whileHover={{ y: -6 }}` with spring physics
- Buttons: `whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}`
- Images: `group-hover:scale-110` with 700ms transition
- Links: Arrow icon translates right on hover

### Performance
- Always use `viewport={{ once: true }}` — animate only once
- Use `will-change` sparingly
- Respect `prefers-reduced-motion` media query
- Keep animation durations under 700ms

---

## 8. Image Strategy

### Image Categories Needed
1. **Hero**: Wide, dramatic, shows team at work
2. **Service Photos**: One unique, specific photo per service
3. **Gallery/Portfolio**: 8-12 diverse project photos
4. **Team/About**: Professional but approachable
5. **Location/Area**: Recognizable local landmarks optional

### Image Technical Requirements
- Hero: 1920×1080 minimum, `priority` loading
- Service cards: 800×600, `object-cover`
- Gallery: Full resolution for lightbox, thumbnails for grid
- Always use `next/image` for optimization
- Alt text: Descriptive, include service + location keywords

---

## 9. SEO for Service Businesses

### Schema Markup (Required)
```json
{
  "@type": "LocalBusiness",
  "name": "Company Name",
  "description": "...",
  "telephone": "...",
  "address": [...multiple locations...],
  "areaServed": [...cities...],
  "priceRange": "$$"
}
```

### Per-Page SEO
- **Homepage**: Primary keywords + location + brand
- **Service pages**: Service-specific long-tail keywords
- **Location pages**: City-specific + service keywords
- **Gallery**: Alt text with project type + location
- **Contact**: Include all addresses, phone numbers

### Meta Tags
- Title: `[Service] in [City], [State] | [Company Name]`
- Description: Include primary service, location, years, CTA
- Open Graph: Unique per page

---

## 10. Conversion Funnel Architecture

### Page-Level CTAs
- **Every page** must have at least one contact form
- **Every page** must have a visible phone number
- **Service detail pages**: Sidebar form + phone CTA card
- **Gallery**: "Get a quote for similar work" CTA after grid
- **Locations**: Click-to-call + directions buttons

### Urgency & Scarcity (Ethical)
- "Free Inspection" — emphasize no-cost, no-obligation
- "30+ Years Experience" — establishes longevity
- "Licensed & Insured" — reduces risk perception
- "Financing Available" — removes cost barrier
- Seasonal messaging when applicable

---

## 11. Component Library

### Reusable Components
- `FadeUp` — Scroll-triggered fade animation wrapper
- `AnimatedText` — Word-by-word headline animation
- `AnimatedCounter` — Spring-physics number counter
- `ContactForm` — Light/dark variant lead capture
- `PageHero` — Parallax hero with title/subtitle
- `ServiceCard` — Image + title + excerpt + arrow link
- `LocationCard` — Address + phone + directions
- `TestimonialCard` — Stars + quote + avatar + name
- `TrustBadge` — Icon + label badge
- `ScrollProgress` — Top-of-page progress bar
- `TopBar` — Multi-location phone display
- `Navbar` — Sticky with dropdown + mobile menu

---

## 12. Performance Checklist

- [ ] All images optimized via `next/image`
- [ ] Fonts loaded with `display: swap`
- [ ] CSS animations use `transform` and `opacity` only
- [ ] Lazy load below-fold images
- [ ] Preconnect to Google Fonts
- [ ] Minified CSS/JS in production
- [ ] Lighthouse score > 90 on all pages
- [ ] Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1)
