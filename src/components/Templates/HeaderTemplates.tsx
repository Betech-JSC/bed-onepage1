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
          className="text-[10px] md:text-[14px] font-bold text-slate-600 hover:text-[#E75B1B] transition-all whitespace-nowrap"
        >
          My Projects
        </Link>
        <Link 
          href="/upgrade" 
          className="rounded-full bg-[#E75B1B] px-2 py-1.5 md:px-8 md:py-2.5 text-[10px] md:text-[14px] font-bold text-white shadow-lg shadow-orange-200 hover:bg-[#d44d15] transition-all active:scale-95 whitespace-nowrap"
        >
          Upgrade
        </Link>
      </div>

    </header>
  )
}