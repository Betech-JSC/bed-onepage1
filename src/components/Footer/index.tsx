"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
const pathName = usePathname();
if (pathName === "/templates") return null;
if (pathName === "/dashboard") return null;
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-[#FF5C00] rounded-xl p-2 w-10 h-10 flex items-center justify-center">
          <Image
            src="/images/logo/logo.svg"
            alt="Logo"
            width={24}
            height={24}
          />
        </div>
        <span className="text-2xl font-bold tracking-tight">1Page AI</span>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Hãy cho tôi 1 cơ hội <br />
          Tôi sẽ trả cho bạn sự nghiệp <br />
          trăm năm!
        </h1>
      </div>

      <button className="bg-[#1C1C1C] border border-gray-700 hover:bg-gray-800 transition-all text-white px-8 py-4 rounded-full text-lg font-medium mb-24">
        Trải nghiệm miễn phí
      </button>

      
      <div className="w-full max-w-5xl border-t border-gray-800 pt-12">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-400 text-sm mb-8">
          <Link href="/" className="hover:text-white transition">1Page</Link>
          <Link href="/pricing" className="hover:text-white transition">Bảng giá</Link>
          <Link href="/contact" className="hover:text-white transition">Liên hệ</Link>
          <Link href="/" className="hover:text-white transition">Chính sách bảo mật</Link>
          <Link href="/" className="hover:text-white transition">Điều khoản dịch vụ</Link>
        </div>
        <p className="text-center text-gray-600 text-xs">
          © Copyright by 1Page AI in 2026. All Rights Reserved.
        </p>
      </div>

    </section>
  );
};

export default Footer;
