import React from 'react';
import { motion } from 'framer-motion';

export default function UPIBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 px-4 py-2 rounded-full border border-purple-500/20"
    >
      <span className="text-xs text-gray-400">UPI Payments Accepted</span>
      <div className="w-4 h-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}