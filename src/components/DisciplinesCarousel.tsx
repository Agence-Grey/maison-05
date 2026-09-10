"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Discipline } from "@/data/content";

interface DisciplinesCarouselProps {
  disciplines: Discipline[];
}

export default function DisciplinesCarousel({ disciplines }: DisciplinesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const clamped = ((index % disciplines.length) + disciplines.length) % disciplines.length;
      const slide = track.children[clamped] as HTMLElement | undefined;
      if (!slide) return;

      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    },
    [disciplines.length],
  );

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.children[0] as HTMLElement | undefined;
    if (!slide) return;

    const gap = 24;
    const step = slide.offsetWidth + gap;
    const index = Math.round(track.scrollLeft / step);
    activeRef.current = index;
    setActive(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (isPaused) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const next = activeRef.current >= disciplines.length - 1 ? 0 : activeRef.current + 1;
      scrollTo(next);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, disciplines.length, scrollTo]);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Le survol doit mettre en pause le défilement automatique du carrousel
    <div
      className="relative mt-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {disciplines.map((discipline) => (
          <article
            key={discipline.title}
            className="group relative h-[420px] w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[46%] lg:w-[31%]"
          >
            <Image
              src={discipline.image}
              alt={discipline.title}
              width={900}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/90 via-bordeaux/40 to-bordeaux/20 transition-opacity duration-500 group-hover:from-bordeaux/95" />

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h3 className="font-display text-4xl tracking-wider text-cream uppercase md:text-5xl">
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
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {disciplines.map((discipline, index) => (
            <button
              key={discipline.title}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Aller à ${discipline.title}`}
              aria-current={active === index}
              className={`h-2 rounded-full transition-all ${
                active === index ? "w-8 bg-curry" : "w-2 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo(active - 1)}
            aria-label="Cours précédent"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-curry hover:text-curry-light"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollTo(active + 1)}
            aria-label="Cours suivant"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-curry hover:text-curry-light"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
