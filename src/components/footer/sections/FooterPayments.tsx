import React from 'react';
import { motion } from 'framer-motion';
import { paymentMethods } from '../payment/constants';
import PaymentIcon from '../payment/PaymentIcon';
import { FaLock } from 'react-icons/fa';

export default function FooterPayments() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-white font-semibold mb-3">Payment Methods</h3>
        <div className="grid grid-cols-4 gap-2">
          {paymentMethods.slice(0, 8).map((method, index) => (
            <PaymentIcon key={method.name} method={method} index={index} />
          ))}
        </div>
      </div>
      
      <div className="pt-3 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 bg-purple-500/5 rounded-lg p-2"
        >
          <FaLock className="w-3.5 h-3.5 text-green-500" />
          <span className="text-xs text-gray-400">
            Secured by SSL
          </span>
          <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse ml-auto" />
        </motion.div>
      </div>
    </div>
  );
}