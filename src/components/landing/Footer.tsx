import Link from "next/link";
import { LogoIcon, GithubIcon, XIcon, LinkedinIcon } from "./icons";

const columns = [
  {
    title: "Product",
    links: ["Features", "How it works", "Templates", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Help center", "Community", "API", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04050a]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoIcon className="size-9" />
              <span className="text-lg font-semibold tracking-tight text-white">
                SlideCraft
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              The AI presentation maker that turns any idea into a stunning,
              on-brand deck in seconds.
            </p>
            <div className="mt-6 flex gap-3">
              {[GithubIcon, XIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} SlideCraft, Inc. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Made with <span className="text-violet-400">♥</span> for presenters
            everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
