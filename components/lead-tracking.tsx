"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackLead } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Site-wide lead tracking. One delegated listener records clicks on any
 * WhatsApp, tel: or mailto: link (header, footer, floating button, CTAs), so
 * no component needs its own handler. Loads GA4 only when the measurement ID
 * env var is set in Vercel.
 */
export function LeadTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        trackLead("click_whatsapp");
      } else if (href.startsWith("tel:")) {
        trackLead("click_call");
      } else if (href.startsWith("mailto:")) {
        trackLead("click_email");
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
