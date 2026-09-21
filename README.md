# EKDANT Hospital Multispeciality & Trauma Center

Website for EKDANT Hospital — *"Care You Can Trust, Blessings You Can Feel"*.

Built with React 19, React Router 8, Tailwind CSS 4 and Vite 8.

---

## Running the project

```bash
npm install
npm run dev       # development server
npm run build     # generates sitemap.xml, then builds to dist/
npm run preview   # preview the production build
```

---

## Before going live (checklist)

| # | Task | Where |
|---|---|---|
| 1 | Phone numbers, email, address, map location | `src/config/hospital.js` |
| 2 | Confirm emergency hours (site says 24×7 everywhere) | `src/config/hospital.js` → `emergency.availability` |
| 3 | Replace placeholder statistics (10+ years, 50,000+ patients) | `src/config/hospital.js` → `stats` |
| 4 | Real doctors (all are "Dr. Doctor Name" today) | `src/data/doctors.json` |
| 5 | Real patient reviews, with consent (current ones are samples) | `src/data/testimonials.js` |
| 6 | Real photos: hospital, doctors, gallery | `public/images/…` |
| 7 | **Connect the appointment API** — the form does not deliver anything without it | `.env` → `VITE_APPOINTMENTS_API_URL` |
| 8 | Set the real domain | `src/config/hospital.js` → `siteUrl`, `index.html`, `public/robots.txt` |
| 9 | Add `/public/og-image.jpg` (1200×630) for link previews | `public/` |
| 10 | Doctors and department heads review all medical content | `src/data/departments.js`, `src/data/facilities.js` |
| 11 | Write the real Privacy Policy and Terms pages | currently placeholders |

Copy `.env.example` to `.env` and fill in the values.

---

## Editing content (no code needed)

All content lives in data files. Change these and the site updates everywhere — menus, homepage, footer and pages.

| Content | File |
|---|---|
| Hospital details, timings, phone numbers, appointment slots | `src/config/hospital.js` |
| Departments (and their pages) | `src/data/departments.js` |
| Facilities (and their pages) | `src/data/facilities.js` |
| Doctors | `src/data/doctors.json` |
| Gallery photos and categories | `src/data/gallery.js` |
| Testimonials | `src/data/testimonials.js` |

**Adding a department or facility** creates its page, menu entry, homepage card and footer link automatically. Add the new route to `scripts/generate-sitemap.mjs` only if you add a whole new *section*.

**Adding a doctor**: add an entry to `src/data/doctors.json`. Set `"active": false` to hide a doctor without deleting them, and `order` to control position. Doctors have no individual pages by design.

---

## Connecting APIs

Both integrations are isolated in `src/services/`, so no components change.

```bash
# .env
VITE_APPOINTMENTS_API_URL=https://api.example.com/appointments
VITE_DOCTORS_API_URL=https://api.example.com/doctors   # optional
```

- **Appointments** — receives a JSON `POST`: `patientName, mobile, age, gender, department, departmentName, doctorId, doctorName, preferredDate, preferredTime, reason, submittedAt`. Reply with `{ "reference": "EK-260916-1234", "status": "received" }`.
- **Doctors** — returns an array, or `{ "doctors": [...] }`, using the same fields as `src/data/doctors.json`.

> Patient data is health information: serve the API over HTTPS and restrict access to hospital staff.

---

## Project structure

```
src/
├── config/hospital.js      Hospital details, timings, appointment rules
├── data/                   Departments, facilities, doctors, gallery, testimonials
├── lib/content.js          Single access point for content (swap for a CMS later)
├── services/               API-ready loaders (appointments, doctors)
├── navigation/             Header and footer menus, built from the data
├── routes/                 Route table and path helpers
├── components/
│   ├── layout/             Top bar, header, mega menu, mobile drawer, footer
│   ├── ui/                 Button, Container, Accordion, form fields…
│   ├── sections/           Page banner, breadcrumbs, section nav, map, CTA
│   ├── seo/                SEO tags and structured data
│   ├── home/ departments/ facilities/ doctors/ gallery/ appointment/
└── pages/                  One file per page
```

---

## SEO

- Per-page title, description, canonical, Open Graph and Twitter tags (`src/components/seo/Seo.jsx`).
- Static copies in `index.html` for crawlers that do not run JavaScript; React removes them on load so tags never duplicate.
- Structured data: Hospital + LocalBusiness + EmergencyService site-wide, BreadcrumbList on inner pages, FAQPage on department and facility pages.
- `public/robots.txt` and a `sitemap.xml` generated at each build (20 URLs).

## Accessibility

Skip-to-content link, keyboard-accessible menus with focus trapping in the mobile drawer, visible focus rings, ARIA labels and live regions (page changes are announced), form errors linked to their fields, `prefers-reduced-motion` respected, and colour contrast checked for small text.

## Performance

Route-level code splitting, the Google Map loads only when the visitor asks for it, lazy-loaded images, preconnected fonts with `display=swap`, and no UI framework beyond Tailwind (~86 KB gzipped for the main bundle).

---

## Deployment

The site is a single-page app, so all routes must fall back to `index.html`:

- **Netlify** — `public/_redirects` is included.
- **Vercel** — `vercel.json` is included.
- **Apache / Nginx** — add a rewrite rule to `index.html`.

Build command `npm run build`, publish directory `dist`.
