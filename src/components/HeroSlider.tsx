'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  contactLink: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides: SlideData[] = [
    {
      id: 1,
      image: '/images/slider1.jpg',
      title: 'Information Science Department',
      description: 'Excellence in Information Technology Education and Research',
      readMoreLink: '/overview',
      contactLink: '/contact'
    },
    {
      id: 2,
      image: '/images/slider2.jpg',
      title: 'Modern Computing Facilities',
      description: 'State-of-the-art laboratories and equipment for practical learning',
      readMoreLink: '/facilities',
      contactLink: '/contact'
    },
    {
      id: 3,
      image: '/images/slider1.jpg', // Using same image for demo
      title: 'Industry Ready Programs',
      description: 'Curriculum designed to meet industry demands and standards',
      readMoreLink: '/curriculum',
      contactLink: '/contact'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white ml-2 sm:ml-4 md:ml-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 animate-fade-in-up animation-delay-200 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
                    <a
                      href={slide.readMoreLink}
                      className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-center text-sm sm:text-base"
                    >
                      Read More
                    </a>
                    <a
                      href={slide.contactLink}
                      className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-center text-sm sm:text-base"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 md:right-6 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
