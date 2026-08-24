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
    image: stock("photo-1595351298020-038700609878"),
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
