"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-content";

/**
 * Newsletter signup.
 *
 * This opens the visitor's email client with a pre-filled subscription
 * request — no mailing-list service required, so it works from day one.
 * If you later sign up for Mailchimp/Brevo/Resend Audiences, swap the
 * handleSubmit body for a POST to your provider.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    const subject = encodeURIComponent("GardenPlus Newsletter Subscription");
    const body = encodeURIComponent(
      `Please subscribe this email to the GardenPlus newsletter:\n\n${cleanEmail}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setDone(true);
    setEmail("");
  };

  return (
    <div className="mt-16 rounded-2xl border border-border bg-secondary p-8 text-center md:p-10">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Stay Updated
      </p>
      <h2 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">
        Get Landscaping Tips in Your Inbox
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
        Join our newsletter for seasonal care checklists, design ideas and
        project inspiration from GardenPlus.
      </p>

      {done ? (
        <p role="status" className="font-medium text-primary">
          Thanks! Just send the email that opened to confirm your subscription.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
          noValidate
        >
          <div className="flex-1 text-left">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "newsletter-error" : undefined}
              className="w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            {error && (
              <p
                id="newsletter-error"
                role="alert"
                className="mt-2 text-sm text-destructive"
              >
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="h-fit bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
