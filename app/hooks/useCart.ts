'use client';

import { useState, useEffect } from 'react';
import { Product } from '../lib/products';

interface CartItem extends Product {
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}

interface CartHook {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export function useCart(): CartHook {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((currentCart) => {
      // Check if item already exists with same size and color
      const existingItemIndex = currentCart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const newCart = [...currentCart];
        newCart[existingItemIndex].quantity += item.quantity;
        return newCart;
      }

      // Add new item
      return [...currentCart, item];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  };
} 