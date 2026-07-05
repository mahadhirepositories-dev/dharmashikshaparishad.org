import type { Metadata } from "next";
import { BookOpen, ClipboardCheck, GraduationCap, ShieldCheck } from "lucide-react";
import { ApplyForm } from "@/components/apply-form";

export const metadata: Metadata = {
  title: "Apply to Volunteer",
  description:
    "Apply to become a volunteer of Dharma Shiksha Parishad. Open to Hindus aged 18 and above who respect Sanatana Dharma and are willing to learn. No fees, no donations — selection through a six-stage merit-based process.",
  alternates: {
    canonical: "/apply",
  },
  openGraph: {
    title: "Apply to Volunteer | Dharma Shiksha Parishad",
    description:
      "Join a disciplined Pan-India network of volunteers preserving, educating, and upholding Sanatana Dharma. Zero fees, merit-based selection.",
  },
};

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Apply",
    text: "Submit this form. Applications are reviewed by the organization.",
  },
  {
    icon: BookOpen,
    title: "2. Study",
    text: "Receive the Volunteer Manual and study it at your own pace.",
  },
  {
    icon: GraduationCap,
    title: "3. Assessment",
    text: "Score 80% or above in an online examination on the manual.",
  },
  {
    icon: ShieldCheck,
    title: "4. Induction",
    text: "On evaluation, successful applicants are formally inducted.",
  },
];

export default function ApplyPage() {
  return (
    <main id="main">
      <section
        aria-labelledby="apply-heading"
        className="relative overflow-hidden bg-ink text-center text-cream"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,160,60,0.25), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24">
          <p className="font-deva text-2xl text-gold-pale" lang="sa">
            सेवा परमो धर्मः
          </p>
          <h1
            id="apply-heading"
            className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            Volunteer{" "}
            <span className="bg-gradient-to-r from-gold-pale via-amber to-gold bg-clip-text text-transparent">
              Application
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Becoming a volunteer costs nothing — and asks everything of your
            sincerity. Fill in the form below to begin the six-stage induction
            journey.
          </p>
        </div>
      </section>

      <section aria-label="Application process overview" className="border-b border-gold/20 bg-parchment-deep/60">
        <ol className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink">
                <Icon className="h-5 w-5 text-gold-pale" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-heading">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-bark">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Application form">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <ApplyForm />
          <p className="mt-6 text-center text-sm leading-relaxed text-bark-soft">
            Dharma Shiksha Parishad never charges fees or solicits donations.
            Your details are used solely to process your volunteer application.
          </p>
        </div>
      </section>
    </main>
  );
}
