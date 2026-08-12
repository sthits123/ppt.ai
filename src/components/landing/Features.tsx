import {
  SparklesIcon,
  PaletteIcon,
  ImageIcon,
  UsersIcon,
  PresentationIcon,
  DownloadIcon,
} from "./icons";

const features = [
  {
    icon: SparklesIcon,
    title: "AI slide generation",
    desc: "Give SlideCraft a topic and watch it outline, write, and design a full deck — slides, bullets, and speaker notes included.",
  },
  {
    icon: PaletteIcon,
    title: "Designer templates",
    desc: "Pick from hundreds of beautiful, on-brand templates. Your deck looks like a professional design team made it.",
  },
  {
    icon: ImageIcon,
    title: "AI visuals & charts",
    desc: "Auto-generated diagrams, charts, and images that illustrate your data — no more stock-photo scavenger hunts.",
  },
  {
    icon: UsersIcon,
    title: "Real-time collaboration",
    desc: "Invite teammates, edit together, and leave comments in one shared workspace — all in your browser.",
  },
  {
    icon: PresentationIcon,
    title: "Present & export",
    desc: "Export to PowerPoint or PDF, or present right in the app with fullscreen mode and a built-in speaker view.",
  },
  {
    icon: DownloadIcon,
    title: "Automatic brand kit",
    desc: "Your brand colors, logo, and fonts are applied to every new deck automatically — consistent by default.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div
        className="absolute left-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            Features
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to look brilliant on stage
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            From first outline to final export, SlideCraft handles the heavy
            lifting so you can focus on your story.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glow-card group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-300 ring-1 ring-inset ring-white/10 transition group-hover:text-white">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
