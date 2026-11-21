// ============================================================================
// GARDENPLUS — CENTRAL CONTENT FILE
// ----------------------------------------------------------------------------
// Almost everything you'll want to change lives in this one file: contact
// details, services, projects, videos, testimonials and clients.
//
// Look for the  ⚠️ REPLACE  markers — those are placeholders that should be
// swapped for real GardenPlus material before or shortly after launch.
//
// Step-by-step instructions: see CONTENT-GUIDE.md in the project root.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. BUSINESS DETAILS
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "GardenPlus",
  // ⚠️ REPLACE once your domain is connected — used for SEO + share links.
  url: "https://gardenplus.pk",
  tagline: "Professional Landscaping & Gardening Services",
  description:
    "GardenPlus provides landscape design, development, civil works, lighting, planting, irrigation and maintenance for homes and businesses across Pakistan.",

  phone: "+92 300 8450025",
  phoneHref: "+923008450025",
  // WhatsApp format: country code + number, no "+" and no spaces.
  whatsapp: "923008450025",
  email: "gardenpluslahore@hotmail.com",

  address: {
    line1: "Half Km Main Canal Road, Mustafa Abad, Ferozepur Road,",
    line2: "Near Toll Plaza & Barki Road, Lahore.",
  },

  officeAddress: {
    line1: "22, 2nd Floor, Center Point Plaza,",
    line2: "Main Boulevard, Gulberg, Lahore.",
  },

  hours: ["Monday – Saturday: 9am – 6pm", "Sunday: By Appointment"],

  // ⚠️ REPLACE with your real profile URLs. Delete any you don't use —
  // the footer only renders the ones listed here.
  // SEO 2026-11: the previous entries (facebook.com/gardenplus and
  // instagram.com/gardenplus) were template placeholders, not GardenPlus
  // profiles, and were also published as schema.org sameAs. Add only profiles
  // GardenPlus controls. Candidate seen in Google results, to confirm with the
  // owner: https://www.instagram.com/gardenplus_pk/ . Add the Google Business
  // Profile share link here once it is verified.
  social: [] as { name: string; href: string }[],

  founded: 1990,
} as const;

