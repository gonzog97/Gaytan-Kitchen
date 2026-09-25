# Gaytan Kitchen Creations — Next.js site

This is the Next.js (App Router, JavaScript) conversion of the static HTML
site, built to deploy on Vercel from your GitHub repo.

## Before you push this

1. **Add the hero photo.** The static site's `index.html` references
   `assets/front-building.jpg`, but that image file only exists in your
   local repo (it was never uploaded to this project) — so it's not
   included here. Copy your real `front-building.jpg` into
   `public/assets/front-building.jpg` in this project before pushing. If
   it's missing, the hero section will just show the plain gradient
   background instead of the photo (no error, just no photo).
2. **Install dependencies** locally:
   ```
   npm install
   ```
3. **Run it locally to check everything** before pushing:
   ```
   npm run dev
   ```
   Then open http://localhost:3000 and click through all five pages.

## Replacing your existing repo contents

Your GitHub repo currently holds the static HTML/CSS/JS site (`index.html`,
`menu/`, `about/`, `catering/`, `contact/`, `css/`, `js/`, `assets/`). This
Next.js project replaces that structure entirely — it's a different kind of
project (it has to be built, not served as-is). The straightforward way to
switch over:

1. In your local clone of the repo, delete the old site files (everything
   except `.git`), or clear the folder and re-copy it.
2. Copy every file from this project into that folder (including the
   hidden `.gitignore` — but skip `node_modules` if you ran `npm install`
   here, it'll get reinstalled from `package.json`).
3. Add your real `front-building.jpg` into `public/assets/` (see above).
4. `git add -A`, commit, and push like you always do.

Since Vercel is already connected to this GitHub repo, pushing to your
main branch will trigger a new deployment automatically — Vercel
auto-detects Next.js and needs no extra configuration.

## What changed structurally (not visually)

Every page should look and behave identically to the static site. What's
different is how it's built:

- **Shared header/footer**: `app/components/Header.js` and `Footer.js` are
  rendered once in `app/layout.js` instead of being copy-pasted into every
  page's HTML. This is what eliminates the relative-path-typo class of bug
  (`../js/main.js` vs `js/main.js`) that kept breaking pages on the static
  site — there's no per-page script tag to typo anymore.
- **Fonts**: Playfair Display, Lora, and Caveat are loaded via
  `next/font/google` in `app/layout.js` instead of a `@import` in the CSS.
  They're self-hosted at build time (faster, no external request at
  runtime).
- **Menu data**: `lib/menuData.js` holds the menu as structured data
  (category → group → item, with name/price/description) instead of
  hand-written HTML. `app/components/MenuAccordion.js` renders it. This is
  deliberate groundwork for the POS integration you mentioned — a real
  menu/pricing API would eventually replace this file with the same
  shape.
- **Business info**: phone, address, hours, and social links live in one
  place, `lib/siteInfo.js`, instead of being repeated on every page.
- **Forms**: the contact and catering forms are still demo-only (they show
  a success message but don't send anywhere) — same as before. They're now
  `app/components/ContactForm.js` and `CateringForm.js`, client components
  using React state instead of the old `js/main.js` DOM handler. When
  you're ready to wire up real submissions, a Next.js API route
  (`app/api/contact/route.js`) is the natural place to add that — you have
  a real backend available now, which the static site didn't.

## Still-open TODOs (carried over from the static site)

These were already flagged in HTML comments on the old site and are
preserved as code comments here — nothing new:

- Confirm authoritative business hours (Google vs. Yelp vs. TripAdvisor
  discrepancy) — `lib/siteInfo.js`
- Confirm legal business name spelling ("Gaytan's" vs. "Gayton's" per LLC
  filing) — `app/components/Footer.js`
- Bakery/dessert pricing is still unconfirmed — `lib/menuData.js`
- Catering package pricing has never been published — `app/catering/page.js`
- Contact/catering forms are demo-only, no real backend wired up yet
