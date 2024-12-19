import React from 'react';
import { motion } from 'framer-motion';
import { FeatureType } from './types';

interface FeatureCardProps extends FeatureType {
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function FeatureCard({ icon: Icon, title, description, benefits, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-500/20 backdrop-blur-sm h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
            <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
              {description}
            </p>
            
            {benefits && benefits.length > 0 && (
              <ul className="space-y-2">
                {benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}