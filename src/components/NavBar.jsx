import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/jl.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Skills", "Projects", "Services", "About"];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-primary/70 shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        {/* Logo with glow & gradient border */}
        <a
          href="/"
          className="relative group"
        >
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-xl group-hover:scale-110 transition-transform">
            <img
              src={logo}
              alt="Jurik Latifi Logo"
              className="w-full h-full rounded-full object-cover border-2 border-white/30 shadow-lg"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-400 rounded-full group-hover:w-10 transition-all"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-lg font-semibold text-white tracking-wide">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative group px-2 py-1 rounded-md hover:text-yellow-400 transition-colors"
            >
              {item}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 rounded-full group-hover:w-full transition-all"></span>
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-md bg-yellow-400/20 opacity-0 group-hover:opacity-30 transition-opacity blur-sm"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-primary/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 text-2xl text-white font-bold transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="relative group px-4 py-2 rounded-lg hover:text-yellow-400 transition-colors hover:scale-105"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
