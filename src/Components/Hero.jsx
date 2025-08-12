import React from "react";
import logo from "../Images/AVISHKANDHRA Logo PNG 1.png";
import pawanKalyan from "../Images/Rectangle 88.png";
import chandrababu from "../Images/Rectangle 89.png";
import lokesh from "../Images/Rectangle 90.png";

const AvishkAndhraBanner = () => {
    return (
        <>
            {/* Header Box */}
            <div className="relative z-20 px-4 sm:px-6 lg:px-8">
                <div
                    className="max-w-full xl:w-[1347px] h-auto sm:h-[120px] lg:h-[140px] rounded-[20px] p-[2px] mx-auto"
                    style={{
                        background: "linear-gradient(180deg, #283643 0%, #26639B 100%)",
                    }}
                >
                    <div className="bg-white text-black w-full h-full rounded-[18px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 lg:gap-8">
                        <img
                            src={logo}
                            alt="AvishkAndhra Logo"
                            className="w-[180px] xs:w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[500px]"
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-[36px] font-bold leading-tight sm:leading-snug">
                                Igniting Andhra Innovations
                            </h1>
                            <p className="mt-1 sm:mt-2 text-sm xs:text-base sm:text-lg md:text-xl lg:text-[28px] italic text-gray-600 sm:mr-0 md:mr-8 lg:mr-24">
                                Connecting Every Family to Entrepreneurship
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient background with content below header box */}
            <div 
                className="text-white pt-16 sm:pt-20 md:pt-24 lg:pt-[100px] pb-12 sm:pb-16 px-4 sm:px-6 rounded-b-[30px] -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-[70px]"
                style={{
                    background: "linear-gradient(359.61deg, #142E46 40.93%, #26639B 99.66%)",
                }}
            >
                {/* Description */}
                <div className="max-w-4xl xl:max-w-[1400px] mx-auto text-center">
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                        Andhra Pradesh is on the verge of making history. Under the visionary
                        leadership of our Hon'ble Chief Minister, the state is launching the world's
                        largest startup and innovation sensitization campaign — AVISHKANDHRA 2025.
                        With the "One Family, One Entrepreneur" mission, we aim to inspire over 1
                        crore youth and families to dream big, innovate, and lead the way in
                        entrepreneurship. This groundbreaking initiative aspires to set a Guinness
                        World Record and position Andhra Pradesh as a global leader in grassroots
                        innovation.
                    </p>
                </div>

                {/* Leader Cards */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-32 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                    {/* Pawan Kalyan */}
                    <div className="flex flex-col items-center text-center w-full sm:w-auto">
                        <img
                            src={pawanKalyan}
                            alt="Pawan Kalyan"
                            className="w-32 xs:w-36 sm:w-40 md:w-44 lg:w-52 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 object-cover rounded-[10px]"
                        />
                        <p className="mt-2 text-xs sm:text-sm">Hon'ble Deputy Chief Minister</p>
                        <p className="font-bold text-white text-sm sm:text-base">
                            Sri. Konidela Pawan Kalyan
                        </p>
                    </div>

                    {/* Chandrababu Naidu */}
                    <div className="flex flex-col items-center text-center w-full sm:w-auto">
                        <img
                            src={chandrababu}
                            alt="N. Chandrababu Naidu"
                            className="w-32 xs:w-36 sm:w-40 md:w-44 lg:w-52 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 object-cover rounded-[10px]"
                        />
                        <p className="mt-2 text-xs sm:text-sm">Hon'ble Chief Minister</p>
                        <p className="font-bold text-white text-sm sm:text-base">
                            Sri. Nara Chandrababu Naidu
                        </p>
                    </div>

                    {/* Nara Lokesh */}
                    <div className="flex flex-col items-center text-center w-full sm:w-auto">
                        <img
                            src={lokesh}
                            alt="Nara Lokesh"
                            className="w-32 xs:w-36 sm:w-40 md:w-44 lg:w-52 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 object-cover rounded-[10px]"
                        />
                        <p className="mt-2 text-xs sm:text-sm">Hon'ble Minister of IT</p>
                        <p className="font-bold text-white text-sm sm:text-base">
                            Sri. Nara Lokesh
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvishkAndhraBanner;