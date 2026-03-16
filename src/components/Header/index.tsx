"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const usePathName = usePathname();

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <header className={`grid grid-cols-12 py-[16px] px-[32px] transition-all ${sticky ? "fixed top-0 z-50 w-full bg-white shadow-md" : "bg-white"}`}>
        <div className="col-span-2 flex space-x-[10px] items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
            <p className="text-[#111827] font-bold">1Page AI</p>
          </Link>
        </div>

        <div className="col-span-8 flex space-x-[30px] justify-center items-center">
          <Link href="/#"><p className="text-[#4B5563] font-bold hover:text-[#FFA500]">Giao Diện Mẫu</p></Link>
          <Link href="/#"><p className="text-[#4B5563] font-bold hover:text-[#FFA500]">Bảng Giá</p></Link>
          <Link href="/#"><p className="text-[#4B5563] font-bold hover:text-[#FFA500]">Liên Hệ</p></Link>
        </div>

        <div className="col-span-2 flex justify-end items-center space-x-[10px]">
         <div>
            <Link href="/signin" className="text-white hover:text-[#FFA500] font-bold bg-black rounded-full p-[20px]">
              Đăng Nhập
            </Link>
         </div>
          <div>
            <Link href="/signin" className="text-white hover:text-primary font-bold bg-[#FFA500] rounded-full p-[20px]">
              Đăng Kí
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;