import React from 'react';
import { motion } from 'framer-motion';
import { IoGameController } from 'react-icons/io5';
import { RiSparklingFill } from 'react-icons/ri';

const floatingElements = [
  { Icon: IoGameController, size: 48, delay: 0, x: '10%', y: '20%', color: 'purple', duration: 6 },
  { Icon: RiSparklingFill, size: 36, delay: 0.5, x: '85%', y: '30%', color: 'blue', duration: 7 },
  { Icon: IoGameController, size: 32, delay: 1, x: '75%', y: '70%', color: 'purple', duration: 8 },
  { Icon: RiSparklingFill, size: 24, delay: 1.5, x: '15%', y: '65%', color: 'pink', duration: 5 },
  { Icon: IoGameController, size: 28, delay: 2, x: '90%', y: '85%', color: 'indigo', duration: 7 },
  { Icon: RiSparklingFill, size: 20, delay: 2.5, x: '5%', y: '40%', color: 'violet', duration: 6 },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{ left: element.x, top: element.y }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <element.Icon 
              size={element.size} 
              className={`text-${element.color}-500/30`} 
            />
          </motion.div>
        </motion.div>
      ))}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse delay-1000" />
    </div>
  );
}