"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FacebookIcon,
  HumbergerIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons/icons";

const SecondaryNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0E3B3E] relative">
      <div className="max-w-[1220px] w-full mx-auto px-4 sm:px-6 lg:px-0 py-3 lg:py-0 lg:h-[49px] text-white flex items-center justify-between flex-wrap lg:flex-nowrap gap-3 lg:gap-0">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 w-full lg:w-auto justify-between relative">
          {/* Browse By Category Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Browse categories"
          >
            <HumbergerIcon />
            <p className="text-[14px] sm:text-[15px] lg:text-[17px]">
              Browse By Category
            </p>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8 justify-center text-[13px]">
              <li>
                <Link href={"/"} className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:opacity-80 transition-opacity">
                  Easy Monthly Installments
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:opacity-80 transition-opacity">
                  Shop by Brands
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:opacity-80 transition-opacity">
                  Become a Vendor
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute lg:hidden top-full left-0 right-0 bg-[#0E3B3E] shadow-lg z-50 mt-2 rounded-md">
              <ul className="flex flex-col py-3 px-4 space-y-2">
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 text-[13px] hover:opacity-80 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 text-[13px] hover:opacity-80 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Easy Monthly Installments
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 text-[13px] hover:opacity-80 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop by Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 text-[13px] hover:opacity-80 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Become a Vendor
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
          <Link
            href={"/"}
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </Link>
          <Link
            href={"/"}
            className="hover:opacity-80 transition-opacity"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </Link>
          <Link
            href={"/"}
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href={"/"}
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
