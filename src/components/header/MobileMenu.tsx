import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
    </motion.button>
  );
}