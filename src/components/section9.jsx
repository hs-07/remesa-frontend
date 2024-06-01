import React from "react";

const section9 = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center overflow-x-hidden w-full px-4 md:px-6 lg:px-0">
      <div className=" text-[32px] md:text-[36px] lg:text-[90px] text-[#0B280D] font-[600] pb-12">
        How It Works.
      </div>
      <div className="flex gap-6 lg:gap-12 text-[24px] overflow-x-auto w-full lg:w-fit justify-start lg:justify-center ">
        <div className="bg-[#1D4A1F] rounded-xl flex flex-col justify-between items-center px-4 py-6 gap-6 max-w-[280px] min-w-[280px]">
          <img src="/images/button.png" alt="button" className="" />
          <div className="flex flex-col justify-center items-center leading-[0.9] text-center gap-2">
            <span className="text-white">Step 1</span>
            <p className="text-[#95E095]">Create an account in minutes</p>
          </div>
          <button className="bg-[#2A8F2B] text-[16px] h-[50px] text-white w-full rounded-lg">
            Sign Up
          </button>
        </div>
        <div className="bg-[#1D4A1F] rounded-xl flex flex-col justify-between items-center px-4 py-6 gap-6 max-w-[280px] min-w-[280px]">
          <div className="flex justify-between items-center gap-3">
            <img src="/images/usa-big.png" alt="button" className="h-18" />
            <img src="/images/arrows.png" alt="button" className="h-6" />
            <img src="/images/in-big.png" alt="button" className="h-18" />
          </div>
          <div className="flex flex-col justify-center items-center leading-[0.9] text-center gap-2">
            <span className="text-white">Step 2</span>
            <p className="text-[#95E095]">
              Select who you want to send money to
            </p>
          </div>
          <button className="bg-[#2A8F2B] text-[16px] h-[50px] text-white w-full rounded-lg">
            Sign Up
          </button>
        </div>
        <div className="bg-[#1D4A1F] rounded-xl flex flex-col justify-center items-center px-4 py-6 gap-6 max-w-[280px] min-w-[280px]">
          <img src="/images/account.png" alt="button" className="" />
          <div className="flex flex-col justify-center items-center leading-[0.9] text-center gap-2">
            <span className="text-white">Step 3</span>
            <p className="text-[#95E095]">
              Complete the transfer quickly and securely
            </p>
          </div>
          <button className="bg-[#2A8F2B] text-[16px] h-[50px] text-white w-full rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default section9;
