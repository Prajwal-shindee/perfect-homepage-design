
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <div className="text-[13px] font-normal tracking-wide text-black">RARELY DECAF</div>
      
      <nav className="hidden md:flex space-x-8 text-[13px] font-normal tracking-wide text-black">
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Case Studies</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
      
      <div className="flex items-center space-x-4 text-black text-[13px]">
        <a href="#" aria-label="Facebook" className="hover:text-gray-600">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-gray-600">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-gray-600">
          <i className="fab fa-instagram"></i>
        </a>
        <button
          className="text-[13px] font-normal tracking-wide rounded-full border border-black px-4 py-1 hover:bg-black hover:text-white transition"
          aria-label="Outged"
        >
          Outged
        </button>
      </div>
    </header>
  );
};

export default Header;
