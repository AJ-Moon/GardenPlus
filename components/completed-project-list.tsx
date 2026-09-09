import { type CompletedProject } from "@/lib/completed-projects";

export function CompletedProjectList({
  projects,
}: {
  projects: CompletedProject[];
}) {
  return (
    <ol className="grid gap-x-12 md:grid-cols-2">
      {projects.map((project, index) => (
        <li
          key={`${project.name}-${project.detail ?? ""}`}
          className="flex min-w-0 gap-4 border-b border-border py-6"
        >
          <span
            aria-hidden="true"
            className="w-7 shrink-0 pt-1 text-sm tabular-nums text-primary"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="font-serif text-xl leading-7 text-foreground">
              {project.name}
            </h3>
            {project.detail && (
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {project.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
