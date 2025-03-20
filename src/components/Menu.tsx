import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './CanvasMenu';

const Menu = () => {
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
      {/* Menu */}
      <div className="flex items-center">
        <Header />
      </div>
    </div>
  );
};

export default Menu;
