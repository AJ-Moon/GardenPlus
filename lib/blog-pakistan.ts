import type { Block, Post } from "@/lib/blog";

const p = (text: string): Block => ({ type: "p", text });
const h2 = (text: string): Block => ({ type: "h2", text });
const ul = (...items: string[]): Block => ({ type: "ul", items });

const articles: Omit<Post, "readTime">[] = [
  {
    slug: "landscape-boq-pakistan-quotation-checklist",
    title: "Landscape BOQ in Pakistan: How to Compare Quotations",
    excerpt:
      "What to check in a landscaping BOQ, from measured quantities and plant sizes to exclusions, delivery charges and the maintenance scope.",
    category: "Project Planning",
    image: "/services/planning.jpg",
    imageAlt: "Drawings and project documents beside a hard hat",
    date: "2026-09-09",
    featured: true,
    keywords: ["landscape BOQ Pakistan", "landscaping quotation Lahore"],
    relatedServices: ["bill-of-quantities", "landscape-design-planning"],
    content: [
      p(
        "Two landscaping quotations can have the same total and describe very different gardens. One may include soil preparation, mature plants and maintenance; the other may cover only supply and planting. A bill of quantities, or BOQ, makes those differences visible before work starts.",
      ),
      h2("Start with the same drawing"),
      p(
        "Ask every contractor to price the same layout and revision. Mark the lawn, planting beds, paths, water features and structures on that drawing. If one estimate uses an older plan, the totals are not directly comparable. Keep optional work separate so a pergola or fountain does not hide the cost of the basic garden.",
      ),
      p(
        "Use measured dimensions rather than the property's advertised size. A one-kanal house does not have one kanal available for landscaping. Covered areas, parking, setbacks and existing paving all affect the quantity of work. State the measurement units on every BOQ line, especially when drawings and suppliers use different units.",
      ),
      h2("Look beyond the plant name"),
      ul(
        "Planting: specify species, quantity, supplied size and whether transport and planting are included.",
        "Soil: identify the material, intended depth, quantity and preparation work.",
        "Paving: include base preparation, finish, edging and joint treatment.",
        "Irrigation: list pipes, valves, controls, pumps and installation work separately.",
        "Lighting and water features: distinguish fittings from wiring, plumbing and commissioning.",
      ),
      h2("Check the costs between the headings"),
      p(
        "Ask who pays for delivery, unloading, debris removal, temporary storage and access equipment. These can matter on a finished residential street as much as on a factory site. An allowance for an item that has not yet been selected should be clearly labelled, with a process for approving the final amount.",
      ),
      p(
        "Have the contractor state whether rates include applicable taxes and how long the quotation remains valid. Prices for materials and equipment change, so a written validity period is more useful than a copied online price range. Record any substitution before it is purchased, including its effect on appearance, maintenance and cost.",
      ),
      h2("Include handover and aftercare"),
      p(
        "A BOQ should make it clear whether initial watering, plant establishment visits, system demonstrations and ongoing maintenance are included. These are different activities. A finished garden still needs someone responsible for it immediately after the installation team leaves.",
      ),
      p(
        "GardenPlus prepares detailed BOQs for landscaping projects. Its Landscape Design & Planning service includes a one-year service warranty/guarantee. Ask for the written coverage with your quotation, including how to report an issue and which maintenance responsibilities remain with the property owner. Keep the approved drawing, BOQ and any changes together so everyone works from the same agreement.",
      ),
    ],
  },
  {
    slug: "landscape-site-visit-lahore-checklist",
    title: "Planning a Landscape Site Visit in Lahore",
    excerpt:
      "What to prepare before a landscape site visit: measurements, access, drainage problems, photographs and the decisions needed for a useful design proposal.",
    category: "Project Planning",
    image: "/services/design.jpg",
    imageAlt: "Garden layout with planting beds and a central path",
    date: "2026-09-09",
    keywords: ["landscape site visit Lahore", "landscape design planning"],
    relatedServices: ["landscape-design-planning", "landscape-development"],
    content: [
      p(
        "A useful site visit ends with a clearer brief. It should establish what can fit, what needs fixing and what information is still missing. For a Lahore home, farmhouse or business premises, a few simple preparations help the designer spend the visit on the actual garden rather than reconstructing the building plan.",
      ),
      h2("Bring a plan and a short list of priorities"),
      p(
        "Share the latest site drawing if you have one. Mark anything that must stay, such as a mature tree, a parking space, a drain cover or an existing sitting area. A plan is helpful, but dimensions and conditions still need checking on site. Mention unfinished building work because delivery vehicles and scaffolding may affect when landscaping can begin.",
      ),
      p(
        "Describe how you expect to use the space. A family lawn, a shaded sitting area and a factory entrance require different layouts. Put your priorities in order and state a working budget. Bring a few reference photos, then explain what you like in each: the paving, the shade, the planting or simply the amount of open space.",
      ),
      h2("Show the problems that disappear on a dry day"),
      p(
        "Take photographs after rain if water collects near a doorway or remains on the lawn. Note which parts become muddy and where roof water discharges. A dry afternoon visit may not reveal those conditions. Photographs taken at different times also show where walls and buildings cast shade.",
      ),
      ul(
        "Identify the water source and where its supply can be accessed.",
        "Point out electrical supply points and any known buried services.",
        "Confirm delivery access, storage space and working-hour restrictions.",
        "List existing equipment or planting you want to reuse.",
        "Explain who will maintain the garden and how often they can attend.",
      ),
      h2("Agree on the next deliverable"),
      p(
        "Before the visit ends, establish what the proposal will contain. A 3D view helps explain appearance; a measured layout and specifications explain how to build it. Ask whether the proposal covers levels, drainage, paving, planting, irrigation and lighting, or whether some parts need a separate drawing.",
      ),
      p(
        "Record decisions and unresolved questions in a short written brief. Ask when you will receive the proposal, how revisions will be handled and when a detailed quotation can be prepared. Agreeing on this sequence helps avoid selecting plants before the groundwork has been considered.",
      ),
      h2("Arrange a visit with GardenPlus"),
      p(
        "GardenPlus's Landscape Design & Planning service includes site visits, 3D landscape design proposals, execution planning and detailed quotations, with a one-year service warranty/guarantee. Share your location, a few current photographs and the type of work required through the contact page. Final scope and scheduling can then be discussed for your property.",
      ),
    ],
  },
  {
    slug: "garden-drainage-lahore-monsoon",
    title: "Garden Drainage in Lahore: What to Check Before the Monsoon",
    excerpt:
      "Find where rainwater enters, collects and leaves your garden before choosing filling materials, new levels or a drainage system.",
    category: "Landscape Development",
    image: "/services/development.jpg",
    imageAlt: "Bulldozer working on exposed ground",
    date: "2026-09-09",
    keywords: ["garden drainage Lahore", "landscape development Lahore"],
    relatedServices: ["landscape-development", "landscape-civil-works"],
    sources: [
      {
        title: "RHS: Waterlogged lawns",
        url: "https://www.rhs.org.uk/lawns/waterlogging",
      },
    ],
    content: [
      p(
        "If the same corner of your garden fills with water after rain, replacing its grass may leave you with the same problem again. Start by following the water. In a Lahore garden, the source may be the lawn itself, a roof outlet, neighbouring paving or a path that slopes towards the planting.",
      ),
      h2("Record the route of the water"),
      p(
        "Photograph the garden during or soon after rain from a sheltered position. Mark puddles on a simple plan and check them again later. Note whether water is flowing into the area or simply draining slowly through the soil. These observations help distinguish a surface-level problem from compacted or poorly draining ground.",
      ),
      p(
        "The Royal Horticultural Society identifies poor drainage and soil compaction as causes of waterlogging, and notes that runoff from hard surfaces can contribute. Those are useful starting points for diagnosis, but the solution still depends on your site's levels and outlet.",
      ),
      h2("Check accessible outlets first"),
      ul(
        "Clear leaves and loose debris from accessible surface grates.",
        "Check whether soil or paving has covered a drainage opening.",
        "Trace roof downpipes and note where they discharge.",
        "Look for irrigation leaks that keep an area wet between rain events.",
        "Keep people and equipment off saturated planting beds while assessing the problem.",
      ),
      h2("Do not raise the lawn without checking everything around it"),
      p(
        "Adding filling material changes the relationship between the garden, paths, building thresholds and boundary walls. It can move a puddle somewhere less convenient. Have finished levels measured and an outlet identified before approving substantial filling or excavation. Work affecting a building or retaining structure needs the appropriate technical assessment.",
      ),
      p(
        "A gravel strip is not automatically a functioning drain. Ask where collected water will go, how the proposed system will be maintained and whether access points remain reachable. Discharge arrangements must suit the site and relevant permissions; directing water onto another property is not a design solution.",
      ),
      h2("Coordinate drainage with the garden build"),
      p(
        "Review drainage before final paving and planting. Agree on pipe routes and service access while the ground is open. Keep a record of installed routes, then inspect the finished surfaces and accessible outlets at handover. After the first substantial rain, compare actual behaviour with the intended water route.",
      ),
      p(
        "GardenPlus's Landscape Development service covers levels, contouring, filling materials and drainage mediums. For an existing problem, provide photographs of the wet area and any previous drainage work with your enquiry. That gives the team a useful starting point for the site visit without assuming that every waterlogged lawn needs the same treatment.",
      ),
    ],
  },
  {
    slug: "small-garden-design-lahore-homes",
    title: "Small Garden Design for Lahore Homes",
    excerpt:
      "Plan a compact garden around measured space, a clear walking route, useful shade and planting that leaves room to sit and maintain it.",
    category: "Garden Design",
    image: "/services/hardscape.jpg",
    imageAlt: "Stone garden steps bordered by planting",
    date: "2026-09-09",
    keywords: ["small garden design Lahore", "home garden design Pakistan"],
    relatedServices: [
      "landscape-design-planning",
      "hard-semi-hard-landscaping",
      "soft-landscaping",
    ],
    content: [
      p(
        "A small front garden has to work around real daily use: opening the gate, carrying shopping, parking and reaching the house. A layout that looks spacious in a photograph may feel crowded once those routes are included. Start with the clear space you need, then decide how much planting and seating it can support.",
      ),
      h2("Measure the usable garden"),
      p(
        "Measure the actual planting area rather than working from the house's marla size. Mark door swings, steps, inspection covers, taps and utility access. Check the route with the furniture you intend to use. Chairs need space to move, and a planted border should not force everyone to walk through the grass.",
      ),
      p(
        "Draw two alternatives before choosing finishes. One might use a modest lawn with beds along a boundary; another might favour a sitting area with more planting and less grass. The better option is the one that suits your use of the garden and the light available, rather than the option with the most features.",
      ),
      h2("Choose one main place to sit"),
      p(
        "Place seating where it can be reached comfortably and used at the time of day you prefer. Check afternoon exposure and views from neighbouring windows. Shade may come from the building, suitable planting or a garden structure. Its position matters more than adding several benches to a space that has room for only one useful seating area.",
      ),
      h2("Give plants room to grow"),
      p(
        "Ask for the expected mature size of shrubs and trees, not just their nursery size. A small garden can quickly become a regular pruning job when plants are packed tightly against paths and windows. Use a short plant list, repeat it where appropriate and leave access for watering and maintenance.",
      ),
      ul(
        "Record sunny and shaded areas at different times of day.",
        "Keep plant choices tied to the light and soil in each bed.",
        "Separate paths from planting with a clear, maintainable edge.",
        "Avoid positioning large containers over drains or inspection covers.",
        "Plan where a hose or irrigation pipe will run before completing paving.",
      ),
      h2("Keep the material choices simple"),
      p(
        "A limited paving palette is usually easier to coordinate with an existing house. View material samples beside the facade and assess the proposed finish when wet as well as dry. Discuss slope and drainage with the installer; appearance alone does not tell you whether a path will work after rain.",
      ),
      p(
        "GardenPlus can prepare a layout and 3D landscape design proposal before execution planning and a detailed quotation. For a small garden, ask the proposal to show furniture, circulation and the eventual plant sizes. Those details are more useful than a view filled with greenery that leaves no room for everyday use.",
      ),
    ],
  },
  {
    slug: "drip-vs-sprinkler-irrigation-pakistan-gardens",
    title: "Drip or Sprinkler Irrigation for a Garden in Pakistan?",
    excerpt:
      "How to compare drip and sprinkler irrigation by planting type, available water pressure, controls and the maintenance each system needs.",
    category: "Irrigation",
    image: "/services/irrigation.jpg",
    imageAlt: "Sprinkler watering flowering plants",
    date: "2026-09-09",
    keywords: ["drip irrigation Pakistan", "sprinkler irrigation garden"],
    relatedServices: ["irrigation-systems", "landscape-maintenance"],
    sources: [
      {
        title: "EPA WaterSense: Microirrigation",
        url: "https://www.epa.gov/watersense/microirrigation",
      },
    ],
    content: [
      p(
        "Choosing irrigation is not simply a choice between drip pipes and sprinkler heads. A garden with a lawn, planted borders and containers may need more than one watering method. The design should start with the planting layout and the water supply, then divide the garden into areas that can be controlled appropriately.",
      ),
      h2("Match the method to the planting"),
      p(
        "Drip irrigation delivers water close to plant roots through emitters or dripline. It is useful for many planted beds and shrub areas. Sprinklers distribute water over a wider surface and are commonly used for lawns. A system can use both, with separate valves and schedules for different planting areas.",
      ),
      p(
        "EPA WaterSense describes microirrigation as low-pressure, slow delivery to the root zone, which can reduce runoff and evaporation. That does not mean every installation will achieve the same savings. Layout, scheduling, maintenance and the system being replaced all affect the result.",
      ),
      h2("Test the supply before buying equipment"),
      p(
        "Tell the designer whether water comes from a tank, pump or another supply and when it is available. Ask for usable flow and pressure to be assessed under operating conditions. An outlet that appears strong with nothing else running may behave differently when another part of the property uses water.",
      ),
      p(
        "Discuss water quality and filtration with the system designer, particularly when emitters and small passages are involved. Pump selection, pipe sizing and electrical accessories need to be coordinated. Selecting equipment independently can leave otherwise suitable parts unable to work together.",
      ),
      h2("Compare complete proposals"),
      ul(
        "A zone drawing showing which beds or lawn areas each valve serves.",
        "The specified pipes, heads or emitters, filtration and control equipment.",
        "Accessible valve locations and provision for flushing or maintenance.",
        "A proposed operating schedule that can be adjusted as conditions change.",
        "Installation, testing and a demonstration for the person who will operate it.",
      ),
      h2("Plan for checks after installation"),
      p(
        "Ask the installer to run every zone at handover. Look for water landing on paving, areas receiving uneven coverage and visible leaks. Keep the zone plan and equipment details with the property records. Changes to beds or paving should be reflected in that plan so a later contractor does not cut through an unknown pipe.",
      ),
      p(
        "An automatic controller still needs review. Adjust operation when rainfall, plant growth or site use changes, and check the garden rather than relying only on a timer display. GardenPlus provides design and installation planning for automated sprinkler and drip-irrigation systems, including pipelines, valves, controls, pumps, motors and electrical accessories. A site assessment establishes which combination fits your garden.",
      ),
    ],
  },
  {
    slug: "landscape-lighting-lahore-planning-guide",
    title: "Landscape Lighting in Lahore: Plan the Light Before the Fixtures",
    excerpt:
      "A practical guide to choosing what to illuminate, checking glare and coordinating garden lighting with paving, planting and electrical access.",
    category: "Landscape Lighting",
    image: "/services/lighting.jpg",
    imageAlt: "Garden light illuminating flowers and a tree beside a path",
    date: "2026-09-09",
    keywords: ["landscape lighting Lahore", "garden lighting Pakistan"],
    relatedServices: ["landscape-lighting", "landscape-civil-works"],
    content: [
      p(
        "Begin a garden lighting plan by walking through the property after dark. The immediate priorities may be a step, a turn in the path or the entrance gate. Once those are clear, decide which planting or structures you want to see from the sitting area and from inside the house.",
      ),
      h2("Separate circulation from feature lighting"),
      p(
        "Mark paths, steps and changes in level on a drawing. Then mark the places where people sit and the views you want to retain. Lighting every tree equally can make the garden busy while leaving the route to the door poorly defined. A short list of priorities gives the designer something specific to work towards.",
      ),
      p(
        "A spotlight, an uplight and a fitting intended for a water feature have different purposes. Choose the effect first, then discuss suitable fixtures and their position. Ask to see the effect from normal viewing positions, including a seated position, because a lamp hidden from standing height may still shine directly into someone's eyes.",
      ),
      h2("Use a sample before repeating it"),
      p(
        "Where practical, try a proposed fitting in its intended location before ordering the full quantity. Check the brightness and colour beside existing house lights. View it from the gate and neighbouring boundaries as well as from within the garden. A product photograph cannot show how the light will behave against your paving or foliage.",
      ),
      ul(
        "Check whether the beam crosses a window or an adjacent property.",
        "Keep fixtures out of routine mowing and trimming routes.",
        "Leave space to clean fittings and replace components.",
        "Decide which lights should operate together and which need separate control.",
        "Allow for plants to grow without covering the intended light source.",
      ),
      h2("Coordinate the installation before paving"),
      p(
        "Agree on cable routes, sleeves, controls and access points while the landscape work is being planned. Retrofitting a route beneath a completed path may mean lifting the finish. Record the installed arrangement so maintenance staff know where equipment is located.",
      ),
      p(
        "Outdoor electrical work and lighting near water require suitable equipment and qualified installation. Ask the electrical professional to specify the necessary protection for each location. Keep the design discussion focused on placement and appearance, with electrical design and testing handled by the appropriate specialist.",
      ),
      h2("Check the finished garden after dark"),
      p(
        "Include an evening review in the handover plan. Adjust direction and check controls with the person who will operate them. GardenPlus's Landscape Lighting service covers selection and installation planning for lighting fixtures, underwater lights, spotlights, sheet lighting, uplighting and other outdoor systems. Share photographs of the existing garden and explain which areas you use at night when requesting a proposal.",
      ),
    ],
  },
  {
    slug: "garden-water-features-pakistan-planning-maintenance",
    title: "Planning a Garden Fountain or Waterfall in Pakistan",
    excerpt:
      "Before choosing a garden water feature, plan access to the pump, circulation, filtration, splash control and the work needed to keep it running.",
    category: "Water Features",
    image: "/services/water-features.jpg",
    imageAlt: "A fountain and water channel between planted garden beds",
    date: "2026-09-09",
    keywords: ["garden fountain Pakistan", "water features Lahore"],
    relatedServices: ["water-bodies-water-play", "landscape-maintenance"],
    content: [
      p(
        "A fountain can suit a small courtyard or a large entrance landscape, but its running needs deserve as much attention as its shape. Before choosing stone or a decorative finish, decide where the equipment will go and who will clean and operate the feature.",
      ),
      h2("Choose the location around use"),
      p(
        "Mark where people will view the feature and how close they will sit. Discuss the sound you want, then review it alongside nearby rooms and working areas. A water sound that feels pleasant in a large open garden may be intrusive beside a quiet office window.",
      ),
      p(
        "Allow room around the feature for walking and cleaning. Consider falling leaves, wind and splash reaching adjacent paving. The design should address how water is retained and where overflow is managed. Photographs are useful references, but the dimensions and position need to suit your property.",
      ),
      h2("Ask for the system behind the appearance"),
      p(
        "The specification should explain circulation, filtration, aeration where required, pumps, motors and plumbing. Ask how equipment has been selected for the proposed feature rather than accepting only a pump brand or a decorative drawing. A taller cascade and a gentle fountain do not necessarily need the same arrangement.",
      ),
      ul(
        "Where can the pump and filters be reached for service?",
        "How will the feature be filled, drained and cleaned?",
        "How is overflow addressed in the design?",
        "Which controls operate the pump and any lighting?",
        "Who supplies replacement parts, and what information is provided at handover?",
      ),
      h2("Make maintenance practical"),
      p(
        "Equipment should not become inaccessible once the surrounding landscape is finished. Ask the designer to demonstrate the planned access route on the drawing. Leave enough working space to remove and service components without dismantling the feature or damaging nearby plants.",
      ),
      p(
        "Agree on an inspection and cleaning routine suited to the installation, using the equipment manufacturer's instructions. Check debris, water level and visible leaks during routine garden visits. If a fault needs electrical or mechanical work, have the relevant professional handle it; garden maintenance and equipment repair are not automatically the same scope.",
      ),
      h2("Review operation before accepting handover"),
      p(
        "Run the feature and inspect the surrounding area for unwanted splash or pooling. Have its controls and shut-off procedure explained. Retain the equipment list, manuals and warranty information, and confirm who is responsible for follow-up visits.",
      ),
      p(
        "GardenPlus's Water Bodies & Water Play service covers planning and construction specifications for fountains, cascades, waterfalls and other water features, including the supporting systems. Share the proposed location and the effect you prefer so the proposal can address both the visible feature and its day-to-day operation.",
      ),
    ],
  },
  {
    slug: "pergola-gazebo-lahore-garden-planning",
    title: "Pergola or Gazebo? Planning a Garden Sitting Area in Lahore",
    excerpt:
      "Compare a pergola and gazebo by shade, seating, maintenance, rain exposure and their fit with the rest of your landscape.",
    category: "Garden Structures",
    image: "/services/structures.jpg",
    imageAlt: "A planted pergola forming a shaded garden structure",
    date: "2026-09-09",
    keywords: ["pergola Lahore", "gazebo garden Pakistan"],
    relatedServices: [
      "garden-structures-special-effects",
      "landscape-civil-works",
    ],
    content: [
      p(
        "A garden structure is useful when it creates a place you will actually sit. Before comparing pergola and gazebo designs, decide how many people it should accommodate, when you will use it and how you will reach it from the house. Those choices determine the footprint more reliably than a reference image.",
      ),
      h2("Clarify what you mean by shade and shelter"),
      p(
        "A pergola commonly uses an open framework; a gazebo is generally conceived as a more sheltered sitting structure. The names alone do not specify the roof, sides or weather protection. Ask the proposal to show exactly what is open, covered or planted so expectations are clear.",
      ),
      p(
        "Check the intended sitting area at the time of day you expect to use it. A structure can look shaded in a morning photograph and still receive strong afternoon sun from the side. Discuss orientation and the surrounding buildings rather than relying only on the appearance of the roof.",
      ),
      h2("Draw the furniture into the plan"),
      p(
        "Include the actual table and chair sizes, the space needed to pull a chair back and the route around them. Keep steps and supports clear of the main approach. For a farmhouse or larger garden, also consider the distance from indoor facilities and whether the path will remain comfortable to use after rain.",
      ),
      ul(
        "Confirm the required seating capacity and furniture layout.",
        "Mark foundations, nearby roots and known buried services.",
        "Coordinate the floor finish with drainage and adjoining paths.",
        "Decide whether lighting and power are needed before construction.",
        "Leave access to inspect and maintain the structure.",
      ),
      h2("Compare materials with their upkeep"),
      p(
        "Ask how each proposed material will be finished, cleaned and maintained in an exposed garden. Request an actual sample where possible. Compare the maintenance requirements and replacement access as well as the initial appearance. The design should identify connections and foundations, with structural decisions made by the appropriate professional.",
      ),
      p(
        "If climbing plants are part of the proposal, confirm their mature size, how they will be supported and who will prune them. Allow access for that work. Planting is a separate maintenance commitment, and the structure should not depend on unchecked growth to provide the only comfortable shade.",
      ),
      h2("Bring the structure into the wider quotation"),
      p(
        "Include paving, lighting, planting and access work in the cost comparison, or list them clearly as separate items. Otherwise, a structure-only price can make the finished sitting area seem less expensive than it will be.",
      ),
      p(
        "GardenPlus designs and develops shelters, gazebos, trellises, picket fencing, railings, pergolas and other garden structures. A site visit can establish the available footprint and help coordinate the structure with the civil works, planting and lighting planned for the garden.",
      ),
    ],
  },
  {
    slug: "soil-preparation-new-garden-pakistan",
    title: "Soil Preparation Before Planting a New Garden in Pakistan",
    excerpt:
      "Check the ground beneath a new garden before ordering plants: construction debris, levels, drainage, topsoil quality and amendments based on soil condition.",
    category: "Soft Landscaping",
    image: "/services/planting.jpg",
    imageAlt: "Hands preparing soil around garden plants",
    date: "2026-09-09",
    keywords: ["garden soil preparation Pakistan", "soft landscaping Lahore"],
    relatedServices: ["soft-landscaping", "landscape-development"],
    sources: [
      {
        title:
          "University of Minnesota Extension: Soil testing for lawns and gardens",
        url: "https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/soil-testing-for-lawns-and-gardens",
      },
    ],
    content: [
      p(
        "The ground left after a house or factory build may be a mixture of original soil, filling material and construction debris. A thin layer of attractive topsoil can hide that mixture without resolving it. Before planting a new garden, inspect the ground that will support the roots and carry irrigation water.",
      ),
      h2("Inspect different parts of the site"),
      p(
        "Check more than one location. An area used for material storage may be compacted, while another area may contain rubble or remain wet after rain. Mark these differences on the planting plan. Ask the landscape team what preparation each area needs rather than assuming the entire site has the same soil.",
      ),
      p(
        "Locate known underground services before excavation. Agree on debris removal and the intended finished levels, including their relationship to paths and building thresholds. Where imported filling material is needed, distinguish it from the soil specified for the planting area.",
      ),
      h2("Use a soil test to guide additions"),
      p(
        "Soil testing can help identify nutrient levels and guide decisions about compost, manure and fertiliser. University of Minnesota Extension describes a soil test as a snapshot of current soil nutrients. Use locally appropriate testing and interpretation for your garden rather than following a fixed fertiliser recipe from a different site.",
      ),
      p(
        "Ask the supplier about the origin and quality of imported soil and amendments. Review a sample before accepting a large delivery where practical. Keep the approved material description in the BOQ, including quantities and the preparation work. A description such as 'good garden soil' leaves too much open to interpretation.",
      ),
      h2("Coordinate soil work with construction"),
      ul(
        "Finish heavy construction and delivery routes before final bed preparation where possible.",
        "Install agreed underground irrigation and service routes before closing the ground.",
        "Keep stored materials and repeated vehicle traffic off prepared planting areas.",
        "Check levels and drainage before laying lawn or placing specimen plants.",
        "Keep an accessible route for the planting team and later maintenance.",
      ),
      h2("Plan the first period of care"),
      p(
        "Agree on who checks watering immediately after planting and how issues will be recorded. New plants, established trees and lawns can have different requirements, so ask for instructions tied to the actual planting plan. Keep records of supplied plants and any replacements rather than relying on memory during follow-up visits.",
      ),
      p(
        "Do not treat every struggling plant as a reason to add more fertiliser. Check the planting position, water supply and drainage first, then seek advice based on what is happening on site.",
      ),
      p(
        "GardenPlus's Soft Landscaping service includes lawns, shrubs, trees, ground-cover plants and specimen plants, together with soil conditioning, organic and inorganic manuring, transplantation and follow-up maintenance. Discuss soil preparation as part of the initial scope so it is included before the planting order is finalised.",
      ),
    ],
  },
  {
    slug: "commercial-landscape-handover-pakistan",
    title: "Landscape Handover for Factories and Offices in Pakistan",
    excerpt:
      "The drawings, equipment records, inspections and maintenance responsibilities to agree before accepting a completed commercial landscape.",
    category: "Commercial Landscaping",
    image: "/services/maintenance.jpg",
    imageAlt: "Lawn mower maintaining a grassed area",
    date: "2026-09-09",
    keywords: [
      "commercial landscape handover Pakistan",
      "factory landscape maintenance",
    ],
    relatedServices: [
      "landscape-maintenance",
      "bill-of-quantities",
      "irrigation-systems",
    ],
    content: [
      p(
        "A completed landscape should be ready for the people who will maintain it. At a factory, office or larger commercial property, that may be a facilities team with several other responsibilities. A structured handover gives them the drawings, equipment information and contacts needed to take over the work.",
      ),
      h2("Walk the site against the approved scope"),
      p(
        "Use the final drawing and BOQ during the inspection. Check planting quantities and sizes, visible finishes and any agreed substitutions. Record incomplete items with photographs, an assigned person and a target date. Keep this list separate from routine maintenance so unfinished installation work does not disappear into the next monthly visit.",
      ),
      p(
        "Check paths, access covers and equipment locations with the staff who use the site. A planted border may look finished but still obstruct a service route. Discuss access restrictions, delivery movements and any areas that must remain available during future maintenance.",
      ),
      h2("Request the records that will be used later"),
      ul(
        "The final landscape layout and recorded changes from the original design.",
        "Plant schedules and agreed substitutions or replacements.",
        "Irrigation zones, valve locations and controller instructions.",
        "Lighting and water-feature equipment details, manuals and contacts.",
        "Written warranty coverage and the procedure for reporting defects.",
        "The agreed maintenance scope, attendance arrangements and reporting contact.",
      ),
      h2("Demonstrate equipment with the facilities team"),
      p(
        "Run the irrigation zones and water features with the person who will operate them. Explain normal controls, shut-off arrangements and which faults require specialist attention. Record where manuals are kept and who can change controller settings. A demonstration attended only by the project manager may not help the staff responsible the following morning.",
      ),
      p(
        "Review lighting after dark when possible. Check whether routine maintenance can reach fittings, filters and controls without disrupting operations. Where specialist electrical or mechanical sign-off is required, keep that documentation with the equipment records.",
      ),
      h2("Assign care from the first day"),
      p(
        "Confirm who is responsible for watering, plant checks, cleaning water bodies and reporting equipment problems immediately after handover. The work may be split between an in-house gardener, a landscape contractor and equipment specialists. Put those responsibilities in writing and name one person to receive reports.",
      ),
      p(
        "Arrange an early follow-up review to compare the installed garden with actual use. Record plant condition, visible irrigation issues and any damage caused by site traffic. That record helps distinguish an installation issue from a change in use or a missed maintenance task.",
      ),
      p(
        "GardenPlus provides landscape maintenance covering landscapes, water bodies, irrigation equipment, plants, pest control, fertilization and general upkeep. When requesting a commercial maintenance proposal, share the site layout and handover information so the scope can be based on the installed landscape and the property's operating needs.",
      ),
    ],
  },
];

export const pakistanPosts: Post[] = articles.map((post) => {
  const words = post.content
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .join(" ")
    .split(/\s+/).length;
  return {
    ...post,
    readTime: `${Math.max(1, Math.ceil(words / 200))} min read`,
  };
});
