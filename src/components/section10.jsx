import React from "react";

const section19 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 px-4 md:px-6 lg:px-12">
        <span className="text-[32px] md:text[36px] lg:text-[90px] font-[600] text-[#0C3506] leading-[0.9] pb-10">
          Ready to Send Money?
        </span>
        <p className="text-[#0C3506] text-[24px] font-[400] pb-10">
          Join thousands of satisfied customers today.
        </p>
        <button className="w-48 py-3 font-[500] bg-[#39AE3A] border-none text-white rounded-lg">
          {" "}
          Sign Up Now
        </button>
      </div>
      <div className="flex flex-col justify-center items-center py-14 px-4 md:px-6 lg:px-12">
        <span className="text-[32px] md:text[36px] lg:text-[90px] font-[600] text-[#0C3506] leading-[0.9] pb-10">
          Follow us on
        </span>
        <div className="flex gap-4 lg:gap-6">
          <img
            src="/images/lin.png"
            alt=""
            className="hover:scale-105 transition-all ease-in-out cursor-pointer"
          />
          <img
            src="/images/insta.png"
            alt=""
            className="hover:scale-105 transition-all ease-in-out cursor-pointer"
          />
          <img
            src="/images/fb.png"
            alt=""
            className="hover:scale-105 transition-all ease-in-out cursor-pointer"
          />
          <img
            src="/images/twi.png"
            alt=""
            className="hover:scale-105 transition-all ease-in-out cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default section19;
