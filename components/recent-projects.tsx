import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { featuredProjects } from "@/lib/site-content";

export function RecentProjects() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our Work
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group mt-6 inline-flex items-center gap-2 font-medium tracking-wide text-foreground md:mt-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <Link
                href="/portfolio"
                className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
