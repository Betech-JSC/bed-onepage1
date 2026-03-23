"use client";
import React from "react";
import Link from "next/link";

export default function Brands() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* TOP HEADER: Bố cục 8-4 trên PC */}
        <div className="grid grid-cols-12 gap-8 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <h2 className="text-xs font-bold text-[#E75B1B] tracking-[0.2em] uppercase">
              // What We Do
            </h2>
            <h1 className="font-extrabold text-3xl md:text-5xl text-[#111827] leading-tight">
              Chúng tôi không chỉ tạo ra website sáng tạo, mà còn xây dựng những câu chuyện trải nghiệm
            </h1>
          </div>
          
          <div className="col-span-12 lg:col-span-4 space-y-8 lg:pl-10">
            <p className="text-lg text-[#6B7280] leading-relaxed border-l-2 border-orange-100 pl-6">
              Mỗi thương hiệu chúng tôi chạm vào đều là một câu chuyện cần được kể một cách cảm xúc.
            </p>
            <Link href="/" className="inline-block">
              <button className="bg-[#111827] text-white px-8 py-4 rounded-full font-bold flex items-center group transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-100">
                Khám phá ngay
                <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* PROJECTS GRID: Bố cục 3 cột */}
        <div className="grid grid-cols-12 gap-8">
          {[
            { id: 2, title: "Website - Bánh Flan Chu Ken", desc: "Thơm ngon, mềm mịn, hương vị tuyệt vời" },
            { id: 3, title: "Website - Nội Thất Minimal", desc: "Tinh tế, hiện đại trong từng không gian" },
            { id: 4, title: "Website - Fashion AI", desc: "Xu hướng thời trang tương lai cho bạn" },
          ].map((project) => (
            <div key={project.id} className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer">
              <Link href="/">
                <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] mb-6">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={`/images/brands/demo${project.id}.png`} 
                    alt={project.title} 
                  />
                  {/* Overlay khi hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg">Xem dự án</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#111827] font-bold text-xl group-hover:text-[#E75B1B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#6B7280] font-medium italic">
                    {project.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}