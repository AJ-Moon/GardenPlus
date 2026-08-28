// ============================================================================
// GARDENPLUS — LOCATION LANDING PAGES
// ----------------------------------------------------------------------------
// One page per Lahore area at /landscaping/<slug>. These target the searches
// people actually type when they are ready to hire ("landscaping in DHA
// Lahore", "gardener in Model Town") rather than generic city-wide terms.
//
// Each entry must stay factually honest: describe the AREA and the gardening
// conditions there, never invent project counts or client names.
// ============================================================================

import { photos, siteConfig } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export type SeoLocation = {
  slug: string;
  /** Area name as people write it in search, e.g. "DHA Lahore". */
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  primaryKeyword: string;
  keywords: string[];
  image: string;
  /** Two or three paragraphs about landscaping conditions in this area. */
  intro: string[];
  /** What people in this area most often ask for. */
  popular: string[];
  /** Genuine local conditions that shape the work. */
  considerations: { heading: string; text: string }[];
  /** Neighbouring phases, blocks or sectors, for long-tail coverage. */
  nearby: string[];
  faqs: { question: string; answer: string }[];
};

export const seoLocations: SeoLocation[] = [
  {
    slug: "dha-lahore",
    name: "DHA Lahore",
    title: "Landscaping in DHA Lahore - Garden Design & Lawn Care",
    h1: "Landscaping in DHA Lahore",
    metaDescription:
      "Landscaping services in DHA Lahore: garden design, lawn installation and maintenance, irrigation systems, seasonal planting and plant supply across every DHA phase.",
    primaryKeyword: "landscaping DHA Lahore",
    keywords: [
      "landscaping DHA Lahore",
      "garden design DHA Lahore",
      "gardener in DHA Lahore",
      "lawn maintenance DHA",
      "landscaping DHA Phase 5",
      "landscaping DHA Phase 6",
    ],
    image: photos.houseLawnTree,
    intro: [
      "DHA is the most landscaping-intensive part of Lahore, and also the most demanding. Plots are large enough for a real garden, houses are close enough together that privacy planting matters, and standards on a street tend to set the standard for the whole street.",
      "The older phases have mature trees and settled soil, which is an advantage worth designing around. The newer phases are usually starting from builder's rubble, where the first job is stripping out construction debris and rebuilding a soil profile that grass can actually root into.",
      "GardenPlus works across DHA on new garden builds, lawn replacement, irrigation installation and ongoing maintenance contracts, with our base on Bedian Road putting us minutes from most of the phases.",
    ],
    popular: [
      "Full front and back garden design and build",
      "Lawn replacement after construction",
      "Automatic drip and sprinkler irrigation",
      "Boundary and privacy screen planting",
      "Seasonal flower rotation for entrances",
      "Fortnightly and monthly maintenance contracts",
    ],
    considerations: [
      {
        heading: "Construction debris under new lawns",
        text: "Plots handed over after building work almost always have brick, mortar and sand compacted into the top layer. Turf laid straight onto it will thin out within a season, so the ground has to be stripped and rebuilt first.",
      },
      {
        heading: "Water pressure and timing",
        text: "Supply pressure varies through the day across the phases. Irrigation is zoned and timed around the hours pressure is reliable, rather than assuming a constant supply.",
      },
      {
        heading: "Privacy between neighbouring plots",
        text: "With houses built close to boundaries, screening usually needs to work at first-floor level as well as ground level, which points to layered planting rather than a single hedge.",
      },
    ],
    nearby: [
      "DHA Phase 1",
      "DHA Phase 2",
      "DHA Phase 3",
      "DHA Phase 4",
      "DHA Phase 5",
      "DHA Phase 6",
      "DHA Phase 7",
      "DHA Phase 8",
      "DHA EME Sector",
    ],
    faqs: [
      {
        question: "Do you cover every phase of DHA Lahore?",
        answer:
          "Yes, from Phases 1 to 8 and the EME sector. Our yard on Bedian Road is close to most of DHA, which makes regular maintenance visits practical rather than occasional.",
      },
      {
        question: "Can you replace a lawn that never took properly?",
        answer:
          "Yes, and it is one of the most common requests in DHA. The failure is almost always underneath: compacted builder's fill, no drainage falls or a thin soil layer. Fixing the ground is what makes the second lawn last.",
      },
      {
        question: "Do you offer regular maintenance in DHA?",
        answer:
          "Yes. Weekly, fortnightly and monthly contracts are available, covering mowing, pruning, seasonal planting, irrigation checks and feeding.",
      },
    ],
  },
  {
    slug: "bahria-town-lahore",
    name: "Bahria Town Lahore",
    title: "Landscaping in Bahria Town Lahore - Gardens & Lawn Care",
    h1: "Landscaping in Bahria Town Lahore",
    metaDescription:
      "Landscaping in Bahria Town Lahore: garden design, lawn installation, irrigation systems, villa and farmhouse landscaping, plant supply and maintenance contracts.",
    primaryKeyword: "landscaping Bahria Town Lahore",
    keywords: [
      "landscaping Bahria Town Lahore",
      "garden design Bahria Town",
      "gardener Bahria Town Lahore",
      "lawn maintenance Bahria Town",
      "villa landscaping Bahria Town",
    ],
    image: photos.estateHouseGarden,
    intro: [
      "Bahria Town plots come with a strong existing streetscape, which changes the design brief: the garden has to sit comfortably against a fairly formal public realm rather than compete with it.",
      "Plot sizes range from compact houses to full villas and farmhouse-scale holdings, so the same area covers everything from a single front lawn to multi-acre grounds with drives, orchards and buggy tracks.",
      "Because much of the development is relatively recent, soil quality is the recurring issue. Beds and lawns generally need genuine soil improvement before planting rather than a surface dressing.",
    ],
    popular: [
      "Villa garden design and full build",
      "Front lawn and entrance planting",
      "Automatic irrigation with timers",
      "Artificial grass for low-maintenance areas",
      "Poolside and terrace landscaping",
      "Annual maintenance contracts",
    ],
    considerations: [
      {
        heading: "Young soil profiles",
        text: "Newer developments sit on made-up ground with little organic matter. Compost incorporation and a proper base feed make more difference to plant establishment here than plant choice does.",
      },
      {
        heading: "Open, exposed plots",
        text: "With fewer mature trees than the older parts of Lahore, gardens get full sun and wind exposure. Shade planting and structures are worth building in early rather than adding later.",
      },
      {
        heading: "Consistency with the streetscape",
        text: "Boundary planting and entrance design work best when they read as an extension of the street's planting rather than a break in it.",
      },
    ],
    nearby: [
      "Sector A Bahria Town",
      "Sector B Bahria Town",
      "Sector C Bahria Town",
      "Sector D Bahria Town",
      "Sector E Bahria Town",
      "Bahria Orchard",
      "Bahria Nasheman",
    ],
    faqs: [
      {
        question: "Do you work on farmhouse-sized plots in Bahria Town?",
        answer:
          "Yes. Larger holdings are handled as estate projects, starting with irrigation infrastructure and tree planting before lawns and detail areas.",
      },
      {
        question: "How long does a full villa garden take?",
        answer:
          "A typical villa garden runs from a few weeks to a couple of months depending on hardscape, irrigation and how much mature planting is involved. Phasing is possible where budget or construction timing requires it.",
      },
      {
        question: "Can you maintain the garden after it is built?",
        answer:
          "Yes, on a scheduled contract. Maintenance in the first two seasons is what determines whether new planting establishes properly.",
      },
    ],
  },
  {
    slug: "gulberg-lahore",
    name: "Gulberg",
    title: "Landscaping in Gulberg Lahore - Garden Design & Maintenance",
    h1: "Landscaping in Gulberg, Lahore",
    metaDescription:
      "Landscaping in Gulberg Lahore: garden design and renovation, lawn care, courtyard and terrace planting, irrigation, office and restaurant landscaping, maintenance contracts.",
    primaryKeyword: "landscaping Gulberg Lahore",
    keywords: [
      "landscaping Gulberg Lahore",
      "garden design Gulberg",
      "gardener in Gulberg",
      "lawn maintenance Gulberg Lahore",
      "commercial landscaping Gulberg",
    ],
    image: photos.perennialBorder,
    intro: [
      "Gulberg is old Lahore garden territory. Many properties have mature trees, established soil and decades of planting history, which makes renovation rather than creation the usual brief.",
      "It is also the densest mix of uses in the city: family homes next to offices, restaurants, clinics and showrooms. A large share of the landscaping here is commercial frontage and courtyard work, where the garden is doing a job for the business.",
      "The main design constraint is shade. Mature canopies that took forty years to grow are worth keeping, but they change what will grow underneath, and lawns in particular often need replacing with shade-tolerant planting.",
    ],
    popular: [
      "Garden renovation around existing mature trees",
      "Shade planting where lawn no longer thrives",
      "Courtyard and terrace design for homes and restaurants",
      "Commercial frontage and entrance planting",
      "Tree pruning, crown lifting and deadwood removal",
      "Scheduled maintenance for offices and clinics",
    ],
    considerations: [
      {
        heading: "Heavy shade from mature canopies",
        text: "Under an established canopy, grass struggles no matter how it is fed. Crown lifting to let light through, or a switch to shade planting and paved seating, gives a far better result than repeatedly re-turfing.",
      },
      {
        heading: "Tree roots near structures",
        text: "Mature trees close to boundary walls, drives and drainage need managed pruning and root-aware design rather than removal, since the canopy is usually the property's best asset.",
      },
      {
        heading: "Restricted access",
        text: "Narrow lanes and limited frontage mean materials and arisings often have to be moved by hand. It is worth planning for in the schedule rather than discovering on the day.",
      },
    ],
    nearby: [
      "Gulberg I",
      "Gulberg II",
      "Gulberg III",
      "Gulberg V",
      "MM Alam Road",
      "Main Boulevard Gulberg",
      "Mini Market",
    ],
    faqs: [
      {
        question: "Can grass grow under Gulberg's mature trees?",
        answer:
          "Sometimes, with crown lifting to increase light and a shade-tolerant grass. Where light is genuinely low, shade planting, ground cover or a paved seating area gives a better result than fighting the conditions.",
      },
      {
        question: "Do you handle commercial properties in Gulberg?",
        answer:
          "Yes. Restaurant terraces, office frontages, clinics and showrooms are a large part of the work here, usually with a scheduled maintenance contract attached.",
      },
      {
        question: "Can you renovate an old garden without removing the trees?",
        answer:
          "Yes, and that is normally the right approach. Mature trees are retained, pruned properly, and the layout underneath is redesigned around the light they let through.",
      },
    ],
  },
  {
    slug: "model-town-lahore",
    name: "Model Town",
    title: "Landscaping in Model Town Lahore - Garden Design & Lawn Care",
    h1: "Landscaping in Model Town, Lahore",
    metaDescription:
      "Landscaping in Model Town Lahore: garden restoration, lawn care, mature tree pruning, seasonal planting, irrigation upgrades and regular maintenance visits.",
    primaryKeyword: "landscaping Model Town Lahore",
    keywords: [
      "landscaping Model Town Lahore",
      "garden design Model Town",
      "gardener Model Town Lahore",
      "lawn maintenance Model Town",
      "garden restoration Lahore",
    ],
    image: photos.roseGardenPath,
    intro: [
      "Model Town was laid out as a garden suburb, and it still is one. Wide plots, generous setbacks and long-established trees mean the raw material for a good garden is usually already present.",
      "The work here is mostly restoration: bringing back lawns that have thinned, replacing planting that has aged out, upgrading irrigation from hand watering to an automatic system, and getting overgrown trees back under control.",
      "Because the gardens are old, soil is often tired rather than poor. Aeration, organic matter and a proper feeding programme frequently recover a lawn that looked like it needed replacing.",
    ],
    popular: [
      "Restoration of established lawns",
      "Rose beds, borders and traditional planting",
      "Mature tree pruning and crown thinning",
      "Upgrading hand watering to automatic irrigation",
      "Seasonal flower planting",
      "Monthly maintenance visits",
    ],
    considerations: [
      {
        heading: "Tired rather than poor soil",
        text: "Decades of the same planting and mowing leave soil compacted and low on organic matter. Aeration, top dressing and feeding recover most Model Town lawns without the cost of a full replacement.",
      },
      {
        heading: "Ageing irrigation",
        text: "Many gardens here are still hand watered or run on old surface pipework. Zoned drip and sprinkler systems on a timer cut water use noticeably and stop the uneven patches that come from inconsistent watering.",
      },
      {
        heading: "Overgrown mature planting",
        text: "Hedges and shrubs that have not been reduced for years usually need staged renovation pruning across two or three seasons rather than one hard cut.",
      },
    ],
    nearby: [
      "Model Town A Block",
      "Model Town B Block",
      "Model Town C Block",
      "Model Town Extension",
      "Faisal Town",
      "Garden Town",
      "Kalma Chowk",
    ],
    faqs: [
      {
        question: "Can an old lawn be saved instead of replaced?",
        answer:
          "Often, yes. Where the grass is thin but the coverage is still there, aeration, scarifying, top dressing and a feeding programme through one growing season usually recover it at a fraction of the cost of relaying.",
      },
      {
        question: "Do you prune large old trees?",
        answer:
          "Yes, including crown thinning, lifting and deadwood removal. Heavy reductions on mature trees are staged across seasons so the tree is not stressed.",
      },
      {
        question: "How disruptive is an irrigation retrofit?",
        answer:
          "Less than people expect. Lines are trenched narrowly and reinstated, and on an established lawn the trench lines close over within a few weeks in the growing season.",
      },
    ],
  },
  {
    slug: "johar-town-lahore",
    name: "Johar Town",
    title: "Landscaping in Johar Town Lahore - Gardens, Lawns & Plants",
    h1: "Landscaping in Johar Town, Lahore",
    metaDescription:
      "Landscaping in Johar Town Lahore: compact garden design, lawn installation and care, rooftop and terrace gardens, irrigation, plant supply and maintenance visits.",
    primaryKeyword: "landscaping Johar Town Lahore",
    keywords: [
      "landscaping Johar Town Lahore",
      "garden design Johar Town",
      "gardener Johar Town",
      "rooftop garden Johar Town",
      "lawn maintenance Johar Town",
    ],
    image: photos.herbRaisedBeds,
    intro: [
      "Johar Town gardens are usually compact, which makes them a design problem rather than a planting problem. Every square metre has to earn its place, and the front strip often has to work as parking, approach and garden at the same time.",
      "Because ground-level space is limited, a lot of the work here moves upward: rooftop and terrace gardens, vertical planting on boundary walls, and container schemes that give height without taking floor area.",
      "The area also has a heavy commercial presence, so office frontages, clinic entrances and restaurant terraces make up a good share of the landscaping demand.",
    ],
    popular: [
      "Small and courtyard garden design",
      "Rooftop and terrace gardens",
      "Vertical gardens and green walls",
      "Artificial grass for compact or shaded areas",
      "Container and planter schemes",
      "Office and clinic frontage planting",
    ],
    considerations: [
      {
        heading: "Limited ground space",
        text: "In a small garden, structure matters more than variety. A restrained plant palette, one strong focal point and good paving read far better than many species crowded together.",
      },
      {
        heading: "Shade from neighbouring buildings",
        text: "Closely built plots leave parts of the garden in shade most of the day. Mapping the actual sun hours before choosing grass or planting avoids the usual failure of a lawn that never establishes.",
      },
      {
        heading: "Parking and garden competing for the same strip",
        text: "The front area typically has to take a vehicle. Reinforced grass, permeable paving and planting set back from wheel paths let it do both jobs without turning to mud.",
      },
    ],
    nearby: [
      "Johar Town Phase 1",
      "Johar Town Phase 2",
      "Wapda Town",
      "Township",
      "Iqbal Town",
      "Emporium area",
    ],
    faqs: [
      {
        question: "Is a small garden worth designing professionally?",
        answer:
          "Small gardens usually benefit most. With less space, mistakes in layout, levels and plant scale are immediately visible, and there is no room to hide them.",
      },
      {
        question: "Is artificial grass a good option for compact plots?",
        answer:
          "It can be, particularly in heavily shaded areas where natural grass will never establish, or where the space takes constant foot traffic. It still needs proper base preparation and drainage.",
      },
      {
        question: "Can a rooftop garden be added to a standard Johar Town house?",
        answer:
          "Usually yes, using lightweight media and container planting rather than deep soil beds, and keeping the existing waterproofing and drainage outlets protected.",
      },
    ],
  },
  {
    slug: "cantt-lahore",
    name: "Lahore Cantt",
    title: "Landscaping in Lahore Cantt - Garden Design & Grounds Care",
    h1: "Landscaping in Lahore Cantt",
    metaDescription:
      "Landscaping in Lahore Cantt: garden design and renovation, lawn establishment and maintenance, tree care, irrigation systems and scheduled grounds maintenance.",
    primaryKeyword: "landscaping Lahore Cantt",
    keywords: [
      "landscaping Lahore Cantt",
      "garden design Cantt Lahore",
      "gardener Lahore Cantt",
      "lawn maintenance Cantt",
      "landscaping Askari Lahore",
    ],
    image: photos.campusLawn,
    intro: [
      "Cantt has some of the best-established tree cover in Lahore and a long tradition of well-kept lawns, which sets a high baseline for any new work in the area.",
      "Gardens here tend to be formal in structure: clean lawn shapes, defined edges, hedging and seasonal colour at entrances. The maintenance standard matters as much as the design, because the look depends on consistent upkeep rather than one-off installation.",
      "Alongside private houses, the area has a large amount of institutional and residential-scheme grounds, where scheduled maintenance across shared green space is the main requirement.",
    ],
    popular: [
      "Formal lawn establishment and edging",
      "Hedging, topiary and boundary planting",
      "Seasonal flower beds at entrances",
      "Mature tree pruning and canopy management",
      "Sprinkler irrigation for open lawn areas",
      "Scheduled grounds maintenance contracts",
    ],
    considerations: [
      {
        heading: "Maintaining a formal standard",
        text: "Formal layouts only look right when edges, heights and lines are kept consistent. That points to a regular visit cycle rather than occasional tidying.",
      },
      {
        heading: "Established tree cover",
        text: "Good canopy is an asset worth protecting with proper pruning, but it also dictates where lawn will succeed and where shade planting is the better answer.",
      },
      {
        heading: "Larger open lawn areas",
        text: "Wide lawns are more efficiently watered by zoned sprinklers than by drip, and even coverage is what prevents the patchiness that shows up badly on a formal lawn.",
      },
    ],
    nearby: [
      "Askari 1",
      "Askari 5",
      "Askari 9",
      "Askari 10",
      "Askari 11",
      "Sarwar Road",
      "Fortress Stadium area",
      "Walton",
    ],
    faqs: [
      {
        question: "Do you maintain shared grounds for residential schemes?",
        answer:
          "Yes. Scheduled contracts covering shared lawns, verges, boundary planting and seasonal colour are a standard part of the work in and around Cantt.",
      },
      {
        question: "How often should a formal lawn be cut?",
        answer:
          "Weekly through the growing season. Formal lawns show inconsistency very quickly, so the cutting interval matters more here than in an informal garden.",
      },
      {
        question: "Can you match the planting already used on the street?",
        answer:
          "Yes. Where an area has an established planting character, new work is usually best designed to continue it rather than break from it.",
      },
    ],
  },
  {
    slug: "bedian-road-lahore",
    name: "Bedian Road",
    title: "Landscaping on Bedian Road Lahore - Farmhouse & Garden Design",
    h1: "Landscaping on Bedian Road, Lahore",
    metaDescription:
      "Landscaping on Bedian Road Lahore: farmhouse and estate grounds, large lawns, orchards, borewell irrigation, tree planting and long-term maintenance. GardenPlus is based here.",
    primaryKeyword: "landscaping Bedian Road",
    keywords: [
      "landscaping Bedian Road",
      "farmhouse landscaping Bedian Road",
      "garden design Bedian Road Lahore",
      "estate landscaping Lahore",
      "nursery Bedian Road",
    ],
    image: photos.lushGardenTrees,
    intro: [
      "Bedian Road is where GardenPlus is based, adjacent to the Lahore School of Economics, so this is the area we know in the most detail and can reach fastest.",
      "The landscaping here is a different scale from the city phases. Farmhouses, private estates and event venues sit on plots measured in kanals and acres, where the design starts with water source, access routes and tree structure rather than bed layouts.",
      "Water is usually from a borewell rather than mains supply, which changes irrigation design entirely: pump capacity, mainline sizing and zoning decide what is realistically possible to keep green.",
    ],
    popular: [
      "Farmhouse and estate grounds design",
      "Large lawn establishment",
      "Orchard, avenue and shade-belt tree planting",
      "Borewell-fed irrigation mainlines and zoning",
      "Buggy tracks, walkways and water features",
      "Long-term grounds maintenance contracts",
    ],
    considerations: [
      {
        heading: "Borewell water and pump sizing",
        text: "Available flow rate sets the ceiling on how much irrigated landscape a site can carry. Getting pump capacity and zoning right at design stage is what prevents half the grounds drying out every summer.",
      },
      {
        heading: "Phased delivery over seasons",
        text: "Estate-scale work is delivered in stages. Services, levels and tree planting go in first because trees need the longest to mature; lawns and detail areas follow.",
      },
      {
        heading: "Realistic maintenance load",
        text: "Acres of formal landscape need proportionate upkeep. Zoning the site into high-input areas near the house and lower-input naturalised areas beyond keeps the running cost sensible.",
      },
    ],
    nearby: [
      "Bedian Road",
      "Barki Road",
      "Burki",
      "DHA Phase 6",
      "DHA Phase 7",
      "DHA Phase 8",
      "Lahore School of Economics area",
    ],
    faqs: [
      {
        question: "Where exactly is GardenPlus based?",
        answer:
          `${siteConfig.name} is at ${siteConfig.address.line1}, ${siteConfig.address.line2}, which puts us close to the farmhouse belt along Bedian and Barki Road as well as the outer DHA phases.`,
      },
      {
        question: "Can you supply plants in bulk for a large site?",
        answer:
          "Yes. Large planting programmes are supplied and planted in phases, which suits both establishment rates and staged budgets.",
      },
      {
        question: "How is a multi-acre site kept green through summer?",
        answer:
          "By zoning water rather than spreading it thinly. High-value lawn and feature areas are irrigated properly, and outer areas use drought-tolerant and native planting that survives on far less once established.",
      },
    ],
  },
  {
    slug: "raiwind-road-lahore",
    name: "Raiwind Road",
    title: "Landscaping on Raiwind Road Lahore - Farmhouse & Society Grounds",
    h1: "Landscaping on Raiwind Road, Lahore",
    metaDescription:
      "Landscaping on Raiwind Road Lahore: farmhouse gardens, housing society grounds, large lawn areas, tree planting, irrigation infrastructure and maintenance contracts.",
    primaryKeyword: "landscaping Raiwind Road",
    keywords: [
      "landscaping Raiwind Road",
      "farmhouse landscaping Raiwind Road",
      "garden design Raiwind Road Lahore",
      "housing society landscaping Lahore",
      "landscaping Bahria Orchard",
    ],
    image: photos.aerialNeighbourhood,
    intro: [
      "The Raiwind Road corridor mixes farmhouses, newer housing societies and event venues, so the landscaping brief swings between private estate grounds and shared community green space.",
      "Sites here are generally open and exposed, with little existing tree cover. Windbreak and shade planting done early pays back for decades, because everything planted afterwards establishes more easily behind it.",
      "For societies and developments, the value is in getting the shared landscape right at the start: street trees, verges, park areas and an irrigation network that one maintenance team can actually run.",
    ],
    popular: [
      "Farmhouse and event venue grounds",
      "Housing society common areas and parks",
      "Street tree and verge planting",
      "Windbreak and shade belt planting",
      "Irrigation infrastructure across large sites",
      "Ongoing grounds maintenance",
    ],
    considerations: [
      {
        heading: "Exposure and wind",
        text: "Open agricultural land offers no shelter. Establishing a windbreak line first protects everything planted behind it and reduces water loss noticeably.",
      },
      {
        heading: "Soil that has been farmed",
        text: "Former agricultural ground can be compacted from machinery and depleted by cropping. Subsoiling and organic matter make a bigger difference here than fertiliser alone.",
      },
      {
        heading: "Landscape one team can maintain",
        text: "Community landscapes fail when they are designed more elaborately than the maintenance budget allows. Simple, robust planting with efficient irrigation lasts far longer.",
      },
    ],
    nearby: [
      "Bahria Orchard",
      "Lake City",
      "Adda Plot",
      "Thokar Niaz Baig",
      "Sundar",
      "Manga Mandi",
    ],
    faqs: [
      {
        question: "Do you take on housing society landscaping?",
        answer:
          "Yes, including common areas, parks, street trees and verges, generally with a phased delivery plan and a maintenance contract to follow.",
      },
      {
        question: "What grows well on exposed sites here?",
        answer:
          "Hardy, wind-tolerant trees and shrubs establish best. Once a shelter belt is up, the range of what can be grown inside it widens considerably.",
      },
      {
        question: "Can planting be done in phases to spread cost?",
        answer:
          "Yes, and on large sites it is usually the sensible route. Irrigation infrastructure and trees go first, with lawns and detail planting following as budget allows.",
      },
    ],
  },
  {
    slug: "wapda-town-lahore",
    name: "Wapda Town",
    title: "Landscaping in Wapda Town Lahore - Garden Design & Lawn Care",
    h1: "Landscaping in Wapda Town, Lahore",
    metaDescription:
      "Landscaping in Wapda Town Lahore: garden design and renovation, lawn installation and maintenance, irrigation, seasonal planting and plant supply for homes and offices.",
    primaryKeyword: "landscaping Wapda Town Lahore",
    keywords: [
      "landscaping Wapda Town Lahore",
      "garden design Wapda Town",
      "gardener Wapda Town Lahore",
      "lawn maintenance Wapda Town",
      "landscaping Township Lahore",
    ],
    image: photos.gardenLawn,
    intro: [
      "Wapda Town gardens are typically mid-sized family plots with a settled street character and planting that is now two to three decades old, which puts most of the work in the renovation category.",
      "The common pattern is a lawn that has thinned under a tree that was small when it went in and is now dominating the plot, with beds that have not been restructured since the house was built.",
      "The fix is usually straightforward: manage the canopy, rebuild the soil, redefine the bed lines and put irrigation on a timer so watering stops depending on someone remembering.",
    ],
    popular: [
      "Garden renovation and replanting",
      "Lawn repair and replacement",
      "Tree pruning and canopy management",
      "Automatic irrigation retrofits",
      "Seasonal flower beds",
      "Monthly maintenance visits",
    ],
    considerations: [
      {
        heading: "Trees that have outgrown the plot",
        text: "A tree planted twenty years ago on a mid-sized plot often now shades the whole garden. Crown lifting and thinning usually solves it without losing the tree.",
      },
      {
        heading: "Compacted, tired lawns",
        text: "Years of mowing without aeration or feeding leave the soil compacted. Aeration and top dressing typically bring the lawn back without replacement.",
      },
      {
        heading: "Inconsistent hand watering",
        text: "Hand watering produces uneven growth and wastes water. A zoned system on a timer is one of the highest-value upgrades in an established garden.",
      },
    ],
    nearby: [
      "Wapda Town Phase 1",
      "Wapda Town Phase 2",
      "Township",
      "Johar Town",
      "Izmir Town",
      "PIA Society",
    ],
    faqs: [
      {
        question: "My lawn only grows in patches. What is wrong?",
        answer:
          "Almost always light, compaction or uneven watering rather than the grass itself. A site check will identify which of the three is dominant before any turf is bought.",
      },
      {
        question: "Can you redesign a garden without starting from scratch?",
        answer:
          "Yes. Renovation keeps the trees and structure that work, and rebuilds the soil, bed lines, lawn and irrigation around them.",
      },
      {
        question: "Do you offer one-off garden clean-ups?",
        answer:
          "Yes, and a clean-up is often the sensible first step before deciding whether a garden needs renovation or just a regular maintenance schedule.",
      },
    ],
  },
  {
    slug: "sabzazar-and-iqbal-town-lahore",
    name: "Iqbal Town and Sabzazar",
    title: "Landscaping in Iqbal Town & Sabzazar Lahore - Gardens & Lawns",
    h1: "Landscaping in Iqbal Town and Sabzazar",
    metaDescription:
      "Landscaping in Iqbal Town and Sabzazar, Lahore: compact garden design, lawn installation and care, rooftop gardens, plant supply, irrigation and maintenance visits.",
    primaryKeyword: "landscaping Iqbal Town Lahore",
    keywords: [
      "landscaping Iqbal Town Lahore",
      "landscaping Sabzazar Lahore",
      "garden design Iqbal Town",
      "gardener Allama Iqbal Town",
      "rooftop garden Iqbal Town",
    ],
    image: photos.pottedPlants,
    intro: [
      "Iqbal Town and Sabzazar are dense, established residential areas where gardens are compact and often shaded by neighbouring buildings for much of the day.",
      "That combination rewards careful design over ambitious planting: a clear layout, plants matched to the real number of sun hours, and a route to add greenery vertically or on the roof where the ground simply runs out.",
      "Plant supply and small maintenance visits are as much in demand here as full builds, since many households want the garden kept in order rather than rebuilt.",
    ],
    popular: [
      "Compact and courtyard garden design",
      "Lawn repair and small-area turfing",
      "Rooftop and terrace planting",
      "Container and vertical planting schemes",
      "Outdoor and indoor plant supply",
      "Monthly maintenance visits",
    ],
    considerations: [
      {
        heading: "Shade from adjacent buildings",
        text: "In closely built streets, much of the plot may see only a few hours of direct sun. Counting those hours before choosing grass or planting prevents the most common failure here.",
      },
      {
        heading: "Very limited ground area",
        text: "Where floor space is scarce, walls and roofs become the growing area. Vertical planting and rooftop containers add greenery without losing usable ground.",
      },
      {
        heading: "Access for materials",
        text: "Narrow streets mean soil, turf and materials are usually moved by hand, which is worth building into the plan rather than discovering on delivery day.",
      },
    ],
    nearby: [
      "Allama Iqbal Town",
      "Sabzazar",
      "Samanabad",
      "Multan Road area",
      "Muslim Town",
      "Shadman",
    ],
    faqs: [
      {
        question: "What can be planted in a garden that gets only morning sun?",
        answer:
          "Plenty, provided the selection is made for shade rather than fought against it. Shade-tolerant shrubs, ground cover and foliage planting perform well where grass and flowering sun-lovers will not.",
      },
      {
        question: "Do you supply plants without a full design job?",
        answer:
          "Yes. Plant supply and delivery on its own is available, with advice on placement and care.",
      },
      {
        question: "Is a rooftop garden practical on a smaller house?",
        answer:
          "Yes, using containers and lightweight media, keeping weight near structural walls and protecting the existing waterproofing and drainage outlets.",
      },
    ],
  },
];

export const getSeoLocation = (slug: string) =>
  seoLocations.find((location) => location.slug === slug);

export const seoLocationLinks = seoLocations.map((location) => ({
  name: location.name,
  href: `/landscaping/${location.slug}`,
}));

export const locationPageJsonLd = (location: SeoLocation) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/landscaping/${location.slug}#service`,
      name: location.h1,
      description: location.metaDescription,
      serviceType: location.primaryKeyword,
      provider: { "@id": `${siteConfig.url}/#local-business` },
      areaServed: [
        { "@type": "Place", name: location.name },
        ...location.nearby.map((name) => ({ "@type": "Place", name })),
      ],
      url: absoluteUrl(`/landscaping/${location.slug}`),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Landscaping services in ${location.name}`,
        itemListElement: location.popular.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/landscaping/${location.slug}#faq`,
      mainEntity: location.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/landscaping/${location.slug}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Landscaping in Lahore",
          item: absoluteUrl("/landscaping-lahore"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.h1,
          item: absoluteUrl(`/landscaping/${location.slug}`),
        },
      ],
    },
  ],
});
