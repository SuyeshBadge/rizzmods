import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTagline() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full max-w-2xl mx-auto mb-6 sm:mb-8"
    >
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
        <span className="block mb-2">
          Discover exclusive, premium gaming merchandise that sets you apart.
        </span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="block text-sm sm:text-base md:text-lg text-purple-400"
        >
          Created by gamers, for gamers.
        </motion.span>
      </p>
    </motion.div>
  );
}