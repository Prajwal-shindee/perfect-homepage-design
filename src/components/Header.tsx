
import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900 tracking-wide">
          RARELY DECAF
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            Case Studies
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            Contact
          </a>
        </nav>
        
        {/* Right side - Social icons and CTA */}
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1c-3.3 0-3.7 0-5 .1-1.3.1-2.2.2-3 .5-.8.3-1.5.7-2.2 1.4-.7.7-1.1 1.4-1.4 2.2-.3.8-.4 1.7-.5 3C1 9.3 1 9.7 1 12s0 2.7.1 3.7c.1 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.4 3 .5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.2 3-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.4-1.7.5-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.7-.4-3-.5C15.7 1 15.3 1 12 1zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"/>
              </svg>
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
            Ogleq
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
