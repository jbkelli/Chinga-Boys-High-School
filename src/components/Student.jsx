import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [loginData, setLoginData] = useState({
    studentId: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    if (loginData.studentId && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  // Login Form Component
  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-cyan-400 to-teal-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-b from-cyan-200 to-cyan-300 rounded-3xl shadow-2xl p-8">
        {/* Logo placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-15 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-gray-600 text-sm font-medium"><img src="src/assets/images/education.jpg" alt="" /></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Student Portal
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
              Registration Number
            </label>
            <input
              id="studentId"
              name="studentId"
              type="text"
              required
              value={loginData.studentId}
              onChange={handleLoginChange}
              className="appearance-none relative block w-full px-4 py-3 border-0 rounded-lg placeholder-gray-400 text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your registration number"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={loginData.password}
              onChange={handleLoginChange}
              className="appearance-none relative block w-full px-4 py-3 border-0 rounded-lg placeholder-gray-400 text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Login to Portal
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );

  // Student Dashboard Component
  const StudentDashboard = () => (
    <>
    <Header />
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 min-h-screen shadow-2xl">
          {/* Main Navigation */}
          <div className="p-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Main Navigation
            </h3>
          </div>

          <nav className="space-y-1">
            {/* Dashboard */}
            <div className="px-4">
              <div 
                onClick={() => setCurrentPage('dashboard')}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  currentPage === 'dashboard' 
                    ? 'text-orange-400 bg-slate-700' 
                    : 'text-orange-400 hover:bg-slate-700'
                }`}
              >
                <div className="w-4 h-4 border-2 border-orange-400 rounded-full"></div>
                <span className="font-medium">Dashboard</span>
              </div>
            </div>

            {/* Financials */}
            <div className="px-4 mt-4">
              <div 
                onClick={() => setCurrentPage('financials')}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  currentPage === 'financials' 
                    ? 'text-orange-400 bg-slate-700' 
                    : 'text-orange-400 hover:bg-slate-700'
                }`}
              >
                <div className="w-4 h-4 border-2 border-orange-400 rounded-full"></div>
                <span className="font-medium">Financials</span>
              </div>
            </div>

            {/* Health */}
            <div className="px-4 mt-4">
              <div 
                onClick={() => setCurrentPage('health')}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  currentPage === 'health' 
                    ? 'text-orange-400 bg-slate-700' 
                    : 'text-orange-400 hover:bg-slate-700'
                }`}
              >
                <div className="w-4 h-4 border-2 border-orange-400 rounded-full"></div>
                <span className="font-medium">Health</span>
              </div>
            </div>

            {/* Academics */}
            <div className="px-4 mt-4">
              <div 
                onClick={() => setCurrentPage('academics')}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  currentPage === 'academics' 
                    ? 'text-orange-400 bg-slate-700' 
                    : 'text-orange-400 hover:bg-slate-700'
                }`}
              >
                <div className="w-4 h-4 border-2 border-orange-400 rounded-full"></div>
                <span className="font-medium">Academics</span>
              </div>
            </div>

            {/* Assignments */}
            <div className="px-4 mt-4">
              <div 
                onClick={() => setCurrentPage('assignments')}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  currentPage === 'assignments' 
                    ? 'text-orange-400 bg-slate-700' 
                    : 'text-orange-400 hover:bg-slate-700'
                }`}
              >
                <div className="w-4 h-4 border-2 border-orange-400 rounded-full"></div>
                <span className="font-medium">Assignments</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {currentPage === 'dashboard' && (
            <div className="space-y-6">
              {/* User Profile Card */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-cyan-100 p-3 rounded-xl shadow-sm">
                    <span className="text-cyan-700 font-semibold text-sm">User Profile</span>
                  </div>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column - Profile Picture and Class */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                    
                    {/* Profile Picture */}
                    <div className="flex justify-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Class Info */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-700">Class</span>
                        <span className="text-sm font-medium text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">Form 4 West</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Student Details */}
                  <div className="space-y-4">
                    <h4 className="text-md font-semibold text-gray-800 border-b border-gray-200 pb-2">Student Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Registration No.</span>
                        <div className="w-28 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Full Name</span>
                        <div className="w-36 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Gender</span>
                        <div className="w-20 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Phone Number</span>
                        <div className="w-32 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Email Address</span>
                        <div className="w-40 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Postal Address</span>
                        <div className="w-36 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="text-md font-semibold text-gray-800 mb-3">Parent/Guardian Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-600">Parent/Guardian Name</span>
                          <div className="w-40 h-4 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-600">Parent Phone Number</span>
                          <div className="w-32 h-4 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-600">Parent Email Address</span>
                          <div className="w-40 h-4 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Events Card*/}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl shadow-sm">
                    <span className="text-purple-700 font-semibold text-sm">Upcoming Events</span>
                  </div>
                </div>

                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Events Calendar</h3>
                  <p className="text-gray-600 mb-4">This page is currently under development and is not available</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Development Progress: 30%</p>
                </div>
              </div>

              {/* Financial Summary Cards*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Billed */}
                <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-sm font-semibold tracking-wide mb-3">TOTAL BILLED:</h3>
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-90">Data not available</p>
                  </div>
                </div>

                {/* Total Paid */}
                <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-sm font-semibold tracking-wide mb-3">TOTAL PAID:</h3>
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-90">Data not available</p>
                  </div>
                </div>

                {/* Balance Card */}
                <div className="bg-blue-800 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-sm font-semibold tracking-wide mb-3">BALANCE:</h3>
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-90">Data not available</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'financials' && (
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-8">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Information</h2>
                <p className="text-gray-600 mb-6">This page is currently under development and is not available</p>
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-green-600 h-3 rounded-full" style={{width: '45%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Development Progress: 45%</p>
              </div>
            </div>
          )}

          {currentPage === 'health' && (
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-8">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Records</h2>
                <p className="text-gray-600 mb-6">This page is currently under development and is not available</p>
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-red-600 h-3 rounded-full" style={{width: '25%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Development Progress: 25%</p>
              </div>
            </div>
          )}

          {currentPage === 'academics' && (
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-8">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Records</h2>
                <p className="text-gray-600 mb-4">Results & Revision Materials</p>
                <p className="text-gray-600 mb-6">This page is currently under development and is not available</p>
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: '35%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Development Progress: 35%</p>
              </div>
            </div>
          )}

          {currentPage === 'assignments' && (
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-8">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Assignments</h2>
                <p className="text-gray-600 mb-6">This page is currently under development and is not available</p>
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-purple-600 h-3 rounded-full" style={{width: '20%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Development Progress: 20%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return <StudentDashboard />;
};

export default Student;
