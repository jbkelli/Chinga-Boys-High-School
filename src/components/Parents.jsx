import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Parents = () => {
  return (
    <>
    <Header />
    <div className="pt-24 min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 mt-2">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Parents Information Board
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Stay informed about your child's school life and important updates
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Important Alerts</h3>
            <p className="text-gray-600">Urgent notifications and announcements</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">School Events</h3>
            <p className="text-gray-600">Upcoming activities and programs</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">School Updates</h3>
            <p className="text-gray-600">General information and news</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Important Events Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Important Events & Updates</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live Updates</span>
                </div>
              </div>

              {/* TODO: Backend - Fetch events from API */}
              {/* Important Events Timeline */}
              <div className="space-y-6">
                {/* Visiting Days Event */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-blue-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Visiting Day</h3>
                          <p className="text-sm text-gray-600">November 15, 2025 • 9:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Parents and guardians are invited to visit their children on campus. Meet with teachers and tour school facilities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          Upcoming
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 School Campus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinic/Medical Checkup Event */}
                <div className="border-l-4 border-green-500 pl-6 py-4 hover:bg-green-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Medical Clinic & Health Checkup</h3>
                          <p className="text-sm text-gray-600">November 8, 2025 • 8:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Comprehensive health checkup for all students. Annual medical screening, vaccinations, and dental checkup. Parental consent forms required.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Upcoming
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 School Clinic
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">
                          ⚠️ Consent Required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fundraising Event */}
                <div className="border-l-4 border-purple-500 pl-6 py-4 hover:bg-purple-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">School Development Fundraising</h3>
                          <p className="text-sm text-gray-600">December 1, 2025 • 10:00 AM - 3:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Annual fundraising event for new computer lab and library expansion. Join us for lunch, entertainment, and raffles. All parents welcome!
                      </p>
                      <div className="bg-purple-50 p-3 rounded-lg mb-3 border border-purple-200">
                        <p className="text-sm text-purple-900 font-semibold mb-1">Fundraising Goal: KSh 2,500,000</p>
                        <div className="w-full bg-purple-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <p className="text-xs text-purple-700 mt-1">KSh 1,625,000 raised (65%)</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                          Upcoming
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 School Hall
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parent-Teacher Meeting */}
                <div className="border-l-4 border-orange-500 pl-6 py-4 hover:bg-orange-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Parent-Teacher Meetings</h3>
                          <p className="text-sm text-gray-600">November 22, 2025 • 2:00 PM - 6:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Term 3 progress reports and academic discussion. Schedule individual meetings with your child's teachers to discuss academic performance and behavior.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                          Upcoming
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 Classrooms
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">
                          📅 Booking Required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sports Day */}
                <div className="border-l-4 border-red-500 pl-6 py-4 hover:bg-red-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Annual Sports Day</h3>
                          <p className="text-sm text-gray-600">December 10, 2025 • 8:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Inter-house athletics competition featuring track and field events. Parents invited to cheer for their children. Refreshments and awards ceremony included.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                          Upcoming
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 School Field
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                          🎟️ Free Entry
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* No Events Placeholder (Backend will toggle this) */}
                {/* TODO: Backend - Show this when no events are available
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600">No upcoming events at this time</p>
                  <p className="text-sm text-gray-500 mt-2">Check back later for updates</p>
                </div>
                */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">School Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium text-gray-800">+254 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-800">info@chingaboys.ac.ke</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/students" className="block text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors">
                  Student Portal →
                </a>
                <a href="/#contact" className="block text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors">
                  Contact School →
                </a>
                <a href="/events" className="block text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors">
                  School Events →
                </a>
                <a href="/#academics" className="block text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors">
                  Academic Programs →
                </a>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">Emergency Contacts</h3>
              <div className="space-y-2">
                <p className="text-sm text-red-700">
                  <strong>Principal:</strong> +254 XXX XXX XXX
                </p>
                <p className="text-sm text-red-700">
                  <strong>Deputy Principal:</strong> +254 XXX XXX XXX
                </p>
                <p className="text-sm text-red-700">
                  <strong>School Nurse:</strong> +254 XXX XXX XXX
                </p>
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

export default Parents;