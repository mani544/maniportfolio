import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Brain, Code, Database, Youtube, Briefcase } from 'lucide-react';
 

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Tech for the
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
           Data Analyst • Computer Science Student • Tech Innovator • Content Creator 
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about coding, data science, and empowering students through the 
            <span className="text-blue-400 font-semibold"> Tech Innovators Network Channel</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group"
            >
              <Code size={20} />
              <span>View My Projects</span>
            </a>
            <a
              href="#youtube"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group"
            >
              <Youtube size={20} />
              <span>Watch My Content</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center items-center space-x-8 mb-16 opacity-70">
            <div className="flex items-center space-x-2 text-gray-300">
              <Brain size={24} />
              <span className="hidden sm:inline">Generative AI & ML</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Database size={24} />
              <span className="hidden sm:inline">Data Science</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Youtube size={24} />
              <span className="hidden sm:inline">Content Creation</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;