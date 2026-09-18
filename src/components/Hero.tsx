import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/logo-bordeaux.png"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/202609181252.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-bordeaux/70 via-bordeaux/50 to-bordeaux/90" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 md:px-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-curry-light md:text-sm">
          {heroContent.subtitle}
          <span className="hidden md:inline"> · </span>
          <span className="block md:inline">{heroContent.location}</span>
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl">
          {heroContent.titleLine1} <em className="text-curry-light">{heroContent.titleLine2}</em>.
          <br />
          {heroContent.titleLine3} <em className="text-curry-light">{heroContent.titleLine4}</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
          {heroContent.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={heroContent.ctaPrimary.href}
            className="inline-flex items-center justify-center rounded-full bg-curry px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bordeaux-dark transition-all hover:bg-curry-light"
          >
            {heroContent.ctaPrimary.label}
          </a>
          <a
            href={heroContent.ctaSecondary.href}
            className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:border-cream hover:bg-cream/10"
          >
            {heroContent.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
