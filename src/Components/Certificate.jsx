import React from "react";
import certificate from "../Images/certificate.png";

const CertificateSample = () => {
  return (
    <div id="certificate" className="w-full flex flex-col items-center text-center py-8 mt-10 px-4 pt-36">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className=" sm:text-3xl md:text-4xl  mb-4 text-4xl font-extrabold text-[#283643]">
          CERTIFICATE (RECOGNITION)
        </h2>
        <p className="text-sm sm:text-base md:text-lg italic text-blue-900">
          THE BELOW IMAGE IS A SAMPLE REFERENCE OF THE CERTIFICATE YOU WILL RECEIVE UPON PARTICIPATION
        </p>
      </div>

      {/* Certificate Image - Full width with controlled aspect ratio */}
      <div className="w-full max-w-7xl mx-auto">
        <img
          src={certificate}
          alt="Certificate Sample"
          className="w-full h-auto -mt-7"
          style={{
            maxHeight: "90vh",  // Limits height to 80% of viewport height
            objectFit: "contain" // Ensures entire certificate is visible
          }}
        />
      </div>
    </div>
  );
};

export default CertificateSample;