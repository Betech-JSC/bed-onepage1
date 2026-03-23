"use client";
import Image from "next/image";

export default function Review() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-orange-50 rounded-full border border-orange-100">
            <p className="text-[#E75B1B] font-bold text-sm uppercase tracking-wider">
              Sự Khác Biệt Trên Từng Điểm Chạm
            </p>
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#111827]">
            Chọn 1PageAI - <span className="text-[#E75B1B]">Bứt Phá</span> Kinh Doanh
          </h2>
          <p className="text-gray-500 text-lg">
            Nhanh Chóng • Chuyên Nghiệp • Dễ Sử Dụng • Tiết Kiệm • Hiệu Quả
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 order-2 lg:order-1 space-y-12">
            <div className="group flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
              <div className="w-16 h-16 bg-white shadow-xl shadow-orange-100 rounded-[20px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8" src="/images/video/town.svg" alt="" />
              </div>
              <h3 className="font-bold text-xl text-[#111827]">Làm Chủ Toàn Diện</h3>
              <p className="text-gray-500 leading-relaxed">
                Bạn có thể chủ động cập nhật thông tin sản phẩm, bài viết mà không phụ thuộc vào TMĐT.
              </p>
            </div>

            <div className="group flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
              <div className="w-16 h-16 bg-white shadow-xl shadow-orange-100 rounded-[20px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8" src="/images/video/thunder.svg" alt="" />
              </div>
              <h3 className="font-bold text-xl text-[#111827]">Thiết Lập Nhanh Chóng</h3>
              <p className="text-gray-500 leading-relaxed">
                Chỉ với vài thao tác cơ bản, website của bạn sẽ sẵn sàng vận hành chỉ trong 1 phút.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 flex justify-center py-8 lg:py-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-200 blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                className="relative z-10 w-full max-w-[320px] lg:max-w-full drop-shadow-2xl animate-float" 
                src="/images/hero/demo1.png" 
                alt="Demo" 
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 order-3 space-y-12">
            <div className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="w-16 h-16 bg-white shadow-xl shadow-orange-100 rounded-[20px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8" src="/images/video/rep.svg" alt="" />
              </div>
              <h3 className="font-bold text-xl text-[#111827]">Xây dựng thương hiệu</h3>
              <p className="text-gray-500 leading-relaxed">
                Sở hữu website chuyên nghiệp giúp tăng độ uy tín và tin cậy cho thương hiệu của bạn.
              </p>
            </div>

            <div className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="w-16 h-16 bg-white shadow-xl shadow-orange-100 rounded-[20px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8" src="/images/video/thunder.svg" alt="" />
              </div>
              <h3 className="font-bold text-xl text-[#111827]">Tối ưu chuyển đổi</h3>
              <p className="text-gray-500 leading-relaxed">
                Cấu trúc website tối ưu giúp khách hàng dễ dàng mua sắm và chốt đơn nhanh nhất.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}