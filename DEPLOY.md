# Deployment — MetroGlass Pro

## Platform: Cloudflare Pages

1. Go to https://dash.cloudflare.com → Pages → Create a project
2. Connect GitHub → select MetroGlassPro-Website repo
3. Set build configuration:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: npm run build
   - Build output directory: out
   - Root directory: /
   - Node version: 20
4. Environment Variables → Add:
   - NEXT_PUBLIC_GA_ID = G-46MYS2R9QW
   - RESEND_API_KEY = your Resend API key
   - CONTACT_TO_EMAIL = the inbox that should receive website leads
   - CONTACT_FROM_EMAIL = optional, recommended once your sending domain is verified
   - CONTACT_FROM_NAME = optional, defaults to MetroGlass Pro Website
5. Save and Deploy

## Contact Form Delivery
- The website now uses a native MetroGlass Pro form that posts to `/api/contact`.
- That endpoint is powered by a Cloudflare Pages Function in `functions/api/contact.ts`.
- `public/_routes.json` limits Functions invocations to `/api/*` only, so the rest of the site stays static.
- If `CONTACT_FROM_EMAIL` is not set, the function falls back to Resend's default sender for testing.
- For the cleanest branded setup, verify `metroglasspro.com` in Resend and set `CONTACT_FROM_EMAIL` to something like `website@metroglasspro.com`.

## Custom Domain
- In Cloudflare Pages → Custom Domains → Add metroglasspro.com
- Since domain is already on Cloudflare DNS, this connects automatically

## Canonical Host Configuration
- Canonical base: https://metroglasspro.com (non-www)
- In Cloudflare DNS: ensure www.metroglasspro.com redirects to metroglasspro.com via a Page Rule or Redirect Rule:
  - Match: www.metroglasspro.com/*
  - Redirect to: https://metroglasspro.com/$1 (301)
- This ensures a single canonical host for all pages

## After Deploy
- Submit sitemap in Google Search Console:
  https://metroglasspro.com/sitemap.xml
- Verify GA4 is firing in Google Analytics → Realtime
- Submit a test contact form and confirm it lands in the destination inbox
- Test all redirects: /blog, /visualize, /services/glass-repair, /services/custom-mirrors
- Run Lighthouse audit on homepage — target 90+ all categories

## SEO Post-Deploy Checklist
- [ ] Single canonical host confirmed (non-www, HTTPS)
- [ ] Trailing slash policy: all pages use trailing slash
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml and includes only live pages
- [ ] No deleted blog or visualize URLs in sitemap
- [ ] Each page: one H1, unique title, unique description, canonical URL
- [ ] LocalBusiness schema on homepage (no AggregateRating)
- [ ] All images have descriptive alt text
- [ ] Contact form working through `/api/contact`
- [ ] Lighthouse: 90+ Performance, 100 Accessibility, 100 SEO
