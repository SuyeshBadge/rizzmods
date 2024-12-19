import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shopifyClient from '../config/shopify';

interface Product {
  id: string;
  title: string;
  images: Array<{ src: string }>;
  variants: Array<{ price: string }>;
}

// Dummy data for when Shopify data isn't available
const dummyProducts: Product[] = [
  {
    id: '1',
    title: 'Gaming Mouse Pad XL',
    images: [{ src: 'https://placehold.co/400x400/png?text=Gaming+Mouse+Pad' }],
    variants: [{ price: '29.99' }]
  },
  {
    id: '2',
    title: 'Mechanical Keyboard',
    images: [{ src: 'https://placehold.co/400x400/png?text=Mechanical+Keyboard' }],
    variants: [{ price: '149.99' }]
  },
  {
    id: '3',
    title: 'Gaming Headset Pro',
    images: [{ src: 'https://placehold.co/400x400/png?text=Gaming+Headset' }],
    variants: [{ price: '89.99' }]
  },
  {
    id: '4',
    title: 'RGB Mouse',
    images: [{ src: 'https://placehold.co/400x400/png?text=RGB+Mouse' }],
    variants: [{ price: '59.99' }]
  },
  {
    id: '5',
    title: 'Gaming Chair',
    images: [{ src: 'https://placehold.co/400x400/png?text=Gaming+Chair' }],
    variants: [{ price: '299.99' }]
  },
  {
    id: '6',
    title: 'LED Strip Lights',
    images: [{ src: 'https://placehold.co/400x400/png?text=LED+Lights' }],
    variants: [{ price: '24.99' }]
  }
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const shopifyProducts = await shopifyClient.product.fetchAll();
        if (shopifyProducts && shopifyProducts.length > 0) {
          setProducts(shopifyProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-80px)] pt-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-black text-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
              Gaming Products
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Level up your gaming setup with our premium collection of gaming merchandise
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link 
                to={`/products/${product.id}`} 
                key={product.id}
                className="group relative bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-800">
                  <img 
                    src={product.images[0]?.src} 
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-2xl font-bold text-purple-500">
                    ${product.variants[0]?.price}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 