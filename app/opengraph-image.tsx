import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-content";

// Social share card, generated at build time — no image file to maintain.
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1a3a2a 0%, #2d5a41 100%)",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "#f7f6f1",
              color: "#1a3a2a",
              fontSize: 48,
              fontWeight: 600,
            }}
          >
            G
          </div>
          <div
            style={{
              color: "#f7f6f1",
              fontSize: 56,
              letterSpacing: "0.02em",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: 82,
            textAlign: "center",
            lineHeight: 1.1,
            fontStyle: "italic",
          }}
        >
          Grow Beautiful. Live Green.
        </div>

        <div
          style={{
            marginTop: 40,
            color: "rgba(247, 246, 241, 0.72)",
            fontSize: 30,
            textAlign: "center",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Landscaping &amp; Gardening · Lahore
        </div>
      </div>
    ),
    size,
  );
}
