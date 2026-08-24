import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <main>
      <Navigation />

      {/* Dark panel so the transparent header stays legible on this page */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-primary px-6 py-32 text-center">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/70">
            Error 404
          </p>
          <h1 className="font-serif text-5xl font-light leading-tight text-primary-foreground md:text-6xl">
            This path is
            <span className="block italic">a little overgrown</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-primary-foreground/75">
            We couldn&apos;t find the page you were looking for. It may have
            moved, or the link might be out of date.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="bg-white px-8 py-4 font-medium tracking-wide text-foreground transition-all hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 px-8 py-4 font-medium tracking-wide text-white transition-all hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
