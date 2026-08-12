import { WandIcon, SparklesIcon, PresentationIcon } from "./icons";

const steps = [
  {
    icon: WandIcon,
    title: "Describe your idea",
    desc: "Type a topic or paste an outline. The more detail you give, the sharper the result.",
  },
  {
    icon: SparklesIcon,
    title: "AI builds your deck",
    desc: "SlideCraft generates the content, designs the slides, and creates matching visuals in under a minute.",
  },
  {
    icon: PresentationIcon,
    title: "Polish, present, export",
    desc: "Tweak anything with natural-language edits, then present live or export to PPTX and PDF.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            How it works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            From idea to polished deck in 3 steps
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            No design skills, no blank slide anxiety. Just describe what you
            need and let the AI do the rest.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <div
            className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t-2 border-dashed border-white/10 md:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="relative mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0d14] text-violet-300 shadow-lg shadow-violet-950/40">
                <step.icon className="size-6" />
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[11px] font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
