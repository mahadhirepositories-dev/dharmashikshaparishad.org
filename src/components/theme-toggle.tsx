"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // localStorage may be unavailable (private mode); theme still toggles
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/40 text-gold-pale transition-colors duration-200 hover:border-gold hover:bg-gold/15"
    >
      {/* Icon visibility is pure CSS so no state is needed and SSR matches */}
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
    </button>
  );
}
