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
  {
    slug: "lawn-grass-installation-lahore",
    title: "Lawn Grass Installation Lahore - Turf Laying & New Lawns",
    h1: "Lawn Grass Installation in Lahore",
    eyebrow: "New lawns and turf",
    description:
      "New lawn installation and turf laying in Lahore, including levelling, soil preparation, grass selection and the first weeks of establishment care.",
    metaDescription:
      "Lawn grass installation in Lahore by GardenPlus: site levelling, soil preparation, turf laying, grass selection for local heat, irrigation setup and establishment care.",
    primaryKeyword: "lawn grass installation Lahore",
    keywords: [
      "lawn grass installation Lahore",
      "turf laying Lahore",
      "grass laying services Lahore",
      "new lawn installation Pakistan",
      "lawn grass price Lahore",
      "sod installation Lahore",
    ],
    image: photos.gardenLawn,
    intro: [
      "Most lawns that fail in Lahore fail underneath, not on top. Compacted subsoil, poor levelling and no drainage plan will defeat even good grass within two seasons, which is why installation matters more than the turf itself.",
      "GardenPlus prepares the ground properly first: clearing, cultivating, correcting levels, improving the soil profile and setting falls so water moves away from the house rather than sitting on the lawn during monsoon.",
      "Grass choice is then matched to the site. Shade, foot traffic, water availability and how green you need the lawn to stay through winter all point to different grass types, and getting that decision right saves years of patch repairs.",
    ],
    deliverables: [
      "Site clearing, cultivation and removal of construction debris",
      "Levelling, grading and drainage falls set away from buildings",
      "Soil improvement with organic matter and base fertiliser",
      "Turf supply and laying, or seeding where it suits the site better",
      "Grass selection matched to sun, shade, traffic and water use",
      "Irrigation setup and a written establishment schedule for the first six weeks",
    ],
    process: [
      "Measure the area and check soil, levels and drainage",
      "Agree grass type, budget and installation window",
      "Prepare ground: clear, cultivate, level and improve soil",
      "Lay turf or seed, then roll and water in",
      "Hand over with a watering, mowing and feeding schedule",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Model Town", "Cantt", "Bedian Road"],
    faqs: [
      {
        question: "How long before a new lawn can be walked on?",
        answer:
          "Turf usually knits into the soil within two to three weeks in warm weather, and light use is reasonable after that. Heavy use, furniture and play are better delayed until around six weeks so the roots are properly anchored.",
      },
      {
        question: "What is the best time of year to install a lawn in Lahore?",
        answer:
          "Spring and early autumn are the easiest windows because warmth encourages rooting without the peak summer water demand. Lawns can be installed at other times, but summer installations need a stricter watering routine during establishment.",
      },
      {
        question: "Which grass is best for a Lahore lawn?",
        answer:
          "It depends on the site. Warm-season grasses handle Lahore summers and traffic well, while shaded courtyards and areas under trees need a different selection. GardenPlus recommends grass type after seeing sunlight, use and water access on site.",
      },
      {
        question: "Do you remove the old lawn before laying a new one?",
        answer:
          "Yes. Laying new turf over a failing lawn traps thatch and old weeds. GardenPlus strips the old surface, corrects the levels underneath and rebuilds the soil profile before anything new goes down.",
      },
    ],
  },
  {
    slug: "rooftop-garden-lahore",
    title: "Rooftop Garden Lahore - Terrace Gardens & Roof Landscaping",
    h1: "Rooftop and Terrace Gardens in Lahore",
    eyebrow: "Roof and terrace",
    description:
      "Rooftop garden design and installation in Lahore, planned around load, waterproofing, drainage, wind and the heat a roof slab actually reaches in summer.",
    metaDescription:
      "Rooftop garden design in Lahore by GardenPlus: waterproofing-safe build-ups, lightweight growing media, drainage, wind-tolerant planting and irrigation for terraces and roofs.",
    primaryKeyword: "rooftop garden Lahore",
    keywords: [
      "rooftop garden Lahore",
      "terrace garden Lahore",
      "roof garden design Pakistan",
      "rooftop landscaping Lahore",
      "balcony garden Lahore",
    ],
    image: photos.succulents,
    intro: [
      "A roof is the harshest growing site on any property. Slab temperatures climb far above ground level, wind dries containers within hours and every litre of water and soil adds weight the structure has to carry.",
      "GardenPlus designs rooftop gardens around those constraints first: protecting the waterproofing layer, keeping the build-up light, giving water a clear route to existing outlets and choosing plants that tolerate reflected heat and exposure.",
      "Done properly, a terrace garden also earns its keep by shading the slab underneath, which noticeably reduces how much heat the top floor absorbs through the afternoon.",
    ],
    deliverables: [
      "Assessment of load, waterproofing condition and existing drainage outlets",
      "Protective layers, root barriers and lightweight growing media",
      "Raised beds, planters and container layouts sized to the structure",
      "Wind and heat tolerant planting, including screening and shade options",
      "Drip irrigation with timers, sized for rooftop evaporation rates",
      "Seating, pergola and lighting coordination for usable terrace space",
    ],
    process: [
      "Inspect the roof: access, drainage, waterproofing and structural notes",
      "Agree layout, weight limits and planting intent",
      "Install protection layers, drainage and lightweight media",
      "Set planters, plants and irrigation",
      "Hand over with a watering and seasonal care plan",
    ],
    areas: ["DHA Lahore", "Gulberg", "Model Town", "Johar Town", "Cantt", "Bahria Town Lahore"],
    faqs: [
      {
        question: "Will a rooftop garden damage the waterproofing?",
        answer:
          "Not when it is built correctly. GardenPlus works above the waterproofing with protection and root-barrier layers, keeps existing outlets clear and avoids fixings that penetrate the membrane. Where waterproofing is already failing, it should be repaired before planting starts.",
      },
      {
        question: "How much weight does a rooftop garden add?",
        answer:
          "Saturated soil is the heaviest element, which is why lightweight media and container planting are used instead of deep soil beds. Layouts are planned to keep load near structural walls and beams, and heavy features are avoided unless the structure has been assessed.",
      },
      {
        question: "Which plants survive a Lahore rooftop in summer?",
        answer:
          "Species that cope with heat, wind and reflected light: hardy succulents, bougainvillea, ornamental grasses, palms in sheltered spots and shrubs that tolerate container life. Shade structures widen the palette considerably.",
      },
      {
        question: "Can a rooftop garden be irrigated automatically?",
        answer:
          "Yes, and it should be. Containers on a roof dry out far faster than ground beds, so drip lines on a timer are the difference between a terrace that thrives and one that needs daily hand watering.",
      },
    ],
  },
  {
    slug: "kitchen-gardening-lahore",
    title: "Kitchen Gardening Lahore - Vegetable Gardens & Raised Beds",
    h1: "Kitchen Gardening in Lahore",
    eyebrow: "Grow your own",
    description:
      "Kitchen garden design and setup in Lahore: raised beds, soil, irrigation and a seasonal planting plan for vegetables, herbs and fruit at home.",
    metaDescription:
      "Kitchen gardening services in Lahore by GardenPlus: raised bed construction, organic soil mixes, drip irrigation, seasonal vegetable planting plans and ongoing maintenance.",
    primaryKeyword: "kitchen gardening Lahore",
    keywords: [
      "kitchen gardening Lahore",
      "vegetable garden Lahore",
      "raised beds Lahore",
      "organic kitchen garden Pakistan",
      "home vegetable garden Pakistan",
      "herb garden Lahore",
    ],
    image: photos.raisedVegBeds,
    intro: [
      "A kitchen garden succeeds or fails on three practical things: at least six hours of direct sun, soil with enough organic matter to hold moisture, and water that arrives without anyone having to remember.",
      "GardenPlus builds kitchen gardens around Pakistan's two main growing seasons, so beds stay productive through the rabi and kharif cycles rather than producing one enthusiastic crop and then sitting empty.",
      "Raised beds do most of the heavy lifting. They give you control over soil quality, keep drainage predictable during monsoon and make the whole garden easier to reach, weed and harvest.",
    ],
    deliverables: [
      "Sun mapping and siting so beds get enough direct light",
      "Raised bed construction in brick, timber or steel",
      "Compost-rich soil mixes and ongoing soil improvement",
      "Drip irrigation on a timer, sized per bed",
      "Seasonal planting plan across both main growing seasons",
      "Composting setup and optional monthly maintenance visits",
    ],
    process: [
      "Assess sunlight, water access and available space",
      "Design bed layout, paths and irrigation runs",
      "Build beds and fill with prepared soil",
      "Plant the first season and set the irrigation schedule",
      "Hand over a planting calendar, or continue with maintenance visits",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Model Town", "Bedian Road", "Raiwind Road"],
    faqs: [
      {
        question: "How much space does a kitchen garden need?",
        answer:
          "Less than most people expect. Two or three raised beds will supply a household with herbs, salad crops and seasonal vegetables. Even a sunny terrace can carry a productive container garden.",
      },
      {
        question: "What can be grown in Lahore through the year?",
        answer:
          "The cool season suits spinach, coriander, peas, carrots, radish, cauliflower and lettuce. The warm season suits tomatoes, okra, chillies, cucumber, gourds and aubergine. A planting calendar keeps the beds turning over between the two.",
      },
      {
        question: "Can the garden be kept organic?",
        answer:
          "Yes. Compost, mulch, crop rotation and companion planting handle most of the work, and pest problems can usually be managed without synthetic sprays when the soil and spacing are right.",
      },
      {
        question: "Do you maintain kitchen gardens after installation?",
        answer:
          "Yes. Monthly or fortnightly visits cover replanting, feeding, pruning, pest checks and irrigation adjustments, which is what keeps a kitchen garden productive past the first season.",
      },
    ],
  },
  {
    slug: "hardscaping-lahore",
    title: "Hardscaping Lahore - Paving, Pergolas, Gazebos & Patios",
    h1: "Hardscaping in Lahore",
    eyebrow: "Structure and surfaces",
    description:
      "Paving, pathways, patios, pergolas, gazebos, seating walls and outdoor lighting that give a Lahore garden usable structure through every season.",
    metaDescription:
      "Hardscaping services in Lahore by GardenPlus: paving and pathways, patios, pergolas, gazebos, seating walls, boundary features, drainage and outdoor lighting.",
    primaryKeyword: "hardscaping Lahore",
    keywords: [
      "hardscaping Lahore",
      "pergola construction Lahore",
      "gazebo Lahore",
      "patio design Lahore",
      "garden paving Lahore",
      "outdoor seating area Lahore",
    ],
    image: photos.woodlandPath,
    intro: [
      "Planting gives a garden its character, but hardscape decides whether the space is actually used. Paths, terraces, shade and seating are what let people spend time outside in a climate that swings from 45°C afternoons to monsoon downpours.",
      "GardenPlus treats hardscape as part of the landscape rather than a separate trade, so paving falls, drainage runs, irrigation lines and lighting conduits are coordinated before anything is laid.",
      "Material choice is made for heat and glare as much as looks. Surfaces that stay bearable underfoot, drain quickly and do not bounce heat back into the house make a measurable difference to how a garden feels.",
    ],
    deliverables: [
      "Paving, pathways, driveways and terrace surfaces",
      "Pergolas, gazebos, shade structures and outdoor rooms",
      "Seating walls, steps, raised beds and boundary features",
      "Surface drainage, falls and soakaway coordination",
      "Outdoor lighting layouts and conduit routing",
      "Material selection for heat, glare, drainage and maintenance",
    ],
    process: [
      "Survey levels, drainage and existing structures",
      "Design layout, materials and shade positions",
      "Coordinate services: drainage, irrigation and lighting conduits",
      "Build, lay and finish surfaces and structures",
      "Integrate planting and hand over with care notes",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Cantt", "Model Town", "Bedian Road"],
    faqs: [
      {
        question: "Should hardscaping come before planting?",
        answer:
          "Almost always. Levels, drainage, conduits and heavy access are far cheaper to get right before beds are planted, and it avoids damaging new planting with construction traffic.",
      },
      {
        question: "Which paving works best in Lahore's heat?",
        answer:
          "Lighter, textured surfaces stay cooler underfoot and reduce glare, while permeable joints help monsoon water drain instead of pooling. The right choice also depends on the traffic the surface will take.",
      },
      {
        question: "Do you build pergolas and gazebos?",
        answer:
          "Yes, in timber, steel or masonry depending on the setting, span and how much shade the space needs. Planting can be designed to grow over the structure for additional cooling.",
      },
      {
        question: "Can hardscaping be added to an existing garden?",
        answer:
          "Yes. Existing planting is protected or lifted and replanted where needed, and access routes are planned so machinery does not compact lawns and beds.",
      },
    ],
  },
  {
    slug: "water-features-fountains-lahore",
    title: "Water Features & Fountains Lahore - Design and Installation",
    h1: "Water Features and Fountains",
    eyebrow: "Water in the landscape",
    description:
      "Fountains, water walls, reflecting pools and garden ponds designed for Lahore conditions, with the pumps, filtration and drainage that keep them running.",
    metaDescription:
      "Water feature and fountain design in Lahore by GardenPlus: fountains, water walls, reflecting pools, ponds, pumps, filtration, lighting and low-maintenance running.",
    primaryKeyword: "water features Lahore",
    keywords: [
      "water features Lahore",
      "fountain installation Lahore",
      "garden pond Lahore",
      "water wall Pakistan",
      "landscape water feature Pakistan",
    ],
    image: photos.lushGardenTrees,
    intro: [
      "A water feature changes how a garden sounds as much as how it looks. Moving water masks traffic noise, cools the air immediately around it and gives an entrance or courtyard a natural focal point.",
      "The features that fail are the ones installed without thinking about running cost, algae, evaporation and access for cleaning. Lahore summers evaporate open water quickly and sunlight drives algae hard.",
      "GardenPlus specifies pump sizing, filtration, top-up supply, drainage and lighting at design stage, so the feature stays clean and quiet instead of becoming a maintenance problem.",
    ],
    deliverables: [
      "Fountains, water walls, spouts and reflecting pools",
      "Garden ponds with planting, filtration and aeration",
      "Pump specification, plumbing, sumps and top-up supply",
      "Filtration and algae control suited to full sun",
      "Underwater and surround lighting",
      "Cleaning access and a practical maintenance routine",
    ],
    process: [
      "Agree feature type, position, sound level and viewing angles",
      "Design structure, waterproofing, plumbing and electrics",
      "Build the shell and install pumps, filtration and lighting",
      "Commission, balance flow and check for leaks",
      "Hand over with cleaning and seasonal running instructions",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Cantt", "Punjab", "Pakistan"],
    faqs: [
      {
        question: "How much water does a fountain lose in summer?",
        answer:
          "Evaporation is significant in peak summer, which is why features are designed with an automatic or easily accessible top-up rather than relying on someone noticing the level has dropped.",
      },
      {
        question: "How is algae controlled without heavy chemicals?",
        answer:
          "Shade, adequate circulation, correct filtration and, in ponds, planting and aeration do most of the work. Chemical dosing is a last resort rather than a routine.",
      },
      {
        question: "Are water features expensive to run?",
        answer:
          "Running cost depends almost entirely on pump sizing. A correctly sized pump on a timer for daytime hours costs very little; oversized pumps are the usual reason a feature gets switched off.",
      },
      {
        question: "Can a water feature be added to a finished garden?",
        answer:
          "Yes, provided there is a route for power and a drainage point. Self-contained recirculating features are the simplest retrofit for courtyards and terraces.",
      },
    ],
  },
  {
    slug: "tree-pruning-lahore",
    title: "Tree Pruning & Cutting Lahore - Trimming, Removal, Tree Care",
    h1: "Tree Pruning, Trimming and Removal",
    eyebrow: "Tree care",
    description:
      "Tree pruning, crown thinning, storm-damage clearance and safe removal in Lahore, along with feeding and pest care that keeps mature trees healthy.",
    metaDescription:
      "Tree pruning and cutting services in Lahore by GardenPlus: crown thinning and lifting, deadwood removal, storm damage clearance, safe tree removal, stump work and tree health care.",
    primaryKeyword: "tree pruning Lahore",
    keywords: [
      "tree pruning Lahore",
      "tree cutting Lahore",
      "tree trimming services Lahore",
      "tree removal Lahore",
      "tree care Pakistan",
      "hedge trimming Lahore",
    ],
    image: photos.gardenerAtWork,
    intro: [
      "Mature trees are the most valuable thing in most established gardens and the hardest to replace. Bad pruning, done at the wrong time or by the wrong cuts, can undo decades of growth in an afternoon.",
      "GardenPlus prunes to a purpose: reducing wind load before storm season, lifting crowns to let light onto lawns and beds, removing deadwood over paths and parking, and shaping young trees so they grow with sound structure.",
      "Where a tree genuinely has to come down, removal is planned around what is underneath it. Sectional felling, protected access routes and stump treatment matter more on a built site than raw cutting speed.",
    ],
    deliverables: [
      "Crown thinning, reduction and lifting",
      "Deadwood removal and clearance over paths, roofs and parking",
      "Pre-monsoon wind-load reduction on large canopies",
      "Storm damage clearance and making unsafe limbs safe",
      "Sectional felling, removal and stump grinding or treatment",
      "Hedge trimming, formative pruning and tree feeding programmes",
    ],
    process: [
      "Inspect the tree: species, condition, structure and hazards",
      "Agree the objective and the cuts before work starts",
      "Protect surroundings and set safe access and drop zones",
      "Carry out pruning or sectional removal",
      "Clear arisings and advise on aftercare or replanting",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Model Town", "Cantt", "Bedian Road"],
    faqs: [
      {
        question: "When is the best time to prune trees in Lahore?",
        answer:
          "Structural pruning is best in the dormant window before spring growth. Safety work, deadwood removal and pre-monsoon wind-load reduction can be done whenever they are needed.",
      },
      {
        question: "How much of a tree can be safely removed at once?",
        answer:
          "As a rule, taking more than about a quarter of the live canopy in one season stresses the tree. Heavy reductions are better staged across seasons than done in a single cut.",
      },
      {
        question: "Do you handle trees close to buildings and power lines?",
        answer:
          "Yes. Those jobs are done by sectional felling with controlled lowering rather than straight felling, and work near live lines is coordinated so it is carried out safely.",
      },
      {
        question: "What happens to the stump?",
        answer:
          "Stumps can be ground out where the area will be replanted or paved, or treated to prevent regrowth where grinding access is not possible.",
      },
    ],
  },
  {
    slug: "indoor-plants-office-lahore",
    title: "Indoor Plants Lahore - Office Plants, Supply & Plant Care",
    h1: "Indoor Plants and Office Plant Care",
    eyebrow: "Interior planting",
    description:
      "Indoor plant supply, placement and scheduled care for homes, offices, hotels and showrooms in Lahore, including planters, replacement and rental options.",
    metaDescription:
      "Indoor plants in Lahore from GardenPlus: office plant supply and maintenance, planters, plant rental, reception and lobby planting, and scheduled care visits.",
    primaryKeyword: "indoor plants Lahore",
    keywords: [
      "indoor plants Lahore",
      "office plants Lahore",
      "plant maintenance services Lahore",
      "plant rental Lahore",
      "corporate plant care Pakistan",
      "indoor plant supply Pakistan",
    ],
    image: photos.pottedPlants,
    intro: [
      "Indoor plants die from light and watering, almost never from anything else. Offices in particular kill plants by placing them where there is not enough daylight and then over-watering them to compensate.",
      "GardenPlus specifies interior planting by measuring the light in each position first, then choosing species that will actually hold their form there for years rather than looking good for one quarter.",
      "For offices, hotels and showrooms, scheduled care is what protects the investment: watering to a measured routine, feeding, cleaning foliage, rotating stock and swapping out anything that has passed its best.",
    ],
    deliverables: [
      "Light assessment and species selection for each position",
      "Supply of indoor plants, from desk-scale to large specimens",
      "Planters, self-watering systems and decorative pot selection",
      "Reception, lobby, atrium and meeting-room planting schemes",
      "Scheduled maintenance visits with feeding, cleaning and pruning",
      "Plant rental and replacement programmes for corporate clients",
    ],
    process: [
      "Walk the interior and measure light at each intended position",
      "Propose species, sizes and planters against the brief and budget",
      "Deliver, plant and place, with drip trays and protection",
      "Set the watering and care schedule",
      "Return on a fixed visit cycle to maintain and replace as needed",
    ],
    areas: ["Lahore", "DHA Lahore", "Gulberg", "Model Town", "Johar Town", "Cantt"],
    faqs: [
      {
        question: "Which indoor plants survive low-light offices?",
        answer:
          "Species tolerant of shade and irregular watering perform best in interiors, and larger specimens are placed within reach of daylight. Where light is genuinely inadequate, rotation between locations keeps plants healthy.",
      },
      {
        question: "How often do office plants need maintenance visits?",
        answer:
          "Most interiors are on a fortnightly or monthly cycle. Frequency depends on planter type, heating and cooling, light levels and how many large specimens are involved.",
      },
      {
        question: "Can plants be rented rather than purchased?",
        answer:
          "Yes. Rental suits offices, events and showrooms that want a guaranteed standard of display without owning the stock, since anything past its best is simply replaced.",
      },
      {
        question: "Do air conditioning and heating harm indoor plants?",
        answer:
          "Direct airflow does. Plants placed under vents dry out unevenly and drop leaves, so positioning is planned around air movement as well as light.",
      },
    ],
  },
  {
    slug: "swimming-pool-landscaping-lahore",
    title: "Swimming Pool Landscaping Lahore - Poolside Gardens & Decks",
    h1: "Swimming Pool Landscaping",
    eyebrow: "Poolside design",
    description:
      "Poolside landscaping for homes, farmhouses, hotels and resorts in Lahore: surrounds, screening, shade, lighting and planting chosen to keep the water clean.",
    metaDescription:
      "Swimming pool landscaping in Lahore by GardenPlus: pool surrounds and decking, privacy screening, shade structures, low-litter planting, lighting and poolside irrigation.",
    primaryKeyword: "swimming pool landscaping Lahore",
    keywords: [
      "swimming pool landscaping Lahore",
      "poolside garden design Pakistan",
      "pool deck landscaping Lahore",
      "resort pool landscaping Pakistan",
      "farmhouse pool garden Lahore",
    ],
    image: photos.resortPoolDusk,
    intro: [
      "Poolside planting has one rule that overrides aesthetics: nothing that drops heavily into the water. Fine leaves, seed pods, fruit and invasive roots turn a beautiful surround into a daily skimming job and a filtration bill.",
      "GardenPlus plans pool landscapes around the practical realities first, then the atmosphere: safe non-slip surfaces, screening for privacy, shade where people actually sit, and drainage that keeps splash-out away from beds.",
      "Lighting is what makes a pool garden work after dark, and it is far cheaper to run conduits during the build than to retrofit them through finished paving.",
    ],
    deliverables: [
      "Pool surrounds, decking and non-slip surface selection",
      "Privacy screening and boundary planting",
      "Shade structures, pergolas and seating areas",
      "Low-litter, root-safe planting that will not foul filtration",
      "Landscape and underwater-adjacent lighting layouts",
      "Drainage, splash-out management and poolside irrigation",
    ],
    process: [
      "Review pool position, sun path, privacy and circulation",
      "Design surrounds, shade, screening and planting zones",
      "Coordinate drainage, lighting conduits and irrigation",
      "Build surfaces and structures, then plant",
      "Hand over with a maintenance plan for the surround",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Bedian Road", "Raiwind Road", "Punjab", "Pakistan"],
    faqs: [
      {
        question: "Which plants should be avoided near a swimming pool?",
        answer:
          "Anything that sheds heavily, fruits, or has aggressive roots. Fine-leaved trees and fruiting species are the usual culprits behind clogged skimmers and stained surrounds.",
      },
      {
        question: "Can grass run right up to the pool edge?",
        answer:
          "It is better to keep a paved margin between lawn and water. Grass clippings and soil splash carry straight into the pool, and constant wetting damages the turf at the edge.",
      },
      {
        question: "How is privacy created around a pool?",
        answer:
          "Layered screening works better than a single hedge line: a structural evergreen backbone, mid-height planting and a shade structure over the seating area, so privacy is achieved from likely sightlines rather than all round.",
      },
      {
        question: "Do you work on hotel and resort pools?",
        answer:
          "Yes. Commercial pool landscapes are planned for higher footfall, guest sightlines, safety and maintenance access, and are usually backed by a scheduled care contract.",
      },
    ],
  },
  {
    slug: "farmhouse-landscaping-lahore",
    title: "Farmhouse Landscaping Lahore - Estate Gardens & Grounds",
    h1: "Farmhouse and Estate Landscaping",
    eyebrow: "Large private grounds",
    description:
      "Landscaping for farmhouses and private estates around Lahore: entrance approaches, large lawns, orchards, buggy tracks, irrigation and long-term grounds care.",
    metaDescription:
      "Farmhouse landscaping in Lahore by GardenPlus: entrance drives, large lawn areas, tree avenues, orchards, buggy tracks, water features, borewell irrigation and grounds maintenance.",
    primaryKeyword: "farmhouse landscaping Lahore",
    keywords: [
      "farmhouse landscaping Lahore",
      "estate garden design Pakistan",
      "farmhouse garden Bedian Road",
      "large lawn landscaping Lahore",
      "orchard planting Pakistan",
    ],
    image: photos.estateHouseGarden,
    intro: [
      "Farmhouse grounds are a different discipline from garden design. On several acres, the decisions that matter are water source and pressure, tree avenues that will take fifteen years to mature, vehicle routes and how many hours a week the grounds will realistically be maintained.",
      "GardenPlus plans estates in zones: a formal, high-input area near the house, a broad managed landscape beyond it, and productive or naturalised areas at the edges that need far less attention.",
      "Irrigation infrastructure is the single biggest determinant of success. Borewell capacity, pump sizing, mainline routing and zoning are designed before planting, because retrofitting irrigation across acres is expensive and disruptive.",
    ],
    deliverables: [
      "Master planning across multi-acre sites and phased delivery",
      "Entrance approaches, drives, gatehouse planting and avenues",
      "Large lawn establishment and mature tree planting",
      "Orchards, shade belts and windbreak planting",
      "Buggy tracks, walking routes, seating areas and water features",
      "Borewell-fed irrigation mainlines, zoning and grounds maintenance contracts",
    ],
    process: [
      "Survey the site: levels, water source, soil, access and existing trees",
      "Zone the estate by intensity of use and maintenance",
      "Design irrigation infrastructure and planting structure",
      "Deliver in phases, starting with services and tree planting",
      "Move onto a scheduled grounds maintenance programme",
    ],
    areas: ["Bedian Road", "Raiwind Road", "Barki Road", "DHA Lahore", "Punjab", "Pakistan"],
    faqs: [
      {
        question: "How long does a farmhouse landscape take to deliver?",
        answer:
          "Large sites are delivered in phases across seasons. Services, levels and tree planting come first because trees need the most time to mature; lawns, beds and detail areas follow.",
      },
      {
        question: "Can existing mature trees be kept?",
        answer:
          "Usually yes, and they should be. Mature trees are the hardest element to replace, so layouts are designed around them with root protection during construction.",
      },
      {
        question: "How is water managed across several acres?",
        answer:
          "By zoning. High-water lawn and feature areas are kept close to the house and irrigated efficiently, while outer areas use drought-tolerant and native planting that needs far less input once established.",
      },
      {
        question: "Do you maintain estates after handover?",
        answer:
          "Yes. Most estates move onto a scheduled maintenance contract covering mowing, irrigation checks, pruning, seasonal planting and tree care.",
      },
    ],
  },
  {
    slug: "garden-maintenance-contracts-lahore",
    title: "Garden Maintenance Lahore - Annual Contracts & Care Plans",
    h1: "Garden Maintenance Contracts in Lahore",
    eyebrow: "Ongoing care",
    description:
      "Scheduled garden and grounds maintenance in Lahore for homes, offices, hotels and developments, on weekly, fortnightly or monthly visit cycles.",
    metaDescription:
      "Garden maintenance contracts in Lahore from GardenPlus: scheduled visits covering mowing, pruning, seasonal planting, irrigation checks, pest control, feeding and reporting.",
    primaryKeyword: "garden maintenance Lahore",
    keywords: [
      "garden maintenance Lahore",
      "annual garden maintenance contract Lahore",
      "gardening services Lahore",
      "grounds maintenance Pakistan",
      "monthly gardening service Lahore",
      "landscape maintenance contract Pakistan",
    ],
    image: photos.perennialBorder,
    intro: [
      "Most landscapes are lost in the two years after handover, not during the build. Irrigation drifts out of calibration, feeding stops, pruning is skipped and the planting slowly reverts.",
      "A maintenance contract replaces reactive gardening with a schedule. GardenPlus works to a seasonal calendar so that feeding, pruning, aeration, pest checks and seasonal planting happen at the right point in the year rather than when a problem is already visible.",
      "For commercial clients the contract also covers accountability: a named schedule, visit records and a single point of contact when something needs attention.",
    ],
    deliverables: [
      "Weekly, fortnightly or monthly visit cycles to suit the site",
      "Mowing, edging, aeration, scarifying and lawn feeding",
      "Pruning, hedge trimming, deadheading and bed maintenance",
      "Seasonal flower rotation and replanting",
      "Irrigation inspection, calibration and minor repairs",
      "Pest, disease and soil monitoring with a visit report",
    ],
    process: [
      "Site walk to record planting, irrigation and problem areas",
      "Agree scope, visit frequency and seasonal calendar",
      "Begin scheduled visits with a consistent team",
      "Report on condition and flag anything needing separate work",
      "Review the plan each season as the planting matures",
    ],
    areas: ["DHA Lahore", "Bahria Town Lahore", "Gulberg", "Model Town", "Johar Town", "Cantt"],
    faqs: [
      {
        question: "How often should a Lahore garden be maintained?",
        answer:
          "Through the growing season most gardens need weekly or fortnightly attention, mainly for mowing and irrigation. In winter, monthly visits are usually enough for pruning, feeding and seasonal planting.",
      },
      {
        question: "What does a maintenance contract include?",
        answer:
          "Typically mowing and lawn care, pruning and bed work, seasonal planting, irrigation checks and pest monitoring. Tree surgery, redesign and major replanting are quoted separately.",
      },
      {
        question: "Can you take over a garden someone else built?",
        answer:
          "Yes. The first visit is a condition survey so that irrigation faults, soil problems and neglected pruning are identified before the regular schedule starts.",
      },
      {
        question: "Do you maintain commercial and corporate grounds?",
        answer:
          "Yes, including offices, hotels, campuses, retail frontages and residential developments, with schedules planned around opening hours and guest or staff movement.",
      },
    ],
  },
];

/**
 * Short labels for the link chips. The H1s are written for search intent and
 * are too long to scan as a list, so anything that doesn't shorten cleanly by
 * dropping " in Lahore" gets an explicit label here.
 */
const shortLabels: Record<string, string> = {
  "irrigation-systems-pakistan": "Irrigation Systems",
  "artificial-grass-pakistan": "Artificial Grass",
  "plant-supply-lahore": "Plant Supply & Nursery",
  "commercial-landscaping-pakistan": "Commercial Landscaping",
  "vertical-gardens-pakistan": "Vertical Gardens",
  "rooftop-garden-lahore": "Rooftop & Terrace Gardens",
  "water-features-fountains-lahore": "Water Features",
  "tree-pruning-lahore": "Tree Pruning & Removal",
  "indoor-plants-office-lahore": "Indoor & Office Plants",
  "swimming-pool-landscaping-lahore": "Pool Landscaping",
  "farmhouse-landscaping-lahore": "Farmhouse & Estates",
  "garden-maintenance-contracts-lahore": "Garden Maintenance",
};

export const seoServicePageLinks = seoServicePages.map((page) => ({
  name: shortLabels[page.slug] ?? page.h1.replace(" in Lahore", ""),
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
