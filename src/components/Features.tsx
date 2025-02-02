import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive UPPSC Preparation
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                  <BookOpen className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Detailed Solutions
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Chapter-wise solutions with complete explanations and references for better understanding.
                </p>
              </div>
            </div>

            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                  <Users className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Expert Faculty
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Solutions prepared by UPPSC toppers and subject matter experts.
                </p>
              </div>
            </div>

            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                  <Award className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Proven Track Record
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Consistently producing toppers in UPPSC examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features