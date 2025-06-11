'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
                  
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-800 relative">
                    
                    {/* Tech Grid Overlay */}
                    <div className="absolute inset-0">
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(251, 174, 23, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 174, 23, 0.3) 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px',
                        }}
                        animate={{
                          backgroundPosition: ['0px 0px', '40px 40px'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>
                    
                    {/* Floating Data Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-primary rounded-full"
                        style={{
                          left: `${10 + (i * 12)}%`,
                          top: `${20 + (i * 8)}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3 + (i * 0.5),
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                    
                    {/* Data Stream Lines */}
                    <motion.div
                      className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent"
                      animate={{
                        opacity: [0, 1, 0],
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                    <motion.div
                      className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-brand-accent-1 to-transparent"
                      animate={{
                        opacity: [0, 1, 0],
                        x: ['100%', '-100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 2,
                      }}
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
                    
                    {/* Holographic Central Display */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <motion.div
                        className="w-24 h-24 border-2 border-brand-primary rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(251, 174, 23, 0.5)',
                            '0 0 40px rgba(251, 174, 23, 0.8)',
                            '0 0 20px rgba(251, 174, 23, 0.5)',
                          ],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <motion.div
                          className="text-brand-primary font-mono text-xs text-center"
                          animate={{
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          <div className="font-bold">PRINTING</div>
                          <div className="text-[8px] mt-1">PROTOCOL</div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Corner Brackets Animation */}
                    {[
                      { position: 'top-2 left-2', border: 'border-l-2 border-t-2' },
                      { position: 'top-2 right-2', border: 'border-r-2 border-t-2' },
                      { position: 'bottom-2 left-2', border: 'border-l-2 border-b-2' },
                      { position: 'bottom-2 right-2', border: 'border-r-2 border-b-2' },
                    ].map((bracket, i) => (
                      <motion.div
                        key={i}
                        className={`absolute ${bracket.position} w-6 h-6 ${bracket.border} border-brand-primary`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: [0.5, 1, 0.5], 
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                    
                    {/* HUD Elements with animations */}
                    <motion.div 
                      className="absolute top-4 left-4 text-xs font-mono text-brand-primary space-y-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <motion.div 
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        STATUS: <span className="text-green-400">ACTIVE</span>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        QUALITY: <span className="text-brand-primary">4K</span>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        MODE: <span className="text-blue-400">CUSTOM</span>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-4 right-4 text-xs font-mono text-brand-primary space-y-1 text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <motion.div
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        PROGRESS: <span className="text-green-400">100%</span>
                      </motion.div>
                      <motion.div
                        animate={{ 
                          opacity: [0.8, 1, 0.8],
                          textShadow: ['0 0 5px rgba(251, 174, 23, 0.5)', '0 0 15px rgba(251, 174, 23, 0.8)', '0 0 5px rgba(251, 174, 23, 0.5)']
                        }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                      >
                        OUTPUT: <span className="text-brand-primary font-bold">READY</span>
                      </motion.div>
                    </motion.div>
                    
                    {/* Processing Indicators */}
                    <div className="absolute top-1/2 left-4 space-y-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-brand-primary rounded-full"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
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