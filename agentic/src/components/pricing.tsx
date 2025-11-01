"use client";

import { useMemo, useState } from "react";

const plans = [
  {
    id: "discover",
    name: "Discover",
    description:
      "Self-paced access to inquiry arcs, facilitator guides, and printable Socratic prompts.",
    monthly: 48,
    annual: 39,
    perks: [
      "Weekly family strategy labs",
      "Critical thinking diagnostics",
      "Portfolio rubric templates",
    ],
    highlight: false,
  },
  {
    id: "collaborate",
    name: "Collaborate",
    description:
      "Includes live online studios, mentor feedback circles, and co-planning sessions with our learning designers.",
    monthly: 128,
    annual: 108,
    perks: [
      "All Discover features",
      "2 live workshops per week",
      "Monthly mentor feedback",
      "Parent micro-coaching cohort",
    ],
    highlight: true,
  },
  {
    id: "apprentice",
    name: "Apprentice Guild",
    description:
      "For families seeking bespoke capstones with expert advisors and real-world partnerships.",
    monthly: 268,
    annual: 228,
    perks: [
      "All Collaborate features",
      "Dedicated learning architect",
      "Quarterly field mentorship",
      "Showcase residency opportunities",
    ],
    highlight: false,
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const badgeLabel = useMemo(
    () => (billingCycle === "annual" ? "Save 18% with annual" : "Monthly access"),
    [billingCycle],
  );

  return (
    <section id="pricing" className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-12 text-slate-100 shadow-xl shadow-slate-900/50 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 text-center sm:text-left md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Subscription plans
            </p>
            <h2 className="mt-4 font-display text-4xl text-white">
              Invest in a thinking-first home learning culture
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Flexible plans scale with your family’s ambitions—start with guided prompts,
              add live studios, or unlock apprenticeship pathways.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-2 transition ${
                billingCycle === "monthly" ? "bg-white text-slate-900" : "text-slate-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`rounded-full px-4 py-2 transition ${
                billingCycle === "annual" ? "bg-white text-slate-900" : "text-slate-200"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
          {badgeLabel}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur ${
                plan.highlight ? "ring-2 ring-highlight/80" : ""
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  {plan.name}
                </p>
                <h3 className="mt-3 font-display text-3xl text-white">
                  ${plan[billingCycle]}
                  <span className="ml-2 text-base font-medium text-slate-400">
                    /month
                  </span>
                </h3>
                <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-100">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-highlight" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  plan.highlight
                    ? "bg-white text-slate-900 shadow-lg shadow-black/20 hover:bg-slate-100"
                    : "border border-white/20 text-slate-100 hover:bg-white/20"
                }`}
              >
                {plan.highlight ? "Join collaborate" : "Choose plan"}
              </button>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          Need to onboard multiple learners? Email concierge@northstarhome.school for a custom cohort.
        </p>
      </div>
    </section>
  );
}
