# Ofer Grunfeld Law Firm Launchpad (Front-End)

Single-page, front-end only React application for a forensic genealogy legal practice.

## Features

- Single-page layout with synchronized top nav + sticky tab navigation
- English/Hebrew language toggle with full RTL/LTR layout switching
- Light/Dark mode toggle with `localStorage` persistence
- Hero, About, Forensic Services, Testimonials, Contact, and Footer sections
- Contact modal with WhatsApp / Email / SMS / Phone actions
- Mini popups for phone options and maps (Google Maps / Waze)
- Keyword-based bilingual search overlay with weighted matching
- Responsive design for mobile, tablet, and desktop

## Stack

- React 18
- Vite 5
- Framer Motion
- Custom CSS (no backend)

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- Contact details are currently placeholders and can be edited in:
  - `src/components/LanguageContext.jsx` (`contactData` object)
- Main styling is in:
  - `src/styles.css`
