export const generateProductSchema = (product: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount || 0
    }
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RizzMods',
    description: 'Premium Gaming Merchandise & Collectibles',
    url: 'https://rizzmods.com',
    logo: 'https://rizzmods.com/logo.svg',
    sameAs: [
      'https://twitter.com/rizzmods',
      'https://instagram.com/rizzmods',
      'https://discord.gg/rizzmods'
    ]
  };
};