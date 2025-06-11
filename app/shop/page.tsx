"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product, getProductsByCategory, getCategories } from "../lib/products";
import ShopFilters from "../components/ShopFilters";
import QuickView from "../components/QuickView";
import CyberButton from "../components/CyberButton";

const categories = getCategories();

// Get all unique sizes from products
const getAllSizes = () => {
  const sizes = new Set<string>();
  getProductsByCategory("all").forEach(product => {
    product.sizes.forEach(size => sizes.add(size));
  });
  return Array.from(sizes);
};

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("name");

  // Get filtered products
  const getFilteredProducts = () => {
    let filtered = getProductsByCategory(selectedCategory);

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
      );
    }

    // Apply price filter
    filtered = filtered.filter(
      product =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const products = getFilteredProducts();

  return (
    <div className="min-h-screen relative">
      {/* Futuristic Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32 relative overflow-hidden">
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
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              <span className="holographic">Future Shop</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of cutting-edge customizable apparel and witness the future of screen printing technology.
            </p>
            
            {/* Tech specs display */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">{products.length}</div>
                <div className="text-xs text-gray-400 font-medium">PRODUCTS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">∞</div>
                <div className="text-xs text-gray-400 font-medium">CUSTOMIZATION</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">24H</div>
                <div className="text-xs text-gray-400 font-medium">PRODUCTION</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Gallery */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="holographic">Featured Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the convergence of AI and artistry in our premium screen printing showcase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedGalleryItem
              src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=800&fit=crop&crop=center"
              alt="Custom Screen Printed Hoodies"
              title="Premium Hoodie Collection"
              description="High-quality custom screen printed hoodies with vibrant designs"
              index={0}
            />
            <FeaturedGalleryItem
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&crop=center"
              alt="Custom T-Shirt Designs"
              title="Custom T-Shirt Gallery"
              description="Bold typography and creative custom t-shirt designs"
              index={1}
            />
            <FeaturedGalleryItem
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&h=800&fit=crop&crop=center"
              alt="Team Apparel Collection"
              title="Team & Business Apparel"
              description="Professional team uniforms and business branded merchandise"
              index={2}
            />
          </div>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Futuristic Filters Sidebar */}
          <motion.div 
            className="w-full lg:w-80 flex-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="sticky top-28">
              <div className="glass-card-enhanced p-6 scan-lines">
                <h2 className="text-xl font-black mb-6 neon-text">CATEGORIES</h2>
                <div className="space-y-3">
                  <CategoryButton
                    label="All Products"
                    isSelected={selectedCategory === "all"}
                    onClick={() => setSelectedCategory("all")}
                  />
                  {categories.map((category) => (
                    <CategoryButton
                      key={category}
                      label={category}
                      isSelected={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    />
                  ))}
                </div>

                {/* Advanced Filters */}
                <div className="mt-8">
                  <ShopFilters
                    onSearch={setSearchTerm}
                    onPriceRange={(min, max) => setPriceRange({ min, max })}
                    onSizeFilter={setSelectedSizes}
                    availableSizes={getAllSizes()}
                  />
                </div>

                {/* Custom Order CTA */}
                <motion.div 
                  className="mt-8 glass-card-enhanced p-6 neon-border relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <h3 className="text-lg font-black mb-2 text-gradient">CUSTOM DESIGNS?</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Our AI-enhanced design system can bring any vision to reality.
                  </p>
                  <Link href="/contact">
                    <CyberButton variant="neon" size="sm">
                      Get Quote
                    </CyberButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="flex-grow"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Sort Options */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 glass-card-enhanced p-6">
              <div>
                <p className="text-lg font-black text-gradient">
                  {products.length} PRODUCTS DETECTED
                </p>
                <p className="text-sm text-gray-600 font-mono">
                  {selectedCategory !== "all" && `CATEGORY: ${selectedCategory.toUpperCase()}`}
                </p>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="cyber-btn px-4 py-2 text-sm font-bold bg-transparent"
              >
                <option value="name">SORT BY NAME</option>
                <option value="price-asc">PRICE: LOW → HIGH</option>
                <option value="price-desc">PRICE: HIGH → LOW</option>
              </select>
            </div>

            {/* Products Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onQuickView={() => setQuickViewProduct(product)}
                />
              ))}
            </motion.div>

            {products.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card-enhanced p-12">
                  <h3 className="text-2xl font-black mb-4 neon-text">NO PRODUCTS FOUND</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters or search terms.</p>
                  <CyberButton 
                    variant="secondary"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchTerm("");
                      setPriceRange({ min: 0, max: Infinity });
                      setSelectedSizes([]);
                    }}
                  >
                    RESET FILTERS
                  </CyberButton>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          isOpen={true}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}

// Component Definitions
const FeaturedGalleryItem = ({ 
  src, 
  alt, 
  title, 
  description,
  index
}: { 
  src: string; 
  alt: string; 
  title: string; 
  description: string;
  index: number;
}) => (
  <motion.div 
    className="group relative overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
  >
    <div className="glass-card-enhanced relative overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
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

        {/* HUD overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <h3 className="text-xl font-black mb-2 neon-text">{title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

const CategoryButton = ({ 
  label, 
  isSelected, 
  onClick 
}: { 
  label: string; 
  isSelected: boolean; 
  onClick: () => void; 
}) => (
  <motion.button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
      isSelected 
        ? 'bg-gradient-to-r from-brand-primary to-brand-accent-1 text-black neon-glow' 
        : 'text-gray-600 hover:text-brand-primary hover:bg-brand-primary/10 cyber-btn'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {label.toUpperCase()}
  </motion.button>
);

const ProductCard = ({ 
  product, 
  index, 
  onQuickView 
}: { 
  product: Product; 
  index: number; 
  onQuickView: () => void; 
}) => (
  <motion.div
    className="group relative"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
  >
    <div className="glass-card-enhanced relative overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
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

        {/* Quick view button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <CyberButton variant="neon" size="sm" onClick={onQuickView}>
            QUICK VIEW
          </CyberButton>
        </motion.div>

        {/* Price badge */}
        <motion.div 
          className="absolute top-4 left-4 glass-card p-2 text-xs font-mono text-brand-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          ${product.price}
        </motion.div>

        {/* Customizable badge */}
        {product.customizable && (
          <motion.div 
            className="absolute top-4 right-4 cyber-btn px-3 py-1 text-xs font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            AI CUSTOM
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-black mb-2 text-gradient">{product.name}</h3>
        <p className="text-gray-600 mb-4 font-mono text-sm">
          {product.colors?.join(" • ") || "Various colors"}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-black neon-text">${product.price}</span>
          {product.minOrder && product.minOrder > 1 && (
            <span className="text-xs text-gray-500 cyber-btn px-2 py-1">
              MIN: {product.minOrder}
            </span>
          )}
        </div>
        
        <Link href={`/product/${product.id}`}>
          <CyberButton variant="secondary" size="sm">
            VIEW DETAILS
          </CyberButton>
        </Link>
      </div>

      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);
