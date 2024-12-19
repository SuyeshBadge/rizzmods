import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedElements from './AnimatedElements';

export default function HeroBackground() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 8]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <motion.div 
        style={{ opacity, scale, filter: blur }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-black/95 to-black/98" />
      </motion.div>
      
      <AnimatedElements />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]"
        />
      </div>
      
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </motion.div>
  );
}