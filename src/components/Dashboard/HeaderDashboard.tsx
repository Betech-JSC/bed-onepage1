'use client';
import React from 'react'
import Link from 'next/link'

export default function HeaderCategories() {
  return (
    <header className='grid grid-cols-12 bg-white py-3 md:py-4 px-4 md:px-8 items-center border-b border-gray-100 sticky top-0 z-50 gap-2 md:gap-4'>
      <div className='col-span-3 md:col-span-2 flex items-center'>
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
        <img src="/images/logo/logo2.svg" alt="" />
        </Link>
      </div>
      <div className='col-span-5 md:col-span-7 flex justify-center'>
        <div className="relative w-full max-w-[500px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4 pointer-events-none">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-50 border border-gray-200 text-slate-900 rounded-full py-1.5 md:py-2.5 pl-8 md:pl-11 pr-2 md:pr-4 text-[10px] md:text-sm focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-[#E75B1B] transition-all"
          />
        </div>
      </div>
      <div className='col-span-4 md:col-span-3 flex justify-end items-center gap-2 md:gap-8'>
        <Link 
          href="/projects" 
          className="border-r border-solid border-gray-400 pr-[16px]"
        >
          <img src="/images/dashboard/bell.svg" alt="" />
        </Link>
        <Link 
          href="/upgrade" 
          className="flex space-x-[12px] "
        >
          <div className=''>
            <p className='text-[14px] font-bold text-[#0F172A]'>Tên người dùng</p>
            <p className='text-[#64748B] font-medium'>Pro plan</p>
          </div>
          <img className='w-[40px] h-[40px] rounded-full' src="/images/dashboard/ava.svg" alt="" />
        </Link>
      </div>

    </header>
  )
}