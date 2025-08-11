import React from "react";
import logo from "../Images/AVISHKANDHRA Logo PNG 1.png";
import pawanKalyan from "../Images/Rectangle 88.png";
import chandrababu from "../Images/Rectangle 89.png";
import lokesh from "../Images/Rectangle 90.png";

const AvishkAndhraBanner = () => {
    return (
        <>
            <div className="relative z-20 px-2 md:px-0">
                <div
                    className="max-w-full md:w-[1347px] h-auto md:h-[140px] rounded-[20px] p-[2px] mx-auto"
                    style={{
                        background: "linear-gradient(180deg, #283643 0%, #26639B 100%)",
                    }}
                >
                    <div className="bg-white text-black w-full h-full rounded-[18px] px-4 md:px-6 py-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                        <img
                            src={logo}
                            alt="AvishkAndhra Logo"
                            className="w-[250px] md:w-[500px] mb-4 md:mb-0"
                        />
                        <div className="text-center md:text-left">
                            <h1
                                className="text-[24px] md:text-[42px] font-bold "
                                style={{
                                    fontFamily: 'Segoe UI, sans-serif',
                                    lineHeight: '30px',
                                    letterSpacing: '0%',
                                }}
                            >
                                Igniting Andhra Innovations
                            </h1>

                            <p
                                className="mt-3 md:mt-4 text-[16px] md:text-[32px] md:mr-24 italic"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '24px',
                                    color: '#4B5563',
                                }}
                            >
                                Connecting Every Family to Entrepreneurship
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient background with content below header box */}
            <div className=" text-white pt-[80px] md:pt-[100px] pb-16 px-4 rounded-b-[30px] -mt-[70px] " 
            style={{
                background:" linear-gradient(359.61deg, #142E46 40.93%, #26639B 99.66%)",
            }}>
                {/* Description */}
                <div className="max-w-[1400px] mx-auto mt-6 text-center px-2">
                    <p className="text-[16px] md:text-[20px] leading-relaxed">
                        Andhra Pradesh is on the verge of making history. Under the visionary
                        leadership of our Hon’ble Chief Minister, the state is launching the world’s
                        largest startup and innovation sensitization campaign — AVISHKANDHRA 2025.
                        With the “One Family, One Entrepreneur” mission, we aim to inspire over 1
                        crore youth and families to dream big, innovate, and lead the way in
                        entrepreneurship. This groundbreaking initiative aspires to set a Guinness
                        World Record and position Andhra Pradesh as a global leader in grassroots
                        innovation.
                    </p>
                </div>

                {/* Leader Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:gap-32 gap-8 mt-10 px-4">
                    {/* Pawan Kalyan */}
                    <div className="flex flex-col items-center text-center ">
                        <img
                            src={pawanKalyan}
                            alt="Pawan Kalyan"
                            className="w-40 h-52 md:w-52 md:h-64 object-cover rounded-[10px]"
                        />
                        <p className="mt-3 text-sm md:text-sm">Hon’ble Deputy Chief Minister</p>
                        <p className="font-bold text-white text-base md:text-base">
                            Sri. Konidela Pawan Kalyan
                        </p>
                    </div>

                    {/* Chandrababu Naidu */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={chandrababu}
                            alt="N. Chandrababu Naidu"
                            className="w-40 h-52 md:w-52 md:h-64 object-cover rounded-[10px]"
                        />
                        <p className="mt-3 text-sm md:text-sm">Hon’ble Chief Minister</p>
                        <p className="font-bold text-white text-base md:text-base">
                            Sri. Nara Chandrababu Naidu
                        </p>
                    </div>

                    {/* Nara Lokesh */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={lokesh}
                            alt="Nara Lokesh"
                            className="w-40 h-52 md:w-52 md:h-64 object-cover rounded-[10px]"
                        />
                        <p className="mt-3 text-sm md:text-sm">Hon’ble Minister of IT</p>
                        <p className="font-bold text-white text-base md:text-base">
                            Sri. Nara Lokesh
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvishkAndhraBanner;
