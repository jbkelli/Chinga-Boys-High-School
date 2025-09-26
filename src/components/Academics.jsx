import React from 'react';

const Academics = () => {
  const programs = [
    {
      title: "Sciences",
      description: "Comprehensive science education with modern laboratories",
      icon: "🔬",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"]
    },
    {
      title: "Languages",
      description: "Master communication skills in multiple languages",
      icon: "📚",
      subjects: ["English", "Kiswahili", "French", "Literature"]
    },
    {
      title: "Humanities",
      description: "Understanding society, culture, and human behavior",
      icon: "🌍",
      subjects: ["History", "Geography", "Religious Studies", "Philosophy"]
    },
    {
      title: "Technical Studies",
      description: "Practical skills for the modern world",
      icon: "⚙️",
      subjects: ["Computer Studies", "Technical Drawing", "Agriculture", "Business"]
    },
    {
      title: "Arts & Sports",
      description: "Creative expression and physical development",
      icon: "🎨",
      subjects: ["Fine Art", "Music", "Drama", "Physical Education"]
    },
    {
      title: "Leadership",
      description: "Building tomorrow's leaders through character development",
      icon: "👑",
      subjects: ["Student Government", "Clubs", "Community Service", "Mentorship"]
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to prepare students for success in 
            higher education and beyond, combining academic rigor with character development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>

              <div className="space-y-2">
                {program.subjects.map((subject, subIndex) => (
                  <div 
                    key={subIndex}
                    className="flex items-center justify-between bg-cyan-50 rounded-lg px-4 py-2"
                  >
                    <span className="text-gray-700 font-medium">{subject}</span>
                    <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Admissions Call-to-Action */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards an exceptional education. Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-cyan-600 transition-colors font-semibold">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;