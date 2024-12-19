import React from 'react';
import FooterNavSection from '../FooterNavSection';
import FooterNavLink from '../FooterNavLink';

const navigationSections = [
  {
    title: 'Products',
    links: [
      { label: 'Featured', href: '#' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Collections', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Track Order', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
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