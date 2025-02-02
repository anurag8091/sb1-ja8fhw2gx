import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text">
              UPPSC Decoded
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
            <a href="#papers" className="text-gray-700 hover:text-teal-600 font-medium">Previous Year Papers</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Study Material</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Success Stories</a>
            <div className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-full">
              <Phone className="h-4 w-4" />
              <span>+91 XXXXXXXXXX</span>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">Home</a>
            <a href="#papers" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">Previous Year Papers</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">Study Material</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">Success Stories</a>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Phone className="h-4 w-4 text-teal-600" />
              <span>+91 XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar