import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navlinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Services", path: "/" },
    { title: "Rates", path: "/" },
    { title: "Contact Us", path: "/" },
  ];

  return (
    <>
      <nav className="hidden lg:flex w-full h-[4rem] px-12 items-center justify-between ">
        <div className="h-full">
          <img src="/images/logo.png" alt="remesa" className="h-full py-2" />
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex justify-end space-x-6">
            {Navlinks.map((link, index) => (
              <li key={index} className="cursor-pointer font-normal">
                {link.title}
              </li>
            ))}
          </ul>
          <div className="">
            <button className="text-white bg-[#39AE3A] border-none py-2 px-4 rounded-xl hover:bg-[#247125] transition-all ease-in-out">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <>
        <nav className="flex lg:hidden w-full h-[4rem] md:px-8 px-4 justify-between items-center py-3">
          <div className="h-full">
            <img src="/images/logo.png" alt="remesa" className="h-full py-2" />
          </div>
          <div className="w-fit" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <div className="flex flex-col">
                <div className="w-8 h-1 bg-black rounded-lg rotate-45 translate-y-1 -translate-x-2"></div>
                <div className="w-8 h-1 bg-black rounded-lg -rotate-45 -translate-x-2"></div>
              </div>
            ) : (
              <div className="w-10 h-10 grid grid-cols-2 items-center cursor-pointer">
                <div className="w-3 h-3 border-[3px] border-black rounded-full"></div>
                <div className="w-3 h-3 border-[3px] border-black rounded-full"></div>
                <div className="w-3 h-3 border-[3px] border-black rounded-full"></div>
                <div className="w-3 h-3 border-[3px] border-black rounded-full"></div>
              </div>
            )}
          </div>
        </nav>
        {isOpen && (
          <div className="w-full h-[100vh] z-[99]">
            <ul className="flex flex-col justify-start items-center h-full space-y-6 py-12 font-semibold">
              {Navlinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer font-normal text-black font-semibold"
                >
                  {link.title}
                </li>
              ))}
              <button className="text-white bg-[#39AE3A] border-none py-3 px-8 rounded-xl hover:bg-[#247125] transition-all ease-in-out">
                Sign Up
              </button>
            </ul>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
