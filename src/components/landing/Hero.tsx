import { PrimaryCTA } from "./PrimaryCTA";
import {
  SparklesIcon,
  ArrowDownIcon,
  CheckIcon,
  PenIcon,
} from "./icons";

const perks = ["Free to start", "No credit card required", "Export to PPTX & PDF"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="animate-pulse-glow absolute left-1/2 top-0 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet-600/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow absolute right-[8%] top-48 size-96 rounded-full bg-fuchsia-600/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
            <SparklesIcon className="size-3.5 text-violet-400" />
            AI-powered presentations
            <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-0.5 text-[10px] font-semibold text-white">
              NEW
            </span>
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Turn any idea into a{" "}
            <span className="text-gradient">stunning deck</span> in seconds
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
            style={{ animationDelay: "160ms" }}
          >
            Describe your topic and SlideCraft&apos;s AI writes the content,
            designs the slides, and generates the visuals — so you can present
            like a pro without starting from a blank canvas.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <PrimaryCTA className="w-full sm:w-auto" />
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-zinc-200 transition hover:bg-white/10 sm:w-auto"
            >
              See how it works
              <ArrowDownIcon className="size-4" />
            </a>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500"
            style={{ animationDelay: "320ms" }}
          >
            {perks.map((perk) => (
              <span key={perk} className="inline-flex items-center gap-1.5">
                <CheckIcon className="size-4 text-emerald-400" />
                {perk}
              </span>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto mt-16 max-w-5xl sm:mt-20"
          style={{ animationDelay: "420ms" }}
        >
          <div
            className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/15 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <EditorMock />
        </div>
      </div>
    </section>
  );
}

function EditorMock() {
  return (
    <div className="animate-float relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]/90 shadow-2xl shadow-violet-950/40 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-500">
          app.slidecraft.ai/edit/quantum-computing-explained
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-44 flex-col gap-3 border-r border-white/10 p-3 sm:flex">
          <div className="rounded-lg border border-violet-500/50 bg-violet-500/10 p-2">
            <div className="h-14 rounded-md bg-gradient-to-br from-violet-500/50 to-fuchsia-500/30" />
            <div className="mt-2 h-1.5 w-3/4 rounded bg-white/20" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-white/10" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
            <div className="h-14 rounded-md bg-gradient-to-br from-indigo-500/40 to-sky-500/30" />
            <div className="mt-2 h-1.5 w-2/3 rounded bg-white/15" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-white/10" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
            <div className="h-14 rounded-md bg-gradient-to-br from-fuchsia-500/40 to-pink-500/30" />
            <div className="mt-2 h-1.5 w-1/2 rounded bg-white/15" />
            <div className="mt-1 h-1.5 w-3/4 rounded bg-white/10" />
          </div>
          <div className="rounded-lg border border-dashed border-white/15 p-2 text-center text-[10px] text-zinc-500">
            + Add slide
          </div>
        </aside>

        <div className="flex-1 p-5 sm:p-8">
          <div className="relative mx-auto aspect-[16/9] max-w-2xl overflow-hidden rounded-xl bg-white p-6 text-zinc-900 shadow-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div className="h-2.5 w-24 rounded-full bg-zinc-200" />
              <div className="h-2 w-16 rounded-full bg-zinc-200" />
            </div>
            <div className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
              Quantum Computing
            </div>
            <div className="mt-2 h-2 w-44 rounded-full bg-violet-300" />
            <div className="mt-5 space-y-2">
              <div className="h-2 w-full rounded-full bg-zinc-200" />
              <div className="h-2 w-4/5 rounded-full bg-zinc-200" />
              <div className="h-2 w-3/5 rounded-full bg-zinc-200" />
            </div>
            <div className="mt-6 flex gap-3">
              <div className="h-12 w-20 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
              <div className="h-12 w-20 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
              <div className="hidden h-12 w-20 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500 sm:block" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-14 hidden items-center gap-2 rounded-full border border-violet-400/30 bg-[#0a0c12]/95 px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg shadow-violet-950/60 md:flex">
        <SparklesIcon className="size-4 animate-pulse-glow text-violet-400" />
        Generating slides…
        <span className="ml-1 inline-flex items-center gap-1">
          <span className="h-1 w-12 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </span>
          <span className="text-zinc-400">88%</span>
        </span>
      </div>

      <div className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full border border-white/10 bg-[#0a0c12]/95 px-3 py-2 text-xs text-zinc-400 md:flex">
        <PenIcon className="size-3.5 text-fuchsia-400" />
        Polished automatically by AI
      </div>
    </div>
  );
}
