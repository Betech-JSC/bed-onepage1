"use client";
import { useState } from "react";
import PricingBox from "./PricingBox";
import OfferList from "./OfferList";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 lg:py-24 bg-[#FFF7ED] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-[#E75B1B] font-bold uppercase tracking-widest text-sm">
            Lựa chọn gói phù hợp với bạn
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
            Bảng Giá 1PageAI
          </h2>
          <p className="text-[#6B7280] text-lg">
            Miễn phí khi tạo website. Hãy trải nghiệm thử và chọn gói nâng cấp khi bạn sẵn sàng để bứt phá doanh thu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingBox
            packageName="Free"
            price="0"
            duration="vĩnh viễn"
            subtitle="Dành cho người mới bắt đầu"
          >
            <OfferList text="Tùy chỉnh nội dung không giới hạn" status="active" />
            <OfferList text="Lựa chọn template đa dạng" status="active" />
            <OfferList text="Tích hợp tiện ích chăm sóc khách" status="active" />
            <OfferList text="Băng thông không giới hạn" status="active" />
          </PricingBox>
          <div className="relative transform lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E75B1B] text-white px-4 py-1 rounded-full text-xs font-bold uppercase z-20 shadow-lg">
              Phổ biến nhất
            </div>
            <PricingBox
              packageName="Pro"
              price="668,000đ"
              duration="năm"
              subtitle="Phù hợp cá nhân kinh doanh"
            >
              <OfferList text="Bao gồm các tính năng gói Free" status="active" />
              <OfferList text="Giới hạn 1 sản phẩm trên 1Page" status="active" />
              <OfferList text="Không giới hạn quản lý đơn hàng" status="active" />
              <OfferList text="Hỗ trợ ưu tiên 24/7" status="active" />
            </PricingBox>
          </div>
          <PricingBox
            packageName="Plus"
            price="1,668,000đ"
            duration="năm"
            subtitle="Giải pháp cho doanh nghiệp"
          >
            <OfferList text="Bao gồm tất cả tính năng AI" status="active" />
            <OfferList text="Không giới hạn số lượng sản phẩm" status="active" />
            <OfferList text="Tùy chỉnh tên miền riêng (.com, .vn)" status="active" />
            <OfferList text="Tính năng phân tích chuyên sâu" status="active" />
          </PricingBox>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 pointer-events-none">
        <svg width="239" height="601" viewBox="0 0 239 601" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2" transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear)" />
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