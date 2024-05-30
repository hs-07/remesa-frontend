import React from "react";

const Label = ({ src, text, className }) => {
  return (
    <div
      className={`relative flex items-center text-white font-semibold px-4 py-2 ${className}`}
    >
      <div className="absolute inset-y-0 left-0 w-0 h-0 border-t-[1rem] border-t-transparent border-b-[1rem] border-b-transparent border-r-[1rem] border-r-green-500"></div>
      <div className="absolute inset-y-0 right-0 w-0 h-0 border-t-[1rem] border-t-transparent border-b-[1rem] border-b-transparent border-l-[1rem] border-l-green-500"></div>
      <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden mr-2 bg-white">
        <img src={src} alt="UAE Flag" className="w-full h-full object-cover" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Label;
