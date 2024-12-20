import React from 'react';
import { motion } from 'framer-motion';

interface ProductsFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductsFilter({
  categories,
  selectedCategory,
  onCategoryChange
}: ProductsFilterProps) {
  return (
    <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-purple-600/20'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>
    </div>
  );
} 