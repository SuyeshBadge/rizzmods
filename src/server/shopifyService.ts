import shopifyClient from '../config/shopify';
import { dummyProducts } from '../constants/dummyData';
import type { Product } from '../types/product';

interface ShopifyImage {
  src: string
  alt?: string
}

interface ShopifyVariant {
  id: string
  title: string
  price?: string
  available?: boolean
}

interface ShopifyProduct {
  id: string
  title: string
  description?: string
  variants: ShopifyVariant[]
  productType?: string
  images: ShopifyImage[]
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const shopifyProducts = await shopifyClient.product.fetchAll()
    return (shopifyProducts as unknown as ShopifyProduct[]).map(transformShopifyProduct)
  } catch (error) {
    console.error('Error fetching Shopify products:', error)
    return dummyProducts
  }
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  try {
    const products = await fetchProducts();
    return products.filter(product => product.category === category);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return dummyProducts.filter(product => product.category === category);
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const products = await fetchProducts();
    const categories = new Set(products.map(product => product.category));
    return Array.from(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['Mousepads', 'Keyboards', 'Headsets', 'Accessories'];
  }
}

function transformShopifyProduct(shopifyProduct: ShopifyProduct): Product {
  return {
    id: shopifyProduct.id,
    title: shopifyProduct.title,
    description: shopifyProduct.description || '',
    price: shopifyProduct.variants[0]?.price || '0.00',
    category: shopifyProduct.productType || 'Uncategorized',
    images: shopifyProduct.images.map((img) => ({
      src: img.src || 'https://placehold.co/400x400/png?text=Product+Image',
      alt: img.alt || shopifyProduct.title
    })),
    variants: shopifyProduct.variants.map((variant) => ({
      id: variant.id,
      title: variant.title,
      price: variant.price || '0.00',
      available: variant.available || false
    })),
    rating: 4.5,
    reviewCount: 0
  }
} 