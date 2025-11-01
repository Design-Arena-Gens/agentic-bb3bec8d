"use client";

import { useMemo, useState } from "react";

type QuestionOption = {
  id: string;
  text: string;
  rationale: string;
  isCorrect: boolean;
};

type Prompt = {
  id: string;
  stem: string;
  type: "multiple" | "open" | "ranking";
  options?: QuestionOption[];
  rubric?: {
    insight: string;
    baseline: string;
  };
};

type Worksheet = {
  id: string;
  title: string;
  scenario: string;
  drivingQuestion: string;
  prompts: Prompt[];
  extension: string;
};

const worksheets: Worksheet[] = [
  {
    id: "reef-restoration",
    title: "Coral Reef Restoration Mission",
    scenario:
      "You're leading a teen-led marine biology lab. A sudden algae bloom is weakening coral reefs near your coastal town.",
    drivingQuestion:
      "How might the team design a restoration plan that balances ecological impact, community livelihood, and long-term resilience?",
    prompts: [
      {
        id: "hypothesis",
        stem: "Which hypothesis best frames the challenge?",
        type: "multiple",
        options: [
          {
            id: "a",
            text: "If we introduce more fish that eat algae, the coral will immediately recover within two weeks.",
            rationale:
              "Focuses on a single factor and promises unrealistic speed; overlooks complex systems interactions.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "If we reduce agricultural runoff upstream, algae growth will slow, allowing corals to regenerate gradually.",
            rationale:
              "Connects cause and effect across ecosystems and frames recovery as a process requiring patience.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "If we do nothing, nature will balance itself and the reef will recover naturally.",
            rationale:
              "Dismisses evidence of human impact and removes agency from the learner-driven investigation.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "data-plan",
        stem: "Drag to rank the evidence-gathering actions from most to least urgent.",
        type: "ranking",
        options: [
          {
            id: "transect",
            text: "Map algae density across reef transects over four weeks.",
            rationale:
              "Baseline data ensures interventions are measured and adaptive.",
            isCorrect: true,
          },
          {
            id: "survey",
            text: "Interview local fishers about catch changes and runoff sightings.",
            rationale:
              "Empowers community voices and surfaces qualitative context quickly.",
            isCorrect: true,
          },
          {
            id: "petition",
            text: "Launch a petition to ban all fertilizers in surrounding counties.",
            rationale:
              "Policy action is powerful but requires evidence to build coalition support first.",
            isCorrect: true,
          },
        ],
      },
      {
        id: "reflection",
        stem: "Draft a hypothesis-driven action step that keeps both science and community in the loop.",
        type: "open",
        rubric: {
          insight:
            "Connects data collection to a community touchpoint and proposes iteration based on findings.",
          baseline:
            "Mentions an action step but skips measurement or stakeholder collaboration.",
        },
      },
    ],
    extension:
      "Ask learners to pitch their plan to a mock town council. Encourage them to defend trade-offs and invite counterarguments.",
  },
  {
    id: "history-mystery",
    title: "Primary Source Mystery Lab",
    scenario:
      "A box of letters from 1918 appears at a local archive, hinting at an unsolved community mystery.",
    drivingQuestion:
      "Which narratives emerge when we piece together partial, biased, or conflicting sources?",
    prompts: [
      {
        id: "source-check",
        stem: "Select the best first move for evaluating authenticity.",
        type: "multiple",
        options: [
          {
            id: "provenance",
            text: "Trace the provenance of the letters—who stored them, and why are they surfacing now?",
            rationale:
              "Investigates bias and motives before absorbing the content at face value.",
            isCorrect: true,
          },
          {
            id: "transcribe",
            text: "Immediately transcribe the most dramatic letter for a class performance.",
            rationale:
              "Engaging but risks amplifying misinformation before verifying authenticity.",
            isCorrect: false,
          },
          {
            id: "summary",
            text: "Skim all letters and summarize them in a single paragraph.",
            rationale:
              "Surface-level synthesis might blur crucial contradictions and context.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "bias-map",
        stem: "Rank the follow-up tasks for recognising bias.",
        type: "ranking",
        options: [
          {
            id: "timeline",
            text: "Construct a timeline aligning letter dates with wider historical events.",
            rationale:
              "Establishes context essential for bias detection and narrative accuracy.",
            isCorrect: true,
          },
          {
            id: "voices",
            text: "Identify whose voices are absent and draft questions to investigate those gaps.",
            rationale:
              "Gaps in evidence drive deeper research and empathetic reasoning.",
            isCorrect: true,
          },
          {
            id: "headline",
            text: "Write a sensational headline about the letters.",
            rationale:
              "Leaping to conclusions undermines critical examination of sources.",
            isCorrect: true,
          },
        ],
      },
      {
        id: "interpretation",
        stem: "Write a working interpretation that remains testable.",
        type: "open",
        rubric: {
          insight:
            "Names assumptions, references at least two sources, and invites a plan for verification.",
          baseline:
            "Shares an interpretation but lacks references or acknowledgement of unknowns.",
        },
      },
    ],
    extension:
      "Invite families to co-create a digital exhibit where learners annotate letters with questions, evidence flags, and empathy reflections.",
  },
];

type Rankings = Record<string, string[]>;

export function WorksheetLab() {
  const [activeWorksheetId, setActiveWorksheetId] = useState(worksheets[0].id);
  const activeWorksheet = useMemo(
    () => worksheets.find((item) => item.id === activeWorksheetId)!,
    [activeWorksheetId],
  );

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    {},
  );
  const [rankings, setRankings] = useState<Rankings>({});
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showRubric, setShowRubric] = useState(false);

  const handleMultipleChoice = (promptId: string, optionId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [promptId]: optionId }));
  };

  const toggleRubric = () => setShowRubric((prev) => !prev);

  const handleRanking = (prompt: Prompt, optionId: string, direction: 1 | -1) => {
    if (!prompt.options) return;

    setRankings((prev) => {
      const currentOrder = prev[prompt.id] ?? prompt.options!.map((item) => item.id);
      const index = currentOrder.indexOf(optionId);
      const nextIndex = index + direction;

      if (nextIndex < 0 || nextIndex >= currentOrder.length) {
        return prev;
      }

      const nextOrder = [...currentOrder];
      [nextOrder[index], nextOrder[nextIndex]] = [
        nextOrder[nextIndex],
        nextOrder[index],
      ];

      return { ...prev, [prompt.id]: nextOrder };
    });
  };

  const rankingFeedback = (prompt: Prompt) => {
    if (!prompt.options) return "";

    const order = rankings[prompt.id] ?? prompt.options.map((option) => option.id);

    return order
      .map((optionId, index) => {
        const option = prompt.options!.find((item) => item.id === optionId);
        if (!option) return "";
        return `${index + 1}. ${option.text} — ${option.rationale}`;
      })
      .filter(Boolean)
      .join("\n");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur md:p-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Interactive Worksheet Studio
          </p>
          <h2 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">
            Ready-to-facilitate investigations
          </h2>
        </div>
        <div className="flex gap-2 rounded-full bg-slate-100 p-2 text-sm font-medium text-slate-600">
          {worksheets.map((worksheet) => (
            <button
              key={worksheet.id}
              onClick={() => {
                setActiveWorksheetId(worksheet.id);
                setShowRubric(false);
              }}
              className={`rounded-full px-4 py-2 transition ${
                worksheet.id === activeWorksheetId
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                  : "hover:bg-white hover:shadow"
              }`}
            >
              {worksheet.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_minmax(240px,320px)] md:items-start">
        <article className="space-y-6">
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Scenario
            </p>
            <h3 className="mt-2 font-display text-2xl text-slate-900">
              {activeWorksheet.title}
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
              {activeWorksheet.scenario}
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white/70 p-4">
              <p className="text-sm font-semibold text-slate-700">Driving Question</p>
              <p className="mt-1 text-sm text-slate-600">
                {activeWorksheet.drivingQuestion}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {activeWorksheet.prompts.map((prompt) => (
              <div
                key={prompt.id}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-200/40"
              >
                <p className="text-sm font-semibold text-slate-700">{prompt.stem}</p>

                {prompt.type === "multiple" && prompt.options && (
                  <div className="mt-4 space-y-3">
                    {prompt.options.map((option) => {
                      const isSelected = selectedOptions[prompt.id] === option.id;
                      const showInsight =
                        isSelected && selectedOptions[prompt.id] !== undefined;

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleMultipleChoice(prompt.id, option.id)}
                          className={`group w-full rounded-xl border p-4 text-left transition ${
                            isSelected
                              ? option.isCorrect
                                ? "border-emerald-500 bg-emerald-50/80"
                                : "border-rose-400 bg-rose-50/70"
                              : "border-slate-200 hover:border-slate-400 hover:bg-slate-50/80"
                          }`}
                        >
                          <span className="flex items-center justify-between text-sm font-medium text-slate-700">
                            {option.text}
                            {isSelected && (
                              <span
                                className={`ml-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                  option.isCorrect
                                    ? "bg-emerald-500 text-white"
                                    : "bg-rose-400 text-white"
                                }`}
                              >
                                {option.isCorrect ? "Root Cause" : "Reframe"}
                              </span>
                            )}
                          </span>
                          {showInsight && (
                            <p className="mt-2 text-sm text-slate-600">
                              {option.rationale}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {prompt.type === "ranking" && prompt.options && (
                  <div className="mt-4 space-y-3">
                    {(rankings[prompt.id] ?? prompt.options.map((item) => item.id)).map(
                      (optionId, orderIndex) => {
                        const option = prompt.options!.find(
                          (item) => item.id === optionId,
                        );
                        if (!option) return null;

                        return (
                          <div
                            key={option.id}
                            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-500 shadow">
                              {orderIndex + 1}
                            </div>
                            <div className="flex-1 space-y-2">
                              <p className="text-sm font-medium text-slate-700">
                                {option.text}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  onClick={() => handleRanking(prompt, option.id, -1)}
                                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-500 hover:bg-white"
                                >
                                  Prioritize ↑
                                </button>
                                <button
                                  onClick={() => handleRanking(prompt, option.id, 1)}
                                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-500 hover:bg-white"
                                >
                                  Defer ↓
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      },
                    )}
                    <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm text-slate-600">
                      <p className="font-semibold text-slate-700">Facilitation cue</p>
                      <p className="mt-1 whitespace-pre-line">{rankingFeedback(prompt)}</p>
                    </div>
                  </div>
                )}

                {prompt.type === "open" && (
                  <div className="mt-4 space-y-3">
                    <textarea
                      value={responses[prompt.id] ?? ""}
                      onChange={(event) =>
                        setResponses((prev) => ({
                          ...prev,
                          [prompt.id]: event.target.value,
                        }))
                      }
                      placeholder="Encourage strategy, evidence, and what-if thinking..."
                      className="min-h-[120px] w-full resize-y rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    />
                    {prompt.rubric && (
                      <button
                        onClick={toggleRubric}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-700"
                      >
                        {showRubric ? "Hide" : "Show"} facilitator rubric
                      </button>
                    )}
                    {prompt.rubric && showRubric && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-600">
                        <p className="font-semibold text-slate-700">Aim for:</p>
                        <p>{prompt.rubric.insight}</p>
                        <p className="mt-3 font-semibold text-slate-700">Watch out for:</p>
                        <p>{prompt.rubric.baseline}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/80">
              Extension Challenge
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              {activeWorksheet.extension}
            </p>
          </div>
        </article>

        <aside className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-inner">
          <div className="rounded-xl bg-white/90 p-5 shadow-sm shadow-white/40">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Mindset Reminders
            </p>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-2 w-2 flex-none translate-y-1 rounded-full bg-emerald-500" />
                Evidence before action—invite learners to identify what data is missing.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-2 w-2 flex-none translate-y-1 rounded-full bg-sky-500" />
                Look for tension: science vs. community, past vs. present. Have learners argue both sides.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-2 w-2 flex-none translate-y-1 rounded-full bg-rose-500" />
                Close sessions with reflection prompts that ask, “What would make us change our minds?”
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-dashed border-slate-300 bg-white/80 p-5 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-700">Export & Collaborate</p>
            <p className="mt-2">
              Use the worksheet as a planning canvas. Download responses, invite mentors,
              and attach research notes from field studies or family conversations.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <li>⬗ Mirror thinking with a compare-and-contrast chart.</li>
              <li>⬗ Record feedback loops after each iteration sprint.</li>
              <li>⬗ Celebrate productive disagreements.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
