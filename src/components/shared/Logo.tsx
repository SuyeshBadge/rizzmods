import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizesMap = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14'
};

export default function Logo({ className = '', size = 'lg' }: LogoProps) {
  return (
    <motion.img
      src="/logo.png"
      alt="RizzMods Logo"
      className={`${sizesMap[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    />
  );
}