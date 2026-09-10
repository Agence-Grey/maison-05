import { disciplinesContent } from "@/data/content";
import DisciplinesCarousel from "./DisciplinesCarousel";
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

        <DisciplinesCarousel disciplines={disciplinesContent.disciplines} />
      </div>
    </section>
  );
}
