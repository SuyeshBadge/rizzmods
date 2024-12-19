'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shopifyClient from '../../config/shopify';

interface Product {
  id: string;
  title: string;
  images: Array<{ src: string }>;
  variants: Array<{ price: string }>;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await shopifyClient.product.fetchAll();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            to={`/products/${product.id}`} 
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img 
              src={product.images[0]?.src} 
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-lg font-medium text-gray-900">
              ${product.variants[0]?.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 