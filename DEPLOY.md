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
   - CONTACT_FROM_EMAIL = required; a sender on your verified Resend domain
   - CONTACT_FROM_NAME = optional, defaults to MetroGlass Pro Website
5. Save and Deploy

## Contact Form Delivery
- The website now uses a native MetroGlass Pro form that posts to `/api/contact`.
- That endpoint is powered by a Cloudflare Pages Function in `functions/api/contact.ts`.
- `public/_routes.json` runs the contact endpoint and HTML/Markdown content negotiation. Static assets and direct Markdown files bypass Functions.
- The short form requires a name, one phone number **or** email, and a project note. Service, photos, and referral source are optional. Older clients using separate phone/email and building fields remain compatible.
- Required production settings: `RESEND_API_KEY`, `CONTACT_TO_EMAIL=operations@metroglasspro.com`, and `CONTACT_FROM_EMAIL` using a sender on a Resend-verified domain. The default `onboarding@resend.dev` testing sender is not permitted in production. Store the API key as a Cloudflare Pages secret, never in Git or client code.
- `GET /api/contact` reports only whether the required settings are present and syntactically valid. It does not verify provider credentials, domain verification, or inbox delivery. Configure both production and preview separately as appropriate, then redeploy.
- When configuration is incomplete, the form offers email/text drafts with the entered details and clearly tells visitors to press Send in their chosen app. Draft links are contact clicks, not confirmed leads.
- Online requests support up to three photo/PDF attachments (8MB each, 18MB total). Confirmation emails are sent only when the customer supplies an email; their failure does not invalidate the accepted operations notification.
- Resend requests use `reply_to`, bounded network waits, and acceptance IDs. Logs contain a request reference and provider ID, stage, and status, without contact details or raw provider errors. A successful submission means provider acceptance, not proven inbox delivery.
- To verify delivery after setup: send one authorized test, locate its request/provider ID, confirm provider delivery status and arrival in the operations inbox, reply to verify Reply-To, and check an email-contact confirmation. No live messages are sent by the automated tests.
- The application does not yet have durable lead storage. Add a supported private lead store plus delivery-event monitoring before treating email alone as a reliable lead ledger. Failed or unconfirmed sends retain the visitor's form text in the open page and offer direct contact options.

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

## Canonical indexing and presentation cleanup (September 5, 2026)

- Generate agent representations only for live canonical content; exclude exact redirect sources in `_redirects` and support retained extensionless legacy articles.
- The sitemap and generated directory now cover 46 canonical content URLs. Keep old redirects in place; do not submit their source URLs for indexing.
- Main-content links point directly to canonical pages. Legacy article FAQ markup now has matching visible answers.
- The homepage presents six services, an actual project photo, a shorter selection of guides, and less repetitive shower-only navigation. The estimate form uses fewer nested panels and clearer labels.
- Check `npm run build`, `npm run check:aeo`, and `npm run test:aeo`. Preview both legacy extensionless article URLs in HTML and Markdown on Cloudflare before merging because its asset routing differs from a local static server.
- Check the homepage, a service page, and service-prefilled contact form at desktop and narrow widths. The deployed public URLs, not local export counts, are the indexing baseline.
