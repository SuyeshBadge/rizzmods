import React from 'react';

interface FooterNavSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterNavSection({ title, children }: FooterNavSectionProps) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}