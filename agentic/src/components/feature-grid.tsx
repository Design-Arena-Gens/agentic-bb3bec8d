const features = [
  {
    title: "Socratic studios",
    description:
      "Live, facilitator-led Socratic seminars with optional parent co-coaching modules to guide deeper questioning without scripted answers.",
    pillar: "Dialogue",
  },
  {
    title: "Interdisciplinary quests",
    description:
      "Project arcs weave humanities, science, and math so learners connect ideas and defend claims with real-world data.",
    pillar: "Integration",
  },
  {
    title: "Critical reasoning diagnostics",
    description:
      "Monthly reflection diagnostics capture growth across reasoning moves: inference, evaluation, synthesis, and meta-cognition.",
    pillar: "Insight",
  },
  {
    title: "Mentor exchange",
    description:
      "Access to a curated network of researchers, entrepreneurs, and artists who host critique labs and feedback circles.",
    pillar: "Community",
  },
];

export function FeatureGrid() {
  return (
    <section className="space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Why families choose Northstar
        </p>
        <h2 className="mt-4 font-display text-4xl text-slate-900">
          Built for courageous curiosity
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Each learning arc trains learners to question assumptions, test ideas with evidence,
          and communicate conclusions with empathy.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="absolute right-6 top-6 inline-flex rounded-full border border-slate-200 bg-slate-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {feature.pillar}
            </div>
            <h3 className="font-display text-2xl text-slate-900">{feature.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              <span>Critical thinking outcome</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Learners articulate claims, cite sources, and use counterarguments to strengthen decisions.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
