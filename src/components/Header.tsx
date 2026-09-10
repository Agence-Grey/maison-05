"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { type NavLink, navLinks } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bordeaux/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo-curry.png"
            alt="Maison 05"
            width={44}
            height={44}
            className="h-11 w-auto"
          />
          <span className="font-serif text-xl tracking-wide text-cream">Maison 05</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-curry-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-curry px-6 py-2.5 text-sm font-medium tracking-wide text-bordeaux-dark transition-all hover:bg-curry-light sm:inline-flex"
          >
            Réserver
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-cream transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-cream/10 bg-bordeaux px-6 pb-6 pt-2 lg:hidden">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream/10 py-4 text-sm uppercase tracking-[0.18em] text-cream/85"
            >
              {link.label}
            </a>
          ))}
          {/* biome-ignore lint/a11y/useValidAnchor: Navigation vers section contact */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-curry px-6 py-3 text-center text-sm font-medium text-bordeaux-dark"
          >
            Réserver
          </a>
        </nav>
      )}
    </header>
  );
}
