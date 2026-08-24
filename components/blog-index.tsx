"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  categories,
  featuredPost,
  otherPosts,
  formatDate,
} from "@/lib/blog";
import { NewsletterForm } from "@/components/newsletter-form";

export function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePosts =
    activeCategory === "All"
      ? otherPosts
      : otherPosts.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={featuredPost.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Featured Article
            </p>
            <h2 className="mb-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {featuredPost.title}
              </Link>
            </h2>
            <p className="mb-6 leading-7 text-muted-foreground">
              {featuredPost.excerpt}
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              <span>{featuredPost.category}</span>
              <span aria-hidden="true">·</span>
              <span>{featuredPost.readTime}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={featuredPost.date}>
                {formatDate(featuredPost.date)}
              </time>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group inline-flex w-fit items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Read Article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.article>

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Filter articles by category"
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Post grid */}
        {visiblePosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.14em] text-primary">
                      {post.category}
                    </p>
                    <h3 className="mb-3 font-serif text-2xl leading-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted-foreground">
            No articles in this category yet.
          </p>
        )}

        <NewsletterForm />
      </div>
    </section>
  );
}
