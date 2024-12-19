import React from 'react';
import { paymentMethods, trustBadges } from './payment/constants';
import PaymentIcon from './payment/PaymentIcon';
import TrustBadge from './payment/TrustBadge';
import UPIBadge from './payment/UPIBadge';
import ComplianceText from './payment/ComplianceText';

export default function IndianPaymentTrust() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Trust Badges */}
      <div className="flex items-center gap-4">
        {trustBadges.map((badge, index) => (
          <TrustBadge key={index} badge={badge} index={index} />
        ))}
      </div>

      {/* Payment Methods */}
      <div className="flex flex-wrap justify-center gap-1">
        {paymentMethods.map((method, index) => (
          <PaymentIcon key={index} method={method} index={index} />
        ))}
      </div>

      <UPIBadge />
      <ComplianceText />
    </div>
  );
}