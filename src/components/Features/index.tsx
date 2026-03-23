"use client";
import Link from "next/link";
import Accordion from "./accordion";

const Features = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      {/* Container giúp nội dung không tràn lề trên màn hình lớn */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Thông tin & Contact Card */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/images/feature/dash.svg" alt="icon" className="w-5 h-5" />
                <p className="font-bold uppercase tracking-wider text-sm text-[#E75B1B]">
                  Thách Thức Cho Nhà Bán Hàng
                </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-black leading-tight">
                Kinh Doanh Online 2026: <br className="hidden md:block" /> 
                Bạn Đã Chuẩn Bị Để <span className="text-[#E75B1B]">Vượt Sóng Gió</span> Chưa?
              </h2>
            </div>

            {/* Contact Box: Tối ưu bo góc và đổ bóng nhẹ */}
            <div className="bg-[#FFF7ED] rounded-[32px] p-8 md:p-10 border border-orange-100 shadow-sm">
              <h3 className="text-black font-bold text-xl mb-3">Bạn Cần Trợ Giúp?</h3>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
                Liên hệ với 1Page. Chúng tôi rất vui khi được đồng hành cùng bạn trên hành trình số hóa.
              </p>
              
              <Link href="/contact" className="inline-block">
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
                  Liên Hệ Ngay 1PageAI
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Accordion */}
          <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-0">
            <div className="rounded-2xl bg-white">
              <Accordion />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;