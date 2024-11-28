import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gold-500 text-gray-900 py-2 px-4 rounded-full hover:bg-gold-400 transition duration-200">
              <span className="text-2xl font-bold text-gray-900">LOGO</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-300">
            <a href="#" className="hover:bg-gold-400 transition">
              Home
            </a>
            <a href="#" className="hover:bg-gold-400 transition">
              Menu
            </a>
            <a href="#" className="hover:bg-gold-400 transition">
              About Us
            </a>
            <a href="#" className="hover:bg-gold-400 transition">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gold-500 text-gray-900 py-2 px-4 rounded-full hover:bg-gold-400 transition duration-200">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-purple-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
