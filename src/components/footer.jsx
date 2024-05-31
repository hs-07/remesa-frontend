import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  const AboutLinks = [
    { name: "Help Center", link: "/" },
    { name: "About Company", link: "/" },
    { name: "Careers", link: "/" },
    { name: "Service Status", link: "/" },
    { name: "Press", link: "/" },
  ];
  const ServicesLinks = [
    { name: "Send Money", link: "/" },
    { name: "Receive Money", link: "/" },
    { name: "International Transfer", link: "/" },
  ];
  const QuickLinks = [
    { name: "Privacy Policy", link: "/" },
    { name: "Terms and Conditions", link: "/" },
    { name: "Cookie Policy", link: "/" },
    { name: "Legal", link: "/" },
    { name: "Complaints", link: "/" },
  ];

  return (
    <div className="bg-[#0B280D] pt-16 w-full flex flex-col items-center">
      <div className="">
        <img src="/images/logo2.png" alt="logo" className="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 w-full px-12 gap-4">
        <ul className="flex flex-col gap-2 w-full items-center lg:items-start">
          <li className="text-[#95E095] text-[32px] font-[500]">About US</li>
          {AboutLinks.map((link, index) => (
            <li className="text-white" key={index}>
              {link.name}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full items-center lg:items-start">
          <li className="text-[#95E095] text-[32px] font-[500]">Services</li>
          {ServicesLinks.map((link, index) => (
            <li className="text-white" key={index}>
              {link.name}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full items-center lg:items-start">
          <li className="text-[#95E095] text-[32px] font-[500]">Quick links</li>
          {QuickLinks.map((link, index) => (
            <li className="text-white">{link.name}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full items-center lg:items-start">
          <li className="text-[#95E095] text-[32px] font-[500]">Offices</li>
          <li className="text-[#95E095] text-[20px] font-[500]">UAE</li>
          <li className="text-white font-[500] text-center lg:text-start">
            Goldcrest Executive, <br />
            Jumierah Lake Towers
            <br /> Cluster C Dubai UAE
          </li>
          <li className="text-[#95E095] text-[20px] font-[500]">UK</li>
          <li className="text-white font-[500] text-center lg:text-start">
            71-75 Shelton Street <br />
            Covent Garden ,London
            <br /> WC2H 9HQ
          </li>
        </ul>
      </div>
      <div className="bg-[#0C3506] w-full text-white text-center py-4">
        © remesa.finance 2024
      </div>
    </div>
  );
};

export default footer;
