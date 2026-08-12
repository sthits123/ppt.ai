"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { GoogleButton } from "@/components/landing/GoogleButton";
import { LogoIcon } from "@/components/landing/icons";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#06070b] px-4 py-10 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link href="/" aria-label="SlideCraft home">
            <LogoIcon className="size-12" />
          </Link>
          <h1 className="mt-5 text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Sign in to keep building your presentations.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <GoogleButton className="w-full" label="Continue with Google" />

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              or
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                {error}
              </p>
            )}
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2.5 text-sm outline-none transition focus:border-violet-500"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2.5 text-sm outline-none transition focus:border-violet-500"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
