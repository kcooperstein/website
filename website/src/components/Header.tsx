'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileHeader from './MobileHeader';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value as per your desired mobile screen size breakpoint
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for screen size changes

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Conditionally render Mobile Header for smaller screens */}
      {isMobile ? (
        <MobileHeader /> // Show mobile header on smaller screens
      ) : (
        <>
          {/* Top nav bar for desktop */}
          <div className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 text-red-500 z-50 bg-white">
            {/* Empty div to take left space (for balancing) */}
            <div className="w-24" />

            {/* Centered nav links */}
            <nav className="flex flex-wrap space-x-6 text-lg font-medium tracking-wide mx-auto justify-center">
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

            {/* Right: Cart */}
            <div className="w-24 flex justify-end">
              <Link href="/cart" className="text-lg hover:text-gray-300 transition-colors duration-200">
                cart (0)
              </Link>
            </div>
          </div>

          {/* Below the nav: Centered logo */}
          <div className="bg-white pt-[100px] pb-8 flex justify-center text-red-500">
            <div className="text-2xl font-bold uppercase tracking-wide">
              the con.cept
            </div>
          </div>
        </>
      )}
    </>
  );
}
