import Image from "next/image";
import { VideoGrid } from "@/components/video-grid";
import type { Video } from "@/lib/site-content";

type ProjectImage = {
  src: string;
  alt: string;
};

type ServiceProjectMediaProps = {
  images: ProjectImage[];
  videos?: Video[];
  title?: string;
  description?: string;
  tone?: "background" | "secondary";
};

export function ServiceProjectMedia({
  images,
  videos = [],
  title = "Real GardenPlus Work",
  description = "Selected photographs and videos supplied by GardenPlus from completed landscapes and design work.",
  tone = "background",
}: ServiceProjectMediaProps) {
  if (images.length === 0 && videos.length === 0) return null;

  return (
    <section
      className={`${tone === "secondary" ? "bg-secondary" : "bg-background"} py-20 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Project Media
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 leading-8 text-muted-foreground">{description}</p>
        </div>

        {images.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <figure
                key={`${image.src}-${image.alt}`}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <VideoGrid
            videos={videos}
            heading="Project Videos"
            className={images.length > 0 ? "mt-16" : ""}
          />
        )}
      </div>
    </section>
  );
}
