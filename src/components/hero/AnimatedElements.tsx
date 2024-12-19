import React from 'react';
import { motion } from 'framer-motion';
import { IoGameController } from 'react-icons/io5';
import { RiSparklingFill } from 'react-icons/ri';

const floatingElements = [
  { Icon: IoGameController, size: 48, x: '10%', y: '20%', color: 'purple', duration: 6 },
  { Icon: RiSparklingFill, size: 36, x: '85%', y: '30%', color: 'blue', duration: 7 },
  { Icon: IoGameController, size: 32, x: '75%', y: '70%', color: 'purple', duration: 8 },
  { Icon: RiSparklingFill, size: 24, x: '15%', y: '65%', color: 'pink', duration: 5 },
];

export default function AnimatedElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -30, 0]
          }}
          transition={{
            duration: element.duration,
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
    </div>
  );
}