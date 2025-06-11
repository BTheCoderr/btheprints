'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState, useMemo, useEffect } from 'react';

interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  glitchEffect?: boolean;
  magneticEffect?: boolean;
}

export default function CyberButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  glitchEffect = false,
  magneticEffect = true,
}: CyberButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Generate deterministic binary pattern based on button text
  const binaryPattern = useMemo(() => {
    const text = typeof children === 'string' ? children : 'button';
    const pattern = [];
    for (let i = 0; i < 20; i++) {
      // Use text length and index to create deterministic pattern
      pattern.push((text.length + i) % 2 === 0 ? '1' : '0');
    }
    return pattern;
  }, [children]);

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-primary to-brand-accent-1 text-brand-dark border-brand-primary',
    secondary: 'bg-transparent border-brand-primary text-brand-primary hover:bg-brand-primary/10',
    ghost: 'bg-transparent border-transparent text-brand-primary hover:bg-brand-primary/5',
    neon: 'bg-transparent border-brand-primary text-brand-primary neon-border',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `
    relative overflow-hidden font-bold rounded-xl border transition-all duration-300
    ${variantClasses[variant]} ${sizeClasses[size]} ${className}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${glitchEffect ? 'glitch' : ''}
  `;

  // Prevent hydration mismatch by only showing interactive effects after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.button
      className={baseClasses}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      data-text={typeof children === 'string' ? children : ''}
      whileHover={magneticEffect && !disabled ? {
        scale: 1.05,
        y: -2,
        boxShadow: '0 10px 25px rgba(251, 174, 23, 0.3), 0 0 20px rgba(251, 174, 23, 0.2)',
      } : {}}
      whileTap={!disabled ? {
        scale: 0.95,
        y: 0,
      } : {}}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      {/* Scan Line Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Particle Burst on Click */}
      {isMounted && isPressed && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-primary rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 50,
                y: Math.sin((i * Math.PI * 2) / 8) * 50,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Neon Glow Effect */}
      {variant === 'neon' && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: isHovered 
              ? [
                  '0 0 5px rgba(251, 174, 23, 0.5)',
                  '0 0 20px rgba(251, 174, 23, 0.8)',
                  '0 0 5px rgba(251, 174, 23, 0.5)',
                ]
              : '0 0 5px rgba(251, 174, 23, 0.3)',
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Binary Code Effect */}
      <motion.div
        className="absolute inset-0 font-mono text-xs text-brand-primary/20 overflow-hidden pointer-events-none"
        animate={{
          opacity: isHovered && isMounted ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {isMounted && isHovered && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {binaryPattern.map((bit, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {bit}
              </motion.span>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Electric Arc Effect */}
      {isMounted && isHovered && variant === 'neon' && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q25,10 50,50 T100,50"
            stroke="rgba(251, 174, 23, 0.6)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      )}

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-brand-primary opacity-60" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-brand-primary opacity-60" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-brand-primary opacity-60" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-brand-primary opacity-60" />

      {/* Content */}
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
        animate={{
          textShadow: isHovered && variant === 'neon'
            ? '0 0 10px rgba(251, 174, 23, 0.8)'
            : '0 0 0px rgba(251, 174, 23, 0)',
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
} 