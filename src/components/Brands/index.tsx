"use client";
import React from "react";
import Link from "next/link";
export default function Brands() {
  return (
    <section className=" bg-white p-[32px] text-black space-y-[64px]">
      <div className="grid grid-cols-12">
        <div className="col-span-8 space-y-[15px]">
          <h2 className="text-[12px] font-bold text-[#9CA3AF]">-WHAT WE DO</h2>
          <h1 className="font-bold text-[36px] text-[#111827]">
            Chúng tôi không chỉ tạo ra website <br />
            sáng tạo, mà còn xây dựng những câu <br /> chuyện trải nghiệm
          </h1>
        </div>
        <div className="col-span-4 flex flex-col items-start space-y-[32px] pl-[40px]">
          <p className="text-[18px] text-[#6B7280] leading-relaxed">
            Mỗi thương hiệu chúng tôi chạm vào đều là một <br />
            câu chuyện cần được kể một cách cảm xúc.
          </p>

          <Link href="/">
            <button className="bg-black text-white px-[35px] py-[18px] rounded-full font-bold flex items-center group transition-all hover:bg-gray-800">
              Khám phá ngay
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 space-y-[16px]">
         <div className="flex justify-center">
            <Link href="/">
              <img className="w-[384px] h-[288px] rounded-[16px]" src="/images/brands/demo2.png" alt="" />
            </Link>
         </div>
          <div>
            <Link href="/">
            <p className="text-[#111827] font-bold text-[18px]">Website-Bánh Flan Chu Ken</p>
            <p className="text-[#6B7280] font-semibold">thơm ngon,mềm min,hương vị tuyệt vời</p>
            </Link>
          </div>
        </div>
        <div className="col-span-4 space-y-[16px]">
         <div className="flex justify-center">
            <Link href="/">
              <img className="w-[384px] h-[288px] rounded-[16px]" src="/images/brands/demo3.png" alt="" />
            </Link>
         </div>
          <div>
            <Link href="/">
            <p className="text-[#111827] font-bold text-[18px]">Website-Bánh Flan Chu Ken</p>
            <p className="text-[#6B7280] font-semibold">thơm ngon,mềm min,hương vị tuyệt vời</p>
            </Link>
          </div>
        </div>
        <div className="col-span-4 space-y-[16px]">
         <div className="flex justify-center">
            <Link href="/">
              <img className="w-[384px] h-[288px] rounded-[16px]" src="/images/brands/demo4.png" alt="" />
            </Link>
         </div>
          <div>
            <Link href="/">
            <p className="text-[#111827] font-bold text-[18px]">Website-Bánh Flan Chu Ken</p>
            <p className="text-[#6B7280] font-semibold">thơm ngon,mềm min,hương vị tuyệt vời</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