export const fullAddress = `${siteConfig.address.line1} ${siteConfig.address.line2}`;
export const fullOfficeAddress = `${siteConfig.officeAddress.line1} ${siteConfig.officeAddress.line2}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullOfficeAddress)}&z=15&output=embed`;
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullOfficeAddress)}`;
export const mustafaAbadMapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const whatsappUrl = (
  message = "Hi! I'm interested in your landscaping services. Could you please provide more information?",
) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

// ---------------------------------------------------------------------------
// 2. STATS  (shown on the homepage)
// ---------------------------------------------------------------------------

export const stats = [
  { value: 1000, suffix: "+", label: "Projects Completed" },
  {
    value: new Date().getFullYear() - siteConfig.founded,
    suffix: "+",
    label: "Years of Excellence",
  },
  { value: 850, suffix: "+", label: "Happy Homeowners" },
  { value: 7, suffix: "+", label: "Industry Awards" },
];

// ---------------------------------------------------------------------------
// 3. IMAGES
// ---------------------------------------------------------------------------
// ⚠️ REPLACE — every image below is temporary stock photography.
//
// To use your own photo:
//   1. Drop the file into  /public/projects/  (e.g. public/projects/villa-1.jpg)
//   2. Change the image value to  "/projects/villa-1.jpg"
// That's it — sizing, optimisation and lazy-loading are handled for you.
// ---------------------------------------------------------------------------

const stock = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

/**
 * Named placeholder photos, each one checked to make sure it actually shows
 * a garden or landscaping work. Re-check them periodically: Unsplash
 * occasionally reassigns a photo ID, and five of these had silently become a
 * beach, a bucket of plaster, a fabric swatch, an abstract render and a soil
 * scoop before they were caught. Swap the value for "/projects/your-file.jpg"
 * as your own photography comes in — every usage across the site updates.
 */
export const photos = {
  roseGardenPath: stock("photo-1585320806297-9794b3e4eeae"),
  lushGardenTrees: stock("photo-1598902108854-10e335adac99"),
  campusLawn: stock("photo-1562774053-701939374585"),
  estateHouseGarden: stock("photo-1571939228382-b2f2b585ce15"),
  nurseryField: stock("photo-1589923188900-85dae523342b"),
  raisedVegBeds: stock("photo-1584479898061-15742e14f50d"),
  resortPoolDusk: stock("photo-1596436889106-be35e843f974"),
  lawnCloseUp: stock("photo-1458245201577-fc8a130b8829"),
  herbRaisedBeds: stock("photo-1524247108137-732e0f642303"),
  plantingFlowers: stock("photo-1555955208-94f6fafea771"),
  tropicalFoliage: stock("photo-1503149779833-1de50ebe5f8a"),
  succulents: stock("photo-1520302630591-fd1c66edc19d"),
  tulips: stock("photo-1468327768560-75b778cbb551"),
  gardenLawn: stock("photo-1568393691622-c7ba131d63b4"),
  pottedPlants: stock("photo-1592150621744-aca64f48394a"),
  woodlandPath: stock("photo-1448375240586-882707db888b"),
  houseLawnTree: stock("photo-1600585154340-be6161a56a0c"),
  roseBed: stock("photo-1519378058457-4c29a0a2efac"),
  perennialBorder: stock("photo-1534710961216-75c88202f43e"),
  lavender: stock("photo-1499002238440-d264edd596ec"),
  gardenerAtWork: stock("photo-1605117882932-f9e32b03fea9"),
  resortPoolPalms: stock("photo-1440558953273-969c107f78a4"),
  aerialNeighbourhood: stock("photo-1512699355324-f07e3106dae5"),
  parkPath: stock("photo-1441974231531-c6227db76b6e"),
} as const;

/**
 * Alt text for each photo above. Decorative backdrops still pass alt="" at the
 * call site; these are for images that carry meaning, and they are what image
 * search has to go on. Describe the picture, not the page it sits on.
 */
export const photoAlt: Record<keyof typeof photos, string> = {
  roseGardenPath:
    "Garden path lined with flowering rose bushes and clipped hedging",
  lushGardenTrees: "Green garden with mature trees and dense underplanting",
  campusLawn: "Wide mown lawn in front of a large institutional building",
  estateHouseGarden:
    "Large house with a landscaped front lawn and mature planting",
  nurseryField:
    "Nursery worker tending rows of young plants in a growing field",
  raisedVegBeds: "Raised vegetable beds planted with leafy crops",
  resortPoolDusk: "Resort swimming pool surrounded by planting and lit at dusk",
  lawnCloseUp: "Lawn mower cutting a strip through healthy green grass",
  herbRaisedBeds: "Gardener planting flowering plants into a bed beside a wall",
  plantingFlowers: "Hands planting young flowering plants into prepared soil",
  tropicalFoliage: "Dense tropical foliage with large glossy leaves",
  succulents: "Mixed succulent planting in a drought-tolerant scheme",
  tulips: "Bedding display of tulips in full flower",
  gardenLawn: "Dog resting on a well-kept green family lawn",
  pottedPlants: "Indoor plants in decorative pots beside a window",
  woodlandPath: "Shaded woodland path running between tall trees",
  houseLawnTree: "Modern house with a level lawn and a mature feature tree",
  roseBed: "Bed of densely planted red roses in full bloom",
  perennialBorder: "Layered perennial border with purple flowering plants",
  lavender: "Rows of lavender in flower across a field",
  gardenerAtWork: "Gardener mowing a lawn outside a house",
  resortPoolPalms: "Swimming pool framed by tall palm trees",
  aerialNeighbourhood:
    "Aerial view of a residential neighbourhood with gardens and street trees",
  parkPath: "Path curving through a public park with trees on both sides",
};

/** Look up alt text from a photo URL, for pages that store the URL directly. */
const photoUrlToAlt = Object.fromEntries(
  (Object.keys(photos) as (keyof typeof photos)[]).map((key) => [
    photos[key],
    photoAlt[key],
  ]),
) as Record<string, string>;

export const altForPhoto = (url: string) => photoUrlToAlt[url] ?? "";

// ---------------------------------------------------------------------------
// 4. SERVICES  (the four sections of the /services page)
// ---------------------------------------------------------------------------

export type SegmentId =
  "Residential" | "Commercial" | "Corporate" | "Large Scale";

export type Segment = {
  id: SegmentId;
  slug: string;
  heading: string;
  intro: string;
};

export const segments: Segment[] = [
  {
    id: "Residential",
    slug: "residential",
    heading: "Residential Gardens",
    intro:
      "Garden design, planting, irrigation and maintenance for homes and farmhouses.",
  },
  {
    id: "Commercial",
    slug: "commercial",
    heading: "Commercial Projects",
    intro: "Landscaping, outdoor lighting and upkeep for business premises.",
  },
  {
    id: "Corporate",
    slug: "corporate",
    heading: "Corporate Landscaping",
    intro:
      "Planting and landscape maintenance for offices, factories and campuses.",
  },
  {
    id: "Large Scale",
    slug: "large-scale",
    heading: "Large Scale Projects",
    intro:
      "Landscape planning and development for housing schemes and larger sites.",
  },
];

// ---------------------------------------------------------------------------
// 5. VIDEOS
// ---------------------------------------------------------------------------
// Local project footage supplied by GardenPlus. Entries without `src` can
// still use a YouTube video ID and optional thumbnail.
// ---------------------------------------------------------------------------

export type Video = {
  id: string;
  title: string;
  src?: string;
  thumbnail?: string;
  segment?: SegmentId;
};

export const videos: Video[] = [
  {
    id: "landscape-design-3d",
    title: "3D Landscape Design Walkthrough",
    src: "/gardenplus-work/landscape-design-3d.mp4",
    thumbnail: "/gardenplus-work/landscape-design-3d-poster.jpg",
    segment: "Large Scale",
  },
  {
    id: "garden-pond",
    title: "Garden Pond and Gazebo Landscape",
    src: "/gardenplus-work/garden-pond.mp4",
    thumbnail: "/gardenplus-work/garden-pond-poster.jpg",
    segment: "Commercial",
  },
  {
    id: "garden-water-wall",
    title: "Garden Water Wall and Bridge",
    src: "/gardenplus-work/garden-water-wall.mp4",
    thumbnail: "/gardenplus-work/garden-water-wall-poster.jpg",
    segment: "Residential",
  },
  {
    id: "landscape-pathway",
    title: "Landscaped Garden Pathway",
    src: "/gardenplus-work/landscape-pathway.mp4",
    thumbnail: "/gardenplus-work/landscape-pathway-poster.jpg",
    segment: "Corporate",
  },
  {
    id: "garden-walkthrough",
    title: "Completed Garden Walkthrough",
    src: "/gardenplus-work/garden-walkthrough.mp4",
    thumbnail: "/gardenplus-work/garden-walkthrough-poster.jpg",
    segment: "Residential",
  },
];

/** YouTube's auto-generated thumbnail, used when you don't supply your own. */
export const videoThumbnail = (v: Video) =>
  v.thumbnail ?? `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`;

export const videosForSegment = (id: SegmentId) =>
  videos.filter((v) => v.segment === id);

// ---------------------------------------------------------------------------
// 6. CLIENTS
// ---------------------------------------------------------------------------
// Owner-supplied names from the completed-project record. No logos, sectors or
// endorsements are inferred.
// ---------------------------------------------------------------------------

export const clients = [
  { name: "Sapphire Electric", project: "234 MW Power Plant, Sheikhupura" },
  { name: "Tricon Village Housing Scheme", project: "Lahore" },
  { name: "Medipak", project: "Manga Mandi, Lahore" },
  { name: "D.G. Khan Cement Factory", project: "Khairpur, District Chakwal" },
  { name: "Lahore American School (LAS)", project: "Lahore" },
  { name: "ICI Paints", project: "Ferozepur Road, Lahore" },
  { name: "SNOHS A Block Park", project: "Lahore" },
  { name: "Prime Tannery", project: "G.T. Road, Muridke" },
  { name: "Style Textile", project: "Multiple completed projects" },
  { name: "Sapphire Finishing Mills", project: "Raiwind" },
  { name: "Beacon Impex / Masood Textile Mills", project: "Faisalabad" },
  { name: "Diamond Fabrics", project: "Ferozewatwan" },
  { name: "Halmore Head Office", project: "DHA" },
  { name: "Mindbridge", project: "Lahore Cantt" },
  { name: "Arbisoft Office", project: "Indoor plantation" },
  { name: "Medequips", project: "Indoor plantation" },
  { name: "Naveena Tower & Residence", project: "Gulberg" },
  { name: "Gulf Packaging", project: "Adda Plot" },
  { name: "Clinix", project: "Completed landscaping project" },
  { name: "Kamal Textile", project: "Completed landscaping project" },
  { name: "Masterfoam", project: "Completed landscaping project" },
  { name: "EHS", project: "Eastern Housing Society" },
  {
    name: "Farmhouse of Mr. Zafar Bhatti & Green Earth Villas",
    project: "Bedian Road, Lahore",
  },
  { name: "Residence of Mr. Yahya Saleem", project: "Main Canal Road, Lahore" },
  { name: "Residence of Mr. Nasim Shafi", project: "124-W, DHA" },
  { name: "Residence of Mian Azam Saigol", project: "Gulberg, Lahore" },
  { name: "Residence of Mr. Fahad Saigol", project: "Phase 6, DHA" },
  {
    name: "Residence of Dr. Shujaat Nadeem of Samba Bank",
    project: "Lahore Cantt",
  },
  { name: "Qureshi Farm", project: "Adda Plot" },
];

// ---------------------------------------------------------------------------
// 7. TESTIMONIALS
// ---------------------------------------------------------------------------
// ⚠️ IMPORTANT — VERIFY BEFORE LAUNCH
//
// These quotes were placeholders in the original build, and two of them
// contradicted each other across pages (the same person was credited to two
// different companies). They are now a single, consistent list.
//
// Publishing invented reviews as genuine is deceptive and, in most places,
// unlawful. Before you go live, please either:
//   (a) confirm each quote is real and you have the client's permission, or
//   (b) delete the entries you can't confirm — an empty list is handled
//       gracefully and the testimonial sections will simply not render.
//
// Note: the stock-photo headshots that were attached to these names have been
// removed. They were pictures of real, unrelated people.
// ---------------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

export const testimonials: Testimonial[] = [];

/** The three shown on the homepage. */
export const featuredTestimonials = testimonials.slice(0, 3);
