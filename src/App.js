import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";

const App = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="max-w-[1600px] w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
