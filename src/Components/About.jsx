import React from "react";

const About = () => {
    return (
        <div className="bg-white py-12 px-4 md:px-10 lg:px-20 text-[32px] md:text-[48px] md:mt-14">
            <h2
                className="text-center mb-6"
                style={{
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: 700, // Reduced size for smaller screens
                    lineHeight: '36px', // Adjusted for mobile readability
                    letterSpacing: '0%',
                }}
            >
                ABOUT AVISHKANDHRA 2025
            </h2>

            <p
                className="max-w-7xl mx-auto text-center text-gray-800 mt-6 md:mt-14"
                style={{
                    fontFamily: 'Segoe UI, sans-serif',
                    fontWeight: 400, // Adjusted weight for better mobile legibility
                    fontSize: '18px', // Reduced font size for mobile
                    lineHeight: '28px', // Adjusted line height for readability
                    letterSpacing: '0%',
                }}
            >
                AVISHKANDHRA 2025 is not just an event  it’s a state-wide movement, a spark that aims to turn entrepreneurship into a household culture in Andhra Pradesh. It is about planting the seeds of innovation in every family, nurturing ideas from the grassroots, and creating a generation that thinks like creators, problem-solvers, and leaders. From curious students and visionary educators to daring startup founders and seasoned industry leaders  every individual has a role in igniting this wave of innovation that will transform our state into the Startup Capital of India
            </p>
        </div>
    );
};

export default About;
