# Beepop — Landing Page

A marketing landing page for **Beepop**, a premium single-serve pure honey brand
from Kolkata, India. Built as static HTML/CSS/JS — no build step, no dependencies.

## How to open it

1. Double-click `index.html` — it opens directly in your browser via `file://`.
2. That's it. No npm, no server, no tooling.

> If you ever want to host it: drop the whole folder on Netlify, Vercel, GitHub
> Pages, or any static host. It will Just Work.

## Project layout

```
BeePop/
├── index.html              ← the page (all 9 sections)
├── README.md               ← this file
├── assets/                 ← drop your photos here
├── components/             ← reserved for future componentization
├── styles/
│   ├── tokens.css          ← colors, fonts, spacing (design tokens)
│   ├── base.css            ← reset + body defaults
│   ├── components.css      ← buttons, badges, cards, form inputs
│   └── sections.css        ← per-section layouts
└── scripts/
    └── main.js             ← sticky nav, smooth scroll, form handlers
```

## Swapping in real photos

Three placeholder slots in `index.html` currently render dashed honey-gold frames:

| Slot                | File to drop in `assets/` | Aspect |
|---------------------|---------------------------|--------|
| Hero (right column) | `hero-stick.jpg`          | 4:5 portrait |
| Spotlight (left)    | `product-spotlight.jpg`   | 4:5 portrait |
| Story (right)       | `brand-story.jpg`         | 4:5 portrait |

When the photos are ready, replace each `<figure class="photo-placeholder">`
block with:

```html
<figure class="photo-frame">
  <img src="assets/hero-stick.jpg" alt="Beepop honey stick on a marble counter" />
</figure>
```

The `.photo-frame img` rule in `components.css` already handles sizing and
rounded corners.

## Design tokens

Edit `styles/tokens.css` to change anything site-wide:

| Token         | Default     | Use                                  |
|---------------|-------------|--------------------------------------|
| `--cream`     | `#FBF2DE`   | Page background                      |
| `--honey-deep`| `#E8A324`   | Primary accent, CTAs                  |
| `--honey-light`| `#F6C453`  | Highlights, gradients                 |
| `--forest`    | `#2E4A32`   | Dark sections, primary buttons       |
| `--ink`       | `#3A2311`   | Body text                            |
| `--font-serif`  | Fraunces  | Headlines                            |
| `--font-script` | Caveat    | One emotional accent line            |
| `--font-sans`   | Inter     | Body, UI                             |

Fonts are loaded from Google Fonts in `index.html`. Swap freely.

## Forms

Both forms (`#spotlight-signup` and `#order-form`) are **visual-only**:
on submit, the data is logged to the browser console and a thank-you message
appears. No data is sent anywhere yet.

To wire them up to a real backend, edit `scripts/main.js` — replace the
`console.log(...)` calls with your fetch / Formspree / etc. request.

## Sections

1. **Sticky nav** — logo, links, "Get Early Access" CTA
2. **Hero** — headline, sub, two CTAs, product photo
3. **Trust strip** — 5 icon+label badges
4. **Product spotlight** — photo, ₹5 badge, 4 features, email signup
5. **Use cases** — 4-card grid (tea/coffee, gym, tiffin, desk)
6. **Brand story** — dark forest section, "Nature's sweetest gift" script accent
7. **Reviews** — honest empty state, no fake testimonials
8. **Order CTA** — email + phone capture, WhatsApp button
9. **Footer** — logo, tagline, link columns, manufacturer block
   (Yash Jajodia, Bangur Avenue, Kolkata – 700055)

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS variables,
`aspect-ratio`, and `clamp()` — all supported in current versions.
