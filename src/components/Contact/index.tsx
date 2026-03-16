"use client";
import React from 'react'

import ContactBox from './contactbox';

export default function Contact() {
  return (
    <section className='p-[50px] grid grid-cols-12 bg-white text-black'>
      <div className='col-span-6 space-y-[24px]'>
       <div className='space-y-[24px]'>
          <h1 className='text-[#111827] font-bold text-[36px]'>Liên hệ với chúng tôi</h1>
          <p className='text-[#6B7280] text-[16px] font-semibold'>Dù bạn cần bất cứ điều gì, đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn từng <br /> bước trên hành trình tạo dựng website bán hàng của riêng mình.</p>
        </div>
        <div className='flex space-x-[30px]'>
          <div className='space-y-[14px]'>
            <img src="/images/contact/mess.svg" alt="" />
            <p className='font-bold text-[16px]'>Nhắn Cho Chúng Tôi</p>
            <p className='text-[#6B7280]'>Trò chuyện trực tiếp qua Chat để được <br /> gửi hỗ trợ</p>
            <p className='text-[14px] font-bold text-[#E75B1B]'>lienhe@1page.ai.vn</p>
          </div>
          <div className='space-y-[14px]'>
            <img src="/images/contact/hotline.svg" alt="" />
            <p className='font-bold text-[16px]'>Gọi Hotline</p>
            <p className='text-[#6B7280]'>Không gì tuyệt vời hơn khi liên hệ trực tiếp <br /> dể tư vấn</p>
            <p className='text-[14px] font-bold text-[#E75B1B]'>0775600351</p>
          </div>
        </div>

       </div>
      <div className='col-span-6'>
              <ContactBox />
      </div>
      
    </section>
  )
}
