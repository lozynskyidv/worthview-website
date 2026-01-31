# 🚀 WorthView Website Deployment Guide

**Status:** Website ready, needs GitHub repo + Netlify deployment

---

## ✅ What's Ready

Your website is set up at:
```
/Users/dmytrolozynskyi/Documents/Regent App/worthview-website/
```

**Structure:**
- ✅ Landing page component (clean, no Figma dependencies)
- ✅ Vite + React + TypeScript configured
- ✅ Tailwind CSS set up
- ✅ Git initialized (local commits done)
- ✅ Netlify configuration file (`netlify.toml`)
- ✅ Production-ready build system

---

## 📋 Step-by-Step Deployment

### Step 1: Create GitHub Repository

**Option A: Via GitHub Website (Easiest)**

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `worthview-website`
   - **Description:** "Official website for WorthView app"
   - **Visibility:** Public
   - **Initialize:** Leave ALL checkboxes UNCHECKED (we already have code)
3. Click "Create repository"
4. Copy the repository URL (will be: `git@github.com:lozynskyidv/worthview-website.git`)

5. Run these commands in your terminal:
```bash
cd "/Users/dmytrolozynskyi/Documents/Regent App/worthview-website"
git remote add origin git@github.com:lozynskyidv/worthview-website.git
git push -u origin main
```

**Option B: Via GitHub CLI (if you have it installed)**
```bash
cd "/Users/dmytrolozynskyi/Documents/Regent App/worthview-website"
gh repo create worthview-website --public --source=. --remote=origin --push
```

---

### Step 2: Connect to Netlify

1. **Go to Netlify:** https://app.netlify.com/
2. **Click "Add new site"** → "Import an existing project"
3. **Choose GitHub** (authorize if needed)
4. **Select repository:** `lozynskyidv/worthview-website`
5. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
6. **Click "Deploy site"**

Netlify will:
- Install dependencies
- Build your site
- Deploy to a temporary URL (e.g., `random-name-12345.netlify.app`)
- Auto-deploy on every git push

---

### Step 3: Connect Custom Domain (worthview.app)

#### In Netlify:

1. Go to your site → **Domain settings**
2. Click "Add custom domain"
3. Enter: `worthview.app`
4. Netlify will show DNS records you need

#### In Namecheap:

1. Go to Namecheap dashboard
2. Select `worthview.app` domain
3. Go to **Advanced DNS**
4. Add these records:

**For Netlify (Recommended):**
```
Type: CNAME
Host: www
Value: [your-site].netlify.app
TTL: Automatic

Type: A
Host: @
Value: 75.2.60.5
TTL: Automatic

(Or use Netlify's DNS - easier)
```

**OR use Netlify DNS (Easier):**
1. In Netlify: Domain settings → "Set up Netlify DNS"
2. Netlify gives you nameservers (e.g., `dns1.p03.nsone.net`)
3. In Namecheap: Change nameservers to Netlify's nameservers
4. Wait 24-48 hours for DNS propagation

---

### Step 4: Add SSL Certificate (Automatic)

Netlify will automatically:
- Provision Let's Encrypt SSL certificate
- Enable HTTPS
- Redirect HTTP → HTTPS

This happens automatically once DNS is configured.

---

### Step 5: Test Your Website

Once deployed, test:
- [ ] Visit `https://worthview.app`
- [ ] Check all sections load correctly
- [ ] Test "Download on the App Store" button
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Check SSL certificate (padlock icon in browser)

---

## 🔧 Local Development

To run the website locally:

```bash
cd "/Users/dmytrolozynskyi/Documents/Regent App/worthview-website"

# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:3000
```

---

## 📝 Next Steps After Deployment

### Update App Store Button

When your app is live on the App Store, update the button in `src/components/LandingPage.tsx`:

```typescript
// Change from:
<button>Download on the App Store</button>

// To:
<a href="https://apps.apple.com/app/idYOUR_APP_ID">
  <img src="/app-store-badge.svg" alt="Download on the App Store" />
</a>
```

### Add Privacy Policy & Support Pages

Create these pages for App Store requirements:

1. **Privacy Policy:** `worthview.app/privacy`
2. **Support:** `worthview.app/support`
3. **Terms:** `worthview.app/terms` (optional)

You can add these as separate routes in React Router or simple HTML pages.

---

## 🎯 Quick Commands Reference

```bash
# Navigate to website
cd "/Users/dmytrolozynskyi/Documents/Regent App/worthview-website"

# Create GitHub repo (after creating on github.com)
git remote add origin git@github.com:lozynskyidv/worthview-website.git
git push -u origin main

# Build locally
npm install
npm run build

# Test build
npm run preview
```

---

## 📦 What's in the Website

**Single Page Website:**
- Landing page with hero section
- Feature showcase
- Trust badges
- Pricing section  
- FAQ section
- Footer

**Tech Stack:**
- React 18
- TypeScript
- Vite (fast builds)
- Tailwind CSS (styling)
- Lucide React (icons)

**No backend needed** - Static site, deploys to Netlify CDN.

---

## ⏱️ Expected Timeline

- **Create GitHub repo:** 2 minutes
- **Push to GitHub:** 1 minute
- **Connect to Netlify:** 3 minutes
- **Initial deploy:** 2-3 minutes
- **DNS configuration:** 5 minutes (setup) + 1-48 hours (propagation)

**Total active work:** ~15 minutes  
**Total wait time:** Up to 48 hours for DNS

---

## 🆘 Troubleshooting

### "Repository already exists"
- Choose a different name, or delete the existing repo on GitHub first

### "Build failed on Netlify"
- Check build logs in Netlify dashboard
- Verify Node version is 18+
- Run `npm run build` locally to test

### "Domain not working"
- Wait 24-48 hours for DNS propagation
- Use `dig worthview.app` to check DNS records
- Try `www.worthview.app` instead

### "SSL certificate pending"
- Wait 1-2 hours after DNS propagates
- Netlify auto-provisions Let's Encrypt certificate

---

## 🎉 Ready to Deploy!

1. Create GitHub repo: https://github.com/new
2. Push code (commands above)
3. Connect to Netlify: https://app.netlify.com/
4. Configure DNS in Namecheap
5. Wait for DNS + SSL
6. Your website is live! 🚀

---

**Next:** Follow Step 1 above to create the GitHub repository!
