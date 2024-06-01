import React from "react";

const TestimonialCard = () => {
  return (
    <div className=" rounded-lg flex flex-col w-full">
      <p className="">
        I've been using this international money transfer app for over a year
        now, and I am thoroughly impressed with its performance. The interface
        is incredibly user-friendly, making it easy for even non-tech-savvy
        individuals to navigate
      </p>
      <div className="flex w-full justify-between h-12 items-center">
        <img src="/images/test.png" alt="test" className="" />
        <span className="text-[#0B280D] font-[600] text-[20px]">Alice</span>
        <img src="/images/stars.png" alt="star" className="h-8" />
      </div>
    </div>
  );
};

export default TestimonialCard;
