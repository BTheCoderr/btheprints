'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../lib/products';
import { useCart } from '../hooks/useCart';

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickView({ product, isOpen, onClose }: QuickViewProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">{product.description}</p>
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>

              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-2">Size</h3>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 text-sm border rounded-md ${
                          selectedSize === size
                            ? 'bg-black text-white border-black'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-2">Color</h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 text-sm border rounded-md ${
                          selectedColor === color
                            ? 'bg-black text-white border-black'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium mb-2">Quantity</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-1 border rounded-md"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-1 border rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.available}
                className={`w-full py-3 px-6 rounded-md text-white ${
                  product.available
                    ? 'bg-black hover:bg-gray-800'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {product.available ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 