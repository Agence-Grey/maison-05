import { finalCtaContent } from "@/data/content";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bordeaux-dark py-24 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #c0853a 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-light">
            {finalCtaContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            {finalCtaContent.titleLine1}
            <br />
            <em className="text-curry-light">{finalCtaContent.titleLine2}</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            {finalCtaContent.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={finalCtaContent.ctaPrimary.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-curry px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bordeaux-dark transition-all hover:bg-curry-light sm:w-auto"
            >
              {finalCtaContent.ctaPrimary.label}
            </a>
            <a
              href={finalCtaContent.ctaSecondary.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-cream/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:border-cream hover:bg-cream/10 sm:w-auto"
            >
              {finalCtaContent.ctaSecondary.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
