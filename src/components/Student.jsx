import React, { useState, useEffect } from 'react';
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
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Backend - Student data structure
  const [studentData, setStudentData] = useState({
    registrationNo: '',
    fullName: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    postalAddress: '',
    class: '',
    profilePicture: null,
    parentGuardian: {
      name: '',
      phoneNumber: '',
      emailAddress: ''
    },
    financials: {
      totalBilled: 0,
      totalPaid: 0,
      balance: 0
    },
    academics: {
      results: [],
      revisionMaterials: []
    },
    health: {
      records: []
    },
    assignments: []
  });

  // TODO: Backend - Check if user is already logged in (session/token)
  useEffect(() => {
    const checkAuthStatus = () => {
      // Check localStorage or sessionStorage for auth token
      const token = localStorage.getItem('studentAuthToken');
      if (token) {
        // Validate token with backend
        // fetchStudentData(token);
        // setIsLoggedIn(true);
      }
    };
    checkAuthStatus();
  }, []);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
    setLoginError(''); // Clear error on input change
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      // TODO: Backend - Replace with actual API call
      // const response = await fetch('/api/student/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(loginData)
      // });
      // const data = await response.json();
      
      // Temporary simulation
      if (loginData.studentId && loginData.password) {
        // TODO: Backend - Store auth token
        // localStorage.setItem('studentAuthToken', data.token);
        // await fetchStudentData(data.token);
        setIsLoggedIn(true);
      } else {
        setLoginError('Please enter both registration number and password');
      }
    } catch (error) {
      setLoginError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Backend - Fetch student data after successful login
  const fetchStudentData = async (token) => {
    try {
      // const response = await fetch('/api/student/profile', {
      //   headers: { 'Authorization': `Bearer ${token}` }
      // });
      // const data = await response.json();
      // setStudentData(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  // TODO: Backend - Logout function
  const handleLogout = () => {
    // Clear auth token
    localStorage.removeItem('studentAuthToken');
    setIsLoggedIn(false);
    setStudentData({
      registrationNo: '',
      fullName: '',
      gender: '',
      phoneNumber: '',
      emailAddress: '',
      postalAddress: '',
      class: '',
      profilePicture: null,
      parentGuardian: { name: '', phoneNumber: '', emailAddress: '' },
      financials: { totalBilled: 0, totalPaid: 0, balance: 0 },
      academics: { results: [], revisionMaterials: [] },
      health: { records: [] },
      assignments: []
    });
    setCurrentPage('dashboard');
  };

  // Login Form Component
  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-cyan-400 to-teal-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-b from-cyan-200 to-cyan-300 rounded-3xl shadow-2xl p-8">
        {/* Logo placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-15 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-gray-600 text-sm font-medium"><img src="/images/education.jpg" alt="Student Portal" /></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Student Portal
        </h2>

        {/* Error Message */}
        {loginError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {loginError}
          </div>
        )}

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
              disabled={isLoading}
              className="appearance-none relative block w-full px-4 py-3 border-0 rounded-lg placeholder-gray-400 text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:opacity-50"
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
              disabled={isLoading}
              className="appearance-none relative block w-full px-4 py-3 border-0 rounded-lg placeholder-gray-400 text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:opacity-50"
              placeholder="Enter your password"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login to Portal'}
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
        <div className="w-64 bg-slate-800 min-h-screen shadow-2xl pt-6">
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
                    onClick={handleLogout}
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
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                        {/* TODO: Backend - Replace with actual profile picture */}
                        {studentData.profilePicture ? (
                          <img 
                            src={studentData.profilePicture} 
                            alt="Student Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Class Info */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-700">Class</span>
                        {/* TODO: Backend - Replace with actual class data */}
                        <span className="text-sm font-medium text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                          {studentData.class || 'Not Assigned'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Student Details */}
                  <div className="space-y-4">
                    <h4 className="text-md font-semibold text-gray-800 border-b border-gray-200 pb-2">Student Details</h4>
                    {/* TODO: Backend - Replace placeholder divs with actual student data */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Registration No.</span>
                        <span className="text-sm text-slate-800 font-medium">
                          {studentData.registrationNo || 'Loading...'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Full Name</span>
                        <span className="text-sm text-slate-800 font-medium">
                          {studentData.fullName || 'Loading...'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Gender</span>
                        <span className="text-sm text-slate-800 font-medium">
                          {studentData.gender || 'Loading...'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Phone Number</span>
                        <span className="text-sm text-slate-800 font-medium">
                          {studentData.phoneNumber || 'Loading...'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Email Address</span>
                        <span className="text-sm text-slate-800 font-medium">
                          {studentData.emailAddress || 'Loading...'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Postal Address</span>
                        <span className="text-sm text-slate-800 font-medium">
                          {studentData.postalAddress || 'Loading...'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="text-md font-semibold text-gray-800 mb-3">Parent/Guardian Details</h4>
                      {/* TODO: Backend - Replace with actual parent/guardian data */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-600">Parent/Guardian Name</span>
                          <span className="text-sm text-slate-800 font-medium">
                            {studentData.parentGuardian.name || 'Loading...'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-600">Parent Phone Number</span>
                          <span className="text-sm text-slate-800 font-medium">
                            {studentData.parentGuardian.phoneNumber || 'Loading...'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-600">Parent Email Address</span>
                          <span className="text-sm text-slate-800 font-medium">
                            {studentData.parentGuardian.emailAddress || 'Loading...'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Summary Cards*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-45">
                {/* TODO: Backend - Replace with actual financial data */}
                {/* Total Billed */}
                <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-sm font-semibold tracking-wide mb-3">TOTAL BILLED:</h3>
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    {studentData.financials.totalBilled > 0 ? (
                      <p className="text-2xl font-bold">
                        KSh {studentData.financials.totalBilled.toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-sm opacity-90">Data not available</p>
                    )}
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
                    {studentData.financials.totalPaid > 0 ? (
                      <p className="text-2xl font-bold">
                        KSh {studentData.financials.totalPaid.toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-sm opacity-90">Data not available</p>
                    )}
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
                    {studentData.financials.balance > 0 ? (
                      <p className="text-2xl font-bold">
                        KSh {studentData.financials.balance.toLocaleString()}
                      </p>
                    ) : studentData.financials.balance < 0 ? (
                      <p className="text-2xl font-bold">
                        KSh ({Math.abs(studentData.financials.balance).toLocaleString()})
                      </p>
                    ) : (
                      <p className="text-sm opacity-90">Data not available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TODO: Backend - Financials Page Implementation */}
          {currentPage === 'financials' && (
            <div className="space-y-6">
              {/* Financial Summary Header */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Financial Information</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Statement</span>
                  </button>
                </div>

                {/* TODO: Backend - Financial Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 font-semibold mb-1">Balance</p>
                    <p className="text-2xl font-bold text-green-800">
                      KSh {studentData.financials.balance.toLocaleString() || '0'}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-semibold mb-1">Fees Paid</p>
                    <p className="text-2xl font-bold text-blue-800">
                      KSh {studentData.financials.totalPaid.toLocaleString() || '0'}
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-700 font-semibold mb-1">Current Term Fees</p>
                    {/* TODO: Backend - Fetch current term fees */}
                    <p className="text-2xl font-bold text-purple-800">KSh 0</p>
                  </div>
                </div>
              </div>

              {/* Transaction Records */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Transaction Records</h3>
                {/* TODO: Backend - Fetch and display transaction records */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment Mode</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* TODO: Backend - Map through transaction records */}
                      {/* Example row - Replace with actual data */}
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-600" colSpan="5">
                          <div className="text-center py-8 text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p>No transactions available</p>
                            <p className="text-sm mt-1">Transaction records will appear here</p>
                          </div>
                        </td>
                      </tr>
                      {/* Backend: Uncomment and use this structure for each transaction
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{transaction.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{transaction.description}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-600">KSh {transaction.amount.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{transaction.paymentMode}</td>
                        <td className="px-4 py-3 text-sm">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">Download</button>
                        </td>
                      </tr>
                      */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TODO: Backend - Health Records Page Implementation */}
          {currentPage === 'health' && (
            <div className="space-y-6">
              {/* Health Records Header */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Records</h2>

                {/* TODO: Backend - Fetch health data from admin health portal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Health Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Basic Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Blood Type</span>
                        <span className="text-sm font-semibold text-gray-800 bg-red-50 px-3 py-1 rounded">
                          {/* TODO: Backend - Fetch blood type */}
                          Not specified
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Last Check-up</span>
                        <span className="text-sm text-gray-800">
                          {/* TODO: Backend - Fetch last checkup date */}
                          Not available
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Weight</span>
                        <span className="text-sm text-gray-800">
                          {/* TODO: Backend - Fetch weight */}
                          Not recorded
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Height</span>
                        <span className="text-sm text-gray-800">
                          {/* TODO: Backend - Fetch height */}
                          Not recorded
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Allergies */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Allergies</h3>
                    <div className="space-y-2">
                      {/* TODO: Backend - Map through allergies */}
                      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                        No allergies recorded
                      </div>
                      {/* Backend: Use this structure for each allergy
                      <div className="flex items-center space-x-2 bg-yellow-50 p-2 rounded">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-yellow-800">{allergy}</span>
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Conditions */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Health Conditions</h3>
                {/* TODO: Backend - Fetch health conditions from admin health portal */}
                <div className="space-y-3">
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>No health conditions recorded</p>
                  </div>
                  {/* Backend: Use this structure for each condition
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800">{condition.name}</p>
                        <p className="text-sm text-gray-600 mt-1">{condition.description}</p>
                      </div>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">{condition.status}</span>
                    </div>
                  </div>
                  */}
                </div>
              </div>

              {/* Vaccination Records */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Vaccination Records</h3>
                {/* TODO: Backend - Fetch vaccination records */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vaccine</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date Given</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Next Due</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-600" colSpan="4">
                          <div className="text-center py-6 text-gray-500">
                            <p>No vaccination records available</p>
                          </div>
                        </td>
                      </tr>
                      {/* Backend: Use this structure for each vaccination
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{vaccine.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{vaccine.dateGiven}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{vaccine.nextDue || 'N/A'}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            {vaccine.status}
                          </span>
                        </td>
                      </tr>
                      */}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Medical History / Clinic Visits */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Clinic Visits</h3>
                {/* TODO: Backend - Fetch clinic visit records */}
                <div className="space-y-3">
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p>No clinic visits recorded</p>
                  </div>
                  {/* Backend: Use this structure for each visit
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-800">{visit.date}</p>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{visit.type}</span>
                    </div>
                    <p className="text-sm text-gray-600"><span className="font-medium">Reason:</span> {visit.reason}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Diagnosis:</span> {visit.diagnosis}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Treatment:</span> {visit.treatment}</p>
                  </div>
                  */}
                </div>
              </div>
            </div>
          )}

          {/* TODO: Backend - Academic Records Page Implementation */}
          {currentPage === 'academics' && (
            <div className="space-y-6">
              {/* Academic Records Header */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Academic Records</h2>
                  <div className="flex space-x-3">
                    {/* TODO: Backend - Add term selector */}
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Term</option>
                      <option>Term 1 - 2025</option>
                      <option>Term 2 - 2025</option>
                      <option>Term 3 - 2025</option>
                    </select>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download Report Card</span>
                    </button>
                  </div>
                </div>

                {/* Academic Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-semibold mb-1">Overall Grade</p>
                    {/* TODO: Backend - Fetch overall grade */}
                    <p className="text-2xl font-bold text-blue-800">N/A</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 font-semibold mb-1">GPA</p>
                    {/* TODO: Backend - Calculate GPA */}
                    <p className="text-2xl font-bold text-green-800">0.0</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-700 font-semibold mb-1">Class Position</p>
                    {/* TODO: Backend - Fetch class position */}
                    <p className="text-2xl font-bold text-purple-800">-</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-700 font-semibold mb-1">Total Students</p>
                    {/* TODO: Backend - Fetch total students */}
                    <p className="text-2xl font-bold text-orange-800">-</p>
                  </div>
                </div>
              </div>

              {/* Exam Results Table */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Exam Results</h3>
                {/* TODO: Backend - Fetch and display exam results posted by teachers */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Exam Type</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Score</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Grade</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Teacher</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Comments</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* TODO: Backend - Map through exam results */}
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-600" colSpan="6">
                          <div className="text-center py-8 text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p>No exam results available</p>
                            <p className="text-sm mt-1">Results will appear here once posted by teachers</p>
                          </div>
                        </td>
                      </tr>
                      {/* Backend: Use this structure for each result
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{result.subject}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{result.examType}</td>
                        <td className="px-4 py-3 text-sm text-center font-semibold">{result.score}/{result.outOf}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {result.grade}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{result.teacher}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{result.comments}</td>
                      </tr>
                      */}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Subject Performance Chart */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Subject Performance Overview</h3>
                {/* TODO: Backend - Implement performance chart/graph */}
                <div className="text-center py-12 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p>Performance chart will be displayed here</p>
                  <p className="text-sm mt-1">Visual representation of your grades across subjects</p>
                </div>
              </div>
            </div>
          )}

          {/* TODO: Backend - Assignments Page Implementation */}
          {currentPage === 'assignments' && (
            <div className="space-y-6">
              {/* Assignments Header with Filter */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Assignments</h2>
                  <div className="flex space-x-3">
                    {/* TODO: Backend - Add subject filter */}
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Science</option>
                      <option>History</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>Submitted</option>
                      <option>Graded</option>
                      <option>Overdue</option>
                    </select>
                  </div>
                </div>

                {/* Assignment Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-xs text-yellow-700 font-semibold mb-1">Pending</p>
                    {/* TODO: Backend - Count pending assignments */}
                    <p className="text-xl font-bold text-yellow-800">0</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-700 font-semibold mb-1">Submitted</p>
                    {/* TODO: Backend - Count submitted assignments */}
                    <p className="text-xl font-bold text-blue-800">0</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-xs text-green-700 font-semibold mb-1">Graded</p>
                    {/* TODO: Backend - Count graded assignments */}
                    <p className="text-xl font-bold text-green-800">0</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="text-xs text-red-700 font-semibold mb-1">Overdue</p>
                    {/* TODO: Backend - Count overdue assignments */}
                    <p className="text-xl font-bold text-red-800">0</p>
                  </div>
                </div>
              </div>

              {/* Assignments List */}
              <div className="space-y-4">
                {/* TODO: Backend - Fetch assignments uploaded by teachers and map through them */}
                {/* Example: No assignments message */}
                <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-8">
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-lg font-medium">No assignments available</p>
                    <p className="text-sm mt-1">Assignments uploaded by teachers will appear here</p>
                  </div>
                </div>

                {/* Backend: Use this structure for each assignment */}
                {/* Pending Assignment Example
                <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-800">{assignment.title}</h3>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                          Pending
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Subject:</span> {assignment.subject}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Teacher:</span> {assignment.teacher}
                      </p>
                      <p className="text-sm text-gray-700 mb-3">{assignment.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-red-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Due: {assignment.dueDate}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>Max Marks: {assignment.maxMarks}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Assignment Instructions */}
                  {/* {assignment.instructions && (
                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                      <p className="text-xs font-semibold text-blue-800 mb-1">Instructions:</p>
                      <p className="text-sm text-blue-900">{assignment.instructions}</p>
                    </div>
                  )} */}

                  {/* Assignment Attachments from Teacher */}
                  {/* {assignment.teacherAttachments && assignment.teacherAttachments.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Assignment Materials:</p>
                      <div className="space-y-2">
                        {assignment.teacherAttachments.map((file, index) => (
                          <a
                            key={index}
                            href={file.url}
                            className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 p-2 rounded"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>{file.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )} */}

                  {/* Submission Form */}
                  {/* <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Submit Assignment:</p>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Upload Files (Optional)</label>
                        <input
                          type="file"
                          multiple
                          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Comments (Optional)</label>
                        <textarea
                          rows="3"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Add any comments or notes about your submission..."
                        ></textarea>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Submit Assignment
                      </button>
                    </div>
                  </div>
                </div>
                */}

                {/* Submitted/Graded Assignment Example
                <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-800">{assignment.title}</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Graded
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Subject:</span> {assignment.subject}
                      </p>
                      <div className="flex items-center space-x-4 text-sm mb-3">
                        <div className="flex items-center text-green-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Submitted: {assignment.submissionDate}</span>
                        </div>
                        <div className="font-semibold text-blue-600">
                          Grade: {assignment.grade} / {assignment.maxMarks}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Teacher Feedback */}
                  {/* {assignment.feedback && (
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-xs font-semibold text-green-800 mb-1">Teacher Feedback:</p>
                      <p className="text-sm text-green-900">{assignment.feedback}</p>
                    </div>
                  )}
                </div>
                */}
              </div>

              {/* Past Papers Section */}
              <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Past Papers</h3>
                {/* TODO: Backend - Fetch past papers uploaded by teachers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="text-center py-8 text-gray-500 col-span-full">
                    <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>No past papers available</p>
                    <p className="text-sm mt-1">Past papers will appear here</p>
                  </div>
                  
                  {/* Backend: Use this structure for each past paper
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{paper.title}</p>
                        <p className="text-xs text-gray-600">{paper.subject}</p>
                        <p className="text-xs text-gray-500">{paper.year}</p>
                      </div>
                    </div>
                    <button className="mt-3 w-full bg-blue-600 text-white px-3 py-2 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                  */}
                </div>
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
