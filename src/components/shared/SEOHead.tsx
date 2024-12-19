import React, { useEffect } from 'react';
import { SEOProps, updateMetaTags } from '../../utils/seo';

export default function SEOHead({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    updateMetaTags({ title, description, image, url });
  }, [title, description, image, url]);

  return null;
}