export type LandscapeService = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  gallery: { src: string; alt: string }[];
  videoIds?: string[];
  href: string;
};

// Owner-supplied service names, scope and GardenPlus project media.
export const landscapeServices: LandscapeService[] = [
  {
    slug: "landscape-design-planning",
    title: "Landscape Design & Planning",
    description:
      "Site visits, 3D landscape design proposals, execution planning, and detailed quotations—with a one-year service warranty/guarantee.",
    image: "/gardenplus-work/design-planning.jpg",
    imageAlt:
      "GardenPlus residential landscape with a broad lawn and planted borders",
    gallery: [
      {
        src: "/gardenplus-work/fountain-garden.jpg",
        alt: "GardenPlus fountain garden with flowering borders",
      },
      {
        src: "/gardenplus-work/landscape-courtyard.jpg",
        alt: "GardenPlus courtyard landscape with a pavilion and water feature",
      },
    ],
    videoIds: ["landscape-design-3d"],
    href: "/services/garden-design-lahore",
  },
  {
    slug: "landscape-development",
    title: "Landscape Development",
    description:
      "Levels, contouring, filling materials, drainage mediums, and related development work.",
    image: "/gardenplus-work/development.jpg",
    imageAlt: "Developed GardenPlus lawn with mature trees and garden lighting",
    gallery: [
      {
        src: "/gardenplus-work/soft-landscaping.jpg",
        alt: "Completed GardenPlus lawn with curved planting beds",
      },
      {
        src: "/gardenplus-work/design-planning.jpg",
        alt: "Completed residential landscape with lawn and layered planting",
      },
    ],
    href: "/services/landscape-development-lahore",
  },
  {
    slug: "landscape-civil-works",
    title: "Landscape Civil Works",
    description:
      "Construction of pathways, steps, retaining walls, boundary walls, arches, pergolas, water bodies, shelters, sit-outs, gates, and related structures.",
    image: "/gardenplus-work/civil-works.jpg",
    imageAlt: "GardenPlus paved courtyard with grass-joint grid detailing",
    gallery: [
      {
        src: "/gardenplus-work/garden-seating.jpg",
        alt: "Built-in garden seating and timber structures within a lawn",
      },
      {
        src: "/gardenplus-work/stepping-stones.jpg",
        alt: "Irregular stepping-stone path installed through a planted garden",
      },
    ],
    videoIds: ["garden-water-wall", "landscape-pathway"],
    href: "/services/landscape-civil-works-lahore",
  },
  {
    slug: "landscape-lighting",
    title: "Landscape Lighting",
    description:
      "Selection and installation planning for suitable lighting fixtures, underwater lights, spotlights, sheet lighting, uplighting, and other outdoor lighting systems.",
    image: "/gardenplus-work/lighting.jpg",
    imageAlt: "GardenPlus planted courtyard with integrated landscape features",
    gallery: [
      {
        src: "/gardenplus-work/garden-pergola.jpg",
        alt: "Garden pavilion surrounded by lawn and planting",
      },
      {
        src: "/gardenplus-work/fountain-garden.jpg",
        alt: "Formal GardenPlus garden with feature planting and fountain",
      },
    ],
    href: "/services/landscape-lighting-lahore",
  },
  {
    slug: "hard-semi-hard-landscaping",
    title: "Hard & Semi-Hard Landscaping",
    description:
      "Landscape layouts, paving patterns, material specifications, and related hardscape work.",
    image: "/gardenplus-work/hardscape.jpg",
    imageAlt: "GardenPlus hardscape with geometric paving and water features",
    gallery: [
      {
        src: "/gardenplus-work/civil-works.jpg",
        alt: "Large grass-joint paved courtyard completed by GardenPlus",
      },
      {
        src: "/gardenplus-work/stepping-stones.jpg",
        alt: "Stepping-stone route through a compact planted garden",
      },
    ],
    videoIds: ["landscape-pathway"],
    href: "/services/hardscaping-lahore",
  },
  {
    slug: "soft-landscaping",
    title: "Soft Landscaping",
    description:
      "Placement of lawns, shrubs, trees, ground-cover plants, and specimen plants, including soil conditioning, organic and inorganic manuring, transplantation, and follow-up maintenance.",
    image: "/gardenplus-work/soft-landscaping.jpg",
    imageAlt: "GardenPlus lawn edged with shrubs, palms and flowering plants",
    gallery: [
      {
        src: "/gardenplus-work/flower-beds.jpg",
        alt: "Dense flowering beds planted along a GardenPlus garden path",
      },
      {
        src: "/gardenplus-work/maintenance.jpg",
        alt: "Flower borders and lawn within a maintained GardenPlus landscape",
      },
    ],
    videoIds: ["garden-walkthrough"],
    href: "/services/plant-supply-lahore",
  },
  {
    slug: "water-bodies-water-play",
    title: "Water Bodies & Water Play",
    description:
      "Planning and construction specifications for fountains, cascades, waterfalls, and other water features, including circulation, filtration, aeration, pumps, motors, and plumbing.",
    image: "/gardenplus-work/water-bodies.jpg",
    imageAlt:
      "GardenPlus pond bordered by flowering ground cover and a garden bridge",
    gallery: [
      {
        src: "/gardenplus-work/garden-pond.jpg",
        alt: "Garden pond with water plants and stepping stones",
      },
      {
        src: "/gardenplus-work/water-fountain.jpg",
        alt: "Circular fountain constructed within a formal courtyard",
      },
    ],
    videoIds: ["garden-pond", "garden-water-wall"],
    href: "/services/water-features-fountains-lahore",
  },
  {
    slug: "irrigation-systems",
    title: "Irrigation Systems",
    description:
      "Design and installation planning for automated sprinkler and drip-irrigation systems, including pipelines, valves, controls, pumps, motors, and electrical accessories.",
    image: "/gardenplus-work/irrigation.jpg",
    imageAlt:
      "Healthy GardenPlus lawn and established planting supported by irrigation",
    gallery: [
      {
        src: "/gardenplus-work/soft-landscaping.jpg",
        alt: "Even green lawn with established planted borders",
      },
      {
        src: "/gardenplus-work/development.jpg",
        alt: "Large maintained lawn with trees and perimeter planting",
      },
    ],
    href: "/services/irrigation-systems-pakistan",
  },
  {
    slug: "garden-structures-special-effects",
    title: "Garden Structures & Special Effects",
    description:
      "Design and development of shelters, gazebos, trellises, picket fencing, railings, pergolas, and other garden structures.",
    image: "/gardenplus-work/garden-structures.jpg",
    imageAlt: "Timber GardenPlus gazebo set within a landscaped garden",
    gallery: [
      {
        src: "/gardenplus-work/garden-pergola.jpg",
        alt: "Contemporary garden pavilion surrounded by clipped planting",
      },
      {
        src: "/gardenplus-work/garden-seating.jpg",
        alt: "Timber garden seating structures arranged on a lawn",
      },
    ],
    videoIds: ["garden-pond", "garden-water-wall"],
    href: "/services/pergolas-gazebos-lahore",
  },
  {
    slug: "bill-of-quantities",
    title: "Bill of Quantities (BOQ)",
    description:
      "Preparation of detailed BOQs for landscaping projects to provide accurate project and cost estimates.",
    image: "/gardenplus-work/boq.jpg",
    imageAlt:
      "Wide GardenPlus landscape showing coordinated lawn, paths and planting",
    gallery: [
      {
        src: "/gardenplus-work/design-planning.jpg",
        alt: "Completed residential garden planned around lawn and planted edges",
      },
      {
        src: "/gardenplus-work/landscape-courtyard.jpg",
        alt: "Completed courtyard showing hardscape, water and planting elements",
      },
    ],
    videoIds: ["landscape-design-3d"],
    href: "/services/landscape-boq-lahore",
  },
  {
    slug: "landscape-maintenance",
    title: "Landscape Maintenance",
    description:
      "Day-to-day maintenance of landscapes, water bodies, irrigation equipment, plants, pest control, fertilization, and general garden upkeep.",
    image: "/gardenplus-work/maintenance.jpg",
    imageAlt: "Maintained GardenPlus flower beds beside a healthy lawn",
    gallery: [
      {
        src: "/gardenplus-work/flower-beds.jpg",
        alt: "Maintained flowering border beside a paved garden route",
      },
      {
        src: "/gardenplus-work/development.jpg",
        alt: "Mature lawn, trees and garden beds under ongoing care",
      },
    ],
    videoIds: ["garden-walkthrough"],
    href: "/services/lawn-maintenance-lahore",
  },
];
