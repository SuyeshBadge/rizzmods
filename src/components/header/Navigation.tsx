import React from 'react';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#collections", label: "Collections" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export default function Navigation() {
  return (
    <motion.nav 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden md:flex items-center space-x-1 lg:space-x-2"
    >
      {navItems.map((item) => (
        <motion.div key={item.href} variants={itemVariants}>
          <NavLink href={item.href}>{item.label}</NavLink>
        </motion.div>
      ))}
    </motion.nav>
  );
}