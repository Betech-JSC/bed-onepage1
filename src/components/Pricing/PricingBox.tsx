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

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-xl bg-white px-8 py-10 border-2 border-[#E75B1B] shadow-lg transition-all hover:shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-bold text-black">
            $<span className="amount">{price}</span>
            <span className="text-[#6B7280] text-lg font-medium">
              /{duration}
            </span>
          </h3>
          <h4 className="text-black mb-2 text-xl font-bold">
            {packageName}
          </h4>
        </div>
        <p className="text-[#4B5563] mb-7 text-base leading-relaxed line-through">
          {subtitle}
        </p>

        <div className="border-gray-100 mb-8 border-b pb-8">
          <button className="bg-black hover:bg-gray-800 flex w-full items-center justify-center rounded-full p-4 text-base font-bold text-white transition duration-300 ease-in-out shadow-md">
            Bắt đầu dùng thử
          </button>
        </div>

        <div className="space-y-4">{children}</div>
        <div className="absolute right-0 bottom-0 z-[-1] opacity-10">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="#E75B1B"
            />
            <path
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="#E75B1B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;