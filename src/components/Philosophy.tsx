import Image from "next/image";
import { philosophyContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="maison" className="bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-curry/40" />
            <Image
              src={philosophyContent.image.src}
              alt={philosophyContent.image.alt}
              width={philosophyContent.image.width}
              height={philosophyContent.image.height}
              className="relative h-[420px] w-full rounded-2xl object-cover md:h-[560px]"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-dark">
            {philosophyContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-bordeaux md:text-5xl">
            {philosophyContent.title}
            <br />
            <em className="text-curry-dark">{philosophyContent.titleHighlight}</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bordeaux/75">
            {philosophyContent.paragraph1}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-bordeaux/75">
            {philosophyContent.paragraph2}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
