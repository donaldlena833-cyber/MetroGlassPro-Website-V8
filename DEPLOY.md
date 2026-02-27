# Deployment — MetroGlassPro

## Platform: Cloudflare Pages

1. Go to https://dash.cloudflare.com → Pages → Create a project
2. Connect GitHub → select MetroGlassPro-Website repo
3. Set build configuration:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: npm run build
   - Build output directory: out
   - Root directory: apps/web
   - Node version: 20
4. Environment Variables → Add:
   - NEXT_PUBLIC_GA_ID = G-46MYS2R9QW
5. Save and Deploy

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
- Test all redirects: /blog, /visualize, /services/glass-repair, /services/custom-mirrors
- Run Lighthouse audit on homepage — target 90+ all categories
- Sign up at formspree.io → create form → replace FORMSPREE_ENDPOINT in ContactForm.tsx

## SEO Post-Deploy Checklist
- [ ] Single canonical host confirmed (non-www, HTTPS)
- [ ] Trailing slash policy: all pages use trailing slash
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml and includes only live pages
- [ ] No deleted blog or visualize URLs in sitemap
- [ ] Each page: one H1, unique title, unique description, canonical URL
- [ ] LocalBusiness schema on homepage (no AggregateRating)
- [ ] All images have descriptive alt text
- [ ] Contact form working via Formspree
- [ ] Lighthouse: 90+ Performance, 100 Accessibility, 100 SEO
