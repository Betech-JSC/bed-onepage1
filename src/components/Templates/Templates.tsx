import React from "react";
import HeaderCategories from "./HeaderTemplates";
import CategoriesTemplates from "./CategoriesTemplate";


export default function Categories() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFC]">
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <HeaderCategories />
      </header>
      <div className="grid flex-1 grid-cols-12">
        <aside className="col-span-3 min-h-[calc(100vh-64px)] border-r border-gray-100 bg-white p-4">
          <CategoriesTemplates />
        </aside>
        <main className="col-span-9 bg-[#F8FAFC] p-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Choose a Template
              </h2>
              <p className="mt-1 text-slate-500">
                Start with a professional design and customize it with AI.
              </p>
            </div>
            <span className="text-sm font-medium text-slate-400">
              Showing 24 templates
            </span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-200">
                  {/*  <img src="..." className="object-cover w-full h-full" /> */}
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Template Image
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                    {item === 1
                      ? "Modern SaaS"
                      : item === 2
                        ? "Creator Portfolio"
                        : "Minimal Blog"}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
                    Perfect for tech startups and software products with a clean
                    aesthetic.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50">
                      Preview
                    </button>
                    <button className="rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-100 transition-all hover:bg-orange-700">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 pb-10">
            <button className="px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-900">
              Previous
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`h-10 w-10 rounded-xl text-sm font-bold transition-all ${
                  page === 1
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-200"
                    : "border border-slate-100 bg-white text-slate-600 hover:border-orange-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button className="rounded-xl border border-slate-100 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-orange-600">
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
