import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-50">
      {/* Newsletter Section */}
      <div id="newsletter" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our newsletter</h3>
              <p className="text-gray-600">Stay updated with the latest news and events.</p>
            </div>

            {/* Center - Public Seal */}
            <div className="flex-shrink-0">
              <div className="w-20 h-24 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                <img 
                  src="src/assets/images/public_seal.jpeg" 
                  alt="Public Seal of Kenya" 
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>

            {/* Right - Email Form */}
            <form onSubmit={handleEmailSubmit} className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter You Email"
                  className="w-80 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setEmail('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors font-medium"
              >
                Inquire
              </button>
            </form>
          </div>

          {/* Privacy Policy Note */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              By subscribing you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                Privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* School Logo */}
          <div className="flex justify-start mb-12">
            <div className="w-20 h-24 bg-white rounded-2xl flex items-center justify-center p-2 border-2 border-gray-200 shadow-lg">
              <img 
                src="src/assets/images/logo.jpeg" 
                alt="Chinga Boys High School Logo" 
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>

          {/* 5 Column Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Column 1</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Admission Information</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">School Calendar</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Events Page</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Students Portal</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Column 2</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Faculty Directory</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Library Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Alumni Network</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Parent Portal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Volunteer Opportunities</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Column 3</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">School Policies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Health Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Safety Protocols</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Academic Calendar</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Column 4</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Extracurricular Activities</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Sports Teams</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Art Programs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Music Programs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Student Council</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Column 5</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Community Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Fundraising Events</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Career Counseling</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Internship Opportunities</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Parent Workshop</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              Copyright {currentYear} Chinga Boys High school. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                Cookies settings
              </a>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 ml-8">
                <a href="#" className="bg-gray-600 hover:bg-blue-600 p-2 rounded transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-600 hover:bg-blue-400 p-2 rounded transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-600 hover:bg-blue-700 p-2 rounded transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-600 hover:bg-red-600 p-2 rounded transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;