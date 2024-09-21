import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);  // Set the threshold for scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} `}>
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Brand / Logo */}
        <div className="text-xl font-bold">Brand</div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 items-center ">
          <a href="#home" className="text-gray-800 hover:text-gray-500">Home</a>
          <a href="#about" className="text-gray-800 hover:text-gray-500">About Me</a>
          <a href="#services" className="text-gray-800 hover:text-gray-500">Skills</a>
          <a href="#experience" className="text-gray-800 hover:text-gray-500">Experience</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-500">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-5">
              <li><a href="#home" className="block text-gray-800 hover:text-gray-500">Home</a></li>
              <li><a href="#about" className="block text-gray-800 hover:text-gray-500">About</a></li>
              <li><a href="#services" className="block text-gray-800 hover:text-gray-500">Services</a></li>
              <li><a href="#contact" className="block text-gray-800 hover:text-gray-500">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
