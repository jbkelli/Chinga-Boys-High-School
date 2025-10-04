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

              {/* Development Message */}
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">This Site is Under Development</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're working hard to bring you a comprehensive parents information board. 
                  This section will include important school announcements, student updates, 
                  and event notifications.
                </p>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200 max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🚧 Development In Progress</h3>
                  <p className="text-gray-700 mb-4">
                    Our development team is currently building this feature. Please check back soon!
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div className="bg-cyan-600 h-4 rounded-full transition-all duration-500" style={{width: '40%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600">Estimated completion: 40%</p>
                </div>
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