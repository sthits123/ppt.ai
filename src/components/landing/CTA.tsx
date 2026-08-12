import { PrimaryCTA } from "./PrimaryCTA";
import { SparklesIcon } from "./icons";

export function CTA() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/30 via-[#0b0d14] to-fuchsia-600/20 px-6 py-16 text-center sm:px-16 sm:py-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="animate-pulse-glow absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative">
          <SparklesIcon className="mx-auto size-8 text-violet-300" />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to create your next deck?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
            Join thousands of presenters turning ideas into stunning
            presentations — free to start, no credit card required.
          </p>
          <div className="mt-9 flex justify-center">
            <PrimaryCTA />
          </div>
          <p className="mt-5 text-sm text-zinc-500">
            Free forever plan · Export to PPTX, PDF · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
