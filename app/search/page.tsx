"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product, products } from "../lib/products";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Search logic
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filteredProducts);
      setIsLoading(false);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-8">
        <SearchBar />
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {query ? `Search results for "${query}"` : "Search prints"}
        </h1>
        <p className="text-gray-600">
          {results.length} {results.length === 1 ? "result" : "results"} found
        </p>
      </div>
      
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Searching...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-64 w-full bg-gray-200 relative">
                  {/* Replace with actual images when available */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              <Link
                href={`/product/${product.id}`}
                className="mt-2 block text-sm font-medium text-black hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-6">
            No prints found matching "{query}". Try a different search term or browse our categories.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Browse All Prints
          </Link>
        </div>
      )}
    </div>
  );
} 