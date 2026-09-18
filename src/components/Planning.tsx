import { planningContent } from "@/data/content";
import Reveal from "./Reveal";

const days = [
  { key: "monday" as const, label: "Lundi" },
  { key: "tuesday" as const, label: "Mardi" },
  { key: "wednesday" as const, label: "Mercredi" },
  { key: "thursday" as const, label: "Jeudi" },
  { key: "friday" as const, label: "Vendredi" },
  { key: "saturday" as const, label: "Samedi" },
  { key: "sunday" as const, label: "Dimanche" },
];

function getCourseStyle(course: string): string {
  if (!course) return "";
  return "font-medium text-bordeaux";
}

export default function Planning() {
  return (
    <section className="bg-cream-dark py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-curry-dark">
            {planningContent.label}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-bordeaux md:text-5xl">
            {planningContent.title}{" "}
            <em className="text-curry-dark">{planningContent.titleHighlight}</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bordeaux/75">
            {planningContent.description}
          </p>
        </Reveal>

        <Reveal className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-curry">
                <th className="px-4 py-3 text-left font-medium uppercase tracking-wider text-bordeaux/60">
                  Horaires
                </th>
                {days.map((day) => (
                  <th
                    key={day.key}
                    className="px-4 py-3 text-center font-medium uppercase tracking-wider text-bordeaux/60"
                  >
                    {day.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planningContent.schedule.map((slot, idx) => (
                <tr key={slot.time} className={idx % 2 === 0 ? "bg-white/40" : "bg-white/20"}>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-bordeaux">
                    {slot.time}
                  </td>
                  {days.map((day) => {
                    const course = slot[day.key];
                    return (
                      <td
                        key={day.key}
                        className={`px-4 py-3 text-center ${getCourseStyle(course)}`}
                      >
                        {course}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-20 space-y-10">
          <Reveal>
            <h3 className="font-serif text-3xl text-bordeaux">Nos cours</h3>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {planningContent.courses.map((course, idx) => (
              <Reveal key={course.name} delay={idx * 80}>
                <div className="rounded-2xl border border-bordeaux/10 bg-white/60 p-8 backdrop-blur-sm">
                  <h4 className="font-serif text-xl text-bordeaux">{course.name}</h4>
                  <p className="mt-4 leading-relaxed text-bordeaux/75">{course.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
