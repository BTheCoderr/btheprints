"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "../lib/store";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Navbar = () => {
  // To handle hydration issues with localStorage
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount } = useCartStore();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="brand-header shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mantra banner */}
        <div className="text-center py-1 text-xs md:text-sm font-medium brand-gradient text-white">
          YOU THINK IT, WE PRINT IT
        </div>
        
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-brand-primary rounded p-2">
                  <span className="text-xl font-bold text-black">B</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-brand-primary">BthePrints</div>
                  <div className="text-xs text-gray-400">Custom Screen Printing</div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <SearchBar />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-brand-primary">
                  Home
                </Link>
                <Link href="/shop" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-brand-primary">
                  Shop
                </Link>
                <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-brand-primary">
                  About
                </Link>
                <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-brand-primary">
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="flex items-center">
              <Link href="/cart" className="relative p-2 text-gray-300 hover:text-brand-primary">
                <ShoppingCartIcon className="h-6 w-6" />
                {isClient && getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-primary text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {getItemCount()}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                type="button"
                className="ml-2 md:hidden p-2 text-gray-300 hover:text-brand-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-700 py-2">
          <div className="px-4 sm:px-6 py-3">
            <SearchBar />
          </div>
          <div className="px-4 sm:px-6 space-y-1 mt-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-brand-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-brand-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-brand-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-brand-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
