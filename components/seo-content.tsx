import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fullAddress, fullOfficeAddress } from "@/lib/site-content";
import { pakistanSeoLocationLinks } from "@/lib/seo-pakistan-locations";

export function HomeSeoSection() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Landscaping Across Pakistan
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Planning a new garden or restoring an existing one? We handle site
            visits, 3D proposals, construction, planting and ongoing care for
            projects throughout Pakistan.
          </p>
          <Link
            href="/landscaping-pakistan"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Explore Pakistan Coverage{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <ul className="mt-7 flex max-w-xl flex-wrap gap-x-5 gap-y-3">
            {pakistanSeoLocationLinks.slice(0, 6).map((location) => (
              <li key={location.href}>
                <Link
                  href={location.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline"
                >
                  Landscaping in {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-foreground">
            Lahore Addresses
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            <span className="font-medium text-foreground">Gulberg Office:</span>{" "}
            {fullOfficeAddress}
          </p>
          <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
            <span className="font-medium text-foreground">Mustafa Abad:</span>{" "}
            {fullAddress}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Contact Us <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
