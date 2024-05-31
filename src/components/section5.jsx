import React from "react";

const section4 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[70vh] items-center lg:px-12 md:px-6 px-4 gap-12 lg:gap-0 py-12 lg:py-0">
      <div className="flex w-full flex lg:justify-center justify-center p-6 lg:p-0">
        <img src="/images/dollar-globe.png" alt="dollar" className="" />
      </div>

      <div className="flex flex-col gap-6 w-full items-start md:items-center lg:items-start">
        <span className="text-[#0B280D] text-[32px] md:text-[48px] lg:text-[90px] font-[600] leading-[0.9]">
          Global Network
        </span>
        <p className="text-[24px] md:text-[28px] lg:text-[32px] font-[400] lg:leading-[0.9] leading-[1] text-[#0B280D]">
          Send money to any corner of the world with our extensive global
          network of partners and agents.
        </p>
      </div>
    </div>
  );
};

export default section4;