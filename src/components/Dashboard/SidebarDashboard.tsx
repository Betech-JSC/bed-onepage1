import React, { useState } from 'react';

const SidebarDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { label: 'Dashboard', icon: '/images/dashboard/dashboard.svg' },
    { label: 'My Websites', icon: '/images/dashboard/glove.svg' },
    { label: 'Templates', icon: '/images/dashboard/Template.svg' },
    { label: 'Analytics', icon: '/images/dashboard/chart.svg' },
    { label: 'Billing', icon: '/images/dashboard/Bill.svg' },
    { label: 'Settings', icon: '/images/dashboard/setting.svg' },
  ];

  return (
    <aside className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col p-6 bg-white border-r border-gray-100 min-h-[calc(100vh-64px)]">
      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = activeTab === item.label;
          return (
            <div
              key={index}
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl cursor-pointer transition-all duration-200
                ${isActive 
                  ? 'bg-[#FFF3ED] text-[#FF5712] font-semibold' 
                  : 'text-gray-500 hover:bg-[#FFF9F6] hover:text-[#FF5712]'
                }`}
            >
              <img 
                src={item.icon} 
                alt={item.label} 
                className={`w-5 h-5 ${isActive ? '' : 'opacity-60 group-hover:opacity-100'}`} 
              />
              <span className="text-[15px]">{item.label}</span>
            </div>
          );
        })}
      </nav>
      <div className="mt-auto bg-[#FFF9F6] border border-[#FFE8DE] rounded-[24px] p-6 mb-6">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          Storage Used
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-[#FF5712] h-2 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
        </div>
        <p className="text-sm font-bold text-gray-700">
          1.2 GB <span className="text-gray-400 font-normal ml-1">of 2 GB</span>
        </p>
      </div>
      <div className="transition-all duration-300">
        {activeTab === 'Dashboard' || activeTab === 'My Websites' ? (
          <button className="w-full bg-[#FF5712] hover:bg-[#E84D10] text-white py-4 rounded-[20px] font-bold flex items-center justify-center gap-3 shadow-lg shadow-orange-100 transition-transform active:scale-95">
            <img src="/images/dashboard/plus.svg" alt="plus" className="w-5 h-5 invert" />
            <span className="text-[16px]">Tạo Website Mới</span>
          </button>
        ) : activeTab === 'Billing' ? (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-[20px] font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-100 transition-transform active:scale-95">
            <span className="text-[16px]">Nâng cấp gói cước</span>
          </button>
        ) : (
          <button className="w-full bg-gray-800 hover:bg-black text-white py-4 rounded-[20px] font-bold flex items-center justify-center gap-3 transition-transform active:scale-95">
            <span className="text-[16px]">Lưu thay đổi</span>
          </button>
        )}
      </div>
    </aside>
  );
};

export default SidebarDashboard;