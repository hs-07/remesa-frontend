import React from "react";
import Convertor from "./convertor";

const Section1 = () => {
  return (
    <div className="lg:px-12 md:px-6 px-4 lg:h-screen grid lg:grid-cols-2 grid-cols-1 items-center lg:pb-[4rem] py-16">
      <div className="flex flex-col gap-6">
        <span className="text-[32px] md:text-[48px] lg:text-[96px] font-[600] leading-[0.9] text-[#0B280D]">
          Send Money Anywhere, Anytime with Remesa.
        </span>
        <p className="text-[20px] md:text-[28px] lg:text-[32px] font-[400] leading-[1]">
          Fast, Secure, and Reliable Money Transfers.
        </p>
      </div>
      <div className="flex w-full lg:justify-end justify-center py-12">
        <Convertor />
      </div>
    </div>
  );
};

export default Section1;
