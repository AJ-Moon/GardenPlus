import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { ContactSection } from "@/components/contact-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact GardenPlus - Landscaping Quote in Pakistan",
  description:
    "Call, WhatsApp or email GardenPlus for landscaping projects across Pakistan. Visit the Gulberg office or contact the Mustafa Abad location in Lahore.",
  path: "/contact",
  keywords: ["landscaping quote Lahore", "garden maintenance near me"],
});

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch"
        description="Tell us about your project and get a free quote within 24 hours"
        backgroundImage="/gardenplus-work/garden-pergola.jpg"
        imageAlt="GardenPlus garden pavilion surrounded by lawn and planting"
      />

      <ContactSection />

      <Footer />
    </main>
  );
}
