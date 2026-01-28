import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/images/Untitled design.svg'

const prayers = ["ফজর", "যোহর", "আসর", "মাগরিব", "ইশা"];

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔹 Real Time Clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = prayers.map((name) => (
    <li key={name} className="list-none">
      <NavLink
        to={`/category/${name}`}
        onClick={() => setIsMobileMenuOpen(false)} // মোবাইল মেনু বন্ধ করার জন্য
        className={({ isActive }) =>
          `block px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
            isActive
              ? "bg-green-600 text-white shadow-lg shadow-green-200"
              : "text-gray-600 hover:bg-green-50 hover:text-green-700"
          }`
        }
      >
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          
          {/* --- LEFT: Logo --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className=" rounded-lg group-hover:rotate-12 transition-transform">
                <img className="w-16 h-16 " src={logo} alt="logo" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent hidden sm:block ">
                নামাজ শিক্ষা
              </span>
            </Link>
          </div>

          {/* --- CENTER: Desktop Menu --- */}
          <div className="hidden lg:flex items-center bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
            <ul className="flex items-center gap-1">
              {navLinks}
            </ul>
          </div>

          {/* --- RIGHT: Clock & Mobile Toggle --- */}
          <div className="flex items-center gap-4">
            {/* Clock Container */}
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[12px] uppercase tracking-widest text-gray-400 font-bold">সময় (বাংলাদেশ)</span>
              <span className="font-mono font-bold text-green-700">{currentTime}</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute w-full bg-white border-b shadow-xl px-4 py-6"
          >
            <ul className="space-y-3">
              {navLinks}
            </ul>
            {/* Mobile Clock */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
               <span className="text-gray-500 font-medium">সময় (বাংলাদেশ)</span>
               <span className="font-mono font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg">{currentTime}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;