import type { SeoServicePage } from "@/lib/seo-service-pages";

type ServiceDetail = Pick<
  SeoServicePage,
  "intro" | "deliverables" | "process" | "faqs"
>;

export const serviceDetails: Record<string, ServiceDetail> = {
  "landscape-design-planning": {
    intro: [
      "A site visit establishes the available space, existing conditions and what you want from the garden. The design proposal brings the layout, planting and built elements together before execution planning.",
      "GardenPlus provides 3D landscape design proposals and detailed quotations, with a one-year service warranty/guarantee. Request the written coverage with your project quotation.",
    ],
    deliverables: [
      "Site visits",
      "3D landscape design proposals",
      "Execution planning",
      "Detailed quotations",
      "One-year service warranty/guarantee",
    ],
    process: [
      "Discuss the brief during a site visit.",
      "Review the 3D landscape proposal.",
      "Agree on execution planning and the detailed quotation.",
    ],
    faqs: [
      {
        question: "What does the planning service include?",
        answer:
          "Site visits, 3D landscape design proposals, execution planning and detailed quotations.",
      },
      {
        question: "Is a warranty included?",
        answer:
          "Yes. Landscape Design & Planning includes a one-year service warranty/guarantee. The project quotation should set out its written coverage.",
      },
    ],
  },
  "landscape-development": {
    intro: [
      "Landscape development prepares the ground for the layout. Levels, contouring, filling materials and drainage mediums need to be considered together before final surfaces and planting.",
      "Share any site drawings and photographs of standing water with your enquiry. The proposed development work can then be discussed against the actual ground conditions.",
    ],
    deliverables: [
      "Levels",
      "Contouring",
      "Filling materials",
      "Drainage mediums",
      "Related development work",
    ],
    process: [
      "Review the site and intended layout.",
      "Discuss levels, contouring and drainage mediums.",
      "Agree on the development scope and quantities.",
    ],
    faqs: [
      {
        question: "Can drainage be included in landscape development?",
        answer:
          "Yes. The service includes drainage mediums alongside levels, contouring and filling materials.",
      },
      {
        question: "What should I share before a site visit?",
        answer:
          "A site plan, current photographs and any information about existing levels or drainage problems are useful.",
      },
    ],
  },
  "landscape-civil-works": {
    intro: [
      "Civil works form the built parts of a landscape, including paths, steps, walls and garden structures. Their positions should be coordinated with planting, water bodies and access.",
      "GardenPlus's scope includes the structures listed below. A project drawing and detailed quotation establish which elements are required on your site.",
    ],
    deliverables: [
      "Pathways and steps",
      "Retaining walls and boundary walls",
      "Arches and pergolas",
      "Water bodies",
      "Shelters and sit-outs",
      "Gates and related structures",
    ],
    process: [
      "Review the proposed structures and site conditions.",
      "Coordinate the civil works with the landscape layout.",
      "Confirm specifications and the construction scope.",
    ],
    faqs: [
      {
        question: "Which structures are included?",
        answer:
          "Pathways, steps, retaining walls, boundary walls, arches, pergolas, water bodies, shelters, sit-outs, gates and related structures.",
      },
      {
        question: "Can the civil works be planned alongside planting?",
        answer:
          "Yes. Discuss the complete layout so structures, access and planting positions can be coordinated.",
      },
    ],
  },
  "landscape-lighting": {
    intro: [
      "A lighting plan starts with the paths, planting, water features and sitting areas that need illumination. Fixture selection and placement can then be coordinated with the rest of the garden.",
      "GardenPlus provides selection and installation planning for outdoor lighting systems. Include existing electrical points and any completed paving in the site information you share.",
    ],
    deliverables: [
      "Suitable lighting fixture selection",
      "Underwater lights",
      "Spotlights and sheet lighting",
      "Uplighting",
      "Outdoor lighting installation planning",
    ],
    process: [
      "Identify the areas to illuminate.",
      "Review suitable fixtures and positions.",
      "Coordinate installation planning with the landscape works.",
    ],
    faqs: [
      {
        question: "Can lighting for water features be included?",
        answer:
          "Yes. Underwater lights are included in the fixture selection and installation planning scope.",
      },
      {
        question: "When should garden lighting be planned?",
        answer:
          "Discuss lighting while planning the landscape, so its positions and installation routes can be coordinated with paving and planting.",
      },
    ],
  },
  "hard-semi-hard-landscaping": {
    intro: [
      "Hard and semi-hard landscaping brings the garden layout, paved areas and material choices together. The plan should show how paths and surfaces connect to planting and structures.",
      "GardenPlus prepares landscape layouts, paving patterns and material specifications, together with related hardscape work.",
    ],
    deliverables: [
      "Landscape layouts",
      "Paving patterns",
      "Material specifications",
      "Related hardscape work",
    ],
    process: [
      "Review the layout and circulation routes.",
      "Compare paving patterns and materials.",
      "Agree on the hardscape specification.",
    ],
    faqs: [
      {
        question: "Can paving patterns be included in the layout?",
        answer:
          "Yes. Paving patterns and material specifications are part of Hard & Semi-Hard Landscaping.",
      },
    ],
  },
  "soft-landscaping": {
    intro: [
      "Soft landscaping covers the living parts of a garden and the soil preparation that supports them. Lawns, shrubs, trees and ground-cover plants are placed in the agreed layout.",
      "The scope includes soil conditioning, organic and inorganic manuring, transplantation and follow-up maintenance.",
    ],
    deliverables: [
      "Lawns, shrubs and trees",
      "Ground-cover and specimen plants",
      "Soil conditioning",
      "Organic and inorganic manuring",
      "Transplantation",
      "Follow-up maintenance",
    ],
    process: [
      "Review planting positions and site conditions.",
      "Agree on the planting and soil preparation scope.",
      "Coordinate placement and follow-up maintenance.",
    ],
    faqs: [
      {
        question: "Does the service include soil preparation?",
        answer:
          "Yes. Soil conditioning and organic and inorganic manuring are included in the soft landscaping scope.",
      },
      {
        question: "Is follow-up maintenance available?",
        answer:
          "Yes. Follow-up maintenance is included in the service scope and should be detailed in the project quotation.",
      },
    ],
  },
  "water-bodies-water-play": {
    intro: [
      "Water features need both a visible design and a working system behind it. The proposed fountain, cascade or waterfall should be considered alongside circulation, filtration and access for upkeep.",
      "GardenPlus provides planning and construction specifications for water features and their supporting equipment.",
    ],
    deliverables: [
      "Fountains, cascades and waterfalls",
      "Circulation and filtration",
      "Aeration",
      "Pumps and motors",
      "Plumbing specifications",
    ],
    process: [
      "Discuss the proposed water feature and location.",
      "Review the feature and supporting system requirements.",
      "Confirm planning and construction specifications.",
    ],
    faqs: [
      {
        question: "Does the scope cover pumps and plumbing?",
        answer:
          "Yes. It includes circulation, filtration, aeration, pumps, motors and plumbing.",
      },
    ],
  },
  "irrigation-systems": {
    intro: [
      "Irrigation planning coordinates the planting layout with water delivery and controls. Automated sprinkler and drip-irrigation systems can be planned for the different areas of a garden.",
      "Share information about the available water supply and any existing equipment when discussing the project.",
    ],
    deliverables: [
      "Automated sprinkler systems",
      "Drip-irrigation systems",
      "Pipelines, valves and controls",
      "Pumps and motors",
      "Electrical accessories",
      "Design and installation planning",
    ],
    process: [
      "Review the planting layout and water supply.",
      "Plan irrigation routes, controls and equipment.",
      "Agree on the design and installation planning scope.",
    ],
    faqs: [
      {
        question: "Do you plan both drip and sprinkler systems?",
        answer:
          "Yes. GardenPlus provides design and installation planning for automated sprinkler and drip-irrigation systems.",
      },
      {
        question: "Are pumps and controls included?",
        answer:
          "The scope includes pipelines, valves, controls, pumps, motors and electrical accessories.",
      },
    ],
  },
  "garden-structures-special-effects": {
    intro: [
      "Garden structures create places to sit, add screening and support the layout. Their size and position should work with paths, planting and the available space.",
      "GardenPlus designs and develops shelters, gazebos, trellises, picket fencing, railings, pergolas and other garden structures.",
    ],
    deliverables: [
      "Shelters and gazebos",
      "Trellises",
      "Picket fencing",
      "Railings",
      "Pergolas and other garden structures",
    ],
    process: [
      "Discuss the structure and its intended use.",
      "Review the position and design in the garden layout.",
      "Agree on the development scope.",
    ],
    faqs: [
      {
        question: "Can you design a pergola or gazebo?",
        answer:
          "Yes. Pergolas and gazebos are included in Garden Structures & Special Effects.",
      },
      {
        question: "Is garden fencing part of the service?",
        answer:
          "The scope includes picket fencing and railings, alongside trellises and other garden structures.",
      },
    ],
  },
  "bill-of-quantities": {
    intro: [
      "A bill of quantities sets out the items and measured work in a landscaping project. It helps the project team understand the scope and compare costs against the same requirements.",
      "GardenPlus prepares detailed BOQs for landscaping projects to provide accurate project and cost estimates.",
    ],
    deliverables: [
      "Detailed landscaping BOQs",
      "Project quantities",
      "Project estimates",
      "Cost estimates",
    ],
    process: [
      "Review the landscape drawings and proposed scope.",
      "Prepare the detailed quantities.",
      "Review the project and cost estimates.",
    ],
    faqs: [
      {
        question: "What is a landscape BOQ?",
        answer:
          "A bill of quantities is a detailed schedule of project items and quantities used to prepare project and cost estimates.",
      },
      {
        question: "What information is useful when requesting a BOQ?",
        answer:
          "Share the latest drawings, specifications and proposed scope so the quantities can be prepared against a clear brief.",
      },
    ],
  },
  "landscape-maintenance": {
    intro: [
      "Landscape maintenance covers the regular work needed across the garden, including plants, water bodies and irrigation equipment.",
      "Discuss the existing landscape and the upkeep required so the maintenance proposal describes the work for your property.",
    ],
    deliverables: [
      "Day-to-day landscape maintenance",
      "Water body maintenance",
      "Irrigation equipment upkeep",
      "Plant care",
      "Pest control and fertilization",
      "General garden upkeep",
    ],
    process: [
      "Review the current landscape and equipment.",
      "Discuss the maintenance requirements.",
      "Agree on the scope and attendance arrangements.",
    ],
    faqs: [
      {
        question: "Does maintenance cover more than plants?",
        answer:
          "Yes. The service includes water bodies, irrigation equipment and general garden upkeep as well as plant care, pest control and fertilization.",
      },
      {
        question: "Is lawn care part of landscape maintenance?",
        answer:
          "Yes. Lawn care is part of day-to-day landscape maintenance, alongside plant care, pest control and fertilization, irrigation equipment upkeep and water bodies. The scope and attendance arrangements are agreed for each property.",
      },
      {
        question: "What does a Lahore lawn need through the year?",
        answer:
          "Warm-season lawns grow fastest from spring to autumn, when they need regular cutting and feeding. In peak summer, deep watering early in the morning works better than frequent light watering; in the monsoon, drainage matters more than water. In winter most warm-season grasses slow down and lose colour, so watering and cutting are reduced.",
      },
    ],
  },
};
