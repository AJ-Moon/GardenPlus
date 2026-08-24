import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { BlogIndex } from "@/components/blog-index";
import { blogIndexJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Landscaping, Garden Design & Plant Care Blog",
  description:
    "Read GardenPlus guides on garden design, lawn maintenance, irrigation systems, outdoor plants, indoor plants and seasonal landscaping for Lahore, Pakistan and hot climates.",
  path: "/blog",
  keywords: [
    "garden design guide Lahore",
    "outdoor plants Pakistan",
    "irrigation system guide",
  ],
});

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />
      <Navigation />

      <PageBanner
        title="GardenPlus Blog"
        subtitle="Insights & Inspiration"
        description="Expert landscaping guides, plant advice and practical seasonal care from our team"
        backgroundImage="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
      />

      <BlogIndex />

      <Footer />
    </main>
  );
}
