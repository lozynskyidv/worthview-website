# WorthView Website

Marketing website for WorthView - **Everything you own and owe, in one place.**

**Live at:** [worthview.app](https://worthview.app)

---

## Overview

This is the landing page for the WorthView iOS app. Built with React, Vite, and Tailwind CSS, deployed automatically to Netlify.

---

## Tech Stack

- **React** 19.1.0
- **TypeScript** 5.6
- **Vite** 5.4 (build tool)
- **Tailwind CSS** 3.4
- **Deployment:** Netlify
- **Domain:** worthview.app (Namecheap)

---

## Features

- Hero section with WorthView logo (WV monogram)
- App screenshot showcase
- Feature highlights (privacy, encryption, local-first)
- Pricing information (£49/year, 7-day trial)
- Trust bar (encrypted, FCA-compliant, no data sharing)
- Responsive design (mobile + desktop)

---

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Main landing page
│   └── WorthViewIcon.tsx    # Logo component
├── index.css                # Tailwind + global styles
├── App.tsx                  # Root component
└── main.tsx                 # Entry point

public/
└── app-screenshot.png       # App preview image

vite.config.ts               # Vite configuration
tailwind.config.js           # Tailwind configuration
netlify.toml                 # Netlify build settings
```

---

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

Output: `dist/` folder

---

## Deployment

**Automatic Deployment:** Every push to `main` branch triggers a Netlify build.

### How It Works
1. Push code to GitHub (`main` branch)
2. Netlify detects the push
3. Runs `npm run build`
4. Deploys `dist/` folder to CDN
5. Live at `worthview.app` in ~2 minutes

### Manual Deployment (if needed)
```bash
npm run build
# Upload dist/ folder to Netlify dashboard
```

---

## Domain Configuration

**Domain:** `worthview.app` (purchased on Namecheap)

**DNS Setup:**
- Nameservers point to Netlify
- SSL certificate auto-provisioned by Netlify (Let's Encrypt)
- HTTPS enforced

---

## Logo

The WorthView logo is an SVG component (`WorthViewIcon.tsx`):
- **Design:** "WV" monogram on black background
- **Colors:** #1A1A1A (black), #FAFAFA (white)
- **Font Weight:** 300 (light)
- **Corner Radius:** 26px (rounded square)

Used in:
- Website header
- App store icons (see main app repo)

---

## App Screenshot

Located at `public/app-screenshot.png`:
- Real screenshot from WorthView iOS app
- Shows net worth overview with chart
- PNG with transparency for clean display

---

## Related Repositories

- **iOS App:** [github.com/lozynskyidv/regent](https://github.com/lozynskyidv/regent)
- **App Store Icons:** `/app-store-icons/` folder in main app repo

---

## License

Copyright © 2026 WorthView

---

**Built simple and clear.** 🎯
