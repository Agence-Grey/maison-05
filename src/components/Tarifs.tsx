import { tarifsContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-dark">
            {tarifsContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-bordeaux md:text-5xl">
            {tarifsContent.title}{" "}
            <em className="text-curry-dark">{tarifsContent.titleHighlight}</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bordeaux/75">
            {tarifsContent.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-bordeaux/10 bg-white/60 p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-bordeaux">À l&apos;unité</h3>
              <div className="mt-6 space-y-4">
                {tarifsContent.unitPrices.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-bordeaux/85">{item.label}</span>
                      <span className="font-serif text-2xl text-curry-dark">{item.price}</span>
                    </div>
                    {item.detail && <p className="mt-1 text-sm text-bordeaux/60">{item.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border-2 border-curry bg-white p-8 shadow-lg">
              <h3 className="font-serif text-2xl text-bordeaux">Packs</h3>
              <div className="mt-6 space-y-5">
                {tarifsContent.packs.map((pack) => (
                  <div key={pack.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium text-bordeaux">{pack.label}</span>
                      <span className="font-serif text-2xl text-curry-dark">{pack.price}</span>
                    </div>
                    {pack.perSession && (
                      <p className="mt-1 text-sm text-bordeaux/60">{pack.perSession}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="rounded-2xl border border-bordeaux/10 bg-white/60 p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-bordeaux">Abonnements / mois</h3>
              <div className="mt-6 space-y-5">
                {tarifsContent.abonnements.map((abo) => (
                  <div key={abo.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium text-bordeaux">{abo.name}</span>
                      <span className="font-serif text-2xl text-curry-dark">{abo.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-bordeaux/60">{abo.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={120}>
            <div className="rounded-2xl bg-bordeaux p-8 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-curry-light">
                {tarifsContent.packDecouverte.label}
              </p>
              <p className="mt-4 font-serif text-5xl text-cream">
                {tarifsContent.packDecouverte.price}
              </p>
              <p className="mt-2 text-sm text-cream/75">{tarifsContent.packDecouverte.detail}</p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex items-center justify-center rounded-2xl border border-bordeaux/10 bg-white/60 p-8 text-center backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-bordeaux/85">{tarifsContent.seniorNote}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
