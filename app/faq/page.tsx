'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';

const faqData = [
  {
    question: "What is the typical processing time for orders?",
    answer: "Standard orders typically take 3-5 business days to process before shipping. Rush orders can be completed in 1-2 business days for an additional fee."
  },
  {
    question: "What file formats do you accept for custom designs?",
    answer: "We accept PNG, JPG, PDF, AI, EPS, and SVG files. For best quality, we recommend vector files (AI, EPS, SVG) at 300 DPI or higher."
  },
  {
    question: "Do you offer bulk pricing discounts?",
    answer: "Yes! We offer tiered pricing based on quantity. The more you order, the more you save. Contact us for custom quotes on large orders (50+ pieces)."
  },
  {
    question: "What types of apparel do you print on?",
    answer: "We print on t-shirts, hoodies, tank tops, long sleeves, and more. We carry premium brands like Bella+Canvas, Next Level, and Gildan in various colors and sizes."
  },
  {
    question: "Can you match specific colors?",
    answer: "We strive for the closest possible color match, but exact matches cannot be guaranteed due to differences in inks, fabrics, and printing processes. We recommend ordering a sample for critical color matching."
  },
  {
    question: "What's your return policy?",
    answer: "We accept returns within 14 days for defective products or our printing errors. Custom orders cannot be returned unless there's a defect or mistake on our part."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship within the United States only. We're working on expanding our shipping options to include international destinations in the future."
  },
  {
    question: "Can I see a proof before production?",
    answer: "Yes! We provide digital proofs for all custom orders. Production doesn't begin until you approve the proof. Additional revisions may incur extra charges."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* FAQ Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 holographic-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Knowledge Base
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Access our comprehensive information database. Find answers to common queries and system protocols.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="glass-panel rounded-2xl border border-brand-primary/30 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-primary/5 transition-all duration-300"
                  onClick={() => toggleItem(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg font-bold text-brand-primary holographic-text pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-6 h-6 border-2 border-brand-primary rounded-lg flex items-center justify-center">
                      <motion.div
                        className="w-3 h-0.5 bg-brand-primary rounded"
                        animate={{ 
                          scaleX: openItems.includes(index) ? 0 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.div
                        className="w-0.5 h-3 bg-brand-primary rounded absolute"
                        animate={{ 
                          scaleY: openItems.includes(index) ? 0 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-100 border-t border-brand-primary/20">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="pt-4"
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="glass-panel p-8 rounded-2xl border border-brand-primary/30">
              <h2 className="text-2xl font-bold text-brand-primary mb-4 holographic-text">
                Still Need Assistance?
              </h2>
              <p className="text-gray-100 mb-6">
                Can't find what you're looking for? Our support team is ready to help you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-accent-1 text-brand-dark font-bold rounded-xl border border-brand-primary hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.a>
                <motion.a
                  href="mailto:help@btheprints.com"
                  className="px-6 py-3 bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-bold rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cyber Grid Effect */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Scan Lines */}
      <div className="absolute inset-0 scan-lines opacity-20" />
    </div>
  );
} 