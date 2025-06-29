import React, { useState, useEffect } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom"; // , NavLink
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavItems } from "./useNavItems";
// import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  // const [mobileOpen, setMobileOpen] = useState(false);

  const [ navItems, mobileOpen, setMobileOpen] = useNavItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "bg-black/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-white text-2xl font-bold gap-2"
        >
          <FaRegAddressCard className="text-3xl text-slate-700" /> Portfolio
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center">{navItems}</ul>
        </nav>

        {/* GitHub Button */}
        <div className="hidden md:block">
          <Link to="https://github.com/Nadim-Nion" target="_blank">
            <button className="btn btn-sm bg-[#212132] hover:bg-slate-700 text-white px-4 rounded">
              GitHub
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl mr-8 md:mr-0"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-black text-white px-6 pb-4 pt-2">
          <ul className="flex flex-col gap-3">{navItems}</ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
