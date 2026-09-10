import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-10 md:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-dark">
          Maison 05
        </p>
        <h1 className="font-serif text-4xl leading-tight text-bordeaux md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-bordeaux/50">Dernière mise à jour : {updatedAt}</p>
        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </main>
  );
}

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-bordeaux">{title}</h2>
      <div className="mt-4 space-y-4 text-bordeaux/75 leading-relaxed">{children}</div>
    </section>
  );
}
