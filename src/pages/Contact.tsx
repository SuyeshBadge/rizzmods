import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaTwitch, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { RiSparklingFill } from 'react-icons/ri';

const IMAGES = {
  contactBg: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80",
  glowBg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form after success
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Our Studio',
      content: '123 Gaming Street, Digital City, 12345',
      link: 'https://maps.google.com',
      description: 'Mon-Fri: 9AM - 6PM EST'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: '24/7 Support Available'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      content: 'support@rizzmods.com',
      link: 'mailto:support@rizzmods.com',
      description: 'Response within 24 hours'
    }
  ];

  const socialLinks = [
    { 
      icon: FaDiscord, 
      label: 'Discord', 
      href: '#', 
      color: '#5865F2',  // Updated Discord brand color
      hoverBg: 'rgba(88, 101, 242, 0.2)' 
    },
    { 
      icon: FaTwitter, 
      label: 'Twitter', 
      href: '#', 
      color: '#1DA1F2',
      hoverBg: 'rgba(29, 161, 242, 0.2)' 
    },
    { 
      icon: FaTwitch, 
      label: 'Twitch', 
      href: '#', 
      color: '#9146FF',
      hoverBg: 'rgba(145, 70, 255, 0.2)' 
    }
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

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
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

      {/* Optimized Background Pattern - Only show on desktop */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url(${IMAGES.contactBg})`,
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          transform: 'rotate(-15deg) scale(1.2)',
          filter: 'grayscale(1) contrast(1.2) blur(1px)',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          willChange: 'transform', // Optimize transform performance
        }}
      />

      {/* Optimized Glow Effect - Simplified for mobile */}
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${IMAGES.glowBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'soft-light',
          willChange: 'transform', // Optimize transform performance
        }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Optimized header animations */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">
            Get in <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
            Have questions? We're here to help elevate your gaming experience.
          </p>
        </motion.div>

        {/* Optimize grid layout for mobile */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Simplified animations for mobile */}
          <motion.div 
            className="bg-purple-950/30 p-6 md:p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm
                     shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            {...fadeInUp}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-purple-200 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-purple-950/40 border border-purple-500/40 rounded-lg p-3 text-white 
                             focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 
                             transition-all duration-300 placeholder-purple-300/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-purple-200 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-purple-950/40 border border-purple-500/40 rounded-lg p-3 text-white 
                             focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 
                             transition-all duration-300 placeholder-purple-300/50"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-purple-200 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-purple-950/40 border border-purple-500/40 rounded-lg p-3 text-white 
                           focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 
                           transition-all duration-300 placeholder-purple-300/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-purple-200 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-purple-950/40 border border-purple-500/40 rounded-lg p-3 text-white 
                           focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 
                           transition-all duration-300 placeholder-purple-300/50 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                           hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 
                           text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 
                           flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20
                           ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <FaArrowRight className="ml-2" />}
                {isSubmitting && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                )}
              </motion.button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-300 text-center bg-green-500/10 p-3 rounded-lg border border-green-500/30"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-300 text-center bg-red-500/10 p-3 rounded-lg border border-red-500/30"
                >
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information - Simplified animations for mobile */}
          <motion.div 
            className="space-y-4 md:space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {contactInfo.map(({ icon: Icon, title, content, link, description }) => (
              <motion.a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-purple-950/30 p-4 md:p-6 rounded-xl border border-purple-500/30 
                         hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm
                         shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                whileHover={{ scale: 1.01 }} // Reduced scale effect
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-purple-100 font-semibold">{title}</h3>
                    <p className="text-purple-200">{content}</p>
                    <p className="text-sm text-purple-300 mt-1">{description}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links - Simplified for mobile */}
            <div className="bg-purple-950/30 p-4 md:p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm
                          shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <h3 className="text-purple-100 font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="bg-purple-900/40 p-3 md:p-4 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }} // Reduced scale effect
                    whileTap={{ scale: 0.98 }}
                    style={{
                      boxShadow: `0 0 10px ${color}20` // Reduced shadow
                    }}
                  >
                    <Icon 
                      className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300" 
                      style={{ 
                        color: color,
                        filter: 'brightness(1.2)'
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 