import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const Convertor = () => {
  return (
    <div className="flex flex-col border-2 border-[#39AE3A] rounded-3xl p-4 lg:w-2/3 w-full max-w-[500px] lg:max-w-full">
      <div className="border-2 border-[#39AE3A] flex rounded-xl items-center p-0 w-full h-20 lg:h-28">
        <div className="flex flex-col justify-center items-start w-[50%] lg:w-[60%] px-2 lg:px-6">
          <span className="text-[16px] lg:text-[20px] font-[600]">You Pay</span>
          <input
            type="text"
            value={100}
            className="border-none outline-none focus:border-none active:outline-none text-[20px] lg:text-[32px] font-[600] w-full bg-transparent p-0"
          />
        </div>
        <div className="flex gap-2 text-white bg-[#39AE3A] justify-center items-center h-full  w-[50%] lg:w-[40%] rounded-r-lg cursor-pointer">
          <img src="/images/usa.png" alt="usa" className="" />
          <span className="text-[24px] font-500">USD</span>
          <BiSolidDownArrow />
        </div>
      </div>
      <div className="flex flex-col py-8">
        <p className="font-[500]">
          Service fee : <span className="text-[#39AE3A]">2.79 USD</span>
        </p>
        <p className="font-[500]">
          FX Rate :{" "}
          <span className="text-[#39AE3A]">.00 USD = 82.4821 INR</span>
        </p>
        <p className="font-[500]">
          Recipient receives : <span className="text-[#39AE3A]"> $19</span>
        </p>
      </div>
      <div className="border-2 border-[#39AE3A] flex rounded-xl items-center p-0 w-full h-20 lg:h-28">
        <div className="flex flex-col justify-center items-start  w-[50%] lg:w-[60%] px-2 lg:px-6">
          <span className="text-[16px] lg:text-[20px] font-[600]">You Get</span>
          <input
            type="text"
            value={"82,321"}
            className="border-none outline-none focus:border-none active:outline-none text-[20px] lg:text-[32px] font-[600] w-full bg-transparent p-0"
          />
        </div>
        <div className="flex gap-2 text-white bg-[#39AE3A] justify-center items-center h-full  w-[50%] lg:w-[40%] rounded-r-lg cursor-pointer">
          <img src="/images/in.png" alt="usa" className="" />
          <span className="text-[24px] font-500">INR</span>
          <BiSolidDownArrow />
        </div>
      </div>
      <a
        href="https://ocp.mtbs.co/Account/Login?ReturnUrl=%2f"
        className="w-full"
      >
        <button
          className={
            "w-full text-white bg-[#39AE3A] border-none text-[16px] h-[50px] rounded-xl mt-8 font-semibold hover:bg-[#247125] transition-all ease-in-out"
          }
        >
          Get Started
        </button>
      </a>
    </div>
  );
};

export default Convertor;
