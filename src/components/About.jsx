import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Chinga Boys High School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our vibrant school and exceptional programs. Schedule Your Tour today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Nurturing Excellence Since 1985
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Chinga Boys High School, we are committed to providing a comprehensive education 
              that develops not just academic excellence, but also character, leadership, and 
              critical thinking skills that will serve our students throughout their lives.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dedicated faculty and staff work tirelessly to create an environment where 
              every student can discover their potential and pursue their passions with confidence 
              and determination.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-colors font-medium">
                Tour
              </button>
              <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-300 transition-colors font-medium">
                Inquire
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">40+</div>
                <div className="text-sm text-gray-600">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Excellence in Education</h4>
                  <p className="text-gray-600">
                    Providing quality education with modern facilities and experienced teachers
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;