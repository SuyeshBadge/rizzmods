import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors px-4 py-2"
    >
      {children}
    </a>
  );
}