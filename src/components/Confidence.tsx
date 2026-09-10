import Image from "next/image";
import { confidenceContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Confidence() {
  return (
    <section id="confiance" className="bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-dark">
            {confidenceContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-bordeaux md:text-5xl">
            {confidenceContent.title}
            <br />
            <em className="text-curry-dark">{confidenceContent.titleHighlight}</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bordeaux/75">
            {confidenceContent.paragraph1}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-bordeaux/75">
            {confidenceContent.paragraph2}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {confidenceContent.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-curry/40 bg-curry/10 px-5 py-2 text-sm font-medium text-curry-dark"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-curry/40" />
            <Image
              src={confidenceContent.image.src}
              alt={confidenceContent.image.alt}
              width={confidenceContent.image.width}
              height={confidenceContent.image.height}
              className="relative h-[420px] w-full rounded-2xl object-cover md:h-[560px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
