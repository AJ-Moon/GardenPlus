"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock background scrolling while the mobile menu is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              aria-label="GardenPlus — home"
            >
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="font-serif text-lg font-semibold text-primary-foreground">
                    G
                  </span>
                </span>
                <span
                  className={`font-serif text-xl font-medium tracking-wide transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  GardenPlus
                </span>
              </motion.span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-1 text-sm font-medium tracking-wide transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                      scrolled
                        ? active
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                        : active
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className={`absolute -bottom-0.5 left-0 right-0 h-px ${
                          scrolled ? "bg-primary" : "bg-white"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="shrink-0 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden rounded-sm p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-background shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border p-6">
                  <span className="font-serif text-xl font-medium text-foreground">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-sm p-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 py-8">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          aria-current={isActive(link.href) ? "page" : undefined}
                          className={`block rounded-sm py-3 text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            isActive(link.href)
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-border p-6">
                  <Link
                    href="/contact"
                    className="block w-full rounded-sm bg-primary py-3 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
