import React from 'react';
import FooterNavSection from '../FooterNavSection';
import FooterNavLink from '../FooterNavLink';

const navigationSections = [
  {
    title: 'Products',
    links: [
      { label: 'Featured', href: '/products' },
      { label: 'New Arrivals', href: '/products' },
      { label: 'Best Sellers', href: '/products' },
      { label: 'Collections', href: '/products' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/contact' },
      { label: 'Track Order', href: '/contact' },
      { label: 'Returns', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Blog', href: '/' }, // No specific route for blog, linking to homepage
      { label: 'Press', href: '/about' },
    ],
  },
];

export default function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {navigationSections.map((section) => (
        <FooterNavSection key={section.title} title={section.title}>
          {section.links.map((link) => (
            <li key={link.label}>
              <FooterNavLink href={link.href}>{link.label}</FooterNavLink>
            </li>
          ))}
        </FooterNavSection>
      ))}
    </div>
  );
}