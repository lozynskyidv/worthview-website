# WorthView Website

Marketing website for WorthView - **Everything you own and owe, in one place.**

**Live at:** [worthview.app](https://worthview.app)

---

## Overview

This is the landing page for the WorthView iOS app. Built with React, Vite, and Tailwind CSS, deployed automatically to Netlify.

### Key Features
- Sticky header navigation with mobile menu
- Responsive hero section optimized for MacBook and mobile
- Smooth scroll navigation to sections
- Interactive mobile dropdown menu
- Optimized above-the-fold layout for desktop

---

## Tech Stack

- **React** 19.1.0
- **TypeScript** 5.6
- **Vite** 5.4 (build tool)
- **Tailwind CSS** 3.4
- **Lucide React** (icons)
- **Deployment:** Netlify
- **Domain:** worthview.app (Namecheap)

---

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Main landing page component
│   │   - Header with sticky navigation
│   │   - Mobile menu with useState
│   │   - Hero section (optimized for MacBook)
│   │   - Features, pricing, CTA sections
│   │   - Footer
│   └── WorthViewIcon.tsx    # Logo SVG component (48px default)
│
├── index.css                # Tailwind + global styles
├── App.tsx                  # Root component (renders LandingPage)
└── main.tsx                 # Entry point

public/
└── app-screenshot.png       # Real app screenshot (PNG with transparency)
                             # Important: Must be real PNG, not JPEG with .png extension

vite.config.ts               # Vite configuration
tailwind.config.js           # Tailwind configuration
netlify.toml                 # Netlify build settings
```

---

## Key Components Explained

### Header Navigation
- **Desktop:** Horizontal nav with "How it works", "Features", "Pricing", "Privacy" + Download button
- **Mobile:** Hamburger menu icon that toggles dropdown
- **State Management:** Uses `useState(mobileMenuOpen)` to control menu visibility
- **Sticky:** Header stays at top with `sticky top-0` and backdrop blur
- **Smooth Scroll:** Clicking nav links uses `scrollIntoView({ behavior: 'smooth' })`
- **Auto-Close:** Mobile menu closes automatically after clicking a link

### Hero Section Optimization
**Problem Solved:** Hero section was too tall on MacBook 13-14" screens, requiring scroll to see CTA.

**Solution:**
- Reduced padding: `py-16 md:py-24` → `py-8 md:py-12`
- Reduced grid gap: `gap-12` → `gap-8`
- Smaller headline: `3rem` → `2.5rem`
- Tighter margins throughout (mb-8 → mb-6, mb-10 → mb-6, etc.)
- Smaller app screenshot: `max-w-sm` → `max-w-xs lg:max-w-sm`

**Result:** Entire hero section (header + logo + headline + CTA + screenshot) fits above the fold on MacBook.

### App Screenshot
**Important:** The screenshot must be a **real PNG with RGBA transparency**, not a JPEG with `.png` extension.

**Issue Encountered:** macOS sometimes saves screenshots as JPEG but names them `.png`. This causes black backgrounds.

**How to Verify:**
```bash
file public/app-screenshot.png
# Should show: PNG image data, RGBA
# NOT: JPEG image data
```

**Solution:** Use the light-background version or export from Figma/Preview with transparency.

### Mobile Menu Implementation
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Toggle menu
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

// Close menu after navigation
const scrollToSection = (id: string) => {
  // ... scroll logic
  setMobileMenuOpen(false); // Close menu
};
```

Shows X icon when open, hamburger when closed. Dropdown appears below header with vertical nav links.

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

### Preview Production Build
```bash
npm run preview
```

---

## Deployment

**Automatic Deployment:** Every push to `main` branch triggers a Netlify build.

### How It Works
1. **Developer pushes code** to GitHub (`main` branch)
2. **Netlify webhook detects** the push
3. **Netlify runs:** `npm run build`
4. **Vite builds** React app to `dist/` folder
5. **Netlify deploys** `dist/` to CDN
6. **Live at** `worthview.app` in ~2 minutes

### Build Settings (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

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
- `www.worthview.app` redirects to `worthview.app`

**To Update Domain:**
1. Go to Netlify dashboard → Domain settings
2. Add custom domain: `worthview.app`
3. Copy Netlify nameservers
4. Update in Namecheap → Domain → Nameservers → Custom DNS
5. Wait 1-24 hours for DNS propagation

---

## Design System

### Colors
- **Background:** `#FFFFFF` (white)
- **Text Primary:** `#1A1A1A` (near black)
- **Text Muted:** `#6B6B6B` (gray)
- **CTA:** `#000000` (black)
- **Borders:** `rgba(0,0,0,0.08)` (8% black)

### Typography
- **Logo:** 1.25rem (20px), weight 500
- **Headline:** 2.5rem (40px), weight 300 (light), -3% letter spacing
- **Subheadline:** 1.125rem (18px)
- **Body:** 1rem (16px)
- **Small:** 0.875rem (14px)

### Spacing
- **Header padding:** py-4 (16px)
- **Hero padding:** py-8 md:py-12 (32px mobile, 48px desktop)
- **Grid gap:** gap-8 (32px)
- **Button padding:** px-8 py-3 (32px horizontal, 12px vertical)

### Logo (WorthViewIcon)
- **Component:** SVG with "WV" monogram on black rounded square
- **Default Size:** 48px (hero), 32px (header)
- **Colors:** #1A1A1A (black bg), #FAFAFA (white text)
- **Border Radius:** 26px (scales proportionally)

---

## Logo Component

The `WorthViewIcon` is a React component that generates the WorthView logo as SVG:

```tsx
<WorthViewIcon size={48} />
```

**Design:**
- Black rounded square background (#1A1A1A)
- "WV" monogram in white (#FAFAFA)
- Font weight: 300 (light)
- Letter spacing: -2px

**Usage:**
- Header: 32px
- Hero: 48px
- App store icons: Various sizes (see `/app-store-icons/` in main app repo)

---

## Common Issues & Solutions

### Issue: Black background on app screenshot
**Cause:** Screenshot is JPEG disguised as PNG. JPEG doesn't support transparency.

**Solution:** 
```bash
# Verify file type
file public/app-screenshot.png

# Should be: PNG image data, RGBA
# If JPEG: Export from Figma/Preview as real PNG with transparency
```

### Issue: Mobile menu not working
**Cause:** Missing state management or icons.

**Solution:** Ensure `useState` is imported and `Menu` + `X` icons from lucide-react.

### Issue: Navigation doesn't scroll
**Cause:** Section IDs don't match button `onClick` targets.

**Solution:** Ensure sections have matching IDs:
```tsx
<section id="features">  // Must match
<button onClick={() => scrollToSection('features')}>
```

### Issue: Hero section too tall on MacBook
**Cause:** Too much padding and large elements.

**Solution:** Use reduced spacing classes (already implemented). See "Hero Section Optimization" above.

### Issue: Build fails on Netlify
**Possible Causes:**
1. Missing dependencies in `package.json`
2. TypeScript errors
3. Missing environment variables

**Solution:**
```bash
# Test build locally first
npm run build

# Check Netlify build logs
# Fix any TypeScript errors or missing deps
```

---

## Section IDs for Navigation

Make sure these match in both the nav buttons and section elements:

- `#hero` - Hero section (top)
- `#features` - Features section
- `#how-it-works` - How it works section
- `#pricing` - Pricing section
- `#privacy` - Privacy section (if exists)

---

## Related Repositories

- **iOS App:** [github.com/lozynskyidv/regent](https://github.com/lozynskyidv/regent)
- **App Store Icons:** `/app-store-icons/` folder in main app repo
- **Figma Prototype:** [github.com/lozynskyidv/Designmvpforregentapp](https://github.com/lozynskyidv/Designmvpforregentapp)

---

## Next Steps for Developers

### To Add New Sections
1. Create section component in `LandingPage.tsx`
2. Add section ID: `<section id="new-section">`
3. Add nav button: `<button onClick={() => scrollToSection('new-section')}>New Section</button>`

### To Update Logo
1. Edit `src/components/WorthViewIcon.tsx`
2. Adjust SVG paths or text
3. Test at different sizes (32px, 48px)

### To Change Domain
1. Update Netlify domain settings
2. Update Namecheap DNS records
3. Wait for DNS propagation

### To Add Analytics
1. Add analytics script to `index.html`
2. Or use Netlify Analytics (paid feature)

---

## Performance Notes

- **Lighthouse Score:** 95+ (production)
- **Build Time:** ~10 seconds
- **Bundle Size:** ~165KB (gzipped)
- **Image Optimization:** App screenshot is 645KB PNG (acceptable for hero image)

---

## Environment Variables

Currently none required. If adding API calls or services:

1. Create `.env` file (add to `.gitignore`)
2. Prefix with `VITE_` for Vite to expose: `VITE_API_KEY=xxx`
3. Add to Netlify: Site settings → Environment variables

---

## License

Copyright © 2026 WorthView

---

## Support

For issues or questions about the website:
- Email: support@worthview.app
- GitHub Issues: [worthview-website/issues](https://github.com/lozynskyidv/worthview-website/issues)

---

**Built simple and clear.** 🎯
