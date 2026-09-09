# GardenPlus — Content Guide

The main content lives in the files below. Routine text edits do not require
changing page components.

| What you want to change | File |
| --- | --- |
| Phone, email, address, map, social links, shared photos, videos, clients, testimonials | `lib/site-content.ts` |
| Current service names, descriptions and photos | `lib/services.ts` |
| Service scope, process and FAQs | `lib/service-details.ts` |
| Completed projects, in display order | `lib/completed-projects.ts` |
| Existing blog articles | `lib/blog.ts` |
| Ten Pakistan-focused articles added September 2026 | `lib/blog-pakistan.ts` |

After any edit, save the file — the site reloads automatically while `npm run dev`
is running.

---

## 1. Adding your photos

**Step 1.** Put your image files in `public/projects/`.
Create the folder if it isn't there. Example:

```
public/projects/villa-lawn.jpg
public/projects/hotel-entrance.jpg
```

Name them in lowercase with hyphens — no spaces.

**Step 2.** Open `lib/site-content.ts` and find the `photos` block near the top.
Replace the stock URL with your file path:

```ts
export const photos = {
  roseGardenPath: "/projects/villa-lawn.jpg",   // ← was a stock URL
  lushGardenTrees: stock("photo-1598902108854-10e335adac99"),
  ...
};
```

Every place that photo appears across the site updates at once.

Service photos live in `public/services/`; change their paths and descriptive
alt text in `lib/services.ts`. Source details are in
`public/services/PHOTO-CREDITS.md`. The completed project list uses the supplied
names and details without years. Stock images are not attached to named projects.

**Image tips**
- Landscape orientation, at least 1600px wide.
- JPG is fine. Keep each file under ~500KB if you can.
- Sizing, cropping, lazy-loading and mobile optimisation are automatic.

---

## 2. Adding your videos

Video sections are currently **hidden** — there are no videos yet, so nothing
broken shows. They appear automatically the moment you add one.

Open `lib/site-content.ts`, find the `videos` list, and uncomment/fill it in:

```ts
export const videos: Video[] = [
  {
    id: "AbC123xyZ",
    title: "From Bare Lawn to Dream Garden",
    segment: "Residential",
  },
];
```

**Where to get the `id`:** it's only the code at the end of the YouTube URL.

```
https://www.youtube.com/watch?v=AbC123xyZ
                                 ^^^^^^^^^  ← this part only
```

**Fields**
- `id` — required. YouTube video ID (not the full URL).
- `title` — required. Shown under the player.
- `segment` — optional. One of `"Residential"`, `"Commercial"`, `"Corporate"`,
  `"Large Scale"`. Tags the video to that section of the Services page.
- `thumbnail` — optional. Leave it out and YouTube's own thumbnail is used.
  To use your own: `thumbnail: "/projects/my-thumb.jpg"`.

**Where videos appear**
- Homepage → the first 3 videos in the list.
- Portfolio page → all of them.
- Services page → only videos whose `segment` matches that section.

---

## 3. Changing business details

All in `siteConfig` at the top of `lib/site-content.ts`:

```ts
phone: "+92 300 8450025",
phoneHref: "+923008450025",      // no spaces — used for tap-to-call
whatsapp: "923008450025",        // no "+" — used for the WhatsApp button
email: "gardenpluslahore@hotmail.com",
```

The map and Google Maps link use `fullAddress`, assembled from `address.line1`
and `address.line2`. Updating the address updates both. The previous coordinates
were removed because an exact pin for the supplied address has not been confirmed.

---

## 4. Before you go live — please check these

These were placeholders in the original build and still need your confirmation.

### ⚠️ Testimonials (`testimonials` in `lib/site-content.ts`)
Six client quotes. Two of them originally contradicted each other across pages
(the same person credited to two different companies), which suggests they were
written as filler rather than collected from real clients.

**Please either confirm each one is real and you have permission to publish it,
or delete the ones you can't confirm.** Publishing invented reviews as genuine
is deceptive and unlawful in most places. Deleting is safe — if you empty the
list entirely, the testimonial sections disappear cleanly.

The stock-photo headshots that used to accompany these names have been removed;
they were photographs of real, unrelated people.

### ⚠️ Client list (`clients`)
Twelve company names that read as placeholders ("Golden Gate Developers",
"Blue Sky Resorts"). Swap in real clients you can name, and delete the rest.

### Completed projects
The 33 owner-supplied entries are in `lib/completed-projects.ts`. Preserve the
names, details and ordering. There is no year field. Only use photographs of the
actual project if a project gallery is added later.

### ⚠️ Stats (`stats`)
"1,000+ projects", "850+ homeowners", "7+ awards" — confirm these are accurate.
Years of excellence is calculated automatically from `founded: 1990`.

### ⚠️ Social links (`siteConfig.social`)
Confirm the Facebook and Instagram URLs are correct. Delete either one if you
don't use it — the footer only shows what's in the list. The dead Twitter and
LinkedIn placeholders have already been removed.

---

## 5. Writing a blog post

In `lib/blog.ts`, copy an existing entry and change it. Content is built from
simple blocks:

```ts
{
  slug: "my-new-post",              // becomes /blog/my-new-post
  title: "My New Post",
  excerpt: "One or two sentences shown on the blog index.",
  image: "/blog/my-photo.jpg",
  category: "Design",
  readTime: "5 min read",
  date: "2026-08-05",               // YYYY-MM-DD, controls ordering
  content: [
    { type: "h2", text: "A section heading" },
    { type: "p", text: "A paragraph of text." },
    { type: "ul", items: ["First point", "Second point"] },
    { type: "quote", text: "A pulled-out highlight." },
  ],
},
```

Add `featured: true` to make it the large card at the top of the blog page
(only one post should have it). The page, its SEO tags and the sitemap entry are
all generated automatically.

New posts can also include `imageAlt`, `keywords`, `relatedServices` (service
slugs from `lib/services.ts`) and `sources` (objects with `title` and `url`).
The September articles calculate reading time from their content. Use the actual
publication date; do not change it on every build.
