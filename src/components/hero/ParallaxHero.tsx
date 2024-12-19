import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ParallaxHero() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const y = useSpring(useMotionValue(0), springConfig);
  const opacity = useSpring(useMotionValue(1), springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isMounted) return;

    const unsubscribeY = scrollY.onChange(latest => {
      y.set(latest * 0.3); // Parallax effect
      opacity.set(Math.max(1 - latest / 300, 0)); // Fade out effect
    });

    return () => {
      unsubscribeY();
    };
  }, [scrollY, y, opacity, isMounted]);

  const rotateX = useSpring(
    useTransform(mouseY, [0, window.innerHeight], [5, -5]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, window.innerWidth], [-5, 5]),
    springConfig
  );

  if (!isMounted) return null;

  return (
    <motion.div 
      style={{ 
        y,
        opacity,
        rotateX,
        rotateY,
        perspective: 1000
      }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_70%)]" />
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')`
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </motion.div>
  );
}