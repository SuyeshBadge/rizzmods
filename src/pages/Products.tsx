import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProducts, fetchCategories } from '../server/shopifyService';
import ProductCard from '../components/products/ProductCard';
import ProductsFilter from '../components/products/ProductsFilter';
import { Product } from '../types/product';
import { FaFilter } from 'react-icons/fa';
import LoadingSpinner from '../components/shared/LoadingSpinner';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [fetchedProducts, fetchedCategories] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ]);
        setProducts(fetchedProducts);
        setCategories(['all', ...fetchedCategories]);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gaming Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our premium selection of gaming merchandise and accessories
          </p>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-lg text-white"
          >
            <FaFilter />
            <span>Filter Products</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <motion.aside
            className={`md:w-64 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ProductsFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </motion.aside>

          {/* Products Grid */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No products found in this category.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 