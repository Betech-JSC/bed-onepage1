import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
     <section className="bg-white bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,92,0,0.08)_0%,_rgba(255,255,255,1)_100%)] py-[70px] px-[32px] ">
      <div className=" w-fit mx-auto flex justify-center  gap-2 bg-[#FFF5F0] border border-[#FFEDDE] px-4 py-2 rounded-full">
        <img src="/images/hero/dot.svg" alt="" />
        <p className="text-[#E75B1B] font-semibold">Hơn 100,000+ Khách Hàng Đã Tin Dùng!</p>
      </div>
      <div className="text-center space-y-[12px]">
        <h1 className="text-[60px] font-bold text-black">1Page AI - Tạo Website <br /><span className="text-[#E75B1B]">Bán Hàng Trong 1 Phút</span></h1>
        <p className="text-[#4B5563]">
            Giao diện đẹp, tính năng đầy đủ, hiệu quả bán hàng cao - mọi thứ sẵn sàng chỉ <br /> sau 1 phút.
          </p>
          <div className="flex justify-center pt-[50px] space-x-[15px]">
            <div>
              <Link href="/signup" className="text-white hover:text-[#FFA500] font-bold bg-black rounded-full p-[20px]">
                Đăng Kí Tài Khoản
              </Link>
           </div>
            <div>
              <Link href="/" className="text-white hover:text-primary font-bold bg-[#FFA500] rounded-full p-[20px]">
                Trải Nghiệm Miễn Phí
              </Link>
            </div>
          </div>
      </div>
     </section>
    </>
  );
};

export default Hero;
