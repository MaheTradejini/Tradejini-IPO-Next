"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-[50]">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://tradejini.com/wp-content/uploads/2023/06/logo-img.svg"
            alt="Logo"
            width={144}
            height={50}
          />
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-gray-800" />
          ) : (
            <FaBars className="text-gray-800" />
          )}
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-base">
          <li>
            <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
              Jiniversity
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
              Media
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
              Support
            </Link>
          </li>
        </ul>

        {/* Search and Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#09C373]"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link href="https://cubeplus.tradejini.com/auth/login" target='_blank'>
          <button className="px-4 py-2 bg-white text-[#09C373] text-base rounded-lg border border-[#09C373]">
          Login
          </button>
          </Link>
        
          <Link href="https://ekyc.tradejini.com/#/onboarding" target='_blank'>
          <button className="px-4 py-2 bg-custom-green-gradient text-white text-base rounded-lg hover:bg-[#03a076]">
          Open Account
          </button>
          </Link>
        
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
                Jiniversity
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
                Media
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-[#04ae87]">
                Support
              </Link>
            </li>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#04ae87]"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <button className="px-4 py-2 bg-[#04ae87] text-white rounded-lg hover:bg-[#03a076]">
                Open Account
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
