import React from 'react';
import { motion } from 'framer-motion';

export default function HeroHeading() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-4 sm:mb-6 w-full"
    >
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2 sm:mb-4 block"
      >
        Welcome to the Future of Gaming Style
      </motion.span>
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Elevate Your Gaming
        </span>
        <br className="hidden sm:block" />
        <span className="inline-block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Experience
        </span>
      </motion.h1>
    </motion.div>
  );
}