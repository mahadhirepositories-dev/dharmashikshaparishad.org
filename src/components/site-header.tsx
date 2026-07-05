import { ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/content";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-ink/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to main content
      </a>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex shrink-0 items-center" aria-label="Dharma Shiksha Parishad — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Dharma Shiksha Parishad logo — golden Sengol encircled by dharma chakras"
            width={219}
            height={74}
            className="h-11 w-auto sm:h-13"
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium tracking-wide text-cream/85 transition-colors duration-200 hover:text-gold-pale"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="/apply"
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-amber to-gold px-5 py-2.5 text-sm font-bold tracking-wide text-ink shadow-md transition-opacity duration-200 hover:opacity-90 sm:inline-flex"
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
