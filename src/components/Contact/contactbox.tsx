"use client";
import React from 'react';

const ContactBox = () => {
  return (
    <div className="relative">
      <div className="absolute -top-6 -right-6 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFEDDE] shadow-lg">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E75B1B] text-white font-serif italic text-2xl">
          i
        </div>
      </div>
      <div className="relative z-10 rounded-[32px] bg-[#F9FAFB] p-8 shadow-sm border border-gray-100">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full rounded-xl border-none bg-white px-5 py-4 text-base text-black placeholder-[#9CA3AF] focus:ring-2 focus:ring-[#E75B1B] outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full rounded-xl border-none bg-white px-5 py-4 text-base text-black placeholder-[#9CA3AF] focus:ring-2 focus:ring-[#E75B1B] outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              placeholder="Tôi có thể hỗ trợ được gì cho bạn?"
              className="w-full resize-none rounded-xl border-none bg-white px-5 py-4 text-base text-black placeholder-[#9CA3AF] focus:ring-2 focus:ring-[#E75B1B] outline-none transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-black py-4 text-lg font-bold text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
          >
            Gửi yêu cầu
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;