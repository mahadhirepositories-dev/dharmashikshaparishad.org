import { NextResponse } from "next/server";

type ApplicationPayload = {
  fullName: string;
  email: string;
  phone?: string;
  city: string;
  state: string;
  motivation: string;
  website?: string; // honeypot — real users never fill this
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(body: unknown): { data?: ApplicationPayload; error?: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid request body." };
  }
  const b = body as Record<string, unknown>;
  const str = (v: unknown, max: number) =>
    typeof v === "string" && v.trim().length > 0 && v.trim().length <= max
      ? v.trim()
      : undefined;

  const fullName = str(b.fullName, 120);
  const email = str(b.email, 200);
  const city = str(b.city, 100);
  const state = str(b.state, 100);
  const motivation = str(b.motivation, 3000);
  const phone = typeof b.phone === "string" ? b.phone.trim().slice(0, 30) : "";
  const website = typeof b.website === "string" ? b.website.trim() : "";

  if (!fullName) return { error: "Please enter your full name." };
  if (!email || !EMAIL_RE.test(email))
    return { error: "Please enter a valid email address." };
  if (!city || !state) return { error: "Please enter your city and state." };
  if (!motivation)
    return { error: "Please tell us why you wish to volunteer." };

  return { data: { fullName, email, phone, city, state, motivation, website } };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { data, error } = validate(body);
  if (!data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  // Honeypot tripped: pretend success so bots learn nothing.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox =
    process.env.APPLICATION_INBOX ?? "contact@dharmashikshaparishad.org";

  if (!apiKey) {
    return NextResponse.json(
      { error: "not-configured" },
      { status: 503 },
    );
  }

  const text = [
    `New volunteer application received via dharmashikshaparishad.org`,
    ``,
    `Name:      ${data.fullName}`,
    `Email:     ${data.email}`,
    `Phone:     ${data.phone || "—"}`,
    `Location:  ${data.city}, ${data.state}`,
    ``,
    `Why they wish to volunteer:`,
    data.motivation,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.APPLICATION_FROM ??
        "Volunteer Applications <onboarding@resend.dev>",
      to: [inbox],
      reply_to: data.email,
      subject: `Volunteer application — ${data.fullName}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend API error", res.status, await res.text());
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
