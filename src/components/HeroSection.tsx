import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative isolate w-full py-40 lg:py-44 items-center overflow-hidden   ">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center text-balance max-w-[1000px] mx-auto space-y-14">
        {/* <span className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-indigo-100">
          Introduce Markinzy 🎉
        </span> */}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950">
          Make Marketing Effortless with
          <span className="ml-2 text-indigo-50 leading-relaxed px-2 py-1 bg-indigo-500 rounded-xl items-center hover:bg-indigo-50 hover:text-indigo-950 hover:border border-indigo-950 ease-in-out transition-colors">
            Markinzy
          </span>
        </h1>

        <p className="max-w-[800px] text-lg text-indigo-950/85 font-semibold">
          All-in-One Platform for Digital Marketers and Agencies to Optimize
          Campaigns, Automate Content Creation, and Boost Performance.
        </p>

        <div className="flex justify-center">
          <Button className="rounded-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 px-4 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline">
            Get Started - it's free 💰
          </Button>
        </div>
      </div>
      {/* <div className="absolute inset-0 mt-8 grid-container -z-10"></div> */}
    </div>
  );
};

export default HeroSection;