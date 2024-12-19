import React from 'react';
import { FaDiscord, FaTwitch, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaDiscord, href: '#', label: 'Discord' },
  { icon: FaTwitch, href: '#', label: 'Twitch' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-purple-400 transition-colors"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}