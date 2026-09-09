import { VideoGrid } from "@/components/video-grid";
import { CompletedProjectList } from "@/components/completed-project-list";
import { completedProjects } from "@/lib/completed-projects";
import { videos } from "@/lib/site-content";

export function PortfolioGallery() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-light text-foreground md:text-4xl">
            Completed Projects
          </h2>
          <CompletedProjectList projects={completedProjects} />
        </div>
      </section>
      {videos.length > 0 && (
        <section className="bg-secondary py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <VideoGrid
              videos={videos}
              eyebrow="Watch"
              heading="GardenPlus in Action"
            />
          </div>
        </section>
      )}
    </>
  );
}
