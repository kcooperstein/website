'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  if (menuOpen) {
    return (
      <div className="fixed inset-0 bg-white text-red-500 z-50 p-6">
        {/* X Button - Absolutely Positioned */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-lg font-bold"
        >
          X
        </button>

        {/* All nav items in a single column, top-left aligned */}
        <nav className="flex flex-col space-y-4 text-lg font-medium">
          <Link href="/work" className="hover:text-gray-300 transition-colors duration-200">work</Link>
          <Link href="/shop" className="hover:text-gray-300 transition-colors duration-200">shop</Link>
          <Link href="/clients" className="hover:text-gray-300 transition-colors duration-200">clients</Link>
          <Link href="/sound" className="hover:text-gray-300 transition-colors duration-200">sound</Link>
          <Link href="/what-we-do" className="hover:text-gray-300 transition-colors duration-200">what we do</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">about</Link>
          <Link href="/diaries" className="hover:text-gray-300 transition-colors duration-200">diaries</Link>
          <Link href="/the-packing-list" className="hover:text-gray-300 transition-colors duration-200">the packing list</Link>
          <Link href="/instagram" className="hover:text-gray-300 transition-colors duration-200">instagram</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">contact</Link>
        </nav>
      </div>
    );
  }

  // Default mobile header
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white text-red-500 z-50">
      <button onClick={toggleMenu} className="text-3xl font-bold">+</button>
      <div className="text-2xl font-bold uppercase tracking-wide">the con.cept</div>
      <div className="text-lg">
        <Link href="/cart" className="hover:text-gray-300 transition-colors duration-200">
          cart (0)
        </Link>
      </div>
    </div>
  );
}
