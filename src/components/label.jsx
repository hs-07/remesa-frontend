import React from "react";

const Label = ({ src, text, color }) => {
  return (
    <div
      className="relative flex items-center text-white font-semibold px-10 py-2 h-14"
      style={{ backgroundColor: color }}
    >
      <div className="absolute left-0 w-0 h-0 border-y-[1.7rem] border-y-transparent border-l-[20px] border-white"></div>
      <div
        className="absolute right-[-20px] w-0 h-0 border-y-[1.7rem] border-y-transparent border-l-[20px]"
        style={{ borderLeftColor: color }}
      ></div>
      <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden mr-2 bg-white">
        <img
          src={src}
          alt={`${text} Flag`}
          className="w-full h-full object-cover"
        />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Label;
