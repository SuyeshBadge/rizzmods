import React from 'react';
import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import HeroHeading from './HeroHeading';
import HeroTagline from './HeroTagline';
import HeroStats from './HeroStats';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible" 
      className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center"
    >
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroHeading />
        <HeroTagline />
        <HeroStats />
        <HeroButtons />
      </div>
    </motion.div>
  );
}