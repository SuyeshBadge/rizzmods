import { IconType } from 'react-icons';

export interface PaymentMethod {
  icon: IconType;
  name: string;
}

export interface TrustBadge {
  icon: IconType;
  text: string;
}