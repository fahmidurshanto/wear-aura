// Carousel.jsx
import { useState, useEffect } from 'react';

const Carousel = () => {
  // Array of images for the carousel
  const images = [
    'https://www.shutterstock.com/shutterstock/photos/2454766731/display_1500/stock-vector-t-shirt-sport-jersey-design-template-with-geometric-line-stripes-background-sport-uniform-in-front-2454766731.jpg',
    'https://www.shutterstock.com/shutterstock/photos/2491198019/display_1500/stock-vector-t-shirt-sport-design-template-with-geometric-triangles-pattern-for-soccer-jersey-sport-uniform-in-2491198019.jpg',
    'https://www.shutterstock.com/shutterstock/photos/2494297929/display_1500/stock-vector-t-shirt-sport-jersey-design-template-with-abstract-grunge-halftone-pattern-background-sport-2494297929.jpg',
    '/src/assets/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Update index in a circular way
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Helper functions to navigate between slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white">
      {/* Images */}
      <div className="overflow-hidden relative h-64 sm:h-80 md:h-96">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600 transition"
        onClick={prevSlide}
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600 transition"
        onClick={nextSlide}
      >
        &rarr;
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
