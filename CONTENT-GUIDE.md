# GardenPlus — Content Guide

Everything you'll want to change lives in **two files**. You don't need to touch
any page or component.

| What you want to change | File |
| --- | --- |
| Phone, email, address, map, social links, services, projects, photos, videos, clients, testimonials | `lib/site-content.ts` |
| Blog articles | `lib/blog.ts` |

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

**Or**, to change one project only, edit that project directly in the `segments`
list further down:

```ts
{
  title: "Villa Garden & Lawn",
  description: "A complete garden makeover...",
  image: "/projects/villa-lawn.jpg",   // ← your file
  category: "Residential",
},
```

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

The map is generated from `coordinates`. Update the lat/lng and both the
embedded map and the "Open in Google Maps" link move together.

To get exact coordinates: right-click your location in Google Maps → click the
numbers at the top of the menu to copy them.

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

### ⚠️ Project photos
All 24 project images are stock photography of other people's gardens, captioned
with GardenPlus project names. They're placeholders to keep the layout intact —
replace them with your own work as soon as you can.

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
