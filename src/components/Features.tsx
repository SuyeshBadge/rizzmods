import React from 'react';

const features = [
  {
    icon: FaShieldAlt,
    title: 'Premium Quality',
    description: 'Premium prints built to last',
  },
  {
    icon: FaPalette,
    title: 'Unique Designs',
    description: 'Exclusive art tailored for gamers',
  },
  {
    icon: FaTruck,
    title: 'Fast Shipping',
    description: 'Delivered to your door in record time',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}