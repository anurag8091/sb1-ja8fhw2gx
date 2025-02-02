import React from 'react';
import { Search, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-emerald-900/90 to-teal-900/90"></div>
      <div className="relative max-w-7xl mx-auto pt-20">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Master UPPSC Mains with</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  Previous Year Questions
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Comprehensive chapter-wise analysis of previous year questions (2018-2023) with detailed solutions and expert insights.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a href="#papers" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 md:py-4 md:text-lg md:px-10 transform transition-all hover:scale-105">
                    Explore Solutions
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-teal-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transform transition-all hover:scale-105">
                    View Sample Questions
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero