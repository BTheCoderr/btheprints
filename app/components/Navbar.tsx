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
  const [isScrolled, setIsScrolled] = useState(false);
  const { getItemCount } = useCartStore();
  
  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card shadow-xl backdrop-blur-xl' 
        : 'bg-brand-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mantra banner */}
        <div className="text-center py-2 text-xs md:text-sm font-semibold">
          <span className="brand-gradient text-transparent bg-clip-text">
            YOU THINK IT, WE PRINT IT
          </span>
        </div>
        
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="bg-brand-primary rounded-xl p-3 transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-xl font-black text-brand-dark">B</span>
                </div>
                <div>
                  <div className="font-black text-xl text-gradient">BthePrints</div>
                  <div className="text-xs text-gray-400 font-medium">Custom Screen Printing</div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <SearchBar />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                <NavLink href="/" label="Home" />
                <NavLink href="/shop" label="Shop" />
                <NavLink href="/about" label="About" />
                <NavLink href="/contact" label="Contact" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="relative group">
                <div className="p-3 rounded-xl bg-gray-800/50 hover:bg-brand-primary/20 transition-all duration-300 group-hover:scale-110">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-300 group-hover:text-brand-primary transition-colors duration-300" />
                  {isClient && getItemCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-brand-primary text-brand-dark rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold pulse-glow">
                      {getItemCount()}
                    </span>
                  )}
                </div>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                type="button"
                className="ml-2 md:hidden p-3 rounded-xl bg-gray-800/50 hover:bg-brand-primary/20 text-gray-300 hover:text-brand-primary transition-all duration-300"
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
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-6 py-4">
            <SearchBar />
          </div>
          <div className="px-4 pb-4 space-y-2">
            <MobileNavLink href="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/shop" label="Shop" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/about" label="About" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/contact" label="Contact" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-brand-primary rounded-xl hover:bg-white/5 transition-all duration-300 relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => (
  <Link
    href={href}
    className="block px-4 py-3 text-base font-semibold text-gray-300 hover:bg-brand-primary/10 hover:text-brand-primary rounded-xl transition-all duration-300"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
