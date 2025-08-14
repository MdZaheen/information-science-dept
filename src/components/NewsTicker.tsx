'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Eye, Newspaper } from 'lucide-react';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  link: string;
  date: string;
  isNew?: boolean;
}

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Information Science Admission Notification 2024-25',
      link: '#',
      date: 'One month ago',
      isNew: true
    },
    {
      id: 2,
      title: 'Final Semester Examination Results Published',
      link: '#',
      date: '2 weeks ago',
      isNew: true
    },
    {
      id: 3,
      title: 'Industry Expert Guest Lecture on AI & Machine Learning',
      link: '#',
      date: '1 week ago'
    },
    {
      id: 4,
      title: 'Technical Symposium 2024 Registration Open',
      link: '#',
      date: '3 days ago'
    },
    {
      id: 5,
      title: 'Campus Placement Drive by Tech Companies',
      link: '#',
      date: '1 day ago'
    },
    {
      id: 6,
      title: 'New Computer Laboratory Inauguration Ceremony',
      link: '#',
      date: '5 hours ago'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, newsItems.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center">
            {/* News Label */}
            <button
              onClick={openModal}
              className="bg-red-600 text-white px-2 sm:px-4 py-2 sm:py-3 flex items-center space-x-1 sm:space-x-2 hover:bg-red-700 transition-colors min-w-fit"
            >
              <Newspaper size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">News & Events</span>
            </button>

            {/* News Content */}
            <div className="flex-1 relative overflow-hidden bg-white">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {newsItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-2 sm:px-4 py-2 sm:py-3">
                    <Link 
                      href={item.link}
                      className="flex items-center space-x-2 sm:space-x-3 hover:text-blue-600 transition-colors"
                    >
                      <span className="bg-gray-100 text-gray-700 text-xs sm:text-sm px-1 sm:px-2 py-1 rounded min-w-fit">
                        {index + 1}
                      </span>
                      {item.isNew && (
                        <span className="bg-red-500 text-white text-xs px-1 sm:px-2 py-1 rounded animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-xs sm:text-sm text-gray-500 min-w-fit hidden sm:block">{item.date}</span>
                      <span className="font-medium text-gray-800 flex-1 truncate text-xs sm:text-sm">
                        {item.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center bg-gray-600 text-white">
              <button
                onClick={openModal}
                className="px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-700 transition-colors flex items-center space-x-1"
                title="View All News"
              >
                <Eye size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm hidden md:inline">Read All</span>
              </button>
              <button
                onClick={handlePrevious}
                className="px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-700 transition-colors"
                title="Previous"
              >
                <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={togglePause}
                className="px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-700 transition-colors"
                title={isPaused ? 'Play' : 'Pause'}
              >
                {isPaused ? <Play size={14} className="sm:w-4 sm:h-4" /> : <Pause size={14} className="sm:w-4 sm:h-4" />}
              </button>
              <button
                onClick={handleNext}
                className="px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-700 transition-colors"
                title="Next"
              >
                <ChevronRight size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Latest News & Events</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <div key={item.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded min-w-fit">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {item.isNew && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                              NEW
                            </span>
                          )}
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <Link 
                          href={item.link}
                          className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors block"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t bg-gray-50">
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsTicker;
