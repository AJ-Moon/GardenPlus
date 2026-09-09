import { ServiceCards } from "@/components/service-cards";
import { VideoGrid } from "@/components/video-grid";
import { segments, videosForSegment } from "@/lib/site-content";

export function ServiceSegments() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 font-serif text-3xl font-light text-foreground md:text-4xl">
            Landscaping Services
          </h2>
          <ServiceCards />
        </div>
      </section>
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 font-serif text-3xl font-light text-foreground md:text-4xl">
            Spaces We Work On
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment) => (
              <div
                key={segment.slug}
                id={segment.slug}
                className="scroll-mt-28 border-t border-border pt-6"
              >
                <h3 className="font-serif text-2xl text-foreground">
                  {segment.heading}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {segment.intro}
                </p>
                <VideoGrid
                  videos={videosForSegment(segment.id)}
                  heading="Project Videos"
                  className="mt-6"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
