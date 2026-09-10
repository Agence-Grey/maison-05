import Image from "next/image";
import { disciplinesContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-bordeaux py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-light">
            {disciplinesContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            {disciplinesContent.title}{" "}
            <em className="text-curry-light">{disciplinesContent.titleHighlight}</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            {disciplinesContent.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {disciplinesContent.disciplines.map((discipline, i) => (
            <Reveal key={discipline.title} delay={i * 100}>
              <article className="group relative h-[420px] overflow-hidden rounded-2xl">
                <Image
                  src={discipline.image}
                  alt={discipline.title}
                  width={900}
                  height={1200}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/90 via-bordeaux/40 to-bordeaux/20 transition-opacity duration-500 group-hover:from-bordeaux/95" />

                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="font-display text-5xl tracking-wider text-cream uppercase md:text-6xl">
                    {discipline.title}
                  </h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-xl text-cream/90">{discipline.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">
                    {discipline.tagline}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
