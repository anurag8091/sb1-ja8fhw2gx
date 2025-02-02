import React from 'react';
import { BookOpen, FileText, GraduationCap, Menu, Search, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PaperSection from './components/PaperSection';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <PaperSection />
      <Footer />
    </div>
  );
}

export default App