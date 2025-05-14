"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryItems = [
  {
    id: "1",
    image: "/images/placeholders/gallery-placeholder.jpg",
    title: "514 Collection",
    description: "Custom buffalo plaid sets featuring the iconic 514 logo",
    category: "Sets"
  },
  {
    id: "2",
    image: "/images/placeholders/gallery-placeholder.jpg",
    title: "Thatz Finesse",
    description: "Exclusive tracksuit sets with custom designs",
    category: "Sets"
  },
  {
    id: "3",
    image: "/images/placeholders/gallery-placeholder.jpg",
    title: "Custom Work",
    description: "Professional grade custom prints for any occasion",
    category: "Custom"
  }
];

const categories = ["All", "Apparel", "Sets", "Custom"];

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600">
            Check out some of our recent custom screen printing projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium ${
                  category === activeCategory
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } ${
                  category === categories[0]
                    ? "rounded-l-md"
                    : category === categories[categories.length - 1]
                    ? "rounded-r-md"
                    : ""
                } border border-gray-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Start Your Custom Project
          </Link>
        </div>
      </div>
    </section>
  );
} 