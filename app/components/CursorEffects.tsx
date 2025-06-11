'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for interactive elements
    const handleElementHover = (variant: string) => {
      setCursorVariant(variant);
    };

    const addHoverListeners = () => {
      // Buttons and links
      const interactiveElements = document.querySelectorAll('button, a, input, textarea');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => handleElementHover('hover'));
        element.addEventListener('mouseleave', () => handleElementHover('default'));
      });

      // Text elements
      const textElements = document.querySelectorAll('h1, h2, h3, p');
      textElements.forEach(element => {
        element.addEventListener('mouseenter', () => handleElementHover('text'));
        element.addEventListener('mouseleave', () => handleElementHover('default'));
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Add listeners with a delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(251, 174, 23, 0.3)',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(251, 174, 23, 0.6)',
      mixBlendMode: 'difference' as const,
    },
    text: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: 'rgba(241, 90, 34, 0.4)',
      mixBlendMode: 'difference' as const,
    }
  };

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-primary/50 backdrop-blur-sm"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-brand-primary/30"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.3,
        }}
      />

      {/* Particle trail */}
      <ParticleTrail mousePosition={mousePosition} />
    </div>
  );
}

// Particle trail component
const ParticleTrail = ({ mousePosition }: { mousePosition: CursorPosition }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    opacity: number;
    scale: number;
  }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev];
        
        // Add new particle
        if (Math.random() > 0.7) {
          newParticles.push({
            id: Date.now() + Math.random(),
            x: mousePosition.x + (Math.random() - 0.5) * 20,
            y: mousePosition.y + (Math.random() - 0.5) * 20,
            opacity: 0.8,
            scale: Math.random() * 0.5 + 0.5,
          });
        }
        
        // Update existing particles
        return newParticles
          .map(particle => ({
            ...particle,
            opacity: particle.opacity * 0.95,
            scale: particle.scale * 0.98,
          }))
          .filter(particle => particle.opacity > 0.1);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed w-2 h-2 rounded-full bg-brand-primary pointer-events-none"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
          }}
          animate={{
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          transition={{
            duration: 0.1,
          }}
        />
      ))}
    </>
  );
}; 