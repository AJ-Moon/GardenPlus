import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { createPageMetadata, absoluteUrl } from "@/lib/seo";
import { completedProjects } from "@/lib/completed-projects";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping Portfolio - Gardens, Lawns, Parks & Corporate Grounds",
  description:
    "View GardenPlus residential garden design, commercial landscaping, corporate grounds, irrigation, lawn and large-scale landscape projects in Lahore and Pakistan.",
  path: "/portfolio",
  keywords: [
    "landscaping portfolio Pakistan",
    "garden design projects Lahore",
    "commercial landscaping projects",
  ],
});

export default function PortfolioPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Our Portfolio"
        subtitle="Our Work"
        description="Completed work for residences, factories, offices, schools and housing schemes."
        backgroundImage="/gardenplus-work/landscape-courtyard.jpg"
        imageAlt="GardenPlus courtyard landscape with geometric paving and a pavilion"
      />

      <PortfolioGallery />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "GardenPlus Completed Projects",
            url: absoluteUrl("/portfolio"),
            numberOfItems: completedProjects.length,
            itemListElement: completedProjects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.detail
                ? `${project.name} — ${project.detail}`
                : project.name,
            })),
          }),
        }}
      />

      <Footer />
    </main>
  );
}
