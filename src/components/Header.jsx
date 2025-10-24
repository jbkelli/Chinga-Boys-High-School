import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling to sections when on home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 border-2 border-gray-200 shadow-sm flex-shrink-0">
              <img 
                src="/images/logo.jpeg" 
                alt="Chinga Boys High School Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 leading-none mb-0.5">CHINGA BOYS</h1>
              <p className="text-xs sm:text-sm text-gray-600 leading-none">HIGH SCHOOL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link to="/#home" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Home Page
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              About Us
            </Link>
            <Link to="/#academics" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Academics
            </Link>
            <Link to="/#gallery" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Gallery
            </Link>
            <Link to="/#blog" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Blog
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Contact
            </Link>
            <Link to="/students" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Students
            </Link>
            <Link to="/parents" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Parents
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm xl:text-base leading-none">
              Events
            </Link>
          </nav>

          {/* Join Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#newsletter" 
              className="bg-cyan-500 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors font-medium inline-flex items-center text-sm xl:text-base whitespace-nowrap leading-none"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#newsletter');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Join
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t">
            <Link 
              to="/#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home Page
            </Link>
            <Link 
              to="/#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/#academics" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </Link>
            <Link 
              to="/#gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/#blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/students" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Students
            </Link>
            <Link 
              to="/parents" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Parents
            </Link>
            <Link 
              to="/events" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <div className="px-3 pt-2">
              <button 
                className="w-full bg-cyan-500 text-white px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-colors font-medium"
                onClick={(e) => {
                  const element = document.querySelector('#newsletter');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;