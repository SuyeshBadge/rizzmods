export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const updateMetaTags = ({
  title,
  description,
  image = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
  url = 'https://rizzmods.com/'
}: SEOProps) => {
  // Update basic meta tags
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);

  // Update Open Graph meta tags
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);

  // Update Twitter meta tags
  document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', image);
  document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', url);
};