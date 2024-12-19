import React from 'react';
import { motion } from 'framer-motion';
import { PaymentMethod } from './types';

interface PaymentIconProps {
  method: PaymentMethod;
  index: number;
}

export default function PaymentIcon({ method, index }: PaymentIconProps) {
  const Icon = method.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div className="bg-white/5 p-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center justify-center h-10 w-10">
        {typeof Icon === 'function' ? (
          <Icon className="w-5 h-5 text-gray-300" />
        ) : (
          <Icon />
        )}
      </div>
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/90 text-white text-[10px] py-1 px-1.5 rounded whitespace-nowrap">
          {method.name}
        </div>
      </div>
    </motion.div>
  );
}