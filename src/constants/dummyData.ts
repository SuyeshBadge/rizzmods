import { Product } from '../types/product'

export const dummyProducts: Product[] = [
  {
    id: '1',
    title: 'Gaming Mouse Pad XL',
    description: 'Premium extra-large gaming mouse pad with RGB edges',
    category: 'Accessories',
    price: '29.99',
    rating: 4.8,
    reviewCount: 125,
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=60',
        alt: 'Gaming Mouse Pad XL' 
      }
    ],
    variants: [
      { 
        id: 'v1',
        title: 'Standard',
        price: '29.99',
        available: true
      }
    ]
  },
  {
    id: '2',
    title: 'Mechanical Gaming Keyboard',
    description: 'RGB mechanical keyboard with custom switches',
    category: 'Keyboards',
    price: '149.99',
    rating: 4.9,
    reviewCount: 230,
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60',
        alt: 'Mechanical Gaming Keyboard' 
      }
    ],
    variants: [
      { 
        id: 'v2',
        title: 'Blue Switch',
        price: '149.99',
        available: true
      }
    ]
  },
  {
    id: '3',
    title: 'Pro Gaming Headset',
    description: '7.1 surround sound gaming headset with noise cancellation',
    category: 'Audio',
    price: '89.99',
    rating: 4.7,
    reviewCount: 180,
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60',
        alt: 'Pro Gaming Headset' 
      }
    ],
    variants: [
      { 
        id: 'v3',
        title: 'Black',
        price: '89.99',
        available: true
      }
    ]
  },
  {
    id: '4',
    title: 'RGB Gaming Mouse',
    description: 'High-precision gaming mouse with customizable RGB',
    category: 'Accessories',
    price: '59.99',
    rating: 4.6,
    reviewCount: 150,
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=800&auto=format&fit=crop&q=60',
        alt: 'RGB Gaming Mouse' 
      }
    ],
    variants: [
      { 
        id: 'v4',
        title: 'Standard',
        price: '59.99',
        available: true
      }
    ]
  },
  {
    id: '5',
    title: 'Premium Gaming Chair',
    description: 'Ergonomic gaming chair with lumbar support',
    category: 'Furniture',
    price: '299.99',
    rating: 4.9,
    reviewCount: 200,
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1610395219791-21b0353e43cb?w=800&auto=format&fit=crop&q=60',
        alt: 'Premium Gaming Chair' 
      }
    ],
    variants: [
      { 
        id: 'v5',
        title: 'Black/Red',
        price: '299.99',
        available: true
      }
    ]
  },
  {
    id: '6',
    title: 'LED Strip Lights',
    description: 'Smart RGB LED strip for gaming setup ambiance',
    category: 'Lighting',
    price: '24.99',
    rating: 4.5,
    reviewCount: 90,
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1633006606017-f1f2c1d8f0e6?w=800&auto=format&fit=crop&q=60',
        alt: 'LED Strip Lights' 
      }
    ],
    variants: [
      { 
        id: 'v6',
        title: '2M Strip',
        price: '24.99',
        available: true
      }
    ]
  }
] 