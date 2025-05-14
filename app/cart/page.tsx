"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "../lib/store";

export default function Cart() {
  // To handle hydration issues with localStorage
  const [isClient, setIsClient] = useState(false);
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Calculate totals
  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  if (!isClient) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500 mb-6">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="py-6 flex flex-col sm:flex-row"
                >
                  <div className="flex-shrink-0 bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 rounded-md flex items-center justify-center">
                    <div className="text-gray-500">Image</div>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                      </div>
                      <p className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <div>
                        <label htmlFor={`quantity-${item.id}-${item.size}`} className="sr-only">
                          Quantity
                        </label>
                        <select
                          id={`quantity-${item.id}-${item.size}`}
                          name={`quantity-${item.id}-${item.size}`}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, item.size, Number(e.target.value))}
                          className="rounded-md border border-gray-300 text-base py-1 px-2 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                href="/shop"
                className="text-sm font-medium text-black hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-base text-gray-500">Subtotal</p>
                  <p className="text-base font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-base text-gray-500">Shipping</p>
                  <p className="text-base font-medium text-gray-900">${shipping.toFixed(2)}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <p className="text-base font-medium text-gray-900">Total</p>
                  <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="w-full bg-black border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
