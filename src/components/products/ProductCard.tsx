import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: string | number) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return !isNaN(numPrice) ? numPrice.toFixed(2) : '0.00';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col h-full group relative rounded-xl overflow-hidden bg-purple-900/20 backdrop-blur-sm border border-purple-500/20"
    >
      <Link to={`/product/${product.id}`} className="flex flex-col h-full">
        <div className="relative pt-[100%]">
          <img
            src={product.images[0]?.src || 'https://placehold.co/400x400/png?text=Product+Image'}
            alt={product.images[0]?.alt || product.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <div className="flex items-start justify-between mb-2 gap-2">
            <h3 className="text-lg font-bold text-white truncate">
              {product.title}
            </h3>
            <div className="flex items-center flex-shrink-0">
              <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-gray-300">{product.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-purple-400">
              ${formatPrice(product.price)}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <FaShoppingCart className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 