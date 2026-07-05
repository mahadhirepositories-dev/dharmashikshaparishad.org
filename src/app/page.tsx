import {
  ArrowRight,
  Ban,
  BookMarked,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Flame,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Landmark,
  Library,
  Megaphone,
  Network,
  Scale,
  Shield,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { faqs, selectionStages, values } from "@/lib/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="main">
        <Hero />
        <About />
        <VisionMission />
        <Activities />
        <ValuesBand />
        <VolunteerJourney />
        <ZeroFeePolicy />
        <Structure />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-ink text-parchment"
    >
      {/* Atmosphere: radial glow + slowly rotating chakra ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,160,60,0.28), transparent 65%)",
        }}
      />
      <ChakraRing className="chakra-ring pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32">
        <p className="rise rise-1 font-deva text-2xl text-gold-pale md:text-3xl" lang="sa">
          धर्मो रक्षति रक्षितः
        </p>
        <p className="rise rise-1 mt-2 text-sm italic tracking-wide text-parchment/60">
          Dharma protects those who protect it — Manusmṛti 8.15
        </p>

        <h1
          id="hero-heading"
          className="rise rise-2 mt-8 font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl md:text-7xl"
        >
          Preserving, Educating &amp;
          <span className="block bg-gradient-to-r from-gold-pale via-amber to-gold bg-clip-text text-transparent">
            Upholding Sanatana Dharma
          </span>
        </h1>

        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-parchment/80 md:text-xl">
          Dharma Shiksha Parishad is a professional non-profit organization
          building a disciplined Pan-India network of committed volunteers —
          educators, torchbearers, and custodians of authentic dharmic
          knowledge for generations to come.
        </p>

        <div className="rise rise-4 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#volunteer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-amber to-gold px-8 py-4 text-lg font-bold text-ink shadow-lg shadow-amber/20 transition-opacity duration-200 hover:opacity-90"
          >
            Become a Volunteer
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#about"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-lg font-semibold text-gold-pale transition-colors duration-200 hover:border-gold hover:bg-gold/10"
          >
            Explore Our Mission
          </a>
        </div>

        <ul className="rise rise-5 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium tracking-wide text-parchment/70">
          {[
            "Zero fees, zero fundraising",
            "Strictly non-political",
            "Pan-India volunteer network",
            "Merit-based advancement",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ChakraRing({ className }: { className?: string }) {
  const wheels = Array.from({ length: 18 }, (_, i) => (i * 360) / 18);
  return (
    <svg viewBox="0 0 1000 1000" className={className} aria-hidden="true">
      <circle
        cx="500"
        cy="500"
        r="380"
        fill="none"
        stroke="#c9a03c"
        strokeWidth="1.5"
        strokeDasharray="4 14"
      />
      {wheels.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 500 500) translate(500 120)`}>
          <circle r="26" fill="none" stroke="#c9a03c" strokeWidth="2" />
          <circle r="5" fill="#c9a03c" />
          {Array.from({ length: 8 }, (_, s) => (
            <line
              key={s}
              x1="0"
              y1="0"
              x2={26 * Math.cos((s * Math.PI) / 4)}
              y2={26 * Math.sin((s * Math.PI) / 4)}
              stroke="#c9a03c"
              strokeWidth="1.5"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------- Placeholder ------------------------------- */

function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure
      role="img"
      aria-label={`Placeholder — ${label}`}
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gold/50 bg-parchment-deep/70 p-6 text-center ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-gold-deep/60" aria-hidden="true" />
      <figcaption className="max-w-xs text-sm font-medium leading-snug text-bark-soft">
        {label}
      </figcaption>
    </figure>
  );
}

/* -------------------------------- Section bits ------------------------------ */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold-deep">
      {children}
    </p>
  );
}

function SectionHeading({
  id,
  children,
  light = false,
}: {
  id: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      id={id}
      className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${
        light ? "text-parchment" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}

/* ---------------------------------- About ---------------------------------- */

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <div>
          <Kicker>Who We Are</Kicker>
          <SectionHeading id="about-heading">
            An institution in service of an eternal tradition
          </SectionHeading>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-bark">
            <p>
              <strong>Dharma Shiksha Parishad</strong> was established to
              preserve traditional dharmic knowledge, educate Hindus about
              their spiritual and cultural heritage, address misinformation
              and distortions relating to Sanatana Dharma, and nurture future
              generations of dharmic volunteers and leaders.
            </p>
            <p>
              We believe meaningful and lasting change comes through{" "}
              <em>education, awareness, discipline, and collective effort</em>{" "}
              — not noise. Our aim is to grow from a strong organization into
              a movement: a disciplined network of committed volunteers
              safeguarding and strengthening Sanatana Dharma throughout
              Bharat.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Shield, text: "Professional, policy-driven non-profit" },
              { icon: HeartHandshake, text: "Entirely volunteer-powered seva" },
              { icon: Scale, text: "Equal opportunity, merit alone" },
              { icon: Flame, text: "Authenticity over popularity" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Icon className="h-5 w-5 text-gold-deep" aria-hidden="true" />
                </span>
                <span className="font-medium text-bark">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder
          label="Image: volunteers gathered for a dharma study circle — replace with an authentic photograph of an educational session"
          aspect="aspect-[4/3.4]"
        />
      </div>
    </section>
  );
}

