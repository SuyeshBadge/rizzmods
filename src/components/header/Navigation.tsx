import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link to="/" className="text-gray-300 hover:text-white transition-colors">
        Home
      </Link>
      <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
        Products
      </Link>
      <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
        Contact
      </Link>
    </nav>
  );
}