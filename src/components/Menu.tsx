'use client';  // Mark this as a Client Component

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './CanvasMenu';
import { usePathname } from 'next/navigation'; // Import hook
import { mainLinks, dropdownLinks } from './CanvasMenu/Nav/data'; // Import navigation links

const Menu = () => {
  const pathname = usePathname(); // Get current path
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <div className="flex justify-between items-center w-full fixed z-50 px-6 md:px-12 py-4 md:py-6 bg-transparent">
      {/* Logo with Link to Home */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src="/logo.svg"
            alt="ILC Logo"
            width={100}
            height={50}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>
      
      {/* Desktop Navigation - Main links and dropdown */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* Main Navigation Links */}
        {mainLinks.map((link, index) => {
          const isExternal = link.href.startsWith('http');
          
          return (
            <Link
              key={index}
              href={link.href}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
            >
              {link.title}
              {isExternal && <span className="ml-1 text-xs">↗</span>}
            </Link>
          );
        })}

        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium flex items-center"
          >
            More
            <svg
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              {dropdownLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200 text-sm"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Login/Signup Button */}
        <a
          href="https://explore.ilc.limited/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
        >
          Login/Signup
        </a>
      </div>

      {/* Hamburger Menu - Only visible on mobile */}
      <div className="flex lg:hidden items-center">
        <Header />
      </div>
    </div>
  );
};

export default Menu;
