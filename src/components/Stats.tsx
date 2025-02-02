import React from 'react';
import { Users, BookOpen, Award, Target } from 'lucide-react';

const Stats = () => {
  return (
    <div className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">10,000+</p>
            <p className="mt-1 text-base text-gray-500">Active Students</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">2000+</p>
            <p className="mt-1 text-base text-gray-500">Detailed Solutions</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">500+</p>
            <p className="mt-1 text-base text-gray-500">Selections</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">6</p>
            <p className="mt-1 text-base text-gray-500">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats