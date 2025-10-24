import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Events = () => {
  const [activeFilter, setActiveFilter] = React.useState('month'); // 'month' or 'all'

  // TODO: Backend - Fetch events from API based on filter
  const allEvents = [
    // Sample events - Backend should replace this with actual data
  ];

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
                  {/* TODO: Backend - Filter events by current month or show all */}
                  <button 
                    onClick={() => setActiveFilter('month')}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      activeFilter === 'month' 
                        ? 'bg-cyan-600 text-white' 
                        : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                    }`}
                  >
                    This Month
                  </button>
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      activeFilter === 'all' 
                        ? 'bg-cyan-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Events
                  </button>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-6">
                {/* TODO: Backend - Fetch and display events based on activeFilter */}
                
                {/* Sample Event - Drama Competition */}
                <div className="border-l-4 border-red-500 pl-6 py-4 hover:bg-red-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Inter-School Drama Festival</h3>
                          <p className="text-sm text-gray-600">November 5, 2025 • 2:00 PM - 6:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Annual drama competition featuring performances from schools across the county. Students will present their theatrical productions.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                          Drama & Theatre
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 School Hall
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                          🎟️ Open to All
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Event - Mathematics Contest */}
                <div className="border-l-4 border-purple-500 pl-6 py-4 hover:bg-purple-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">County Mathematics Competition</h3>
                          <p className="text-sm text-gray-600">November 12, 2025 • 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Regional mathematics challenge for Forms 1-4. Students compete in algebra, geometry, and problem-solving categories.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                          Academic Contest
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 Science Lab
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">
                          🏆 Competition
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Event - Sports Tournament */}
                <div className="border-l-4 border-green-500 pl-6 py-4 hover:bg-green-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Inter-House Football Tournament</h3>
                          <p className="text-sm text-gray-600">November 18-20, 2025 • 3:00 PM - 5:30 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Three-day football tournament between school houses. Semi-finals on Day 2, finals and awards ceremony on Day 3.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Sports Event
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 School Field
                        </span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs">
                          ⚽ Football
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Event - Cultural Festival */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-blue-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Cultural Week Celebrations</h3>
                          <p className="text-sm text-gray-600">November 25-29, 2025 • All Day</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Week-long celebration featuring traditional music, dance performances, art exhibitions, and cultural food fair. Daily events from different Kenyan communities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          Cultural Activity
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 Various Venues
                        </span>
                        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs">
                          🎨 Week-Long
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Event - Science Fair */}
                <div className="border-l-4 border-orange-500 pl-6 py-4 hover:bg-orange-50 transition-colors rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">Annual Science Fair</h3>
                          <p className="text-sm text-gray-600">December 3, 2025 • 9:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Students showcase innovative science projects. Categories include Biology, Chemistry, Physics, and Technology. Judges award prizes to top projects.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                          Academic Contest
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          📍 Science Labs
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">
                          🔬 Science
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* No Events Placeholder */}
                {/* TODO: Backend - Show this when no events match the filter
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600">No events found</p>
                  <p className="text-sm text-gray-500 mt-2">Check back later for upcoming events</p>
                </div>
                */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* This Week's Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">This Week's Events</h3>
              {/* TODO: Backend - Fetch events happening in the next 7 days */}
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-3 py-2 hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-semibold text-gray-800">Inter-School Drama Festival</p>
                  <p className="text-xs text-gray-600">Nov 5 • 2:00 PM</p>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full mt-1 inline-block">
                    Drama
                  </span>
                </div>

                <div className="border-l-4 border-blue-500 pl-3 py-2 hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-semibold text-gray-800">Basketball Practice</p>
                  <p className="text-xs text-gray-600">Nov 6 • 4:00 PM</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1 inline-block">
                    Sports
                  </span>
                </div>

                <div className="border-l-4 border-purple-500 pl-3 py-2 hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-semibold text-gray-800">Music Choir Rehearsal</p>
                  <p className="text-xs text-gray-600">Nov 7 • 3:30 PM</p>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full mt-1 inline-block">
                    Cultural
                  </span>
                </div>

                <div className="border-l-4 border-green-500 pl-3 py-2 hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-semibold text-gray-800">Debate Club Meeting</p>
                  <p className="text-xs text-gray-600">Nov 8 • 2:00 PM</p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 inline-block">
                    Academic
                  </span>
                </div>
              </div>

              {/* No events this week placeholder */}
              {/* TODO: Backend - Show this when no events in next 7 days
              <div className="text-center py-6">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-600">No events this week</p>
              </div>
              */}
            </div>

            {/* Event Statistics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Event Statistics</h3>
              {/* TODO: Backend - Calculate and display event statistics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Academic Contests</p>
                      <p className="text-lg font-bold text-gray-800">12</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Drama Events</p>
                      <p className="text-lg font-bold text-gray-800">8</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Sports Events</p>
                      <p className="text-lg font-bold text-gray-800">15</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Cultural Activities</p>
                      <p className="text-lg font-bold text-gray-800">10</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-700">Total Events</p>
                    <p className="text-2xl font-bold text-cyan-600">45</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-600">This Month</p>
                    <p className="text-sm font-semibold text-gray-800">8</p>
                  </div>
                </div>
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
