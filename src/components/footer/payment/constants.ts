import { 
  SiPaytm, 
  SiPhonepe, 
  SiGooglepay,
  SiPaypal,
  SiVisa,
  SiMastercard
} from 'react-icons/si';
import UPIIcon from './UPIIcon';
import { PaymentMethod, TrustBadge } from './types';
import { FaLock, FaShieldAlt } from 'react-icons/fa';

export const paymentMethods: PaymentMethod[] = [
  { icon: UPIIcon, name: 'UPI' },
  { icon: SiPaytm, name: 'Paytm' },
  { icon: SiPhonepe, name: 'PhonePe' },
  { icon: SiGooglepay, name: 'Google Pay' },
  { icon: SiPaypal, name: 'PayPal' },
  { icon: SiVisa, name: 'Visa' },
  { icon: SiMastercard, name: 'Mastercard' },
];

export const trustBadges: TrustBadge[] = [
  { icon: FaLock, text: '256-bit SSL' },
  { icon: FaShieldAlt, text: '100% Secure' }
];