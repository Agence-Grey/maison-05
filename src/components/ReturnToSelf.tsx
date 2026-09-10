import { returnToSelfContent } from "@/data/content";
import Reveal from "./Reveal";

export default function ReturnToSelf() {
  return (
    <section id="revenir" className="bg-bordeaux py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-light">
            {returnToSelfContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            {returnToSelfContent.title}{" "}
            <em className="text-curry-light">{returnToSelfContent.titleHighlight}</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            {returnToSelfContent.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {returnToSelfContent.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-cream/10 bg-bordeaux-light/40 p-8 transition-colors hover:border-curry/40">
                <span className="font-serif text-5xl text-curry-light">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl text-cream">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/70">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
