import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full pt-32 sm:pt-36 md:pt-32"> {/* Increased top padding for mobile */}
          <HeroContent />
        </div>
      </div>
    </div>
  );
}