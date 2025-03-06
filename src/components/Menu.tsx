import React from 'react';
import Header from './CanvasMenu';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="flex justify-between items-center w-full fixed z-50 px-6 md:px-12 py-4 md:py-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="ILC Logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>
      {/* Menu */}
      <div className="flex items-center">
        <Header />
      </div>
    </div>
  );
};

export default Menu;
