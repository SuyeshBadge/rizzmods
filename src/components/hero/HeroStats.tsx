import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '150+', label: 'Unique Designs' },
  { value: '24/7', label: 'Support' },
];

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={statVariants}
          className={`text-center p-4 rounded-lg bg-purple-900/10 backdrop-blur-sm border border-purple-500/20 ${
            stats.length % 2 === 1 && index === stats.length - 1 
              ? 'col-start-1 col-end-3 md:col-start-auto md:col-end-auto mx-auto md:mx-0 w-[calc(50%-0.5rem)] md:w-full' 
              : ''
          }`}
        >
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}