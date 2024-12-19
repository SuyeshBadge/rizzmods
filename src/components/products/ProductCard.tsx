import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { formatPrice } from '../../utils/currency';
import { Product } from './types';
import SchemaMarkup from '../shared/SchemaMarkup';
import { generateProductSchema } from '../../utils/schema';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <SchemaMarkup schema={generateProductSchema(product)} />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        className="group relative rounded-xl overflow-hidden bg-purple-900/20 backdrop-blur-sm border border-purple-500/20"
      >
        <div className="aspect-w-16 aspect-h-9 sm:aspect-w-1 sm:aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center">
              <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-gray-300">{product.rating}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-bold text-purple-400">
              {formatPrice(product.price)}
            </span>
            <button 
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors transform hover:scale-105"
              aria-label={`Add ${product.name} to cart`}
            >
              <FaShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}