/* ------------------------------ Vision & Mission ---------------------------- */

function VisionMission() {
  const missions = [
    "Preserve traditional Sanatana Dharma knowledge and values",
    "Educate Hindus regarding their spiritual and cultural heritage",
    "Address misinformation and distortion relating to Sanatana Dharma",
    "Promote dharmic awareness among youth",
    "Nurture future dharmic volunteers, leaders, and educators",
    "Encourage responsible, informed engagement with Sanatana Dharma",
  ];
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="scroll-mt-24 border-y border-gold/20 bg-parchment-deep/60"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Vision &amp; Mission</Kicker>
          <SectionHeading id="mission-heading">
            A Pan-India movement of dharmic educators
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-bark">
            Our vision is to build a strong Pan-India organization that
            gradually develops into a larger movement — a disciplined network
            of committed volunteers and future torchbearers of Sanatana Dharma
            capable of creating meaningful, lasting impact throughout Bharat.
          </p>
        </div>
        <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, i) => (
            <li
              key={mission}
              className="rounded-2xl border border-gold/25 bg-parchment p-6 shadow-sm"
            >
              <span className="font-display text-3xl font-semibold text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-medium leading-relaxed text-bark">
                {mission}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- Activities ------------------------------- */

function Activities() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Dharma Education",
      items: [
        "Online & offline dharma education programs",
        "Children's dharma education programs",
        "Youth awareness & engagement programs",
        "Study circles and educational sessions",
      ],
      image: "Image: children learning shlokas in a classroom setting",
    },
    {
      icon: Library,
      title: "Publications",
      items: [
        "Books and e-books on Sanatana Dharma",
        "Educational articles & learning materials",
        "Informational booklets for the public",
        "Authentic reference resources",
      ],
      image: "Image: printed dharmic books and manuscripts on a desk",
    },
    {
      icon: Megaphone,
      title: "Awareness Initiatives",
      items: [
        "Social media awareness campaigns",
        "Public outreach initiatives",
        "Educational content creation",
        "Programs countering misinformation",
      ],
      image: "Image: a volunteer presenting at a public awareness program",
    },
  ];
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Areas of Activity</Kicker>
          <SectionHeading id="activities-heading">
            Three pillars of our work
          </SectionHeading>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, items, image }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gold/25 bg-parchment shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <ImagePlaceholder
                label={image}
                aspect="aspect-[16/9]"
                className="rounded-b-none border-0 border-b-2"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink">
                    <Icon className="h-6 w-6 text-gold-pale" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <BookMarked
                        className="mt-1 h-4 w-4 shrink-0 text-gold-deep"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed text-bark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Values band ------------------------------- */

