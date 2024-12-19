import { FaShieldAlt, FaPalette, FaTruck } from 'react-icons/fa';
import { FeatureType } from './types';

export const featuresList: FeatureType[] = [
  {
    icon: FaShieldAlt,
    title: 'Premium Quality',
    description: 'Experience gaming merchandise crafted with uncompromising attention to detail.',
    benefits: [
      'Durable materials built to last',
      'Premium finish and texture',
      'Quality-tested products'
    ]
  },
  {
    icon: FaPalette,
    title: 'Unique Designs',
    description: 'Stand out with exclusive artwork created by gamers for gamers.',
    benefits: [
      'Limited edition collections',
      'Custom design options',
      'Trending gaming themes'
    ]
  },
  {
    icon: FaTruck,
    title: 'Fast Shipping',
    description: 'Get your gaming gear delivered quickly and securely.',
    benefits: [
      'Worldwide shipping',
      'Real-time tracking',
      'Secure packaging'
    ]
  }
];