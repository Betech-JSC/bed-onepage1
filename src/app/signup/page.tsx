import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <section className="flex min-h-screen w-full font-sans">
      <div className="relative hidden w-[55%] flex-col items-center justify-center bg-[#D9531E] p-12 lg:flex">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] font-bold whitespace-nowrap text-white/10 select-none">
          Build Your Vision with AI
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight">
            1page.ai.vn
          </h1>
          <p className="mx-auto max-w-md text-lg leading-relaxed font-light opacity-90">
            The future of website building is here. Transform your ideas into
            professional pages in seconds with the power of Artificial
            Intelligence.
          </p>
          <div className="mt-10 flex justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-white"></span>
            <span className="h-1 w-5 rounded-full bg-white/40"></span>
            <span className="h-1 w-5 rounded-full bg-white/40"></span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-white px-8 py-12 lg:w-[45%] lg:px-20">
        <div className="w-full max-w-[420px]">
          <h2 className="text-3xl font-bold text-[#111827]">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#D9531E] hover:underline"
            >
              Log in here
            </Link>
          </p>
          <div className="mt-8 flex gap-4">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="h-5 w-5"
                alt="Google"
              />
              Google
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="h-5 w-5"
                alt="Facebook"
              />
              Facebook
            </button>
          </div>
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              Or continue with email
            </span>
            <div className="h-px flex-1 bg-gray-100"></div>
          </div>
          <form className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition outline-none focus:border-[#D9531E] focus:ring-1 focus:ring-[#D9531E] dark:bg-white dark:text-gray-900"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition outline-none focus:border-[#D9531E] focus:ring-1 focus:ring-[#D9531E] dark:bg-white dark:text-gray-900"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition outline-none focus:border-[#D9531E] focus:ring-1 focus:ring-[#D9531E] dark:bg-white dark:text-gray-900"
              />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D9531E] focus:ring-[#D9531E]"
              />
              <p className="text-xs leading-relaxed text-gray-500">
                I agree to the{" "}
                <Link href="#" className="font-medium text-[#D9531E]">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-medium text-[#D9531E]">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <button className="w-full rounded-lg bg-[#D9531E] py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-700/20 transition hover:bg-[#BF4618] active:scale-[0.98]">
              Create Account
            </button>
          </form>
          <p className="mt-10 text-center text-[11px] text-gray-400">
            © 2026 1page.ai.vn. All rights reserved. Built for creators.
          </p>
        </div>
      </div>
    </section>
  );
}
