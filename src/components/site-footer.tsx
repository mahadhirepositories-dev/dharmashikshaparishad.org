import { BookOpen, CircleDollarSign, Scale, Shield } from "lucide-react";
import { navLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-ink-soft text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide text-gold-pale">
              DHARMA SHIKSHA PARISHAD
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-cream/50">
              Preserving · Educating · Upholding Sanatana Dharma
            </p>
            <blockquote className="mt-6 max-w-md border-l-2 border-gold/40 pl-4 italic leading-relaxed text-cream/70">
              &ldquo;The future of Sanatana Dharma depends not merely upon
              numbers, but upon dedicated individuals who are willing to learn,
              serve, and stand for what is right.&rdquo;
            </blockquote>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/75 transition-colors duration-200 hover:text-gold-pale"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/apply"
                  className="text-cream/75 transition-colors duration-200 hover:text-gold-pale"
                >
                  Apply to Volunteer
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Principles
            </p>
            <ul className="mt-5 space-y-3 text-cream/75">
              <li className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 text-gold" aria-hidden="true" />
                Strictly non-political
              </li>
              <li className="flex items-center gap-2.5">
                <CircleDollarSign className="h-4 w-4 text-gold" aria-hidden="true" />
                Zero fees &amp; zero fundraising
              </li>
              <li className="flex items-center gap-2.5">
                <Scale className="h-4 w-4 text-gold" aria-hidden="true" />
                Equal opportunity by merit
              </li>
              <li className="flex items-center gap-2.5">
                <BookOpen className="h-4 w-4 text-gold" aria-hidden="true" />
                Education before everything
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 text-sm text-cream/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Dharma Shiksha Parishad. All
            rights reserved.
          </p>
          <p className="font-deva" lang="sa">
            धर्मो रक्षति रक्षितः
          </p>
        </div>
      </div>
    </footer>
  );
}
