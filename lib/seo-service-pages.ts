import { photos, siteConfig } from "@/lib/site-content";
import { absoluteUrl, serviceAreas } from "@/lib/seo";

export type SeoServicePage = {
  slug: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  keywords: string[];
  image: string;
  intro: string[];
  deliverables: string[];
  process: string[];
  areas: string[];
  faqs: { question: string; answer: string }[];
};

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "garden-design-lahore",
    title: "Garden Design Lahore - Residential & Commercial Landscape Plans",
    h1: "Garden Design in Lahore",
    eyebrow: "Landscape design",
    description:
      "Custom garden design for Lahore homes, farmhouses, offices, hotels and developments, planned around heat, soil, irrigation and long-term maintenance.",
    metaDescription:
      "GardenPlus provides garden design in Lahore for homes, farmhouses, offices and commercial spaces, including planting plans, lawns, irrigation, paths and outdoor living areas.",
    primaryKeyword: "garden design Lahore",
    keywords: [
      "garden design Lahore",
      "landscape designer Lahore",
      "landscape design Pakistan",
      "home garden design Lahore",
      "villa garden design Lahore",
    ],
    image: photos.roseGardenPath,
    intro: [
      "A strong garden design starts with how the space will be used every day: family seating, children, guests, privacy, views from inside the house, maintenance access and seasonal color.",
      "GardenPlus designs outdoor spaces with Lahore's heat, soil, dust and monsoon drainage in mind, so the finished garden is not only attractive on handover day but practical to keep healthy.",
    ],
    deliverables: [
      "Site survey, sun and shade study, soil and drainage notes",
      "Concept layout for lawn, planting, paths, sitting areas and focal points",
      "Plant palette selected for Lahore and climate-similar Middle East conditions",
      "Irrigation, lighting and maintenance recommendations",
      "Phased implementation plan for budget or construction timelines",
    ],
    process: [
      "Visit and measure the site",
      "Define use zones and design direction",
      "Select lawn, trees, shrubs, seasonal flowers and hardscape materials",
      "Plan irrigation and maintenance access",
      "Build, plant and hand over with care instructions",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Cantt", "Bedian Road"],
    faqs: [
      {
        question: "Can GardenPlus design a garden before construction finishes?",
        answer:
          "Yes. Early landscape planning is best because levels, drainage, lighting conduits and irrigation lines can be coordinated before final paving and planting.",
      },
      {
        question: "Do you design small courtyard gardens?",
        answer:
          "Yes. Small gardens often need the most careful planning, especially for privacy, container planting, shade, drainage and year-round structure.",
      },
      {
        question: "Can you design for low maintenance?",
        answer:
          "Yes. GardenPlus can reduce maintenance through hardy plant selection, drip irrigation, mulch, artificial grass where appropriate and simple access routes for care.",
      },
    ],
  },
  {
    slug: "lawn-maintenance-lahore",
    title: "Lawn Maintenance Lahore - Mowing, Feeding, Repair & Care",
    h1: "Lawn Maintenance in Lahore",
    eyebrow: "Lawn care",
    description:
      "Regular lawn maintenance in Lahore for homes, offices, hotels and campuses, covering mowing, edging, feeding, weed control, repair and irrigation checks.",
    metaDescription:
      "GardenPlus provides lawn maintenance in Lahore with mowing, edging, fertilising, weed control, seasonal repair, irrigation checks and year-round lawn care.",
    primaryKeyword: "lawn maintenance Lahore",
    keywords: [
      "lawn maintenance Lahore",
      "lawn care services Lahore",
      "garden maintenance Lahore",
      "lawn service Lahore",
      "commercial lawn care Pakistan",
    ],
    image: photos.lawnCloseUp,
    intro: [
      "A Lahore lawn needs different care in spring, peak summer, monsoon, autumn repair season and winter dormancy. Treating every month the same is why many lawns thin out or burn.",
      "GardenPlus maintains lawns as living systems: mowing height, watering depth, soil compaction, feeding, weeds, drainage and foot traffic are reviewed together.",
    ],
    deliverables: [
      "Scheduled mowing, edging and cleanup",
      "Fertiliser and seasonal lawn feeding plans",
      "Weed, pest and patch repair support",
      "Aeration, top dressing and overseeding where needed",
      "Sprinkler and irrigation coverage checks",
    ],
    process: [
      "Assess grass condition, shade and drainage",
      "Set mowing height and watering rhythm",
      "Repair thin or compacted areas",
      "Feed according to season",
      "Track recurring problems and adjust the care plan",
    ],
    areas: ["Lahore", "DHA Lahore", "Bahria Town Lahore", "Model Town", "Punjab"],
    faqs: [
      {
        question: "How often should a lawn be maintained in Lahore?",
        answer:
          "Most active lawns need weekly or fortnightly attention in the growing season, with slower schedules in winter depending on grass type and use.",
      },
      {
        question: "Can you revive a patchy lawn?",
        answer:
          "Usually, yes. GardenPlus checks soil compaction, shade, irrigation coverage, drainage and mowing height before recommending repair, reseeding or replacement.",
      },
      {
        question: "Do commercial lawns need a maintenance contract?",
        answer:
          "Commercial sites usually benefit from scheduled care because entrances, verges and campus lawns need consistent presentation without emergency call-outs.",
      },
    ],
  },
  {
    slug: "irrigation-systems-pakistan",
    title: "Irrigation Systems Pakistan - Drip & Sprinkler Installation",
    h1: "Irrigation Systems for Gardens and Landscapes",
    eyebrow: "Water-efficient landscaping",
    description:
      "Drip and sprinkler irrigation systems for homes, commercial landscapes, campuses and large projects in Pakistan, designed for healthier plants and lower water waste.",
    metaDescription:
      "GardenPlus designs and installs irrigation systems in Pakistan, including drip irrigation, sprinklers, zoning, controllers and water-efficient landscape planning.",
    primaryKeyword: "irrigation system Pakistan",
    keywords: [
      "irrigation system Pakistan",
      "drip irrigation Lahore",
      "sprinkler system Lahore",
      "garden irrigation Pakistan",
      "smart irrigation systems",
    ],
    image: photos.raisedVegBeds,
    intro: [
      "Good irrigation is not just pipework. It is a plan for how different parts of a garden drink: lawns, trees, hedges, containers, seasonal beds and rooftop planting all need different watering rhythms.",
      "GardenPlus designs irrigation around plant type, pressure, sunlight, soil, slope and maintenance access, with drip and sprinkler zones selected for the job they need to do.",
    ],
    deliverables: [
      "Drip irrigation for beds, shrubs, trees and containers",
      "Sprinkler and rotor coverage for lawns",
      "Zoned valves and controller recommendations",
      "Rain, moisture and seasonal scheduling guidance",
      "Maintenance checks for leaks, blocked emitters and dry patches",
    ],
    process: [
      "Map plant types and water demand",
      "Check pressure, water source and coverage needs",
      "Separate lawn, bed, tree and pot zones",
      "Install lines, valves, heads and controls",
      "Test coverage and set a seasonal schedule",
    ],
    areas: ["Pakistan", "Lahore", "Punjab", "Dubai", "Riyadh"],
    faqs: [
      {
        question: "Is drip irrigation better than sprinklers?",
        answer:
          "Drip is usually better for beds, shrubs, trees and containers because water goes to the root zone. Lawns still need sprinkler or rotor coverage for even growth.",
      },
      {
        question: "Can irrigation reduce water bills?",
        answer:
          "A properly zoned system can reduce waste by watering deeply, at the right time, and only where plants need it.",
      },
      {
        question: "Can you repair an existing irrigation system?",
        answer:
          "Yes. GardenPlus can inspect dry patches, leaks, low pressure, clogged emitters and misaligned sprinkler heads before recommending repairs.",
      },
    ],
  },
  {
    slug: "artificial-grass-pakistan",
    title: "Artificial Grass Pakistan - Low-Maintenance Turf & Garden Areas",
    h1: "Artificial Grass for Homes and Commercial Spaces",
    eyebrow: "Low-maintenance lawns",
    description:
      "Artificial grass planning and installation guidance for Pakistan homes, balconies, play areas, terraces, shaded lawns and high-use commercial spaces.",
    metaDescription:
      "GardenPlus helps plan artificial grass in Pakistan for homes, terraces, balconies, play areas and commercial spaces, with drainage and heat exposure considered.",
    primaryKeyword: "artificial grass Pakistan",
    keywords: [
      "artificial grass Pakistan",
      "artificial grass Lahore",
      "artificial turf Pakistan",
      "low maintenance lawn Lahore",
      "balcony grass Pakistan",
    ],
    image: photos.gardenLawn,
    intro: [
      "Artificial grass is useful in the right place: shaded strips where natural grass fails, balconies, terraces, play corners, rental properties and high-use commercial areas.",
      "It should still be planned like a landscape surface, with drainage, heat exposure, edge detail, cleaning access and surrounding planting considered before installation.",
    ],
    deliverables: [
      "Site suitability review for artificial grass",
      "Drainage, base preparation and edge planning",
      "Integration with planters, trees, paths and seating",
      "Natural lawn versus artificial turf recommendation",
      "Maintenance guidance for dust, heat and cleaning",
    ],
    process: [
      "Inspect sunlight, use and drainage",
      "Recommend artificial or natural lawn based on site realities",
      "Prepare base and edges",
      "Install turf with correct falls and joins",
      "Finish with planting and maintenance guidance",
    ],
    areas: ["Lahore", "Pakistan", "DHA Lahore", "Bahria Town Lahore", "Gulberg"],
    faqs: [
      {
        question: "Is artificial grass good for Lahore heat?",
        answer:
          "It can work, but exposed areas get hot. GardenPlus recommends artificial grass mostly where maintenance, shade, high use or water limits make natural lawn difficult.",
      },
      {
        question: "Does artificial grass need drainage?",
        answer:
          "Yes. A good base and drainage plan are essential so rain and cleaning water do not pool under the turf.",
      },
      {
        question: "Can artificial grass be mixed with real plants?",
        answer:
          "Yes. It often looks best when softened with planters, shrubs, trees, borders or vertical greenery.",
      },
    ],
  },
  {
    slug: "plant-supply-lahore",
    title: "Plant Supply Lahore - Outdoor Plants, Indoor Plants & Nursery Stock",
    h1: "Plant Supply and Nursery Stock in Lahore",
    eyebrow: "Plants and seasonal color",
    description:
      "Outdoor plants, indoor plants, trees, shrubs, ground covers and seasonal flowers sourced for Lahore gardens, commercial projects and large landscape schemes.",
    metaDescription:
      "GardenPlus supplies plants in Lahore, including outdoor plants, indoor plants, trees, shrubs, seasonal flowers, ground cover and nursery stock for landscape projects.",
    primaryKeyword: "plant nursery Lahore",
    keywords: [
      "plant nursery Lahore",
      "outdoor plants Pakistan",
      "indoor plants Lahore",
      "plant supply Lahore",
      "seasonal flowers Lahore",
    ],
    image: photos.nurseryField,
    intro: [
      "The right plant is not just the one that looks good in the nursery. It has to suit the site, sun exposure, soil, irrigation, maintenance level and final mature size.",
      "GardenPlus sources plants for private gardens, offices, hotels, campuses and large-scale projects, with selections matched to Lahore and Pakistan climate conditions.",
    ],
    deliverables: [
      "Outdoor plants, trees, palms, shrubs and hedges",
      "Indoor plants for offices, hotels and homes",
      "Seasonal flowers and color rotations",
      "Ground cover, climbers and screening plants",
      "Planting, soil preparation and aftercare guidance",
    ],
    process: [
      "Assess location, light and maintenance needs",
      "Select species and sizes",
      "Source nursery stock",
      "Prepare soil and plant correctly",
      "Set watering and aftercare schedule",
    ],
    areas: ["Lahore", "Punjab", "Pakistan", "DHA Lahore", "Bedian Road"],
    faqs: [
      {
        question: "Can GardenPlus supply plants for commercial spaces?",
        answer:
          "Yes. GardenPlus supplies and installs plants for hotels, restaurants, offices, campuses, retail frontages and residential developments.",
      },
      {
        question: "Do you recommend low-maintenance outdoor plants?",
        answer:
          "Yes. Plant recommendations can be based on heat tolerance, water needs, pruning frequency and the level of maintenance the client wants.",
      },
      {
        question: "Can you handle seasonal flower rotation?",
        answer:
          "Yes. GardenPlus can plan and install winter, spring, summer and monsoon planting rotations for continuous color.",
      },
    ],
  },
  {
    slug: "commercial-landscaping-pakistan",
    title: "Commercial Landscaping Pakistan - Offices, Hotels & Developers",
    h1: "Commercial Landscaping for Businesses and Developments",
    eyebrow: "Business landscapes",
    description:
      "Commercial landscaping for hotels, offices, restaurants, campuses, retail frontages and residential developments in Lahore and Pakistan.",
    metaDescription:
      "GardenPlus provides commercial landscaping in Pakistan for hotels, offices, campuses, retail frontages and developments, including design, irrigation and maintenance.",
    primaryKeyword: "commercial landscaping Pakistan",
    keywords: [
      "commercial landscaping Pakistan",
      "corporate landscaping Pakistan",
      "office landscaping Lahore",
      "hotel landscaping Pakistan",
      "grounds maintenance Lahore",
    ],
    image: photos.campusLawn,
    intro: [
      "Commercial landscapes are judged every day by visitors, guests, residents and employees. They need to look composed, stay safe, drain properly and fit the maintenance budget.",
      "GardenPlus plans commercial outdoor spaces around entrances, walkways, shade, irrigation, seasonal color, brand impression and long-term grounds care.",
    ],
    deliverables: [
      "Entrance and frontage landscaping",
      "Hotel, restaurant and retail terrace planting",
      "Office campus lawns and shaded walkways",
      "Residential development landscape planning",
      "Ongoing grounds maintenance programs",
    ],
    process: [
      "Review business use and visitor flow",
      "Plan durable planting and irrigation",
      "Coordinate hardscape, lighting and access",
      "Install in phases where sites stay operational",
      "Maintain presentation through a scheduled program",
    ],
    areas: ["Lahore", "Punjab", "Pakistan", "Dubai", "Doha"],
    faqs: [
      {
        question: "Can landscaping be phased around business operations?",
        answer:
          "Yes. Commercial work can be phased around opening hours, guest areas, school calendars, office visits or construction handovers.",
      },
      {
        question: "Do you provide maintenance after installation?",
        answer:
          "Yes. GardenPlus can provide scheduled maintenance for lawns, plants, irrigation, seasonal color and presentation-critical areas.",
      },
      {
        question: "Can GardenPlus work with developers?",
        answer:
          "Yes. GardenPlus handles shared green spaces, street trees, parks, verges, entrance landscapes and phased planting programs for development projects.",
      },
    ],
  },
  {
    slug: "vertical-gardens-pakistan",
    title: "Vertical Gardens Pakistan - Green Walls for Homes & Businesses",
    h1: "Vertical Gardens and Green Walls",
    eyebrow: "Green walls",
    description:
      "Vertical garden and green wall planning for homes, offices, restaurants, courtyards and commercial spaces in Pakistan and hot-climate environments.",
    metaDescription:
      "GardenPlus designs vertical gardens and green walls in Pakistan for homes, offices, restaurants and commercial spaces, with irrigation and plant care planning.",
    primaryKeyword: "vertical garden Pakistan",
    keywords: [
      "vertical garden Pakistan",
      "green wall Lahore",
      "vertical garden Lahore",
      "indoor plants Lahore",
      "commercial green wall Pakistan",
    ],
    image: photos.tropicalFoliage,
    intro: [
      "Vertical gardens are useful where floor space is limited but greenery matters: restaurants, office walls, courtyards, terraces, boundary walls and indoor feature areas.",
      "A reliable green wall needs correct plant choice, irrigation, drainage, light and maintenance access. Without those, it becomes expensive decoration rather than a living system.",
    ],
    deliverables: [
      "Indoor and outdoor green wall concepts",
      "Plant selection for light, heat and maintenance",
      "Drip irrigation and drainage planning",
      "Frame, planter and access recommendations",
      "Maintenance guidance for pruning, feeding and replacements",
    ],
    process: [
      "Check light, wall structure and water access",
      "Choose indoor or outdoor planting system",
      "Plan irrigation and drainage",
      "Install plants with service access",
      "Maintain growth density and plant health",
    ],
    areas: ["Lahore", "Pakistan", "Dubai", "Abu Dhabi", "Doha"],
    faqs: [
      {
        question: "Can a vertical garden work indoors?",
        answer:
          "Yes, if light, irrigation, drainage and plant selection are handled properly. Some indoor spaces may need supplemental lighting.",
      },
      {
        question: "Do green walls need automatic irrigation?",
        answer:
          "Most living green walls perform better with controlled drip irrigation because pockets and planters dry unevenly by hand.",
      },
      {
        question: "Are vertical gardens good for restaurants and offices?",
        answer:
          "Yes. Green walls can improve ambience and brand impression, especially where there is not enough floor area for large planters.",
      },
    ],
  },
];

export const seoServicePageLinks = seoServicePages.map((page) => ({
  name: page.h1.replace(" in Lahore", "").replace(" for Gardens and Landscapes", ""),
  href: `/services/${page.slug}`,
}));

export const getSeoServicePage = (slug: string) =>
  seoServicePages.find((page) => page.slug === slug);

export const servicePageJsonLd = (page: SeoServicePage) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/${page.slug}#service`,
      name: page.h1,
      description: page.description,
      serviceType: page.primaryKeyword,
      provider: { "@id": `${siteConfig.url}/#local-business` },
      areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
      url: absoluteUrl(`/services/${page.slug}`),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${page.h1} deliverables`,
        itemListElement: page.deliverables.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/${page.slug}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/services/${page.slug}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: absoluteUrl("/services"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.h1,
          item: absoluteUrl(`/services/${page.slug}`),
        },
      ],
    },
  ],
});
