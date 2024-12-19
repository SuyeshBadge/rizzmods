import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <div className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Join the Gaming Revolution
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 px-4">
            Subscribe for exclusive drops & rewards. Level up your inbox game!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-purple-900/20 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 rounded-lg text-white font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Subscribe <FaPaperPlane className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}