"use client";
import React from "react";

interface PricingBoxProps {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}

const PricingBox = ({ price, duration, packageName, subtitle, children }: PricingBoxProps) => {
  const isStandard = packageName.toLowerCase().includes("standard");

  return (
    <div className="w-full h-full flex flex-col pt-4">
      <div className={`relative h-full rounded-[32px] md:rounded-[40px] bg-white px-6 py-10 md:px-8 md:py-12 transition-all duration-500 flex flex-col border ${
        isStandard 
          ? "border-[#E75B1B] shadow-[0_20px_50px_rgba(231,91,27,0.15)] lg:scale-105 z-10" 
          : "border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      }`}>
        <div className="text-left mb-4">
          <h4 className={`text-xl font-bold mb-2 tracking-tight ${isStandard ? "text-[#E75B1B]" : "text-slate-900"}`}>
            {packageName}
          </h4>
          
          <div className="flex items-baseline mb-2">
            <span className="text-3xl md:text-[40px] font-bold text-slate-900">đ{price}</span>
            <span className="text-slate-400 font-medium ml-1 text-sm">/{duration}</span>
          </div>
          
          <p className="text-slate-500 text-[14px] font-medium mb-8 leading-relaxed min-h-[40px]">
            {subtitle}
          </p>
        </div>

        <div className="mb-10">
          <button className={`w-full py-4 rounded-full text-[16px] font-bold transition-all duration-300 shadow-sm ${
            isStandard 
              ? "bg-[#E75B1B] text-white shadow-orange-200 hover:bg-[#c94d14]" 
              : "bg-white border border-gray-100 text-[#E75B1B] hover:bg-gray-50 shadow-sm"
          }`}>
            Đăng Ký Ngay
          </button>
        </div>

        <div className="flex-grow space-y-4 text-left">
          {children}
        </div>

        {/* Decoration SVG - Giữ nguyên của bạn nhưng ẩn trên Mobile cho thoáng */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none hidden md:block">
          <svg width="120" height="100" viewBox="0 0 179 158" fill="none">
            <path d="M75 63C115 82 136 137 141 162" stroke="#E75B1B" strokeWidth="20"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;