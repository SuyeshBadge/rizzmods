export interface ProductImage {
  src: string;
  alt?: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: string;
  available: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  images: ProductImage[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
} 