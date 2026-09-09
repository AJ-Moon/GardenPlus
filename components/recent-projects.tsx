import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { completedProjects } from "@/lib/completed-projects";
import { CompletedProjectList } from "@/components/completed-project-list";

export function RecentProjects() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Our Work
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Completed Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Projects{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <CompletedProjectList projects={completedProjects.slice(0, 6)} />
      </div>
    </section>
  );
}
