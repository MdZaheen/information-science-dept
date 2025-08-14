'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Plus, Minus, RotateCcw, User, Eye } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
  const resetFontSize = () => setFontSize(16);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/login" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm hover:text-blue-600">
                <User size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
              <Link href="#" className="text-xs sm:text-sm hover:text-blue-600">ಕನ್ನಡ</Link>
              <button className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm hover:text-blue-600">
                <Eye size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Visually Challenged</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="p-1 sm:p-2 rounded-full hover:bg-gray-200">
                {isDarkMode ? <Sun size={16} className="sm:w-5 sm:h-5" /> : <Moon size={16} className="sm:w-5 sm:h-5" />}
              </button>
              
              {/* Font Size Controls - Hidden on mobile */}
              <div className="hidden sm:flex items-center border rounded">
                <button onClick={decreaseFontSize} className="p-1 hover:bg-gray-200">
                  <Minus size={14} />
                </button>
                <span className="px-2 text-sm">A</span>
                <button onClick={increaseFontSize} className="p-1 hover:bg-gray-200">
                  <Plus size={14} />
                </button>
                <button onClick={resetFontSize} className="p-1 hover:bg-gray-200">
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between py-2 sm:py-4">
            {/* CM Logo - Hidden on mobile */}
            <div className="hidden md:flex flex-shrink-0">
              <Image
                src="/images/cm_logo.png"
                alt="Chief Minister of Karnataka"
                width={isMobile ? 80 : 120}
                height={isMobile ? 60 : 80}
                className="object-contain"
              />
            </div>

            {/* Department Info */}
            <div className="flex-1 flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6">
              <Image
                src="/images/dept_logo.jpg"
                alt="Department Logo"
                width={isMobile ? 50 : 80}
                height={isMobile ? 50 : 80}
                className="object-contain"
              />
              <div className="text-center">
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 uppercase leading-tight">
                  {isMobile ? 'Info Science Dept' : 'Department of Information Science'}
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                  {isMobile ? 'Govt Polytechnic Kalaburagi' : 'Government Polytechnic Kalaburagi'}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                  Department of Collegiate and Technical Education
                </p>
              </div>
              <div className="hidden sm:block">
                <Image
                  src="/images/dept_center_logo.jpg"
                  alt="Center Logo"
                  width={isMobile ? 50 : 80}
                  height={isMobile ? 50 : 80}
                  className="object-contain rounded-full"
                />
              </div>
            </div>

            {/* HOD Photo - Hidden on mobile */}
            <div className="hidden md:flex flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-gray-300">
                <Image
                  src="/images/hod image.png"
                  alt="Head of Department"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2 py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                <span>🏠</span>
                <span>Home</span>
              </Link>
              
              <div className="relative group">
                <button className="py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                  About Department
                </button>
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/overview" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  <Link href="/vision-mission" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</Link>
                  <Link href="/faculty" className="block px-4 py-2 hover:bg-gray-100">Faculty</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                  Academics
                </button>
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/curriculum" className="block px-4 py-2 hover:bg-gray-100">Curriculum</Link>
                  <Link href="/syllabus" className="block px-4 py-2 hover:bg-gray-100">Syllabus</Link>
                  <Link href="/admission" className="block px-4 py-2 hover:bg-gray-100">Admission</Link>
                  <Link href="/exam-results" className="block px-4 py-2 hover:bg-gray-100">Exam & Results</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                  Students
                </button>
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/student-list" className="block px-4 py-2 hover:bg-gray-100">Student List</Link>
                  <Link href="/events" className="block px-4 py-2 hover:bg-gray-100">Events</Link>
                  <Link href="/achievements" className="block px-4 py-2 hover:bg-gray-100">Achievements</Link>
                </div>
              </div>

              <Link href="/facilities" className="py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                Facilities
              </Link>

              <Link href="/placement" className="py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                Placement
              </Link>

              <Link href="/contact" className="py-4 hover:bg-blue-700 px-3 rounded transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-blue-900 py-4">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="py-2 px-4 hover:bg-blue-700 rounded">Home</Link>
                <Link href="/overview" className="py-2 px-4 hover:bg-blue-700 rounded">Overview</Link>
                <Link href="/vision-mission" className="py-2 px-4 hover:bg-blue-700 rounded">Vision & Mission</Link>
                <Link href="/faculty" className="py-2 px-4 hover:bg-blue-700 rounded">Faculty</Link>
                <Link href="/curriculum" className="py-2 px-4 hover:bg-blue-700 rounded">Curriculum</Link>
                <Link href="/facilities" className="py-2 px-4 hover:bg-blue-700 rounded">Facilities</Link>
                <Link href="/events" className="py-2 px-4 hover:bg-blue-700 rounded">Events</Link>
                <Link href="/student-list" className="py-2 px-4 hover:bg-blue-700 rounded">Student List</Link>
                <Link href="/placement" className="py-2 px-4 hover:bg-blue-700 rounded">Placement</Link>
                <Link href="/contact" className="py-2 px-4 hover:bg-blue-700 rounded">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
