import React from 'react';

interface FooterNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterNavLink({ href, children }: FooterNavLinkProps) {
  return (
    <a
      href={href}
      className="block text-gray-400 hover:text-purple-400 transition-colors py-1.5"
    >
      {children}
    </a>
  );
}