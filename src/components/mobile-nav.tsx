"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-bark transition-colors duration-200 hover:bg-gold/15"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-gold/25 bg-parchment shadow-lg"
        >
          <ul className="px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg font-medium text-bark transition-colors duration-200 hover:bg-gold/10 hover:text-gold-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-gold/20 pt-3">
              <a
                href="/apply"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-ink px-3 py-3 text-center text-lg font-bold text-gold-pale"
              >
                Apply to Volunteer
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
