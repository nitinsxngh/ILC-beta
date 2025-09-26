'use client';  // Mark this as a Client Component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './CanvasMenu';
import { usePathname } from 'next/navigation'; // Import hook
import { links } from './CanvasMenu/Nav/data'; // Import navigation links

const Menu = () => {
  const pathname = usePathname(); // Get current path

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
      
      {/* Desktop Navigation - All links visible on desktop */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* All Navigation Links */}
        {links.map((link, index) => {
          const isExternal = link.href.startsWith('http');
          const isGetStarted = link.title === 'Login/Signup';
          
          if (isGetStarted) {
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
              >
                {link.title}
              </a>
            );
          }
          
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
      </div>

      {/* Hamburger Menu - Only visible on mobile */}
      <div className="flex lg:hidden items-center">
        <Header />
      </div>
    </div>
  );
};

export default Menu;
