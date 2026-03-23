"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background Gradient tinh tế */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(231,91,27,0.05)_0%,_rgba(255,255,255,1)_70%)]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge niềm tin */}
          <div className="animate-fade-in-down mb-8 flex w-fit items-center gap-2 rounded-full border border-orange-100 bg-orange-50/50 px-5 py-2 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E75B1B] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E75B1B]"></span>
            </span>
            <p className="text-sm font-bold text-[#E75B1B] md:text-base">
              Hơn 100,000+ Khách Hàng Đã Tin Dùng!
            </p>
          </div>

          {/* Tiêu đề chính - Đổi font-black thành font-bold, bỏ SVG gạch chân cong */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-[#111827] md:text-6xl lg:text-7xl tracking-tight">
            1Page AI - Tạo Website <br />
            <span className="text-[#E75B1B]">Bán Hàng Trong 1 Phút</span>
          </h1>

          {/* Mô tả ngắn */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl font-medium">
            Giao diện đẹp, tính năng đầy đủ, hiệu quả bán hàng cao. Mọi thứ đã sẵn sàng để bứt phá doanh số chỉ sau vài cú click.
          </p>

          {/* Nhóm nút bấm hành động */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link 
              href="/signup" 
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[#111827] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-black hover:shadow-xl hover:shadow-gray-200 active:scale-95 sm:w-auto"
            >
              Đăng Kí Tài Khoản
            </Link>
            
            <Link 
              href="/" 
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#E75B1B] bg-white px-10 py-5 text-lg font-bold text-[#E75B1B] transition-all hover:bg-orange-50 active:scale-95 sm:w-auto shadow-lg shadow-orange-100/50"
            >
              <span>Trải Nghiệm Miễn Phí</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Demo Dashboard */}
          <div className="mt-16 w-full max-w-5xl rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
             <div className="overflow-hidden rounded-xl bg-gray-50">
                <img 
                  src="kkk" 
                  alt="1Page AI Dashboard" 
                  className="w-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;