"use client";
import React from "react";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;
  const isPro = packageName.toLowerCase() === "pro";

  return (
    <div className="w-full h-full">
      <div className={`relative z-10 h-full rounded-[32px] bg-white px-8 py-10 transition-all duration-300 hover:shadow-2xl flex flex-col ${
        isPro 
          ? "border-[3px] border-[#E75B1B] shadow-2xl scale-105" 
          : "border border-gray-100 shadow-lg hover:-translate-y-2"
      }`}>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className={`text-xl font-extrabold uppercase tracking-wider text-[#E75B1B]`}>
              {packageName}
            </h4>
            {isPro && (
              <span className="bg-[#E75B1B] text-white text-[10px] px-3 py-1 rounded-full font-bold">
                RECOMMENDED
              </span>
            )}
          </div>
          
          <div className="flex items-baseline">
            <span className="text-4xl font-black text-[#111827]">{price === "0" ? "" : "đ"}</span>
            <span className="text-4xl font-black text-[#111827]">{price}</span>
            <span className="text-gray-400 font-medium ml-1">/{duration}</span>
          </div>
          <div className="h-6 mt-2">
            {subtitle && (
              <p className="text-gray-400 text-sm font-medium line-through">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="mb-8">
          <button className={`flex w-full items-center justify-center rounded-full py-4 text-base font-bold transition-all duration-300 shadow-md active:scale-95 bg-white text-orange-600 hover:text-white hover:bg-[#E75B1B] shadow-orange-200`}>
            Đăng Ký Ngay
          </button>
        </div>
        <div className="flex-grow space-y-2">
          {children}
        </div>
        <div className="absolute right-0 bottom-0 z-[-1] opacity-[0.05] pointer-events-none">
          <svg width="150" height="130" viewBox="0 0 179 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z" fill="#E75B1B" />
            <path d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z" fill="#E75B1B" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;