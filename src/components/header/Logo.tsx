import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <img 
          src="/logo.png" 
          alt="RizzMods Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 transition-transform hover:brightness-110"
        />
      </motion.div>
      <motion.span 
        className="ml-2 text-xl sm:text-2xl font-bold text-white hidden sm:block"
        whileHover={{ color: '#A855F7' }}
      >
        RizzMods
      </motion.span>
    </Link>
  );
}