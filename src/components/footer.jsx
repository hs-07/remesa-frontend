import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  const quickLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Privacy Policy", link: "/privacyPolicy" },
    { title: "Terms and Conditions", link: "termsAndConditions" },
    { title: "Cookie Policy", link: "cookiePolicy" },
    { title: "Contact Us", link: "/contact" },
  ];
  const usefulLinks = [
    { title: "Payments", link: "/comingSoon" },
    { title: "Partnerships", link: "/comingSoon" },
    { title: "POS", link: "/comingSoon" },
    { title: "API", link: "/comingSoon" },
  ];
  return (
    <div className="bg-[#0B280D] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-4 lg:px-16">
        <div className="gap-4 flex flex-col pt-3">
          <img src="/images/logo2.png" alt="logo" className="w-full lg:w-2/3" />
          <p className="text-[20px] font-[400] text-white">
            Remesa: Connecting Hearts, Transferring Wealth
            <br />
            <br />
            Follow us on
          </p>
          <div className="flex gap-4">
            <img
              src="/images/lin.svg"
              alt="linkedIN"
              className="cursor-pointer"
            />
            <img
              src="/images/insta.svg"
              alt="insta"
              className="cursor-pointer"
            />
            <img src="/images/fb.svg" alt="fb" className="cursor-pointer" />
            <img src="/images/x.svg" alt="x" className="cursor-pointer" />
          </div>
        </div>
        <div className="gap-4 flex flex-col text-white">
          <h1 className="text-[40px] font-[600] ">Quick Links</h1>
          {quickLinks.map((link) => (
            <Link to={link.link} className="text-[18px] font-[400]">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="gap-4 flex flex-col text-white">
          <h1 className="text-[40px] font-[600] ">Useful Links</h1>
          {usefulLinks.map((link) => (
            <Link to={link.link} className="text-[18px] font-[400] ">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="gap-4 flex flex-col text-white">
          <h1 className="text-[40px] font-[600]">Get in touch</h1>
          <span className="font-[600] text-[24px]">Office Address</span>
          <p className="">
            Interverse Solutions Limited 775 Shelton Street Covent Garden London
            WC2H 9JQ
          </p>

          <span className="font-[600] text-[24px]">Email Address</span>
          <p className="">support@interversesolutions.com</p>
        </div>
      </div>

      <div className="bg-[#0C3506] w-full text-white text-center py-4">
        © remesa.finance 2024
      </div>
    </div>
  );
};

export default footer;
