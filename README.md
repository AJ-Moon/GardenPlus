# GardenPlus

Marketing site for GardenPlus — landscaping and gardening services in Lahore.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Framer Motion.

---

## Running locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000

```bash
npm run build
```

---

## Editing content

**You almost never need to touch a component.** See **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)**
for how to add photos, videos, projects and blog posts.

- `lib/site-content.ts` — business details, services, projects, photos, videos, clients, testimonials
- `lib/blog.ts` — blog articles

---

## Pages

| Route | Notes |
| --- | --- |
| `/` | Homepage |
| `/about` | Company story, values, timeline |
| `/services` | All four service areas on one page, deep-linkable via `#residential`, `#commercial`, `#corporate`, `#large-scale` |
| `/portfolio` | Filterable project gallery with lightbox |
| `/blog` + `/blog/[slug]` | Articles, generated from `lib/blog.ts` |
| `/clients` | Client list and testimonials |
| `/contact` | Enquiry form, contact details, map |

The old `/residential`, `/commercial`, `/corporate` and `/mega-projects` pages
were merged into `/services` and now permanently redirect to the matching
section (configured in `next.config.mjs`).

---

## Contact form setup

The form posts to `/api/contact`, which sends the enquiry to your inbox via
[Resend](https://resend.com) (free tier: 3,000 emails/month).

**Until you configure it**, the form detects that email isn't available and
falls back to a pre-filled WhatsApp message, so no enquiry is ever lost.

To turn on email delivery:

1. Create a free account at [resend.com](https://resend.com).
2. Add your domain and verify it (Resend shows you the exact DNS records).
3. Create an API key.
4. Add these environment variables in Vercel → Project → Settings →
   Environment Variables (see `.env.example`):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=gardenpluslahore@hotmail.com
CONTACT_FROM_EMAIL=website@yourdomain.com
```

`CONTACT_FROM_EMAIL` must be on the domain you verified in step 2.
`CONTACT_TO_EMAIL` is where enquiries land, and can be any inbox.

For local testing, copy `.env.example` to `.env.local` and fill it in.
`.env.local` is gitignored — never commit real keys.

The form includes a hidden honeypot field that silently discards bot
submissions.

---

## Deploying

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — no configuration
   needed; Next.js is detected automatically.
3. Add the environment variables above.
4. Add your domain under Settings → Domains and follow the DNS instructions.
5. **Update `siteConfig.url` in `lib/site-content.ts` to your live domain** —
   it drives canonical URLs, the sitemap and social share cards.

---

## SEO

Generated automatically, no maintenance needed:

- Per-page titles and descriptions
- `sitemap.xml` and `robots.txt` (including every blog post)
- Open Graph share image, rendered at build time (`app/opengraph-image.tsx`)
- `LandscapingBusiness` structured data with address, hours and coordinates
- `BlogPosting` structured data on each article

After deploying, submit `https://yourdomain.com/sitemap.xml` in
[Google Search Console](https://search.google.com/search-console).

---

## Project structure

```
app/                    routes; each page sets its own SEO metadata
  api/contact/          enquiry form handler
components/             shared UI
  ui/                   shadcn/ui primitives (mostly unused, kept for future use)
lib/
  site-content.ts       ← main content file
  blog.ts               ← blog articles
public/                 static assets; put photos in public/projects/
gardenplus-cms/         separate Strapi CMS, not used by this site
```

## Notes

- `gardenplus-cms/` is a separate Strapi project. The site does not read from it
  and it is excluded from typechecking.
- Images are optimised by Next.js. Remote hosts are allow-listed in
  `next.config.mjs`; once every photo is local you can delete that block.
