import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shopifyClient from '../config/shopify';

interface ProductVariant {
  id: string;
  price: string;
  title: string;
  available: boolean;
}

interface Product {
  id: string;
  title: string;
  description: string;
  images: Array<{ src: string }>;
  variants: ProductVariant[];
  vendor: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await shopifyClient.product.fetch(id);
        setProduct(fetchedProduct);
        setSelectedVariant(fetchedProduct.variants[0]);
      } catch (err) {
        setError('Failed to load product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          {error || 'Product not found'}
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.images[0]?.src}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={`${product.title} view ${index + 2}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.vendor}</p>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-semibold">
              ${selectedVariant?.price}
            </p>

            {product.variants.length > 1 && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Variant
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedVariant?.id}
                  onChange={(e) => {
                    const variant = product.variants.find(v => v.id === e.target.value);
                    setSelectedVariant(variant || null);
                  }}
                >
                  {product.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.title} - ${variant.price}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              disabled={!selectedVariant?.available}
            >
              {selectedVariant?.available ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 