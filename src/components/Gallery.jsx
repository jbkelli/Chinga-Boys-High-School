import React, { useState } from 'react';

// Import images
import schoolEntrance from '../assets/images/school_entrance.jpg';
import scienceLaboratory from '../assets/images/science_laboratory.jpg';
import library from '../assets/images/library.jpg';
import schoolField from '../assets/images/school_field.jpg';
import computerLaboratory from '../assets/images/computer_laboratory.jpg';
import graduation from '../assets/images/graduation.jpg';
import domitories from '../assets/images/domitories.jpg';
import basketballCourt from '../assets/images/basketball_court.jpg';
import scienceFair from '../assets/images/science_fair.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus Life' },
    { id: 'academics', name: 'Academics' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'campus',
      title: 'School Entrance',
      description: 'Main entrance to Chinga Boys High School',
      imageUrl: schoolEntrance
    },
    {
      id: 2,
      category: 'academics',
      title: 'Science Laboratory',
      description: 'Modern chemistry and physics laboratory',
      imageUrl: scienceLaboratory
    },
    {
      id: 3,
      category: 'campus',
      title: 'Library',
      description: 'Well-stocked library facility for research and study',
      imageUrl: library
    },
    {
      id: 4,
      category: 'sports',
      title: 'Sports Field',
      description: 'Football and athletics field for outdoor activities',
      imageUrl: schoolField
    },
    {
      id: 5,
      category: 'academics',
      title: 'Computer Laboratory',
      description: 'Modern computer laboratory with latest technology',
      imageUrl: computerLaboratory
    },
    {
      id: 6,
      category: 'events',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrating student achievements',
      imageUrl: graduation
    },
    {
      id: 7,
      category: 'campus',
      title: 'Student Dormitories',
      description: 'Comfortable student accommodation facilities',
      imageUrl: domitories
    },
    {
      id: 8,
      category: 'sports',
      title: 'Basketball Court',
      description: 'Indoor basketball facility for sports activities',
      imageUrl: basketballCourt
    },
    {
      id: 9,
      category: 'events',
      title: 'Science Fair',
      description: 'Annual science exhibition showcasing student innovations',
      imageUrl: scienceFair
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            School Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful campus, state-of-the-art facilities, and vibrant school life 
            through these carefully curated photographs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    console.log(`Failed to load image: ${image.imageUrl}`);
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle">Image not found</text>
                        <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">${image.title}</text>
                      </svg>
                    `)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-colors font-medium">
            Load More Photos
          </button>
        </div>

        {/* Virtual Tour CTA */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Take a Virtual Tour</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can't visit in person? Experience our campus through our interactive virtual tour 
            and see what makes Chinga Boys High School special.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
            Start Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;