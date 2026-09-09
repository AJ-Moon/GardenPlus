import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landscapeServices } from "@/lib/services";

export function ServiceCards({ preview = false }: { preview?: boolean }) {
  const services = preview
    ? landscapeServices.filter((service) =>
        [
          "landscape-design-planning",
          "soft-landscaping",
          "irrigation-systems",
          "landscape-maintenance",
        ].includes(service.slug),
      )
    : landscapeServices;

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${preview ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {services.map((service) => (
        <article
          key={service.slug}
          id={service.slug}
          className="flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-lg border border-border bg-card"
        >
          <Link
            href={service.href}
            className="group relative block aspect-[4/3] overflow-hidden focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={service.title}
          >
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes={
                preview
                  ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
              style={{ objectPosition: service.imagePosition }}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-serif text-2xl leading-tight text-foreground">
              <Link
                href={service.href}
                className="hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
              >
                {service.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-medium text-primary hover:underline"
            >
              View service{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span className="sr-only">: {service.title}</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
