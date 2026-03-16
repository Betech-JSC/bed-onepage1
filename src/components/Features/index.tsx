"use client";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Accordion from "./accordion";
const Features = () => {
  return (
    <>
      <section className="grid grid-cols-12 p-[32px] bg-white">
        <div className="col-span-6 space-y-[20px]">
          <div className="flex space-x-[10px]">
            <img src="/images/feature/dash.svg" alt="" />
            <p className="font-semibold text-[#E75B1B]">Thách Thức Cho Nhà Bán Hàng</p>
          </div>
          <h1 className="text-black font-bold text-[36px]">Kinh Doanh Online 2026: <br /> Bạn Đã Chuẩn Bị Để Vượt Sóng Gió Chưa</h1>
          <div className="space-y-[25px] bg-[#FFF7ED] rounded-[24px] p-[32px]">
            <p className="text-black font-bold">Bạn Cần Trợ Giúp ?</p>
            <p className="text-[#4B5563] text-[16px]">Liên hệ với 1Page.Chúng tôi rất vui khi được đồng hành cung bạn</p>
            <Link href="/contact">
              <button className="border-2 border-black px-6 py-2 rounded-full font-bold bg-black text-white">
                Liên Hệ Ngay 1PageAI
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-6 text-black">
          <Accordion />
        </div>
      </section>
    </>
  );
};

export default Features;
