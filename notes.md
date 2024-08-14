"use client";
import { useState } from "react";
import Image from "next/image";
import BookNow from "./buttons/BookNow";
import Wrapper from "./Wrapper";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed backdrop-blur-lg z-50 top-0 left-0 right-0 transition-colors duration-300 ${
        scrolled ? "bg-[#4B1D8C]" : "bg-transparent"
      }`}
    >
      <Wrapper>
        <div className="flex py-4 items-center justify-between">
          {/* Logo */}
          <div>
            <Image
              src="/logo.svg"
              alt="Ezeemedia logo"
              width={261.48}
              height={70.4}
            />
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? (
                <AiOutlineClose className="text-white text-3xl" />
              ) : (
                <AiOutlineMenu className="text-white text-3xl" />
              )}
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden sm:flex items-center space-x-16">
            <button className="text-white text-xl">About Us</button>
            <button className="text-white text-xl">Blog</button>
            <button className="text-white text-xl">Services</button>
            <button className="text-white text-xl">Contact</button>
            <BookNow />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed right-0 left-0 bg-gray-900 text-white flex flex-col justify-center items-center space-y-8 z-40">
            <button className="text-black text-2xl">About Us</button>
            <button className="text-black text-2xl">Blog</button>
            <button className="text-black text-2xl">Services</button>
            <button className="text-black text-2xl">Contact</button>
            <BookNow />
          </div>
        )}
      </Wrapper>
    </nav>
  );
}
