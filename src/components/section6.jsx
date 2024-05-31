import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const section4 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[80vh] items-center lg:pl-12 md:px-6 px-4 lg:px-0 gap-12 lg:gap-0 py-12 lg:py-0">
      <div className="flex order-2 lg:order-1 flex-col gap-4 w-full items-start md:items-center lg:items-start text-[#0B280D]">
        <span className=" text-[32px] md:text-[48px] lg:text-[90px] font-[600] leading-[0.9]">
          24/7 Support
        </span>
        <p className="text-[24px] md:text-[28px] lg:text-[32px] font-[400] lg:leading-[0.9] leading-[1]">
          Get assistance anytime, anywhere with our dedicated customer support
          team available around the clock.
        </p>
        <div className="flex gap-4 pt-12 flex-col md:flex-row w-full items-center">
          <button className="flex gap-2 text-[#95E095] bg-[#0B280D] px-4 py-3 rounded-lg items-center">
            <MdEmail /> Email Support
          </button>
          <button className="flex gap-2 text-[#95E095] bg-[#0B280D] px-4 py-3 rounded-lg items-center">
            <IoChatbubbleEllipses /> Chat Support
          </button>
        </div>
      </div>
      <div className="flex order-1 lg:order-2 w-full flex justify-center p-4 lg:p-0 h-full">
        <img src="/images/support.png" alt="globe" className="w-full h-full " />
      </div>
    </div>
  );
};

export default section4;
