import { openingContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Opening() {
  return (
    <section className="border-b border-curry/20 bg-curry py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-bordeaux-dark">
            {openingContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-bordeaux-dark md:text-6xl">
            {openingContent.title}{" "}
            <em className="text-bordeaux-dark">{openingContent.titleHighlight}</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bordeaux-dark/80">
            {openingContent.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
