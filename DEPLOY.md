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
   - GA4 is configured in `components/GoogleAnalyticsConsent.tsx`; no analytics environment variable is needed.
   - RESEND_API_KEY = your Resend API key
   - CONTACT_TO_EMAIL = the inbox that should receive website leads
   - CONTACT_FROM_EMAIL = required; a sender on your verified Resend domain
   - CONTACT_FROM_NAME = optional, defaults to MetroGlass Pro Website
   - CONTACT_TURNSTILE_SITE_KEY and CONTACT_TURNSTILE_SECRET = production Turnstile credentials
   - CONTACT_DB = a private D1 binding initialized with `migrations/contact.sql`
5. Save and Deploy

## Contact Form Delivery
- The website now uses a native MetroGlass Pro form that posts to `/api/contact`.
- That endpoint is powered by a Cloudflare Pages Function in `functions/api/contact.ts`.
- `public/_routes.json` runs the contact endpoint and HTML/Markdown content negotiation. Static assets and direct Markdown files bypass Functions.
- The short form requires a name, one phone number **or** email, and a project note. Service, photos, and referral source are optional. Older clients using separate phone/email and building fields remain compatible.
- Required production settings: `RESEND_API_KEY`, `CONTACT_TO_EMAIL=operations@metroglasspro.com`, and `CONTACT_FROM_EMAIL` using a sender on a Resend-verified domain. The default `onboarding@resend.dev` testing sender is not permitted in production. Store the API key as a Cloudflare Pages secret, never in Git or client code.
- `GET /api/contact` reports only whether the required settings are present and syntactically valid. It does not verify provider credentials, domain verification, or inbox delivery. Configure both production and preview separately as appropriate, then redeploy.
- When configuration is incomplete, the form offers email/text drafts with the entered details and clearly tells visitors to press Send in their chosen app. Draft links are contact clicks, not confirmed leads.
- Online requests support up to three photo/PDF attachments (8MB each, 18MB total). Customer confirmation emails are off by default. Only set `CONTACT_CUSTOMER_CONFIRMATIONS=true` when you intend to resume them.
- Resend requests use `reply_to`, bounded network waits, and acceptance IDs. Logs contain a request reference and provider ID, stage, and status, without contact details or raw provider errors. A successful submission means provider acceptance, not proven inbox delivery.
- To verify delivery after setup, use one authorized test request and match its reference in D1, the Pages log, Resend, and the operations inbox. Confirm the supplied address is the Reply-To and that no customer confirmation is generated while confirmations are off. Automated tests use local SQLite and stub outgoing requests.
- Verified inquiries and attachments are stored together in D1 before email. A saved request gets a reference even if the notification fails. Review pending or unconfirmed rows in the D1 console, using the query below. A successful Resend API response alone does not establish inbox delivery.

### Provisioning estimate form protection

- Create a managed Turnstile widget for `metroglasspro.com`. Add `www.metroglasspro.com` only if it serves the form rather than redirecting. Use a separate widget and database for any preview that accepts submissions.
- Create a private D1 database. Apply `migrations/contact.sql` to it (using the D1 console or `wrangler d1 execute <database> --remote --file migrations/contact.sql`). In the Pages project production settings bind it as `CONTACT_DB`. Add the public site key as `CONTACT_TURNSTILE_SITE_KEY` and the secret as encrypted `CONTACT_TURNSTILE_SECRET`. Keep the Resend settings in place and deploy after all bindings are configured.
- `GET /api/contact` should report `formAvailable: true` and the public site key. The form offers email and text drafts if a required setting is absent. Only form submissions count toward the IP limit of 12 attempts per ten-minute window. The limiter stores a temporary hash rather than the raw IP. Duplicate inquiries with matching contents and attachments within 15 minutes reuse the original reference.
- To recover leads during an email incident, use the private D1 console:

  ```sql
  SELECT id, datetime(created_at / 1000, 'unixepoch') AS submitted_utc,
         notification_status, details
  FROM contact_inquiries
  WHERE notification_status IN ('pending', 'unconfirmed')
  ORDER BY created_at DESC;
  ```

  For a selected request, read `contact_inquiry_attachment_chunks` by `inquiry_id`, ordered by `attachment_index, chunk_index`. Concatenate each attachment’s base64 chunks and decode them using the filename and content type in `details.attachments`.

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
- In a fresh browser, verify analytics loads without a popup. Verify the privacy-page opt-out stops Google requests. With analytics enabled, verify a `page_view` request to `G-46MYS2R9QW` returns 204 and appears in GA4 Realtime.
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

## Safe blog publication queue

`_drafts/` is a publication queue, not a research folder. Keep unfinished articles
elsewhere. Before queueing, review factual claims, original evidence, image rights,
existing coverage, links and business promises. The authorized website program can
approve factual work; a metadata flag alone is not evidence of an editorial review.

The publisher requires `status: approved` and a real `date: YYYY-MM-DD` in the
draft's frontmatter. The date is both the intended publication date and the earliest
eligible day, evaluated in UTC. Missing approval, missing/invalid dates and future
dates are held without changing or deleting the draft. One eligible article is
selected per run, in filename order; held entries do not block later eligible ones.
Do not add approval flags to the existing bulk SEO research drafts automatically.

Existing article routes, legacy HTML articles, blog entries and sitemap entries
are protected against overwrite. Update an existing page in its source instead.
If the blog/sitemap insertion markers change, publication fails before writing.

The existing 11:00 UTC schedule is unchanged. The workflow runs only on `main`,
serializes publisher runs, and requires publication tests, the full production build
(including prebuild/postbuild), AEO checks and mocked contact tests before committing.
An empty or held-only queue is a successful no-op. Failed checks leave the remote
draft and published source unchanged; a non-fast-forward push is not forced.

Run `npm run test:publish` locally when editing the publisher. Its integration
fixtures use temporary directories and do not write to the real queue or send mail.
Preparing source or pushing a commit is not proof of deployment. Verify the
Cloudflare production deployment and canonical public URL after publication,
then add genuinely new URLs to the existing GSC indexing tracker.
