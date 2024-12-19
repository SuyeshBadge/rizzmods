import React from 'react';
import FooterBrand from './sections/FooterBrand';
import FooterNavigation from './sections/FooterNavigation';
import FooterPayments from './sections/FooterPayments';
import FooterBottom from './sections/FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-purple-900/20 via-black/95 to-black border-t border-purple-500/10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand and Social Section */}
            <div className="lg:col-span-4">
              <FooterBrand />
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-5">
              <FooterNavigation />
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-3">
              <FooterPayments />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
}