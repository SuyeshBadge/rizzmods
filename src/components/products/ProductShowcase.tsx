import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from './types';
import SectionTitle from '../shared/SectionTitle';

const products: Product[] = [
  {
    id: 1,
    name: 'Cyber Ninja Sticker Pack',
    price: 999,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    description: 'Limited edition cyber ninja themed sticker collection',
    reviewCount: 128
  },
  {
    id: 2,
    name: 'Battle Arena Poster',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    description: 'High-quality battle arena gaming poster',
    reviewCount: 256
  },
  {
    id: 3,
    name: 'Fantasy World Collection',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    description: 'Premium fantasy world merchandise collection',
    reviewCount: 512
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

export default function ProductShowcase() {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Collections"
          subtitle="Explore our handpicked premium gaming merchandise"
          alignment="center"
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}