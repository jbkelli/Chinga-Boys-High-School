import React from 'react';

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            School Code of Conduct
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Building Character, Discipline and Excellence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Code of Conduct</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Chinga Boys High School, we believe in nurturing young men of integrity, discipline, 
              and academic excellence. Our code of conduct serves as the foundation for creating a 
              positive learning environment where every student can thrive.
            </p>
          </div>

          {/* School Motto and Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-cyan-50 rounded-xl border border-cyan-200">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Academic Excellence</h3>
              <p className="text-cyan-700">Commitment to learning and intellectual growth</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Character Development</h3>
              <p className="text-blue-700">Building integrity, respect, and moral values</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Community Spirit</h3>
              <p className="text-green-700">Fostering unity, teamwork, and brotherhood</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Code of Conduct Rules */}
          <div className="lg:col-span-2 space-y-6">
            {/* Academic Conduct */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Academic Conduct</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Class Attendance</h4>
                    <p className="text-gray-600">Regular and punctual attendance to all classes and school activities is mandatory.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Academic Honesty</h4>
                    <p className="text-gray-600">Students must maintain the highest standards of academic integrity in all examinations and assignments.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Homework and Assignments</h4>
                    <p className="text-gray-600">All assignments must be completed on time and submitted according to teacher instructions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Study Environment</h4>
                    <p className="text-gray-600">Maintain a conducive learning atmosphere by respecting others' right to learn.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Behavioral Expectations */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Behavioral Expectations</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Respect for Authority</h4>
                    <p className="text-gray-600">Show respect to all teachers, staff members, and school administration at all times.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Peer Relationships</h4>
                    <p className="text-gray-600">Treat fellow students with kindness, respect, and dignity. Bullying will not be tolerated.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Language and Communication</h4>
                    <p className="text-gray-600">Use appropriate language and maintain respectful communication in all interactions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Conflict Resolution</h4>
                    <p className="text-gray-600">Address conflicts through proper channels and seek help from teachers or counselors when needed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dress Code and Appearance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Dress Code & Appearance</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">School Uniform</h4>
                    <p className="text-gray-600">Complete school uniform must be worn at all times during school hours and official functions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personal Grooming</h4>
                    <p className="text-gray-600">Maintain neat and clean appearance with proper haircuts and personal hygiene.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Prohibited Items</h4>
                    <p className="text-gray-600">Jewelry, unauthorized accessories, and inappropriate clothing are not permitted.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Disciplinary Process */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Disciplinary Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Verbal Warning</p>
                    <p className="text-xs text-gray-600">First-time minor offenses</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Written Warning</p>
                    <p className="text-xs text-gray-600">Repeat offenses</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Disciplinary Action</p>
                    <p className="text-xs text-gray-600">Serious or repeated violations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards and Recognition */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 p-6">
              <h3 className="text-lg font-bold text-cyan-800 mb-4">Rewards & Recognition</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.086z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-cyan-700">Merit certificates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.086z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-cyan-700">Academic excellence awards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.086z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-cyan-700">Leadership opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.086z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-cyan-700">Character commendations</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">School Counselor</p>
                    <p className="text-xs text-gray-600">Guidance & Support</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Class Teacher</p>
                    <p className="text-xs text-gray-600">Academic Matters</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Administration</p>
                    <p className="text-xs text-gray-600">Policy Clarification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* School Pledge */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Chinga Boys High School Pledge</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 italic">
              "We, the students of Chinga Boys High School, pledge to uphold the highest standards of 
              academic excellence, moral integrity, and character development. We commit to respecting 
              our teachers, supporting our fellow students, and representing our school with pride and honor. 
              We will strive to be responsible citizens and leaders of tomorrow."
            </p>
            <div className="border-t border-white/30 pt-4">
              <p className="text-sm opacity-90">Together We Rise, Together We Excel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;