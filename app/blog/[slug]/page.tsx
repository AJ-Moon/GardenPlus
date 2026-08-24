import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { posts, getPost, sortedPosts, formatDate } from "@/lib/blog";
import { siteConfig } from "@/lib/site-content";
import { absoluteUrl, breadcrumbJsonLd, primaryKeywords } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, ...primaryKeywords],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.name],
      section: post.category,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const index = sortedPosts.findIndex((p) => p.slug === post.slug);
  const previous = sortedPosts[index - 1];
  const next = sortedPosts[index + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <main>
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbs]) }}
      />

      {/* Hero */}
      <header className="relative flex h-[65vh] min-h-[420px] w-full items-end overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/75">
            {post.category}
          </p>
          <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-white/70">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="mb-12 border-l-2 border-primary/40 pl-6 font-serif text-xl leading-relaxed text-foreground/80 md:text-2xl">
            {post.excerpt}
          </p>

          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-8 font-serif text-3xl font-light text-foreground"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "p") {
                return (
                  <p
                    key={i}
                    className="leading-8 text-muted-foreground md:text-[17px]"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        <span className="leading-8 text-muted-foreground md:text-[17px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <blockquote
                  key={i}
                  className="my-10 border-l-2 border-accent bg-secondary/60 py-6 pl-6 pr-4 font-serif text-xl italic leading-relaxed text-foreground"
                >
                  {block.text}
                </blockquote>
              );
            })}
          </div>

          {/* Post navigation */}
          <nav
            aria-label="More articles"
            className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`/blog/${previous.slug}`}
                className="group border border-border p-6 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  Newer
                </span>
                <span className="block font-serif text-lg leading-snug text-foreground">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group border border-border p-6 text-right transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:col-start-2"
              >
                <span className="mb-3 flex items-center justify-end gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Older
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="block font-serif text-lg leading-snug text-foreground">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <CTASection />

      <Footer />
    </main>
  );
}
