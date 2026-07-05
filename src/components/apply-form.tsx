"use client";

import { useState } from "react";
import { CircleAlert, LoaderCircle, Send, BadgeCheck } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const inputClass =
  "w-full rounded-xl border border-gold/40 bg-parchment px-4 py-3 text-bark placeholder:text-bark-soft/60 focus:border-gold-deep";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const body = await res.json().catch(() => ({}));
      if (res.status === 503 && body.error === "not-configured") {
        setStatus("not-configured");
        return;
      }
      setErrorMessage(
        typeof body.error === "string"
          ? body.error
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-parchment p-10 text-center shadow-sm"
      >
        <BadgeCheck className="h-12 w-12 text-gold-deep" aria-hidden="true" />
        <h3 className="font-display text-3xl font-semibold text-ink">
          Application received
        </h3>
        <p className="max-w-md leading-relaxed text-bark">
          Thank you for stepping forward. You will receive the Volunteer Manual
          and next steps by email once your application has been reviewed.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gold/30 bg-parchment p-6 shadow-sm sm:p-10"
      noValidate={false}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="mb-2 block font-bold text-ink">
            Full name <span aria-hidden="true" className="text-gold-deep">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-bold text-ink">
            Email <span aria-hidden="true" className="text-gold-deep">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block font-bold text-ink">
            Phone <span className="font-normal text-bark-soft">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            placeholder="+91"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className="mb-2 block font-bold text-ink">
            City / District <span aria-hidden="true" className="text-gold-deep">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            maxLength={100}
            autoComplete="address-level2"
            placeholder="e.g. Chennai"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="state" className="mb-2 block font-bold text-ink">
            State <span aria-hidden="true" className="text-gold-deep">*</span>
          </label>
          <input
            id="state"
            name="state"
            type="text"
            required
            maxLength={100}
            autoComplete="address-level1"
            placeholder="e.g. Tamil Nadu"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="motivation" className="mb-2 block font-bold text-ink">
            Why do you wish to volunteer?{" "}
            <span aria-hidden="true" className="text-gold-deep">*</span>
          </label>
          <textarea
            id="motivation"
            name="motivation"
            required
            rows={5}
            maxLength={3000}
            placeholder="Tell us briefly about your interest in serving Sanatana Dharma…"
            className={inputClass}
          />
        </div>

        {/* Honeypot — hidden from real users, catches naive bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="mb-3 font-bold text-ink">
            Declarations <span aria-hidden="true" className="text-gold-deep">*</span>
          </legend>
          <div className="space-y-3">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                required
                name="declEligibility"
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#9a5f00]"
              />
              <span className="leading-relaxed text-bark">
                I identify as Hindu, am at least 18 years of age, respect
                Sanatana Dharma, and am willing to learn.
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                required
                name="declPolicies"
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#9a5f00]"
              />
              <span className="leading-relaxed text-bark">
                I agree to follow the organization&rsquo;s policies and code of
                conduct, and I understand that volunteering involves no fees,
                no donations, and no payment of any kind.
              </span>
            </label>
          </div>
        </fieldset>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 flex items-center gap-2 rounded-xl border border-red-800/30 bg-red-800/5 px-4 py-3 font-medium text-red-900"
        >
          <CircleAlert className="h-5 w-5 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      )}

      {status === "not-configured" && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 leading-relaxed text-bark"
        >
          Online submission is not available right now. Please email your
          application directly to{" "}
          <a
            href="mailto:contact@dharmashikshaparishad.org?subject=Volunteer%20Application"
            className="font-bold text-gold-deep underline underline-offset-2"
          >
            contact@dharmashikshaparishad.org
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-gold px-8 py-4 text-lg font-bold text-ink shadow-lg shadow-amber/20 transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            Submit Application
            <Send className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
