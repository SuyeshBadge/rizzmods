import React from 'react';
import { motion } from 'framer-motion';

export default function ComplianceText() {
  return (
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-xs text-gray-400 text-center mt-2"
    >
      RBI Approved • PCI DSS Compliant • UPI Verified
    </motion.p>
  );
}