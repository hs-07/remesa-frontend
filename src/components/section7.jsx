import React from "react";

const section7 = () => {
  return (
    <div className="p-4 md:p-6 lg:p-12 w-full mt-20">
      <div className="bg-[#0B280D] w-full py-12 justify-center items-center flex flex-col gap-4 rounded-[50px] px-6">
        <img src="/images/smile.png" alt="smile" className="" />
        <span className="text-[32px] md:text-[48px] lg:text-[90px] font-[600] text-[#95E095]">
          Easy-to-Use
        </span>
        <p className="text-[#95E095] text-[32px] text-center">
          Transfer money on the go with our user-friendly website.
        </p>
        <div className="flex gap-4 pt-4 flex-col md:flex-row">
          <button className="border-2 border-[#95E095] bg-[#0C3506] text-[#95E095] rounded-lg w-56 py-2">
            Create Account
          </button>
          <button className="border-2 border-[#95E095] bg-[#0C3506] text-[#95E095] rounded-lg w-56 py-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default section7;
