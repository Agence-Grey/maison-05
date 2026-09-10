import { marqueeContent } from "@/data/content";

export default function Marquee() {
  const row = [...marqueeContent.items, ...marqueeContent.items];
  return (
    <div className="overflow-hidden border-y border-curry/20 bg-bordeaux py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((item) => (
          <span
            key={item.id}
            className="flex items-center gap-10 font-serif text-2xl italic text-cream/90 md:text-3xl"
          >
            {item.text}
            <span className="text-curry-light">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
