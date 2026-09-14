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
  keywords: [
    "landscaping quote Pakistan",
    "landscape design consultation Pakistan",
    "landscaping quote Lahore",
    "landscaping company contact Pakistan",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch"
        description="Tell us your project location, scope and requirements to request a landscaping quotation"
        backgroundImage="/gardenplus-work/garden-pergola.jpg"
        imageAlt="GardenPlus garden pavilion surrounded by lawn and planting"
      />

      <ContactSection />

      <Footer />
    </main>
  );
}
