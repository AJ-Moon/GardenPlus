// ============================================================================
// GARDENPLUS — BLOG POSTS
// ----------------------------------------------------------------------------
// Each post below renders its own page at /blog/<slug>.
//
// To add a post: copy an existing entry, change the `slug` (must be unique,
// lowercase, hyphenated) and write the `content` blocks. Available blocks:
//
//   { type: "h2",    text: "A section heading" }
//   { type: "p",     text: "A paragraph." }
//   { type: "ul",    items: ["First point", "Second point"] }
//   { type: "quote", text: "A pulled-out highlight." }
//
// Images live in /public — set `image: "/blog/my-photo.jpg"` to use your own.
// ============================================================================

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  /** ISO date — controls ordering and the displayed date. */
  date: string;
  featured?: boolean;
  content: Block[];
};

const stock = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

export const posts: Post[] = [
  {
    slug: "designing-a-lawn-that-stays-green-all-year",
    title: "How to Design a Lawn That Stays Green All Year in Lahore",
    excerpt:
      "Soil preparation, irrigation planning, grass selection and a month-by-month maintenance rhythm — the four things that decide whether a lawn thrives or struggles.",
    image: stock("photo-1458245201577-fc8a130b8829"),
    category: "Lawn Care",
    readTime: "7 min read",
    date: "2026-07-22",
    featured: true,
    content: [
      {
        type: "p",
        text: "Most lawns that fail in Lahore don't fail because of the plants. They fail because of what happens — or doesn't happen — in the six weeks before a single blade of grass goes down. Get the groundwork right and a lawn becomes close to self-sustaining. Get it wrong and you spend years compensating with water and fertiliser.",
      },
      {
        type: "h2",
        text: "Start with the soil, not the grass",
      },
      {
        type: "p",
        text: "Much of the soil around Lahore is heavy in clay. Clay holds nutrients well, which is good, but it compacts under foot traffic and drains slowly, which is not. Water sits near the surface, roots stay shallow, and the first serious heat of May scorches everything.",
      },
      {
        type: "p",
        text: "Before planting, we typically break up the top 20–25cm and work in organic matter — well-rotted compost or manure — at roughly a third by volume. This does two jobs at once: it opens up the structure so water moves through, and it feeds the soil biology that keeps the structure open in the following seasons.",
      },
      {
        type: "ul",
        items: [
          "Test drainage first: dig a 30cm hole, fill it with water, and see how long it takes to empty. More than four hours means you need to amend or install drainage.",
          "Level after amending, not before — added organic matter changes the finished height.",
          "Firm the surface by treading or rolling before seeding or turfing, or you'll get dips as it settles.",
        ],
      },
      {
        type: "h2",
        text: "Choose grass for the light you actually have",
      },
      {
        type: "p",
        text: "The single most common mistake is buying one grass for an entire property. Sun-loving varieties will thin out and go patchy under a mature tree canopy, no matter how much you feed them.",
      },
      {
        type: "p",
        text: "For open, sunny areas in this climate, warm-season grasses perform best — they handle heat well and go semi-dormant rather than dying back in the cool months. For shaded areas under trees or along north-facing walls, a shade-tolerant variety is worth the extra cost. Map your garden's sun exposure across a full day before you order anything.",
      },
      {
        type: "quote",
        text: "A lawn is not one habitat. Treat the shaded third differently from the sunny two-thirds and both will look better.",
      },
      {
        type: "h2",
        text: "Water deeply and less often",
      },
      {
        type: "p",
        text: "Light daily watering is the enemy of a resilient lawn. It keeps moisture in the top few centimetres, so roots have no reason to go deeper — and a shallow-rooted lawn is one hot week away from crisis.",
      },
      {
        type: "p",
        text: "Water heavily but infrequently instead. Aim to wet the soil to 15–20cm, then leave it until the surface genuinely dries. In peak summer that might be every second or third day; in winter it may be once a fortnight. Early morning is best — evening watering leaves foliage damp overnight and invites fungal disease.",
      },
      {
        type: "h2",
        text: "Mow high",
      },
      {
        type: "p",
        text: "Cutting too short is the second most common cause of a struggling lawn. Longer blades shade the soil, keep root zones cooler, hold moisture and crowd out weeds before they establish. Never remove more than a third of the leaf height in one cut, and raise the blade further through the hottest months.",
      },
      {
        type: "p",
        text: "Keep the blade sharp, too. A dull mower tears rather than cuts, leaving ragged tips that brown off and give disease an entry point — which is why a lawn can look dull and yellowish within a day of mowing even when it's perfectly healthy.",
      },
      {
        type: "h2",
        text: "A simple seasonal rhythm",
      },
      {
        type: "ul",
        items: [
          "Spring (Feb–Mar): scarify to remove thatch, aerate compacted areas, apply a balanced feed as growth resumes.",
          "Early summer (Apr–May): raise mowing height, move to deep infrequent watering, spot-treat weeds before they seed.",
          "Monsoon (Jul–Aug): watch drainage, ease off watering, treat any fungal patches promptly.",
          "Autumn (Sep–Oct): the best window for repair — overseed thin areas, top-dress, apply a potassium-rich feed to harden growth.",
          "Winter (Nov–Jan): minimal watering, keep the surface clear of fallen leaves, avoid heavy traffic on frosted grass.",
        ],
      },
      {
        type: "p",
        text: "None of this is complicated, but it is cumulative. A lawn that gets the right treatment for two seasons running becomes markedly easier to maintain in the third — deeper roots, better soil structure, fewer weeds and far less water.",
      },
    ],
  },
  {
    slug: "outdoor-plants-for-lahore-homes",
    title: "Ten Outdoor Plants That Genuinely Thrive in Lahore",
    excerpt:
      "Hardy, good-looking plants that handle the local temperature swing — from 45°C summers to genuinely cold January nights — without constant intervention.",
    image: stock("photo-1520302630591-fd1c66edc19d"),
    category: "Plant Guide",
    readTime: "5 min read",
    date: "2026-07-08",
    content: [
      {
        type: "p",
        text: "Lahore asks a lot of a plant. Summers push past 45°C with dry, dusty air; January nights can drop close to freezing; and the monsoon delivers a few weeks of heavy water in between. Plants that only tolerate one end of that range end up looking tired for half the year.",
      },
      {
        type: "p",
        text: "These ten handle the full swing. None of them are exotic or difficult to source — that's the point.",
      },
      {
        type: "h2",
        text: "Structure and shade",
      },
      {
        type: "ul",
        items: [
          "Bougainvillea — the workhorse of the region. Thrives on heat and neglect, flowers hardest when slightly underwatered, and covers a wall or pergola faster than almost anything else.",
          "Frangipani (Plumeria) — sculptural even when bare in winter, heavily scented in summer, and extremely drought-tolerant once established.",
          "Neem — fast-growing native shade with genuine air-cooling effect, deep roots that don't lift paving, and natural pest resistance.",
          "Ficus (Ficus benjamina / retusa) — dense evergreen screening, takes hard pruning well, ideal for boundary hedging where privacy matters.",
        ],
      },
      {
        type: "h2",
        text: "Colour that lasts",
      },
      {
        type: "ul",
        items: [
          "Hibiscus — flowers almost continuously through the warm months, recovers quickly from a hard prune, and comes in a wide colour range.",
          "Ixora — compact, glossy, and reliably flowering in reds and oranges; excellent as a low informal hedge.",
          "Lantana — extremely tough, drought-proof groundcover with constant colour; useful on slopes and hot exposed edges.",
        ],
      },
      {
        type: "quote",
        text: "The best plant for a difficult spot is almost never the most beautiful one in the nursery. It's the one that still looks decent in the third week of a heatwave.",
      },
      {
        type: "h2",
        text: "Texture and ground cover",
      },
      {
        type: "ul",
        items: [
          "Areca palm — softens hard corners, works in containers, and tolerates partial shade where flowering plants struggle.",
          "Dwarf mondo grass — a durable low border and edging plant that stays tidy without regular cutting.",
          "Aloe vera — near-indestructible, useful in the hottest, driest, most neglected corner of any garden.",
        ],
      },
      {
        type: "h2",
        text: "Planting notes",
      },
      {
        type: "p",
        text: "Plant in autumn wherever possible. Roots establish through the mild winter and the plant faces its first summer already anchored, rather than trying to root and survive heat at the same time. Spring planting works, but demands considerably more watering attention through the first year.",
      },
      {
        type: "p",
        text: "Mulch everything. A 5–7cm layer of bark, straw or compost around the base cuts surface evaporation dramatically, keeps root-zone temperature down, and suppresses the weeds that otherwise compete for the same water.",
      },
    ],
  },
  {
    slug: "smart-irrigation-save-water",
    title: "Smart Irrigation: Cutting Water Use Without Losing Greenery",
    excerpt:
      "How drip zones, correct scheduling and moisture-aware controllers reduce consumption by a third or more while improving plant health.",
    image: stock("photo-1584479898061-15742e14f50d"),
    category: "Irrigation",
    readTime: "6 min read",
    date: "2026-06-19",
    content: [
      {
        type: "p",
        text: "Most gardens are simultaneously overwatered and underwatered. Lawns get soaked daily while established trees get nothing; beds near the house drown while the far corner dries out. The problem is almost never the volume of water — it's the distribution.",
      },
      {
        type: "h2",
        text: "Zone by need, not by geography",
      },
      {
        type: "p",
        text: "The single biggest improvement in most systems is splitting the garden into zones that share watering requirements, rather than zones that happen to be near each other. Lawn, shrub beds, containers and mature trees have genuinely different needs and should never run on the same valve.",
      },
      {
        type: "ul",
        items: [
          "Lawn — frequent-ish, even coverage, sprinkler or rotor heads.",
          "Beds and shrubs — deep, infrequent, drip line at the root zone.",
          "Containers and pots — small volume, high frequency, individual drippers.",
          "Established trees — very deep, very infrequent, ring of emitters at the canopy edge rather than the trunk.",
        ],
      },
      {
        type: "h2",
        text: "Drip where you can, spray where you must",
      },
      {
        type: "p",
        text: "Sprinklers throw water into hot, dry air and onto leaves — a meaningful proportion evaporates before it reaches soil, and wet foliage in the evening invites fungal problems. Drip lines deliver water directly to the root zone at low pressure, with losses close to zero.",
      },
      {
        type: "p",
        text: "Lawn genuinely needs overhead coverage, so sprinklers stay. Almost everything else does better on drip, and converting beds from spray to drip is usually the fastest saving available on an existing system.",
      },
      {
        type: "quote",
        text: "Watering at 2pm in June can lose a third of the water to evaporation before it reaches a root. The same cycle at 5am loses almost none.",
      },
      {
        type: "h2",
        text: "Schedule around the sun",
      },
      {
        type: "p",
        text: "Run irrigation in the early morning — roughly 4am to 7am. Air is coolest, wind is lowest, evaporation is minimal, and foliage dries as the sun comes up. Evening watering is the second-best option in terms of evaporation but the worst in terms of disease, because leaves stay damp all night.",
      },
      {
        type: "h2",
        text: "Controllers that pay for themselves",
      },
      {
        type: "p",
        text: "A basic timer runs the same cycle whether it's 46°C or raining. A moisture-aware or weather-linked controller skips cycles that aren't needed, and that alone typically accounts for a large share of the savings — particularly through the monsoon, when a fixed schedule can keep watering saturated ground for weeks.",
      },
      {
        type: "ul",
        items: [
          "Soil moisture sensors: cheapest meaningful upgrade; suspend a cycle when the root zone is already wet.",
          "Rain sensors: simple and effective, particularly Jul–Aug.",
          "Seasonal adjust: one setting that scales every zone up or down as conditions change, instead of reprogramming each valve.",
        ],
      },
      {
        type: "h2",
        text: "Maintenance is where systems quietly fail",
      },
      {
        type: "p",
        text: "Drip emitters clog, sprinkler heads get knocked out of alignment, and a single cracked line can waste more water than the rest of the system uses. Walk the garden with the system running once a month, zone by zone, and watch where the water actually lands. It takes fifteen minutes and catches almost everything.",
      },
    ],
  },
  {
    slug: "what-a-full-landscape-build-involves",
    title: "From Empty Plot to Finished Garden: What a Full Build Involves",
    excerpt:
      "The phases of a complete landscape project, what happens in each, and where timelines realistically slip — so you know what you're committing to.",
    image: stock("photo-1605117882932-f9e32b03fea9"),
    category: "Process",
    readTime: "8 min read",
    date: "2026-06-02",
    content: [
      {
        type: "p",
        text: "A full landscape build is closer to a construction project than to gardening. Knowing the sequence helps you plan around it — and makes it much easier to tell whether a quote you've been given is complete or has quietly left something out.",
      },
      {
        type: "h2",
        text: "Phase 1 — Survey and site analysis",
      },
      {
        type: "p",
        text: "Before any design work, the site gets measured and assessed: levels and slope, drainage behaviour, soil type and depth, sun and shade across the day, existing trees worth keeping, and the position of every service line. Skipping this is how projects end up with a patio that floods or a specimen tree planted over a sewer run.",
      },
      {
        type: "h2",
        text: "Phase 2 — Design and specification",
      },
      {
        type: "p",
        text: "The design translates how you want to use the space into a plan: circulation, zones, focal points, planting scheme, materials and lighting. Expect at least one round of revisions. This is the cheapest possible moment to change your mind, and the most expensive one to stay quiet about a doubt.",
      },
      {
        type: "p",
        text: "A proper specification lists quantities, materials, plant sizes and species by name. Quotes without one are difficult to compare and easy to under-deliver against.",
      },
      {
        type: "h2",
        text: "Phase 3 — Site clearance and earthworks",
      },
      {
        type: "p",
        text: "Clearance, excavation, levelling and drainage. It's the least photogenic phase and often the longest, and it's where hidden conditions surface — buried rubble, unexpected rock, old foundations. Build some contingency into both budget and timeline here specifically.",
      },
      {
        type: "quote",
        text: "Every landscape project has one genuine surprise underground. Budget for it and it's an inconvenience; don't and it's a crisis.",
      },
      {
        type: "h2",
        text: "Phase 4 — Hardscape",
      },
      {
        type: "p",
        text: "Paving, walls, steps, pergolas, water features and edging — all the built structure. Hardscape goes in before planting for the obvious reason that heavy materials and machinery would otherwise be dragged across finished beds.",
      },
      {
        type: "p",
        text: "Irrigation mains and lighting cable are laid during this phase too, while trenches are already open. Retrofitting either afterwards means lifting work you've just paid for.",
      },
      {
        type: "h2",
        text: "Phase 5 — Soil preparation and planting",
      },
      {
        type: "p",
        text: "Topsoil is brought to final levels and amended, then planting runs largest to smallest: trees first, then shrubs, then groundcover and lawn last. Getting good soil in at this stage is far cheaper than trying to improve it later around established roots.",
      },
      {
        type: "h2",
        text: "Phase 6 — Establishment",
      },
      {
        type: "p",
        text: "The phase most people don't plan for. New planting needs consistent attention for its first full year — regular watering, staking checks, early weed control, replacement of anything that fails. A garden handed over and then left alone for two months in summer will lose plants, however well it was built.",
      },
      {
        type: "h2",
        text: "Realistic timelines",
      },
      {
        type: "ul",
        items: [
          "Small residential garden: 3–6 weeks on site, plus 2–4 weeks of design beforehand.",
          "Large residential or estate: 2–4 months, often phased around other construction.",
          "Commercial or campus: 3–9 months, usually delivered in sections so parts open early.",
        ],
      },
      {
        type: "p",
        text: "Weather is the main variable. Heavy monsoon rain stops earthworks and hardscape entirely, and extreme summer heat restricts what can safely be planted. Scheduling the planting phase for autumn, where the programme allows, gives everything the best possible start.",
      },
    ],
  },
  {
    slug: "design-elements-that-elevate-any-garden",
    title: "Five Design Elements That Instantly Elevate Any Garden",
    excerpt:
      "Pathways, a focal tree, considered lighting, water and layered texture — the moves that separate a planted space from a designed one.",
    image: stock("photo-1585320806297-9794b3e4eeae"),
    category: "Design",
    readTime: "4 min read",
    date: "2026-05-14",
    content: [
      {
        type: "p",
        text: "There's a recognisable difference between a garden that has been planted and one that has been designed. It usually comes down to five things, none of which require a large budget.",
      },
      {
        type: "h2",
        text: "1. A path that makes you walk the long way",
      },
      {
        type: "p",
        text: "A straight line from door to gate tells you the garden is a corridor. A path that curves around a planting bed, or disappears briefly behind a shrub, makes the same space feel considerably larger — because you can't take it in all at once.",
      },
      {
        type: "h2",
        text: "2. One specimen tree, properly placed",
      },
      {
        type: "p",
        text: "A single well-chosen tree does more for a garden than a dozen shrubs. It gives height, shade, seasonal change and a focal point the eye returns to. Place it off-centre and roughly a third into the view, not dead in the middle.",
      },
      {
        type: "quote",
        text: "If everything in a garden is the same height, the eye has nowhere to go. Vertical interest is what makes a space feel resolved.",
      },
      {
        type: "h2",
        text: "3. Lighting that points at things, not down",
      },
      {
        type: "p",
        text: "Most outdoor lighting is installed to illuminate ground, which flattens everything after dark. Uplighting a tree's canopy, grazing a textured wall, or backlighting a specimen plant turns the garden into something worth looking at from inside the house — which, realistically, is where you'll view it from most of the year.",
      },
      {
        type: "h2",
        text: "4. Water, even a small amount",
      },
      {
        type: "p",
        text: "Water adds sound, movement, reflected light and wildlife. A simple recirculating bowl or wall spout delivers most of that benefit at a fraction of the cost and maintenance of a pond, and it's particularly effective near a seating area where the sound masks traffic noise.",
      },
      {
        type: "h2",
        text: "5. Texture layering",
      },
      {
        type: "p",
        text: "Repeating three or four contrasting leaf textures — something fine and grassy, something broad and glossy, something spiky, something soft — gives a planting scheme coherence even when nothing is in flower. Since most gardens spend most of the year not flowering, this is what actually carries the design.",
      },
      {
        type: "ul",
        items: [
          "Repeat plants in odd-numbered groups rather than dotting singles about.",
          "Limit the palette — three or four species repeated reads as intentional; twenty singles reads as a collection.",
          "Plant in drifts that overlap slightly, rather than in discrete blocks.",
        ],
      },
    ],
  },
  {
    slug: "commercial-landscape-maintenance-checklist",
    title: "A Commercial Landscape Maintenance Checklist",
    excerpt:
      "A monthly framework for offices, schools and hospitality sites to keep grounds presentation-ready without emergency call-outs.",
    image: stock("photo-1562774053-701939374585"),
    category: "Commercial",
    readTime: "6 min read",
    date: "2026-04-28",
    content: [
      {
        type: "p",
        text: "Commercial grounds are judged differently from private gardens. Nobody compliments a well-maintained corporate frontage, but everybody notices a dead hedge or a flooded car park. The goal is consistency, and consistency comes from a schedule rather than from reacting to problems.",
      },
      {
        type: "h2",
        text: "Weekly",
      },
      {
        type: "ul",
        items: [
          "Litter clearance across all grounds, car parks and entrance areas.",
          "Mow and edge lawns; adjust height seasonally.",
          "Check irrigation ran correctly — look for dry patches and pooling.",
          "Clear entrance and footpath debris; these are the highest-visibility surfaces on any site.",
        ],
      },
      {
        type: "h2",
        text: "Monthly",
      },
      {
        type: "ul",
        items: [
          "Prune and shape hedges and shrubs along circulation routes and sightlines.",
          "Weed beds and hard surfaces before anything sets seed.",
          "Inspect and top up mulch layers.",
          "Test outdoor lighting — replace failed fittings promptly, as dark stretches are a security and liability issue.",
          "Walk every drainage point and clear grates.",
        ],
      },
      {
        type: "quote",
        text: "On commercial sites the entrance is 5% of the area and 80% of the impression. Weight the schedule accordingly.",
      },
      {
        type: "h2",
        text: "Quarterly",
      },
      {
        type: "ul",
        items: [
          "Fertilise lawns and beds according to season.",
          "Rotate seasonal colour planting at entrances and reception areas.",
          "Inspect tree health, stakes and ties; check for deadwood over paths and parking.",
          "Service irrigation: flush lines, clean filters, check emitters and heads.",
          "Review any areas of persistent failure and change the approach rather than repeating it.",
        ],
      },
      {
        type: "h2",
        text: "Annually",
      },
      {
        type: "ul",
        items: [
          "Formal tree survey by a qualified assessor, particularly for mature trees near buildings, parking and walkways.",
          "Aerate and scarify lawns; overseed worn circulation routes.",
          "Full irrigation audit including pressure and coverage testing.",
          "Review the planting scheme — replace anything that has consistently underperformed rather than nursing it another year.",
        ],
      },
      {
        type: "h2",
        text: "Build the schedule around the site's calendar",
      },
      {
        type: "p",
        text: "A school's grounds should peak for open days and term start. A hotel needs its best presentation through peak season. An office campus benefits most from attention before major client visits. Aligning intensive work with those dates costs nothing extra and makes the difference far more visible.",
      },
    ],
  },
  {
    slug: "seasonal-flowers-for-year-round-colour",
    title: "Choosing Seasonal Flowers for Year-Round Colour",
    excerpt:
      "A planting rotation for continuous blooms and curb appeal through every month of the Lahore calendar.",
    image: stock("photo-1468327768560-75b778cbb551"),
    category: "Plant Supply",
    readTime: "5 min read",
    date: "2026-04-09",
    content: [
      {
        type: "p",
        text: "Continuous colour isn't achieved by finding plants that flower all year — very few do reliably. It comes from planning overlapping waves, so that as one group fades another is already coming into bud.",
      },
      {
        type: "h2",
        text: "Winter into early spring (Nov – Mar)",
      },
      {
        type: "p",
        text: "This is the region's best flowering window, and it's often underused. Cool nights and mild days suit a wide range of annuals that would collapse in June.",
      },
      {
        type: "ul",
        items: [
          "Petunias — dense, long-flowering, excellent in beds and containers.",
          "Pansies and violas — reliable low colour, particularly good at bed edges.",
          "Calendula and dianthus — hardy, cheerful, tolerant of cold nights.",
          "Sweet peas and stocks — height and scent; plant where people walk past closely.",
        ],
      },
      {
        type: "h2",
        text: "Late spring (Mar – May)",
      },
      {
        type: "ul",
        items: [
          "Marigold — extremely tolerant of rising heat and a dependable transition plant.",
          "Zinnia — strong colour that carries into early summer.",
          "Gaillardia and portulaca — thrive as conditions get hot and dry.",
        ],
      },
      {
        type: "quote",
        text: "Plant the next wave three to four weeks before the current one finishes. Colour should hand over, not restart.",
      },
      {
        type: "h2",
        text: "Summer and monsoon (Jun – Sep)",
      },
      {
        type: "p",
        text: "Ambitions should be modest here. Rather than fighting the heat with annuals that need constant replacement, lean on flowering shrubs that genuinely enjoy the conditions — bougainvillea, hibiscus, ixora, lantana and oleander will carry the garden through with far less input.",
      },
      {
        type: "p",
        text: "Where you do want bedding colour, vinca (periwinkle) and cockscomb handle both heat and monsoon humidity better than most.",
      },
      {
        type: "h2",
        text: "Autumn (Oct – Nov)",
      },
      {
        type: "p",
        text: "The key transition. Beds are cleared of spent summer planting, soil is refreshed with compost, and winter annuals go in. Doing this properly in October is what makes the November–March display work — planting late into unimproved soil is the usual reason a winter bed underperforms.",
      },
      {
        type: "h2",
        text: "Practical notes",
      },
      {
        type: "ul",
        items: [
          "Plant annuals in generous single-colour blocks rather than mixed punnets; the effect from a distance is far stronger.",
          "Deadhead regularly — most annuals stop flowering once they set seed.",
          "Keep a permanent structural backbone of shrubs so beds never look empty between rotations.",
        ],
      },
    ],
  },
  {
    slug: "best-grass-for-lawns-in-lahore",
    title: "Which Grass Is Best for a Lawn in Lahore?",
    excerpt:
      "Kabuli, Dhaka, Bermuda, American Blue and artificial turf compared honestly — what each one costs you in water, mowing and winter colour before you commit an entire lawn to it.",
    image: stock("photo-1568393691622-c7ba131d63b4"),
    category: "Lawn Care",
    readTime: "8 min read",
    date: "2026-08-26",
    content: [
      {
        type: "p",
        text: "This is the question we get asked more than any other, usually a week before somebody wants turf delivered. It is worth slowing down for, because grass choice is one of the few landscaping decisions that is genuinely hard to undo — you are committing to a watering bill, a mowing frequency and a certain look in January, all at once.",
      },
      {
        type: "p",
        text: "There is no single best grass for Lahore. There is a best grass for your light, your traffic and how much maintenance you are honestly going to do.",
      },
      {
        type: "h2",
        text: "First, count your sun hours",
      },
      {
        type: "p",
        text: "Before comparing varieties, go out and look at the plot at 9am, 1pm and 4pm on a clear day. Note which parts are in direct sun each time. Almost every grass sold in Pakistan is a warm-season grass that wants six or more hours of direct sun. If large parts of your lawn get three, no variety is going to save you and you should be looking at shade planting or paving instead.",
      },
      {
        type: "quote",
        text: "More lawns in Lahore fail from shade and compaction than from choosing the wrong variety.",
      },
      {
        type: "h2",
        text: "The varieties, and what each one actually asks of you",
      },
      {
        type: "p",
        text: "Kabuli grass is the fine, soft, carpet-like lawn most people picture when they imagine a good Lahore garden. It looks superb and feels excellent underfoot. It is also the most demanding option on the list: it wants full sun, regular water, frequent mowing and it does not forgive neglect. Choose it if the lawn is going to be maintained properly, and avoid it if it will be left for a fortnight in July.",
      },
      {
        type: "p",
        text: "Dhaka grass is the workhorse. Broader-leaved and coarser than Kabuli, it tolerates heat, foot traffic and a degree of neglect that would kill a finer lawn. If you have children, dogs or a garden that gets genuinely used, this is usually the sensible answer.",
      },
      {
        type: "p",
        text: "Bermuda types are the most drought-tolerant and recover quickly from wear, which is why they are used on sports grounds. The trade-off is winter dormancy: it will go straw-coloured through the cold months and green up again in spring. Some people mind that a great deal and some do not mind at all — decide before, not after.",
      },
      {
        type: "p",
        text: "American Blue is the most shade-tolerant of the commonly available options and holds colour reasonably well. It is the one worth trying where you have four to five hours of sun rather than seven. It is not a miracle: in deep shade it will still thin out.",
      },
      {
        type: "p",
        text: "Artificial turf belongs in this comparison honestly. In a permanently shaded side return, a small courtyard, or a roof terrace where nothing will ever establish, it is the right answer. In an open, sunny garden it gets uncomfortably hot in summer, and it still needs a properly prepared, free-draining base — laying it over compacted rubble produces exactly the same problems as a bad lawn.",
      },
      {
        type: "h2",
        text: "Matching variety to the actual site",
      },
      {
        type: "ul",
        items: [
          "Full sun, formal garden, maintained weekly: Kabuli, for the finish.",
          "Full sun, family lawn, children and dogs: Dhaka, for the durability.",
          "Full sun, water-conscious, winter colour not a priority: a Bermuda type.",
          "Four to five hours of sun: American Blue, and lift the tree canopy to gain more light.",
          "Under three hours of sun, or a roof terrace: stop trying to grow grass — use shade planting, ground cover, paving or artificial turf.",
        ],
      },
      {
        type: "h2",
        text: "Turf or seed?",
      },
      {
        type: "p",
        text: "Turf gives an instant lawn and suppresses weeds while it establishes, which is why most residential jobs use it. Seed is cheaper across a large area and produces a stronger root system, but it needs consistent watering for weeks and an uninterrupted stretch where nobody walks on it. On a farmhouse or a big open site, seeding is often the better economics. On a family garden, turf usually wins on practicality.",
      },
      {
        type: "h2",
        text: "The decision that matters more than variety",
      },
      {
        type: "p",
        text: "Whatever you choose, the ground underneath decides how long it lasts. On plots handed over after construction, the top layer is usually compacted sand, brick and mortar. Turf laid onto that will look excellent for one season and thin out through the second, and no amount of feeding will fix it.",
      },
      {
        type: "p",
        text: "Strip it out, break up the subsoil, work in organic matter and set drainage falls away from the house. That work is invisible on handover day and it is the single largest factor in whether you are still happy with the lawn in three years.",
      },
    ],
  },
  {
    slug: "lahore-gardening-calendar-month-by-month",
    title: "A Month-by-Month Gardening Calendar for Lahore",
    excerpt:
      "What to plant, prune, feed and prepare in each month of the Lahore year — including the two weeks in September that decide how good your winter flowers will be.",
    image: stock("photo-1555955208-94f6fafea771"),
    category: "Plant Guide",
    readTime: "9 min read",
    date: "2026-08-19",
    content: [
      {
        type: "p",
        text: "Gardening in Lahore is a game of timing. The plant list matters far less than the fortnight you put it in the ground, because the climate gives you narrow windows and then punishes you for missing them with either 45°C heat or a monsoon that washes seedlings out.",
      },
      {
        type: "p",
        text: "This is the rhythm we work to. Adjust it by a week or two in either direction depending on the year.",
      },
      {
        type: "h2",
        text: "January and February — the dormant window",
      },
      {
        type: "p",
        text: "The best time of year for structural work. Deciduous trees are bare, so their shape is visible and pruning cuts heal into the spring flush. Prune fruit trees and roses, plant bare-root and semi-mature trees, and get any hardscape done while the ground is workable and nothing is actively growing. Winter annuals — pansies, petunias, calendula, dianthus — are at their peak, so keep deadheading them.",
      },
      {
        type: "h2",
        text: "March — the spring flush",
      },
      {
        type: "p",
        text: "Everything wakes up at once. Feed the lawn for the first time, scarify out the winter thatch and aerate if the soil is compacted. This is the best month of the year to lay turf: warmth for rooting without summer water demand. Start warm-season vegetables and plant summer flowering shrubs.",
      },
      {
        type: "h2",
        text: "April — the last comfortable month",
      },
      {
        type: "p",
        text: "Get everything done now that you do not want to be doing in June. Finish planting, mulch every bed to 5–7cm to hold moisture through what is coming, and service the irrigation properly: check every emitter, flush the lines, reset the controller. April is when we find the faults that would otherwise kill a garden in May.",
      },
      {
        type: "h2",
        text: "May and June — survival mode",
      },
      {
        type: "p",
        text: "Do not plant. Do not prune hard. The job in these months is keeping alive what you already have. Water early in the morning rather than the evening, and water deeply and less often so roots go down rather than sideways. Raise the mower height — longer grass shades its own roots and holds moisture far better than a close cut.",
      },
      {
        type: "ul",
        items: [
          "Mow higher, not shorter, through peak heat.",
          "Water between 4am and 7am; evening watering leaves foliage wet overnight and invites fungus.",
          "Check container plants daily — pots on a roof or terrace can dry out inside a single afternoon.",
          "Watch for red spider mite on stressed plants; it thrives in exactly these conditions.",
        ],
      },
      {
        type: "h2",
        text: "July and August — monsoon",
      },
      {
        type: "p",
        text: "The rain solves the water problem and creates a drainage one. Check that beds are not sitting waterlogged, clear roof and terrace outlets before the first heavy fall, and turn the irrigation controller down or off rather than letting it run through downpours. Fungal disease spikes now, so improve air movement by thinning dense shrubs. It is also the best window of the year for planting trees, which establish beautifully in warm, wet soil.",
      },
      {
        type: "h2",
        text: "September — the two weeks that matter most",
      },
      {
        type: "p",
        text: "If there is one entry on this calendar to act on, it is this one. Winter annuals need to be sown or planted in September to flower properly from November onward. Sow late and you get leggy plants and a short, disappointing display. This is when good winter gardens are decided, months before anyone sees them.",
      },
      {
        type: "p",
        text: "Also feed the lawn again as the heat breaks, and start cool-season vegetables: spinach, coriander, radish, peas, carrots.",
      },
      {
        type: "h2",
        text: "October and November — the second planting season",
      },
      {
        type: "p",
        text: "The most pleasant months to garden and the second-best window for turfing. Plant out the winter annuals raised in September, put in shrubs and perennials while the soil is still warm enough to root before winter, and divide anything overgrown. Reduce irrigation frequency as evaporation drops — most Lahore gardens are heavily over-watered in autumn out of habit.",
      },
      {
        type: "h2",
        text: "December — tidy and plan",
      },
      {
        type: "p",
        text: "Growth slows. Clear fallen leaves off the lawn so it does not yellow underneath, mulch tender plants, and take the opportunity to plan next year's changes while you can see the garden's bare structure. Any redesign is far cheaper to decide now than in April.",
      },
      {
        type: "quote",
        text: "The two dates that change a Lahore garden most are the September sowing and the April irrigation service. Miss either and the year gets harder.",
      },
    ],
  },
  {
    slug: "artificial-grass-vs-natural-grass-pakistan",
    title: "Artificial Grass vs Natural Grass: An Honest Comparison",
    excerpt:
      "Surface temperature, lifespan, drainage, running cost and resale — where synthetic turf genuinely wins in Pakistan, and the three situations where it is the wrong call.",
    image: stock("photo-1458245201577-fc8a130b8829"),
    category: "Lawn Care",
    readTime: "7 min read",
    date: "2026-08-12",
    content: [
      {
        type: "p",
        text: "We install both, which means we have no particular reason to sell you one over the other. Here is the comparison as we would give it on site.",
      },
      {
        type: "h2",
        text: "Where artificial grass genuinely wins",
      },
      {
        type: "p",
        text: "Deep shade is the strongest case. In a side return, a narrow courtyard between buildings, or under a dense mature canopy, natural grass will never establish no matter how much you spend re-turfing it. People try three or four times before accepting it. Synthetic turf solves that permanently.",
      },
      {
        type: "p",
        text: "Roof terraces and balconies are the second case. There is no soil depth, no drainage to speak of, and the weight of a saturated lawn is a structural problem. Artificial turf over a proper drainage layer is the practical answer.",
      },
      {
        type: "p",
        text: "The third is heavy, concentrated traffic in a small area: a play zone, a dog run, a poolside strip that gets constantly walked on wet. Natural grass in those spots turns to mud and stays there.",
      },
      {
        type: "h2",
        text: "Where it is the wrong call",
      },
      {
        type: "p",
        text: "In open, full-sun gardens, surface temperature is the honest objection. Synthetic turf in direct Lahore summer sun gets considerably hotter than natural grass, which cools itself by transpiring. On a June afternoon it can be genuinely uncomfortable to stand on barefoot. If the lawn is meant to be used in summer, this matters more than any other consideration.",
      },
      {
        type: "p",
        text: "Large areas are the second objection, on cost. Artificial turf is priced per square metre of supply plus a full base build. Across a big garden that number climbs quickly, and natural grass over the same area is dramatically cheaper to install.",
      },
      {
        type: "p",
        text: "The third is anywhere with significant leaf fall. Organic debris collects in the pile, breaks down, and eventually supports moss and weeds growing on top of the turf. It is manageable, but it is not the zero-maintenance surface people expect.",
      },
      {
        type: "h2",
        text: "The maintenance myth",
      },
      {
        type: "p",
        text: "Artificial grass is low maintenance, not no maintenance. It needs brushing to keep the pile upright, rinsing to clear dust — which in Lahore is not a trivial amount — debris removal, and infill topped up over time. What it does not need is mowing, watering, feeding or weeding, and that is a real saving in time and water.",
      },
      {
        type: "ul",
        items: [
          "Natural grass: mowing weekly in season, watering, feeding three or four times a year, aeration, occasional patch repair.",
          "Artificial grass: brushing, rinsing dust off, clearing debris, topping up infill, and replacement at end of life.",
        ],
      },
      {
        type: "h2",
        text: "Lifespan and what happens at the end",
      },
      {
        type: "p",
        text: "Good quality synthetic turf lasts around eight to twelve years in this climate before UV degradation shows in the colour and the pile stops recovering. At that point the surface is replaced — the base usually survives. A natural lawn, by contrast, improves with age if the soil is looked after; a well-maintained lawn at year ten is better than it was at year one.",
      },
      {
        type: "h2",
        text: "The mistake that ruins both",
      },
      {
        type: "p",
        text: "Skipping the base. People assume artificial turf can be rolled over whatever is already there because nothing has to grow in it. It cannot. Without a compacted, free-draining sub-base and correct falls, it holds water, develops dips and ripples within a season, and smells after rain. The groundwork is the same discipline as preparing for a natural lawn — for exactly the same reasons.",
      },
      {
        type: "quote",
        text: "Use synthetic turf where nature has already lost — deep shade, roof terraces, hard-worn strips. Use natural grass everywhere it still has a chance.",
      },
    ],
  },
  {
    slug: "starting-a-rooftop-garden-in-lahore",
    title: "How to Start a Rooftop Garden in Lahore",
    excerpt:
      "Weight, waterproofing, wind and heat — the four constraints that decide whether a terrace garden thrives or becomes an expensive leak, and how to work within them.",
    image: stock("photo-1520302630591-fd1c66edc19d"),
    category: "Design",
    readTime: "7 min read",
    date: "2026-08-05",
    content: [
      {
        type: "p",
        text: "A roof is the harshest place to grow anything on your property. The slab reaches temperatures the ground never does, wind strips moisture out of containers within hours, and there is no reservoir of soil to buffer any of it. Rooftop gardens that thrive are the ones designed around those facts rather than in spite of them.",
      },
      {
        type: "p",
        text: "The reward is real, though: a planted roof shades the slab underneath, and the top floor of the house is noticeably cooler through the afternoon.",
      },
      {
        type: "h2",
        text: "Start with weight, not plants",
      },
      {
        type: "p",
        text: "Saturated soil is heavy — far heavier than people estimate — and the weight arrives all at once after watering or rain. Before anything else, work out what the roof can carry, and design to stay well within it.",
      },
      {
        type: "ul",
        items: [
          "Use lightweight growing media rather than garden soil: compost blended with perlite, coco coir or similar.",
          "Keep heavy planters over structural walls and beams, at the edges of the slab, not in the middle of an open span.",
          "Favour many medium containers over a few very large ones — the load spreads and each is manageable.",
          "If you are planning anything substantial, have the structure assessed rather than guessing.",
        ],
      },
      {
        type: "h2",
        text: "Protect the waterproofing, or nothing else matters",
      },
      {
        type: "p",
        text: "The fastest way to turn a rooftop garden into a very expensive mistake is a leak into the room below. Work above the existing waterproofing with a protection layer and, where there are beds rather than pots, a root barrier. Never fix anything through the membrane. And if the waterproofing is already suspect, repair it before you start, not after you have a terrace full of planters sitting on top of it.",
      },
      {
        type: "p",
        text: "Keep every existing drainage outlet clear and accessible. Blocked outlets during monsoon are how roofs pond, and ponding is how membranes fail.",
      },
      {
        type: "h2",
        text: "Irrigation is not optional up here",
      },
      {
        type: "p",
        text: "Containers on a Lahore roof in June can go from watered to bone dry in a single day. Hand watering works until the first weekend away, and then you lose the collection. Drip lines on a timer, sized for rooftop evaporation rates, are the difference between a terrace that thrives and one that gets replanted every spring.",
      },
      {
        type: "h2",
        text: "Choose plants for exposure, then for looks",
      },
      {
        type: "p",
        text: "The palette that works on a roof is the one that copes with heat, wind and reflected light from surrounding walls: hardy succulents, bougainvillea, ornamental grasses, oleander, palms in sheltered corners, and shrubs that tolerate container life without needing constant root room.",
      },
      {
        type: "p",
        text: "Adding shade widens that list considerably. A pergola, a shade sail or even a screen on the windward side changes the microclimate enough to grow things that would scorch in the open.",
      },
      {
        type: "h2",
        text: "Design it to be used, not just planted",
      },
      {
        type: "p",
        text: "The rooftop gardens that get looked after are the ones people actually sit in. Plan a shaded seating area, a route to it that stays clear, lighting so it works after dark, and a water point so maintenance is not a trip down two flights of stairs with a can. A terrace you use is a terrace you water.",
      },
      {
        type: "quote",
        text: "Weight and waterproofing decide whether it is safe. Irrigation and shade decide whether it survives. Seating decides whether it gets loved.",
      },
    ],
  },
  {
    slug: "best-indoor-plants-for-pakistani-homes-and-offices",
    title: "Indoor Plants That Actually Survive Pakistani Homes and Offices",
    excerpt:
      "Nearly every indoor plant dies from the same two mistakes. Here is how to measure the light you have, choose accordingly, and stop killing things with kindness.",
    image: stock("photo-1592150621744-aca64f48394a"),
    category: "Plant Guide",
    readTime: "6 min read",
    date: "2026-07-29",
    content: [
      {
        type: "p",
        text: "Indoor plants die from light and from watering. Not from humidity, not from feeding, not from the pot being the wrong colour. Almost every failure we are called to look at comes down to a plant placed where there is not enough daylight, and then watered more to compensate for looking unhappy.",
      },
      {
        type: "h2",
        text: "Measure the light before you buy anything",
      },
      {
        type: "p",
        text: "Stand where the plant will live and look at the sky, not the room. If you can see a good area of open sky through the window, that is bright light. If you can see sky only at an angle, it is moderate. If you cannot see sky at all from that spot, it is low light, whatever the room feels like to your eyes — human vision adapts and consistently overestimates indoor brightness.",
      },
      {
        type: "p",
        text: "Distance matters more than people expect. Light drops off sharply as you move back from a window: a plant two metres in is in a fraction of the light of one sitting on the sill.",
      },
      {
        type: "h2",
        text: "What to put where",
      },
      {
        type: "p",
        text: "Bright, indirect light near a window: rubber plant, fiddle leaf fig, monstera, areca palm. These will reward the position with real growth.",
      },
      {
        type: "p",
        text: "Moderate light, a metre or two back: money plant, philodendron, peace lily, spider plant, dracaena. This is the most common condition in Pakistani homes and the group that performs most reliably.",
      },
      {
        type: "p",
        text: "Genuine low light — corridors, inner meeting rooms, reception corners away from glass: snake plant and ZZ plant, and honestly not much else. Both tolerate neglect as well as darkness, which is why they dominate office interiors everywhere.",
      },
      {
        type: "h2",
        text: "Watering: the one rule that fixes most problems",
      },
      {
        type: "p",
        text: "Put a finger into the soil to the second knuckle. If it is damp, do not water. That single habit prevents the majority of indoor plant deaths, because overwatering rots roots and the symptoms — drooping, yellowing leaves — look exactly like thirst, so people water again and finish the job.",
      },
      {
        type: "ul",
        items: [
          "Water thoroughly when you do water, until it runs from the drainage holes, then let it drain completely.",
          "Never leave a pot standing in a saucer of water.",
          "Every pot needs drainage holes. A decorative cover pot is fine — plant into a plastic liner inside it.",
          "Cut watering back significantly in winter, when growth slows and the soil stays wet far longer.",
        ],
      },
      {
        type: "h2",
        text: "Two things specific to offices here",
      },
      {
        type: "p",
        text: "Air conditioning is brutal on plants. Anything sitting directly under a vent dries unevenly, drops leaves and never settles. Move it a metre out of the airflow and the same plant often recovers without any other change.",
      },
      {
        type: "p",
        text: "Dust is the other. Lahore dust builds a film on foliage that measurably reduces the light reaching the leaf, and in an office nobody is assigned to deal with it. Wiping leaves monthly makes a visible difference to how plants hold their colour — it is the least glamorous item on any maintenance schedule and one of the most effective.",
      },
      {
        type: "quote",
        text: "Match the plant to the light you have, water only when the soil is dry, and keep it out of the air conditioning. That is most of it.",
      },
    ],
  },
  {
    slug: "starting-a-kitchen-garden-in-pakistan",
    title: "Starting a Kitchen Garden in Pakistan: A Practical Guide",
    excerpt:
      "Six hours of sun, three raised beds and a planting calendar built around the rabi and kharif seasons — how to set up a kitchen garden that keeps producing past the first crop.",
    image: stock("photo-1584479898061-15742e14f50d"),
    category: "Plant Guide",
    readTime: "7 min read",
    date: "2026-07-26",
    content: [
      {
        type: "p",
        text: "Most kitchen gardens in Pakistan produce one enthusiastic crop and then quietly stop. The beds are still there a year later, half-empty. It is almost never a gardening skill problem — it is a siting, soil and calendar problem, and all three are fixable at the start.",
      },
      {
        type: "h2",
        text: "Sun first, everything else second",
      },
      {
        type: "p",
        text: "Vegetables need at least six hours of direct sun, and fruiting crops like tomatoes, chillies and gourds want more. Before building anything, watch the intended spot across a full day. The most common cause of a disappointing kitchen garden is beds built in the most convenient corner of the plot rather than the sunniest one.",
      },
      {
        type: "h2",
        text: "Build raised beds",
      },
      {
        type: "p",
        text: "Raised beds are worth the initial cost for three reasons in this climate: you control the soil completely instead of fighting compacted clay, drainage stays predictable through monsoon instead of waterlogging the roots, and the working height makes weeding and harvesting something you will keep doing.",
      },
      {
        type: "ul",
        items: [
          "Keep beds no wider than about 1.2m so you can reach the middle from either side without stepping on the soil.",
          "Aim for 30–45cm of depth — enough for root crops and a real moisture reservoir.",
          "Leave paths wide enough for a wheelbarrow between beds.",
          "Fill with a mix of good soil and generous compost, not soil alone.",
        ],
      },
      {
        type: "h2",
        text: "Plant to the two seasons",
      },
      {
        type: "p",
        text: "Pakistan gives you two clear growing seasons, and a kitchen garden stays productive by turning over between them rather than being planted once.",
      },
      {
        type: "p",
        text: "The cool season, sown from roughly September to November, carries spinach, coriander, methi, radish, carrots, turnips, peas, cauliflower, cabbage and lettuce. This is the easier and more forgiving of the two, and the best season for a first attempt.",
      },
      {
        type: "p",
        text: "The warm season, sown from roughly February to April, carries tomatoes, chillies, okra, aubergine, cucumber, and the gourds. It produces more but demands consistent water through the heat.",
      },
      {
        type: "h2",
        text: "Put the watering on a timer",
      },
      {
        type: "p",
        text: "Vegetables are far less forgiving of irregular water than ornamentals — inconsistent watering is what causes tomatoes to split and root crops to go woody. Drip lines on a timer, running early in the morning, solve this for a modest cost and remove the single biggest source of failure.",
      },
      {
        type: "p",
        text: "Mulch the surface once plants are up. It holds moisture, keeps soil temperature steadier through May and June, and suppresses most of the weeding.",
      },
      {
        type: "h2",
        text: "Feed the soil, not the plants",
      },
      {
        type: "p",
        text: "Add compost between every crop cycle. A kitchen garden takes nutrients out of the soil continuously, and beds that are cropped hard for two seasons without replenishment simply stop performing. Home composting handles most of this: kitchen scraps and garden waste, turned occasionally, produce more than a few raised beds need.",
      },
      {
        type: "h2",
        text: "Start smaller than you want to",
      },
      {
        type: "p",
        text: "Two or three beds, well maintained, will supply a household with herbs, salad and seasonal vegetables and will not become a burden in July. Ten beds planted in a burst of enthusiasm in March are, reliably, ten weedy beds by August. Expand once the first season has told you how much time you actually have.",
      },
      {
        type: "quote",
        text: "Six hours of sun, 1.2m beds, compost between every crop and a timer on the drip line. That is a kitchen garden that lasts past its first summer.",
      },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredPost = sortedPosts.find((p) => p.featured) ?? sortedPosts[0];

export const otherPosts = sortedPosts.filter(
  (p) => p.slug !== featuredPost.slug,
);

export const categories = [
  "All",
  ...Array.from(new Set(sortedPosts.map((p) => p.category))),
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
