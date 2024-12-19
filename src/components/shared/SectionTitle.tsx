import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, alignment = 'left' }: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${alignmentClasses[alignment]}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-400 text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}