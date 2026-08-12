import { StarIcon, QuoteIcon } from "./icons";

const testimonials = [
  {
    quote:
      "I used to spend a full day on every deck. With SlideCraft it's ten minutes — and the output looks better than what my old agency produced.",
    name: "Priya Sharma",
    role: "Head of Growth, Vertex",
    initials: "PS",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "The AI-generated charts and visuals are the killer feature. Our quarterly review went from painful to genuinely fun to put together.",
    name: "Marcus Webb",
    role: "Founder, Nimbus Labs",
    initials: "MW",
    color: "from-indigo-500 to-sky-500",
  },
  {
    quote:
      "Every pitch we ship is on-brand now. It applies our colors, logo, and fonts automatically — the whole team has stopped fighting formatting.",
    name: "Elena Costa",
    role: "Design Lead, Arcadia",
    initials: "EC",
    color: "from-fuchsia-500 to-pink-500",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative border-t border-white/5 py-24 sm:py-32">
      <div
        className="absolute right-0 top-0 size-96 rounded-full bg-fuchsia-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Loved by presenters everywhere
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Founders, marketers, and educators ship better decks in a fraction
            of the time.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glow-card relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <QuoteIcon className="absolute right-6 top-6 size-8 text-white/10" />
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
