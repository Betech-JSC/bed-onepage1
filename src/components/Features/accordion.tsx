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
    <div className="max-w-xl mx-auto space-y-4">
      {data.map((item) => (
        <div
          key={item.id}
          className={`border rounded-xl p-4 transition ${
            active === item.id ? "bg-orange-50 border-orange-300" : "bg-white"
          }`}
        >
          <button
            onClick={() => toggle(item.id)}
            className="flex justify-between items-center w-full text-left font-semibold"
          >
            {item.title}

            <span className="text-xl">
              {active === item.id ? "-" : "+"}
            </span>
          </button>

          {active === item.id && (
            <div className="mt-3 text-gray-600">
              <p>{item.content}</p>

              {item.highlight && (
                <p className="mt-2 text-orange-500 font-semibold">
                  {item.highlight}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}