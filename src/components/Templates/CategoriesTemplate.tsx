"use client";

import React, { useState } from "react";

const SidebarFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All Templates");
  const categories = [
    "All Templates",
    "E-commerce",
    "Portfolio",
    "Landing Page",
    "Blog & News",
    "Business",
    "Personal",
    "SaaS",
  ];
  const styles = ["Minimalist", "Colorful", "Professional"];
  return (
    <div className="flex flex-col gap-8 py-2">
      <section>
        <h3 className="mb-4 px-4 text-[11px] font-bold tracking-[0.1em] text-slate-400 uppercase">
          Categories
        </h3>
        <ul className="space-y-0.5">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-lg px-4 py-2.5 text-[14px] transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-50 font-semibold text-orange-600"
                  : "text-slate-600 hover:bg-gray-50 hover:text-slate-900"
              } `}
            >
              {cat}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="mb-4 px-4 text-[11px] font-bold tracking-[0.1em] text-slate-400 uppercase">
          Style
        </h3>

        <ul className="space-y-4 px-4">
          {" "}
          {styles.map((style) => (
            <li
              key={style}
              className="group flex cursor-pointer items-center gap-3"
            >
              <div className="relative flex h-5 w-5 items-center justify-center">

                <input
                  type="checkbox"
                  id={style}
                  className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
                />

                {/* 2. Khung Box giả (Dùng để hiển thị giao diện) */}

                <div className="absolute inset-0 rounded border-[1.5px] border-slate-300 bg-white transition-all duration-200 group-hover:border-orange-400 peer-checked:border-orange-600 peer-checked:bg-orange-600"></div>

                {/* 3. Dấu tích SVG (Dùng Icon chuẩn của Lucide/HeroIcons) */}

                <svg
                  className="relative z-0 h-3.5 w-3.5 scale-0 transform text-white transition-all duration-200 peer-checked:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <label
                htmlFor={style}
                className="cursor-pointer text-sm text-slate-600 select-none group-hover:text-slate-900 peer-checked:text-slate-900"
              >
                {style}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SidebarFilter;
