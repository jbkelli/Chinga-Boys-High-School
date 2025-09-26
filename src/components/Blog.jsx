import React from 'react';

// Import images
import education from '../assets/images/education.jpg';
import achievement from '../assets/images/achievement.jpg';
import events from '../assets/images/events.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Education',
      title: 'Top Study Tips for Students',
      excerpt: 'Effective studying strategies to enhance your learning experience.',
      date: '6 days ago',
      image: education,
      bgColor: 'from-purple-600 to-purple-800'
    },
    {
      id: 2,
      category: 'Achievements',
      title: 'Students Win Sub-County Science And Humanities Contest',
      excerpt: 'Congratulations to our talented students for their outstanding performance.',
      date: '12 days ago',
      image: achievement,
      bgColor: 'from-white to-gray-50',
      textColor: 'text-gray-800'
    },
    {
      id: 3,
      category: 'Events',
      title: 'Annual Sports Day Highlights',
      excerpt: 'Join us in celebrating our students\' athletic achievements and school spirit.',
      date: '20 days ago',
      image: events,
      bgColor: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-800 to-green-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-green-300 text-lg font-medium mb-4">Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights and Updates
          </h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Explore Educational tips and students success stories.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Post Image/Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.bgColor} opacity-75`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.textColor === 'text-gray-800' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white bg-opacity-20 text-white backdrop-blur-sm'
                  }`}>
                    {post.category}
                  </span>
                </div>

                {/* Visual Element based on category */}
                <div className="absolute right-4 top-4 opacity-30">
                  {post.category === 'Education' && (
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                    </svg>
                  )}
                  {post.category === 'Achievements' && (
                    <svg className="w-12 h-12 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  )}
                  {post.category === 'Events' && (
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <button className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-white bg-opacity-10 backdrop-blur-sm text-white border-2 border-white border-opacity-30 px-8 py-3 rounded-full hover:bg-white hover:text-green-800 transition-all font-medium">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;