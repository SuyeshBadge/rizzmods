import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaTrophy, FaGamepad, FaHeart, FaUsers, FaDiscord, FaTwitter, FaTwitch } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { RiSparklingFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// Update the IMAGES constant with new background images
const IMAGES = {
  // Dark, premium gaming setup with RGB lighting
  pageBg: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&q=80",
  // Modern gaming/tech background
  heroBg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" // Gaming setup with RGB
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

  // Add floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingDelayedAnimation = {
    initial: { y: 0 },
    animate: {
      y: [10, -10, 10],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  // Add mouse position state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimize cursor variants for smoother movement
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.2
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      opacity: 0.8,
      backgroundColor: "rgba(168, 85, 247, 0.15)",
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.2
      }
    }
  };

  // Optimize mouse tracking
  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        
        // Smooth interpolation
        const targetX = e.clientX - rect.left;
        const targetY = e.clientY - rect.top;
        
        const updatePosition = () => {
          lastX += (targetX - lastX) * 0.15;
          lastY += (targetY - lastY) * 0.15;
          
          setMousePosition({ x: lastX, y: lastY });
          
          rafId = requestAnimationFrame(updatePosition);
        };
        
        updatePosition();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Optimize glow effect
  const glowEffect = {
    animate: {
      background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(168, 85, 247, 0.03), 
                  transparent 40%)`,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.2
      }
    }
  };

  // Add scroll progress state
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Add smooth scroll function
  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Custom Cursor - Simplified */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 border border-purple-500/30 hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
      />

      {/* Fixed Background Image - Maximum Darkness */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(0, 0, 0, 0.9), 
              rgba(0, 0, 0, 0.9)
            ),
            linear-gradient(to right,
              rgba(0, 0, 0, 0.9),
              rgba(88, 28, 135, 0.1),
              rgba(0, 0, 0, 0.9)
            ),
            url(${IMAGES.pageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.5) contrast(1.2)'
        }}
      />

      {/* Main content wrapper - Even darker gradient */}
      <div className="pt-16 min-h-screen relative bg-gradient-to-b from-black via-black/95 to-black">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-20 left-[10%]"
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
          >
            <IoGameController size={48} className="text-purple-500" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-[15%]"
            initial="initial"
            animate="animate"
            variants={floatingDelayedAnimation}
          >
            <RiSparklingFill size={36} className="text-blue-500" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-[20%]"
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
          >
            <IoGameController size={32} className="text-purple-400 rotate-45" />
          </motion.div>
        </div>

        {/* Enhanced Hero Section */}
        <motion.div 
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Background with Parallax Effect */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom, 
                    rgba(0, 0, 0, 0.9), 
                    rgba(0, 0, 0, 0.9)
                  ),
                  linear-gradient(to right,
                    rgba(0, 0, 0, 0.9),
                    rgba(88, 28, 135, 0.1),
                    rgba(0, 0, 0, 0.9)
                  ),
                  url(${IMAGES.heroBg})`,
                backgroundAttachment: 'fixed',
                filter: 'brightness(1.0) contrast(1.2)'
              }}
            />
            {/* Additional dark overlay */}
            <div className="absolute inset-0 bg-black/80" />
          </motion.div>

          {/* Content Container */}
          <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <Link 
                to="/"
                className="inline-block cursor-pointer group"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Outer Glow Ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-purple-500/20 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Inner Rotating Ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-purple-500/30"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />

                  {/* Sparkles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full"
                      style={{
                        top: `${50 + Math.cos(i * Math.PI * 2 / 3) * 60}%`,
                        left: `${50 + Math.sin(i * Math.PI * 2 / 3) * 60}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                        y: [-2, 2, -2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Logo Image with Hover Effect */}
                  <motion.img
                    src="/logo.png"
                    alt="RizzMods Logo"
                    className="relative w-[150px] h-[150px] rounded-full 
                             filter brightness-110 group-hover:brightness-125
                             transition-all duration-300 cursor-pointer"
                    animate={{
                      rotate: [0, -5, 0, 5, 0],
                      scale: [1, 1.02, 1, 1.02, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(168,85,247,0.5))"
                    }}
                  />

                  {/* Pulsing Highlight */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-white">About</span>{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 
                                 text-transparent bg-clip-text">
                  RizzMods
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-purple-200 font-light max-w-2xl mx-auto leading-relaxed
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                "Crafting premium gaming experiences through exceptional collectibles"
              </motion.p>

              {/* Added CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 
                           rounded-lg text-white font-semibold text-lg
                           hover:from-purple-700 hover:to-purple-900 
                           transition-all duration-300 shadow-lg shadow-purple-500/20
                           border border-purple-500/20"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Explore Our Collection
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={scrollToContent}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full p-1 hover:border-purple-300 transition-colors">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mx-auto animate-scroll" />
            </div>
          </motion.div>
        </motion.div>

        {/* Main content container - Add padding to prevent content touching edges */}
        <div id="main-content" className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
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
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
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
                  title: ' Our Mission',
                  content: `We're on a mission to transform ordinary gaming gear into extraordinary masterpieces! Every product we create is a perfect blend of functionality and artistic expression, designed to make your gaming setup truly unique. 

                  But it's not just about looking cool  we're here to enhance your gaming experience and bring your personality to life through our custom designs. Whether you're a casual player or a pro streamer, we're committed to helping you stand out in style! 💫`
                },
                {
                  title: '⭐ Quality Promise',
                  content: `Quality isn't just a buzzword for us – it's our obsession! Each RizzMods product goes through a rigorous 3-step quality assurance process, tested by real gamers in real gaming conditions. We source premium materials from trusted partners worldwide and work directly with leading gaming brands to ensure authenticity.

                  We're so confident in our craftsmanship that we offer a "Gamer's Honor" guarantee  if you're not absolutely thrilled with your purchase, we'll make it right! 🛡️`
                }
              ].map(({ title, content }) => (
                <motion.section
                  key={title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 1,
                      bounce: 0.3
                    }
                  }}
                  viewport={{ 
                    once: true, 
                    margin: "-100px",
                    amount: 0.3 
                  }}
                  className="bg-purple-900/10 p-8 md:p-12 rounded-2xl border border-purple-500/20 
                            hover:border-purple-500/40 transition-all duration-300"
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

      {/* Optimize mouse glow effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-30 hidden md:block"
        variants={glowEffect}
        animate="animate"
      />

      {/* Add progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
    </div>
  );
};

export default About; 