import React from "react";
import rtihLogo from "../Images/RTIH 1.png";
import AndhraPradeshLogo from "../Images/Andhra-Pradesh-Innovation-Society 2.png";
import AVISHKANDHRASTARTUPLogo from "../Images/AVISHKANDHRA_STARTUP_LOGO.png";

const Logos = () => {
  return (
    <div className="w-full bg-white py-3 px-3">
      <div className="max-w-[3000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-items-center">
        {/* First Logo - RTIH */}
        <img
          src={rtihLogo}
          alt="RTIH Logo"
          className="h-40 sm:h-72 object-contain sm:mt-[-50px]"
        />

        {/* Second Logo - AP Innovation Society */}
        <img
          src={AndhraPradeshLogo}
          alt="Andhra Pradesh Innovation Society Logo"
          className="h-16 sm:h-32 object-contain -mt-8"
        />

        {/* Third Logo - Startup Andhra Pradesh */}
        <img
          src={AVISHKANDHRASTARTUPLogo}
          alt="Startup Andhra Pradesh Logo"
          className="h-48 sm:h-72 object-contain sm:col-span-1 col-span-full -mt-12 sm:mt-[-50px]"
        />
      </div>
    </div>
  );
};

export default Logos;
