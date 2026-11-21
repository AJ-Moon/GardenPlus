import { track } from "@vercel/analytics";

/**
 * Lead events, sent to GA4 (when NEXT_PUBLIC_GA_MEASUREMENT_ID is set) and to
 * Vercel Web Analytics custom events (recorded on Vercel plans that support
 * them; otherwise ignored).
 *
 * Event names follow GA4's recommended "generate_lead" for completed quote
 * requests so it can be marked as a key event. Never pass names, phone numbers,
 * emails or message text here: only the page path and coarse labels.
 */
export type LeadEvent =
  | "generate_lead" // quote form accepted by /api/contact
  | "quote_whatsapp_fallback" // form could not email; visitor offered WhatsApp
  | "click_whatsapp"
  | "click_call"
  | "click_email";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function trackLead(
  event: LeadEvent,
  params: Record<string, string> = {},
) {
  if (typeof window === "undefined") return;
  const payload = { page_path: window.location.pathname, ...params };
  try {
    (window as GtagWindow).gtag?.("event", event, payload);
  } catch {}
  try {
    track(event, payload);
  } catch {}
}
