'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              YesBruhNoCode
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/services" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link href="/contact" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
