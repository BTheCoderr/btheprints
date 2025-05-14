'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../../lib/products';
import { getProductById } from '../../lib/products';
import { useCart } from '../../hooks/useCart';

interface ClientPageProps {
  params: {
    id: string;
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const product = getProductById(params.id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor && product.colors && product.colors.length > 0) {
      alert('Please select a color');
      return;
    }
    if (product.minOrder && quantity < product.minOrder) {
      alert(`Minimum order quantity is ${product.minOrder}`);
      return;
    }

    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
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
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedColor === color
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-md"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
            </div>
            {product.minOrder && (
              <p className="text-sm text-gray-500 mt-1">
                Minimum order: {product.minOrder} items
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
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

          {/* Customization Note */}
          {product.customizable && (
            <p className="text-sm text-gray-600 mt-4">
              This item can be customized. Please contact us for custom orders.
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 