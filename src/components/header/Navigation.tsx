import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Shop</Link>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <Link to="/new-arrivals" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
      </motion.div>
    </nav>
  );
}