function ValuesBand() {
  return (
    <section
      aria-labelledby="values-heading"
      className="relative overflow-hidden bg-ink text-parchment"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 110%, rgba(201,160,60,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 md:py-28">
        <Kicker>The Spirit of Our Service</Kicker>
        <SectionHeading id="values-heading" light>
          What we prioritize
        </SectionHeading>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-parchment/75">
          Volunteers are contributors to a larger cause — never participants
          seeking personal gain. Knowledge can be taught; character cannot.
        </p>
        <dl className="mt-14 flex flex-wrap justify-center gap-x-14 gap-y-10">
          {values.map(({ first, second }) => (
            <div key={first} className="min-w-[10rem]">
              <dt className="font-display text-3xl font-semibold text-gold-pale md:text-4xl">
                {first}
              </dt>
              <dd className="mt-1 text-sm uppercase tracking-[0.2em] text-parchment/60">
                over {second}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------ Volunteer journey --------------------------- */

function VolunteerJourney() {
  return (
    <section
      id="volunteer"
      aria-labelledby="volunteer-heading"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Become a Volunteer</Kicker>
          <SectionHeading id="volunteer-heading">
            The path to induction
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-bark">
            Recruitment happens only through the official application process —
            a deliberate six-stage journey ensuring every volunteer understands
            the mission, values, and responsibilities before joining.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectionStages.map((stage, i) => (
            <li
              key={stage.title}
              className="relative rounded-2xl border border-gold/25 bg-parchment-deep/50 p-7"
            >
              <span
                aria-hidden="true"
                className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-gold-pale shadow-md"
              >
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2 leading-relaxed text-bark">{stage.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-gold/30 bg-ink p-8 text-parchment md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="font-display text-3xl font-semibold text-gold-pale">
                Who can apply?
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "You identify as Hindu and are at least 18 years of age",
                  "You respect Sanatana Dharma and are willing to learn",
                  "You agree to follow the organization's policies and code of conduct",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <UserCheck
                      className="mt-1 h-5 w-5 shrink-0 text-amber"
                      aria-hidden="true"
                    />
                    <span className="text-lg leading-relaxed text-parchment/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-parchment/60">
                Humility matters more than qualifications. Commitment matters
                more than expertise. Applications are subject to review and
                approval.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-gold/25 bg-ink-soft p-8 text-center">
              <ClipboardCheck className="h-10 w-10 text-gold" aria-hidden="true" />
              <p className="font-display text-2xl font-semibold text-parchment">
                Ready to serve the cause?
              </p>
              <a
                href="/apply"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-amber to-gold px-7 py-3.5 font-bold text-ink transition-opacity duration-200 hover:opacity-90"
              >
                Apply to Volunteer
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <p className="text-sm text-parchment/50">
                Flexible model — no fixed hours. Assignments arrive as official
                work orders with a seven-day window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Zero-fee band ------------------------------ */

function ZeroFeePolicy() {
  const points = [
    {
      icon: CircleDollarSign,
      title: "No fees, ever",
      text: "No membership, joining, registration, subscription, or training fees of any kind.",
    },
    {
      icon: HandCoins,
      title: "No donations sought",
      text: "Volunteers are never expected, encouraged, or required to donate — or to raise funds from others.",
    },
    {
      icon: Ban,
      title: "No salaries paid",
      text: "Participation is pure seva: no salary, stipend, commission, incentive, or honorarium.",
    },
  ];
  return (
    <section
      aria-labelledby="policy-heading"
      className="border-y border-gold/20 bg-parchment-deep/60"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Financial Policy</Kicker>
          <SectionHeading id="policy-heading">
            It costs nothing to serve dharma
          </SectionHeading>
          <p className="mt-5 text-lg text-bark">
            Money plays no role in becoming — or remaining — a volunteer of
            Dharma Shiksha Parishad. Participation rests solely on commitment
            to the cause.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gold/25 bg-parchment p-8 text-center shadow-sm"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                <Icon className="h-7 w-7 text-gold-deep" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-bark">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Structure -------------------------------- */

function Structure() {
  const ladder = ["Volunteer", "District Coordinator", "State Coordinator", "National Coordinator"];
  const governance = [
    {
      icon: Landmark,
      title: "Founder",
      text: "Principal authority and lifetime custodian of the organization's vision, principles, and long-term direction.",
    },
    {
      icon: Users,
      title: "Board",
      text: "Advisory and governance body assisting on policy, administration, growth, continuity, and discipline.",
    },
    {
      icon: Network,
      title: "Central Committee",
      text: "Primary operational body — issues work orders, monitors activities, and upholds organizational standards.",
    },
  ];
  return (
    <section
      id="structure"
      aria-labelledby="structure-heading"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Organizational Structure</Kicker>
          <SectionHeading id="structure-heading">
            Disciplined, transparent, merit-driven
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-bark">
            Every volunteer can rise through the organization. Advancement is
            earned through commitment, contribution, discipline, integrity, and
            performance — never through caste, creed, gender, community, or
            economic background.
          </p>
        </div>

        <ol className="mx-auto mt-14 flex max-w-4xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-0">
          {ladder.map((role, i) => (
            <li key={role} className="flex flex-col items-center sm:flex-row">
              <span
                className={`w-full rounded-xl border px-5 py-3 text-center font-semibold sm:w-auto ${
                  i === ladder.length - 1
                    ? "border-gold bg-ink text-gold-pale"
                    : "border-gold/40 bg-parchment-deep/60 text-bark"
                }`}
              >
                {role}
              </span>
              {i < ladder.length - 1 && (
                <ArrowRight
                  className="my-1 h-5 w-5 rotate-90 text-gold-deep sm:mx-3 sm:my-0 sm:rotate-0"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {governance.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gold/25 bg-parchment p-8 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15">
                <Icon className="h-6 w-6 text-gold-deep" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-bark">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ ----------------------------------- */

function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-y border-gold/20 bg-parchment-deep/60"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <Kicker>Frequently Asked Questions</Kicker>
          <SectionHeading id="faq-heading">
            Clear answers, no ambiguity
          </SectionHeading>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="faq group rounded-2xl border border-gold/30 bg-parchment shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {faq.question}
                </h3>
                <ChevronDown
                  className="faq-icon h-5 w-5 shrink-0 text-gold-deep"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-bark">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Final CTA -------------------------------- */

function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-ink text-center text-parchment">
      <ChakraRing className="chakra-ring pointer-events-none absolute left-1/2 top-full h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-32">
        <p className="font-deva text-2xl text-gold-pale" lang="sa">
          सत्यमेव जयते
        </p>
        <h2
          id="cta-heading"
          className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl"
        >
          The future of dharma rests on those{" "}
          <span className="bg-gradient-to-r from-gold-pale via-amber to-gold bg-clip-text text-transparent">
            willing to stand for it
          </span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-parchment/75">
          We seek individuals who value responsibility over recognition,
          contribution over convenience, and commitment over popularity. Even a
          small number of dedicated, disciplined people can create lasting
          change.
        </p>
        <a
          href="/apply"
          className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-amber to-gold px-9 py-4 text-lg font-bold text-ink shadow-lg shadow-amber/20 transition-opacity duration-200 hover:opacity-90"
        >
          Begin Your Journey
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

/* Inlined image-frame glyph — lucide's version is exported as `Image`,
   which collides with next/image conventions. */
function ImageIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
