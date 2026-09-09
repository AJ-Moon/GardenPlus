export type LandscapeService = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  href: string;
};

// Owner-supplied service names and scope. Photos illustrate the service,
// and are not presented as photographs of GardenPlus completed projects.
export const landscapeServices: LandscapeService[] = [
  {
    slug: "landscape-design-planning",
    title: "Landscape Design & Planning",
    description:
      "Site visits, 3D landscape design proposals, execution planning, and detailed quotations—with a one-year service warranty/guarantee.",
    image: "/services/design.jpg",
    imageAlt: "Formal garden layout with planted borders and a central path",
    href: "/services/garden-design-lahore",
  },
  {
    slug: "landscape-development",
    title: "Landscape Development",
    description:
      "Levels, contouring, filling materials, drainage mediums, and related development work.",
    image: "/services/development.jpg",
    imageAlt: "Bulldozer moving soil during ground preparation",
    href: "/services/landscape-development-lahore",
  },
  {
    slug: "landscape-civil-works",
    title: "Landscape Civil Works",
    description:
      "Construction of pathways, steps, retaining walls, boundary walls, arches, pergolas, water bodies, shelters, sit-outs, gates, and related structures.",
    image: "/services/civil-works.jpg",
    imageAlt: "Garden steps and stonework surrounded by planting",
    href: "/services/landscape-civil-works-lahore",
  },
  {
    slug: "landscape-lighting",
    title: "Landscape Lighting",
    description:
      "Selection and installation planning for suitable lighting fixtures, underwater lights, spotlights, sheet lighting, uplighting, and other outdoor lighting systems.",
    image: "/services/lighting.jpg",
    imageAlt: "Garden light illuminating flowers and a tree beside a path",
    imagePosition: "50% 70%",
    href: "/services/landscape-lighting-lahore",
  },
  {
    slug: "hard-semi-hard-landscaping",
    title: "Hard & Semi-Hard Landscaping",
    description:
      "Landscape layouts, paving patterns, material specifications, and related hardscape work.",
    image: "/services/hardscape.jpg",
    imageAlt: "Stone garden steps with a stone wall and planted edges",
    href: "/services/hardscaping-lahore",
  },
  {
    slug: "soft-landscaping",
    title: "Soft Landscaping",
    description:
      "Placement of lawns, shrubs, trees, ground-cover plants, and specimen plants, including soil conditioning, organic and inorganic manuring, transplantation, and follow-up maintenance.",
    image: "/services/planting.jpg",
    imageAlt: "Hands working with plants in soil",
    href: "/services/plant-supply-lahore",
  },
  {
    slug: "water-bodies-water-play",
    title: "Water Bodies & Water Play",
    description:
      "Planning and construction specifications for fountains, cascades, waterfalls, and other water features, including circulation, filtration, aeration, pumps, motors, and plumbing.",
    image: "/services/water-features.jpg",
    imageAlt: "Fountain in a planted garden water channel",
    imagePosition: "50% 80%",
    href: "/services/water-features-fountains-lahore",
  },
  {
    slug: "irrigation-systems",
    title: "Irrigation Systems",
    description:
      "Design and installation planning for automated sprinkler and drip-irrigation systems, including pipelines, valves, controls, pumps, motors, and electrical accessories.",
    image: "/services/irrigation.jpg",
    imageAlt: "Garden sprinkler watering a bed of flowering plants",
    href: "/services/irrigation-systems-pakistan",
  },
  {
    slug: "garden-structures-special-effects",
    title: "Garden Structures & Special Effects",
    description:
      "Design and development of shelters, gazebos, trellises, picket fencing, railings, pergolas, and other garden structures.",
    image: "/services/structures.jpg",
    imageAlt: "Garden pergola supporting climbing foliage",
    href: "/services/pergolas-gazebos-lahore",
  },
  {
    slug: "bill-of-quantities",
    title: "Bill of Quantities (BOQ)",
    description:
      "Preparation of detailed BOQs for landscaping projects to provide accurate project and cost estimates.",
    image: "/services/planning.jpg",
    imageAlt: "Measured drawings and project paperwork beside a hard hat",
    href: "/services/landscape-boq-lahore",
  },
  {
    slug: "landscape-maintenance",
    title: "Landscape Maintenance",
    description:
      "Day-to-day maintenance of landscapes, water bodies, irrigation equipment, plants, pest control, fertilization, and general garden upkeep.",
    image: "/services/maintenance.jpg",
    imageAlt: "Lawn mower cutting green grass",
    href: "/services/lawn-maintenance-lahore",
  },
];
