import { Metadata } from "next";
import { Product, getProductById } from "../../lib/products";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: "Product Not Found | BthePrints",
      description: "Sorry, we couldn't find the product you're looking for.",
    };
  }
  
  return {
    title: `${product.name} | BthePrints`,
    description: product.description,
    openGraph: {
      title: `${product.name} | BthePrints`,
      description: product.description,
      images: [
        {
          url: product.image || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | BthePrints`,
      description: product.description,
      images: [product.image || "/images/og-image.jpg"],
    },
  };
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "../../lib/store";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { addItem } = useCartStore();
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link href="/shop" className="text-black hover:underline">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    setIsAdding(true);
    
    // Add to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: quantity
    });
    
    // Show success message
    setTimeout(() => {
      setIsAdding(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
          <div className="text-gray-500">Image Placeholder</div>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-medium text-gray-900 mt-2">${product.price.toFixed(2)}</p>
          
          <div className="mt-6">
            <p className="text-gray-700">{product.description}</p>
            
            {product.colors && product.colors.length > 0 && (
              <div className="mt-4">
                <h2 className="text-sm font-medium text-gray-900">Available Colors</h2>
                <div className="mt-2">
                  <p className="text-gray-600">{product.colors.join(", ")}</p>
                </div>
              </div>
            )}
            
            {product.customizable && (
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <h2 className="text-sm font-medium text-gray-900">Customization Available</h2>
                <p className="mt-1 text-sm text-gray-600">
                  This item can be customized with your own designs. Contact us for custom orders and bulk pricing.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-block text-sm text-black hover:underline"
                >
                  Request Custom Design →
                </Link>
              </div>
            )}
          </div>
          
          {product.available ? (
            <div className="mt-8 space-y-6">
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Added to cart!
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <h2 className="text-sm font-medium text-gray-900">Size</h2>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`border rounded-md py-2 px-3 flex items-center justify-center text-sm font-medium ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {product.minOrder && product.minOrder > 1 ? (
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity (Minimum: {product.minOrder})
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm border"
                  >
                    {Array.from(
                      { length: 10 }, 
                      (_, i) => i + (product.minOrder || 1)
                    ).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm border"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              <button
                onClick={handleAddToCart}
                disabled={isAdding || !selectedSize}
                className="w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
              >
                {isAdding ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-red-600">Sorry, this product is currently unavailable.</p>
            </div>
          )}
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-sm font-medium text-gray-900">Shipping</h2>
            <p className="mt-2 text-sm text-gray-500">
              Orders typically ship within 3-5 business days.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <Link href="/shop" className="text-sm font-medium text-black hover:underline">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}
