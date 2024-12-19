import { IconType } from 'react-icons';

export interface FeatureType {
  icon: IconType;
  title: string;
  description: string;
  benefits?: string[];
}