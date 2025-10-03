"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#0e0d0d] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={"#"}>
          <div className="flex flex-col ">
            <h2 className="text-xl font-bold text-sky-400">Noor Mehmood</h2>
            <h4 className="text-sm font-light tracking-wide text-gray-300">
              Physiotherapist
            </h4>
          </div>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group text-gray-200 hover:text-sky-400 transition "
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-sky-400 cursor-pointer"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-6 bg-[#0e0d0d] text-center py-6 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative group text-gray-200 hover:text-sky-400 transition text-lg "
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
