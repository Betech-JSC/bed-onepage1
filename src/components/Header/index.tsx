"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  if (pathName !== "/") return null;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        sticky 
          ? "bg-white/95 py-2 shadow-sm backdrop-blur-md border-b border-slate-100" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center gap-2">
          <div className="col-span-6 md:col-span-3">
            <Link href="/" className="flex items-center gap-1.5 md:gap-3 group">
              <div className="bg-[#E75B1B] rounded-lg p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="w-5 h-5 md:w-7 md:h-7"
                  priority
                />
              </div>
              <span className="text-[17px] md:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
                1Page<span className="text-[#E75B1B]">AI</span>
              </span>
            </Link>
          </div>
          <nav className="hidden lg:col-span-6 lg:flex justify-center items-center space-x-1">
            {[
              { name: "Giao Diện Mẫu", href: "/templates" },
              { name: "Bảng Giá", href: "/pricing" },
              { name: "Liên Hệ", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#E75B1B] transition-colors rounded-full hover:bg-slate-50 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="col-span-6 md:col-span-9 lg:col-span-3">
            <div className="flex justify-end items-center gap-2 md:gap-6">
              <Link 
                href="/signin" 
                className="px-2 py-1.5 text-xs md:text-sm font-bold text-slate-700 hover:text-[#E75B1B] transition-colors whitespace-nowrap transition-hover hover:scale-105"
              >
                Đăng Nhập
              </Link>
              <Link 
                href="/signup" 
                className="rounded-full bg-[#E75B1B] px-3 py-1.5 md:px-7 md:py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-100 hover:bg-[#d44d15] transition-all active:scale-95 whitespace-nowrap transition-transform hover:scale-105"
              >
                Đăng Ký
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;