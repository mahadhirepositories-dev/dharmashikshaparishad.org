import { ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/content";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-parchment/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-gold-pale"
      >
        Skip to main content
      </a>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex shrink-0 items-center" aria-label="Dharma Shiksha Parishad — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Dharma Shiksha Parishad logo — golden Sengol encircled by dharma chakras"
            width={210}
            height={74}
            className="h-11 w-auto sm:h-13"
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium tracking-wide text-bark transition-colors duration-200 hover:text-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/apply"
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold tracking-wide text-gold-pale shadow-md transition-colors duration-200 hover:bg-ink-mist sm:inline-flex"
          >
            Volunteer
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
