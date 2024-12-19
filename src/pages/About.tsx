import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGamepad, FaHeart, FaUsers, FaDiscord, FaTwitter, FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Using direct Unsplash URLs for images
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80", // Gaming setup
  glowBg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80", // Abstract RGB
  controllerBg: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80" // Changed to a better controller image
};

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };


  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { icon: FaTrophy, value: '1000+', label: 'Products Delivered' },
    { icon: FaGamepad, value: '50+', label: 'Game Partnerships' },
    { icon: FaHeart, value: '98%', label: 'Customer Satisfaction' },
    { icon: FaUsers, value: '10K+', label: 'Community Members' }
  ];

  const socialLinks = [
    { icon: FaDiscord, label: 'Discord', href: '#' },
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaTwitch, label: 'Twitch', href: '#' }
  ];

  return (
    <div className="pt-16 min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-purple-900/10 to-black relative">
      {/* Background Pattern - Adjust containment and size */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url(${IMAGES.controllerBg})`,
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          transform: 'rotate(-15deg) scale(1.2)',
          filter: 'grayscale(1) contrast(1.2) blur(1px)',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          contain: 'paint'
        }}
      />
      
      {/* Glow Effects - Make fixed and adjust containment */}
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${IMAGES.glowBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'soft-light',
          contain: 'paint'
        }}
      />

      {/* Hero Section - Adjust overflow handling */}
      <motion.div 
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ contain: 'paint' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero background - Make fixed */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ 
            backgroundImage: `url(${IMAGES.heroBg})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        
        {/* Multiple animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"
              animate={{
                y: [-(i * 400), 1000],
                opacity: [0.2, 0]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            {...floatAnimation}
          >
            <Link 
              to="/"
              className="inline-block cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                src="/logo.png"
                alt="RizzMods Logo"
                className="mx-auto w-[120px] h-[120px] filter brightness-100 opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </Link>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            {...fadeInUp}
          >
            About <span className="text-purple-500">RizzMods</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-purple-300 font-light max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            "Crafting premium gaming experiences through exceptional collectibles"
          </motion.p>
        </div>
      </motion.div>

      {/* Main content container - Add padding to prevent content touching edges */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto"> {/* Increased max-width */}
          {/* Stats Section - Enhanced with magical effects */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div 
                key={label} 
                className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 
                           text-center relative overflow-hidden group hover:bg-purple-900/20 
                           transition-all duration-300 hover:border-purple-500/40"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Magical background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Sparkles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${20 + i * 25}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                      y: [-2, 2, -2]
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}

                {/* Icon container with glow effect */}
                <motion.div
                  className="relative mb-3 p-2 rounded-full bg-purple-900/30 w-16 h-16 mx-auto
                           flex items-center justify-center group-hover:bg-purple-900/40"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(147, 51, 234, 0)",
                      "0 0 20px 5px rgba(147, 51, 234, 0.2)",
                      "0 0 0 0 rgba(147, 51, 234, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 
                                 transition-colors relative z-10" />
                </motion.div>

                {/* Value with floating animation */}
                <motion.div 
                  className="text-3xl font-bold text-white mb-2 relative"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r 
                                 from-purple-300 via-purple-400 to-purple-300">
                    {value}
                  </span>
                </motion.div>

                {/* Label with hover effect */}
                <motion.div 
                  className="text-sm text-gray-400 group-hover:text-purple-300 
                             transition-colors relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Sections - Adjust spacing */}
          <div className="space-y-20"> {/* Increased vertical spacing */}
            {[
              {
                title: '🎮 Our Story',
                content: `What started as a late-night conversation among passionate gamers has blossomed into something extraordinary! Founded in 2020, RizzMods emerged from our shared dream of elevating gaming accessories to an art form. ✨

                From modding controllers in our garage to becoming a trusted name in the gaming community, our journey has been nothing short of amazing. We've faced challenges, celebrated victories, and learned countless lessons along the way. Today, we're proud to serve over 10,000 fellow gamers who share our passion for excellence! 🚀`
              },
              {
                title: '🎯 Our Mission',
                content: `We're on a mission to transform ordinary gaming gear into extraordinary masterpieces! Every product we create is a perfect blend of functionality and artistic expression, designed to make your gaming setup truly unique. 

                But it's not just about looking cool ��� we're here to enhance your gaming experience and bring your personality to life through our custom designs. Whether you're a casual player or a pro streamer, we're committed to helping you stand out in style! 💫`
              },
              {
                title: '⭐ Quality Promise',
                content: `Quality isn't just a buzzword for us – it's our obsession! Each RizzMods product goes through a rigorous 3-step quality assurance process, tested by real gamers in real gaming conditions. We source premium materials from trusted partners worldwide and work directly with leading gaming brands to ensure authenticity.

                We're so confident in our craftsmanship that we offer a "Gamer's Honor" guarantee – if you're not absolutely thrilled with your purchase, we'll make it right! 🛡️`
              }
            ].map(({ title, content }, index) => (
              <motion.section
                key={title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-purple-900/10 p-8 md:p-12 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              >
                <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </motion.section>
            ))}

            {/* Community Section - Adjust bottom padding */}
            <motion.section 
              className="text-center bg-purple-900/20 p-8 md:p-12 rounded-2xl border border-purple-500/20 mb-20"
              {...fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-6">🌟 Join Our Community</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to level up your gaming experience? Join our vibrant community of passionate gamers! 
                Get exclusive sneak peeks, participate in epic giveaways, and connect with fellow modding enthusiasts. 
                Whether you're a collector, creator, or just love awesome gaming gear, there's a place for you in the RizzMods family! 🎮✨
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="bg-purple-900/50 p-4 rounded-lg hover:bg-purple-900/70 transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.4, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 