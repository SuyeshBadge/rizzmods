import React from 'react';
import { FaLock, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

export default function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <FaLock size={16} className="text-green-500" />
        <span className="text-gray-400 text-sm">Secure Payments</span>
      </div>
      <div className="flex gap-4">
        <FaCcVisa size={32} className="text-gray-400" />
        <FaCcMastercard size={32} className="text-gray-400" />
        <FaCcPaypal size={32} className="text-gray-400" />
      </div>
    </div>
  );
}