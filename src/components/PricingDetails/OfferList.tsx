"use client";

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4.5L3.5 7L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const crossIcon = (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="flex items-start mb-4 group">
      <div className={`mt-1 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full transition-colors ${
        status === "active" 
          ? "bg-orange-100 text-[#E75B1B]" 
          : "bg-gray-100 text-gray-400"
      }`}>
        <span className="flex items-center justify-center">
          {status === "active" ? checkIcon : crossIcon}
        </span>
      </div>
      <p className={`ml-3 text-[15px] font-medium transition-colors leading-snug ${
        status === "active" 
          ? "text-gray-700 group-hover:text-black" 
          : "text-gray-400 line-through decoration-gray-200"
      }`}>
        {text}
      </p>
    </div>
  );
};

export default OfferList;