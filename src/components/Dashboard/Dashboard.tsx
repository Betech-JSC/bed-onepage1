"use client";
import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import Sidebar from "./SidebarDashboard";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFC]">
      <div className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <HeaderDashboard />
      </div>
      <div className="grid grid-cols-12">
        <Sidebar />
       <div className="col-span-12 min-h-screen bg-[#F8FAFC] p-8 lg:col-span-8 xl:col-span-9">
  {/* Header Section */}
  <div className="mb-8 space-y-[8px]">
    <h1 className="text-[30px] font-bold text-black">
      Chào mừng trở lại, <span className="text-[#EC5B13]">Tên người dùng!</span>
    </h1>
    <p className="text-[16px] text-[#64748B]">
      Dưới đây là tổng quan về hoạt động của bạn trong 30 ngày qua.
    </p>
  </div>
  <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
    <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
        <img src="/images/dashboard/website.svg" alt="icon" className="h-6 w-6" />
      </div>
      <div>
        <p className="text-[12px] font-bold tracking-wider text-[#64748B] uppercase">Tổng số Website</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-black">12</span>
          <span className="flex items-center text-[12px] font-bold text-green-500">
             <img src="/path-to-up-arrow.svg" className="w-3 h-3 mr-1" /> 20%
          </span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
        <img src="/images/dashboard/view.svg" alt="icon" className="h-6 w-6" />
      </div>
      <div>
        <p className="text-[12px] font-bold tracking-wider text-[#64748B] uppercase">Truy cập tháng này</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-black">4.2k</span>
          <span className="flex items-center text-[12px] font-bold text-green-500">
             <img src="/path-to-up-arrow.svg" className="w-3 h-3 mr-1" /> 15%
          </span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
        <img src="/images/dashboard/lead.svg" alt="icon" className="h-6 w-6" />
      </div>
      <div>
        <p className="text-[12px] font-bold tracking-wider text-[#64748B] uppercase">Số Lead thu thập</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-black">158</span>
          <span className="flex items-center text-[12px] font-bold text-green-500">
             <img src="/path-to-up-arrow.svg" className="w-3 h-3 mr-1" /> 8%
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-xl font-bold text-[#1E293B]">Website của tôi</h2>
    <div className="flex gap-2">
      <button title="Lọc website" className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-colors hover:bg-gray-50 active:bg-gray-100">
        <img src="/path-to-filter-icon.svg" alt="filter" className="h-5 w-5" />
      </button>
      <button title="Sắp xếp" className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-colors hover:bg-gray-50 active:bg-gray-100">
        <img src="/path-to-grid-icon.svg" alt="grid" className="h-5 w-5" />
      </button>
    </div>
  </div>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-[#94A3B8]">
        <img src="/path-to-thumbnail1.png" alt="preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute top-4 right-4 rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#166534]">
          PUBLISHED
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#EC5B13] transition-colors">Portfolio Doanh Nghiệp</h3>
        <p className="mt-1 text-sm text-gray-400">Cập nhật 2 giờ trước • portfolio-biz.1page.ai</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
            AI 
          </span>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <img src="/images/dashboard/more.svg" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-[#0F766E]">
        <img src="/path-to-thumbnail2.png" alt="preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
          DRAFT
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#EC5B13] transition-colors">Landing Page Marketing</h3>
        <p className="mt-1 text-sm text-gray-400">Cập nhật 1 ngày trước • campaign-x.1page.ai</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">Marketing</span>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <img src="/images/dashboard/more.svg" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <div className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-8 transition-all hover:border-[#EC5B13] hover:bg-white">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
        <img src="/images/dashboard/plus2.svg" alt="add" className="h-8 w-8 opacity-40 group-hover:opacity-100" />
      </div>
      <h3 className="font-bold text-[#1E293B] group-hover:text-[#EC5B13]">Tạo Website Mới</h3>
      <p className="mt-1 text-center text-sm text-gray-400">Sử dụng AI để xây dựng ngay</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
