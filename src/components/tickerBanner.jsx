import React from "react";
import Label from "./label";

const TickerBanner = () => {
  const tickers = [
    { src: "/images/in.png", text: "IND" },
    { src: "/images/aed.png", text: "AED" },
    { src: "/images/aus.png", text: "AUS" },
    { src: "/images/bra.png", text: "BRA" },
    { src: "/images/cad.png", text: "CAD" },
    { src: "/images/chf.png", text: "CHF" },
    { src: "/images/cny.png", text: "CNY" },
    { src: "/images/eng.png", text: "ENG" },
    { src: "/images/eur.png", text: "EUR" },
    { src: "/images/usa.png", text: "USA" },
  ];

  return (
    <div className="w-full overflow-x-hidden -mt-4 mb-24">
      <ul className="flex  items-center animate-scroll sm:gap-12 md:gap-10 gap-6 transition-all duration-300">
        {tickers.map((ticker, index) => (
          <li className="" key={index}>
            <Label
              src={ticker.src}
              text={ticker.text}
              color={index % 2 === 0 ? "#0B280D" : "#39AE3A"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerBanner;
