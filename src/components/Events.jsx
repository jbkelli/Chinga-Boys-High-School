import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Events = () => {
  return (
    <>
    <Header />
    <div className="pt-24 min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 mt-2">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            School Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Contests, Drama, Sports and Cultural Activities
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Event Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Academic Contests</h3>
            <p className="text-gray-600 text-sm">Math, Science & Quiz competitions</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4zM9 6v10a1 1 0 102 0V6a1 1 0 10-2 0zm4 0v10a1 1 0 102 0V6a1 1 0 10-2 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Drama & Theatre</h3>
            <p className="text-gray-600 text-sm">Plays, performances & festivals</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Sports Events</h3>
            <p className="text-gray-600 text-sm">Athletics, football & tournaments</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Cultural Activities</h3>
            <p className="text-gray-600 text-sm">Music, art & cultural celebrations</p>
          </div>
        </div>

        {/* Main Events Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Events Calendar</h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition-colors text-sm font-medium">
                    This Month
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    All Events
                  </button>
                </div>
              </div>

              {/* Development Message */}
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">This Site is Under Development</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're building an amazing events management system for school contests, drama performances, 
                  sports events, and cultural activities. Please check back soon!
                </p>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200 max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🚧 Development In Progress</h3>
                  <p className="text-gray-700 mb-4">
                    Our development team is working on implementing the complete events management system.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div className="bg-cyan-600 h-4 rounded-full transition-all duration-500" style={{width: '35%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600">Estimated completion: 35%</p>
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Development Notice */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Event Information</h3>
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-2">Event details coming soon</p>
                <p className="text-xs text-gray-500">Under development</p>
              </div>
            </div>

            {/* Statistics Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Event Statistics</h3>
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-2">Statistics will be available soon</p>
                <p className="text-xs text-gray-500">Under development</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyan-800 mb-4">Event Coordination</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-cyan-800">Events Coordinator</p>
                    <p className="text-xs text-cyan-600">ext. 123</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-cyan-800">Email</p>
                    <p className="text-xs text-cyan-600">events@chingaboys.ac.ke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Events;
