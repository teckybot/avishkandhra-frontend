// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../Images/AVISHKANDHRA_Logo_1_PNG_Fav 1.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'Certificate (Recognition)', 'Registration'];

    return (
        <nav
            className="w-full bg-white px-6 py-4 shadow-sm relative z-50"  // ✅ fix applied here
            style={{ boxShadow: '0px 4px 10px 0px #00000026' }}
        >

            <div className="flex items-center justify-between ">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-30 h-16 md:ml-12 sm:ml-3"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-12 mr-36 gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="font-semibold text-[20px] leading-[100%] tracking-[0%] font-['Segoe_UI'] text-black hover:text-orange-500 transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden mr-4">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg
                            className="w-7 h-7 text-black"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-white py-4 shadow-md z-50 relative">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="font-semibold text-[20px]  text-black hover:text-orange-500 transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}

        </nav>
    );
};

export default Navbar;
