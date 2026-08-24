import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/lib/site-content";

// ============================================================================
// CONTACT FORM HANDLER
// ----------------------------------------------------------------------------
// Sends each enquiry to your inbox using Resend (https://resend.com — the free
// tier covers 3,000 emails/month, which is far more than this form will use).
//
// SETUP (about 5 minutes):
//   1. Create a free account at resend.com
//   2. Add and verify your domain (Resend walks you through the DNS records)
//   3. Create an API key
//   4. In Vercel → Project → Settings → Environment Variables, add:
//        RESEND_API_KEY   = re_xxxxxxxxxxxx
//        CONTACT_TO_EMAIL = gardenpluslahore@hotmail.com
//        CONTACT_FROM_EMAIL = website@yourdomain.com   (must be on the domain
//                             you verified in step 2)
//
// Until those are set the route returns 503 and the form automatically falls
// back to WhatsApp, so no enquiry is ever silently lost.
// ============================================================================

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please tell us a little more").max(5000),
  // Honeypot: real users never fill this in, bots usually do. It must stay
  // permissive here so a filled-in value reaches the silent-accept check
  // below rather than returning a validation error that teaches bots the
  // field exists.
  company: z.string().max(200).optional(),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_request", message: "Malformed request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "validation_failed",
        message:
          parsed.error.issues[0]?.message ?? "Please check the form and retry.",
      },
      { status: 400 },
    );
  }

  const { name, email, phone, projectType, message, company } = parsed.data;

  // Honeypot tripped — accept silently so bots don't learn anything.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    // Not configured yet — the form falls back to WhatsApp on the client.
    return NextResponse.json(
      {
        error: "not_configured",
        message: "Email delivery is not set up yet.",
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Project type", projectType || "—"],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:600px">
      <h2 style="color:#1a3a2a;margin:0 0 4px">New enquiry from the website</h2>
      <p style="color:#666;margin:0 0 24px;font-size:14px">
        Received ${new Date().toLocaleString("en-GB", { timeZone: "Asia/Karachi" })} (PKT)
      </p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px 8px 0;color:#666;font-size:14px;white-space:nowrap;vertical-align:top">${label}</td>
            <td style="padding:8px 0;color:#111;font-size:14px"><strong>${escapeHtml(value)}</strong></td>
          </tr>`,
          )
          .join("")}
      </table>
      <div style="padding:16px;background:#f5f5f0;border-left:3px solid #1a3a2a">
        <p style="margin:0 0 8px;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:1px">Message</p>
        <p style="margin:0;color:#111;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `GardenPlus Website <${from}>`,
        to: [to],
        reply_to: email,
        subject: `New enquiry — ${name}${projectType ? ` (${projectType})` : ""}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend request failed:", response.status, detail);
      return NextResponse.json(
        { error: "send_failed", message: "We couldn't send your message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "send_failed", message: "We couldn't send your message." },
      { status: 502 },
    );
  }
}
