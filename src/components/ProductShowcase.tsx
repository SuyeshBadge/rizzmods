import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Cyber Ninja Sticker Pack',
    price: 999,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Battle Arena Poster',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Fantasy World Collection',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Format price in Indian Rupees
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export default function ProductShowcase() {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
        >
          Featured Collections
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={productVariants}
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
                  <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">{product.name}</h3>
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-gray-300">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-purple-400">
                    {formatPrice(product.price)}
                  </span>
                  <button className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors transform hover:scale-105">
                    <FaShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}