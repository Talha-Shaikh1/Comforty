"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDone } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CloseIcon, CubeIcon, MenuIcon, TrolleyIcon } from "@sanity/icons";
import Form from "next/form";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { useCart } from "@/context/CartContext";

const Navbar: React.FC = () => {
  const {cartCount} = useCart()
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  // Ref to detect clicks outside the dropdown
  const pagesDropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle closing dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      pagesDropdownRef.current &&
      !pagesDropdownRef.current.contains(event.target as Node)
    ) {
      setIsPagesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsPagesDropdownOpen(false);
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full text-white h-[40px] bg-[#272343] flex items-center justify-around">
        <div className="flex justify-center items-center">
          <MdOutlineDone className="hidden sm:flex text-lg text-white" />
          <p className="text-sm sm:pl-2 flex">
            Free shipping on all orders over $50
          </p>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <div className="flex justify-center items-center px-3">
            <h2 className="flex px-2 items-center">Eng </h2>
            <IoIosArrowDown />
          </div>
          <h2>Faqs</h2>
          <div className="px-3 flex items-center justify-center">
            <CiCircleAlert />
            <h2 className="pl-1 hidden sm:flex">Need Help</h2>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#F0F2F3] w- h-full">
        <div className="h-20 md:h-24  flex max-w-6xl mx-auto justify-between items-center px-4 md:px-8 ">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={"/Logo Icon.png"} alt="" width={35} height={20} />
            <h2 className="font-semibold md:text-3xl text-sm px-2">Comforty</h2>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <Link href={"/cart"}>
              <div className="py-2 px-5 border border-gray-300 bg-white flex justify-center items-center">
                <TrolleyIcon className="w-8 h-8" />
                <h3 className="px-2 hidden md:flex">Cart</h3>
                <div className="h-5 w-5 rounded-full flex items-center justify-center bg-[#007580] text-white text-sm">
                  {cartCount}
                </div>
              </div>
            </Link>

            {/* Auth Buttons */}
            <ClerkLoaded>
              {user && <Link href={"/orders"}>
              <div className="py-2 px-5 border border-gray-300 bg-white flex justify-center items-center">
                <CubeIcon className="w-8 h-8" />
                <h3 className="px-2 hidden md:flex">All Orders</h3>
                
              </div>
            </Link>}

              {user ? (
                <div className="flex items-center gap-2">
                  <UserButton/>

                  <h3 className="text-sm font-semibold">
                    Hello, {user?.firstName}
                  </h3>
                </div>
              ) : (
                <SignInButton>
                  <button className="py-2 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2">
                    <span>
                      <MdOutlineFollowTheSigns className="text-2xl" />
                    </span>
                    Sign In
                  </button>
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-full h-20 items-center justify-around border-b-2 relative">
        <ul className="text-lg font-normal flex gap-5 lg:gap-10">
          <li className="hover:text-[#87cfd6]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="./cart/">Shop</Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="/products/">Product</Link>
          </li>
          {/* Pages Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsPagesDropdownOpen(true)}
            onMouseLeave={() => {}}
          >
            <span
              className="hover:text-[#007580]"
              onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
            >
              Pages
            </span>
            <div ref={pagesDropdownRef}>
              {isPagesDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded mt-2 w-28">
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#007580]">
                    <Link href="/faqs/" onClick={handleLinkClick}>
                      FAQs
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#007580]">
                    <Link href="./about-us/" onClick={handleLinkClick}>
                      About Us
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="relative hover:text-[#007580] cursor-pointer">
            <Link href="./contact-us/">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center">
          <Form
            action="/search"
            className="w-20 sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
          >
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-xl"
            />
          </Form>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex w-full h-20 items-center justify-around">
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon />}
        </button>

        <div className="flex items-center">
          <Form
            action="/search"
            className="w-20 sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
          >
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-xl"
            />
          </Form>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#F0F2F3] overflow-hidden transition-all duration-500 border-b-2 mb-4 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="text-lg font-normal grid grid-cols-2 gap-4 p-4">
          <li className="hover:text-[#007580]">
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="./cart/" onClick={handleLinkClick}>
              Shop
            </Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="./AllProducts/" onClick={handleLinkClick}>
              Product
            </Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="./faqs/" onClick={handleLinkClick}>
              FAQs
            </Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="./contact-us" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li className="hover:text-[#007580]">
            <Link href="./about-us/" onClick={handleLinkClick}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
