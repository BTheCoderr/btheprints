"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from 'framer-motion';
import CyberButton from './CyberButton';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  category?: string;
  colors?: string[];
  customizable?: boolean;
  minOrder?: number;
}

interface ProductGalleryProps {
  products?: Product[];
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  customizable?: boolean;
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&h=800&fit=crop&crop=center",
    title: "514 Collection",
    description: "Custom buffalo plaid sets featuring the iconic 514 logo",
    category: "Sets"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=800&fit=crop&crop=center",
    title: "Thatz Finesse",
    description: "Exclusive tracksuit sets with custom designs",
    category: "Sets"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&h=800&fit=crop&crop=center",
    title: "Custom Work",
    description: "Professional grade custom prints for any occasion",
    category: "Custom"
  }
];

const categories = ["All", "Apparel", "Sets", "Custom"];

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // If products are passed, transform them to gallery format
  const galleryItems: GalleryItem[] = products ? products.map(product => ({
    id: product.id,
    image: product.image,
    title: product.name,
    description: `${product.colors?.join(", ") || "Multiple colors available"} - Starting at $${product.price}`,
    category: product.category || "Custom",
    price: product.price,
    customizable: product.customizable
  })) : defaultGalleryItems;
  
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!products && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="holographic">Our Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convergence of technology and artistry in our custom screen printing portfolio
            </p>
          </motion.div>
        )}

        {/* Futuristic Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card-enhanced p-2 rounded-2xl">
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                    category === activeCategory
                      ? "bg-gradient-to-r from-brand-primary to-brand-accent-1 text-black neon-glow"
                      : "text-gray-600 hover:text-brand-primary hover:bg-brand-primary/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Futuristic Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="glass-card-enhanced relative overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Holographic overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Scan lines effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      y: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Customizable badge */}
                  {item.customizable && (
                    <motion.div 
                      className="absolute top-4 right-4 cyber-btn px-3 py-1 text-xs font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      AI CUSTOMIZABLE
                    </motion.div>
                  )}

                  {/* HUD-style price display */}
                  {item.price && (
                    <motion.div 
                      className="absolute top-4 left-4 glass-card p-2 text-xs font-mono text-brand-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      PRICE: ${item.price}
                    </motion.div>
                  )}

                  {/* Interactive content overlay */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <h3 className="text-xl font-black mb-2 neon-text">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">{item.description}</p>
                    
                    {products && (
                      <Link href={`/product/${item.id}`}>
                        <CyberButton variant="neon" size="sm">
                          View Details
                        </CyberButton>
                      </Link>
                    )}
                  </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Futuristic CTA */}
        {!products && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <CyberButton variant="neon" size="lg" glitchEffect>
                🚀 Initialize Custom Project
              </CyberButton>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
} 