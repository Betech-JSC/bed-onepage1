"use client";
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <section className="grid grid-cols-12 items-center bg-white border-b border-gray-100 py-4 px-6 md:px-8">
      <div className="col-span-6 md:col-span-4">
        <Link href="/" className="flex items-center text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-[#D9531E]">1Page</span>
          <span className="text-[#1e293b]">.ai.vn</span>
        </Link>
      </div>
      <div className="col-span-6 md:col-span-8">
        <div className="flex items-center justify-end gap-4 md:gap-10">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-[14px] lg:text-[15px] font-medium text-[#475569] transition-colors hover:text-[#D9531E]">
              Trang chủ
            </Link>
            <Link href="/" className="text-[14px] lg:text-[15px] font-medium text-[#475569] transition-colors hover:text-[#D9531E]">
              Tính năng
            </Link>
            <Link href="/" className="text-[14px] lg:text-[15px] font-medium text-[#475569] transition-colors hover:text-[#D9531E]">
              Bảng giá
            </Link>
          </nav>
          <Link href="/signup">
            <button className="rounded-lg bg-[#D9531E] px-4 py-2 md:px-6 md:py-2.5 text-[13px] md:text-[15px] font-bold text-white shadow-sm transition-all hover:bg-[#BF4618] active:scale-95">
              Bắt đầu ngay
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  )
}