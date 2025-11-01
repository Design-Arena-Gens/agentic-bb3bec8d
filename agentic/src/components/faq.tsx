const faqs = [
  {
    question: "Do I need teaching experience to facilitate?",
    answer:
      "No. Each arc includes conversation scripts, pacing guides, and coaching videos so you can model thinking moves without lecturing. Our facilitators host weekly office hours for quick calibrations.",
  },
  {
    question: "How much time should we commit each week?",
    answer:
      "Families typically spend 6–8 hours spread across guided studios, independent quests, and reflection circles. You can condense or expand depending on your learner’s pace.",
  },
  {
    question: "What ages does Northstar serve?",
    answer:
      "Our core arcs are designed for ages 10–16, with extension pathways for advanced learners and optional scaffolds for younger siblings.",
  },
  {
    question: "Can we pause or switch plans?",
    answer:
      "Yes. Plans can be paused month-to-month. Annual members can bank unused months or switch to a lower tier at renewal.",
  },
];

export function FAQ() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-slate-200/60">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Questions, answered with care
        </p>
        <h2 className="mt-4 font-display text-4xl text-slate-900">FAQ</h2>
      </div>
      <dl className="mt-10 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow shadow-slate-200/60"
          >
            <dt className="text-sm font-semibold text-slate-800">{faq.question}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
