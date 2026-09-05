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
- `public/_routes.json` runs the contact endpoint and HTML/Markdown content negotiation. Static assets and direct Markdown files bypass Functions.
- The form supports direct photo or PDF uploads and sends an automatic confirmation email back to the customer.
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
- [ ] Shared business identity on all pages; service schemas refer to `/#business` (no AggregateRating)
- [ ] All images have descriptive alt text
- [ ] Contact form working through `/api/contact`
- [ ] Lighthouse: 90+ Performance, 100 Accessibility, 100 SEO

## Agent-readable content and referral measurement

- Keep the build command as `npm run build`. Its `postbuild` step generates Markdown from the actual exported HTML, plus `llms.txt`, Markdown discovery links, and canonical headers. Do not upload an `out/` produced by `next build` alone.
- Run `npm run test:aeo` with Node 22.18+ or Node 24 and `npm run check:aeo` after a build. Tests stub email delivery and never send live messages.
- Confirm `/frameless-shower-doors-nyc/` returns 200 for both ordinary HTML and `Accept: text/markdown`; confirm `/frameless-shower-doors-nyc/index.md` is also accessible.
- `robots.txt` already permits all crawlers, including OAI-SearchBot. Preserve the existing policy; robots permission alone does not override a Cloudflare challenge or firewall block.
- Quote emails include customer-reported source, detected source, detection method, original landing path, and referring hostname. Unknown/direct visits remain unknown rather than being attributed to AI without evidence.
- GA4 receives `contact_click` for phone/text/email clicks and `generate_lead` only after the form endpoint reports success. Clicks are not completed leads. Register event-scoped custom dimensions for `lead_source`, `reported_source`, `source_evidence`, `contact_method`, and `landing_path` to use them in GA4 reports. Mark `generate_lead` as a key event if desired. These GA4 account settings are separate from this code change.
- Referral state is limited to session storage in the current browser tab and an in-memory fallback. It does not persist between browser sessions and cannot identify every visitor from an AI app. New-tab and stripped-referrer journeys may be unknown; the optional referral question helps fill that gap.
- The service prices remain existing planning ranges, not fixed offers. Current availability, field measurements, inclusions, and building requirements must be confirmed for each estimate.

These changes fix access, consistency, and conversion measurement. Markdown and `llms.txt` are alternate reading formats, not a promise of ranking or recommendations. Continue improving real project evidence and customer answers; do not mass-publish near-duplicate borough pages.


## Broader glass service coverage (September 2026)

Core service routes now cover shower doors, glazing, glass railings, custom mirrors, glass partitions, and general glass repair. The last three new route additions are `/glazing-nyc/`, `/glass-railings-nyc/`, and `/glass-repair-nyc/`; mirrors and partitions have expanded existing pages. Existing shower routes remain available.

`content/service-catalog.ts` supplies the navigation, business offer catalog, quote choices, and safe service category mapping. `content/glass-service-details.ts` supplies the visible service answers and the matching FAQ schema. Changes to a published business claim should be reflected in this shared content. Do not add blanket glass thicknesses, installed price ranges, urgent response promises, or unsupported fabrication capabilities.

Quote URLs use `/contact/?service=glass-railings` and the other catalog IDs. The form accepts only a known ID for preselection; visitors can change the selection. Successful `generate_lead` events now include `service_type`, as do contact clicks on a known service page. Register `service_type` as an event-scoped custom dimension in the existing GA4 property when configuring reports. Lead emails include the selected service and referral evidence even when analytics is unavailable. Contact clicks are not confirmed quotes or booked jobs.

The second scan informed service scope, quote guidance, and route corrections; sampled searches are not keyword-volume data or proof of AI rankings. Research references:

- Google Search Central: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Browser agent accessibility: https://web.dev/articles/ai-agent-site-ux
- OpenAI crawler controls: https://developers.openai.com/api/docs/bots
- Mirror buyer scope sample: https://www.glasscare.com/services/custom-mirror-installation
- Office partition buyer scope sample: https://www.nycstorefrontglass.com/p/office-glass-partitions-nyc-office.html
- Manufacturer acoustic guidance: https://glassed.vitroglazings.com/determining-the-right-glass-for-the-right-acoustics
- NYC project requirements reference: https://www.nyc.gov/site/buildings/codes/2022-construction-codes.page

The Markdown alternates and directory are convenience formats generated from visible HTML. They are not a promise of recommendation placement or an extra Google ranking signal. Genuine project examples and customer proof can be added as they become available; typical scenarios must stay labeled as typical.
