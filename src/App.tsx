import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import ProductShowcase from './components/products/ProductShowcase';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import SEOHead from './components/shared/SEOHead';
import SchemaMarkup from './components/shared/SchemaMarkup';
import { generateOrganizationSchema } from './utils/schema';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <SEOHead
        title="RizzMods - Premium Gaming Merchandise & Collectibles"
        description="Discover exclusive gaming merchandise at RizzMods. Premium quality gaming collectibles, stickers, and posters crafted for gamers."
      />
      <SchemaMarkup schema={generateOrganizationSchema()} />
      
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <ProductShowcase />
              <Newsletter />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;