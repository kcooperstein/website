"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropsMenu, setShowDropsMenu] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setShowDropsMenu(false);
  };

  if (menuOpen) {
    return (
      <div className="fixed inset-0 bg-white text-red-800 z-50 p-4">
        {/* Close or Back Button */}
        {showDropsMenu ? (
          <button
            onClick={() => setShowDropsMenu(false)}
            className="absolute top-4 left-4 text-lg font-bold"
          >
            ←
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-lg font-bold"
          >
            x
          </button>
        )}

        {/* Tighter Menu Content */}
        <nav className="flex flex-col space-y-4 text-lg font-medium">
          {showDropsMenu ? (
            <>
              <Link
                href="/im-just-a-girl"
                className="hover:text-red-700 transition-colors duration-200 mt-10"
              >
                {`i'm just a girl`}
              </Link>
              <Link
                href="/love-notes"
                className="hover:text-red-700 transition-colors duration-200"
              >
                love notes
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="hover:text-red-700 transition-colors duration-200"
              >
                home
              </Link>
              <button
                onClick={() => setShowDropsMenu(true)}
                className="text-left hover:text-red-700 transition-colors duration-200"
              >
                drops
              </button>
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
            </>
          )}
        </nav>
      </div>
    );
  }

  // Default mobile header
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white text-red-800 z-50">
      <button onClick={toggleMenu} className="text-3xl font-bold">
        +
      </button>
      <div className="text-lg font-bold tracking-wide">two twelve studio</div>
      <Link
        href="/cart"
        className="text-lg font-bold hover:text-red-700 transition-colors duration-200"
      >
        cart (0)
      </Link>
    </div>
  );
}
