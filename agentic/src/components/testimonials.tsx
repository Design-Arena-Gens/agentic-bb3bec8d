const testimonials = [
  {
    quote:
      "Northstar helped my kids articulate their thinking beyond right answers. They now ask, “What evidence would change my mind?” during dinner debates.",
    name: "Maya L.",
    role: "Parent of twin middle-schoolers",
  },
  {
    quote:
      "The inquiry arcs give us structure, but it’s the critical thinking diagnostics that show us the growth in self-awareness and reasoning depth.",
    name: "Avery C.",
    role: "Former classroom teacher turned homeschool guide",
  },
  {
    quote:
      "Our teen’s apprenticeship mentor challenged them to defend every design choice. The final showcase felt like a launch presentation, not a worksheet.",
    name: "Tristan R.",
    role: "Parent of 10th grader",
  },
];

export function Testimonials() {
  return (
    <section className="space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Voices from the Northstar community
        </p>
        <h2 className="mt-4 font-display text-4xl text-slate-900">
          Families seeing kids think out loud
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-200/60"
          >
            <blockquote className="text-sm leading-relaxed text-slate-600">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-slate-700">
              {testimonial.name}
              <span className="block text-xs font-normal uppercase tracking-[0.2em] text-slate-400">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
