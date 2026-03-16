"use client";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Review() {
  return (
    <>
      <section className="bg-white text-black p-[32px] space-y-[20px]">
        <div className="text-center space-y-[16px]">
          <div>
            <p className="text-[#E75B1B] font-semibold">1PageAI - Sự Khác Biệt Trên Từng Điểm Chạm</p>
          </div>
          <h1 className="font-bold text-[36px]">
            Chọn 1PageAI-Bứt Phá Kinh Doanh
          </h1>
          <p className="text-[#6B7280]">Nhanh Chóng - Chuyển Nghiệp - Dễ Dàng - Dễ Sử DỤng - Tiết Kiệm-Hiệu Quả</p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 space-y-6">
            <div className="flex flex-col items-center text-center space-y-[10px] ">
              <img className="shadow-sm rounded-[16px]" src="/images/video/town.svg" alt="" />
              <h2 className="font-bold text-[18px]">Làm Chủ Toàn Diện</h2>
              <p className="text-[#6B7280]">Bạn có thể chủ động cập nhận thông tin sản phẩm, bài viết <br /> mà không phụ thuộc vào TMĐT</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-[10px] ">
              <img className="shadow-sm rounded-[16px]" src="/images/video/thunder.svg" alt="" />
              <h2 className="font-bold text-[18px]">Thiết Lập Nhanh Chóng</h2>
              <p className="text-[#6B7280]">Chỉ với vài thao tác cơ bản, website của bạn sẽ sẵn sàng vận <br /> hành chỉ trong 1 phút</p>
            </div>
          </div>
          <div className="col-span-4 flex justify-center">
            <img className="w-[384px] h-[658px]" src="/images/hero/demo1.png" alt="" />
          </div>
          <div className="col-span-4 space-y-6">
            <div className="flex flex-col items-center text-center space-y-[10px] ">
              <img className="shadow-sm rounded-[16px]" src="/images/video/rep.svg" alt="" />
              <h2 className="font-bold text-[18px]">Xây dựng thương hiệu</h2>
              <p className="text-[#6B7280]">Sở hữu website chuyên nghiệp giúp tăng độ uy tín và <br />tin cậy cho thương hiệu của bạn</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-[10px] ">
              <img className="shadow-sm rounded-[16px]" src="/images/video/thunder.svg" alt="" />
              <h2 className="font-bold text-[18px]">Tối ưu chuyển đổi</h2>
              <p className="text-[#6B7280]">Cấu trúc website tối ưu giúp khách hàng dễ dàng mua sắm <br />và chốt đơn nhanh nhất</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}