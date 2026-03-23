"use client";

import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Xây dựng niềm tin khách hàng - Thách thức lớn nhất?",
    content:
      "Niềm tin là yếu tố quan trọng nhất trong kinh doanh. Khách hàng cần thời gian để tin tưởng thương hiệu.",
  },
  {
    id: 2,
    title: "Làm thế nào để giữ chân khách hàng giữa 'rừng' đối thủ?",
    content:
      "Với 1Page AI, giao diện nổi bật, đề xuất cá nhân hoá theo ngành hàng giúp khách hàng khó lòng rời đi.",
    highlight: "👉 Hãy dùng 1Page AI ngay!",
  },
  {
    id: 3,
    title: "Cạnh tranh giá - Cuộc đua bền bỉ hay bế tắc?",
    content:
      "Thay vì giảm giá, doanh nghiệp nên tập trung vào giá trị và trải nghiệm khách hàng.",
  },
];

export default function Accordion() {
  const [active, setActive] = useState<number | null>(2);

  const toggle = (id: number) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {data.map((item) => (
        <div
          key={item.id}
          className={`border transition-all duration-300 rounded-[24px] overflow-hidden ${
            active === item.id 
              ? "bg-[#FFF7ED] border-[#FFD8B1] shadow-sm" 
              : "bg-white border-gray-100 hover:border-gray-200 shadow-sm"
          }`}
        >
          <button
            onClick={() => toggle(item.id)}
            className="flex justify-between items-center w-full text-left p-5 md:p-6 transition-colors"
          >
            <span className={`text-lg font-bold pr-4 ${
              active === item.id ? "text-[#E75B1B]" : "text-[#111827]"
            }`}>
              {item.title}
            </span>

            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              active === item.id ? "bg-[#E75B1B] text-white rotate-180" : "bg-gray-100 text-gray-500"
            }`}>
              {active === item.id ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </div>
          </button>

          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              active === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 md:px-6 pb-6 pt-0">
              <div className="h-[1px] bg-orange-200 mb-4 opacity-50"></div>
              <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
                {item.content}
              </p>

              {item.highlight && (
                <p className="mt-4 text-[#E75B1B] font-bold flex items-center bg-white py-2 px-4 rounded-lg border border-orange-100 w-fit">
                  {item.highlight}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}