"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { footerContent } from "@/data/content";

export default function Footer() {
  const pathname = usePathname();
  const toHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="bg-bordeaux-dark py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs text-center md:text-left">
            <Image
              src="/logo-curry.png"
              alt="Maison 05"
              width={52}
              height={52}
              className="mx-auto h-13 w-auto md:mx-0"
            />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {footerContent.description}
            </p>
          </div>

          <nav className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-xs uppercase tracking-[0.3em] text-curry-light">Navigation</p>
            {footerContent.nav.map((link) => (
              <a
                key={link.href}
                href={toHref(link.href)}
                className="text-sm text-cream/70 transition-colors hover:text-curry-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-curry-light">Contact</p>
            <a
              href={`mailto:${footerContent.contact.email}`}
              className="text-sm text-cream/70 transition-colors hover:text-curry-light"
            >
              {footerContent.contact.email}
            </a>
            <a
              href={footerContent.contact.phone.href}
              className="text-sm text-cream/70 transition-colors hover:text-curry-light"
            >
              {footerContent.contact.phone.label}
            </a>
            <span className="text-sm text-cream/70">{footerContent.contact.location}</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row">
          <span>© {new Date().getFullYear()} Maison 05 — Tous droits réservés.</span>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerContent.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-curry-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span>Move with intention.</span>
        </div>

        <div className="mt-8 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          Fait avec <span aria-hidden="true">❤️</span> par{" "}
          <a
            href="https://agence-grey.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cream/60 underline-offset-2 transition-colors hover:text-curry-light hover:underline"
          >
            L&apos;Agence Grey
          </a>
        </div>
      </div>
    </footer>
  );
}
