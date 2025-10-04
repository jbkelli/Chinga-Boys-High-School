import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="home">
      {/* Main Hero Section */}
      <section className="pt-28 relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-cyan-300 via-cyan-400 to-teal-400 pb-16">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-aqua bg-opacity-10"></div>
        
        <div className=" relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Main Title Card */}
              <div className="bg-blue-900 bg-opacity-90 rounded-2xl p-6 mb-6 shadow-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  CHINGA BOYS HIGH SCHOOL
                </h1>
                <div className="border-t-2 border-white pt-3">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Motto</h2>
                  <p className="text-lg md:text-xl text-cyan-200 font-medium">
                    Determine Your<br />
                    Destiny
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-white mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Chinga Boys High school, we are dedicated to Nurturing the next generation of 
                leaders. Our commitment to academic excellence and character development sets 
                the foundation for lifelong success.
              </p>

              {/* Action Button */}
              <div className="flex justify-center lg:justify-start">
                <Link 
                  to="/code-of-conduct"
                  className="bg-black bg-opacity-70 text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium text-lg inline-block"
                >
                  Learn more...
                </Link>
              </div>
            </div>

            {/* Right Content - School Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* School Logo Display */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-48 h-60 bg-gradient-to-b from-blue-100 to-cyan-50 rounded-xl flex flex-col items-center justify-center p-4 border-4 border-blue-200">
                    {/* School Header */}
                    <div className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 text-center">
                      CHINGA BOYS HIGH SCHOOL
                    </div>
                    
                    {/* School Logo */}
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-blue-800">
                      <img 
                        src="/images/logo.jpeg" 
                        alt="Chinga Boys High School Logo" 
                        className="w-20 h-20 object-contain rounded-full"
                      />
                    </div>

                    {/* Crossed Items (representing academic tools) */}
                    <div className="relative mb-4">
                      <div className="w-12 h-1 bg-blue-800 transform rotate-45"></div>
                      <div className="w-12 h-1 bg-blue-800 transform -rotate-45 absolute top-0"></div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-bold text-center">
                      LEARNING • DISCIPLINE • DESTINY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-b from-cyan-200 to-blue-200 py-12">
        <div className="container mx-auto px-4">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-6">
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-center max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-6">
              "Chinga Boys High School has transformed my son's life. The supportive environment and dedicated teachers have made all the difference in his education journey."
            </p>
          </blockquote>

          {/* Author Information */}
          <div className="flex items-center justify-center space-x-6">
            {/* Author Avatar */}
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">GO</span>
            </div>
            
            {/* Author Details */}
            <div className="text-left">
              <p className="font-bold text-gray-800 text-lg">Oluoch Ong'eo Ondiek</p>
              <p className="text-gray-600">Parent, Chinga Boys High.</p>
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-12 bg-gray-400 mx-6"></div>

            {/* School Logo and Name */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-md">
                <img 
                  src="/images/logo.jpeg" 
                  alt="Chinga Boys High School Logo" 
                  className="w-10 h-10 object-contain rounded"
                />
              </div>
              <span className="text-gray-800 font-bold text-lg">CHINGA BOYS HIGH SCHOOL.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;