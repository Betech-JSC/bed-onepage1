"use client";
import React, { useState } from "react";
import PricingBox from "../Pricing/PricingBox";
import OfferList from "../Pricing/OfferList";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const comparisonData = [
    { label: "Số lượng Landing Page", v1: "01", v2: "10", v3: "Vô hạn" },
    { label: "Tên miền tuỳ chỉnh", v1: "—", v2: "3 domain", v3: "Vô hạn" },
    { label: "Dung lượng lưu trữ", v1: "100 MB", v2: "2 GB", v3: "20 GB" },
    {
      label: "AI Copywriting Tool",
      v1: "Cơ bản",
      v2: "Nâng cao",
      v3: "Không giới hạn",
    },
    {
      label: "Hỗ trợ khách hàng",
      v1: "Cộng đồng",
      v2: "Email/Ticket",
      v3: "Hotline 24/7",
    },
  ];

  return (
    <main className="bg-slate-50 pb-24 font-bold text-slate-900">
      <div className="px-6 py-16 text-center md:px-[64px] md:py-24">
        <h1 className="mx-auto max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-[56px]">
          Kế hoạch giá đơn giản cho <br className="hidden md:block" /> mọi nhu
          cầu
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
          Chọn gói dịch vụ phù hợp để bắt đầu tối ưu hóa tỷ lệ chuyển đổi của
          bạn ngay hôm nay với sức mạnh từ AI.
        </p>
        <div className="mt-12 flex items-center justify-center gap-5">
          <span
            className={`text-base font-semibold transition-colors duration-300 ${!isYearly ? "text-slate-900" : "text-slate-400"}`}
          >
            Hàng tháng
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="group relative h-8 w-16 flex-shrink-0 rounded-full bg-slate-200 p-1 transition-all duration-500 hover:bg-slate-300 hover:shadow-inner"
          >
            <div
              className={`h-6 w-6 transform rounded-full shadow-lg transition-all duration-500 ease-in-out group-hover:scale-110 ${
                isYearly
                  ? "translate-x-8 bg-[#E75B1B] shadow-orange-200"
                  : "translate-x-0 bg-white"
              }`}
            />
          </button>
          <span
            className={`text-base font-semibold transition-colors duration-300 ${isYearly ? "text-slate-900" : "text-slate-400"}`}
          >
            Hàng năm{" "}
            <span className="ml-1 text-sm font-bold tracking-wider text-[#22C55E] uppercase">
              (Tiết kiệm 20%)
            </span>
          </span>
        </div>
      </div>
      <div className="mx-auto mb-32 max-w-7xl px-6">
        <div className="grid grid-cols-12 items-stretch gap-y-8 md:gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PricingBox
              packageName="MIỄN PHÍ"
              price="0"
              duration="tháng"
              subtitle="Dành cho cá nhân trải nghiệm"
            >
              <OfferList text="1 Landing Page duy nhất" status="active" />
              <OfferList text="Tên miền 1page.ai.vn/user" status="active" />
              <OfferList text="Dung lượng 100MB" status="active" />
              <OfferList text="Phân tích AI cơ bản" status="active" />
              <OfferList text="Không hỗ trợ tên miền riêng" status="inactive" />
            </PricingBox>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PricingBox
              packageName="1PAGE AI (STANDARD)"
              price={isYearly ? "159.000" : "199.000"}
              duration="tháng"
              subtitle="Phù hợp cho kinh doanh cá nhân"
            >
              <OfferList text="10 Landing Pages" status="active" />
              <OfferList text="Kết nối 3 tên miền riêng" status="active" />
              <OfferList text="Dung lượng 2GB" status="active" />
              <OfferList text="AI Content Generation" status="active" />
              <OfferList text="Hỗ trợ Ticket/Email" status="active" />
            </PricingBox>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-auto">
            <PricingBox
              packageName="1PAGE PRO"
              price={isYearly ? "399.000" : "499.000"}
              duration="tháng"
              subtitle="Dành cho Agency và Doanh nghiệp"
            >
              <OfferList text="Không giới hạn Landing Pages" status="active" />
              <OfferList text="Không giới hạn tên miền" status="active" />
              <OfferList text="Dung lượng 20GB" status="active" />
              <OfferList text="Marketing Automation" status="active" />
              <OfferList text="Hỗ trợ ưu tiên 24/7" status="active" />
            </PricingBox>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-32 max-w-7xl px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-900 md:text-[40px]">
          So sánh chi tiết tính năng
        </h2>
        <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:block">
          <div className="grid grid-cols-12 border-b border-slate-100 bg-slate-50/50">
            <div className="col-span-4 p-8 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              Tính năng
            </div>
            <div className="col-span-2 p-8 text-center font-bold text-slate-900">
              Miễn Phí
            </div>
            <div className="col-span-3 p-8 text-center font-bold text-slate-900">
              1Page AI
            </div>
            <div className="col-span-3 p-8 text-center font-bold text-slate-900">
              1Page Pro
            </div>
          </div>

          {comparisonData.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 border-b border-slate-50 transition-colors last:border-0 hover:bg-slate-50"
            >
              <div className="col-span-4 p-8 text-[15px] font-medium text-slate-600">
                {row.label}
              </div>
              <div className="col-span-2 p-8 text-center text-[15px] font-bold text-slate-900">
                {row.v1}
              </div>
              <div className="col-span-3 p-8 text-center text-[15px] font-bold text-slate-900">
                {row.v2}
              </div>
              <div className="col-span-3 p-8 text-center text-[15px] font-bold text-slate-900">
                {row.v3}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6 lg:hidden">
          {[
            {
              name: "Miễn Phí",
              color: "border-slate-200",
              text: "text-slate-900",
              key: "v1",
            },
            {
              name: "1Page AI",
              color: "border-slate-200",
              text: "text-slate-900",
              key: "v2",
            },
            {
              name: "1Page Pro",
              color: "border-slate-200",
              text: "text-slate-900",
              key: "v3",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border bg-white ${plan.color} p-6 shadow-sm`}
            >
              <h3 className={`mb-4 text-lg font-bold ${plan.text}`}>
                {plan.name}
              </h3>
              <div className="space-y-4">
                {comparisonData.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-slate-50 pb-2 text-sm last:border-0"
                  >
                    <span className="font-medium text-slate-500">
                      {item.label}
                    </span>
                    <span className="font-bold text-slate-900">
                      {(item as any)[plan.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-100 bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-[40px]">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 font-medium text-slate-500">
              Mọi thắc mắc của bạn đều được giải đáp tại đây
            </p>
          </div>
          <div className="grid gap-6">
            <FaqItem
              q="Tôi có thể nâng cấp gói dịch vụ sau này hay không?"
              a="Hoàn toàn được. Bạn có thể nâng cấp gói dịch vụ bất kì lúc nào. Hệ thống sẽ tự động trừ đi số tiền bạn đã thanh toán ở gói cũ và chỉ tính phần chênh lệch."
            />
            <FaqItem
              q="Làm thế nào để kết nối tên miền riêng của tôi?"
              a="Chúng tôi cung cấp tài liệu hướng dẫn cực kỳ dễ hiểu. Nếu bạn gặp khó khăn, đội ngũ kỹ thuật của 1Page sẽ hỗ trợ cài đặt qua Ultraview/Zalo cho bạn."
            />
            <FaqItem
              q="Tôi có được hỗ trợ thiết kế không?"
              a="Với các gói trả phí, chúng tôi tặng kèm kho Template mẫu chuẩn conversion và AI sẽ hỗ trợ bạn lên ý tưởng nội dung chỉ trong vài giây."
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const FaqItem = ({ q, a }: { q: string; a: string }) => (
  <div className="group rounded-[32px] border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:border-[#E75B1B]/20 hover:bg-white hover:shadow-xl hover:shadow-orange-900/5">
    <p className="mb-3 flex items-center gap-3 text-lg font-bold text-slate-900">
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#E75B1B]" /> {q}
    </p>
    <p className="pl-5 leading-relaxed font-medium text-slate-600">{a}</p>
  </div>
);
