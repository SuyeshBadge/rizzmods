import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderBackground } from '../../hooks/useHeaderBackground';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderBackground();

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-white hover:text-purple-400 transition-colors"
            >
              <FaShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <MobileMenu 
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-purple-500/20"
            >
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors">Home</Link>
                <Link to="/products" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors">Products</Link>
                <Link to="/about" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors">About</Link>
                <Link to="/contact" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors">Contact</Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}