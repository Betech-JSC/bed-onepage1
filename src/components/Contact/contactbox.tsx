"use client";
import React from 'react';

const ContactBox = () => {
  return (
    <div className="relative group">
      {/* Main Form Container */}
      <div className="relative z-10 rounded-[32px] bg-white p-8 md:p-10 shadow-2xl shadow-orange-100/50 border border-orange-50">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Họ và tên</label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-2xl border-2 border-gray-50 bg-gray-50 px-5 py-4 text-base text-black placeholder-[#9CA3AF] focus:ring-0 focus:border-[#E75B1B] focus:bg-white outline-none transition-all duration-300 shadow-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Số điện thoại</label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-2xl border-2 border-gray-50 bg-gray-50 px-5 py-4 text-base text-black placeholder-[#9CA3AF] focus:ring-0 focus:border-[#E75B1B] focus:bg-white outline-none transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 ml-2 uppercase tracking-wider">Nội dung tư vấn</label>
            <textarea
              rows={4}
              placeholder="Bạn đang quan tâm đến gói dịch vụ nào của 1PageAI?"
              className="w-full resize-none rounded-2xl border-2 border-gray-50 bg-gray-50 px-5 py-4 text-base text-black placeholder-[#9CA3AF] focus:ring-0 focus:border-[#E75B1B] focus:bg-white outline-none transition-all duration-300 shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="group/btn relative w-full overflow-hidden rounded-2xl bg-[#111827] py-5 text-lg font-bold text-white transition-all hover:bg-black active:scale-[0.96] shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center">
              Gửi yêu cầu ngay
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Hiệu ứng màu cam quét qua khi hover nút */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#E75B1B] to-[#ff8c52] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <p className="text-center text-xs text-gray-400">
            Chúng tôi sẽ bảo mật thông tin của bạn tuyệt đối.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;