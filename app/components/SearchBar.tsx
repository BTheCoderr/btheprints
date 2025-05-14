"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { products } from "../lib/products";
import Link from "next/link";

export default function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredProducts.slice(0, 5)); // Limit to 5 results
  }, [searchTerm]);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setShowResults(false);
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative w-full max-w-xs" ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => searchTerm.trim() !== "" && setShowResults(true)}
            placeholder="Search prints..."
            className="w-full rounded-md border border-gray-700 bg-gray-800 bg-opacity-80 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSearchResults([]);
                setShowResults(false);
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-brand-primary" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700">
          <ul className="max-h-60 overflow-auto py-1 text-base">
            {searchResults.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.id}`}
                  className="flex items-center px-4 py-2 hover:bg-gray-700"
                  onClick={() => {
                    setShowResults(false);
                    setSearchTerm("");
                  }}
                >
                  <div className="bg-gray-700 h-10 w-10 flex-shrink-0 rounded-md mr-3"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{product.name}</p>
                    <p className="text-sm text-gray-400 truncate">
                      ${product.price.toFixed(2)} - {product.category}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
            {searchResults.length > 0 && (
              <li className="px-4 py-2 text-center">
                <button
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
                    setShowResults(false);
                  }}
                  className="text-sm text-brand-primary hover:underline"
                >
                  See all results
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
} 