# GardenPlus Content and SEO Update

## Research

Semrush reports executed on 9 September 2026:

- `phrase_organic`, database `pk`, keyword `landscaping services`, first 10 results.
- `phrase_these`, database `pk`, service and article topics.

These are Semrush estimates and its stored SERP results, not GardenPlus's
Search Console impressions or a live rank guarantee.

| Keyword              | Estimated monthly Pakistan searches | Keyword difficulty |
| -------------------- | ----------------------------------: | -----------------: |
| landscaping services |                                 480 |                 17 |
| garden design        |                                 590 |                 57 |
| lawn care            |                                 390 |                 39 |
| garden maintenance   |                                  20 |                  0 |
| irrigation system    |                                 390 |                 37 |
| drip irrigation      |                                 880 |                 47 |
| landscape lighting   |                                  30 |                  0 |
| pergola              |                                1000 |                 41 |
| indoor plants        |                                4400 |                 54 |

Garden drainage did not return a row. Missing data is not evidence of zero
demand. Broad topics such as pergolas and indoor plants include searches that
are not service enquiries; volume alone does not establish commercial intent.

## Competitor Review

Semrush's Pakistan results included Gardenia, Fins Ferns N Feathers, eTree Lawn
Care, Rising Green and Plants n Pot. The first two pages below were read along
with Rising Green's homepage.

| Competitor                                                                            | Observed approach                                                                            | GardenPlus response                                                               |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Gardenia](https://www.gardenia.com.pk/)                                              | Detailed service navigation for maintenance, softscape, civil works, lighting and irrigation | Match the owner's 11 service names with clear descriptions and direct links       |
| [Fins Ferns N Feathers](https://finsfernsfeathers.com/services/landscaping-services/) | Lahore-focused service page and service photography, with repeated promotional paragraphs    | Keep local relevance, add subject-specific photographs and shorten repetition     |
| [Rising Green](https://risinggreen.com.pk/)                                           | Appeared in Semrush's landscaping-services results                                           | Include in the competitor set; do not infer its traffic or conversion performance |

No competitor text, client names or project photos were copied. The new
articles answer different planning questions rather than creating ten pages
for variations of the same keyword.

## Implemented

- Exact supplied address in shared contact information, maps and structured data.
- Address-based map search replaces the obsolete pin; no new coordinates guessed.
- All 11 owner-supplied services, including the specified one-year design warranty.
- All 33 completed projects in the supplied order, without years or stock project photos.
- Real stock photographs for services, stored locally with descriptive alt text.
- Ten new Pakistan-focused guides, linked to services and back from relevant service pages.
- Existing blog URLs and service URLs retained, with five service routes added.
- Shorter homepage and services copy; repeated visible keyword lists removed.
- Pakistan business targeting; unsupported Gulf coverage removed from shared schema.
- Service schema follows the current catalogue; Lahore FAQ schema matches visible answers.
- New articles have distinct titles, descriptions, canonical URLs and BlogPosting data.
- Sitemap includes new routes and image URLs; modification dates are stable between builds.
- Sitemap remains declared in robots.txt. The nonstandard Host directive was removed.
- `llms.txt` now follows the current proposal's H1, blockquote and linked-section format.
- `llms-full.txt` supplies factual business, service, project and article evidence.
- HTML and response headers advertise `llms.txt` with `rel="describedby"`.
- OAI-SearchBot and PerplexityBot are explicitly allowed in robots.txt.

The existing colours, fonts, main page order, contact workflow and unrelated
company content were retained. Other historical service and area pages remain
accessible to preserve existing links.

## Scope of Verification

Production build and TypeScript checks, followed by browser checks of service
and project counts, internal routes, image loading, canonical URLs, structured
data, blog filtering and desktop/mobile layout. Search Console indexing and
ranking were not measured by this update. Sitemap availability makes URLs
discoverable; it does not guarantee indexing, rankings or AI recommendations.
