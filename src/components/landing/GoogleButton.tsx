"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "@/lib/auth-client";
import { GoogleIcon } from "./icons";

type GoogleButtonProps = {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<NonNullable<GoogleButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-5 py-3 text-sm gap-2.5",
  lg: "px-7 py-4 text-base gap-3",
};

export function GoogleButton({
  label = "Continue with Google",
  className = "",
  size = "md",
}: GoogleButtonProps) {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (session?.user) {
      router.push("/dashboard");
      return;
    }
    setLoading(true);
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  }

  const busy = loading || isPending;

  return (
    <button
      onClick={handleClick}
      disabled={busy}
      className={`group inline-flex items-center justify-center rounded-xl bg-white font-semibold text-zinc-900 shadow-lg shadow-white/10 transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 ${sizeClasses[size]} ${className}`}
    >
      {busy ? (
        <span className="size-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-900" />
      ) : (
        <GoogleIcon className="size-4" />
      )}
      <span>{busy ? "Please wait…" : label}</span>
    </button>
  );
}
