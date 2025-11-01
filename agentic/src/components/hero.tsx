import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-xl shadow-slate-200/60 sm:p-14">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
        <div className="grain-overlay" />
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow">
          Inquiry-led • Community-rooted • Future-ready
        </div>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Homeschooling that trains{" "}
              <span className="relative inline-flex items-center">
                <span className="relative z-[1] bg-gradient-to-r from-accent via-accent-strong to-highlight bg-clip-text text-transparent">
                  critical thinkers
                </span>
                <span className="absolute bottom-0 left-0 h-3 w-full translate-y-3 rounded-full bg-highlight/40 blur" />
              </span>{" "}
              to lead with curiosity.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Northstar Homeschooling blends Socratic dialogue, design thinking, and
              interdisciplinary projects so families can nurture analytical minds and
              compassionate changemakers—without sacrificing wonder.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Start your 14-day deep dive
              </Link>
              <Link
                href="#worksheets"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:bg-white"
              >
                Explore today’s lab
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Guided inquiry arcs",
                  value: "60+",
                },
                {
                  label: "Family dialogue frameworks",
                  value: "Weekly",
                },
                {
                  label: "Live workshop sprints",
                  value: "Biweekly",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-slate-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative isolate flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-900/10">
            <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100">
              Critical Thinking Sprint
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Micro-socratic prompt
              </p>
              <p className="text-lg font-medium leading-relaxed text-slate-800">
                “A scientist proposes a solution that helps the environment but displaces a
                fishing community. How do you evaluate the trade-off?”
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-700">Family facilitation tips</p>
              <ul className="mt-2 space-y-2">
                <li>• Ask each learner to name evidence they’d want before deciding.</li>
                <li>• Rotate roles: advocate, challenger, and systems-mapper.</li>
                <li>• Close with “What might change our minds?” to practice intellectual humility.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-gradient-to-r from-highlight/20 via-white to-accent/10 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-700">This week’s outcome</p>
              <p>
                Learners craft a decision matrix weighting community impact, ecological urgency,
                and feasibility—then present it in a lightning talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
