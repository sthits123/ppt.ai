"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { LogoIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "./icons";
import { GoogleButton } from "./GoogleButton";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-[#06070b]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon className="size-9" />
          <span className="text-lg font-semibold tracking-tight text-white">
            SlideCraft
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {session?.user ? (
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              Dashboard
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                Sign in
              </Link>
              <GoogleButton size="sm" label="Get started" />
            </>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#06070b]/95 px-5 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            {session?.user ? (
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
              >
                Open Dashboard
                <ArrowRightIcon className="size-4" />
              </Link>
            ) : (
              <>
                <GoogleButton label="Get started with Google" />
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="text-center text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  Sign in instead
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
