import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../shared/Logo';

export default function HeaderLogo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center"
    >
      <Logo size="lg" className="text-purple-500" />
      <span className="text-xl sm:text-3xl font-bold text-white">RizzMods</span>
    </motion.div>
  );
}