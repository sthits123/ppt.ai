'use client'

import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { GoogleButton } from "@/components/landing/GoogleButton";
import { LogoIcon } from "@/components/landing/icons";

export default function SignUpPage(){
	const router=useRouter();
	const [error,setError]=useState<string|null >(null);
	
	async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
		e.preventDefault()
		setError(null)
		
		const formData=new FormData(e.currentTarget)
		
		const res=await signUp.email({
			name:formData.get('name') as string,
			email:formData.get('email') as string,
			password:formData.get('password') as string,
		});
        if(res.error){
			setError(res.error.message || 'Something went wrong.');
		}
		else {
			router.push('/dashboard')
		}
	}
	return (
		<main className="flex min-h-screen items-center justify-center bg-[#06070b] px-4 py-10 text-white">
			<div className="w-full max-w-md">
				<div className="mb-8 flex flex-col items-center text-center">
					<Link href="/" aria-label="SlideCraft home">
						<LogoIcon className="size-12" />
					</Link>
					<h1 className="mt-5 text-2xl font-bold">Create your account</h1>
					<p className="mt-1 text-sm text-zinc-400">
						Start making beautiful presentations in seconds.
					</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
					<GoogleButton className="w-full" label="Sign up with Google" />

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
							name="name"
							placeholder="Full Name"
							required
							className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2.5 text-sm outline-none transition focus:border-violet-500"
						/>
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
							minLength={8}
							className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2.5 text-sm outline-none transition focus:border-violet-500"
						/>
						<button
							type="submit"
							className="w-full rounded-xl bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
						>
							Create Account
						</button>
					</form>
				</div>

				<p className="mt-6 text-center text-sm text-zinc-400">
					Already have an account?{" "}
					<Link
						href="/sign-in"
						className="font-medium text-violet-400 hover:text-violet-300"
					>
						Sign in
					</Link>
				</p>
			</div>
		</main>
	)
}
