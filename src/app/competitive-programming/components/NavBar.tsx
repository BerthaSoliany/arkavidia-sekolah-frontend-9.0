"use client";

import React, { useState } from 'react';
// import Link from 'next/link';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <div className="mt-4 bg-white border-2 border-black text-center font-bold py-1 px-2 rounded-full text-lg max-w-[870px] mx-auto sticky top-4 flex items-center justify-between z-20">
        <a href="">
            <img src="/logo.png" alt="logo" className="w-auto h-16 sm:h-20 mx-5" />
        </a>
        <div className="flex-grow hidden md:flex">
            <a href="" className="hover:underline mx-2 sm:mx-5 text-blue-900 hover:text-opacity-75">Home</a>
            <div className="relative inline-block text-left mx-2 sm:mx-5 group">
                <a href="" className="hover:underline hover:text-opacity-75 text-blue-900">Event <span>&#9662;</span></a>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-60 bg-white border border-black border-[2px] rounded-md shadow-lg z-10 hidden group-hover:block">
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Arkavidia Academya</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Arkavidia For Indonesia</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Arkavidia Goes To School</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Arkavidia Talks</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">IT Fest</a>
                </div>
            </div>
            <div className="relative inline-block text-left mx-2 sm:mx-5 group">
                <a href="" className="hover:underline mx-2 sm:mx-5 text-blue-900 hover:text-opacity-75">Competition <span>&#9662;</span></a>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-60 bg-white border border-black border-[2px] rounded-md shadow-lg z-10 hidden group-hover:block">
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Competitive Programming</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Datavidia</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">Arkalogica</a>
                    <a href="" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-900 hover:text-white">UXvidia</a>
                </div>
            </div>
            <a href="" className="hover:border-opacity-70 hover:text-opacity-75 border-2 border-blue-800 py-1 px-7 rounded-[10px] mx-2 sm:mx-5 text-blue-900">Sign In | Sign Up</a>
        </div>
        <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-blue-900 hover:text-opacity-75">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-black md:hidden">
          <a href="" className="block px-4 py-2 text-blue-900 hover:bg-blue-900 hover:text-white">Home</a>
          <a href="" className="block px-4 py-2 text-blue-900 hover:bg-blue-900 hover:text-white">Event</a>
          <a href="" className="block px-4 py-2 text-blue-900 hover:bg-blue-900 hover:text-white">Competition</a>
          <a href="" className="block px-4 py-2 text-blue-900 hover:bg-blue-900 hover:text-white">Sign In | Sign Up</a>
        </div>
      )}
    </div>
  );
}

export default NavBar

