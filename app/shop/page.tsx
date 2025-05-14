"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product, getProductsByCategory, getCategories } from "../lib/products";
import ShopFilters from "../components/ShopFilters";
import QuickView from "../components/QuickView";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Custom Screen Printing</h1>
      
      {/* Featured Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/gallery/514-plaid-set.jpg"
              alt="514 Buffalo Plaid Set"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/gallery/thatz-finesse.jpg"
              alt="Thatz Finesse Collection"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/gallery/custom-work.jpg"
              alt="Custom Work Examples"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 flex-none">
          <div className="sticky top-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`block px-3 py-2 text-sm rounded-md w-full text-left capitalize ${
                  selectedCategory === "all"
                    ? "bg-black text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block px-3 py-2 text-sm rounded-md w-full text-left capitalize ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
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
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Need Custom Designs?</h3>
              <p className="text-sm text-gray-600 mb-4">We specialize in custom screen printing for any occasion.</p>
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-grow">
          {/* Sort Options */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {products.length} {products.length === 1 ? 'product' : 'products'} found
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            >
              <option value="name">Sort by Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative cursor-pointer"
                  onClick={() => setQuickViewProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {product.customizable && (
                    <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                      Customizable
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-75 px-4 py-2 rounded-md">
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.colors?.join(", ")}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                    {product.minOrder && product.minOrder > 1 && (
                      <span className="text-sm text-gray-500">
                        Min: {product.minOrder}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/product/${product.id}`}
                    className="mt-2 block text-sm font-medium text-black hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {products.length === 0 && (
            <p className="text-gray-500 text-center py-12">
              No products found with the selected filters.
            </p>
          )}
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
