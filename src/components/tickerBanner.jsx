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
      <ul className="ticker flex items-center">
        {tickers.concat(tickers).map((ticker, index) => (
          <li className="mr-8" key={index}>
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
