"use client";
import { RxCross1 } from "react-icons/rx";
import { HiBars3BottomRight } from "react-icons/hi2";
import React, { useState } from "react";
import Link from "next/link";
import { NavbarLinks } from "@/lib/constants";
import { Button } from "./ui/button";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white w-full md:max-w-full md:px-28 mx-auto max-w-md  p-2 border-b">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <img
            src="./alphaloop.png"
            alt="Alphaloop Logo"
            className="h-12 w-28 md:h-16 md:w-44" // Responsive sizing
          />

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6 items-center bg-blue-200 p-1 rounded-full">
            {NavbarLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                className={`rounded-full px-4 py-1 transition-colors ${
                  activeLink === navLink.name
                    ? "bg-white text-gray-950"
                    : "hover:bg-white/40"
                }`}
                onClick={() => setActiveLink(navLink.name)}
              >
                {navLink.name}
              </Link>
            ))}
          </div>

          {/* Book a Call Button */}
          <Button className="hidden md:flex hover:bg-blue-200 hover:border-blue-500 hover:text-black shadow-md rounded-full px-4 py-2 text-sm transition-colors">
            Book a Call
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={handleMenu} aria-label="Menu">
              {isOpen ? (
                <RxCross1 size={24} />
              ) : (
                <HiBars3BottomRight size={24} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white  py-4 flex flex-col items-center space-y-4 justify-center">
            {NavbarLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                className={`rounded-full px-4 py-1  transition-colors ${
                  activeLink === navLink.name
                    ? "bg-indigo-400 text-white "
                    : "hover:bg-indigo-400 hover:text-white"
                }`}
                onClick={() => setActiveLink(navLink.name)} // Set active link on click
              >
                {navLink.name}
              </Link>
            ))}

            <Button className="bg-amber-500 border-t text-white rounded-full px-4 py-1 text-sm font-semibold shadow-sm ">
              Signup
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}
