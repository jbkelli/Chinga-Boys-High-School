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
              <h4 className="text-lg font-bold text-gray-800 mb-6">Admin Tools</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Student Admissions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Faculty Management</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Health Portal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Teachers Portal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">System Reports</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Management</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Faculty Directory</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Student Records</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Grade Management</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Attendance Tracking</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Policies</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">School Policies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Health Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Safety Protocols</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Admin Guidelines</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">System Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">User Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Technical Help</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Training Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact IT</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6">Reports</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Enrollment Reports</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Academic Reports</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Health Reports</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Staff Analytics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">System Logs</a></li>
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
              Copyright {currentYear} Chinga Boys High School - Admin Portal. All Rights Reserved.
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
                Admin Guidelines
              </a>
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