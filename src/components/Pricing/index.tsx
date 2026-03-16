"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="p-[32px] bg-[#FFF7ED] text-black">
      <div className=" space-y-[50px]  text-black">
        <div className="text-center">
          <p className="text-[#E75B1B] font-semibold">Lựa chọn gói phù hợp với bạn</p>
          <h1 className="font-bold text-[#111827] text-[36px]">Bảng Giá 1PageAI</h1>
          <p className="text-[#6B7280]">Miễn phí khi tạo website. Hãy trải nghiệm thử và chọn gói nâng cấp khi bạn sẵn sàng.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Free"
            price={"0"}
            duration={"yr"}
            subtitle=""
          >
            <OfferList text="Tuỳ chỉnh nội dung không giới hạn" status="active" />
            <OfferList text="Lựa chọn template đa dạng" status="active" />
            <OfferList text="Tích hợp tiện ích chăm sóc khách hàng" status="active" />
            <OfferList text="Băng thông không giới hạn" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={"668,000đ"}
            duration={"yr"}
            subtitle="1.668.000đ/yr"
          >
            <OfferList text="Bao gồm các tính năng gói free" status="active" />
            <OfferList text="Giới hạn 1 sản phẩm trên 1Page" status="active" />
            <OfferList text="Không giới hạn quản lí đơn hàng" status="active" />
            <OfferList text="Chăm sóc khách 24/7" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={"1.668.000đ"}
            duration={"yr"}
            subtitle="1.668.000đ/yr"
          >
            <OfferList text="Bao gồm tất cả gói AI" status="active" />
            <OfferList text="Không giới hạn số lượng sản phẩm" status="active" />
            <OfferList text="Tuỳ chỉnh tên miền riêng cho page" status="active" />
            <OfferList text="Tính năng nâng cao chuyên sâu" status="active" />
          </PricingBox>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-20">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E75B1B" />
              <stop offset="1" stopColor="#E75B1B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;