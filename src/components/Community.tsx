import Image from "next/image";
import { communityContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Community() {
  return (
    <section id="partage" className="bg-cream-dark py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={communityContent.images[0].src}
                alt={communityContent.images[0].alt}
                width={communityContent.images[0].width}
                height={communityContent.images[0].height}
                className="h-64 w-full rounded-2xl object-cover md:h-72"
              />
              <Image
                src={communityContent.images[1].src}
                alt={communityContent.images[1].alt}
                width={communityContent.images[1].width}
                height={communityContent.images[1].height}
                className="mt-8 h-64 w-full rounded-2xl object-cover md:h-72"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-dark">
              {communityContent.label}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-bordeaux md:text-5xl">
              {communityContent.title}
              <br />
              <em className="text-curry-dark">{communityContent.titleHighlight}</em>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-bordeaux/75">
              {communityContent.paragraph1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-bordeaux/75">
              {communityContent.paragraph2}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
