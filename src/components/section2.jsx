import React from "react";

const section2 = () => {
  return (
    <div className="bg-[#e2f7e1] grid lg:grid-cols-2 grid-cols-1 lg:h-[90vh] items-center lg:px-12 md:px-6 px-4 gap-12 lg:gap-0 py-12 lg:py-0">
      <div className="flex flex-col gap-4 w-full items-start md:items-center lg:items-start">
        <div className="">
          <img src="/images/meter.png" alt="meter" className="" />
        </div>
        <span className="text-[#0B280D] text-[32px] md:text-[48px] lg:text-[90px] font-[600] leading-[0.9]">
          Fast Transfer
        </span>
        <p className="text-[24px] md:text-[28px] lg:text-[32px] font-[400] lg:leading-[0.9] leading-[1]">
          Send money in minutes to over 100 countries. Experience instant
          transfers with Remesa
        </p>
      </div>
      <div className="flex w-full flex lg:justify-end justify-center p-6 lg:p-0">
        <img src="/images/globe.png" alt="globe" className="" />
      </div>
    </div>
  );
};

export default section2;
