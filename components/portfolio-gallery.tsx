"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Lightbox } from "@/components/lightbox";
import { VideoGrid } from "@/components/video-grid";
import {
  allProjects,
  projectCategories,
  videos,
  type Project,
} from "@/lib/site-content";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mb-16 flex flex-wrap justify-center gap-3"
          >
            {projectCategories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  // whileInView (rather than animate) so cards far below the
                  // fold don't all animate at mount — cheaper with 24 items,
                  // and each card animates when it's actually seen.
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={`View larger image: ${project.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="mb-1 block text-xs uppercase tracking-widest text-white/70">
                          {project.category}
                        </span>
                        <span className="block font-serif text-xl text-white">
                          {project.title}
                        </span>
                      </span>
                    </div>
                    {/* Always-visible caption for touch devices, where hover
                        states never trigger. */}
                    <div className="mt-4 lg:hidden">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {project.category}
                      </p>
                      <h3 className="font-serif text-lg text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Videos — hidden entirely until real footage is added */}
      {videos.length > 0 && (
        <section className="py-24 md:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <VideoGrid
              videos={videos}
              eyebrow="Watch"
              heading="GardenPlus in Action"
            />
          </div>
        </section>
      )}

      <Lightbox
        image={selected?.image ?? null}
        caption={selected?.title}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
