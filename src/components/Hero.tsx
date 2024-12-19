import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { RiSparklingFill } from 'react-icons/ri';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute animate-float top-20 left-20">
          <IoGameController size={48} className="text-purple-500" />
        </div>
        <div className="absolute animate-float-delayed top-40 right-40">
          <RiSparklingFill size={36} className="text-blue-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Level Up Your Style
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Explore premium gaming merch that defines you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all">
              Shop Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-lg text-white font-bold text-lg hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2">
              Explore Collections
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}