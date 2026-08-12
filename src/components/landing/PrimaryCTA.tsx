"use client";

import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { GoogleButton } from "./GoogleButton";
import { ArrowRightIcon } from "./icons";

export function PrimaryCTA({ className = "" }: { className?: string }) {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <GoogleButton label="Start free with Google" className={className} />;
  }

  if (session?.user) {
    return (
      <Link
        href="/dashboard"
        className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-violet-500/50 active:scale-[0.98] ${className}`}
      >
        Open Dashboard
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <GoogleButton label="Start free with Google" className={className} />
  );
}
