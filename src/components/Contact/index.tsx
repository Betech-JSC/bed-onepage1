"use client";
import React from 'react';
import ContactBox from './contactbox';

export default function Contact() {
  return (
    // Thêm pt-24 (hoặc pt-32) để đẩy nội dung xuống dưới Header fixed
    <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      
      {/* Decor nền nhẹ nhàng để trang bớt trống trải */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-orange-50/50 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          
          {/* LEFT SIDE: Info */}
          <div className="col-span-12 lg:col-span-6 space-y-10">
            <div className="space-y-6">
              {/* Hạ font-extrabold xuống font-bold cho đúng ý bạn (bớt cong/dày) */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight tracking-tight">
                Liên hệ với <span className="text-[#E75B1B]">chúng tôi</span>
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl font-medium">
                Dù bạn cần bất cứ điều gì, đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn từng 
                bước trên hành trình tạo dựng website bán hàng của riêng mình.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nhắn tin */}
              <div className="group space-y-4 p-6 rounded-2xl border border-transparent transition-all hover:border-orange-100 hover:bg-orange-50/30">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl group-hover:scale-110 transition-transform">
                  <img src="/images/contact/mess.svg" alt="Email" className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-[#111827]">Nhắn Cho Chúng Tôi</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Trò chuyện trực tiếp qua Chat để được hỗ trợ nhanh nhất.
                  </p>
                  <a 
                    href="mailto:lienhe@1page.ai.vn" 
                    className="inline-block text-[#E75B1B] font-bold hover:underline"
                  >
                    lienhe@1page.ai.vn
                  </a>
                </div>
              </div>

              {/* Hotline */}
              <div className="group space-y-4 p-6 rounded-2xl border border-transparent transition-all hover:border-orange-100 hover:bg-orange-50/30">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl group-hover:scale-110 transition-transform">
                  <img src="/images/contact/hotline.svg" alt="Hotline" className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-[#111827]">Gọi Hotline</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Liên hệ trực tiếp để được tư vấn chuyên sâu về dịch vụ.
                  </p>
                  <a 
                    href="tel:0775600351" 
                    className="inline-block text-[#E75B1B] font-bold hover:underline text-lg"
                  >
                    0775600351
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-orange-100 to-orange-50 rounded-[40px] blur-2xl opacity-50 z-0"></div>
              
              <div className="relative z-10 bg-white shadow-2xl shadow-orange-100/50 rounded-[32px] border border-gray-50 overflow-hidden">
                <ContactBox />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}