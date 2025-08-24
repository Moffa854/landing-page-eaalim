"use client";

import { useState } from "react";
import Image from "next/image";

interface NavigationProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  assetPath: (src: string) => string;
}

export default function Navigation({ handleSmoothScroll, assetPath }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:px-44 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container mx-auto flex items-center justify-between px-4 py-0 max-w-full">
        <div className="flex items-center gap-3">
          <Image
            src={assetPath("assets/images/eaalim-logo-2 1.png")}
            alt="Eaalim logo"
            width={140}
            height={76}
            className="w-24 md:w-auto"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a 
            href="#hero" 
            className="hover:text-red-600 font-medium text-lg cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, 'hero')}
          >
            Home
          </a>
          <a 
            href="#pricing" 
            className="hover:text-red-600 font-medium text-lg cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
          >
            Pricing
          </a>
          <a 
            href="#roadmap" 
            className="hover:text-red-600 font-medium text-lg cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, 'roadmap')}
          >
            About Us
          </a>
          <a 
            href="#get-in-touch" 
            className="hover:text-red-600 font-medium text-lg cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
          >
            Help
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Desktop Free Trial Button */}
          <a
            href="#get-in-touch"
            onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
            className="hidden md:inline-block rounded-3xl hover:text-[#ffffff] text-[#F53855] border border-[#F53855] px-8 py-2 text-sm shadow-sm hover:bg-red-700"
          >
            Free Trial
          </a>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-14 space-y-4">
            <a 
              href="#hero" 
              className="block hover:text-red-600 cursor-pointer"
              onClick={(e) => {
                handleSmoothScroll(e, 'hero');
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </a>
            <a 
              href="#pricing" 
              className="block hover:text-red-600 cursor-pointer"
              onClick={(e) => {
                handleSmoothScroll(e, 'pricing');
                setIsMobileMenuOpen(false);
              }}
            >
              Pricing
            </a>
            <a 
              href="#roadmap" 
              className="block hover:text-red-600 cursor-pointer"
              onClick={(e) => {
                handleSmoothScroll(e, 'roadmap');
                setIsMobileMenuOpen(false);
              }}
            >
              About Us
            </a>
            <a 
              href="#get-in-touch" 
              className="block hover:text-red-600 cursor-pointer"
              onClick={(e) => {
                handleSmoothScroll(e, 'get-in-touch');
                setIsMobileMenuOpen(false);
              }}
            >
              Help
            </a>
            <a
              href="#get-in-touch"
              className="block rounded-3xl hover:text-[#ffffff] text-[#F53855] border border-[#F53855] px-6 py-2 text-sm shadow-sm hover:bg-red-700 text-center"
              onClick={(e) => { handleSmoothScroll(e, 'get-in-touch'); setIsMobileMenuOpen(false); }}
            >
              Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
