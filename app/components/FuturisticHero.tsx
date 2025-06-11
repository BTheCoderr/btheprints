'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import CyberButton from './CyberButton';

export default function FuturisticHero() {
  return (
    <section className="hero-gradient text-white py-24 md:py-32 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent-1/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Custom</span>
              <motion.span 
                className="block holographic"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Screen Printing
              </motion.span>
              <motion.span 
                className="block text-4xl md:text-5xl lg:text-6xl font-light neon-text mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                For the Future
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the next generation of custom apparel creation where 
              <span className="italic text-brand-primary font-semibold"> AI meets artistry</span> and 
              <span className="holographic font-bold"> dreams become reality</span>.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/shop">
                <CyberButton variant="neon" size="lg" glitchEffect>
                  🚀 Enter the Future
                </CyberButton>
              </Link>
              <Link href="/contact">
                <CyberButton variant="secondary" size="lg">
                  💬 Start Transmission
                </CyberButton>
              </Link>
            </motion.div>

            {/* Tech specs display */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">24H</div>
                <div className="text-xs text-gray-400 font-medium">TURNAROUND</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">∞</div>
                <div className="text-xs text-gray-400 font-medium">POSSIBILITIES</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">4K</div>
                <div className="text-xs text-gray-400 font-medium">RESOLUTION</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="floating-delayed"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="glass-card-enhanced p-8 relative overflow-hidden">
                  {/* Holographic border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(251, 174, 23, 0.3), transparent, rgba(241, 90, 34, 0.3), transparent)',
                      backgroundSize: '400% 400%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 relative">
                    <Image
                      src="/images/placeholders/hero-placeholder.jpg"
                      alt="Futuristic Screen Printing Process"
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Scan lines overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent"
                      animate={{
                        y: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* HUD Elements */}
                    <div className="absolute top-4 left-4 text-xs font-mono text-brand-primary">
                      <div>STATUS: ACTIVE</div>
                      <div>QUALITY: 4K</div>
                      <div>MODE: CUSTOM</div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 text-xs font-mono text-brand-primary">
                      <div>PROGRESS: 100%</div>
                      <div>OUTPUT: READY</div>
                    </div>
                  </div>

                  {/* Floating orbs */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-12 h-12 bg-brand-primary/80 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-8 h-8 bg-brand-accent-1/80 rounded-full"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-brand-primary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-brand-accent-1 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-4 h-4 bg-brand-accent-2 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 2,
        }}
      />
    </section>
  );
} 