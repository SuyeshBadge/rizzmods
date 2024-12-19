import React from 'react';
import { FaChevronRight, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
      <motion.button 
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-sm sm:text-base hover:from-purple-700 hover:to-pink-700 transition-all relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Shop Premium Collection
          <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform" />
      </motion.button>
      
      <motion.button 
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
      >
        <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors">
          <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 group-hover:text-purple-300" />
        </span>
        Watch Showcase
      </motion.button>
    </div>
  );
}