import React from "react";
import {
  Navbar,
  Section1,
  TickerBanner,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="max-w-[1600px] w-full">
        <Navbar />
        <Section1 />
        <TickerBanner />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
