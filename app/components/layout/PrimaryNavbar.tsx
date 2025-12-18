"use client";

import Image from "next/image";
import { useState } from "react";
import WinstoreLogo from "../../../public/images/nav-images/winstore-logo.png";
import {
  CartIcon,
  HeadPhoneIcon,
  HumbergerIcon,
  LoveIcon,
  SearchIcon,
  UserIcon,
} from "../ui/icons";

const PrimaryNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#03484D]">
      <div className="max-w-[1220px] w-full mx-auto px-4 sm:px-6 lg:px-0 py-3 lg:py-0 lg:h-17 text-white flex items-center justify-between flex-wrap lg:flex-nowrap gap-3 lg:gap-0">
        {/* Logo */}
        <div className="w-[100px] sm:w-[120px] lg:w-[132px] h-[36px] sm:h-[42px] lg:h-[48px] flex-shrink-0">
          <Image
            src={WinstoreLogo}
            alt="Winstore Logo"
            width={132}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Mobile Search Bar - Only on mobile */}
        <div className="flex-1 lg:hidden">
          <div className="h-[36px] bg-white rounded-md overflow-hidden relative">
            <div className="w-[40px] h-full flex items-center justify-center bg-[#B6B6B6] absolute right-0 cursor-pointer">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="bg-white text-[#ABA3A3] w-full px-3 pr-[40px] h-full text-[12px] font-normal outline-none focus:outline-none placeholder:text-[#ABA3A3]"
            />
          </div>
        </div>

        {/* Desktop Category select and search bar */}
        <div className="hidden lg:flex w-[534px] h-[39px] bg-white rounded-md overflow-hidden relative">
          <div className="w-[43px] h-full flex items-center justify-center bg-[#B6B6B6] absolute right-0 cursor-pointer">
            <SearchIcon />
          </div>
          <select
            name="Search-select"
            id="searchSelect"
            className="bg-white text-[#ABA3A3] w-[130px] px-3 h-full text-[13px] font-normal outline-none focus:outline-none"
          >
            <option value="">All categories</option>
            <option value="">Electronics</option>
            <option value="">Fashion</option>
            <option value="">Appliances</option>
            <option value="">Babies Store</option>
            <option value="">Accessories</option>
          </select>
          <input
            type="text"
            placeholder="Search for products"
            className="bg-white text-[#ABA3A3] w-[300px] px-4 h-full text-[13px] font-normal border-l border-[#B6B6B6] ml-3 outline-none focus:outline-none placeholder:text-[#ABA3A3]"
          />
        </div>

        {/* Desktop Spacer */}
        <div className="hidden lg:block w-[134px] h-full"></div>

        {/* Call Us Now - Desktop only */}
        <div className="hidden xl:flex flex-col items-start gap-1">
          <p className="text-[9px]">Call Us Now</p>
          <div className="flex items-center gap-1">
            <HeadPhoneIcon />
            <p className="text-[13px]">+011 5827918</p>
          </div>
          <p className="text-[13px]">Sign In</p>
        </div>

        {/* Mobile hamburger menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <HumbergerIcon />
        </button>

        {/* Icons and cart */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <button className="hidden sm:block" aria-label="User">
            <UserIcon />
          </button>
          <button className="hidden sm:block" aria-label="Wishlist">
            <LoveIcon />
          </button>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <CartIcon />
            <p className="text-[12px] sm:text-[13px] lg:text-[15px] hidden sm:inline">Cart</p>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="w-full lg:hidden bg-[#0E3B3E] rounded-md mt-2 p-4 space-y-3">
            <div className="flex items-center gap-2 pb-3 border-b border-white/20">
              <HeadPhoneIcon />
              <div>
                <p className="text-[10px] text-white/80">Call Us Now</p>
                <p className="text-[13px]">+011 5827918</p>
              </div>
            </div>
            <button className="flex items-center gap-2 w-full text-left">
              <UserIcon />
              <span className="text-[13px]">Sign In</span>
            </button>
            <button className="flex items-center gap-2 w-full text-left">
              <LoveIcon />
              <span className="text-[13px]">Wishlist</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default PrimaryNavbar;

