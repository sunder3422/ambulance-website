# Ambulance & Medical Transport — Frontend

A frontend-only React (JavaScript) site for an ambulance / medical transportation
company. Built with Vite + React Router, mobile-first, no backend included —
the enquiry form posts to a configurable API endpoint.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Configuration (`.env`)

Copy `.env.example` to `.env` and fill in real values before deploying:

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Where the enquiry form POSTs (`{ fullName, mobile, whatsapp, email, message, location, source }`) |
| `VITE_COMPANY_NAME` | Shown in navbar, footer, and page title |
| `VITE_PHONE_NUMBER` | Used for every `tel:` link (Call Now buttons) |
| `VITE_WHATSAPP_NUMBER` | International format, digits only, no `+` (used for `wa.me` links) |
| `VITE_WHATSAPP_MESSAGE` | Default prefilled WhatsApp message |
| `VITE_MAPS_API_KEY` | Optional, reserved for future reverse-geocoding |
| `VITE_ANALYTICS_ID` | Optional, reserved for analytics wiring |

Nothing is hardcoded in components — everything reads from `src/config.js`,
which reads these env vars.

## Structure

```
src/
  components/   Reusable UI: Navbar, Hero, ServiceCard, CTASection,
                ContactForm, WhatsAppButton, CallButton, LocationPicker,
                FacilityCard, StaffCard, Gallery, FAQ, Footer, MobileActionBar
  pages/        One file per route (Home, About, Services, ServiceDetail,
                Facilities, Team, GalleryPage, Locations, FAQPage, Contact, NotFound)
  data/         Content kept separate from UI — services.js, content.js
                (team, fleet, facilities, gallery items, locations, FAQs)
  styles/       tokens.css (design tokens: color/type/spacing) + global.css
  config.js     Single source of truth for env-driven values
```

## Notes on things you'll want to swap in

- **Images**: the gallery, hero graphic, and any photography are currently
  placeholder blocks (no stock imagery was bundled). Drop real photos into
  `public/images/` and swap the usage in `Gallery.jsx`, `Hero.jsx`, etc.
- **Contact form backend**: `ContactForm.jsx` POSTs JSON to `VITE_API_URL`.
  Point this at your real leads endpoint (`POST /api/v1/leads` in the brief).
- **Content**: all copy (services, team bios, FAQs, coverage areas) lives in
  `src/data/` — edit there rather than hunting through components.
- **Geolocation**: `LocationPicker.jsx` only requests permission on click,
  and the rest of the site works normally if the user denies it or the
  browser doesn't support geolocation.

## Design system

Deep clinical teal (`--teal: #0E6B63`) as the primary trust color, with a
separate, deliberately reserved red (`--emergency: #C6402F`) used only for
emergency actions (Call Now) so it keeps its urgency. Space Grotesk for
headings, Inter for body text. Full token list in `src/styles/tokens.css`.
