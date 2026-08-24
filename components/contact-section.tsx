"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from "lucide-react";
import {
  siteConfig,
  mapEmbedUrl,
  mapLinkUrl,
  whatsappUrl,
} from "@/lib/site-content";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [siteConfig.address.line1, siteConfig.address.line2],
  },
  { icon: Phone, title: "Call Us", details: [siteConfig.phone] },
  { icon: Mail, title: "Email Us", details: [siteConfig.email] },
  { icon: Clock, title: "Business Hours", details: [...siteConfig.hours] },
];

const projectTypes = [
  "Lawn Maintenance",
  "Garden Design",
  "Plant Supply",
  "Irrigation Systems",
  "Outdoor Landscaping",
  "Corporate / Commercial",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  company: "", // honeypot
};

type Status = "idle" | "sending" | "sent" | "error" | "fallback";

const inputClass =
  "w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20";

export function ContactSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData(emptyForm);
        return;
      }

      const data = await response.json().catch(() => ({}));

      // Email isn't configured (or the provider is down) — offer WhatsApp
      // rather than pretending the message went through.
      if (response.status === 503 || response.status === 502) {
        setStatus("fallback");
        return;
      }

      setStatus("error");
      setErrorMessage(data.message ?? "Please check the form and try again.");
    } catch {
      setStatus("fallback");
    }
  };

  // Pre-fills WhatsApp with whatever the visitor already typed.
  const fallbackMessage = [
    `Hi GardenPlus, I'd like a quote.`,
    ``,
    `Name: ${formData.name || "—"}`,
    `Email: ${formData.email || "—"}`,
    formData.phone ? `Phone: ${formData.phone}` : null,
    formData.projectType ? `Project: ${formData.projectType}` : null,
    ``,
    formData.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Send a Message
            </p>
            <h2 className="mb-8 font-serif text-4xl md:text-5xl font-light leading-tight text-foreground">
              Request a<span className="block italic">Free Quote</span>
            </h2>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-primary/20 bg-primary/10 p-8 text-center"
                role="status"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-2xl text-foreground">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your message and will get back to you with
                  a free quote within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-medium text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : status === "fallback" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-border bg-secondary p-8"
                role="status"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <AlertCircle className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mb-3 font-serif text-2xl text-foreground">
                  Let&apos;s move this to WhatsApp
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Our email system isn&apos;t reachable right now, and we
                  don&apos;t want your enquiry to disappear. Tap below and
                  we&apos;ll have your details straight away — or call us
                  directly.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl(fallbackMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Send on WhatsApp
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="inline-flex items-center justify-center border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-primary hover:underline"
                >
                  Back to the form
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Full Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email Address <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={siteConfig.phone}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Message <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Honeypot — hidden from people, tempting to bots */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Company (leave blank)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-center gap-2 border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Details & map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="border border-border bg-secondary p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-medium text-foreground">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">
                        {item.title === "Call Us" ? (
                          <a
                            href={`tel:${siteConfig.phoneHref}`}
                            className="hover:text-primary"
                          >
                            {detail}
                          </a>
                        ) : item.title === "Email Us" ? (
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="break-all hover:text-primary"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-border bg-secondary">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing the ${siteConfig.name} office location`}
              />
            </div>

            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <MapPin className="h-4 w-4" />
              Open location in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
