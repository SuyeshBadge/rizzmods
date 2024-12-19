import React from 'react';
import SocialLinks from '../SocialLinks';
import Logo from '../../shared/Logo';

export default function FooterBrand() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Logo size="md" className="text-purple-400" />
        <span className="text-2xl font-bold text-white">RizzMods</span>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        Elevate your gaming experience with premium merchandise that defines your style. 
        Crafted for gamers, by gamers.
      </p>
      
      <SocialLinks />
    </div>
  );
}