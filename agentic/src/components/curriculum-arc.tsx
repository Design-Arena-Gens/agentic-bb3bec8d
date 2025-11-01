const phases = [
  {
    title: "Phase 1 · Wonder Mapping",
    duration: "Weeks 1-4",
    focus:
      "Curiosity inventories, dialogue warm-ups, and observation journals that prime learners to notice patterns.",
    outcome:
      "Students craft inquiry statements and set personal thinking goals using our reflective heuristics.",
  },
  {
    title: "Phase 2 · Investigation Sprints",
    duration: "Weeks 5-12",
    focus:
      "Evidence gathering, systems modeling, and collaborative debate sessions anchored in real-world case files.",
    outcome:
      "Learners triangulate data, evaluate bias, and iterate on hypotheses using the Northstar claims-evidence-reasoning loop.",
  },
  {
    title: "Phase 3 · Synthesis Showcase",
    duration: "Weeks 13-16",
    focus:
      "Cross-disciplinary capstones, multimedia storytelling, and community exhibitions that invite critique.",
    outcome:
      "Families celebrate polished deliverables—decision briefs, interactive maps, or policy prototypes—paired with reflection letters.",
  },
];

export function CurriculumArc() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-slate-200/60">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          The Northstar journey
        </p>
        <h2 className="mt-4 font-display text-4xl text-slate-900">
          A rhythm that balances depth and delight
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Each quarter cycles through discovery, investigation, and synthesis so learners build
          enduring habits of mind alongside tangible portfolio pieces.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {phases.map((phase) => (
          <article
            key={phase.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-lg shadow-slate-200/60"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {phase.duration}
              </p>
              <h3 className="mt-3 font-display text-2xl text-slate-900">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{phase.focus}</p>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-700">Capstone milestone</p>
              <p className="mt-2">{phase.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
