import React from "react";
import AVISHKANDHRALogo from "../Images/AVISHKANDHRA Logo PNG 2.png";
const Footer = () => {
  return (
    <footer className="w-full bg-white mb-20 flex flex-col items-center text-center lg:-mt-36 md:-mt-24 -mt-20">
      {/* Logo Image */}
      <img
        src={AVISHKANDHRALogo}
        alt="Vishkandhra Logo"
        className="max-w-full h-auto mb-3"
      />

      {/* Tagline */}
      <p className="text-gray-700 italic text-base sm:text-2xl lg:-mt-20 -mt-8 ">
        Connecting Every Family to Entrepreneurship
      </p>
    </footer>
  );
};

export default Footer;
