"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <>
          <div className="fixed top-0 left-0 w-full z-50 bg-white">
            <div className="flex items-center justify-between px-10 py-4 text-red-500">
              <div className="w-24" />
              <nav className="flex space-x-6 text-lg font-medium text-red-800 tracking-wide mx-auto justify-center">
                <Link
                  href="/"
                  className="hover:text-red-700 transition-colors duration-200"
                >
                  home
                </Link>

                {/* DROPS WITH STYLED DROPDOWN */}
                <div
                  className="relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    href="/drops"
                    className="hover:text-red-700 transition-colors duration-200"
                  >
                    drops
                  </Link>

                  {showDropdown && (
                    <div className="absolute top-full left-0 w-48 bg-white text-red-800 text-base flex flex-col space-y-1 rounded-lg">
                      <Link
                        href="/im-just-a-girl"
                        className="hover:text-red-700 transition-colors duration-200"
                      >
                        {`i'm just a girl`}
                      </Link>
                      <Link
                        href="/love-notes"
                        className="hover:text-red-700 transition-colors duration-200"
                      >
                        love notes
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="hover:text-red-700 transition-colors duration-200"
                >
                  about
                </Link>
                <Link
                  href="/socials"
                  className="hover:text-red-700 transition-colors duration-200"
                >
                  socials
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-red-700 transition-colors duration-200"
                >
                  contact
                </Link>
              </nav>

              <div className="w-24 text-red-800 flex justify-end">
                <Link
                  href="/cart"
                  className="text-lg hover:text-red-700 transition-colors duration-200"
                >
                  cart (0)
                </Link>
              </div>
            </div>

            <div className="flex justify-center mt-8 pb-4 text-red-800">
              <div className="text-2xl font-bold tracking-wide">
                two twelve studio
              </div>
            </div>
          </div>

          <div className="pt-20" />
        </>
      )}
    </>
  );
}
