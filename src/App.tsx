import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import ProductShowcase from './components/products/ProductShowcase';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import SEOHead from './components/shared/SEOHead';
import SchemaMarkup from './components/shared/SchemaMarkup';
import { generateOrganizationSchema } from './utils/schema';

function App() {
  return (
    <>
      <SEOHead
        title="RizzMods - Premium Gaming Merchandise & Collectibles"
        description="Discover exclusive gaming merchandise at RizzMods. Premium quality gaming collectibles, stickers, and posters crafted for gamers."
      />
      <SchemaMarkup schema={generateOrganizationSchema()} />
      
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <Features />
        <ProductShowcase />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;