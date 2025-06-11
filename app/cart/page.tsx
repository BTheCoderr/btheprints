"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from "../lib/store";
import ParticleBackground from '../components/ParticleBackground';
import CyberButton from '../components/CyberButton';

export default function Cart() {
  // To handle hydration issues with localStorage
  const [isClient, setIsClient] = useState(false);
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Calculate totals
  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-pulse holographic-text text-2xl">Loading cart data...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 holographic-text text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cart Protocol
          </motion.h1>
          
          {items.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-panel p-12 rounded-2xl border border-brand-primary/30 max-w-md mx-auto">
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 relative"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full border-4 border-brand-primary/40 rounded-full relative">
                    <div className="absolute inset-4 border-2 border-brand-primary/60 rounded-full">
                      <div className="absolute inset-2 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
                <p className="text-xl text-gray-300 mb-8 font-mono">Cart system offline</p>
                <CyberButton variant="primary" size="lg">
                  <Link href="/shop" className="flex items-center gap-2">
                    Initialize Shopping Protocol
                  </Link>
                </CyberButton>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Cart Items */}
              <motion.div 
                className="lg:col-span-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="glass-panel rounded-2xl border border-brand-primary/30 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-brand-primary mb-6 holographic-text">
                      Items in Queue
                    </h2>
                    <div className="space-y-6">
                      <AnimatePresence>
                        {items.map((item, index) => (
                          <motion.div
                            key={`${item.id}-${item.size}`}
                            className="flex flex-col sm:flex-row p-4 rounded-xl border border-brand-primary/20 bg-black/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            layout
                          >
                            {/* Product Image */}
                            <motion.div 
                              className="flex-shrink-0 bg-gradient-to-br from-brand-primary/20 to-purple-500/20 w-24 h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center border border-brand-primary/30 relative overflow-hidden"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="absolute inset-0 cyber-grid opacity-20"></div>
                              <div className="text-brand-primary font-mono text-sm relative z-10">IMG_DATA</div>
                              <div className="absolute top-1 right-1 w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                            </motion.div>
                            
                            <div className="mt-4 sm:mt-0 sm:ml-6 flex-1 flex flex-col">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="text-lg font-bold text-brand-primary holographic-text">{item.name}</h3>
                                  <p className="mt-1 text-sm text-gray-400 font-mono">SIZE: {item.size}</p>
                                </div>
                                <motion.p 
                                  className="text-lg font-bold text-brand-accent-1"
                                  animate={{ textShadow: ['0 0 5px rgba(251, 174, 23, 0.5)', '0 0 10px rgba(251, 174, 23, 0.8)', '0 0 5px rgba(251, 174, 23, 0.5)'] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  ${item.price.toFixed(2)}
                                </motion.p>
                              </div>
                              
                              <div className="mt-4 flex-1 flex items-end justify-between">
                                <div className="flex items-center gap-4">
                                  <label htmlFor={`quantity-${item.id}-${item.size}`} className="text-sm text-gray-400 font-mono">
                                    QTY:
                                  </label>
                                  <select
                                    id={`quantity-${item.id}-${item.size}`}
                                    name={`quantity-${item.id}-${item.size}`}
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, item.size, Number(e.target.value))}
                                    className="bg-black/40 border border-brand-primary/50 text-brand-primary rounded-lg py-2 px-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary"
                                  >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                      <option key={num} value={num} className="bg-gray-900">
                                        {num}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                
                                <motion.button
                                  type="button"
                                  onClick={() => removeItem(item.id, item.size)}
                                  className="text-sm font-medium text-red-400 hover:text-red-300 flex items-center gap-2 p-2 rounded-lg border border-red-400/30 hover:border-red-400/60 hover:bg-red-400/10 transition-all duration-300"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <TrashIcon className="h-4 w-4" />
                                  DELETE
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  <div className="border-t border-brand-primary/20 p-6">
                    <Link
                      href="/shop"
                      className="text-sm font-medium text-brand-primary hover:text-brand-accent-1 flex items-center gap-2 font-mono transition-colors duration-300"
                    >
                      ← CONTINUE_SHOPPING.exe
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Order Summary */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="glass-panel rounded-2xl border border-brand-primary/30 p-6 sticky top-6">
                  <h2 className="text-2xl font-bold text-brand-primary mb-6 holographic-text">Order Analysis</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-brand-primary/20">
                      <p className="text-gray-400 font-mono">SUBTOTAL:</p>
                      <p className="text-brand-accent-1 font-bold">${subtotal.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-brand-primary/20">
                      <p className="text-gray-400 font-mono">SHIPPING:</p>
                      <p className="text-brand-accent-1 font-bold">${shipping.toFixed(2)}</p>
                    </div>
                    
                    <motion.div 
                      className="flex justify-between items-center py-4 border-2 border-brand-primary rounded-lg px-4 bg-brand-primary/5"
                      animate={{ 
                        boxShadow: [
                          '0 0 5px rgba(251, 174, 23, 0.3)',
                          '0 0 15px rgba(251, 174, 23, 0.5)',
                          '0 0 5px rgba(251, 174, 23, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-xl font-bold text-brand-primary font-mono">TOTAL:</p>
                      <p className="text-xl font-bold text-brand-accent-1">${total.toFixed(2)}</p>
                    </motion.div>
                  </div>
                  
                  <CyberButton variant="primary" size="lg" className="w-full">
                    <Link href="/checkout" className="flex items-center justify-center gap-2">
                      INITIATE CHECKOUT
                    </Link>
                  </CyberButton>

                  {/* Security Badge */}
                  <motion.div 
                    className="mt-6 p-3 bg-green-400/10 border border-green-400/30 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-xs text-green-400 font-mono">SECURE_TRANSACTION.ssl</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Cyber Grid Effect */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Scan Lines */}
      <div className="absolute inset-0 scan-lines opacity-20" />
    </div>
  );
}
