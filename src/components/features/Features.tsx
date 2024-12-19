import React from 'react';
import FeatureCard from './FeatureCard';
import SectionTitle from '../shared/SectionTitle';
import { motion } from 'framer-motion';
import { featuresList } from './featuresList';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Discover the RizzMods Difference"
          alignment="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}