import { VideoGrid } from "@/components/video-grid";
import { videos } from "@/lib/site-content";

/**
 * Homepage video strip.
 * Renders nothing until videos are added to `videos` in lib/site-content.ts.
 */
export function VideoShowcase() {
  if (videos.length === 0) return null;

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <VideoGrid
          videos={videos.slice(0, 3)}
          eyebrow="Behind the Scenes"
          heading="See GardenPlus in Action"
        />
      </div>
    </section>
  );
}
