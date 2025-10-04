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
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 border-2 border-gray-200 shadow-sm">
              <img 
                src="/images/logo.jpeg" 
                alt="Chinga Boys High School Logo" 
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">CHINGA BOYS</h1>
              <p className="text-sm text-gray-600">HIGH SCHOOL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/#home" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Home Page
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/#academics" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Academics
            </Link>
            <Link to="/#gallery" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/#blog" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Contact
            </Link>
            <Link to="/students" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Students
            </Link>
            <Link to="/parents" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Parents
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Events
            </Link>
          </nav>

          {/* Join Button */}
          <div className="hidden md:block">
            <a 
              href="#newsletter" 
              className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors font-medium inline-block"
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
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-700 hover:border-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/#home" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Home Page</Link>
              <Link to="/#about" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">About Us</Link>
              <Link to="/#academics" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Academics</Link>
              <Link to="/#gallery" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Gallery</Link>
              <Link to="/#blog" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Blog</Link>
              <Link to="/#contact" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Contact</Link>
              <Link to="/students" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Students</Link>
              <Link to="/parents" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Parents</Link>
              <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-cyan-600">Events</Link>
              <button 
                className="w-full mt-4 bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors"
                onClick={(e) => {
                  const element = document.querySelector('#newsletter');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false); // Close mobile menu
                }}
              >
                Join
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;